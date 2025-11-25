"use client";
import Link from "next/link";
import Hero from "@repo/ui/components/hero";
import Tab from "@repo/ui/components/tab";
import Callout from "@repo/ui/components/callout";
import CustomCard from "@repo/ui/components/customCard";
import LogoShowcase from "@repo/ui/components/logoShowCase";
import TitleSubtitle from "@repo/ui/components/titleSubtitle";
import { Button } from "@repo/ui/components/ui/button";
import { useFormHandler } from "../../hooks/useFormHandler";
import { ArrowUp } from "lucide-react";
import { Tbutton, TcalloutProps, TformMode, Theader, TheroSection, TsolutionPageTarget } from "@repo/middleware/type";
import { getIconComponent } from "@repo/ui/lib/icon";

const renderIcon = (icon: Tbutton['icon']) => {
    const iconName = typeof icon === "string" ? icon : "HelpCircle";
    const IconComponent = getIconComponent(iconName);
    return <IconComponent className="w-6 h-6" />;
};

export default function Solutions({ idSolution }: { idSolution: TsolutionPageTarget }) {
    const { fnHandleFormButtonClick, fnRenderFormBelowSection, LdSectionRefs } = useFormHandler();

    return (
        <>
            <div ref={LdSectionRefs("containerOne")}>
                <Hero
                    idHero={{
                        ...idSolution.solution.heroSection,
                        buttons: idSolution.solution.heroSection.buttons.map((btn) => ({
                            ...btn,
                            iconPosition: "after",
                        })),
                    } as TheroSection}
                    onButtonClick={(mode, formTitle) => fnHandleFormButtonClick(mode as TformMode, "containerOne", formTitle)} />
                {fnRenderFormBelowSection("containerOne")}
            </div>

            {/* Guide Section */}
            <div ref={LdSectionRefs("containerTwo")}>
                <section className="bg-accent w-full py-16 md:py-24 lg:py-24">
                    <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
                        <TitleSubtitle
                            idTitle={{
                                ...idSolution.solution.guideHeader,
                                className: "text-center items-center",
                            }}
                        />
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
                            {idSolution.solution.guideSection.map((idCard, iIndex) => (
                                <CustomCard
                                    key={iIndex}
                                    idCardProps={{
                                        header: idCard.header,
                                        className: "border-l-4 border-l-primary",
                                        buttons: (idCard.buttons || []).map(button => ({
                                            ...button,
                                            iconPosition: "after",
                                        })) as Tbutton[],
                                    }}
                                />
                            ))}
                        </div>
                        <div className="flex flex-col items-center space-y-6 bg-background p-8 rounded-lg shadow-sm">
                            <TitleSubtitle
                                idTitle={{
                                    ...idSolution.solution.guideFooter.header,
                                    className: "mb-0 items-center justify-center",
                                    headingClass: "text-center sm:text-2xl tracking-normal",
                                    descripClass: "text-center md:text-base"
                                }} />
                            <div className="flex flex-wrap gap-4 justify-center">
                                {idSolution.solution.guideFooter.buttons.map((idBtn, iIndex) =>
                                    <Button key={iIndex} size="lg" className="gap-2" variant={idBtn.variant as Tbutton["variant"] ?? "default"}
                                        onClick={() => idBtn.formMode && fnHandleFormButtonClick(idBtn.formMode as TformMode, "containerTwo", idBtn.label)}
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
                {/* pass the fnRenderFormBelowSection("containerTwo", {idPdfData:caseStudyData}) */}
                {fnRenderFormBelowSection("containerTwo")}
            </div>

            {/*Plan Section*/}
            <div ref={LdSectionRefs("containerThree")}>
                <section className="px-4 md:px-24 lg:px-8 py-16 md:py-24 lg:py-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
                    <TitleSubtitle
                        idTitle={
                            {
                                ...idSolution.solution.planHeader,
                                className: "text-center items-center",
                            } as Theader
                        }
                    />
                    <div className="grid gap-12 md:gap-16 relative">
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-foreground -translate-x-1/2 z-0"></div>
                        {idSolution.solution.planCard.map((idStep, iIndex) => (
                            <div
                                key={iIndex}
                                className="relative grid md:grid-cols-2 gap-8 items-center"
                            >
                                {iIndex % 2 === 1 ? (
                                    <>
                                        <div className="flex justify-center md:justify-end">
                                            <div className="bg-accent p-6 rounded-full relative z-10">
                                                <div className="bg-foreground text-primary-foreground p-4 rounded-full">
                                                    {renderIcon(idStep.image?.svg)}
                                                </div>
                                            </div>
                                        </div>
                                        <CustomCard
                                            idCardProps={{
                                                header: idStep.header,
                                                avatarDetails: { label: idStep.header?.badge ?? "" },
                                                namePosition: "bottom",
                                                footerClassName: "items-start",
                                                className: "bg-accent shadow-none border-none hover:shadow-none"
                                            }}
                                        />
                                    </>
                                ) : (
                                    <>
                                        <CustomCard
                                            idCardProps={{
                                                header: idStep.header,
                                                avatarDetails: { label: idStep.header?.badge ?? "" },
                                                namePosition: "bottom",
                                                footerClassName: "items-end",
                                                className: "bg-accent md:text-right order-2 md:order-1 border-none hover:shadow-none shadow-none"
                                            }}
                                        />
                                        <div className="flex justify-center md:justify-start order-1 md:order-2">
                                            <div className="bg-accent p-6 rounded-full relative z-10">
                                                <div className="bg-foreground text-primary-foreground p-4 rounded-full">
                                                    {renderIcon(idStep.image?.svg)}
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="mt-16 bg-accent p-8 md:p-10 rounded-lg shadow-sm">
                        <div className="flex flex-col items-center text-center space-y-6">
                            <TitleSubtitle idTitle={{
                                ...idSolution.solution.planFooter.header,
                                className: "mb-0 items-center justify-center",
                                headingClass: "text-center sm:text-2xl mb-2 tracking-normal",
                                descripClass: "text-center md:text-base"
                            }} />
                            <div className="flex flex-wrap gap-4 justify-center">
                                {idSolution.solution.planFooter.buttons.map((idBtn, iIndex) =>
                                    <Button key={iIndex} size="lg" className="gap-2" variant={idBtn.variant as Tbutton["variant"] ?? "default"}
                                        onClick={() => idBtn.formMode && fnHandleFormButtonClick(idBtn.formMode as TformMode, "containerThree", idBtn.label)}
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
            < div className="bg-accent" ref={LdSectionRefs("containerFour")}>
                <section className=" px-4 md:px-24 lg:px-8 py-16 md:py-24 lg:py-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl text-center flex flex-col items-center justify-center">
                    <TitleSubtitle idTitle={{
                        ...idSolution.solution.solutionHeader,
                        className: "text-center items-center",
                        headingClass: "md:text-5xl",
                    } as Theader} />
                    <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 mb-4 max-w-6xl">
                        {idSolution.solution.solutionSection.map((idCard, iIndex) => (
                            <CustomCard
                                key={iIndex}
                                idCardProps={{
                                    header: idCard.header,
                                    className: "max-w-xl border-gray-200 text-center items-center justify-center",
                                    buttonPosition: "items-center justify-center",
                                    buttons: (idCard.buttons ?? []).map(button => ({
                                        ...button,
                                        iconPosition: "after",
                                        size: "lg",
                                    })) as Tbutton[],
                                    onButtonClick: (() => {
                                        const LaButton = idCard.buttons?.find(btn => "formMode" in btn);
                                        return LaButton
                                            ? () => fnHandleFormButtonClick(
                                                LaButton.formMode as TformMode,
                                                "containerFour",
                                                LaButton.label
                                            )
                                            : undefined;
                                    })(),
                                }}
                            />
                        ))}
                    </div>
                    <p className="font-semibold mt-16 mb-6 text-xl">
                        {idSolution.solution.solutionFooter.title}
                    </p>
                    <Button size={"lg"} onClick={() => idSolution.solution.solutionFooter.buttons[0]?.formMode && fnHandleFormButtonClick(idSolution.solution.solutionFooter.buttons[0]?.formMode as TformMode, "containerFour", idSolution.solution.solutionFooter.buttons[0]?.label)}>
                        {idSolution.solution.solutionFooter.buttons[0]?.label}{" "}
                        {renderIcon(idSolution.solution.solutionFooter.buttons[0]?.icon)}
                    </Button>
                </section>
                {fnRenderFormBelowSection("containerFour")}
            </div>

            {/* Success Section */}
            < div ref={LdSectionRefs("containerFive")} >
                <section className=" py-16 md:py-24 lg:py-24" id="success-story">
                    <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
                        <TitleSubtitle idTitle={{
                            ...idSolution.solution.successHeader,
                            className: "text-center items-center",
                            headingClass: "md:text-5xl",
                        } as Theader} />
                        <Tab
                            idTab={{
                                data: idSolution.caseStudies.map((idCard) => ({
                                    ...idCard,
                                    header: {
                                        ...idCard.solutionSection.successCard.header,
                                        descripClass: "text-left text-sm h-16",
                                        headingClass: "text-left text-lg mb-4",
                                    },
                                    image: {
                                        source: idCard.heroSection.image?.source,
                                        alternate: idCard.heroSection.image?.alternate ?? '',
                                        aspectRatio: "wide",
                                    },
                                    buttons: idCard.solutionSection.successCard.buttons?.map((idButton) => ({
                                        ...idButton,
                                        icon: idButton.icon,
                                        className: "size-5",
                                        iconPosition: "after",
                                        size: "lg",
                                        variant: "outline",
                                    })) ?? [],
                                    category: idCard.heroSection.tag,
                                    className: "max-w-xl border-gray-200 text-center items-center justify-center",
                                    tag: idCard.heroSection.tag
                                })),
                                TabDefault: {
                                    text: "All",
                                    AllLabel: "Show More",
                                    LessLabel: "Show Less",
                                },
                            }}
                        />
                        <div className="mt-3 text-center">
                            <Button size="lg" className="group" onClick={() => idSolution.solution.solutionFooter.buttons[0]?.formMode && fnHandleFormButtonClick(idSolution.solution.solutionFooter.buttons[0]?.formMode as TformMode, "containerFive", idSolution.solution.solutionFooter.buttons[0]?.label)}>
                                {idSolution.solution.solutionFooter.buttons[0]?.label}
                                {renderIcon(idSolution.solution.solutionFooter.buttons[0]?.icon)}
                            </Button>
                        </div>
                    </div>
                </section>
                {fnRenderFormBelowSection("containerFive")}
            </div >

            {/* Story Section */}
            < div className="bg-accent" ref={LdSectionRefs("containerSix")}>
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
                                    header: { ...idCard.header, headingClass: "md:text-2xl", descripClass: "text-base h-16" },
                                    className: "max-w-md  border-gray-400 text-left",
                                }}
                            />
                        ))}
                    </div>
                    <p className="font-semibold mt-16 mb-6 text-xl">
                        {idSolution.solution.storyFooter.description}
                    </p>
                    <Button size={"lg"} onClick={() => idSolution.solution.storyFooter.formMode && fnHandleFormButtonClick(idSolution.solution.storyFooter.formMode as TformMode, "containerSix", idSolution.solution.storyFooter.label)}>
                        {idSolution.solution.storyFooter.label}{" "}
                        {renderIcon(idSolution.solution.storyFooter.icon)}
                    </Button>
                </section>
                {fnRenderFormBelowSection("containerSix")}
            </div >

            {/* SuccessCalloutSection */}
            < section className="py-16 md:py-24 lg:py-24" >
                <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
                    <TitleSubtitle idTitle={{
                        ...idSolution.solution.calloutHeader,
                        className: "text-center items-center",
                        headingClass: "md:text-5xl",
                    } as Theader} />
                    <div className="flex items-center justify-center">
                        <div className="max-w-7xl ">
                            <LogoShowcase
                                idLogoProps={{
                                    logos: idSolution.home.successClients,
                                    variant: "grid",
                                    logoSize: "large",
                                    logosPerRow: 4
                                }}
                            />
                        </div>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
                        {idSolution.solution.calloutCard.map((idCard, iIndex) => (
                            <CustomCard
                                key={iIndex}
                                idCardProps={{
                                    header: {
                                        ...idCard.header,
                                        descripClass: "italic"
                                    },
                                    className: "max-w-md",
                                    image: {
                                        svg: idCard.image?.svg,
                                        alternate: idCard.image?.alternate ?? "",
                                        className: "h-9 w-9 mx-4 mt-4"
                                    },
                                    avatar: idCard.avatar,
                                    avatarDetails: idCard.avatarDetails,
                                    namePosition: "bottom",
                                    footerClassName: "items-start",
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
                                {renderIcon(idSolution.solution.calloutFooter.buttons[0]?.icon)}
                            </Button>
                        )}
                    </div>
                </div>
            </section >

            {/* CalloutSection */}
            < div ref={LdSectionRefs("containerSeven")} >
                <section className="bg-primary">
                    <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
                        <Callout
                            idCallout={{
                                ...idSolution.solution.calloutSection,
                                buttons: idSolution.solution.calloutSection.buttons.map((btn) => ({
                                    ...btn,
                                    iconPosition: "before",
                                })),
                            } as TcalloutProps}
                            onButtonClick={(mode, formTitle) => fnHandleFormButtonClick(mode as TformMode, "containerSeven", formTitle)}
                        />
                    </div>
                </section>
                {fnRenderFormBelowSection("containerSeven")}
            </div >

            {/* FinalcalloutSection */}
            <section className="py-20">
                <div className="container px-4 md:px-6">
                    <div className="max-w-md mx-auto rounded-xl border p-6 shadow-sm">
                        <div className="text-center space-y-2 mb-6">
                            <TitleSubtitle idTitle={{
                                ...idSolution.solution.calloutFooter.header,
                                className: "m-0 items-center justify-center",
                                headingClass: "md:text-2xl text-2xl mb-2 leading-normal semi-bold",
                                descripClass: "md:text-base text-base"
                            }} />
                        </div>
                        {/* Add callout footer is button as 1 */}
                        <Link href={idSolution.solution.calloutFooter.buttons[1]?.href ?? "#success-story"}>
                            <Button type="submit" className="w-full" size="lg">
                                {idSolution.solution.calloutFooter.buttons[1]?.label}
                                <ArrowUp className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section >
        </>
    );
}











