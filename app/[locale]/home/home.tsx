"use client"
import Image from "next/image"
import Link from "next/link"
import Feature from "@repo/ui/components/feature"
import Hero from "@repo/ui/components/hero"
import Callout from "@repo/ui/components/callout"
import FAQs from "@repo/ui/components/faq"
import TitleSubtitle from "@repo/ui/components/titleSubtitle"
import { Button } from "@repo/ui/components/ui/button"
import { TcalloutProps, TfeatureProps, TformMode, TheroSection, ThomePageTarget } from "@repo/middleware"
import { useFormHandler } from "../hooks/useFormHandler"


export default function Home({ idHome }: { idHome: ThomePageTarget }) {
    const { fnHandleFormButtonClick, fnRenderFormBelowSection, LdSectionRefs } = useFormHandler();

    return (
        <div>
            <div ref={LdSectionRefs("containerOne")}>
                <Hero
                    idHero={idHome.home.heroSection as TheroSection}
                    onButtonClick={(mode) => fnHandleFormButtonClick(mode as TformMode, "containerOne")}
                />
                {fnRenderFormBelowSection("containerOne")}
            </div>

            <div className="bg-grayBackground">
                <Feature idFeature={{ ...idHome.home.problemSection[0], iShowButton: true, buttonPosition: "header" } as TfeatureProps} />
            </div>


            <div className="my-16">
                <Feature idFeature={{ ...idHome.home.problemSection[1], iShowButton: false, layout: "centered" } as TfeatureProps} />
            </div>

            <div className="bg-dark/70" ref={LdSectionRefs("containerTwo")}>
                <Callout
                    idCallout={idHome.home.calloutSection[0] as TcalloutProps}
                    onButtonClick={(mode) => fnHandleFormButtonClick(mode as TformMode, "containerTwo")}
                />
                {fnRenderFormBelowSection("containerTwo")}
            </div>

            <div className="my-16">
                <Feature idFeature={{ ...idHome.home.problemSection[2], layout: "centered", iShowButton: true, buttonPosition: "bottom-center" } as TfeatureProps} />
            </div>

            <div className="max-w-7xl mx-auto pt-16 pb-20 px-4 md:px-6">
                <TitleSubtitle idTitle={{
                    ...idHome.home.socialSection.heading,
                    className: "lg:text-center items-center m-0",
                    headingClass: "text-base md:text-base text-muted-foreground font-semibold tracking-wide uppercase",
                    descripClass: "text-3xl leading-8 font-extrabold tracking-tight text-primary md:text-4xl max-w-full"
                }} />
                <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="col-span-1 flex justify-center py-8 px-8 bg-grayBackground">
                            <Image
                                className="max-h-12"
                                src={`/placeholder.svg?text=Logo ${i}`}
                                width={120}
                                height={48}
                                alt={`Client ${i}`}
                            />
                        </div>
                    ))}
                </div>
                <div className="mt-6 lg:text-center">
                    <p className="text-base text-muted-foreground">
                        {idHome.home.socialSection.description}
                    </p>
                    <div className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-3 text-center">
                        {idHome.home.socialSection.highlight?.map((item) => (
                            <div key={item.label} className="px-4 py-5 bg-background shadow rounded-lg overflow-hidden sm:p-6">
                                <div className="text-sm font-medium text-muted-foreground truncate">{item.label}</div>
                                <div className="mt-1 text-3xl font-semibold text-primary">{item.description}</div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 text-center">
                        <Button asChild size="lg">
                            {idHome.home.socialSection.buttons[0]?.href && <Link href={idHome.home.socialSection.buttons[0]?.href}>{idHome.home.socialSection.buttons[0]?.label}</Link>}
                        </Button>
                    </div>
                </div>
            </div>

            <div className="bg-dark/70" ref={LdSectionRefs("containerThree")}>
                <Callout
                    idCallout={idHome.home.calloutSection[1] as TcalloutProps}
                    onButtonClick={(mode) => fnHandleFormButtonClick(mode as TformMode, "containerThree")}
                />
                {fnRenderFormBelowSection("containerThree")}
            </div>

            <div className="my-16">
                <Feature idFeature={{ ...idHome.home.problemSection[3], layout: "centered", iShowButton: false } as TfeatureProps} />
            </div>

            <div className="bg-grayBackground">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto divide-y-2 divide-muted">
                        <h2 className="text-center text-3xl font-extrabold text-primary sm:text-4xl">
                            {idHome.home.faqSection.title}
                        </h2>
                        <FAQs idFaq={idHome.home.faqSection.list} />
                    </div>
                </div>
            </div>

            <div ref={LdSectionRefs("containerFour")}>
                <Callout
                    idCallout={{ ...idHome.home.calloutSection[2], layout: "simple" } as TcalloutProps}
                    onButtonClick={(mode) => fnHandleFormButtonClick(mode as TformMode, "containerFour")}
                />
                {fnRenderFormBelowSection("containerFour")}
            </div>
        </div>
    )
}