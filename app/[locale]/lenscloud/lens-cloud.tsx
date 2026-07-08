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

// Fallback launch date — used ONLY when Strapi doesn't supply a valid one.
// The real launch date is authored in Strapi (About Us hero `description`) and
// passed in via the `launchDate` prop. UTC keeps it timezone-stable.
const DEFAULT_LAUNCH_DATE = new Date("2026-07-10T09:00:00Z");

// Parse the Strapi-supplied launch date (an ISO 8601 string, e.g.
// "2026-07-10T09:00:00Z"). Falls back to DEFAULT_LAUNCH_DATE when the value is
// missing or not a parseable date, so the countdown never renders "NaN".
function fnExtractLaunchDate(iRaw?: string): string | undefined {
  if (!iRaw) return undefined;

  const LdTrimmed = iRaw.trim();
  const LdIsoMatch = LdTrimmed.match(
    /\d{4}-\d{2}-\d{2}(?:[T\s]\d{2}:\d{2}:\d{2}(?:Z|[+-]\d{2}:?\d{2})?)?/
  );
  return LdIsoMatch?.[0];
}
// Resolve the launch date from the Strapi-supplied string, falling back to a
// hardcoded default when the value is missing or invalid. This ensures the
function fnResolveLaunchDate(iRaw?: string): Date {
  const LdDateText = fnExtractLaunchDate(iRaw);
  if (LdDateText) {
    const LdParsed = new Date(LdDateText);
    if (!Number.isNaN(LdParsed.getTime())) {
      return LdParsed;
    }
  }
  return DEFAULT_LAUNCH_DATE;
}

// Placeholder full-viewport background image for Variant B.
// TODO: replace with the final asset — a remote URL or a local file in /public
// (e.g. "/lens-cloud/hero-bg.jpg"). Rendered as a CSS background, so no
// next.config remotePatterns entry is required.
const VARIANT_B_BG_IMAGE = "https://raw.githubusercontent.com/lmnaslimited/lmnas-website-images/refs/heads/main/Products/LensCloud/lencloud-bg-image.png";

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
  // When true, the last unit (seconds) gets a subtle primary accent so the
  // countdown reads as "live". Opt-in — Variant B never passes it.
  pulseSeconds?: boolean;
};

// Compute the remaining time between now and the launch date, clamped at zero.
function fnGetTimeLeft(launchDate: Date): TtimeLeft {
  const LnDiff = launchDate.getTime() - Date.now();

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
  pulseSeconds = false,
  launchDate,
}: {
  labels: TCountdownLabels;
  launchedMessage: string;
  compact?: boolean;
  pulseSeconds?: boolean;
  launchDate: Date;
}) {
  // Start null so server and first client render match; hydrate the real value on mount.
  const [StTimeLeft, fnSetTimeLeft] = useState<TtimeLeft | null>(null);

  useEffect(() => {
    fnSetTimeLeft(fnGetTimeLeft(launchDate));
    const LtInterval = setInterval(() => {
      fnSetTimeLeft(fnGetTimeLeft(launchDate));
    }, 1000);

    return () => clearInterval(LtInterval);
  }, [launchDate]);

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
      pulseSeconds={pulseSeconds}
    />
  );
}

