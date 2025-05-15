"use client";
import Link from "next/link";
import Feature from "@repo/ui/components/feature";
import Hero from "@repo/ui/components/hero";
import Callout from "@repo/ui/components/callout";
import FAQs from "@repo/ui/components/faq";
import TitleSubtitle from "@repo/ui/components/titleSubtitle";
import { Button } from "@repo/ui/components/ui/button";
import {
  Tbutton,
  TcalloutProps,
  TfeatureProps,
  TformMode,
  TheroSection,
  ThomePageTarget,
} from "@repo/middleware";
import { useFormHandler } from "../hooks/useFormHandler";
import {
  MessageSquare,
  Users,
  Lightbulb,
  Globe,
} from "lucide-react";
import CustomCard from "@repo/ui/components/customCard";
import LogoShowcase from "@repo/ui/components/logoShowCase";

export default function Home({ idHome }: { idHome: ThomePageTarget }) {
  const { fnHandleFormButtonClick, fnRenderFormBelowSection, LdSectionRefs } =
    useFormHandler();

  // Trending-Now section icons
  const LaTrendingNowIcons = [
    <MessageSquare key="message" className="h-10 w-10 text-primary" />,
    <Users key="users" className="h-10 w-10 text-primary" />,
    <Lightbulb key="lightbulb" className="h-10 w-10 text-primary" />,
    <Globe key="globe" className="h-10 w-10 text-primary" />,
  ];

  // Painpoint section percentages
  const LaPainpointSeverities = [85, 78, 92, 70];

  return (
    <div>
      {/* Hero section */}
      <div ref={LdSectionRefs("containerOne")}>
        <Hero
          idHero={
            {
              ...idHome.home.heroSection,
              buttons: idHome.home.heroSection.buttons.map((btn) => ({
                ...btn,
                iconPosition: "after",
              })),
            } as TheroSection
          }
          onButtonClick={(mode) =>
            fnHandleFormButtonClick(mode as TformMode, "containerOne")
          }
        />
        {fnRenderFormBelowSection("containerOne")}
      </div>

      {/* problem section */}
      <div className="bg-grayBackground">
        <Feature
          idFeature={
            {
              ...idHome.home.problemSection[0],
              iShowButton: true,
              buttonPosition: "header",
            } as TfeatureProps
          }
        />
      </div>

      {/* Why section */}
      <section className="bg-accent">
        <div className="py-16 ">
          <Feature
            idFeature={
              {
                ...idHome.home.problemSection[1],
                iShowButton: false,
                layout: "centered",
              } as TfeatureProps
            }
          />
        </div>
      </section>

      {/* business problem section */}
      <div className="bg-background" ref={LdSectionRefs("containerTwo")}>
        <section className="py-24 px-4 border-t bg-grayBackground">
          <div className="max-w-4xl mx-auto">
            <TitleSubtitle
              idTitle={{
                ...idHome.home.calloutSection[0]?.header,
                className: "m-0 items-center justify-center text-primary",
                headingClass: "text-3xl sm:text-4xl tracking-normal",
                descripClass: "max-w-lg mx-auto",
              }}
            />
            <div className="space-y-8 py-20">
              {idHome.home.calloutSection[0]?.list.map((point, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2 text-primary">
                    <span className="font-medium ">{point.icon}</span>
                    <span className="text-sm font-medium">
                      {point.description}
                    </span>
                  </div>
                  <div className="w-full bg-background rounded-full border border-black/50 h-2.5 mb-2">
                    <div
                      className="bg-primary h-2.5 rounded-full"
                      style={{ width: `${LaPainpointSeverities[index]}%` }}
                    ></div>
                  </div>
                  <p className="text-muted-foreground">{point.label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 sm:flex-row items-center justify-center">
              {idHome.home.calloutSection[0]?.buttons.map((idBtn, iIndex) =>
                idBtn.href ? (
                  <Link href={idBtn.href} key={iIndex}>
                    <Button
                      key={iIndex}
                      size="lg"
                      className="gap-4"
                      variant={
                        (idBtn.variant as Tbutton["variant"]) ?? "default"
                      }
                    >
                      {idBtn.label}
                    </Button>
                  </Link>
                ) : (
                  <Button
                    key={iIndex}
                    size="lg"
                    className="gap-4"
                    variant={(idBtn.variant as Tbutton["variant"]) ?? "default"}
                    onClick={() =>
                      idBtn.formMode &&
                      fnHandleFormButtonClick(
                        idBtn.formMode as TformMode,
                        "containerTwo"
                      )
                    }
                  >
                    {idBtn.label}
                  </Button>
                )
              )}
            </div>
          </div>
        </section>
        {fnRenderFormBelowSection("containerTwo")}
      </div>

      {/* product section */}
      <div className="py-16 bg-accent">
        <Feature
          idFeature={
            {
              ...idHome.home.problemSection[2],
              layout: "centered",
              iShowButton: true,
              buttonPosition: "bottom-center",
            } as TfeatureProps
          }
        />
      </div>

      {/* Social Proof Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <TitleSubtitle
              idTitle={{
                ...idHome.home.socialSection.heading,
                className: "lg:text-center items-center m-0",
                headingClass:
                  "text-base md:text-base text-muted-foreground font-semibold tracking-wide uppercase",
                descripClass:
                  "text-3xl leading-8 font-extrabold tracking-tight text-primary md:text-4xl max-w-full",
              }}
            />

            <div className="flex items-center justify-center">
              <div className="max-w-7xl ">
                <LogoShowcase
                  idLogoProps={{
                    logos: idHome.home.successClients,
                    variant: "grid",
                    logoSize: "large",
                    logosPerRow: 4,
                  }}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 py-8">
              {idHome.home.testimonials.map((idCard, iIndex) => (
                <CustomCard
                  key={iIndex}
                  idCardProps={{
                    header: {
                      ...idCard.header,
                      descripClass:
                        "italic md:text-lg text-lg text-primary/80 italic mb-8 md:leading-relaxed leading-relaxed",
                      headingClass: "m-0",
                    },
                    className: "max-w-lg",
                    image: {
                      svg: idCard.image?.svg,
                      alternate: idCard.image?.alternate ?? "",
                      className: "h-12 w-12 text-primary/10 mx-4 mt-4",
                    },
                    avatar: idCard.avatar,
                    avatarDetails: idCard.avatarDetails,
                    namePosition: "bottom",
                    footerClassName: "items-start",
                  }}
                />
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
              {idHome.home.socialSection.highlight?.map((item, iIndex) => (
                <div className="text-center" key={iIndex}>
                  <p className="text-3xl font-light mb-2">{item.description}</p>
                  <div className="h-0.5 w-8 bg-primary mx-auto mb-2"></div>
                  <p className="text-sm text-primary">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button asChild size="lg">
                {idHome.home.socialSection.buttons[0]?.href && (
                  <Link href={idHome.home.socialSection.buttons[0]?.href}>
                    {idHome.home.socialSection.buttons[0]?.label}
                  </Link>
                )}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Callout Section */}
      <div className="bg-accent" ref={LdSectionRefs("containerThree")}>
        <Callout
          idCallout={{ ...idHome.home.calloutSection[1], layout: "simple" } as TcalloutProps}
          onButtonClick={(mode) =>
            fnHandleFormButtonClick(mode as TformMode, "containerThree")
          }
        />
        {fnRenderFormBelowSection("containerThree")}
      </div>

      {/* Problem Section */}
      <div className="py-16">
        <Feature
          idFeature={
            {
              ...idHome.home.problemSection[3],
              layout: "centered",
              iShowButton: false,
            } as TfeatureProps
          }
        />
      </div>

      {/* FAQ Section */}
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

      {/* Callout Section */}
      <div className="bg-accent" ref={LdSectionRefs("containerFour")}>
        <Callout
          idCallout={
            {
              ...idHome.home.calloutSection[2],
              layout: "simple",
            } as TcalloutProps
          }
          onButtonClick={(mode) =>
            fnHandleFormButtonClick(mode as TformMode, "containerFour")
          }
        />
        {fnRenderFormBelowSection("containerFour")}
      </div>

      {/* Trending Now Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className=" mb-16">
              <TitleSubtitle
                idTitle={{
                  ...idHome.home.trendingNowSection.header,
                  className: "lg:text-center items-center m-0",
                  headingClass:
                    "text-base md:text-base text-muted-foreground font-semibold tracking-wide uppercase",
                  descripClass:
                    "text-3xl leading-8 font-extrabold tracking-tight text-primary md:text-4xl max-w-full",
                }}
              />
            </div>
            <div className="bg-background border border-foreground p-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="max-w-md">
                  <h3 className="text-2xl font-light mb-4">
                    {idHome.home.trendingNowSection.title}
                  </h3>
                  <p className="text-primary mb-6">
                    {idHome.home.trendingNowSection.subtitle}
                  </p>
                  <Button asChild size="lg">
                    {idHome.home.trendingNowSection.buttons[0]?.href && (
                      <Link
                        href={idHome.home.trendingNowSection.buttons[0]?.href}
                      >
                        {idHome.home.trendingNowSection.buttons[0]?.label}
                      </Link>
                    )}
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {LaTrendingNowIcons.map((icon, idx) => (
                    <div
                      key={idx}
                      className="w-32 h-32 bg-accent flex items-center justify-center"
                    >
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
