"use client";
import Link from "next/link";
import * as Icons from "lucide-react";
import Tab from "@repo/ui/components/tab";
import CustomCard from "@repo/ui/components/customCard";
import { Badge } from "@repo/ui/components/ui/badge";
import { Button } from "@repo/ui/components/ui/button";
import { ProblemSection } from "@repo/ui/components/problemSection";
import { SolutionSection } from "@repo/ui/components/solutionSection";
import { DynamicSidebar } from "@repo/ui/components/dynamicSidebar";
// import Callout from "@repo/ui/components/callout";
import { ArrowLeft, ArrowRight, LucideIcon } from "lucide-react";
import { TcaseStudies, TformMode } from "@repo/middleware";
import { useFormHandler } from "../../hooks/useFormHandler";

export default function CaseStudyPage({ idcaseStudies }: { idcaseStudies: TcaseStudies }) {
    const { fnHandleFormButtonClick, fnRenderFormBelowSection, LdSectionRefs } = useFormHandler();
    return (
        <>
            <main className="min-h-screen bg-background pb-20">
                <section className="relative h-[400px] md:h-[500px]">
                    <div className="absolute inset-0 bg-primary" />
                    {/* Download Component - Positioned on the right side */}

                    <CustomCard
                        idCardProps={{
                            header: {
                                ...idcaseStudies.caseStudies[0]?.heroSection.header,
                                headingClass: "text-lg mb-2 text-primary",
                                descripClass: "text-sm text-primary",
                            },
                            className:
                                "absolute right-4 top-4 z-20 hidden md:block md:right-8 md:top-8 lg:right-12 lg:top-12 w-64 backdrop-blur-md border border-background",
                            buttons: idcaseStudies.caseStudies[0]?.heroSection.buttons?.map(button => ({
                                ...button,
                                icon: "Download",
                                iconPosition: "before",
                                variant: "outline",
                                size: "lg",
                            })),
                            onButtonClick: (() => {
                                const LaButton = (idcaseStudies.caseStudies[0]?.heroSection.buttons ?? []).find(
                                  btn => "formMode" in btn
                                );
                                return LaButton
                                  ? () =>
                                      fnHandleFormButtonClick(
                                        LaButton.formMode as TformMode,
                                        "containerTwo",
                                        LaButton.label
                                      )
                                  : undefined;
                              })(),
                        }}
                    />

                    <div className="container relative z-10 mx-auto flex h-full flex-col items-start justify-end px-4 pb-12">
                        <Link
                            href={idcaseStudies.caseStudies[0]?.heroSection.link?.[0]?.href ?? ""}
                            className="mb-4 flex items-center gap-2 text-background hover:underline"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            {idcaseStudies.caseStudies[0]?.heroSection.link?.[0]?.label ?? ""}
                        </Link>
                        <Badge className="mb-2">{idcaseStudies.caseStudies[0]?.heroSection.tag}</Badge>
                        <h1 className="mb-2 text-4xl font-bold text-background md:text-5xl">
                            {idcaseStudies.caseStudies[0]?.name}
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 text-background">
                            {idcaseStudies.caseStudies[0]?.heroSection.list?.map((idItem, iIndex) => {
                                const IconComponent =
                                    (Icons[idItem.icon as keyof typeof Icons] as LucideIcon) ||
                                    Icons.Users;
                                return (
                                    <div className="flex items-center gap-1" key={iIndex}>
                                        <IconComponent className="h-4 w-4" />
                                        <span className="text-sm">{idItem.label}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Main Content with Dynamic Sidebar */}
                <section className="container mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                        {/* Main Content Column */}
                        <div className="lg:col-span-8">
                            {/* Problem Section */}
                            {idcaseStudies.caseStudies[0]?.problemSection && <ProblemSection idCaseStudy={idcaseStudies.caseStudies[0]?.problemSection}
                                onButtonClick={(mode, formTitle) => fnHandleFormButtonClick(mode as TformMode, "containerOne", formTitle)} />}

                            {/* Solution Section */}
                            <div ref={LdSectionRefs("containerOne")}>
                                {idcaseStudies.caseStudies[0]?.solutionSection && <SolutionSection idCaseStudy={idcaseStudies.caseStudies[0]?.solutionSection}
                                    onButtonClick={(mode, formTitle) => fnHandleFormButtonClick(mode as TformMode, "containerOne", formTitle)} />}
                                {fnRenderFormBelowSection("containerOne", { idPdfData: idcaseStudies })}
                            </div>
                        </div>

                        {/* Dynamic Sidebar - Hidden on smaller screens */}
                        <div className="hidden lg:block lg:col-span-4" ref={LdSectionRefs("containerTwo")}>

                            {idcaseStudies.caseStudies[0]?.sidebarData && <DynamicSidebar idCaseStudy={idcaseStudies.caseStudies[0]?.sidebarData}
                                onButtonClick={(mode, formTitle) => fnHandleFormButtonClick(mode as TformMode, "containerTwo", formTitle)} />}

                            {fnRenderFormBelowSection("containerTwo", { idPdfData: idcaseStudies })}
                        </div>
                    </div>
                </section>

                {/* Related Case Studies Section */}
                <section className="border-t bg-muted py-20">
                    <div className=" flex flex-col items-center justify-between gap-6 sm:flex-row container mx-auto">
                        <h2 className="text-3xl font-bold">Explore More Case Studies</h2>
                    </div>
                    <Tab
                        idTab={{
                            data:
                                idcaseStudies.caseStudies[0]?.relatedCaseStudies.map((idCard) => ({
                                    ...idCard,
                                    header: {
                                        ...idCard.header,
                                        headingClass: "text-xl font-semibold mb-2",
                                        descripClass: "text-base"
                                    },
                                    tag: idCard.category,
                                    // className: "max-w-sm",
                                    buttons:
                                        idCard.buttons?.map((iaButton) => ({
                                            ...iaButton,
                                            icon: "ArrowRight",
                                            iconPosition: "after",
                                            size: "lg"
                                        })) ?? [],
                                })) ?? [],
                            TabDefault: {
                                text: "All Industry",
                                label: "View All Solution",
                            },
                        }}
                    />
                    <div className="text-center">
                        {(idcaseStudies.caseStudies[0]?.heroSection.link?.[0]?.href && idcaseStudies.caseStudies[0].heroSection.link[0].label) && (
                            <Link href={idcaseStudies.caseStudies[0].heroSection.link[0].href}>
                                <Button size="lg">
                                    {idcaseStudies.caseStudies[0].heroSection.link[0].label}
                                    <ArrowRight className="h-4 w-4" />
                                </Button>
                            </Link>
                        )}
                    </div>
                </section>
            </main>
        </>
    );
}


