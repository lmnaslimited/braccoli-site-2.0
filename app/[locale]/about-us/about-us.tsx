'use client'

import Link from "next/link";
import { getIconComponent } from "@repo/ui/lib/icon";
import { ArrowRight, CheckCircle } from "lucide-react";
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
                        <p className="text-primary/50 text-sm tracking-widest uppercase mb-4">{idAboutUs?.aboutUs.timeLineHeader.badge}</p>
                        <TitleSubtitle
                            idTitle={{
                                ...idAboutUs?.aboutUs.timeLineHeader,
                                className: "max-w-5xl text-left",
                                headingClass: "text-3xl md:text-4xl font-light",
                                descripClass: "md:text-lg text-lg text-primary/70",
                            }}
                        />
                        <div className="space-y-12">
                            {idAboutUs.aboutUs.previousYears.map((idPrevYear, iIndex) => (
                                <div className="grid md:grid-cols-12 gap-6 items-start" key={iIndex}>
                                    <div className="md:col-span-2">
                                        <div className="sticky top-24">
                                            <p className="text-3xl font-light">{idPrevYear.icon}</p>
                                            <p className="text-primary/50">{idPrevYear.label}</p>
                                        </div>
                                    </div>
                                    <div className="md:col-span-10 bg-background p-8 border border-primary/5">
                                        <p className="text-lg text-primary/80">
                                            {idPrevYear.description}
                                        </p>
                                    </div>
                                </div>
                            ))}

                            {/* Current and Beyond Years */}
                            <div className="grid md:grid-cols-12 gap-6 items-start">
                                <div className="md:col-span-2">
                                    <div className="sticky top-24">
                                        <p className="text-3xl font-light">{idAboutUs.aboutUs.currentAndBeyondYears.heading.title}</p>
                                        <p className="text-primary/50">{idAboutUs.aboutUs.currentAndBeyondYears.heading.subtitle}</p>
                                    </div>
                                </div>
                                <div className="md:col-span-10 bg-primary text-background p-8">
                                    <p className="text-lg mb-4">{idAboutUs.aboutUs.currentAndBeyondYears.heading.highlight}</p>
                                    <ul className="space-y-4">
                                        {idAboutUs.aboutUs.currentAndBeyondYears.highlight?.map((idHighlist, iIndex) => (
                                            <li className="flex items-start gap-3" key={iIndex}>
                                                <CheckCircle className="h-5 w-5 text-background/70 mt-0.5 flex-shrink-0" />
                                                <p>{idHighlist.label}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
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
                                            descripClass: "italic md:text-lg text-lg text-primary/80 italic mb-8 md:leading-relaxed leading-relaxed",
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
            <div ref={LdSectionRefs("containerOne")}>
                <section className="py-24 bg-primary text-background">
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
                </section>
                {fnRenderFormBelowSection("containerOne")}
            </div>
        </>
    )
}