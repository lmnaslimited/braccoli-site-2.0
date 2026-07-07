"use client";

import posthog from "posthog-js";
import Link from "next/link";
import { useEffect, useState } from "react";
import * as Icons from "lucide-react";
import { Button } from "@repo/ui/components/ui/button";
import Hero from "@repo/ui/components/hero";
import FAQs from "@repo/ui/components/faq";
import TitleSubtitle from "@repo/ui/components/title-subtitle";
import CustomCard from "@repo/ui/components/custom-card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@repo/ui/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@repo/ui/components/ui/table";
import { getIconComponent } from "@repo/ui/lib/icon";
import { useFormHandler } from "../../hooks/form-handler";
import { Tbutton, TcaseStudies, TformMode, TpricingPageTarget } from "@repo/middleware/types";
import { useReCaptcha } from "next-recaptcha-v3"
import { CircleCheckBig, CircleX } from "lucide-react";

export default function Pricing({
  idPricing,
  idcaseStudies,
}: {
  idPricing: TpricingPageTarget;
  idcaseStudies: TcaseStudies;
}) {
  const { fnHandleFormButtonClick, fnRenderFormBelowSection, LdSectionRefs } =
    useFormHandler();
  const [openedFormId, setOpenedFormId] = useState<string | null>(null);

  const renderIcon = (icon: Tbutton["icon"]) => {
    const iconName = typeof icon === "string" ? icon : "HelpCircle";
    const IconComponent = getIconComponent(iconName);
    return <IconComponent className="w-5 h-5" />;
  };

  const [email, setEmail] = useState<string> ("")
  const { executeRecaptcha } = useReCaptcha()

  const handleOptIn = async () => {
    const trimmedEmail = email.trim().toLowerCase()

    if (!trimmedEmail) return

    const recaptchaToken = await executeRecaptcha("beta_opt_in")

    const response = await fetch("/api/beta-opt-in", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: trimmedEmail,
            recaptchaToken,
        }),
    })

    const data = await response.json()

    if (!response.ok || !data.success) {
        // Show your toast/message
        return
    }

    posthog.identify(trimmedEmail, {
        email: trimmedEmail,
    })

    // Trigger the Site App widget
    document
        .getElementById("new-pricing-beta")
        ?.click()

    setEmail("")
}

  return (
    <>
      <section ref={LdSectionRefs("containerOne")} className="hidden">
        <Hero
          idHero={{
            ...idPricing.pricing.heroSection,
            buttons: idPricing.pricing.heroSection.buttons.map((idButton) => ({
              ...idButton,
              iconPosition: "after",
              size: "lg",
            })),
          }}
          onButtonClick={(mode, formTitle) =>
            fnHandleFormButtonClick(mode as TformMode, "containerOne", formTitle)
          }
        />
        {fnRenderFormBelowSection("containerOne")}
      </section>

      {/* Problem Section */}
      <section ref={LdSectionRefs("containerTwo")} className="hidden">
        <div className="border-b border-border/40 py-16 md:py-24 lg:py-24 bg-accent">
          <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
            <TitleSubtitle
              idTitle={{
                ...idPricing.pricing.problemSection.header,
                className: "mx-auto max-w-[58rem] text-center",
                descripClass: "mx-auto",
              }}
            />
            <div className="mx-auto max-w-4xl">
              <div className="relative p-8 bg-background rounded-xl border-2 border-muted shadow-lg">
                <div className="grid gap-6 md:grid-cols-2">
                  {idPricing.pricing.problemSection.list.map(
                    (idIssue, iIndex) => {
                      const iconName =
                        typeof idIssue.icon === "string"
                          ? idIssue.icon
                          : "HelpCircle";
                      const IconComponent = getIconComponent(iconName);
                      return (
                        <div key={iIndex} className="flex items-start gap-3">
                          <div className="mt-1 rounded-full bg-muted p-1.5 flex-shrink-0">
                            <IconComponent className="w-5 h-5 text-muted-foreground" />
                          </div>
                          <div>
                            <p className="font-medium">{idIssue.label}</p>
                            <p className="text-sm text-muted-foreground">
                              {idIssue.description}
                            </p>
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
                <div className="mt-8 pt-8 border-t border-border text-center">
                  <p className="text-lg font-medium mb-6">
                    {idPricing.pricing.problemSection.title}
                  </p>
                  <div className="flex flex-col gap-2 sm:flex-row justify-center">
                    {idPricing.pricing.problemSection.buttons.map((idBtn, iIndex) => (
                      <Button
                        key={iIndex}
                        asChild
                        size="lg"
                        variant={(idBtn.variant as Tbutton["variant"]) ?? "default"}
                        onClick={(e) => {
                          if (idBtn.formMode) {
                            e.preventDefault();
                            fnHandleFormButtonClick(
                              idBtn.formMode as TformMode,
                              "containerTwo",
                              idBtn.label
                            );
                          }
                        }}
                      >
                        {idBtn.href ? (
                          <Link
                            href={idBtn.href}
                            className="flex items-center gap-2"
                          >
                            <span>{idBtn.label}</span>
                            {renderIcon(idBtn.icon)}
                          </Link>
                        ) : (
                          <span className="flex items-center gap-2">
                            {idBtn.label}
                            {renderIcon(idBtn.icon)}
                          </span>
                        )}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {fnRenderFormBelowSection("containerTwo")}
      </section>

      {/* Plans Section*/}
      <section ref={LdSectionRefs("containerThree")} className="hidden">
        <div className="border-b border-border/40 py-16 md:py-24 lg:py-24 bg-background">
          <div ref={LdSectionRefs("containerSecond")}>
            <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
              <div className="flex w-fit items-center rounded-full bg-accent px-3 py-1 text-sm mb-4 mx-auto">
                <span className="font-medium">
                  {idPricing.pricing.planHeader.badge}
                </span>
              </div>
              <TitleSubtitle
                idTitle={{
                  ...idPricing.pricing.planHeader,
                  className:
                    "mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-6",
                  descripClass: "md:text-xl/relaxed ",
                  headingClass: "md:text-5xl",
                }}
              />
              <div className="mx-auto max-w-6xl">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-grayBackground to-background rounded-xl -m-4"></div>
                  <div className="relative z-10 overflow-hidden border-2 border-primary rounded-xl shadow-2xl">
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-primary text-background hover:bg-primary">
                            <TableHead className="w-[250px] text-background">
                              {idPricing.pricing.planSection.tableHead}
                            </TableHead>
                            {idPricing.pricing.planSection.pricingPlans.map(
                              (idPlan) => (
                                <TableHead
                                  key={idPlan.name}
                                  className="text-center text-background"
                                >
                                  {idPlan.name}
                                </TableHead>
                              )
                            )}
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {idPricing.pricing.planSection.features.map(
                            (iFeature, iIndex) => (
                              <TableRow
                                key={iIndex}
                                className="border-b hover:bg-grayBackground"
                              >
                                <TableCell className="font-medium p-4">
                                  {iFeature.label}
                                </TableCell>
                                {idPricing.pricing.planSection.pricingPlans.map(
                                  (iPlan, iPlanIndex) => (
                                    <TableCell
                                      key={iPlanIndex}
                                      className="text-center p-4"
                                    >
                                      {
                                        iPlan[
                                        Object.keys(iPlan)[
                                        iIndex + 1
                                        ] as keyof typeof iPlan
                                        ]
                                      }
                                    </TableCell>
                                  )
                                )}
                              </TableRow>
                            )
                          )}
                          <TableRow className="bg-grayBackground border-t">
                            <TableCell></TableCell>
                            {idPricing.pricing.planSection.pricingPlans.map(
                              (iPlan, iIndex) => {
                                const containerId = `containerPlan${iIndex + 1}`;
                                const isOpen = openedFormId === containerId;

                                return (
                                  <TableCell key={iIndex} className="text-center">
                                    <Button
                                      variant={
                                        iIndex === 2 ? "default" : "outline"

                                      }
                                      size="sm"
                                      className={
                                        iIndex === 2
                                          ? "bg-primary"
                                          : ""

                                      }
                                      onClick={() => {
                                        fnHandleFormButtonClick(
                                          "contact" as TformMode,
                                          `containerPlan${iIndex + 1}`,
                                          iPlan.name
                                        );
                                        setOpenedFormId(prev => (prev === containerId ? null : containerId));
                                        posthog.capture("pricing_plan_selected", {
                                          plan_name: iPlan.name,
                                          plan_index: iIndex,
                                        });
                                      }
                                      }
                                    >
                                      {iIndex === 2
                                        ? idPricing.pricing.planFooter.list[1]?.label
                                        : idPricing.pricing.planFooter.list[0]?.label}{" "}
                                      {renderIcon(isOpen ? "ChevronUp" : "ChevronDown")}
                                    </Button>
                                  </TableCell>
                                )
                              })}
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </div>
                {fnRenderFormBelowSection("containerPlan1")}
                {fnRenderFormBelowSection("containerPlan2")}
                {fnRenderFormBelowSection("containerPlan3")}

                <div className="mx-auto max-w-[58rem] text-center mt-16 bg-accent p-8 rounded-xl border-2 border-muted shadow-lg">
                  <div className="inline-flex items-center rounded-full bg-primary text-background px-3 py-1 text-sm mb-4">
                    <span className="font-medium">
                      {idPricing.pricing.planFooter.title}
                    </span>
                  </div>
                  <TitleSubtitle
                    idTitle={{
                      ...idPricing.pricing.planFooter.header,
                      className:
                        "mx-auto flex max-w-[58rem] flex-col items-center justify-center text-center mb-6",
                      descripClass: "md:text-sm",
                      headingClass: "md:text-xl",
                    }}
                  />
                  <div className="flex flex-col gap-2 sm:flex-row justify-center">
                    {idPricing.pricing.planFooter.buttons.map(
                      (idBtn, iIndex) => (
                        <Button
                          key={iIndex}
                          size="lg"
                          variant={
                            (idBtn.variant as Tbutton["variant"]) ?? "default"
                          }
                          onClick={() =>
                            idBtn.formMode &&
                            fnHandleFormButtonClick(
                              idBtn.formMode as TformMode,
                              "containerThree",
                              idBtn.label
                            )
                          }
                        >
                          {idBtn.href ? (
                            <Link href={idBtn.href}> {idBtn.label} </Link>
                          ) : (
                            idBtn.label
                          )}{" "}
                          {renderIcon(idBtn.icon)}
                        </Button>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {fnRenderFormBelowSection("containerThree")}
        </div>
      </section>

      {/* Section Added for LensCloud Launch */}
      {/* <section className="py-16 md:py-24">
        <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-8 text-center shadow-xl md:p-12 transition-all duration-300">
           */}
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground tracking-wide">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
            Early Adopter Offer
          </div> */}

          {/* Header */}
          {/* <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Secure Your Free Subscription at Launch
          </h2>

          <p className="mt-4 text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Be among the first to build on our next-generation platform. We are reserving a limited number of free-tier slots for early adopters who join before the public launch.
          </p> */}

          {/* Feature Box — Smooth layout fix */}
          {/* <div className="mt-8 rounded-xl border border-border bg-muted/40 p-6 text-left">
            <h3 className="font-semibold text-xs uppercase tracking-wider text-muted-foreground/80">
              Your Early Adopter Package Includes:
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-foreground/90">
              <li className="flex items-start gap-2.5">
                <svg className="h-5 w-5 shrink-0 text-green-600 dark:text-green-400 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong>Priority Launch Access:</strong> Skip the public waitlist completely.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="h-5 w-5 shrink-0 text-green-600 dark:text-green-400 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong>Free Starter Plan Slot:</strong> 1 Production Site included natively.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="h-5 w-5 shrink-0 text-green-600 dark:text-green-400 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong>Grandfathered Status:</strong> Keep your free tier post-launch.</span>
              </li>
            </ul>
          </div> */}

          {/* Form Layout */}
          {/* <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 flex-1 rounded-xl border border-input bg-background px-4 text-foreground shadow-inner transition placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20 outline-none"
            /> */}

            {/* <button
              disabled={!email.trim()}
              onClick={handleOptIn}
              // id="new-pricing-beta"
              className="h-12 rounded-xl bg-primary px-6 font-medium text-primary-foreground shadow-sm transition-all duration-200 hover:opacity-90 focus:ring-2 focus:ring-ring/20 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-40 whitespace-nowrap"
            >
              Secure My Spot
            </button>
            <button
                id="new-pricing-beta"
                className="hidden"
                type="button"
            />
          </div> */}
        
          {/* Disclaimer */}
          {/* <p className="mt-4 text-xs text-muted-foreground/90">
            No credit card required. We will notify you the moment your account is ready to activate at launch.
          </p>

        </div>
      </section> */}

      <section className="relative overflow-hidden py-24 md:py-32 bg-background border-t border-border">
  {/* Modern ambient geometric background accents using theme tokens */}
  {/* <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[128px]" />
  <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-ring/5 blur-[100px]" /> */}

  <div className="mx-auto max-w-7xl px-6 md:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-center">
      
      {/* --- Left Column: Value Proposition & Urgency --- */}
      <div className="lg:col-span-6 space-y-6">
        <div className="inline-flex items-center gap-2.5 rounded-full bg-muted border border-border px-3 py-1 text-xs font-semibold text-foreground/80 tracking-wide">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Early Access Opt-In Active
        </div>

        <h2 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1]">
          Vanilla ERPNext Hosting. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-muted-foreground/60 to-primary">
            Zero Overhead.
          </span>
        </h2>

        <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
          Opt in the upcoming LensCloud platform before the general release pool opens. Secure early access to our permanently free tier, engineered exclusively for production-grade vanilla Frappe deployments.
        </p>

        {/* --- Integrated Opt-In Field Strip --- */}
        <div className="pt-4 max-w-lg">
          <div className="flex flex-col gap-3 sm:flex-row bg-card p-2 rounded-2xl">
            <input
              type="email"
              placeholder="Enter your professional email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 flex-1 rounded-xl border border-primary bg-background px-4 text-foreground transition placeholder:text-muted-foreground/50 focus:border-ring focus:ring-2 focus:ring-ring/20 outline-none"
            />
            <button
              disabled={!email.trim()}
              onClick={handleOptIn}
              className="h-12 rounded-xl bg-primary px-8 font-semibold text-primary-foreground shadow transition-all hover:opacity-90 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap"
            >
              Secure My Spot
            </button>
          </div>
          <p className="mt-3 text-sm text-muted-foreground/80 px-2 flex items-center gap-1.5">
             No credit card required. Instance setup links sent on launch day.
          </p>
        </div>
      </div>

      {/* --- Right Column: Environment Spec Module --- */}
      <div className="lg:col-span-6 relative">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-2xl md:p-9 relative overflow-hidden backdrop-blur-sm">
          
          {/* Subtle geometric pattern overlay typical of dashboard designs */}
          <svg className="absolute inset-0 -z-10 h-full w-full stroke-border/20 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
            <defs>
              <pattern id="dashboard-pattern" width="20" height="20" x="50%" y="-1" patternUnits="userSpaceOnUse">
                <path d="M.5 20V.5H20" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth="0" fill="url(#dashboard-pattern)" />
          </svg>

          {/* Module Header */}
          <div className="flex items-center justify-between border-b border-border pb-5">
            <div>
              <h3 className="text-xl font-extrabold text-foreground tracking-tight">Provisioning Manifesto</h3>
              <p className="text-xs font-mono text-muted-foreground mt-0.5">Manifest: LENS_STARTER_FREE_v1.0</p>
            </div>
            <div className="text-right">
              <span className="text-3xl font-black text-foreground">$0<span className="text-xs text-muted-foreground">/mo</span></span>
              <p className="text-[10px] font-mono tracking-wider uppercase text-muted-foreground">Permanently</p>
            </div>
          </div>

          {/* Technical Specs Readout */}
          <div className="mt-7 space-y-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80 font-mono">Infrastructure Resource Array</h4>
              <ul className="mt-3 space-y-3 text-sm text-foreground/90">
                <li className="flex items-start gap-3">
                <CircleCheckBig className="text-green-500"/>
                  <span><strong>1 Active Production Instance:</strong> Fully managed architecture ready for live deployment.</span>
                </li>
                <li className="flex items-start gap-3">
                <CircleCheckBig className="text-green-500"/>
                  <span><strong>LensCloud Managed PaaS:</strong> OS, network, and database clustering handled natively.</span>
                </li>
              </ul>
            </div>

            {/* Environmental Parameter Flags */}
            <div className="pt-6 border-t border-border">
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80 font-mono">Instance Parameter Flags</h4>
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs font-mono">
                
                <div className="flex items-center justify-between gap-3 bg-muted border border-border rounded-lg p-2.5">
                  <span className="text-foreground/90">Core ERPNext</span>
                  <CircleCheckBig className="text-green-500"/>
                </div>
                
                <div className="flex items-center justify-between gap-3 bg-muted/40 border border-border rounded-lg p-2.5">
                  <span className="text-muted-foreground">Custom Apps</span>
                  <CircleX className="text-orange-500" />
                </div>
                
                <div className="flex items-center justify-between gap-3 bg-muted/40 border border-border rounded-lg p-2.5">
                  <span className="text-muted-foreground">Server Scripts</span>
                  <CircleX className="text-orange-500" />
                </div>

                <div className="flex items-center justify-between gap-3 bg-muted/40 border border-border rounded-lg p-2.5">
                  <span className="text-muted-foreground">Client Scripts</span>
                  <CircleX className="text-orange-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  
  {/* Retained your original hidden anchor tag for internal event handling */}
  <button id="new-pricing-beta" className="hidden" type="button" />
</section>

      {/* Guide Section*/}
      <section ref={LdSectionRefs("containerFour")} className="hidden">
        <div className="border-b border-border/40 py-16 md:py-24 lg:py-24 text-background bg-primary">
          <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
            <div className="flex mx-auto w-fit items-center rounded-full bg-primary border border-border text-background px-3 py-1 text-sm mb-4">
              <span className="font-medium">
                {idPricing.pricing.guideHeader.badge}
              </span>
            </div>
            <TitleSubtitle
              idTitle={{
                ...idPricing.pricing.guideHeader,
                className:
                  "mx-auto max-w-[58rem] text-center items-center justify-cenetr",
                headingClass: "md:text-5xl",
                descripClass: "md:text-xl/relaxed text-slate",
              }}
            />
            <div className="mx-auto max-w-6xl">
              <Tabs defaultValue={idPricing.pricing.guideCategories[0]?.label} className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 bg-accent p-1 rounded-none">
                  {idPricing.pricing.guideCategories.map((iTab) => (
                    <TabsTrigger
                      key={iTab.label}
                      value={iTab.label!}
                      className="data-[state=active]:bg-background data-[state=active]:text-primary 
                         text-grayBackground transition-all px-4 rounded-none"
                    >
                      {iTab.label!.charAt(0).toUpperCase() +
                        iTab.label!.slice(1).replace("-", " ")}
                    </TabsTrigger>
                  ))}
                </TabsList>

                <div className="bg-background p-4 shadow-2xl">
                  {idPricing.pricing.guideCategories.map((iTab) => (
                    <TabsContent
                      key={iTab.label!}
                      value={iTab.label!}
                      className="space-y-4 overflow-hidden"
                    >
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow className="bg-primary hover:bg-primary">
                              {idPricing.pricing.guideTableHeader.map(
                                (iHeader, iIndex) => (
                                  <TableHead
                                    key={iIndex}
                                    className="text-background font-bold text-base"
                                  >
                                    {iHeader.label}
                                  </TableHead>
                                )
                              )}
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {idPricing.pricing.guideSection
                              .filter((item) => item.badge === iTab.label)
                              .map((idRow, iIndex) => (
                                <TableRow key={iIndex} className="border-b">
                                  <TableCell className="font-bold bg-grayBackground text-primary py-4">
                                    {idRow.highlight}
                                  </TableCell>
                                  <TableCell className="text-sm bg-background text-primary">
                                    <div className="flex items-center gap-2">
                                      <Icons.CheckCircle className="h-5 w-5 text-muted-primary" />
                                      <span>{idRow.title}</span>
                                    </div>
                                  </TableCell>
                                  <TableCell className="text-sm bg-grayBackground text-primary">
                                    {idRow.subtitle}
                                  </TableCell>
                                </TableRow>
                              ))}
                          </TableBody>
                        </Table>
                      </div>
                    </TabsContent>
                  ))}
                </div>
              </Tabs>
              <div className="mx-auto max-w-5xl mt-12 border border-background rounded-xl overflow-hidden shadow-xl">
                <div className="grid md:grid-cols-5 items-center">
                  <div className="md:col-span-3 p-6 md:p-8 text-accent">
                    <TitleSubtitle
                      idTitle={{
                        ...idPricing.pricing.guideFooter.header,
                        headingClass: "md:text-2xl mb-2",
                        descripClass: "md:text-base text-accent",
                      }}
                    />
                    <div className="flex flex-col sm:flex-row gap-3">
                      {idPricing.pricing.guideFooter.buttons.map(
                        (idBtn, iIndex) => (
                          <Button
                            key={iIndex}
                            size="lg"
                            className="bg-background text-foreground"
                            onClick={() =>
                              idBtn.formMode &&
                              fnHandleFormButtonClick(
                                idBtn.formMode as TformMode,
                                "containerFour",
                                idBtn.label
                              )
                            }
                          >
                            {idBtn.href ? (
                              <Link href={idBtn.href}> {idBtn.label} </Link>
                            ) : (
                              idBtn.label
                            )}
                            {idBtn.icon &&
                              (() => {
                                const iconName =
                                  typeof idBtn.icon === "string"
                                    ? idBtn.icon
                                    : "HelpCircle";
                                const IconComponent =
                                  getIconComponent(iconName);
                                return <IconComponent />;
                              })()}
                          </Button>
                        )
                      )}
                    </div>
                  </div>
                  <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-center items-center text-center border-t md:border-t-0 md:border-l border-primary/60">
                    <div className="bg-background rounded-full p-3 mb-3">
                      <Icons.Download className="h-6 w-6 text-foreground" />
                    </div>
                    <TitleSubtitle
                      idTitle={{
                        ...idPricing.pricing.guideCallout,
                        headingClass: "md:text-lg mb-1",
                        descripClass: "md:text-sm text-accent",
                      }}
                    />
                    <div className="inline-flex items-center rounded-full bg-background text-foreground px-3 py-1 text-sm">
                      <span className="font-medium">
                        {idPricing.pricing.guideCallout.badge}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {fnRenderFormBelowSection("containerFour", { idPdfData: idcaseStudies })}
      </section>

      {/* Testimonials Section*/}
      <section className="py-16 md:py-24 lg:py-24 bg-grayBackground hidden">
        <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
          <TitleSubtitle
            idTitle={{
              ...idPricing.pricing.testimonialHeader.header,
              className:
                "mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-6",
              headingClass: "md:text-5xl",
            }}
          />
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-3">
              {idPricing.pricing.testimonialSection.map((idCard, iIndex) => (
                <CustomCard
                  key={iIndex}
                  idCardProps={{
                    header: {
                      ...idCard.header,
                      descripClass:
                        "italic border-l-4 border-primary/70 px-2 pb-2",
                      headingClass: "mb-0",
                    },
                    className: "max-w-md ",
                    image: {
                      svg: (
                        <div className="flex px-6 pt-4 space-x-1 text-primary">
                          <Icons.Star
                            size={24}
                            fill="currentColor"
                            strokeWidth={0}
                          />
                          <Icons.Star
                            size={24}
                            fill="currentColor"
                            strokeWidth={0}
                          />
                          <Icons.Star
                            size={24}
                            fill="currentColor"
                            strokeWidth={0}
                          />
                          <Icons.Star
                            size={24}
                            fill="currentColor"
                            strokeWidth={0}
                          />
                          <Icons.Star
                            size={24}
                            fill="currentColor"
                            strokeWidth={0}
                          />
                        </div>
                      ),
                      alternate: "5-star",
                    },
                    avatar: idCard.avatar,
                    avatarDetails: idCard.avatarDetails,
                    namePosition: "bottom",
                    footerClassName: "items-start",
                  }}
                />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href={
                  idPricing.pricing.testimonialHeader.buttons[0]?.href ?? "#"
                }
              >
                <Button variant="outline" size="lg">
                  {idPricing.pricing.testimonialHeader.buttons[0]?.label}{" "}
                  {renderIcon(
                    idPricing.pricing.testimonialHeader.buttons[0]?.icon
                  )}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-b border-border/40 py-16 md:py-24 lg:py-24 bg-accent">
        <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
          <div className="flex items-center w-fit mx-auto rounded-full border border-border bg-accent px-3 py-1 text-sm mb-4">
            <span className="font-medium">
              {idPricing.pricing.faqSection.heading.badge}
            </span>
          </div>
          <TitleSubtitle
            idTitle={{
              ...idPricing.pricing.faqSection.heading,
              className:
                "mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-6",
              headingClass: "md:text-5xl text-foreground",
              descripClass: "md:text-xl/relaxed text-foreground",
            }}
          />
          <div className="mx-auto max-w-3xl space-y-4">
            <FAQs idFaq={idPricing.pricing.faqSection.point} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={LdSectionRefs("containerFive")}  className="hidden">
        <div className="py-16 md:py-24 lg:py-24 bg-grayBackground">
          <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex items-center mx-auto w-fit rounded-full bg-primary text-background px-3 py-1 text-sm mb-4">
                <span className="font-medium">
                  {idPricing.pricing.ctaSection.heading.badge}
                </span>
              </div>
              <TitleSubtitle
                idTitle={{
                  ...idPricing.pricing.ctaSection.heading,
                  headingClass: "md:text-5xl",
                  descripClass: "md:text-xl/relaxed",
                }}
              />
              <div className="bg-background border-2 border-primary rounded-lg p-8 mb-8 shadow-xl">
                <h3 className="text-xl font-bold mb-6">
                  {idPricing.pricing.ctaSection.description}
                </h3>
                <div className="grid gap-6 md:grid-cols-2">
                  {idPricing.pricing.ctaSection.buttons.map((idBtn, iIndex) => (
                    <div className="space-y-4" key={iIndex}>
                      <p className="font-medium">{idBtn.description}</p>
                      <Button
                        key={iIndex}
                        size="lg"
                        variant={
                          (idBtn.variant as Tbutton["variant"]) ?? "default"
                        }
                        onClick={() =>
                          idBtn.formMode &&
                          fnHandleFormButtonClick(
                            idBtn.formMode as TformMode,
                            "containerFive",
                            idBtn.label
                          )
                        }
                      >
                        {idBtn.href ? (
                          <Link href={idBtn.href}> {idBtn.label} </Link>
                        ) : (
                          idBtn.label
                        )}{" "}
                        {renderIcon(idBtn.icon)}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {fnRenderFormBelowSection("containerFive")}
      </section>
    </>
  );
}
