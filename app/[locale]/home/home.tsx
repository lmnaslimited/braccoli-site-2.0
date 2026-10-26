"use client";

import Link from "next/link";
import Hero from "@repo/ui/components/hero";
import { cn } from "@repo/ui/lib/utils";
import FAQs from "@repo/ui/components/faq";
import Callout from "@repo/ui/components/callout";
import Feature from "@repo/ui/components/feature";
import TitleSubtitle from "@repo/ui/components/title-subtitle";
import { Button } from "@repo/ui/components/ui/button";
import { useFormHandler } from "../../hooks/form-handler";
import { getIconComponent } from "@repo/ui/lib/icon";
import  TestimonialSlider from "@repo/ui/components/testimonials-slider";
import { useState } from "react";
import styles from "./Home.module.css";

import {
  MessageSquare,
  Users,
  Lightbulb,
  Globe,
} from "lucide-react";
import {
  Tbutton,
  TcalloutProps,
  TfeatureProps,
  TformMode,
  TheroSection,
  ThomePageTarget,
} from "@repo/middleware/types";

export default function Home({ idHome }: { idHome: ThomePageTarget }) {
  const { fnHandleFormButtonClick, fnRenderFormBelowSection, LdSectionRefs } =
    useFormHandler();

  // Trending Now Section Icons
  const LaTrendingNowIcons = [
    <MessageSquare key="message" className="h-10 w-10 text-primary" />,
    <Users key="users" className="h-10 w-10 text-primary" />,
    <Lightbulb key="lightbulb" className="h-10 w-10 text-primary" />,
    <Globe key="globe" className="h-10 w-10 text-primary" />,
  ];

  // Painpoint Section Severities
  const LaPainpointSeverities = [85, 78, 92, 70];

  const renderIcon = (icon: Tbutton['icon']) => {
    const iconName = typeof icon === "string" ? icon : "HelpCircle";
    const IconComponent = getIconComponent(iconName);
    return <IconComponent className="w-5 h-5" />;
  };
  const [activeProblemIndex, setActiveProblemIndex] = useState(0);

  const LaProblemSolutionItems =
    idHome.home.problemSolutionSection ?? [];

    console.log("LaProblemSolutionItems:", LaProblemSolutionItems);

  const LdProblemSolutionHeader =
    idHome.home.problemSolutionHeader;

    console.log("LdProblemSolutionHeader:", LdProblemSolutionHeader);

  const LdActiveProblem =
    LaProblemSolutionItems[activeProblemIndex];

  return (
    <div>
      {/* Hero Section */}
      <section ref={LdSectionRefs("containerOne")} id="heroSection">
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
          onButtonClick={(mode, formTitle) =>
            fnHandleFormButtonClick(mode as TformMode, "containerOne", formTitle)
          }
        />
        {fnRenderFormBelowSection("containerOne")}
      </section>

      {/* ======================================================================================================================================= */}

        {/* Social Proof Section */}
        <section className="py-24 bg-accent" id="socialProofSection">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">

              {/* Section Heading */}
              <TitleSubtitle
                idTitle={{
                  ...idHome.home.socialSection.heading,
                  className: "text-center items-center m-0",
                  headingClass:
                    "text-base md:text-base text-muted-foreground font-semibold tracking-wide uppercase",
                  descripClass:
                    "text-3xl leading-8 font-extrabold tracking-tight text-primary md:text-4xl max-w-full",
                }}
              />

              {/* Automatic Testimonial Slider */}
              <TestimonialSlider testimonials={idHome.home.testimonials} />

              {/* Social Proof Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12 mt-12">
                {idHome.home.socialSection.highlight?.map((item, iIndex) => (
                  <div className="text-center" key={iIndex}>
                    <p className="text-3xl font-light mb-2">
                      {item.description}
                    </p>

                    <div className="h-0.5 w-8 bg-primary mx-auto mb-2" />

                    <p className="text-sm text-primary">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Existing CTA */}
              <div className="mt-8 text-center">
                {idHome.home.socialSection.buttons[0]?.href && (
                  <Link href={idHome.home.socialSection.buttons[0].href}>
                    <Button size="lg">
                      {idHome.home.socialSection.buttons[0].label}{" "}
                      {renderIcon(idHome.home.socialSection.buttons[0].icon)}
                    </Button>
                  </Link>
                )}
              </div>

            </div>
          </div>
        </section>
        {/* ========================================================================================== */}
        {/* Problem & Solution Section */}
        <section
          className="py-24 bg-background"
          id="problemSolutionSection"
        >
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">

              {/* Problem & Solution Header */}
              <TitleSubtitle
                idTitle={{
                  ...LdProblemSolutionHeader,
                  className: "max-w-5xl",
                  headingClass:
                    "text-4xl md:text-5xl font-bold tracking-tight text-primary",
                  descripClass:
                    "max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg",
                }}
              />

              {/* Problem & Solution Items */}
              {LdActiveProblem && (
                <section
                  className="mt-10"
                  id="problemSolutionItems"
                >
                  {/* Selectors */}
                  <div
                    className="flex gap-3 overflow-x-auto pb-4 mb-3"
                    role="tablist"
                    aria-label="Choose a business need"
                  >
                    {LaProblemSolutionItems.map((item, index) => (
                      <button
                        key={index}
                        type="button"
                        role="tab"
                        aria-selected={activeProblemIndex === index}
                        onClick={() => setActiveProblemIndex(index)}
                        className={`shrink-0 rounded-full border px-5 py-3 text-sm font-medium transition-colors ${
                          activeProblemIndex === index
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-background text-primary border-border hover:border-primary"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>

                  {/* Problem & Solution Card */}
                  <div className={styles.problemSolutionCard}>

                    {/* Left: Image */}
                    <div className={styles.problemSolutionImage}>
                      {LdActiveProblem.solutionImage?.source ? (
                        <img
                          src={LdActiveProblem.solutionImage.source}
                          alt={
                            LdActiveProblem.solutionImage.alternate ??
                            LdActiveProblem.label
                          }
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full min-h-[280px] items-center justify-center bg-accent">
                          <p className="text-sm text-muted-foreground">
                            Add an image in Strapi
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Right: Problem, Solution and CTA */}
                    <div className={styles.problemSolutionContent}>
                      {LdActiveProblem.category && (
                        <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                          {LdActiveProblem.category}
                        </p>
                      )}

                      <h3 className="text-3xl font-bold leading-tight tracking-tight text-primary md:text-4xl lg:text-5xl">
                        {LdActiveProblem.problemTitle}
                      </h3>

                      <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                        {LdActiveProblem.solutionDescription}
                      </p>

                      {/* Product Page CTA */}
                      {LdActiveProblem.button?.href &&
                        LdActiveProblem.button?.label && (
                          <div className="mt-8">
                            <Button
                              size={LdActiveProblem.button.size || "lg"}
                              variant={LdActiveProblem.button.variant || "default"}
                              className={cn(
                                "gap-2",
                                LdActiveProblem.button.className
                              )}
                              asChild
                            >
                              <Link href={LdActiveProblem.button.href}>
                                <span className="flex items-center justify-center gap-2">
                                  {LdActiveProblem.button.iconPosition === "before" &&
                                    renderIcon(LdActiveProblem.button.icon)}

                                  <span>{LdActiveProblem.button.label}</span>

                                  {LdActiveProblem.button.iconPosition !== "before" &&
                                    LdActiveProblem.button.icon &&
                                    renderIcon(LdActiveProblem.button.icon)}
                                </span>
                              </Link>
                            </Button>
                          </div>
                        )}
                    </div>
                  </div>
                </section>
              )}
            </div>
          </div>
        </section>
      {/* Problem Section
      <section className="bg-grayBackground" id="problemsSection">
        <Feature
          idFeature={
            {
              ...idHome.home.problemSection[0],
              iShowButton: true,
              buttonPosition: "header",
            } as TfeatureProps
          }
        />
      </section> */}

      {/* Why Section */}
      {/* <section className="bg-accent">
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
      </section> */}

      {/* Business Problem Section */}
      {/* <section className="bg-background" ref={LdSectionRefs("containerTwo")} id="businessProblemSection">
        <div className="py-24 px-4 border-t bg-grayBackground">
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
                      {idBtn.label}{" "}
                      {renderIcon(idBtn.icon)}
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
                        "containerTwo",
                        idBtn.label
                      )
                    }
                  >
                    {idBtn.label}{" "}
                    {renderIcon(idBtn.icon)}
                  </Button>
                )
              )}
            </div>
          </div>
        </div>
        {fnRenderFormBelowSection("containerTwo")}
      </section> */}

      {/* Product Section */}
      <section className="py-16 bg-accent" id="productSection">
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
      </section>

      {/* Callout Section */}
      {/* <section className="bg-accent" ref={LdSectionRefs("containerThree")} id="calloutSection">
        <Callout
          idCallout={{ ...idHome.home.calloutSection[1], layout: "simple" } as TcalloutProps}
          onButtonClick={(mode, formTitle) =>
            fnHandleFormButtonClick(mode as TformMode, "containerThree", formTitle)
          }
        />
        {fnRenderFormBelowSection("containerThree")}
      </section> */}

      {/* Problem Section */}
      {/* <section className="py-16">
        <Feature
          idFeature={
            {
              ...idHome.home.problemSection[3],
              layout: "centered",
              iShowButton: false,
            } as TfeatureProps
          }
        />
      </section> */}

      {/* FAQ Section */}
      <section className="bg-grayBackground" id="faqSection">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto divide-y-2 divide-muted">
            <h2 className="text-center text-3xl font-extrabold text-primary sm:text-4xl">
              {idHome.home.faqSection.title}
            </h2>
            <FAQs idFaq={idHome.home.faqSection.list} />
          </div>
        </div>
      </section>

      {/* Callout Section */}
      <section className="bg-accent" ref={LdSectionRefs("containerFour")}>
        <Callout
          idCallout={
            {
              ...idHome.home.calloutSection[2],
              layout: "simple",
            } as TcalloutProps
          }
          onButtonClick={(mode, formTitle) =>
            fnHandleFormButtonClick(mode as TformMode, "containerFour", formTitle)
          }
        />
        {fnRenderFormBelowSection("containerFour")}
      </section>

      {/* Trending Now Section */}
      {/* <section className="py-24 bg-background" id="trendingNowSection">
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

                  {idHome.home.trendingNowSection.buttons[0]?.href && (
                    <Link
                      href={idHome.home.trendingNowSection.buttons[0]?.href}
                    > <Button size="lg">

                        {idHome.home.trendingNowSection.buttons[0]?.label}
                        {renderIcon(idHome.home.trendingNowSection.buttons[0]?.icon)}
                      </Button>

                    </Link>
                  )}
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
      </section> */}
    </div>
  );
}