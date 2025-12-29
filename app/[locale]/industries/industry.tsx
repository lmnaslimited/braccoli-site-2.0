"use client"

import Image from "next/image"
import { Calendar } from "lucide-react";
import Tab from "@repo/ui/components/tab";
import Hero from "@repo/ui/components/hero";
import Callout from "@repo/ui/components/callout";
import CustomCard from "@repo/ui/components/custom-card";
import TitleSubtitle from "@repo/ui/components/title-subtitle";
import { Button } from "@repo/ui/components/ui/button";
import PainPoints from "@repo/ui/components/painPoint";
import { useFormHandler } from "../../hooks/form-handler";
import { getIconComponent } from "@repo/ui/lib/icon";
import { Tbutton, TcalloutProps, TformMode, TheroSection, Titems, Tindustries, TcardProps } from "@repo/middleware/types";

export default function IndustryComp({ idIndustry }: { idIndustry: Tindustries }) {
  const { fnHandleFormButtonClick, fnRenderFormBelowSection, LdSectionRefs } = useFormHandler();
  const renderIcon = (icon: Tbutton['icon']) => {
    const iconName = typeof icon === "string" ? icon : "HelpCircle";
    const IconComponent = getIconComponent(iconName);
    return <IconComponent className="w-5 h-5" />;
  };
  const allSuccessCards: TcardProps[] =
    idIndustry?.caseStudies
      ?.map((item) => item.solutionSection?.successCard)
      .filter(Boolean)
      .flat() ?? [];

  return (
    <>
      {/* hero */}
      <div ref={LdSectionRefs("containerOne")}>
        <Hero
          idHero={{
            ...idIndustry.industries[0]?.heroSection,
            buttons: idIndustry.industries[0]?.heroSection.buttons.map((btn) => ({
              ...btn,
              iconPosition: "after",
            })),
          } as TheroSection}
          onButtonClick={(mode, formTitle) => fnHandleFormButtonClick(mode as TformMode, "containerOne", formTitle)} />
        {fnRenderFormBelowSection("containerOne")}
      </div>

      {/* problems */}
      <div ref={LdSectionRefs("containerTwo")}>
        <section className="px-4 md:px-24 lg:px-8 py-16 md:py-24 lg:py-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <TitleSubtitle
              idTitle={{
                ...idIndustry?.industries[0]?.problemSection.header,
                className: "lg:sticky lg:top-24 h-fit",
                headingClass: "md:text-5xl leading-tight font-bold",
                descripClass: "mt-6",
              }}
            />
            <PainPoints idItems={idIndustry?.industries[0]?.problemSection.list as Titems[]} />
          </div>
        </section>
        <div className="bg-primary">
          <Callout
            idCallout={{
              header: {
                title: idIndustry?.industries[0]?.problemSection.title,
              },
              subtitle: idIndustry?.industries[0]?.problemSection.subtitle,
              buttons: idIndustry?.industries[0]?.problemSection.buttons?.map((btn) => ({
                ...btn,
                iconPosition: "before",
              })),
            } as TcalloutProps}
            onButtonClick={(mode, formTitle) => fnHandleFormButtonClick(mode as TformMode, "containerTwo", formTitle)}
          />
        </div>
        {fnRenderFormBelowSection("containerTwo")}
      </div>

      {/* features */}
      <section className="px-4 md:px-24 lg:px-8 py-16 md:py-24 lg:py-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <TitleSubtitle
          idTitle={{
            ...idIndustry?.industries[0]?.featuresSectionHeader,
            className: "text-center items-center",
            headingClass: "md:text-5xl",
            descripClass: "mt-6",
          }}
        />
        <div className="space-y-24">
          {idIndustry?.industries[0]?.feature?.map((idSection, iIndex) => {
            const isEven = iIndex % 2 === 0;
            return (
              <div key={iIndex} className="pb-4 md:pb-24 last:lg:pb-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div
                    className={`w-full rounded-md overflow-hidden flex items-center justify-center lg:col-span-7  ${isEven ? "lg:order-first" : "lg:order-last"}`}
                  >
                    {idSection.image?.source ? (
                      idSection.image.source.endsWith(".mp4") ? (
                        <video
                          src={idSection.image.source}
                          className="aspect-[16/9] w-full object-cover rounded-sm"
                          width={1000}
                          height={1000}
                          autoPlay
                          muted
                          loop
                        />
                      ) : (
                        <Image
                          src={idSection.image.source}
                          alt={idSection.image.alternate}
                          className="aspect-[16/9] w-full object-cover rounded-sm"
                          width={1000}
                          height={1000}
                        />
                      )
                    ) : null}
                  </div>
                  <div className="space-y-4 lg:col-span-5">
                    {idSection.header && (
                      <TitleSubtitle
                        idTitle={{
                          ...idSection.header,
                          className: "mx-auto m-0",
                          headingClass: "text-lg md:text-xl lg:text-2xl",
                          descripClass: "text-sm md:text-base lg:text-lg",
                        }}
                      />
                    )}
                    <CustomCard
                      idCardProps={{
                        header: {
                          ...idSection.card!.header,
                          headingClass: "mb-2 text-md",
                          descripClass: "text-sm mb-4",
                        },
                        link: idSection.card?.buttons?.map((idButton) => ({
                          ...idButton,
                          icon: "ArrowRight",
                          iconPosition: "after",
                        })) as Tbutton[],
                        className: "bg-accent p-0",
                      }}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section >

      {/* allFeature */}
      < section className="px-4 md:px-24 lg:px-8 py-16 md:py-24 lg:py-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl" >
        <TitleSubtitle
          idTitle={{
            ...idIndustry?.industries[0]?.allFeatureHeader,
            headingClass: "md:text-5xl",
            className: "text-center mb-4",
          }}
        />
        <Tab
          idTab={{
            data:
              idIndustry?.industries[0]?.allFeatureCard.map((idCard) => ({
                ...idCard,
                header: {
                  ...idCard.header,
                  headingClass: "text-xl font-semibold mb-2",
                },
                className: "max-w-sm",
                link:
                  idCard.link?.map((idButton) => ({
                    ...idButton,
                    icon: "ArrowRight",
                    iconPosition: "after",
                  })) ?? [],
                image: idCard.image
                  ? {
                    ...idCard.image,
                    svg: idCard.image.svg,
                    className: "h-10 w-10 mx-6 mt-4",
                  }
                  : idCard.image,
              })) ?? [],
            TabDefault: {
              text: "All",
              AllLabel: idIndustry?.industries[0]?.allFeatureHeader.highlight ?? "Show More",
              LessLabel: idIndustry?.industries[0]?.allFeatureHeader.badge ?? "Show Less",
            },
          }}
        />

      </section >

      {/* cta */}
      < div ref={LdSectionRefs("containerThree")} className="bg-accent" >
        <section className="rounded-2xl text-center py-16 md:py-24 lg:py-24 ">
          <div className="max-w-3xl px-4 md:px-24 lg:px-8 mx-auto space-y-6">
            <TitleSubtitle
              idTitle={{
                ...idIndustry?.industries[0]?.cta.header,
                className: "text-center items-center",
                headingClass: "lighting-tight mb-4",
                descripClass: "max-w-5xl",
              }}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
              {idIndustry?.industries[0]?.cta.list?.map((idCard, iIndex) => (
                <CustomCard
                  key={iIndex}
                  idCardProps={{
                    header: {
                      title: idCard.label,
                      subtitle: idCard.description,
                      headingClass: "mb-2 text-md",
                      descripClass: "text-sm mb-4",
                    },
                    image: {
                      svg: idCard.icon,
                      className: "h-10 w-10 text-primary mx-auto mt-6",
                      alternate: idCard.label || ""
                    }
                  }}
                />
              ))}
            </div>
            <div className="pt-6">
              {idIndustry?.industries[0]?.cta.buttons.map((idBtn, iIndex) => (
                <Button
                  key={iIndex}
                  size="lg"
                  className="text-md px-8 py-6"
                  onClick={() =>
                    idBtn.formMode && fnHandleFormButtonClick(idBtn.formMode as TformMode, "containerThree", idBtn.label)
                  }
                >
                  {idBtn.label} {" "}
                  {renderIcon(idBtn.icon)}
                </Button>
              ))}
              <p className="text-sm text-muted-foreground mt-4">
                {idIndustry?.industries[0]?.cta.title}
              </p>
            </div>
          </div>
        </section>
        {fnRenderFormBelowSection("containerThree")}
      </div >

      {/* success story */}
      < div ref={LdSectionRefs("containerFour")} >
        <section className="py-16 md:py-24 lg:py-24">
          <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
            <TitleSubtitle
              idTitle={{
                ...idIndustry?.industries[0]?.successStoryHeaderFooter.header,
                className: "text-center items-center",
                headingClass: "md:text-5xl",
              }}
            />
            <Tab
              idTab={{
                data: allSuccessCards.map((idCard) => ({
                  ...idCard,
                  header: {
                    ...idCard.header,
                    descripClass: "text-sm h-16",
                    headingClass: "text-lg mb-2",
                  },
                  image: {
                    source: idCard.image?.source ?? '',
                    alternate: idCard.image?.alternate ?? '',
                    aspectRatio: "wide",
                  },
                  button: idCard.buttons?.map((idButton: Tbutton) => ({
                    ...idButton,

                    iconPosition: "after",
                    icon: idButton.icon,
                    size: "lg",
                    variant: "outline",
                  })) ?? [],
                  tag: idCard.category,
                })),
                TabDefault: {
                  text: "All",
                  AllLabel: idIndustry?.industries[0]?.successStoryHeaderFooter?.list?.[0]?.label ?? "Show More",
                  LessLabel: idIndustry?.industries[0]?.successStoryHeaderFooter?.list?.[1]?.label ?? "Show Less",
                },
              }}
            />

            <div className="mt-12 text-center">
              <div className="space-y-4">
                <h3 className="text-xl font-medium">
                  {idIndustry?.industries[0]?.successStoryHeaderFooter.title}
                </h3>
                {idIndustry?.industries[0]?.successStoryHeaderFooter?.buttons.map((idBtn, iIndex) => (
                  <Button
                    key={iIndex}
                    size="lg"
                    className="group"
                    onClick={() => {
                      if (idBtn.formMode) {
                        fnHandleFormButtonClick(idBtn.formMode as TformMode, "containerFour", idBtn.label);
                      }
                    }}
                  >
                    {idBtn.label}
                    <Calendar className="ml-2 h-4 w-4" />
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>
        {fnRenderFormBelowSection("containerFour")}
      </div >
    </>
  );
}