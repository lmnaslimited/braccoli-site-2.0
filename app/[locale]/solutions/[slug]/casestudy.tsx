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
import { TcaseStudies } from "@repo/middleware";

export default async function CaseStudyPage({ idcaseStudies }: { idcaseStudies: TcaseStudies }) {
    return (
        <>
            <main className="min-h-screen bg-background pb-20">
                <section className="relative h-[400px] md:h-[500px]">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-primary/40" />
                    {/* Download Component - Positioned on the right side */}
                    <CustomCard
                        idCardProps={{
                            header: {
                                ...idcaseStudies.heroSection.header,
                                headingClass: "text-lg mb-2 text-background",
                                descripClass: "text-sm text-background/80",
                            },
                            className:
                                "absolute right-4 top-4 z-20 hidden md:block md:right-8 md:top-8 lg:right-12 lg:top-12 w-64 backdrop-blur-md bg-background/10 border border-background/20",
                            buttons: idcaseStudies.heroSection.buttons?.map(button => ({
                                ...button,
                                icon: "Download",
                                iconPosition: "before",
                                variant: "outline",
                                size: "lg",
                            }))
                        }}
                    />
                    <div className="container relative z-10 mx-auto flex h-full flex-col items-start justify-end px-4 pb-12">
                        <Link
                            href={idcaseStudies.heroSection.link?.[0]?.href ?? ""}
                            className="mb-4 flex items-center gap-2 text-background hover:underline"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            {idcaseStudies.heroSection.link?.[0]?.label ?? ""}
                        </Link>
                        <Badge className="mb-2">{idcaseStudies.heroSection.tag}</Badge>
                        <h1 className="mb-2 text-4xl font-bold text-background md:text-5xl">
                            {idcaseStudies.name}
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 text-background">
                            {idcaseStudies.heroSection.list?.map((idItem, iIndex) => {
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
                            <ProblemSection idCaseStudy={idcaseStudies.problemSection} />

                            {/* Solution Section */}
                            <SolutionSection idCaseStudy={idcaseStudies.solutionSection} />
                        </div>

                        {/* Dynamic Sidebar - Hidden on smaller screens */}
                        <div className="hidden lg:block lg:col-span-4">
                            <DynamicSidebar idCaseStudy={idcaseStudies.sidebarData} />
                        </div>
                    </div>
                </section>

                {/* Related Case Studies Section */}
                <section className="border-t bg-muted/30 py-20">
                    <div className=" flex flex-col items-center justify-between gap-6 sm:flex-row container mx-auto">
                        <h2 className="text-3xl font-bold">Explore More Case Studies</h2>
                    </div>
                    <Tab
                        idTab={{
                            data:
                                idcaseStudies.relatedCaseStudies.map((idCard) => ({
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
                        {(idcaseStudies.heroSection.link?.[0]?.href && idcaseStudies.heroSection.link[0].label) && (
                            <Link href={idcaseStudies.heroSection.link[0].href}>
                                <Button size="lg">
                                    {idcaseStudies.heroSection.link[0].label}
                                    <ArrowRight className="h-4 w-4" />
                                </Button>
                            </Link>
                        )}
                    </div>
                </section>

                <section className="bg-dark/70 py-12">
                    <div className="container mx-auto px-4 text-center">
                        {/* <Callout idCallout={caseStudy.footer as TcalloutProps} /> */}
                    </div>
                </section>
            </main>
        </>
    );
}