function CountdownPanel({
  countdownUnits,
  isLaunched,
  launchedMessage,
  compact = false,
  pulseSeconds = false,
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
      {countdownUnits.map((idUnit, iIndex) => {
        // Accent the final tile (seconds) when asked, so the panel reads as live.
        const LbIsSeconds = pulseSeconds && iIndex === countdownUnits.length - 1;

        return (
          <div
            key={idUnit.label}
            className={cn(
              "relative flex flex-col items-center justify-center rounded-2xl border shadow-sm backdrop-blur-sm transition-colors",
              compact ? "p-3 sm:p-4" : "p-4 sm:p-6",
              LbIsSeconds
                ? "border-primary/30 bg-primary/5"
                : "border-border/60 bg-card/60"
            )}
          >
            {LbIsSeconds && (
              // Small live indicator in the corner of the seconds tile.
              <span
                aria-hidden
                className="absolute right-2 top-2 flex h-2 w-2"
              >
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
            )}
            <span
              className={cn(
                "bg-clip-text font-bold tabular-nums tracking-tight text-transparent",
                LbIsSeconds
                  ? "bg-gradient-to-b from-primary to-primary/70"
                  : "bg-gradient-to-b from-foreground to-muted-foreground",
                compact ? "text-2xl sm:text-4xl" : "text-3xl sm:text-5xl"
              )}
            >
              {fnPad(idUnit.value)}
            </span>
            <span className="mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground sm:text-sm">
              {idUnit.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

// The LensCloud page is a single-page launch experience, so it owns the entire viewport. The countdown is the hero, so it gets a full-bleed background treatment
// (image for Variant B, ambient wash for Control). The page is fully responsive,
// with a mobile-first layout that stacks content vertically and then flows into
// a left-aligned layout on sm+ screens.
export default function LensCloud({ launchDate }: { launchDate?: string }) {
  const LdParams = useParams();
  const LLocale = (LdParams?.locale as string) ?? "en";
  const LdLaunchDate = fnResolveLaunchDate(launchDate);

  // All page copy is resolved from JSON by locale (en/de) — nothing is hardcoded.
  const LdContent = fnGetLensCloudContent(LLocale);

  const Lposthog = usePostHog();
  const Lvariant = useFeatureFlagVariantKey('lens-cloud-launch-page-ab');

  // Fire the exposure event once — and only once the flag has resolved to its
  // real value. This effect also owns the debug log, so it runs on variant
  // change rather than on every render (the countdown no longer re-renders us).
  useEffect(() => {
    if (Lvariant !== undefined) {
      Lposthog.capture('launch_cloud_viewed', {
        $feature_flag: 'lens-cloud-launch-page-ab',
        $feature_flag_variant: Lvariant,
      });
    }
  }, [Lvariant, Lposthog]);

  // Hold rendering until PostHog resolves the flag, so the page paints exactly
  // one variant instead of flashing the control first and then swapping.
  if (Lvariant === undefined) {
    return <section className="min-h-screen" aria-hidden />;
  }
  // ── Variant B ─────────────────────────────────────────────────────────────
  // Minimal, left-aligned framing focused on early access + urgency.
  if (Lvariant === "variant-b") {
    return (
      <section className="relative flex min-h-screen items-center overflow-hidden">
        {/* Full-viewport background image (placeholder — swap VARIANT_B_BG_IMAGE). */}
        <div
          aria-hidden
          className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${VARIANT_B_BG_IMAGE})` }}
        />
        {/* Curtain: theme-aware scrim so copy stays readable over the image.
            Top-heavy on mobile (stacked content), left-heavy on sm+ (image
            shows through on the right). */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background/95 via-background/85 to-background/70 sm:bg-gradient-to-r sm:from-background sm:via-background/85 sm:to-background/30"
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
              launchDate={LdLaunchDate}
            />
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href={`/${LLocale}/pricing`}>
                {LdContent.variantB.requestAccess}
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  // ── Control ───────────────────────────────────────────────────────────────
  // Minimal, centered "coming soon" framing. Deliberately image-free and
  // text-forward so the A/B test isolates Variant B's image treatment as the
  // variable. Depth comes from an ambient (theme-aware) background, not an asset.
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Ambient wash: soft primary tint fading into the page background. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-primary/5 via-background to-background"
      />
      {/* Faint grid texture — kept subtle via a mask that fades it out at the edges. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:56px_56px] opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]"
      />
      {/* Glow behind the headline to lift the content off the grid. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="container mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center">
        <span className="mb-6 inline-flex animate-in fade-in slide-in-from-bottom-2 items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary duration-500">
          {/* Live status dot ties the badge to the running countdown below. */}
          <span aria-hidden className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          {LdContent.control.badge}
        </span>

        <h1 className="animate-in fade-in slide-in-from-bottom-3 text-4xl font-bold tracking-tight text-foreground delay-100 duration-500 fill-mode-both sm:text-5xl md:text-6xl">
          {LdContent.control.titleBefore}{" "}
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {LdContent.control.highlight}
          </span>
        </h1>
        {/* <p className="animate-in fade-in slide-in-from-bottom-3 mt-5 max-w-xl text-lg leading-8 text-muted-foreground delay-200 duration-500 fill-mode-both">
          {LdContent.control.subtitle}
        </p> */}

        <div className="animate-in fade-in slide-in-from-bottom-4 mt-12 w-full delay-300 duration-500 fill-mode-both">
          {/* Countdown is the hero of the control variant: an eyebrow label +
              the panel, with the seconds tile pulsing to signal "live". */}
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {LdContent.common.launchingIn}
          </p>
          <LaunchCountdown
            labels={LdContent.common.countdownLabels}
            launchedMessage={LdContent.common.launchedMessage}
            launchDate={LdLaunchDate}
            pulseSeconds
          />
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-4 mt-10 flex flex-col items-center gap-4 delay-500 duration-500 fill-mode-both">
          <Button asChild size="lg" className="transition-transform hover:scale-[1.03]">
            <Link href={`/${LLocale}/pricing`}>
              {LdContent.control.joinWaitlist}
              <ArrowRight />
            </Link>
          </Button>
          {/* Low-emphasis secondary path for sales-ready visitors. */}
        </div>
      </div>
    </section>
  );
}
