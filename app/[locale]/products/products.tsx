"use client";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Clock,
  Users,
} from "lucide-react";
import Hero from "@repo/ui/components/hero";
import TitleSubtitle from "@repo/ui/components/titleSubtitle";
import CustomCard from "@repo/ui/components/customCard";
import { Button } from "@repo/ui/components/ui/button";
import { Separator } from "@repo/ui/components/ui/separator";
import { useFormHandler } from "../hooks/useFormHandler";
import { Tbutton, TformMode, TheroSection, Tproducts } from "@repo/middleware";
import { getIconComponent } from "@repo/ui/lib/icon";

const renderIcon = (icon: Tbutton["icon"], className?: string) => {
  const iconName = typeof icon === "string" ? icon : "HelpCircle";
  const IconComponent = getIconComponent(iconName);
  return <IconComponent className={className || "w-5 h-5"} />;
};

export default function ProductsComp({ idProduct }: { idProduct: Tproducts }) {
  const { fnHandleFormButtonClick, fnRenderFormBelowSection, LdSectionRefs } =
    useFormHandler();
  return (
    <>
      <div ref={LdSectionRefs("containerOne")}>
        <Hero
          idHero={
            {
              ...idProduct?.heroSection,
              buttons: idProduct?.heroSection.buttons.map((idButton) => ({
                ...idButton,
                iconPosition: "after",
                size: "lg",
              })),
            } as TheroSection
          }
          onButtonClick={(mode, formTitle) =>
            fnHandleFormButtonClick(
              mode as TformMode,
              "containerOne",
              formTitle
            )
          }
        />
        {fnRenderFormBelowSection("containerOne")}
      </div>

      {/* problems */}
      <div ref={LdSectionRefs("containerTwo")}>
        <section className="border-b border-border/40 py-16 md:py-24 lg:py-24">
          <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
            <TitleSubtitle
              idTitle={{
                ...idProduct?.problemsHeader,
                className:
                  "mx-auto max-w-[58rem] items-center justify-center gap-4 text-center mb-0", //changed
                headingClass: "md:text-5xl",
                descripClass: "max-w-[85%] md:text-xl/relaxed",
              }}
            />
            <div className="mx-auto grid max-w-5xl py-12 md:grid-cols-2 gap-12">
              <CustomCard
                idCardProps={{
                  header: { title: idProduct?.problemsSection.title },
                  list: idProduct?.problemsSection.list?.map((idList) => ({
                    ...idList,
                    icon: idList.icon,
                  })),
                }}
              />
              <div className="flex flex-col justify-center space-y-4">
                <TitleSubtitle
                  idTitle={{
                    ...idProduct?.problemsSection.header,
                    headingClass: "md:text-2xl",
                    className: "md:text-left text-center mb-2",
                  }}
                />
                <div className="flex flex-col gap-4 sm:flex-row">
                  {idProduct?.problemsSection.buttons.map((idBtn, iIndex) =>
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
                        variant={
                          (idBtn.variant as Tbutton["variant"]) ?? "default"
                        }
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
          </div>
          {fnRenderFormBelowSection("containerTwo")}
        </section>
      </div>

      {/* solutions */}
      <div ref={LdSectionRefs("containerSeven")}>
        <section className="bg-primary py-16 md:py-24 lg:py-24">
          <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
            <TitleSubtitle
              idTitle={{
                ...idProduct?.solutionsHeaderFooter.header,
                className:
                  "mx-auto max-w-[58rem] items-center justify-center gap-4 text-center text-background",
                headingClass: "md:text-5xl",
                descripClass:
                  "max-w-[85%] md:text-xl/relaxed text-muted-foreground",
              }}
            />
            <div className="mx-auto max-w-5xl md:py-12 py-6">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-background hidden md:block"></div>
                {idProduct?.solutionsCard.map((idCard, iIndex) => (
                  <div className="relative mb-12 md:mb-16" key={iIndex}>
                    <div className="grid gap-8 md:grid-cols-[80px_1fr] items-start">
                      <div className="relative z-10 hidden md:flex h-16 w-16 items-center justify-center rounded-full bg-background border-2 border-border shadow-md">
                        <span className="text-xl font-bold">{iIndex + 1}</span>
                      </div>
                      <CustomCard
                        key={iIndex}
                        idCardProps={{
                          header: idCard.header,
                          link: idCard.buttons?.map((iaButton) => ({
                            ...iaButton,
                            icon: "ChevronRight",
                            className: "ml-1 h-3 w-3",
                            iconPosition: "after",
                          })) as Tbutton[],

                          footerClassName: "items-start",
                          className:
                            "relative z-10 md:ml-4 border-none hover:shadow-none shadow-none",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mx-auto max-w-[58rem] text-center mt-16">
                <div className="flex flex-col gap-4 sm:flex-row justify-center">
                  {idProduct?.solutionsHeaderFooter.buttons.map(
                    (idBtn, iIndex) => {
                      const hasHref = Boolean(idBtn.href);
                      return (
                        <Button
                          key={iIndex}
                          size="lg"
                          className="gap-2 border border-border group"
                          variant={
                            (idBtn.variant as Tbutton["variant"]) ?? "default"
                          }
                          onClick={() =>
                            idBtn.formMode &&
                            fnHandleFormButtonClick(
                              idBtn.formMode as TformMode,
                              "containerSeven",
                              idBtn.label
                            )
                          }
                        >
                          {hasHref ? (
                            <Link href={idBtn.href ?? "/"}>
                              <span className="flex items-center">
                                {idBtn.label}
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                              </span>
                            </Link>
                          ) : (
                            <>
                              <span>{idBtn.label}</span>
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </>
                          )}
                        </Button>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        {fnRenderFormBelowSection("containerSeven")}
      </div>

      {/* Feature Section */}
      <div ref={LdSectionRefs("containerThree")}>
        <section
          id="features"
          className="border-b border-border/40 py-16 md:py-24 lg:py-24"
        >
          <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
            <TitleSubtitle
              idTitle={{
                ...idProduct?.guideSectionHeaderFooter.header,
                className:
                  "mx-auto max-w-[58rem] items-center justify-center gap-4 text-center",
                headingClass: "md:text-5xl",
              }}
            />
            <div className="mx-auto max-w-6xl md:py-12">
              {idProduct?.guideFeature.map((idFeature, iIndex) => {
                const isEven = iIndex % 2 === 0
                return (
                  <div key={iIndex} className="py-16 md:py-20 ">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                      <div
                        className={`w-full rounded-md overflow-hidden flex items-center justify-center lg:col-span-7  ${isEven ? "lg:order-first" : "lg:order-last"}`}
                      >
                        {idFeature.image?.source?.endsWith(".mp4") ? (
                          <video
                            src={idFeature.image.source}
                            className="aspect-[16/9] w-full object-cover rounded-sm"
                            width={1000}
                            height={1000}
                            autoPlay
                            muted
                            loop
                          />
                        ) : (
                          <img
                            src={idFeature.image?.source || "placeholder.png"}
                            alt={idFeature.image?.alternate}
                            className="aspect-[16/9] w-full object-cover rounded-sm"
                            width={1000}
                            height={1000}
                          />
                        )}
                      </div>
                      <div className="space-y-4 lg:col-span-5">
                        <div className="flex items-center gap-4 mb-4 flex-wrap">
                          {idFeature.highlight?.map((idHighlight, iHighlightIndex) => (
                            <div
                              key={iHighlightIndex}
                              className="flex items-center gap-2 bg-accent border border-border px-3 py-2 rounded-lg"
                            >
                              {renderIcon(idHighlight.icon)}
                              <span className="text-sm font-medium">{idHighlight.label}</span>
                            </div>
                          ))}
                        </div>
                        <TitleSubtitle
                          idTitle={{
                            ...idFeature.heading,
                            className: "mx-auto m-0",
                            headingClass: "text-lg lg:text-2xl transition-all",
                          }}
                        />
                        <div className="space-y-2">
                          {idFeature.buttons.map((idButton, iButtonIndex) => (
                            <Link
                              key={iButtonIndex}
                              href={idButton.href || "#"}
                              className="inline-flex items-center text-sm font-medium text-muted-foreground bg-accent border border-border px-4 py-2 rounded-md transition-colors underline-offset-4 hover:underline"
                            >
                              {idButton.label}
                              <ChevronRight className="ml-1 md:h-3 md:w-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="mx-auto max-w-[58rem] text-center mt-12 bg-accent p-8 rounded-lg border border-border shadow-sm">
              <p className="text-primary/70 font-medium mb-6">
                {idProduct?.guideSectionHeaderFooter.title}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row justify-center">
                {idProduct?.guideSectionHeaderFooter.buttons?.map(
                  (idBtn, iIndex) =>
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
                        variant={
                          (idBtn.variant as Tbutton["variant"]) ?? "default"
                        }
                        onClick={() =>
                          idBtn.formMode &&
                          fnHandleFormButtonClick(
                            idBtn.formMode as TformMode,
                            "containerThree",
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
          {fnRenderFormBelowSection("containerThree")}
        </section>
      </div>

      {/* successStory */}
      <div ref={LdSectionRefs("containerFour")}>
        <section className="border-b border-border/40 py-16 md:py-24 lg:py-24">
          <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
            <TitleSubtitle
              idTitle={{
                ...idProduct?.successStoryHeaderFooter.header,
                className:
                  "mx-auto max-w-[58rem] items-center justify-center gap-4 text-center",
                headingClass: "md:text-5xl",
              }}
            />
            <div className="mx-auto max-w-5xl md:py-6">
              <div className="grid gap-8 md:grid-cols-2">
                {idProduct?.successStoryCard.map((idCard, iIndex) => (
                  <CustomCard
                    key={iIndex}
                    idCardProps={{
                      header: {
                        subtitle: idCard.header?.subtitle,
                        descripClass: "italic m-0",
                        headingClass: "mb-0",
                      },
                      avatar: idCard.avatar,
                      avatarDetails: idCard.avatarDetails,
                      namePosition: "top",
                      link: idCard.link?.map((iaLnk) => ({
                        ...iaLnk,
                        icon: "CheckCircle",
                        className: "h-5 w-5",
                        iconPosition: "before",
                        size: "lg",
                      })),
                    }}
                  />
                ))}
              </div>
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {idProduct?.successStoryHighlight?.map((idItem, iIndex) => (
                  <div className="text-center" key={iIndex}>
                    <p className="text-3xl font-light mb-2">{idItem.label}</p>
                    <div className="h-0.5 w-8 bg-primary mx-auto mb-2"></div>
                    <p className="text-sm text-primary">{idItem.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mx-auto max-w-[58rem] text-center mt-8">
              <p className="text-primary/70 mb-6">
                {idProduct?.successStoryHeaderFooter.title}
                <br />
                <span className="font-medium text-primary">
                  {idProduct?.successStoryHeaderFooter.subtitle}
                </span>
              </p>
              <div className="flex flex-col gap-4 sm:flex-row justify-center">
                {idProduct?.successStoryHeaderFooter.buttons?.map(
                  (idBtn, iIndex) =>
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
                        variant={
                          (idBtn.variant as Tbutton["variant"]) ?? "default"
                        }
                        onClick={() =>
                          idBtn.formMode &&
                          fnHandleFormButtonClick(
                            idBtn.formMode as TformMode,
                            "containerFour",
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
        </section>
        {fnRenderFormBelowSection("containerFour")}
      </div>

      {/* pricing  */}
      <div ref={LdSectionRefs("containerFive")}>
        <section className="bg-primary py-16 md:py-24 lg:py-24">
          <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
            <div className="flex mx-auto w-fit items-center justify-center rounded-full bg-accent px-3 py-1 text-sm mb-4">
              <span className="font-medium">
                {idProduct?.pricingSectionHeaderFooter.header.badge}
              </span>
            </div>
            <TitleSubtitle
              idTitle={{
                ...idProduct?.pricingSectionHeaderFooter.header,
                className:
                  "mx-auto max-w-[58rem] items-center justify-center gap-4 text-center",
                headingClass: "md:text-5xl text-background",
                descripClass: "max-w-[85%] md:text-xl/relaxed text-background",
              }}
            />
            <div className="mx-auto max-w-5xl py-12">
              <div className="relative mx-auto max-w-3xl bg-background rounded-xl border-2 border-foreground p-8 shadow-lg">
                <TitleSubtitle
                  idTitle={{
                    ...idProduct?.pricingHighlight.header,
                    className: "text-center",
                    headingClass: "md:text-2xl",
                  }}
                />
                <div className="flex items-center justify-center gap-2 text-sm">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent">
                    <Clock className="h-4 w-4" />
                  </div>

                  {idProduct?.pricingHighlight.header.badge}
                </div>
                <Separator className="my-6" />

                <div className="mt-8 space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    {idProduct?.pricingHighlight.list?.map(
                      (idpoint, iIndex) => (
                        <div className="space-y-2" key={iIndex}>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5" />
                            <span className="font-medium">{idpoint.label}</span>
                          </div>
                          <p className="text-sm text-muted-foreground pl-7">
                            {idpoint.description}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                  <div className="text-center space-y-2 mt-8">
                    <p className="font-medium text-lg">
                      {idProduct?.pricingSectionHeaderFooter.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {idProduct?.pricingSectionHeaderFooter.subtitle}
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 sm:flex-row justify-center mt-6">
                    {idProduct?.pricingSectionHeaderFooter.buttons.map(
                      (idBtn, iIndex) =>
                        idBtn.href ? (
                          <Link href={idBtn.href} key={iIndex}>
                            <Button
                              key={iIndex}
                              size="lg"
                              className="gap-4"
                              variant={
                                (idBtn.variant as Tbutton["variant"]) ??
                                "default"
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
                            variant={
                              (idBtn.variant as Tbutton["variant"]) ?? "default"
                            }
                            onClick={() =>
                              idBtn.formMode &&
                              fnHandleFormButtonClick(
                                idBtn.formMode as TformMode,
                                "containerFive",
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
            </div>
          </div>
        </section>
        {fnRenderFormBelowSection("containerFive")}
      </div>

      {/* cta */}
      <div ref={LdSectionRefs("containerSix")}>
        <section className="py-16 md:py-24 lg:py-24">
          <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex mx-auto w-fit items-center justify-center rounded-full bg-accent border border-border px-3 py-1 text-sm mb-4">
                <span className="font-medium">
                  {idProduct?.ctaSectionHeader.badge}
                </span>
              </div>
              <TitleSubtitle
                idTitle={{
                  ...idProduct?.ctaSectionHeader,
                  className: "items-center justify-center text-foregroud",
                  headingClass: "md:text-5xl",
                  descripClass: "md:text-xl/relaxed text-center",
                }}
              />
              <div className="mt-8 p-6 bg-accent rounded-lg border border-border shadow-sm">
                <TitleSubtitle
                  idTitle={{
                    ...idProduct?.ctaSection.header,
                    className: "mb-4",
                    headingClass: "md:text-xl mb-2",
                    descripClass: "md:text-base text-foregroud",
                  }}
                />
                <div className="flex items-center justify-center gap-2 text-sm mb-6">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-border">
                    <Users className="h-4 w-4" />
                  </div>
                  <span>{idProduct?.ctaSection.title}</span>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row justify-center">
                  {idProduct?.ctaSection.buttons?.map((idBtn, iIndex) =>
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
                        variant={
                          (idBtn.variant as Tbutton["variant"]) ?? "default"
                        }
                        onClick={() =>
                          idBtn.formMode &&
                          fnHandleFormButtonClick(
                            idBtn.formMode as TformMode,
                            "containerSix",
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
              <p className="mt-6 text-sm text-muted-foreground">
                {idProduct?.ctaSection.subtitle}
              </p>
            </div>
          </div>
        </section>
        {fnRenderFormBelowSection("containerSix")}
      </div>
    </>
  );
}
