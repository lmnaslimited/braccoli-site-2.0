"use client"
import Link from "next/link";
import * as Icons from 'lucide-react';
import { getIconComponent } from "@repo/ui/lib/icon";
import Hero from "@repo/ui/components/hero";
import FAQs from "@repo/ui/components/faq";
import TitleSubtitle from "@repo/ui/components/titleSubtitle";
import { Button } from "@repo/ui/components/ui/button";
import CustomCard from "@repo/ui/components/customCard";
import { Tabs, TabsContent, TabsList, TabsTrigger, } from "@repo/ui/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@repo/ui/components/ui/table";
import { useFormHandler } from "../hooks/useFormHandler";
import { Tbutton, TformMode, TpricingPageTarget } from "@repo/middleware";
import { ArrowRight } from "lucide-react";


export default function Pricing({ idPricing }: { idPricing: TpricingPageTarget }) {
    const { fnHandleFormButtonClick, fnRenderFormBelowSection, LdSectionRefs } = useFormHandler();
    return (
        <>
            <div ref={LdSectionRefs("containerOne")}>
                <Hero idHero={{
                    ...idPricing.pricing.heroSection,
                    buttons: idPricing.pricing.heroSection.buttons.map((idButton) => ({
                        ...idButton,
                        iconPosition: "after",
                        size: "lg",
                    })),
                }}
                    onButtonClick={(mode) => fnHandleFormButtonClick(mode as TformMode, "containerOne")}
                />
                {fnRenderFormBelowSection("containerOne")}
            </div>

            {/* Problem Section */}
            <div ref={LdSectionRefs("containerTwo")}>
                <section className="border-b border-border/40 py-16 md:py-24 lg:py-24 bg-accent">
                    <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
                        <TitleSubtitle idTitle={{
                            ...idPricing.pricing.problemSection.header,
                            className: "mx-auto max-w-[58rem] text-center",
                            descripClass: "mx-auto",
                        }} />
                        <div className="mx-auto max-w-4xl">
                            <div className="relative p-8 bg-background rounded-xl border-2 border-muted shadow-lg">
                                <div className="grid gap-6 md:grid-cols-2">
                                    {idPricing.pricing.problemSection.list.map((idIssue, iIndex) => {
                                        const iconName = typeof idIssue.icon === "string" ? idIssue.icon : "HelpCircle";
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
                                    })}
                                </div>
                                <div className="mt-8 pt-8 border-t border-border text-center">
                                    <p className="text-lg font-medium mb-6">
                                        {idPricing.pricing.problemSection.title}
                                    </p>
                                    <div className="flex flex-col gap-2 sm:flex-row justify-center">
                                        {idPricing.pricing.problemSection.buttons.map((idBtn, iIndex) => (
                                            <Button
                                                key={iIndex}
                                                size="lg"
                                                variant={
                                                    (idBtn.variant as Tbutton["variant"]) ?? "default"
                                                }
                                                onClick={() => idBtn.formMode && fnHandleFormButtonClick(idBtn.formMode as TformMode, "containerTwo")}
                                            >
                                                {idBtn.href ? <Link href={idBtn.href}> {idBtn.label} </Link> : idBtn.label}
                                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                            </Button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {fnRenderFormBelowSection("containerTwo")}
            </div>

            {/* Plans Section*/}
            <div ref={LdSectionRefs("containerThree")}>
                <section className="border-b border-border/40 py-16 md:py-24 lg:py-24 bg-background">
                    <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
                        <div className="flex w-fit items-center rounded-full bg-accent px-3 py-1 text-sm mb-4 mx-auto">
                            <span className="font-medium">{idPricing.pricing.planHeader.badge}</span>
                        </div>
                        <TitleSubtitle idTitle={{
                            ...idPricing.pricing.planHeader,
                            className:
                                "mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-6",
                            descripClass: "md:text-xl/relaxed ",
                            headingClass: "md:text-5xl",
                        }} />
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
                                                    {idPricing.pricing.planSection.pricingPlans.map((idPlan) => (
                                                        <TableHead
                                                            key={idPlan.name}
                                                            className="text-center text-background"
                                                        >
                                                            {idPlan.name}
                                                        </TableHead>
                                                    ))}
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {idPricing.pricing.planSection.features.map((iFeature, iIndex) => (
                                                    <TableRow
                                                        key={iIndex}
                                                        className="border-b hover:bg-grayBackground"
                                                    >
                                                        <TableCell className="font-medium p-4">
                                                            {iFeature.label}
                                                        </TableCell>
                                                        {idPricing.pricing.planSection.pricingPlans.map((iPlan, iPlanIndex) => (
                                                            <TableCell key={iPlanIndex} className="text-center p-4">
                                                                {
                                                                    iPlan[
                                                                    Object.keys(iPlan)[
                                                                    iIndex + 1
                                                                    ] as keyof typeof iPlan
                                                                    ]
                                                                }
                                                            </TableCell>
                                                        ))}
                                                    </TableRow>
                                                ))}
                                                <TableRow className="bg-grayBackground border-t">
                                                    <TableCell></TableCell>
                                                    {idPricing.pricing.planSection.pricingPlans.map((iPlan, iIndex) => (
                                                        <TableCell key={iIndex} className="text-center">
                                                            <Button
                                                                variant={iIndex === 2 ? "default" : "outline"}
                                                                size="sm"
                                                                className={
                                                                    iIndex === 2
                                                                        ? "bg-primary hover:bg-primary/80"
                                                                        : ""
                                                                }
                                                            >
                                                                {iIndex === 2 ? "Most Popular" : "Get Started"}
                                                            </Button>
                                                        </TableCell>
                                                    ))}
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </div>
                                </div>
                            </div>
                            <div className="mx-auto max-w-[58rem] text-center mt-16 bg-accent p-8 rounded-xl border-2 border-muted shadow-lg">
                                <div className="inline-flex items-center rounded-full bg-primary text-background px-3 py-1 text-sm mb-4">
                                    <span className="font-medium">{idPricing.pricing.planFooter.title}</span>
                                </div>
                                <TitleSubtitle idTitle={{
                                    ...idPricing.pricing.planFooter.header,
                                    className:
                                        "mx-auto flex max-w-[58rem] flex-col items-center justify-center text-center mb-6",
                                    descripClass: "md:text-sm",
                                    headingClass: "md:text-xl",
                                }} />
                                <div className="flex flex-col gap-2 sm:flex-row justify-center">
                                    {idPricing.pricing.planFooter.buttons.map((idBtn, iIndex) => (
                                        <Button
                                            key={iIndex}
                                            size="lg"
                                            variant={(idBtn.variant as Tbutton["variant"]) ?? "default"}
                                            onClick={() => idBtn.formMode && fnHandleFormButtonClick(idBtn.formMode as TformMode, "containerThree")}
                                        >
                                            {idBtn.href ? <Link href={idBtn.href}> {idBtn.label} </Link> : idBtn.label}
                                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {fnRenderFormBelowSection("containerThree")}
            </div>

            {/* Guide Section*/}
            <div ref={LdSectionRefs("containerFour")}>
                <section className="border-b border-border/40 py-16 md:py-24 lg:py-24 text-background bg-primary">
                    <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
                        <div className="flex mx-auto w-fit items-center rounded-full bg-primary border border-border text-background px-3 py-1 text-sm mb-4">
                            <span className="font-medium">{idPricing.pricing.guideHeader.badge}</span>
                        </div>
                        <TitleSubtitle idTitle={{
                            ...idPricing.pricing.guideHeader,
                            className:
                                "mx-auto max-w-[58rem] text-center items-center justify-cenetr",
                            headingClass: "md:text-5xl",
                            descripClass: "md:text-xl/relaxed text-slate",
                        }} />
                        <div className="mx-auto max-w-6xl">
                            <Tabs defaultValue="performance" className="w-full">
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
                                                            {idPricing.pricing.guideTableHeader.map((iHeader, iIndex) => (
                                                                <TableHead
                                                                    key={iIndex}
                                                                    className="text-background font-bold text-base"
                                                                >
                                                                    {iHeader.label}
                                                                </TableHead>
                                                            ))}
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
                                        <TitleSubtitle idTitle={{
                                            ...idPricing.pricing.guideFooter.header,
                                            headingClass: "md:text-2xl mb-2",
                                            descripClass: "md:text-base text-accent",
                                        }} />
                                        <div className="flex flex-col sm:flex-row gap-3">
                                            {idPricing.pricing.guideFooter.buttons.map((idBtn, iIndex) => (
                                                <Button key={iIndex} size="lg" className="bg-background text-foreground" onClick={() => idBtn.formMode && fnHandleFormButtonClick(idBtn.formMode as TformMode, "containerFour")}
                                                >
                                                    {idBtn.icon && (() => {
                                                        const iconName = typeof idBtn.icon === "string" ? idBtn.icon : "HelpCircle";
                                                        const IconComponent = getIconComponent(iconName);
                                                        return <IconComponent />;
                                                    })()}
                                                    {idBtn.href ? (
                                                        <Link href={idBtn.href}> {idBtn.label} </Link>
                                                    ) : (
                                                        idBtn.label
                                                    )}
                                                </Button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-center items-center text-center border-t md:border-t-0 md:border-l border-primary/60">
                                        <div className="bg-background rounded-full p-3 mb-3">
                                            <Icons.Download className="h-6 w-6 text-foreground" />
                                        </div>
                                        <TitleSubtitle idTitle={{
                                            ...idPricing.pricing.guideCallout,
                                            headingClass: "md:text-lg mb-1",
                                            descripClass: "md:text-sm text-accent",
                                        }} />
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
                </section>
                {fnRenderFormBelowSection("containerFour")}
            </div>

            {/* Testimonials Section*/}
            < section className="py-16 md:py-24 lg:py-24 bg-grayBackground" >
                <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
                    <TitleSubtitle idTitle={{
                        ...idPricing.pricing.testimonialHeader.header,
                        className:
                            "mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-6",
                        headingClass: "md:text-5xl",
                    }} />
                    <div className="mx-auto max-w-5xl">
                        <div className="grid gap-8 md:grid-cols-3">
                            {idPricing.pricing.testimonialSection.map((idCard, iIndex) => (
                                <CustomCard
                                    key={iIndex}
                                    idCardProps={{
                                        header: {
                                            ...idCard.header, descripClass: "italic border-l-4 border-primary/70 px-2 pb-2",
                                            headingClass: "mb-0",
                                        },
                                        className: "max-w-md ",
                                        image: {
                                            svg: (
                                                <div className="flex px-6 pt-4 space-x-1 text-primary">
                                                    <Icons.Star size={24} fill="currentColor" strokeWidth={0} />
                                                    <Icons.Star size={24} fill="currentColor" strokeWidth={0} />
                                                    <Icons.Star size={24} fill="currentColor" strokeWidth={0} />
                                                    <Icons.Star size={24} fill="currentColor" strokeWidth={0} />
                                                    <Icons.Star size={24} fill="currentColor" strokeWidth={0} />
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
                            <Button variant="outline" size="lg">
                                {idPricing.pricing.testimonialHeader.buttons[0]?.href && <Link href={idPricing.pricing.testimonialHeader.buttons[0]?.href}>{idPricing.pricing.testimonialHeader.buttons[0]?.label} </Link>}
                            </Button>
                        </div>
                    </div>
                </div>
            </section >

            {/* FAQ Section */}
            < section className="border-b border-border/40 py-16 md:py-24 lg:py-24 bg-accent" >
                <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
                    <div className="flex items-center w-fit mx-auto rounded-full border border-border bg-accent px-3 py-1 text-sm mb-4">
                        <span className="font-medium">{idPricing.pricing.faqSection.heading.badge}</span>
                    </div>
                    <TitleSubtitle idTitle={{
                        ...idPricing.pricing.faqSection.heading,
                        className:
                            "mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-6",
                        headingClass: "md:text-5xl text-foreground",
                        descripClass: "md:text-xl/relaxed text-foreground",
                    }} />
                    <div className="mx-auto max-w-3xl space-y-4">
                        <FAQs idFaq={idPricing.pricing.faqSection.point} />
                    </div>
                </div>
            </section >

            {/* CTA Section */}
            < div ref={LdSectionRefs("containerFive")} >
                <section className="py-16 md:py-24 lg:py-24 bg-grayBackground">
                    <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
                        <div className="mx-auto max-w-3xl text-center">
                            <div className="flex items-center mx-auto w-fit rounded-full bg-primary text-background px-3 py-1 text-sm mb-4">
                                <span className="font-medium">{idPricing.pricing.ctaSection.heading.badge}</span>
                            </div>
                            <TitleSubtitle idTitle={{
                                ...idPricing.pricing.ctaSection.heading, headingClass: "md:text-5xl",
                                descripClass: "md:text-xl/relaxed",
                            }} />
                            <div className="bg-background border-2 border-primary rounded-lg p-8 mb-8 shadow-xl">
                                <h3 className="text-xl font-bold mb-6">{idPricing.pricing.ctaSection.description}</h3>
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
                                                onClick={() => idBtn.formMode && fnHandleFormButtonClick(idBtn.formMode as TformMode, "containerFive")}
                                            >
                                                {idBtn.href ? <Link href={idBtn.href}> {idBtn.label} </Link> : idBtn.label}
                                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {fnRenderFormBelowSection("containerFive")}
            </div >
        </>
    );
}
