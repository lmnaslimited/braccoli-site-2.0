"use client";

import { usePostHog } from "posthog-js/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import posthog from "posthog-js";
import { ArrowRight, CheckCircle2, Cloud, Gauge, ShieldCheck } from "lucide-react";
import TitleSubtitle from "@repo/ui/components/title-subtitle";
import VideoPlayer from "@repo/ui/components/video-player";
import { Button } from "@repo/ui/components/ui/button";
import { cn } from "@repo/ui/lib/utils";

// const AB_TEST_FLAG_KEY = "lens-cloud-launch-page-ab";
// const BETA_ACCESS_FLAG_KEY = "lens-cloud-beta";

// Fixed launch date the countdown ticks down to (UTC to stay consistent across timezones).
// TODO: replace with the real LENS Cloud launch date.
const LAUNCH_DATE = new Date("2026-07-10T09:00:00Z");

// Placeholder hero video for the teaser section.
// TODO: swap with the final LENS Cloud launch reel.
const HERO_VIDEO_SRC =
  "https://storage.googleapis.com/lmnas-public/lens-cloud/teaser.mp4";

type TtimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type TLensCloudVariant = "control" | "variant-b";

type TEarlyAccessFeature = {
  flagKey: string | null;
  name?: string;
  stage?: string;
};

type TBetaStatus = "loading" | "available" | "enrolled" | "unavailable";

type TBetaOptInProps = {
  betaStatus: TBetaStatus;
  isUpdating: boolean;
  locale: string;
  variant: TLensCloudVariant;
  onToggle: () => void;
  compact?: boolean;
};

