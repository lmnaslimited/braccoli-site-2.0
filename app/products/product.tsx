"use client"
import CustomCard from "@repo/ui/components/customCard";
import Footer from "@repo/ui/components/footer";
import Hero from "@repo/ui/components/hero";
import Navbar from "@repo/ui/components/navbar";
import TitleSubtitle from "@repo/ui/components/titleSubtitle";
import { Button } from "@repo/ui/components/ui/button";
import { Separator } from "@repo/ui/components/ui/separator";
import { Tbutton, TformMode, TheroProps, Tproduct } from "@repo/ui/type";
import {ArrowRight, CheckCircle, ChevronRight, Clock, Users,
} from "lucide-react";
import Link from "next/link";
import { useFormHandler } from "../hooks/useFormHandler";

export default function ProductsComp({idProduct}: {idProduct: Tproduct;}) {
    const { fnHandleFormButtonClick, fnRenderFormBelowSection, LdSectionRefs } = useFormHandler();
    return (
      <>
        <Navbar />
        <div ref={LdSectionRefs("containerOne")}>
        <Hero
          idHero={
            {
              ...idProduct?.hero,
              buttons: idProduct?.hero.buttons.map((idButton) => ({
                ...idButton,
                icon: (
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                ),
                iconPosition: "after",
                size: "lg",
              })),
            } as TheroProps
          }
          onButtonClick={(mode) => fnHandleFormButtonClick(mode as TformMode, "containerOne")}
        />
        {fnRenderFormBelowSection("containerOne")}
        </div>
  
        {/* problems */}
        <div ref={LdSectionRefs("containerTwo")}>
        <section className="border-b border-border/40 py-16 md:py-24 lg:py-24">
          <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
            <TitleSubtitle
              idTitle={{
                ...idProduct?.problems.header,
                className:
                  "mx-auto max-w-[58rem] items-center justify-center gap-4 text-center mb-0", //changed
                headingClass: "md:text-5xl",
                descripClass: "max-w-[85%] md:text-xl/relaxed",
              }}
            />
            <div className="mx-auto grid max-w-5xl py-12 md:grid-cols-2 gap-12">  {/*changed*/}
              <CustomCard
                idCardProps={{
                  header: { text: idProduct?.problems.card.header.text },
                  list: idProduct?.problems.card.list?.map((idList) => ({
                    ...idList,
                    icon: (
                      <div className="mt-1 rounded-full bg-grayBackground p-1">
                        <ChevronRight className="h-4 w-4" />
                      </div>
                    ),
                  }))
                }}
              />
              <div className="flex flex-col justify-center space-y-4">
                <TitleSubtitle
                  idTitle={{
                    ...idProduct?.problems.footer.header,
                    headingClass: "md:text-2xl",
                    className: "md:text-left text-center mb-2"
                  }}
                />
                <div className="flex flex-col gap-4 sm:flex-row"> {/*changed */}
                  {idProduct?.problems.footer.button.map((idBtn, iIndex) => (
                    idBtn.href ?(<Link href={idBtn.href} key={iIndex}><Button
                      key={iIndex}
                      size="lg"
                      className="gap-4"
                      variant={(idBtn.variant as Tbutton["variant"]) ?? "default"}
                    >
                        {idBtn.label}
                    </Button></Link>)
                    :(<Button
                      key={iIndex}
                      size="lg"
                      className="gap-4"
                      variant={(idBtn.variant as Tbutton["variant"]) ?? "default"}
                      onClick={() => idBtn.formMode && fnHandleFormButtonClick(idBtn.formMode as TformMode, "containerTwo")}
                    >
                        {idBtn.label}
                    </Button>)
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {fnRenderFormBelowSection("containerTwo")}
        </div>
  
        {/* solutions */}
        <section className="border-b border-border/40 py-16 md:py-24 lg:py-24 bg-grayBackground">
          <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
            <TitleSubtitle
              idTitle={{
                ...idProduct?.solutions.header,
                className:
                  "mx-auto max-w-[58rem] items-center justify-center gap-4 text-center",
                headingClass: "md:text-5xl",
                descripClass: "max-w-[85%] md:text-xl/relaxed text-primary/70",
              }}
            />
            <div className="mx-auto max-w-5xl md:py-12 py-6"> {/*changed */}
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>
                {idProduct?.solutions.cards.map((idCard, iIndex) => (
                  <div className="relative mb-12 md:mb-16" key={iIndex}>
                    <div className="grid gap-8 md:grid-cols-[80px_1fr] items-start">
                      {/* Step Number hiden on mobile */}
                      <div className="relative z-10 hidden md:flex h-16 w-16 items-center justify-center rounded-full bg-background border-2 border-border shadow-md">
                        <span className="text-xl font-bold">{iIndex + 1}</span>
                      </div>
  
                      {/* Card Component */}
                      <CustomCard
                        key={iIndex}
                        idCardProps={{
                          header: idCard.header,
                          link:
                            idCard.button?.map((iaButton) => ({
                              ...iaButton,
                              icon: <ChevronRight className="ml-1 h-3 w-3" />,
                              iconPosition: "after",
                            })) as Tbutton[],
  
                          footerClassName: "items-start",
                          className: "relative z-10 md:ml-4 border-none hover:shadow-none shadow-none"
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mx-auto max-w-[58rem] text-center mt-16">
                <div className="flex flex-col gap-4 sm:flex-row justify-center"> {/*changed */}
                  {idProduct?.solutions.footer.button.map((idBtn, iIndex) => (
                    <Button
                      key={iIndex}
                      size="lg"
                      className="gap-2"
                      variant={(idBtn.variant as Tbutton["variant"]) ?? "default"}
                    >
                      <Link href={idBtn.href ?? "/"}>
                        <span>{idBtn.label}</span>
                      </Link>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* guide */}
        <div ref={LdSectionRefs("containerThree")}>
        <section className="border-b border-border/40 py-16 md:py-24 lg:py-24 bg-background">
          <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
            <TitleSubtitle
              idTitle={{
                ...idProduct?.guide.header,
                className:
                  "mx-auto max-w-[58rem] items-center justify-center gap-4 text-center",
                headingClass: "md:text-5xl",
              }}
            />
            <div className="mx-auto max-w-6xl md:py-12 "> {/*changed */}
              {idProduct?.guide.features.map((idFeature, iIndex) => (
                <div
                  key={iIndex}
                  className="group relative overflow-hidden rounded-lg border border-border bg-background shadow-sm transition-all hover:shadow-md mb-12"
                >
                  <div className="grid gap-8 md:grid-cols-2 items-center p-6 md:p-8">
                    {iIndex % 2 !== 0 ? (
                      <div className="relative h-[300px] rounded-lg border border-border bg-grayBackground flex items-center justify-center overflow-hidden order-last md:order-first group-hover:border-border transition-all">
                        <div className="absolute inset-0 bg-gradient-to-br from-grayBackground to-muted opacity-50 group-hover:opacity-30 transition-all"></div>
                        {idFeature.img}
                      </div>
                    ) : null}
  
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 mb-4 flex-wrap">
                        {idFeature.icons.map((idHighlight, iHighlightIndex) => (
                          <div
                            key={iHighlightIndex}
                            className="flex items-center gap-2 bg-grayBackground px-3 py-2 rounded-lg"
                          >
                            {idHighlight.icon}
                            <span className="text-sm font-medium">
                              {idHighlight.text}
                            </span>
                          </div>
                        ))}
                      </div>
                      <TitleSubtitle
                        idTitle={{
                          ...idFeature.header,
                          headingClass:
                            "md:text-2xl transition-al",
                        }}
                      />
                      <Link
                        href={idFeature.link.href ?? "/"}
                        className="inline-flex items-center text-sm font-medium text-muted-foreground bg-grayBackground px-4 py-2 rounded-md hover:bg-graybackground transition-colors underline-offset-4 hover:underline"
                      >
                        {idFeature.link.label}
                        <ChevronRight className="ml-1 md:h-3 md:w-3 h-6 w-6 transition-transform group-hover:translate-x-1" /> {/*changed */}
                      </Link>
                    </div>
  
                    {iIndex % 2 === 0 ? (
                      <div className="relative h-[300px] rounded-lg border border-border bg-grayBackground flex items-center justify-center overflow-hidden group-hover:border-muted transition-all">
                        <div className="absolute inset-0 bg-gradient-to-br from-grayBackground to-muted opacity-50 group-hover:opacity-30 transition-all"></div>
                        {idFeature.img}
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
            <div className="mx-auto max-w-[58rem] text-center mt-12 bg-grayBackground p-8 rounded-lg border border-border shadow-sm">
              <p className="text-primary/70 font-medium mb-6">
                {idProduct?.guide.footer.header.text}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row justify-center"> {/*changed */}
                {idProduct?.guide.footer.button.map((idBtn, iIndex) => (
                  idBtn.href ?(<Link href={idBtn.href} key={iIndex}><Button
                    key={iIndex}
                    size="lg"
                    className="gap-4"
                    variant={(idBtn.variant as Tbutton["variant"]) ?? "default"}
                  >
                      {idBtn.label}
                  </Button></Link>)
                  :(<Button
                    key={iIndex}
                    size="lg"
                    className="gap-4"
                    variant={(idBtn.variant as Tbutton["variant"]) ?? "default"}
                    onClick={() => idBtn.formMode && fnHandleFormButtonClick(idBtn.formMode as TformMode, "containerThree")}
                  >
                      {idBtn.label}
                  </Button>)
                ))}
              </div>
            </div>
          </div>
        </section>
        {fnRenderFormBelowSection("containerThree")}
        </div>
  
        {/* successStory */}
        <div ref={LdSectionRefs("containerFour")}>
        <section className="border-b border-border/40 py-16 md:py-24 lg:py-24 bg-grayBackground">
          <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
            <TitleSubtitle
              idTitle={{
                ...idProduct?.successStory.header,
                className:
                  "mx-auto max-w-[58rem] items-center justify-center gap-4 text-center",
                headingClass: "md:text-5xl",
              }}
            />
            <div className="mx-auto max-w-5xl md:py-12"> {/*changed */}
              <div className="grid gap-8 md:grid-cols-2">
                {idProduct?.successStory.cards.map((idCard, iIndex) => (
                  <CustomCard
                    key={iIndex}
                    idCardProps={{
                      header: {
                        subtitle: idCard.header.subtitle,
                        descripClass: "italic m-0",
                        headingClass: "mb-0",
                      },
                      avatar: idCard.avatar,
                      nameAndPlace: idCard.nameAndPlace,
                      namePosition: "top",
                      link: idCard.link?.map((iaLnk) => ({
                        ...iaLnk,
                        icon: <CheckCircle className="h-5 w-5" />,
                        iconPosition: "before",
                        size: "lg",
                      }))
                    }}
                  />
                ))}
              </div>
              <div className="mt-12 grid gap-6 md:grid-cols-4">
                {idProduct?.successStory.items.map((idItem, iIndex) => (
                  <CustomCard
                    key={iIndex}
                    idCardProps={{
                      header: {
                        text: idItem.header.text,
                        subtitle: idItem.header.subtitle,
                        headingClass: "md:text-4xl mb-0",
                      },
                      className: "text-center"
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="mx-auto max-w-[58rem] text-center mt-8">
              <p className="text-primary/70 mb-6">
                {idProduct?.successStory.footer.header.text}
                <br />
                <span className="font-medium text-primary">
                  {idProduct?.successStory.footer.header.subtitle}
                </span>
              </p>
              <div className="flex flex-col gap-4 sm:flex-row justify-center"> {/*changed */}
                {idProduct?.successStory.footer.button.map((idBtn, iIndex) => (
                 idBtn.href ?(<Link href={idBtn.href} key={iIndex}><Button
                    key={iIndex}
                    size="lg"
                    className="gap-4"
                    variant={(idBtn.variant as Tbutton["variant"]) ?? "default"}
                  >
                      {idBtn.label}
                  </Button></Link>)
                  :(<Button
                    key={iIndex}
                    size="lg"
                    className="gap-4"
                    variant={(idBtn.variant as Tbutton["variant"]) ?? "default"}
                    onClick={() => idBtn.formMode && fnHandleFormButtonClick(idBtn.formMode as TformMode, "containerFour")}
                  >
                      {idBtn.label}
                  </Button>)
                ))}
              </div>
            </div>
          </div>
        </section>
        {fnRenderFormBelowSection("containerFour")}
        </div>
  
        {/* pricing  */}
        <div ref={LdSectionRefs("containerFive")}>
        <section className="border-b border-border/40 py-16 md:py-24 lg:py-24 bg-grayBackground">
          <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
            <div className="flex mx-auto w-fit items-center justify-center rounded-full bg-muted px-3 py-1 text-sm mb-4">
              <span className="font-medium">
                {idProduct?.pricing.header.badge}
              </span>
            </div>
            <TitleSubtitle
              idTitle={{
                ...idProduct?.pricing.header,
                className:
                  "mx-auto max-w-[58rem] items-center justify-center gap-4 text-center",
                headingClass: "md:text-5xl",
                descripClass: "max-w-[85%] md:text-xl/relaxed",
              }}
            />
            <div className="mx-auto max-w-5xl py-12">
              <div className="relative mx-auto max-w-3xl bg-background rounded-xl border-2 border-primary p-8 shadow-lg">
                <TitleSubtitle
                  idTitle={{
                    ...idProduct?.pricing.items,
                    className: "text-center",
                    headingClass: "md:text-2xl",
                  }}
                />
                <div className="flex items-center justify-center gap-2 text-sm">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-grayBackground">
                    <Clock className="h-4 w-4" />
                  </div>
  
                  {idProduct?.pricing.items.header.badge}
                </div>
                <Separator className="my-6" />
  
                <div className="mt-8 space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    {idProduct?.pricing.items.points.map((idpoint, iIndex) => (
                      <div className="space-y-2" key={iIndex}>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5" />
                          <span className="font-medium">
                            {idpoint.header.text}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground pl-7">
                          {idpoint.header.subtitle}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="text-center space-y-2 mt-8">
                    <p className="font-medium text-lg">
                      {idProduct?.pricing.footer.header.text}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {idProduct?.pricing.footer.header.subtitle}
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 sm:flex-row justify-center mt-6"> {/*changed */}
                    {idProduct?.pricing.footer.button.map((idBtn, iIndex) => (
                      idBtn.href ?(<Link href={idBtn.href} key={iIndex}><Button
                        key={iIndex}
                        size="lg"
                        className="gap-4"
                        variant={(idBtn.variant as Tbutton["variant"]) ?? "default"}
                      >
                          {idBtn.label}
                      </Button></Link>)
                      :(<Button
                        key={iIndex}
                        size="lg"
                        className="gap-4"
                        variant={(idBtn.variant as Tbutton["variant"]) ?? "default"}
                        onClick={() => idBtn.formMode && fnHandleFormButtonClick(idBtn.formMode as TformMode, "containerFive")}
                      >
                          {idBtn.label}
                      </Button>)
                    ))}
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
        <section className="py-16 md:py-24 lg:py-24 bg-gradient-to-b from-background to-grayBackground">
          <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex mx-auto w-fit items-center justify-center rounded-full bg-muted px-3 py-1 text-sm mb-4">
                <span className="font-medium">
                  {idProduct?.cta.header.badge}
                </span>
              </div>
              <TitleSubtitle
                idTitle={{
                  ...idProduct?.cta.header,
                  className: "items-center justify-center",
                  headingClass: "md:text-5xl",
                  descripClass: "md:text-xl/relaxed text-center",
                }}
              />
              <div className="mt-8 p-6 bg-background rounded-lg border border-border shadow-sm">
                <TitleSubtitle
                  idTitle={{
                    ...idProduct?.cta.item.header,
                    className: "mb-4",
                    headingClass: "md:text-xl mb-2",
                    descripClass: "md:text-base",
                  }}
                />
                <div className="flex items-center justify-center gap-2 text-sm mb-6">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-border">
                    <Users className="h-4 w-4" />
                  </div>
                  <span>{idProduct?.cta.footer.header.text}</span>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row justify-center"> {/*changed */}
                  {idProduct?.cta.footer.button.map((idBtn, iIndex) => (
                   idBtn.href ?(<Link href={idBtn.href} key={iIndex}><Button
                    key={iIndex}
                    size="lg"
                    className="gap-4"
                    variant={(idBtn.variant as Tbutton["variant"]) ?? "default"}
                  >
                      {idBtn.label}
                  </Button></Link>)
                  :(<Button
                    key={iIndex}
                    size="lg"
                    className="gap-4"
                    variant={(idBtn.variant as Tbutton["variant"]) ?? "default"}
                    onClick={() => idBtn.formMode && fnHandleFormButtonClick(idBtn.formMode as TformMode, "containerSix")}
                  >
                      {idBtn.label}
                  </Button>)
                  ))}
                </div>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                {idProduct?.cta.footer.header.subtitle}
              </p>
            </div>
          </div>
        </section>
        {fnRenderFormBelowSection("containerSix")}
        </div>
        <Footer />
      </>
    );
  }
  