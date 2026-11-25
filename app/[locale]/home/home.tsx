"use client";

import Link from "next/link";
import Hero from "@repo/ui/components/hero";
import FAQs from "@repo/ui/components/faq";
import Callout from "@repo/ui/components/callout";
import ProductArchitecture from "@repo/ui/components/product-architecture";
import TitleSubtitle from "@repo/ui/components/title-subtitle";
import { Button } from "@repo/ui/components/ui/button";
import { useFormHandler } from "../../hooks/form-handler";
import { getIconComponent } from "@repo/ui/lib/icon";
import TestimonialSlider from "@repo/ui/components/testimonials-slider";
import ProblemSolution from "@repo/ui/components/problem-solution";

import {
  Tbutton,
  TcalloutProps,
  TformMode,
  TheroSection,
  ThomePageTarget,
} from "@repo/middleware/types";

export default function Home({ idHome }: { idHome: ThomePageTarget }) {
const {
  fnHandleFormButtonClick,
  fnRenderFormBelowSection,
  LdSectionRefs,
  ActiveSection,
  fnCloseForm,
} = useFormHandler();


  const renderIcon = (icon: Tbutton["icon"]) => {
    const LIconName = typeof icon === "string" ? icon : "HelpCircle";
    const LIconComponent = getIconComponent(LIconName);
    return <LIconComponent className="w-5 h-5" />;
  };

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
            fnHandleFormButtonClick(
              mode as TformMode,
              "containerOne",
              formTitle,
            )
          }
        />
        {fnRenderFormBelowSection("containerOne")}
      </section>

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
                  <p className="text-3xl font-light mb-2">{item.description}</p>

                  <div className="h-0.5 w-8 bg-primary mx-auto mb-2" />

                  <p className="text-sm text-primary">{item.label}</p>
                </div>
              ))}
            </div>

            {/* call to action */}
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

      {/* Problem-Solution Section */}        
      <section className="py-24" id="problemSolutionSection">
        <div className="container mx-auto px-4">
          <TitleSubtitle
            idTitle={{
              ...idHome.home.problemSolutionHeader,
              className: "text-center items-center m-0",
              headingClass: "text-3xl sm:text-4xl tracking-normal",
              descripClass: "max-w-lg mx-auto",
            }}
          />
        </div>
        <ProblemSolution
          idData={idHome.home.problemSolutionSection}
          onFormButtonClick={(mode, label) =>
            fnHandleFormButtonClick(mode, "containerTwo", label)
          }
        />

        {fnRenderFormBelowSection("containerTwo")}
      </section>

      {/* Products Architecture Section */}
      <section
        className="bg-accent py-20" id="productArchitectureSection"
        ref={LdSectionRefs("containerThree")}
        >
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <TitleSubtitle
              idTitle={{
                ...idHome.home.productArchitectureHeader,
                className: "text-center text-justify items-center m-0",
                headingClass: "text-3xl sm:text-4xl tracking-normal",
                descripClass: "max-w-4xl mx-auto",
              }}
            />
          </div>
        </div>

        <ProductArchitecture
          idData={idHome.home.productArchitectureSection}
          activeFormSection={ActiveSection}
          onFormButtonClick={(mode, sectionId, label) =>
            fnHandleFormButtonClick(mode, sectionId, label)
          }
          renderFormBelowSection={(sectionId) =>
            fnRenderFormBelowSection(sectionId, {
              wrapperClassName: "w-full bg-transparent py-0",
              containerClassName: "w-full px-0",
            })
          }
          onFormClose={fnCloseForm}
        />
      </section>

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
              ...idHome.home.calloutSection[0],
              layout: "simple",
            } as TcalloutProps
          }
          onButtonClick={(mode, formTitle) =>
            fnHandleFormButtonClick(
              mode as TformMode,
              "containerFour",
              formTitle,
            )
          }
        />
        {fnRenderFormBelowSection("containerFour")}
      </section>
    </div>
  );
}
