'use client'

import Link from "next/link";
import { useState } from "react";
import { getIconComponent } from "@repo/ui/lib/icon";
import { ArrowRight, CheckCircle, ChevronDown } from "lucide-react";
import CustomCard from "@repo/ui/components/custom-card";
import TitleSubtitle from "@repo/ui/components/title-subtitle";
import { useFormHandler } from "../../hooks/form-handler";
import { Tbutton, TformMode, TaboutUsPageTarget } from "@repo/middleware/types";

const renderIcon = (icon: Tbutton['icon'], className?: string) => {
    const iconName = typeof icon === "string" ? icon : "HelpCircle";
    const IconComponent = getIconComponent(iconName);
    return <IconComponent className={className || "h-8 w-8 mb-8"} />;
};

export default function AboutUs({ idAboutUs }: { idAboutUs: TaboutUsPageTarget }) {
    const { fnHandleFormButtonClick, fnRenderFormBelowSection, LdSectionRefs } = useFormHandler();
    const [iOpenMilestone, fnSetOpenMilestone] = useState<number | null>(null);
    const fnToggleMilestone = (iIndex: number) => fnSetOpenMilestone((iPrev) => (iPrev === iIndex ? null : iIndex));
    const iFinalMilestone = idAboutUs.aboutUs.previousYears.length;
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
                        <div className="grid md:grid-cols-3 gap-8">
                            {idAboutUs?.aboutUs.valuesSection.map((idValues, iIndex) => (
                                <div className="border border-primary/10 p-10 bg-accent" key={iIndex}>
                                    {renderIcon(idValues.badge)}
                                    <h3 className="text-2xl font-light mb-4">{idValues.title}</h3>
                                    <p className="text-primary/70 mb-6 leading-relaxed">
                                        {idValues.subtitle}
                                    </p>
                                    <div className="mt-auto pt-6 border-t border-primary/10">
                                        <p className="text-primary font-light">
                                            {idValues.highlight}
                                        </p>
                                    </div>
                                </div>
                            ))}
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
 
                    <div className="relative mt-12">
                        {/* Continuous vertical line
                            FIX: bg-primary/30 (Tailwind's opacity modifier) can silently fail to
                            render when --primary is defined in a format that doesn't support the
                            alpha channel shorthand. Using inline style + opacity sidesteps that
                            entirely. Also added z-0 + min-h so it never collapses to 0px if the
                            parent's rendered height comes in shorter than expected. */}
                        <div
                            className="absolute left-6 top-5 bottom-5 z-0 w-0.5 -translate-x-1/2 md:left-7 min-h-[40px]"
                            style={{
                                backgroundColor: "var(--primary, currentColor)",
                                opacity: 0.3,
                            }}
                        />
 
                        {idAboutUs.aboutUs.previousYears.map((idPrevYear, iIndex) => {
                            const bIsOpen = iOpenMilestone === iIndex;
                            const sNumber = String(iIndex + 1).padStart(2, "0");
 
                            return (
                                <div
                                    key={iIndex}
                                    className="relative pl-16 pb-10 md:pl-20"
                                >
                                    {/* Timeline node */}
                                    <span
                                        className={`absolute left-6 top-0 z-10 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background text-sm font-semibold transition-colors duration-300 md:left-7 md:h-12 md:w-12 ${
                                            bIsOpen
                                                ? "bg-primary text-background"
                                                : "bg-accent text-primary"
                                        }`}
                                    >
                                        {sNumber}
                                    </span>
 
                                    <div className="border-b border-primary/10 pb-8">
                                        <button
                                            type="button"
                                            onClick={() => fnToggleMilestone(iIndex)}
                                            aria-expanded={bIsOpen}
                                            className="group flex w-full items-center justify-between gap-4 text-left"
                                        >
                                            <div>
                                                <p className="text-xs font-medium uppercase tracking-widest text-primary/50">
                                                    {idPrevYear.icon}
                                                </p>
 
                                                <h3 className="mt-0.5 text-xl font-light transition-colors group-hover:text-primary md:text-2xl">
                                                    {idPrevYear.label}
                                                </h3>
                                            </div>
 
                                            <ChevronDown
                                                className={`h-5 w-5 flex-shrink-0 text-primary/50 transition-transform duration-300 ${
                                                    bIsOpen ? "rotate-180" : ""
                                                }`}
                                            />
                                        </button>
 
                                        <div
                                            className={`grid transition-all duration-300 ease-in-out ${
                                                bIsOpen
                                                    ? "grid-rows-[1fr] opacity-100"
                                                    : "grid-rows-[0fr] opacity-0"
                                            }`}
                                        >
                                            <div className="overflow-hidden">
                                                <div className="mt-4 border border-primary/10 bg-accent p-6 md:p-8">
                                                    <p className="text-lg leading-relaxed text-primary/80">
                                                        {idPrevYear.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
 
                        {/* Final milestone */}
                        {(() => {
                            const bIsOpen = iOpenMilestone === iFinalMilestone;
 
                            return (
                                <div className="relative pl-16 md:pl-20">
                                    <span
                                        className={`absolute left-6 top-0 z-10 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background text-sm font-semibold transition-colors duration-300 md:left-7 md:h-12 md:w-12 ${
                                            bIsOpen
                                                ? "bg-background text-primary ring-2 ring-primary"
                                                : "bg-primary text-background"
                                        }`}
                                    >
                                        {String(iFinalMilestone + 1).padStart(2, "0")}
                                    </span>
 
                                    <button
                                        type="button"
                                        onClick={() => fnToggleMilestone(iFinalMilestone)}
                                        aria-expanded={bIsOpen}
                                        className="group flex w-full items-center justify-between gap-4 text-left"
                                    >
                                        <div>
                                            <p className="text-xs font-medium uppercase tracking-widest text-primary/50">
                                                {idAboutUs.aboutUs.currentAndBeyondYears.heading.title}
                                            </p>
 
                                            <h3 className="mt-0.5 text-xl font-light transition-colors group-hover:text-primary md:text-2xl">
                                                {idAboutUs.aboutUs.currentAndBeyondYears.heading.subtitle}
                                            </h3>
                                        </div>
 
                                        <ChevronDown
                                            className={`h-5 w-5 flex-shrink-0 text-primary/50 transition-transform duration-300 ${
                                                bIsOpen ? "rotate-180" : ""
                                            }`}
                                        />
                                    </button>
 
                                    <div
                                        className={`grid transition-all duration-300 ease-in-out ${
                                            bIsOpen
                                                ? "grid-rows-[1fr] opacity-100"
                                                : "grid-rows-[0fr] opacity-0"
                                        }`}
                                    >
                                        <div className="overflow-hidden">
                                            <div className="mt-4 bg-primary p-6 text-background md:p-8">
                                                <p className="mb-4 text-lg">
                                                    {
                                                        idAboutUs.aboutUs.currentAndBeyondYears
                                                            .heading.highlight
                                                    }
                                                </p>
 
                                                <ul className="space-y-4">
                                                    {idAboutUs.aboutUs.currentAndBeyondYears.highlight?.map(
                                                        (idHighlist, iIndex) => (
                                                            <li
                                                                key={iIndex}
                                                                className="flex items-start gap-3"
                                                            >
                                                                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-background/70" />
 
                                                                <p>{idHighlist.label}</p>
                                                            </li>
                                                        )
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