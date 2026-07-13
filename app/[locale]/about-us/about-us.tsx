'use client'

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { getIconComponent } from "@repo/ui/lib/icon";
import { ArrowRight, CheckCircle, ChevronDown } from "lucide-react";
import CustomCard from "@repo/ui/components/custom-card";
import TitleSubtitle from "@repo/ui/components/title-subtitle";
import { useFormHandler } from "../../hooks/form-handler";
import { Tbutton, TformMode, TaboutUsPageTarget, Titems } from "@repo/middleware/types";

const renderIcon = (icon: Tbutton['icon'], className?: string) => {
    const iconName = typeof icon === "string" ? icon : "HelpCircle";
    const IconComponent = getIconComponent(iconName);
    return <IconComponent className={className || "h-8 w-8 mb-8"} />;
};

export default function AboutUs({ idAboutUs }: { idAboutUs: TaboutUsPageTarget }) {
    const { fnHandleFormButtonClick, fnRenderFormBelowSection, LdSectionRefs } = useFormHandler();
    // Journey timeline — group milestones by year (parsed from each item's icon, e.g. "APR 2021")
    const [iOpenYear, fnSetOpenYear] = useState<string | null>(null);
    const fnToggleYear = (sYear: string) => fnSetOpenYear((iPrev) => (iPrev === sYear ? null : sYear));
    const fnParseYear = (idIcon: Titems["icon"]): string => {
        const sText = typeof idIcon === "string" ? idIcon : "";
        return sText.match(/\d{4}/)?.[0] ?? sText.trim();
    };
    const fnParseMonth = (idIcon: Titems["icon"], sYear: string): string => {
        const sText = typeof idIcon === "string" ? idIcon : "";
        return sText.replace(sYear, "").replace(/&.*/, "").trim();
    };
    const ldYearGroups: { year: string; events: { month: string; label?: string; description?: string }[] }[] = [];
    const ldYearIndex: Record<string, number> = {};
    idAboutUs.aboutUs.previousYears.forEach((idPrevYear) => {
        const sYear = fnParseYear(idPrevYear.icon);
        let iGroupIdx = ldYearIndex[sYear];
        if (iGroupIdx === undefined) {
            iGroupIdx = ldYearGroups.length;
            ldYearIndex[sYear] = iGroupIdx;
            ldYearGroups.push({ year: sYear, events: [] });
        }
        ldYearGroups[iGroupIdx]!.events.push({
            month: fnParseMonth(idPrevYear.icon, sYear),
            label: idPrevYear.label,
            description: idPrevYear.description,
        });
    });
    const sBeyondYear = idAboutUs.aboutUs.currentAndBeyondYears.heading.title ?? "Beyond";

    // Values auto-playing snap carousel
    const rValuesTrack = useRef<HTMLDivElement>(null);
    const rActiveValue = useRef(0);
    const rValuesPaused = useRef(false);
    const [iActiveValue, fnSetActiveValue] = useState(0);
    const iValuesCount = idAboutUs?.aboutUs.valuesSection.length ?? 0;
    const fnGoValue = (iIndex: number) => {
        if (iValuesCount === 0) return;
        const iClamped = ((iIndex % iValuesCount) + iValuesCount) % iValuesCount;
        const ndTrack = rValuesTrack.current;
        const ndCard = ndTrack?.children[iClamped] as HTMLElement | undefined;
        if (ndTrack && ndCard) {
            ndTrack.scrollTo({ left: ndCard.offsetLeft - (ndTrack.clientWidth - ndCard.clientWidth) / 2, behavior: "smooth" });
        }
        fnSetActiveValue(iClamped);
    };
    const fnOnValuesScroll = () => {
        const ndTrack = rValuesTrack.current;
        if (!ndTrack) return;
        const iCenter = ndTrack.scrollLeft + ndTrack.clientWidth / 2;
        let iNearest = 0;
        let iMin = Infinity;
        Array.from(ndTrack.children).forEach((ndChild, iIdx) => {
            const ndEl = ndChild as HTMLElement;
            const iCardCenter = ndEl.offsetLeft + ndEl.clientWidth / 2;
            const iDist = Math.abs(iCardCenter - iCenter);
            if (iDist < iMin) {
                iMin = iDist;
                iNearest = iIdx;
            }
        });
        fnSetActiveValue(iNearest);
    };
    useEffect(() => {
        rActiveValue.current = iActiveValue;
    }, [iActiveValue]);
    useEffect(() => {
        if (iValuesCount <= 1) return;
        const idInterval = setInterval(() => {
            if (rValuesPaused.current) return;
            const ndTrack = rValuesTrack.current;
            const iNext = (rActiveValue.current + 1) % iValuesCount;
            const ndCard = ndTrack?.children[iNext] as HTMLElement | undefined;
            if (ndTrack && ndCard) {
                ndTrack.scrollTo({ left: ndCard.offsetLeft - (ndTrack.clientWidth - ndCard.clientWidth) / 2, behavior: "smooth" });
            }
            fnSetActiveValue(iNext);
        }, 5000);
        return () => clearInterval(idInterval);
    }, [iValuesCount]);

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
                                headingClass: "md:text-sm text-sm text-white tracking-widest uppercase",
                                descripClass: "text-4xl md:text-6xl font-light tracking-tight leading-tight text-white",
                            }}
                        />
                        <div className="h-0.5 w-24 bg-white mb-12"></div>
                        <div className="max-w-4xl">
                            {idAboutUs?.aboutUs.heroSection.highlight?.map((idItem, iIndex) => (
                                <p key={iIndex} className={iIndex === 0 ? 'text-xl text-secondary/90 leading-relaxed mb-8' : 'text-lg text-secondary/80 leading-relaxed'}>
                                    {idItem?.label}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section*/}
            <section className="py-24 border-b border-border/40">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <p className="text-primary/50 text-sm tracking-widest uppercase mb-4">{idAboutUs?.aboutUs.valuesSectionHeaderFooter.header.badge}</p>
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
                                        aria-pressed={iActiveValue === iIndex}
                                        className={`rounded-full border px-6 py-2.5 text-sm font-medium transition-colors duration-300 ${iActiveValue === iIndex ? "border-primary bg-primary text-background" : "border-primary/30 text-primary hover:border-primary/60"}`}
                                    >
                                        {idValues.title}
                                    </button>
                                ))}
                            </div>
                            {/* Horizontal snap carousel */}
                            <div
                                ref={rValuesTrack}
                                onScroll={fnOnValuesScroll}
                                onMouseEnter={() => { rValuesPaused.current = true; }}
                                onMouseLeave={() => { rValuesPaused.current = false; }}
                                onTouchStart={() => { rValuesPaused.current = true; }}
                                onTouchEnd={() => { rValuesPaused.current = false; }}
                                className="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-6 py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                            >
                                {idAboutUs?.aboutUs.valuesSection.map((idValues, iIndex) => (
                                    <div
                                        key={iIndex}
                                        className={`flex min-w-[85%] shrink-0 snap-center flex-col border bg-accent p-8 transition-colors duration-300 md:min-w-[70%] md:p-12 ${iActiveValue === iIndex ? "border-primary/30" : "border-primary/10"}`}
                                    >
                                        {renderIcon(idValues.badge)}
                                        <h3 className="text-2xl font-light mb-4 md:text-3xl">{idValues.title}</h3>
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
                        {ldYearGroups.map((idGroup) => {
                            const bYearOpen = iOpenYear === idGroup.year;
                            return (
                                <div className="relative pl-8 md:pl-12" key={idGroup.year}>
                                    <button
                                        type="button"
                                        onClick={() => fnToggleYear(idGroup.year)}
                                        aria-expanded={bYearOpen}
                                        className="group relative flex w-full items-center justify-between gap-4 py-4 text-left"
                                    >
                                        {/* Year node on the main line */}
                                        <span
                                            className={`absolute -left-8 top-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full ring-4 ring-background transition-colors duration-300 md:-left-12 ${bYearOpen ? "bg-primary" : "bg-primary/40 group-hover:bg-primary"}`}
                                        />
                                        <div className="flex items-baseline gap-3">
                                            <span className="text-2xl font-light tracking-tight transition-colors group-hover:text-primary md:text-3xl">
                                                {idGroup.year}
                                            </span>
                                            <span className="text-xs font-medium uppercase tracking-widest text-primary/50">
                                                {idGroup.events.length} milestone{idGroup.events.length > 1 ? "s" : ""}
                                            </span>
                                        </div>
                                        <ChevronDown className={`h-5 w-5 flex-shrink-0 text-primary/50 transition-transform duration-300 ${bYearOpen ? "rotate-180" : ""}`} />
                                    </button>
                                    {/* Drawer: this year's mini-timeline */}
                                    <div className={`grid transition-all duration-300 ease-in-out ${bYearOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                                        <div className="overflow-hidden">
                                            <ol className="relative mb-8 ml-1 space-y-6 border-l border-primary/15 pb-2 pl-6 pt-2">
                                                {idGroup.events.map((idEvent, iEventIdx) => (
                                                    <li className="relative" key={iEventIdx}>
                                                        <span className="absolute -left-6 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-primary ring-4 ring-background" />
                                                        {idEvent.month && (
                                                            <p className="text-xs font-semibold uppercase tracking-widest text-primary/50">
                                                                {idEvent.month}
                                                            </p>
                                                        )}
                                                        <h4 className="mt-0.5 text-lg font-light md:text-xl">
                                                            {idEvent.label}
                                                        </h4>
                                                        <p className="mt-1 leading-relaxed text-primary/70">
                                                            {idEvent.description}
                                                        </p>
                                                    </li>
                                                ))}
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                        {/* 2025 & Beyond — its own year accordion */}
                        {(() => {
                            const bYearOpen = iOpenYear === sBeyondYear;
                            return (
                                <div className="relative pl-8 md:pl-12">
                                    <button
                                        type="button"
                                        onClick={() => fnToggleYear(sBeyondYear)}
                                        aria-expanded={bYearOpen}
                                        className="group relative flex w-full items-center justify-between gap-4 py-4 text-left"
                                    >
                                        {/* Final highlighted node */}
                                        <span
                                            className={`absolute -left-8 top-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary ring-4 ring-background transition-all duration-300 md:-left-12 ${bYearOpen ? "scale-125" : ""}`}
                                        />
                                        <div className="flex items-baseline gap-3">
                                            <span className="text-2xl font-light tracking-tight transition-colors group-hover:text-primary md:text-3xl">
                                                {sBeyondYear}
                                            </span>
                                            <span className="text-xs font-medium uppercase tracking-widest text-primary/50">
                                                {idAboutUs.aboutUs.currentAndBeyondYears.heading.subtitle}
                                            </span>
                                        </div>
                                        <ChevronDown className={`h-5 w-5 flex-shrink-0 text-primary/50 transition-transform duration-300 ${bYearOpen ? "rotate-180" : ""}`} />
                                    </button>
                                    <div className={`grid transition-all duration-300 ease-in-out ${bYearOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                                        <div className="overflow-hidden">
                                            <div className="mb-8 mt-2 bg-primary p-6 text-background md:p-8">
                                                <p className="mb-4 text-lg">
                                                    {idAboutUs.aboutUs.currentAndBeyondYears.heading.highlight}
                                                </p>
                                                <ul className="space-y-4">
                                                    {idAboutUs.aboutUs.currentAndBeyondYears.highlight?.map((idHighlist, iIndex) => (
                                                        <li className="flex items-start gap-3" key={iIndex}>
                                                            <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-background/70" />
                                                            <p>{idHighlist.label}</p>
                                                        </li>
                                                    ))}
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
                                headingClass: "md:text-sm text-sm text-primary/50 uppercase tracking-widest",
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
                                            descripClass: "italic md:text-lg text-lg text-primary/80 italic mb-8 md:leading-relaxed leading-relaxed line-clamp-none",
                                            headingClass: "m-0"
                                        },
                                        className: "max-w-lg",
                                        image: {
                                            svg: idCard.image?.svg,
                                            alternate: idCard.image?.alternate ?? "",
                                            className: "h-12 w-12 text-primary/10 mx-4 mt-4"
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
                                    descripClass: "md:text-xl text-xl text-background max-w-3xl",
                                }}
                            />
                            <div className="grid md:grid-cols-3 gap-6">
                                {idAboutUs.aboutUs.ctaSection.buttons.map((idBtn, iIndex) => (
                                    idBtn.href ? (
                                        <Link href={idBtn.href} className="border border-background p-6 hover:bg-foreground transition-colors group" key={iIndex}>
                                            {renderIcon(idBtn.icon, "h-8 w-8 text-background mb-4 mx-auto")}
                                            <p className="font-medium mb-2">{idBtn.label}</p>
                                            <ArrowRight className="h-4 w-4 text-background mx-auto group-hover:translate-x-1 transition-transform" />
                                        </Link>) : (
                                        <div
                                            key={iIndex}
                                            className="border border-background p-6 hover:bg-foreground transition-colors group"
                                            onClick={() => idBtn.formMode && fnHandleFormButtonClick(idBtn.formMode as TformMode, "containerOne", idBtn.label)}
                                        >
                                            {renderIcon(idBtn.icon, "h-8 w-8 text-background mb-4 mx-auto")}
                                            <p className="font-medium mb-2">{idBtn.label}</p>
                                            <ArrowRight className="h-4 w-4 text-background mx-auto group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    )
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {fnRenderFormBelowSection("containerOne")}
            </section>
        </>
    )
}