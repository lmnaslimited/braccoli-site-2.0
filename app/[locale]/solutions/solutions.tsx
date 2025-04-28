"use client";

// import CustomCard from "@repo/ui/components/customCard";
// import {
//     CheckCircle,
//     Download,
//     Lightbulb,
//     Play,
//     Quote,
// } from "lucide-react";
// import { ArrowRight, Calendar } from "lucide-react";
// import Hero from "@repo/ui/components/hero";
// import TitleSubtitle from "@repo/ui/components/titleSubtitle";
// import Callout from "@repo/ui/components/callout";
// import LogoShowcase from "@repo/ui/components/logoShowCase";
// import { Button } from "@repo/ui/components/ui/button";
// import Tab from "@repo/ui/components/tab";
// import Link from "next/link";
// import { Input } from "@repo/ui/components/ui/input";
// import { useFormHandler } from "../hooks/useFormHandler";
// // import { Tbutton, TcalloutProps, TformMode, Theader, TsolutionsPageTarget } from "@repo/middleware";
// import { Tbutton, TformMode, Theader } from "@repo/middleware";

// import { TheroProps } from "@repo/ui/type";

// export default function Solutions({ idSolutions }: { idSolutions: TsolutionsPageTarget }) {
export default function Solutions() {
    return (
        <>
            {/* <div ref={LdSectionRefs("containerOne")}>
                <Hero idHero={HeroData as TheroProps} onButtonClick={(mode) => fnHandleFormButtonClick(mode as TformMode, "containerOne")} />
                {fnRenderFormBelowSection("containerOne")}
            </div> */}

            {/* <div ref={LdSectionRefs("containerTwo")}>
                <section className="w-full py-16 md:py-24 lg:py-24 bg-slate">
                    <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
                        <TitleSubtitle idTitle={Section1.header as Theader} /> */}
            {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
                            {Section1.card.map((idCard, iIndex) => (
                                <CustomCard
                                    key={iIndex}
                                    idCardProps={{
                                        header: idCard.header,
                                        className: idCard.className,
                                        button: [...idCard.button] as Tbutton[],
                                        onButtonClick: idCard.button.find(btn => "formMode" in btn) &&
                                            (() => fnHandleFormButtonClick(
                                                idCard.button.find(btn => "formMode" in btn)?.formMode as TformMode,
                                                "containerTwo"
                                            )),
                                    }}
                                />
                            ))}
                        </div> */}
            {/* <div className="flex flex-col items-center space-y-6 bg-background p-8 rounded-lg shadow-sm">
                            <TitleSubtitle idTitle={Section1.cta.header} />
                            <div className="flex flex-wrap gap-4 justify-center">
                                {Section1.cta.button.map((idBtn, iIndex) =>
                                    <Button key={iIndex} size="lg" className="gap-2" variant={idBtn.variant as Tbutton["variant"] ?? "default"}
                                        onClick={() => idBtn.formMode && fnHandleFormButtonClick(idBtn.formMode as TformMode, "containerTwo")}
                                    >
                                        {idBtn.href ? <Link href={idBtn.href}>
                                            {idBtn.label}
                                        </Link> : idBtn.label}
                                        {idBtn.icon}
                                    </Button>)}
                            </div>
                        </div>
                    </div>
                </section>
                {fnRenderFormBelowSection("containerTwo")}
            </div> */}

            {/*3*/}

            {/* <div ref={LdSectionRefs("containerThree")}>
                <section className="px-4 md:px-24 lg:px-8 py-16 md:py-24 lg:py-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
                    <TitleSubtitle idTitle={Section3.header as Theader} />
                    <div className="grid gap-12 md:gap-16 relative"> */}
            {/* Vertical line for desktop */}
            {/* <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-muted -translate-x-1/2 z-0"></div>
                        {Section3.steps.map((idStep, iIndex) => (
                            <div
                                key={iIndex}
                                className="relative grid md:grid-cols-2 gap-8 items-center"
                            >
                                {idStep.cardPosition === "right" ? (
                                    <> */}
            {/* Card Section - Right */}
            {/* <CustomCard
                                            idCardProps={{
                                                header: idStep.header,
                                                nameAndPlace: { name: idStep.footer },
                                                namePosition: "bottom",
                                                footerClassName: "items-end",
                                                className: "bg-slate md:text-right order-2 md:order-1 border-none hover:shadow-none shadow-none"
                                            }}
                                        /> */}
            {/* Icon Section - Left */}
            {/* <div className="flex justify-center md:justify-start order-1 md:order-2">
                                            <div className="bg-primary/10 p-6 rounded-full relative z-10">
                                                <div className="bg-primary text-primary-foreground p-4 rounded-full">
                                                    <idStep.icon className="h-8 w-8" />
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <> */}
            {/* Icon Section - Left */}
            {/* <div className="flex justify-center md:justify-end">
                                            <div className="bg-primary/10 p-6 rounded-full relative z-10">
                                                <div className="bg-primary text-primary-foreground p-4 rounded-full">
                                                    <idStep.icon className="h-8 w-8" />
                                                </div>
                                            </div>
                                        </div> */}
            {/* Card Section - Left */}
            {/* <CustomCard
                                            idCardProps={{
                                                header: idStep.header,
                                                nameAndPlace: { name: idStep.footer },
                                                namePosition: "bottom",
                                                footerClassName: "items-start",
                                                className: "bg-slate shadow-none border-none hover:shadow-none"
                                            }}
                                        />
                                    </>
                                )}
                            </div>
                        ))}
                    </div> */}
            {/* <div className="mt-16 bg-slate p-8 md:p-10 rounded-lg shadow-sm">
                        <div className="flex flex-col items-center text-center space-y-6">
                            <TitleSubtitle idTitle={Section3.cta.header} />
                            <div className="flex flex-wrap gap-4 justify-center">
                                {Section3.cta.button.map((idBtn, iIndex) =>
                                    <Button key={iIndex} size="lg" className="gap-2" variant={idBtn.variant as Tbutton["variant"] ?? "default"}
                                        onClick={() => idBtn.formMode && fnHandleFormButtonClick(idBtn.formMode as TformMode, "containerThree")}
                                    >
                                        {idBtn.icon}
                                        {idBtn.href ? <Link href={idBtn.href}>
                                            {idBtn.label}
                                        </Link> : idBtn.label}
                                    </Button>)}
                            </div>
                        </div>
                    </div>
                </section>
                {fnRenderFormBelowSection("containerThree")}
            </div> */}

            {/* 4 */}
            {/* <div ref={LdSectionRefs("containerFour")}>
                <section className="px-4 md:px-24 lg:px-8 py-16 md:py-24 lg:py-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl text-center flex flex-col items-center justify-center">
                    <TitleSubtitle idTitle={Section4.header as Theader} /> */}
            {/* <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 mb-4 max-w-6xl">
                        {Section4.card.map((idCard, iIndex) => (
                            <CustomCard
                                key={iIndex}
                                idCardProps={{
                                    header: idCard.header,
                                    className: idCard.className,
                                    buttonPosition: "items-center justify-center",
                                    button: [...idCard.button] as Tbutton[],
                                    onButtonClick: idCard.button.find(btn => "formMode" in btn) &&
                                        (() => fnHandleFormButtonClick(
                                            idCard.button.find(btn => "formMode" in btn)?.formMode as TformMode,
                                            "containerFour"
                                        )),
                                }}
                            />
                        ))}
                    </div> */}
            {/* <p className="font-semibold mt-16 mb-6 text-xl">
                        {Section4.footer.title}
                    </p>
                    <Button size={"lg"} onClick={() => Section4.footer.button.formMode && fnHandleFormButtonClick(Section4.footer.button.formMode as TformMode, "containerFour")}>
                        {Section4.footer.button.label}{" "}
                        {Section4.footer.button.icon}
                    </Button>
                </section>
                {fnRenderFormBelowSection("containerFour")}
            </div> */}

            {/* 5 */}
            {/* < div ref={LdSectionRefs("containerFive")} >
                <section className="py-16 md:py-24 lg:py-24 bg-muted/30" id="success-story">
                    <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
                        <TitleSubtitle idTitle={Section5.header as Theader} />
                        <Tab
                            idTab={{
                                data: Section5.cards.map((idCard) => ({
                                    ...idCard,
                                    header: {
                                        ...idCard.header,
                                        descripClass: "text-sm h-16",
                                        headingClass: "text-lg mb-2",
                                    },
                                    image: {
                                        src: idCard.image.src,
                                        alt: idCard.image.alt,
                                        aspectRatio: "wide",
                                    },
                                    button: idCard.buttons?.map((idButton) => ({
                                        ...idButton,
                                        icon: <ArrowRight className="size-5" />,
                                        iconPosition: "after",
                                        size: "lg",
                                        variant: "outline",
                                    })) ?? [], // Ensure button is always an array
                                    tag: idCard.category, // Ensure `tag` is correctly assigned
                                })),
                                TabDefault: {
                                    text: "All",
                                    label: "Show More",
                                },
                            }}
                        />

                        <div className="mt-3 text-center">
                            <Button size="lg" className="group" onClick={() => Section5.footer.formMode && fnHandleFormButtonClick(Section5.footer.formMode as TformMode, "containerFive")}>
                                {Section5.footer.label}
                                {Section5.footer.icon}
                            </Button>
                        </div>
                    </div>
                </section>
                {fnRenderFormBelowSection("containerFive")}
            </div > */}

            {/* 6 */}
            {/* < div ref={LdSectionRefs("containerSix")} >
                <section className="px-4 md:px-24 lg:px-8 py-16 md:py-24 lg:py-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl text-center">
                    <TitleSubtitle idTitle={{
                        ...Section6.header,
                        className: "text-center items-center",
                        headingClass: "md:text-5xl",
                    } as Theader} />
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
                        {Section6.card.map((idCard, iIndex) => (
                            <CustomCard
                                key={iIndex}
                                idCardProps={{
                                    ...idCard,
                                    header: { ...idCard.header, headingClass: "md:text-2xl", },
                                    className: "max-w-md bg-primary/5 border-gray-400 text-left",
                                }}
                            />
                        ))}
                    </div>
                    <p className="font-semibold mt-16 mb-6 text-xl">
                        {Section6.footer.title}
                    </p>
                    <Button size={"lg"} onClick={() => Section5.footer.formMode && fnHandleFormButtonClick(Section6.footer.formMode as TformMode, "containerSix")}>
                        {Section6.footer.label}{" "}
                        {Section6.footer.icon}
                    </Button>
                </section>
                {fnRenderFormBelowSection("containerSix")}
            </div > */}

            {/* SectionSeven */}
            {/* <section className="py-16 md:py-24 lg:py-24 bg-muted/30">
                <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
                    <TitleSubtitle idTitle={Section7.header as Theader} />
                    <div className="flex items-center justify-center">
                        <div className="max-w-7xl ">
                            <LogoShowcase
                                idLogoProps={{
                                    logos: Section7.logo,
                                    variant: "grid",
                                    logoSize: "small",
                                    logosPerRow: 6
                                }}
                            />
                        </div>
                    </div> */}
            {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
                        {Section7.card.map((idCard, iIndex) => (
                            <CustomCard
                                key={iIndex}
                                idCardProps={{
                                    header: idCard.header,
                                    className: idCard.className,
                                    image: idCard.image,
                                    avatar: idCard.avatar,
                                    nameAndPlace: idCard.nameAndPlace,
                                    namePosition: idCard.namePosition,
                                    footerClassName: idCard.footerClassName,
                                }}
                            />
                        ))}
                    </div> */}
            {/* <div className="flex items-center justify-center my-8">
                        <Button size={"lg"}>
                            <Link href={Section7.footer.href}>{Section7.footer.label} </Link>{" "}
                            {Section7.footer.icon}{" "}
                        </Button>
                    </div>
                </div>
            </section>

            < div ref={LdSectionRefs("containerSeven")} >
                <section className="bg-dark"> */}
            {/* <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
                        <Callout idCallout={CalloutData[0] as TcalloutProps} onButtonClick={(mode) => fnHandleFormButtonClick(mode as TformMode, "containerSeven")} />
                    </div> */}
            {/* </section>
                {fnRenderFormBelowSection("containerSeven")}
            </div > */}

            {/* <section className="py-20">
                <div className="container px-4 md:px-6">
                    <div className="max-w-md mx-auto bg-muted/50 dark:bg-muted/20 rounded-xl border p-6 shadow-sm">
                        <div className="text-center space-y-2 mb-6">
                            <TitleSubtitle idTitle={{
                                ...Section7.footer.header,
                                className: "m-0 items-center justify-center",
                                headingClass: "md:text-2xl text-2xl mb-2 leading-normal semi-bold",
                                descripClass: "md:text-base text-base"
                            }} />
                        </div>

                        <form className="space-y-4">
                            <div className="space-y-2">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                    className="w-full"
                                />
                                <p className="text-xs text-muted-foreground">
                                    {Section7.footer.title}
                                </p>
                            </div>

                            <Button type="submit" className="w-full" size="lg">
                                {Section7.footer.button.label}
                                <Download className="ml-2 h-4 w-4" />
                            </Button>
                        </form>
                    </div>
                </div>
            </section>*/}
        </>
    );
}