type TCountdownProps = {
  countdownUnits: { label: string; value: number }[];
  isLaunched: boolean;
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


function fnCaptureLensCloudEvent(
  iEventName: string,
  iVariant: TLensCloudVariant,
  iLocale: string,
  iProperties: Record<string, string | boolean> = {}
) {
  try {
    posthog.capture(iEventName, {
      variant: iVariant,
      locale: iLocale,
      ...iProperties,
    });
  } catch {
    // The page must keep working when PostHog is unavailable or blocked.
  }
}

function CountdownPanel({
  countdownUnits,
  isLaunched,
  compact = false,
}: TCountdownProps) {
  if (isLaunched) {
    return (
      <p className="text-center text-2xl font-semibold text-primary">
        We&apos;re live. Welcome to LENS Cloud.
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

  // Start null so server and first client render match; hydrate the real value on mount.
  const [StTimeLeft, fnSetTimeLeft] = useState<TtimeLeft | null>(null);
  const [StVariant, fnSetVariant] = useState<TLensCloudVariant>("control");
  const [StBetaStatus, fnSetBetaStatus] = useState<TBetaStatus>("loading");
  const [SbUpdatingBeta, fnSetUpdatingBeta] = useState(false);

  useEffect(() => {
    fnSetTimeLeft(fnGetTimeLeft());
    const LtInterval = setInterval(() => {
      fnSetTimeLeft(fnGetTimeLeft());
    }, 1000);

    return () => clearInterval(LtInterval);
  }, []);

 
const posthog = usePostHog()
  const [variant, setVariant] = useState<string | undefined>(undefined)

  useEffect(() => {
    posthog.onFeatureFlags(() => {
      const flag = posthog.getFeatureFlag("lens-cloud-launch-page-ab")
      setVariant(flag as string)
      console.log("Lens Cloud AB test variant:", flag)
    })
  }, [posthog])

  console.log("Lens Cloud AB test variant:", variant)


  const LaCountdownUnits: { label: string; value: number }[] = [
    { label: "Days", value: StTimeLeft?.days ?? 0 },
    { label: "Hours", value: StTimeLeft?.hours ?? 0 },
    { label: "Minutes", value: StTimeLeft?.minutes ?? 0 },
    { label: "Seconds", value: StTimeLeft?.seconds ?? 0 },
  ];

  const LbLaunched =
    StTimeLeft !== null &&
    StTimeLeft.days === 0 &&
    StTimeLeft.hours === 0 &&
    StTimeLeft.minutes === 0 &&
    StTimeLeft.seconds === 0;

 
  if (variant === "variant-b") {
    return (
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.16),transparent_32%),linear-gradient(180deg,hsl(var(--background)),hsl(var(--muted)/0.45))]"
        />

        <div className="container mx-auto grid gap-12 px-4 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(360px,520px)] lg:items-center lg:py-24">
          <div>
            <span className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              Beta access is opening
            </span>

            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Get LENS Cloud in your team&apos;s hands before launch
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Join the beta to test cloud-native LENS workflows, validate performance
              on real data, and shape the production release with direct feedback.
            </p>

            <div className="mt-8 flex max-w-xl flex-col gap-4 sm:flex-row sm:items-start">
             {/* button opt in */}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: ShieldCheck,
                  title: "Secure beta",
                  copy: "Early access is controlled by PostHog enrollment.",
                },
                {
                  icon: Gauge,
                  title: "Performance-first",
                  copy: "Stress test infrastructure before general release.",
                },
                {
                  icon: Cloud,
                  title: "Cloud-native",
                  copy: "Preview the hosted LENS operating model.",
                },
              ].map((idItem) => (
                <div
                  key={idItem.title}
                  className="rounded-xl border border-border/60 bg-background/70 p-4 shadow-sm backdrop-blur-sm"
                >
                  <idItem.icon className="mb-3 size-5 text-primary" />
                  <h2 className="text-sm font-semibold text-foreground">{idItem.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{idItem.copy}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-border/60 bg-card/75 p-5 shadow-xl backdrop-blur-sm">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Launch countdown
              </p>
              <CountdownPanel
                countdownUnits={LaCountdownUnits}
                isLaunched={LbLaunched}
                compact
              />
            </div>

            <div className="overflow-hidden rounded-2xl border border-border/60 shadow-xl">
              <VideoPlayer src={HERO_VIDEO_SRC} />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="outline" className="w-full">
                <Link
                  href={`/${LLocale}/contact`}
                  onClick={() =>
                    fnCaptureLensCloudEvent(
                      "lens_cloud_sales_cta_clicked",
                      StVariant,
                      LLocale
                    )
                  }
                >
                  Talk to sales
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden">
      {/* Ambient premium gradient backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-background to-background"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="container mx-auto flex flex-col items-center px-4 py-20 md:py-28">
        {/* Badge */}
        <span className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
          Coming Soon yolo........
        </span>

        {/* Hero heading + subtitle */}
        <TitleSubtitle
          idTitle={{
            title: "LENS Cloud is almost",
            highlight: "here",
            subtitle:
              "The next generation of intelligent, cloud-native data infrastructure. Enterprise-grade performance, built for teams that move fast.",
            className: "items-center text-center max-w-3xl mb-0",
            headingClass: "text-4xl sm:text-5xl md:text-6xl",
            descripClass: "mx-auto",
          }}
        />

        {/* Countdown */}
        <div className="mt-12 w-full max-w-2xl">
          <CountdownPanel countdownUnits={LaCountdownUnits} isLaunched={LbLaunched} />
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link
              href={`/${LLocale}/contact`}
              onClick={() =>
                fnCaptureLensCloudEvent(
                  "lens_cloud_waitlist_cta_clicked",
                  StVariant,
                  LLocale
                )
              }
            >
              Join the waitlist
              <ArrowRight />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link
              href={`/${LLocale}/contact`}
              onClick={() =>
                fnCaptureLensCloudEvent(
                  "lens_cloud_sales_cta_clicked",
                  StVariant,
                  LLocale
                )
              }
            >
              Talk to sales
            </Link>
          </Button>
        </div>

        <div className="mt-8">
         {/* button opt in */}
        </div>

        {/* Video teaser */}
        <div className="mt-16 w-full max-w-4xl">
          <div className="overflow-hidden rounded-2xl border border-border/60 shadow-xl">
            <VideoPlayer src={HERO_VIDEO_SRC} />
          </div>
        </div>
      </div>
    </section>
  );
}


