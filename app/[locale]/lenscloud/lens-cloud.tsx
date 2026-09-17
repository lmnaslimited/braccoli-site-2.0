"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@repo/ui/components/ui/button";
import { cn } from "@repo/ui/lib/utils";
import { fnGetLensCloudContent } from "./content";

export default function LensCloud() {
  const LdParams = useParams();
  const LLocale = (LdParams?.locale as string) ?? "en";

  // All page copy is resolved from JSON by locale.
  const LdContent = fnGetLensCloudContent(LLocale);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Ambient wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-primary/5 via-background to-background"
      />

      {/* Faint grid texture */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 -z-20",
          "[background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)]",
          "[background-size:56px_56px]",
          "opacity-[0.15]",
          "[mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]"
        )}
      />

      {/* Glow behind the headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="container mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center">
        {/* Live status badge */}
        <span className="mb-6 inline-flex animate-in fade-in slide-in-from-bottom-2 items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary duration-500">
          <span aria-hidden className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>

          {LdContent.control.badge}
        </span>

        {/* Hero heading */}
        <h1 className="animate-in fade-in slide-in-from-bottom-3 text-4xl font-bold tracking-tight text-foreground delay-100 duration-500 fill-mode-both sm:text-5xl md:text-6xl">
          {LdContent.control.titleBefore}{" "}
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {LdContent.control.highlight}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="animate-in fade-in slide-in-from-bottom-3 mt-5 max-w-2xl text-lg leading-8 text-muted-foreground delay-200 duration-500 fill-mode-both">
          {LdContent.control.subtitle}
        </p>

        {/* CTA buttons */}
        <div className="animate-in fade-in slide-in-from-bottom-4 mt-10 flex flex-col items-center gap-4 delay-300 duration-500 fill-mode-both sm:flex-row">
          <Button
            asChild
            size="lg"
            className="transition-transform hover:scale-[1.03]"
          >
            <Link href={`/${LLocale}/pricing`}>
              {LdContent.control.joinWaitlist}
              <ArrowRight />
            </Link>
          </Button>

          <Button asChild size="lg" variant="outline">
            <Link href={`/${LLocale}/products/lenscloud-platform`}>
              {LdContent.control.exploreBtn}
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

