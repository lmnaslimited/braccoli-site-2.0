"use client";
import Link from "next/link";
import Hero from "@repo/ui/components/hero";
import Tab from "@repo/ui/components/tab";
import Callout from "@repo/ui/components/callout";
import CustomCard from "@repo/ui/components/customCard";
import LogoShowcase from "@repo/ui/components/logoShowCase";
import TitleSubtitle from "@repo/ui/components/titleSubtitle";
import { Button } from "@repo/ui/components/ui/button";
import { Input } from "@repo/ui/components/ui/input";
import { useFormHandler } from "../hooks/useFormHandler";
import { ArrowRight, Download } from "lucide-react";
import { Tbutton, TcalloutProps, TformMode, Theader, TheroSection, TsolutionPageTarget } from "@repo/middleware";
import { getIconComponent } from "@repo/ui/lib/icon";


const renderIcon = (icon: Tbutton['icon']) => {
    const iconName = typeof icon === "string" ? icon : "HelpCircle";
    const IconComponent = getIconComponent(iconName);
    return <IconComponent className="w-6 h-6 text-muted-foreground" />;
};

export default function Solutions({ idSolution }: { idSolution: TsolutionPageTarget }) {
    const { fnHandleFormButtonClick, fnRenderFormBelowSection, LdSectionRefs } = useFormHandler();

    const Section7 = {
        logo: Array(6).fill({
            svg: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 400 200"
                    className="w-full max-w-md sm:max-w-lg lg:max-w-xl"
                >
                    <rect width="100%" height="100%" fill="#ddd" />
                </svg>
            ),
            alt: "rectangle",
        }),
    };
    return (
        <>
            <div ref={LdSectionRefs("containerOne")}>
                <Hero idHero={idSolution.solution.heroSection as TheroSection} onButtonClick={(mode) => fnHandleFormButtonClick(mode as TformMode, "containerOne")} />
                {fnRenderFormBelowSection("containerOne")}
            </div>

            {/* Guide Section */}
            <div ref={LdSectionRefs("containerTwo")}>
                <section className="w-full py-16 md:py-24 lg:py-24 bg-slate">
                    <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
                        <TitleSubtitle idTitle={idSolution.solution.guideHeader as Theader} />
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
                            {idSolution.solution.guideSection.map((idCard, iIndex) => (
                                <CustomCard
                                    key={iIndex}
                                    idCardProps={{
                                        header: idCard.header,
                                        className: idCard.className,
                                        buttons: [...(idCard.buttons || [])] as Tbutton[],
                                        onButtonClick: idCard.buttons?.find(btn => "formMode" in btn) &&
                                            (() => fnHandleFormButtonClick(
                                                idCard.buttons?.find(btn => "formMode" in btn)?.formMode as TformMode,
                                                "containerTwo"
                                            )),
                                    }}
                                />
                            ))}
                        </div>
                        <div className="flex flex-col items-center space-y-6 bg-background p-8 rounded-lg shadow-sm">
                            <TitleSubtitle idTitle={idSolution.solution.guideFooter.header} />
                            <div className="flex flex-wrap gap-4 justify-center">
                                {idSolution.solution.guideFooter.buttons.map((idBtn, iIndex) =>
                                    <Button key={iIndex} size="lg" className="gap-2" variant={idBtn.variant as Tbutton["variant"] ?? "default"}
                                        onClick={() => idBtn.formMode && fnHandleFormButtonClick(idBtn.formMode as TformMode, "containerTwo")}
                                    >
                                        {idBtn.href ? <Link href={idBtn.href}>
                                            {idBtn.label}
                                        </Link> : idBtn.label}
                                        {renderIcon(idBtn.icon)}
                                    </Button>)}
                            </div>
                        </div>
                    </div>
                </section>
                {fnRenderFormBelowSection("containerTwo")}
            </div>


            {/*Plan Section*/}

            <div ref={LdSectionRefs("containerThree")}>
                <section className="px-4 md:px-24 lg:px-8 py-16 md:py-24 lg:py-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
                    <TitleSubtitle idTitle={idSolution.solution.planHeader as Theader} />
                    {/* <div className="grid gap-12 md:gap-16 relative">
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-muted -translate-x-1/2 z-0"></div>
                        {idSolution.solution.planSection.map((idStep, iIndex) => (
                            <div
                                key={iIndex}
                                className="relative grid md:grid-cols-2 gap-8 items-center"
                            >
                                {idStep.cardPosition === "right" ? (
                                    <>
                                        <CustomCard
                                            idCardProps={{
                                                header: idStep.header,
                                                nameAndPlace: { name: idStep.tag },
                                                namePosition: "bottom",
                                                footerClassName: "items-end",
                                                className: "bg-slate md:text-right order-2 md:order-1 border-none hover:shadow-none shadow-none"
                                            }}
                                        />
                                        <div className="flex justify-center md:justify-start order-1 md:order-2">
                                            <div className="bg-primary/10 p-6 rounded-full relative z-10">
                                                <div className="bg-primary text-primary-foreground p-4 rounded-full">
                                                    <idStep.avatar className="h-8 w-8" />
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="flex justify-center md:justify-end">
                                            <div className="bg-primary/10 p-6 rounded-full relative z-10">
                                                <div className="bg-primary text-primary-foreground p-4 rounded-full">
                                                    <idStep.avatar className="h-8 w-8" />
                                                </div>
                                            </div>
                                        </div>
]                                        <CustomCard
                                            idCardProps={{
                                                header: idStep.header,
                                                nameAndPlace: { name: idStep.tag },
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
                    <div className="mt-16 bg-slate p-8 md:p-10 rounded-lg shadow-sm">
                        <div className="flex flex-col items-center text-center space-y-6">
                            <TitleSubtitle idTitle={idSolution.solution.planFooter.header} />
                            <div className="flex flex-wrap gap-4 justify-center">
                                {idSolution.solution.planFooter.buttons.map((idBtn, iIndex) =>
                                    <Button key={iIndex} size="lg" className="gap-2" variant={idBtn.variant as Tbutton["variant"] ?? "default"}
                                        onClick={() => idBtn.formMode && fnHandleFormButtonClick(idBtn.formMode as TformMode, "containerThree")}
                                    >
                                        {renderIcon(idBtn.icon)}
                                        {idBtn.href ? <Link href={idBtn.href}>
                                            {idBtn.label}
                                        </Link> : idBtn.label}
                                    </Button>)}
                            </div>
                        </div>
                    </div>
                </section>
                {fnRenderFormBelowSection("containerThree")}
            </div>

            {/* Solution Section */}
            < div ref={LdSectionRefs("containerFour")} >
                <section className="px-4 md:px-24 lg:px-8 py-16 md:py-24 lg:py-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl text-center flex flex-col items-center justify-center">
                    <TitleSubtitle idTitle={idSolution.solution.solutionHeader as Theader} />
                    <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 mb-4 max-w-6xl">
                        {idSolution.solution.solutionSection.map((idCard, iIndex) => (
                            <CustomCard
                                key={iIndex}
                                idCardProps={{
                                    header: idCard.header,
                                    className: idCard.className,
                                    buttonPosition: "items-center justify-center",
                                    buttons: [...(idCard.buttons ?? [])] as Tbutton[],
                                    onButtonClick: idCard.buttons?.find(btn => "formMode" in btn) &&
                                        (() => fnHandleFormButtonClick(
                                            idCard.buttons?.find(btn => "formMode" in btn)?.formMode as TformMode,
                                            "containerFour"
                                        )),
                                }}
                            />
                        ))}
                    </div>
                    <p className="font-semibold mt-16 mb-6 text-xl">
                        {idSolution.solution.solutionFooter.title}
                    </p>
                    <Button size={"lg"} onClick={() => idSolution.solution.solutionFooter.buttons[0]?.formMode && fnHandleFormButtonClick(idSolution.solution.solutionFooter.buttons[0]?.formMode as TformMode, "containerFour")}>
                        {idSolution.solution.solutionFooter.buttons[0]?.label}{" "}
                        {renderIcon(idSolution.solution.solutionFooter.buttons[0]?.icon)}
                    </Button>
                </section>
                {fnRenderFormBelowSection("containerFour")}
            </div>

            {/* Success Section */}
            < div ref={LdSectionRefs("containerFive")} >
                <section className="py-16 md:py-24 lg:py-24 bg-muted/30" id="success-story">
                    <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
                        <TitleSubtitle idTitle={idSolution.solution.successHeader as Theader} />
                        <Tab

                            idTab={{
                                data: idSolution.solution.solutionSection.map((idCard) => ({
                                    ...idCard,
                                    header: {
                                        ...idCard.header,
                                        descripClass: "text-sm h-16",
                                        headingClass: "text-lg mb-2",
                                    },
                                    image: {
                                        source: idCard.image?.source,
                                        alternate: idCard.image?.alternate ?? '',
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
                                    className: "max-w-xl border-gray-200 text-center items-center justify-center"
                                })),
                                TabDefault: {
                                    text: "All",
                                    label: "Show More",
                                },
                            }}
                        />
                        <div className="mt-3 text-center">
                            <Button size="lg" className="group" onClick={() => idSolution.solution.solutionFooter.buttons[0]?.formMode && fnHandleFormButtonClick(idSolution.solution.solutionFooter.buttons[0]?.formMode as TformMode, "containerFive")}>
                                {idSolution.solution.solutionFooter.buttons[0]?.label}
                                {renderIcon(idSolution.solution.solutionFooter.buttons[0]?.icon)}
                            </Button>
                        </div>
                    </div>
                </section>
                {fnRenderFormBelowSection("containerFive")}
            </div >

            {/* Story Section */}
            < div ref={LdSectionRefs("containerSix")} >
                <section className="px-4 md:px-24 lg:px-8 py-16 md:py-24 lg:py-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl text-center">
                    <TitleSubtitle idTitle={{
                        ...idSolution.solution.storyHeader,
                        className: "text-center items-center",
                        headingClass: "md:text-5xl",
                    } as Theader} />
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
                        {idSolution.solution.storySection.map((idCard, iIndex) => (
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
                        {idSolution.solution.storyFooter.description}
                    </p>
                    <Button size={"lg"} onClick={() => idSolution.solution.storyFooter.formMode && fnHandleFormButtonClick(idSolution.solution.storyFooter.formMode as TformMode, "containerSix")}>
                        {idSolution.solution.storyFooter.label}{" "}
                        {renderIcon(idSolution.solution.storyFooter.icon)}
                    </Button>
                </section>
                {fnRenderFormBelowSection("containerSix")}
            </div >



            {/* CalloutSection */}
            <section className="py-16 md:py-24 lg:py-24 bg-muted/30">
                <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
                    <TitleSubtitle idTitle={idSolution.solution.calloutHeader as Theader} />
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
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
                        {idSolution.solution.solutionSection.map((idCard, iIndex) => (
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
                    </div>
                    <div className="flex items-center justify-center my-8">
                        {idSolution.solution.calloutFooter.buttons[0]?.href && (
                            <Button size={"lg"}>
                                <Link href={idSolution.solution.calloutFooter.buttons[0]?.href}>
                                    {idSolution.solution.calloutFooter.buttons[0]?.label}
                                </Link>
                                {idSolution.solution.calloutFooter.buttons[0]?.icon}
                            </Button>
                        )}
                    </div>
                </div>
            </section>

            < div ref={LdSectionRefs("containerSeven")} >
                <section className="bg-dark">
                    <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
                        <Callout idCallout={idSolution.solution.calloutSection as TcalloutProps} onButtonClick={(mode) => fnHandleFormButtonClick(mode as TformMode, "containerSeven")} />
                    </div>
                </section>
                {fnRenderFormBelowSection("containerSeven")}
            </div >

            <section className="py-20">
                <div className="container px-4 md:px-6">
                    <div className="max-w-md mx-auto bg-muted/50 dark:bg-muted/20 rounded-xl border p-6 shadow-sm">
                        <div className="text-center space-y-2 mb-6">
                            <TitleSubtitle idTitle={{
                                ...idSolution.solution.calloutFooter.header,
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
                                    {idSolution.solution.calloutFooter.title}
                                </p>
                            </div>
                            {/* Add callout footer is button as 1 */}
                            <Button type="submit" className="w-full" size="lg">
                                {idSolution.solution.calloutFooter.buttons[1]?.label}
                                <Download className="ml-2 h-4 w-4" />
                            </Button>
                        </form>
                    </div>
                </div>
            </section >
        </>
    );
}











