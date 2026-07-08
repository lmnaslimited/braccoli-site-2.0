"use client";

// import { usePostHog } from "posthog-js/react";
import { useFeatureFlagVariantKey, usePostHog } from 'posthog-js/react';
import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
// import posthog from "posthog-js";
import { ArrowRight } from "lucide-react";
import { Button } from "@repo/ui/components/ui/button";
import { cn } from "@repo/ui/lib/utils";
import { fnGetLensCloudContent, type TLensCloudContent } from "./content";

// Fixed launch date the countdown ticks down to (UTC to stay consistent across timezones).
// TODO: replace with the real LENS Cloud launch date.
const LAUNCH_DATE = new Date("2026-07-10T09:00:00Z");

type TtimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

// Locale-driven copy slices, so subcomponents never hold hardcoded strings.
type TCountdownLabels = TLensCloudContent["common"]["countdownLabels"];

// type TLensCloudVariant = "control" | "variant-b";

type TCountdownProps = {
  countdownUnits: { label: string; value: number }[];
  isLaunched: boolean;
  launchedMessage: string;
  compact?: boolean;
};

// Compute the remaining time between now and the launch date, clamped at zero.
function fnGetTimeLeft(): TtimeLeft {
  const LnDiff = LAUNCH_DATE.getTime() - Date.now();

  if (LnDiff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const LnSecond = 1000;
  const LnMinute = LnSecond * 60;
  const LnHour = LnMinute * 60;
  const LnDay = LnHour * 24;

  return {
    days: Math.floor(LnDiff / LnDay),
    hours: Math.floor((LnDiff % LnDay) / LnHour),
    minutes: Math.floor((LnDiff % LnHour) / LnMinute),
    seconds: Math.floor((LnDiff % LnMinute) / LnSecond),
  };
}

// Pad a countdown unit to two digits for a stable, premium look (e.g. 07 not 7).
function fnPad(iValue: number): string {
  return iValue.toString().padStart(2, "0");
}

// Owns the 1-second timer so only THIS small component re-renders every second,
// not the whole LensCloud page (which would re-run both variant trees + logs).
function LaunchCountdown({
  labels,
  launchedMessage,
  compact = false,
}: {
  labels: TCountdownLabels;
  launchedMessage: string;
  compact?: boolean;
}) {
  // Start null so server and first client render match; hydrate the real value on mount.
  const [StTimeLeft, fnSetTimeLeft] = useState<TtimeLeft | null>(null);

  useEffect(() => {
    fnSetTimeLeft(fnGetTimeLeft());
    const LtInterval = setInterval(() => {
      fnSetTimeLeft(fnGetTimeLeft());
    }, 1000);

    return () => clearInterval(LtInterval);
  }, []);

  const LaCountdownUnits: { label: string; value: number }[] = [
    { label: labels.days, value: StTimeLeft?.days ?? 0 },
    { label: labels.hours, value: StTimeLeft?.hours ?? 0 },
    { label: labels.minutes, value: StTimeLeft?.minutes ?? 0 },
    { label: labels.seconds, value: StTimeLeft?.seconds ?? 0 },
  ];

  const LbLaunched =
    StTimeLeft !== null &&
    StTimeLeft.days === 0 &&
    StTimeLeft.hours === 0 &&
    StTimeLeft.minutes === 0 &&
    StTimeLeft.seconds === 0;

  return (
    <CountdownPanel
      countdownUnits={LaCountdownUnits}
      isLaunched={LbLaunched}
      launchedMessage={launchedMessage}
      compact={compact}
    />
  );
}

function CountdownPanel({
  countdownUnits,
  isLaunched,
  launchedMessage,
  compact = false,
}: TCountdownProps) {
  if (isLaunched) {
    return (
      <p className="text-center text-2xl font-semibold text-primary">
        {launchedMessage}
      </p>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-3 sm:gap-6">
      {countdownUnits.map((idUnit) => (
        <div
          key={idUnit.label}
          className={cn(
            "flex flex-col items-center justify-center rounded-2xl border border-border/60 bg-card/60 shadow-sm backdrop-blur-sm transition-colors",
            compact ? "p-3 sm:p-4" : "p-4 sm:p-6"
          )}
        >
          <span
            className={cn(
              "bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text font-bold tabular-nums tracking-tight text-transparent",
              compact ? "text-2xl sm:text-4xl" : "text-3xl sm:text-5xl"
            )}
          >
            {fnPad(idUnit.value)}
          </span>
          <span className="mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground sm:text-sm">
            {idUnit.label}
          </span>
        </div>
      ))}
    </div>
  );
}


export default function LensCloud() {
  const LdParams = useParams();
  const LLocale = (LdParams?.locale as string) ?? "en";

  // All page copy is resolved from JSON by locale (en/de) — nothing is hardcoded.
  const LdContent = fnGetLensCloudContent(LLocale);

  const posthog = usePostHog();
  const variant = useFeatureFlagVariantKey('lens-cloud-launch-page-ab');

  // Fire the exposure event once — and only once the flag has resolved to its
  // real value. This effect also owns the debug log, so it runs on variant
  // change rather than on every render (the countdown no longer re-renders us).
  useEffect(() => {
    if (variant !== undefined) {
      posthog.capture('launch_cloud_viewed', {
        $feature_flag: 'lens-cloud-launch-page-ab',
        $feature_flag_variant: variant,
      });
      console.log("Lens Cloud AB test variant:", variant);
    }
  }, [variant, posthog]);

  // Hold rendering until PostHog resolves the flag, so the page paints exactly
  // one variant instead of flashing the control first and then swapping.
  if (variant === undefined) {
    console.log("Lens Cloud AB test variant: waiting for PostHog to resolve...");
    return <section className="min-h-screen" aria-hidden />;
  }
  // ── Variant B ─────────────────────────────────────────────────────────────
  // Minimal, left-aligned framing focused on early access + urgency.
  if (variant === "variant-b") {
    return (
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.14),transparent_40%),linear-gradient(180deg,hsl(var(--background)),hsl(var(--muted)/0.4))]"
        />

        <div className="container mx-auto flex max-w-3xl flex-col px-4 py-24">
          <span className="mb-6 inline-flex w-fit items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            {LdContent.variantB.badge}
          </span>

          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {LdContent.variantB.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
            {LdContent.variantB.subtitle}
          </p>

          <div className="mt-10 w-full max-w-xl">
            <LaunchCountdown
              labels={LdContent.common.countdownLabels}
              launchedMessage={LdContent.common.launchedMessage}
            />
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href={`/${LLocale}/contact`}>
                {LdContent.variantB.requestAccess}
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={`/${LLocale}/contact`}>{LdContent.common.talkToSales}</Link>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  // ── Control ───────────────────────────────────────────────────────────────
  // Minimal, centered "coming soon" framing with a single waitlist CTA.
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-background to-background"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="container mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center">
        <span className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
          {LdContent.control.badge}
        </span>

        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          {LdContent.control.titleBefore}{" "}
          <span className="text-primary">{LdContent.control.highlight}</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
          {LdContent.control.subtitle}
        </p>

        <div className="mt-12 w-full">
          <LaunchCountdown
            labels={LdContent.common.countdownLabels}
            launchedMessage={LdContent.common.launchedMessage}
          />
        </div>

        <div className="mt-10">
          <Button asChild size="lg">
            <Link href={`/${LLocale}/contact`}>
              {LdContent.control.joinWaitlist}
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
