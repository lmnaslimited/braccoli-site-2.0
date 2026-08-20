'use client'

import Link from "next/link";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { getIconComponent } from "@repo/ui/lib/icon";
import { ArrowRight, CheckCircle, ChevronDown } from "lucide-react";
import CustomCard from "@repo/ui/components/custom-card";
import TitleSubtitle from "@repo/ui/components/title-subtitle";
import { useFormHandler } from "../../hooks/form-handler";
import { Tbutton, TformMode, TaboutUsPageTarget, Titems } from "@repo/middleware/types";
import Image from "next/image";

const fnRenderIcon = (icon: Tbutton['icon'], className?: string) => {
    const LIconName = typeof icon === "string" ? icon : "HelpCircle";
    const IconComponent = getIconComponent(LIconName);
    return <IconComponent className={className || "h-8 w-8 mb-8"} />;
};

export default function AboutUs({ idAboutUs }: { idAboutUs: TaboutUsPageTarget }) {
    const { fnHandleFormButtonClick, fnRenderFormBelowSection, LdSectionRefs } = useFormHandler();
    // Controls the currently expanded journey year
    const [LOpenYear, fnSetOpenYear] = useState<string | null>(null);
    // Toggles the expanded state of a journey year
    const fnToggleYear = (iYear: string) => fnSetOpenYear((iPrev) => (iPrev === iYear ? null : iYear));
    // Extracts the year from the timeline icon text (e.g. "APR 2021" → "APR")
    const fnParseYear = (idIcon: Titems["icon"]): string => {
        const LText = typeof idIcon === "string" ? idIcon : "";
        return LText.match(/\d{4}/)?.[0] ?? LText.trim();
    };
    // Extracts the month from the timeline icon text
    const fnParseMonth = (idIcon: Titems["icon"], sYear: string): string => {
        const sText = typeof idIcon === "string" ? idIcon : "";
        return sText.replace(sYear, "").replace(/&.*/, "").trim();
    };
    
    // Groups timeline events by year for the journey section
    const LdYearGroups = useMemo(() => {
        const LdGroups: { year: string; events: { month: string; label?: string; description?: string }[] }[] = [];
        // Maps each year to its corresponding group index
        const LdYearIndex: Record<string, number> = {};
    
        // Processes timeline entries into year-based groups
        idAboutUs?.aboutUs?.previousYears?.forEach((idPrevYear) => {
            // Gets the year for the current timeline entry
            const LYear = fnParseYear(idPrevYear.icon);
            // Finds or creates the matching year group
            let lGroupIdx = LdYearIndex[LYear];
            if (lGroupIdx === undefined) {
                lGroupIdx = LdGroups.length;
                LdYearIndex[LYear] = lGroupIdx;
                // Adds the timeline event to the corresponding year group
                LdGroups.push({ year: LYear, events: [] });
            }
            
            const LCurrentGroup = LdGroups[lGroupIdx];
            if (LCurrentGroup) {
                LCurrentGroup.events.push({
                    month: fnParseMonth(idPrevYear.icon, LYear),
                    label: idPrevYear.label,
                    description: idPrevYear.description,
                });
            }
        });
    
        return LdGroups;
    }, [idAboutUs?.aboutUs?.previousYears]);
    
    // Gets the heading for the Current & Beyond section
    const LBeyondYear = idAboutUs?.aboutUs?.currentAndBeyondYears?.heading?.title ?? "Beyond";
    
    // Reference to the values carousel container
    const LdValuesTrack = useRef<HTMLDivElement>(null);
    // Stores the active carousel index without triggering re-renders
    const LdActiveValue = useRef(0);
    // Tracks whether carousel auto-play is paused
    const LdValuesPaused = useRef(false);
    // Stores the currently active value card
    const [LActiveValue, fnSetActiveValue] = useState(0);
    // Total number of value cards
    const LValuesCount = idAboutUs?.aboutUs?.valuesSection?.length ?? 0;
    
    // Scrolls the carousel to the selected value card
    const fnGoValue = (iIndex: number) => {
        if (LValuesCount === 0) return;
        const LClamped = ((iIndex % LValuesCount) + LValuesCount) % LValuesCount;
        const LEndTrack = LdValuesTrack.current;
        const LEndCard = LEndTrack?.children[LClamped] as HTMLElement | undefined;
        if (LEndTrack && LEndCard) {
            LEndTrack.scrollTo({ left: LEndCard.offsetLeft - (LEndTrack.clientWidth - LEndCard.clientWidth) / 2, behavior: "smooth" });
        }
        fnSetActiveValue(LClamped);
    };
    // Updates the active value based on the scroll position
    const fnOnValuesScroll = () => {
        const LEndTrack = LdValuesTrack.current;
        if (!LEndTrack) return;
        const LCenter = LEndTrack.scrollLeft + LEndTrack.clientWidth / 2;
        let lNearest = 0;
        let lMin = Infinity;
        Array.from(LEndTrack.children).forEach((ndChild, iIdx) => {
            const ndEl = ndChild as HTMLElement;
            const iCardCenter = ndEl.offsetLeft + ndEl.clientWidth / 2;
            const iDist = Math.abs(iCardCenter - LCenter);
            if (iDist < lMin) {
                lMin = iDist;
                lNearest = iIdx;
            }
        });
        fnSetActiveValue(lNearest);
    };
    // Keeps the active carousel index synchronized with the ref
    useEffect(() => {
        LdActiveValue.current = LActiveValue;
    }, [LActiveValue]);
    // Automatically advances the carousel at regular intervals
    useEffect(() => {
        if (LValuesCount <= 1) return;
        const LdInterval = setInterval(() => {
            if (LdValuesPaused.current) return;
            const LEndTrack = LdValuesTrack.current;
            const LNext = (LdActiveValue.current + 1) % LValuesCount;
            const LEndCard = LEndTrack?.children[LNext] as HTMLElement | undefined;
            if (LEndTrack && LEndCard) {
                LEndTrack.scrollTo({ left: LEndCard.offsetLeft - (LEndTrack.clientWidth - LEndCard.clientWidth) / 2, behavior: "smooth" });
            }
            fnSetActiveValue(LNext);
        }, 5000);
        return () => clearInterval(LdInterval);
    }, [LValuesCount]);
    
    // Controls the expanded state of the history timeline accordion
    const [LHistoryAccordionOpen, fnSetHistoryAccordionOpen] = useState<boolean>(false);
    // Tracks the currently expanded history year
    const [LOpenHistoryYear, fnSetOpenHistoryYear] = useState<string | null>(null);
    // Toggles the expanded state of a history year
    const fnToggleHistoryYear = (iYear: string) => fnSetOpenHistoryYear((iPrev) => (iPrev === iYear ? null : iYear));
    return (
      <>
        {/* Hero Section */}
        <section className="py-32 bg-black text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <TitleSubtitle
                idTitle={{
                  ...idAboutUs?.aboutUs.heroSection.heading,
                  className: "max-w-4xl text-white text-left",
                  headingClass:
                    "md:text-sm text-sm text-white tracking-widest uppercase",
                  descripClass:
                    "text-4xl md:text-6xl font-light tracking-tight leading-tight text-white",
                }}
              />
              <div className="h-0.5 w-24 bg-white mb-12"></div>
              <div className="max-w-4xl">
                {idAboutUs?.aboutUs.heroSection.highlight?.map(
                  (idItem, iIndex) => (
                    <p
                      key={iIndex}
                      className={
                        iIndex === 0
                          ? "text-xl text-secondary/90 leading-relaxed mb-8"
                          : "text-lg text-secondary/80 leading-relaxed"
                      }
                    >
                      {idItem?.label}
                    </p>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section*/}
        <section className="py-24 border-b border-border/40">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <p className="text-primary/50 text-sm tracking-widest uppercase mb-4">
                {idAboutUs?.aboutUs.valuesSectionHeaderFooter.header.badge}
              </p>
              <TitleSubtitle
                idTitle={{
                  ...idAboutUs?.aboutUs.valuesSectionHeaderFooter.header,
                  className: "max-w-5xl text-left",
                  headingClass: "text-3xl md:text-4xl font-light",
                  descripClass: "md:text-lg text-lg text-primary/70 max-w-3xl",
                }}
              />
              {/* Values tag-navigation auto-playing carousel */}
              <div className="mt-10">
                {/* Tag navigation */}
                <div className="mb-10 flex flex-wrap gap-3">
                  {idAboutUs?.aboutUs.valuesSection.map((idValues, iIndex) => (
                    <button
                      key={iIndex}
                      type="button"
                      onClick={() => fnGoValue(iIndex)}
                      aria-pressed={LActiveValue === iIndex}
                      className={`rounded-full border px-6 py-2.5 text-sm font-medium transition-colors duration-300 ${LActiveValue === iIndex ? "border-primary bg-primary text-background" : "border-primary/30 text-primary hover:border-primary/60"}`}
                    >
                      {idValues.title}
                    </button>
                  ))}
                </div>
                {/* Horizontal snap carousel */}
                <div
                  ref={LdValuesTrack}
                  onScroll={fnOnValuesScroll}
                  onMouseEnter={() => {
                    LdValuesPaused.current = true;
                  }}
                  onMouseLeave={() => {
                    LdValuesPaused.current = false;
                  }}
                  onTouchStart={() => {
                    LdValuesPaused.current = true;
                  }}
                  onTouchEnd={() => {
                    LdValuesPaused.current = false;
                  }}
                  className="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-6 py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                  {idAboutUs?.aboutUs.valuesSection.map((idValues, iIndex) => (
                    <div
                      key={iIndex}
                      className={`flex w-full shrink-0 snap-center flex-col border bg-accent p-8 transition-colors duration-300 md:p-12 ${
                        LActiveValue === iIndex
                          ? "border-primary/30"
                          : "border-primary/10"
                      }`}
                    >
                      {fnRenderIcon(idValues.badge)}
                      <h3 className="text-2xl font-light mb-4 md:text-3xl break-words text-primary">
                        {idValues.title}
                      </h3>
                      <p className="text-primary/70 mb-8 leading-relaxed md:text-lg">
                        {idValues.subtitle}
                      </p>
                      <div className="mt-auto pt-6 border-t border-primary/10">
                        <p className="text-lg font-medium text-primary">
                          {idValues.highlight}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-lg text-primary/70 mt-12 max-w-3xl">
                {idAboutUs?.aboutUs.valuesSectionHeaderFooter.title}
              </p>
            </div>
          </div>
        </section>
        {/* Founder Note Section */}
        <section className="py-24 border-b border-border/40">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <TitleSubtitle
                idTitle={{
                  title: idAboutUs?.aboutUs.founderNote?.title,
                  className: "max-w-4xl text-left mb-10",
                  headingClass: "text-3xl md:text-4xl font-light",
                }}
              />
              <div className="grid md:grid-cols-[auto,1fr] gap-8 md:gap-12 items-start border border-primary/10 bg-accent p-8 md:p-12">
                {idAboutUs?.aboutUs.founderNote?.highlight && (
                  <Image
                    src={idAboutUs.aboutUs.founderNote.highlight}
                    alt={idAboutUs?.aboutUs.founderNote?.badge ?? "Founder"}
                              height={100}
          width={100}
                    className="h-32 w-32 md:h-40 md:w-40 rounded-full object-cover flex-shrink-0"
                  />
                )}
                <div>
                  <p className="text-xl md:text-2xl font-light leading-relaxed text-primary/90 italic mb-6">
                    {idAboutUs?.aboutUs.founderNote?.subtitle}
                  </p>
                  <p className="text-base font-medium text-primary">
                    {idAboutUs?.aboutUs.founderNote?.badge}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Timeline*/}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <p className="text-primary/50 text-sm tracking-widest uppercase mb-4">
                {idAboutUs?.aboutUs.timeLineHeader.badge}
              </p>

              <TitleSubtitle
                idTitle={{
                  ...idAboutUs?.aboutUs.timeLineHeader,
                  className: "max-w-5xl text-left",
                  headingClass: "text-3xl md:text-4xl font-light",
                  descripClass: "md:text-lg text-lg text-primary/70",
                }}
              />

              {/* Year-grouped accordion timeline */}
              <div className="mt-12 ml-4 border-l border-primary/20 md:ml-5">
                {/* MASTER ACCORDION FOR ALL PREVIOUS YEARS (e.g., 2021-2024) */}
                {LdYearGroups &&
                  LdYearGroups.length > 0 &&
                  (() => {
                    const endYear = LdYearGroups[LdYearGroups.length - 1]?.year;
                    const startYear = LdYearGroups[0]?.year;
                    const historyLabel =
                      startYear && endYear && startYear !== endYear
                        ? `${startYear} — ${endYear}`
                        : "Previous Years";

                    return (
                      <div className="relative pl-8 md:pl-12">
                        {/* Master History Trigger */}
                        <button
                          type="button"
                          onClick={() =>
                            fnSetHistoryAccordionOpen(!LHistoryAccordionOpen)
                          }
                          aria-expanded={LHistoryAccordionOpen}
                          className="group relative flex w-full items-center justify-between gap-4 py-4 text-left"
                        >
                          <span className="absolute -left-8 top-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full ring-4 ring-background transition-colors duration-300 md:-left-12 bg-primary" />
                          <div className="flex items-baseline gap-3">
                            <span className="text-2xl font-light transition-colors group-hover:text-primary md:text-3xl">
                              {historyLabel}
                            </span>
                          </div>
                          <ChevronDown
                            className={`h-5 w-5 flex-shrink-0 text-primary/50 transition-transform duration-300 ${LHistoryAccordionOpen ? "rotate-180" : ""}`}
                          />
                        </button>

                        {/* Master History Drawer */}
                        <div
                          className={`grid transition-all duration-300 ease-in-out ${LHistoryAccordionOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                        >
                          <div className="overflow-hidden">
                            {/*NESTED ACCORDIONS INSIDE HISTORY */}
                            {LdYearGroups.map((idGroup) => {
                              const LYearOpen =
                                LOpenHistoryYear === idGroup.year;
                              return (
                                <div
                                  className="relative pl-6"
                                  key={idGroup.year}
                                >
                                  <button
                                    type="button"
                                    onClick={() =>
                                      fnToggleHistoryYear(idGroup.year)
                                    }
                                    aria-expanded={LYearOpen}
                                    className="group flex w-full items-center justify-between gap-4 py-2 text-left"
                                  >
                                    <div className="flex items-baseline gap-3">
                                      <span className="text-xl font-light tracking-tight text-primary transition-colors group-hover:text-primary">
                                        {idGroup.year}
                                      </span>
                                    </div>
                                    <ChevronDown
                                      className={`h-4 w-4 flex-shrink-0 text-primary transition-transform duration-300 ${LYearOpen ? "rotate-180" : ""}`}
                                    />
                                  </button>

                                  {/* Individual Year Milestone Content */}
                                  <div
                                    className={`grid transition-all duration-300 ease-in-out ${LYearOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                                  >
                                    <div className="overflow-hidden">
                                      <ol className="relative my-4 ml-1 space-y-6 border-l border-primary/15 pb-2 pl-6 pt-2">
                                        {idGroup.events.map(
                                          (idEvent, iEventIdx) => (
                                            <li
                                              className="relative"
                                              key={iEventIdx}
                                            >
                                              <span className="absolute -left-6 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-primary ring-4 ring-background" />
                                              {idEvent.month && (
                                                <p className="text-xs font-bold uppercase tracking-widest text-primary/50">
                                                  {idEvent.month}
                                                </p>
                                              )}
                                              <h4 className="mt-1 text-base font-semibold md:text-lg">
                                                {idEvent.label}
                                              </h4>
                                              <p className="mt-1 text-base text-muted-background">
                                                {idEvent.description}
                                              </p>
                                            </li>
                                          ),
                                        )}
                                      </ol>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    );
                  })()}

                {/* LAST TIMELINE (2025 & Beyond) */}
                {idAboutUs?.aboutUs?.currentAndBeyondYears &&
                  (() => {
                    const LYearOpen = LOpenYear === LBeyondYear || true;
                    return (
                      <div className="relative pl-8 md:pl-12 mt-6">
                        <button
                          type="button"
                          onClick={() => fnToggleYear(LBeyondYear)}
                          aria-expanded={LYearOpen}
                          className="group relative flex w-full items-center justify-between gap-4 py-4 text-left"
                        >
                          <span className="absolute -left-8 top-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full ring-4 ring-background transition-colors duration-300 md:-left-12 bg-primary" />
                          <div className="flex items-baseline gap-3">
                            <span className="text-2xl font-light tracking-tight transition-colors group-hover:text-primary md:text-3xl">
                              {LBeyondYear}
                            </span>
                            <span className="text-xs font-medium uppercase tracking-widest text-primary/50">
                              {
                                idAboutUs.aboutUs.currentAndBeyondYears.heading
                                  ?.subtitle
                              }
                            </span>
                          </div>
                          <ChevronDown
                            className={`h-5 w-5 flex-shrink-0 text-primary/50 transition-transform duration-300 ${LYearOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                        <div
                          className={`grid transition-all duration-300 ease-in-out ${LYearOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                        >
                          <div className="overflow-hidden">
                            <div className="mb-8 mt-2 bg-primary p-6 text-background md:p-8">
                              <p className="mb-4 text-lg">
                                {
                                  idAboutUs.aboutUs.currentAndBeyondYears
                                    .heading?.highlight
                                }
                              </p>
                              <ul className="space-y-4">
                                {idAboutUs.aboutUs.currentAndBeyondYears.highlight?.map(
                                  (idHighlist, iIndex) => (
                                    <li
                                      className="flex items-start gap-3"
                                      key={iIndex}
                                    >
                                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-background/70" />
                                      <p>{idHighlist.label}</p>
                                    </li>
                                  ),
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })()}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials*/}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <TitleSubtitle
                idTitle={{
                  ...idAboutUs?.aboutUs.testimonialHeader,
                  className: "text-left",
                  headingClass:
                    "md:text-sm text-sm text-primary/50 uppercase tracking-widest",
                  descripClass: "text-3xl md:text-4xl font-light",
                }}
              />
              <div className="grid md:grid-cols-2 gap-8">
                {idAboutUs.aboutUs.testimonalCard.map((idCard, iIndex) => (
                  <CustomCard
                    key={iIndex}
                    idCardProps={{
                      header: {
                        ...idCard.header,
                        descripClass:
                          "italic md:text-lg text-lg text-primary/80 italic mb-8 md:leading-relaxed leading-relaxed line-clamp-none",
                        headingClass: "m-0",
                      },
                      className: "max-w-lg",
                      image: {
                        svg: idCard.image?.svg,
                        alternate: idCard.image?.alternate ?? "",
                        className: "h-12 w-12 text-primary/10 mx-4 mt-4",
                      },
                      avatar: idCard.avatar,
                      avatarDetails: idCard.avatarDetails,
                      namePosition: "bottom",
                      footerClassName: "items-start",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section*/}
        <section ref={LdSectionRefs("containerOne")}>
          <div className="py-24 bg-primary text-background">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto text-center">
                <TitleSubtitle
                  idTitle={{
                    ...idAboutUs?.aboutUs.ctaSection.header,
                    headingClass: "text-3xl md:text-4xl font-light",
                    descripClass:
                      "md:text-xl text-xl text-background max-w-3xl",
                  }}
                />
                <div className="grid md:grid-cols-3 gap-6">
                  {idAboutUs.aboutUs.ctaSection.buttons.map((idBtn, iIndex) =>
                    idBtn.href ? (
                      <Link
                        href={idBtn.href}
                        className="border border-background p-6 hover:bg-foreground transition-colors group"
                        key={iIndex}
                      >
                        {fnRenderIcon(
                          idBtn.icon,
                          "h-8 w-8 text-background mb-4 mx-auto",
                        )}
                        <p className="font-medium mb-2">{idBtn.label}</p>
                        <ArrowRight className="h-4 w-4 text-background mx-auto group-hover:translate-x-1 transition-transform" />
                      </Link>
                    ) : (
                      <div
                        key={iIndex}
                        className="border border-background p-6 hover:bg-foreground transition-colors group"
                        onClick={() =>
                          idBtn.formMode &&
                          fnHandleFormButtonClick(
                            idBtn.formMode as TformMode,
                            "containerOne",
                            idBtn.label,
                          )
                        }
                      >
                        {fnRenderIcon(
                          idBtn.icon,
                          "h-8 w-8 text-background mb-4 mx-auto",
                        )}
                        <p className="font-medium mb-2">{idBtn.label}</p>
                        <ArrowRight className="h-4 w-4 text-background mx-auto group-hover:translate-x-1 transition-transform" />
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
          {fnRenderFormBelowSection("containerOne")}
        </section>
      </>
    );
}