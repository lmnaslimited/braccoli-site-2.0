"use client"
import Callout from "@repo/ui/components/callout";
import CustomCard from "@repo/ui/components/customCard";
import Footer from "@repo/ui/components/footer";
import Hero from "@repo/ui/components/hero";
import TitleSubtitle from "@repo/ui/components/titleSubtitle";
import { Tbutton, TcalloutProps, TformMode, TheroProps, Titems, Tindustry } from "@repo/ui/type";
import {ArrowRight, Calendar} from "lucide-react";
import Image from "next/image";
import Tab from "@repo/ui/components/tab";
import { Button } from "@repo/ui/components/ui/button";
import PainPoints from "@repo/ui/components/painPoint";
import Navbar from "@repo/ui/components/navbar";
import { useFormHandler } from "../hooks/useFormHandler";





export default function IndustryComp({ idIndustry }: { idIndustry: Tindustry }) {
    const { fnHandleFormButtonClick, fnRenderFormBelowSection, LdSectionRefs } = useFormHandler();
    return (
      <>
              <Navbar />
        <div ref={LdSectionRefs("containerOne")}>
        <Hero idHero={idIndustry?.hero as TheroProps}  onButtonClick={(mode) => fnHandleFormButtonClick(mode as TformMode, "containerOne")}/>
        {fnRenderFormBelowSection("containerOne")}
        </div></>
      // <>

      //   {/* problems */}
      //   <div ref={LdSectionRefs("containerTwo")}>
      //   <section className="px-4 md:px-24 lg:px-8 py-16 md:py-24 lg:py-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      //     <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
      //       <TitleSubtitle
      //         idTitle={{
      //           ...idIndustry?.problems.header,
      //           className: "lg:sticky lg:top-24 h-fit",
      //           headingClass: "md:text-5xl leading-tight font-bold",
      //           descripClass: "mt-6",
      //         }}
      //       />
      //       <PainPoints idItems={idIndustry?.problems.items as Titems[]} />
      //     </div>
      //   </section>
      //   <div className="bg-primary">
      //     <Callout idCallout={idIndustry?.problems.footer as TcalloutProps} onButtonClick={(mode) => fnHandleFormButtonClick(mode as TformMode, "containerTwo")}/>
      //   </div>
      //   {fnRenderFormBelowSection("containerTwo")}
      //   </div>
  
      //   {/* features */}
      //   <section className="px-4 md:px-24 lg:px-8 py-16 md:py-24 lg:py-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      //     <TitleSubtitle
      //       idTitle={{
      //         ...idIndustry?.features.header,
      //         className: "text-center items-center",
      //         headingClass: "md:text-5xl",
      //         descripClass: "mt-6",
      //       }}
      //     />
      //     <div className="space-y-24">
      //       {idIndustry?.features?.feature?.map((idSection, iIndex) => (
      //         <div
      //           key={iIndex}
      //           className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
      //         >
      //           {idSection.image.position === "left" && (
      //             <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg order-last lg:order-first">
      //               <Image
      //                 src={idSection.image.src || "placeholder.svg"}
      //                 alt={idSection.image.alt}
      //                 fill
      //                 className="object-cover"
      //               />
      //             </div>
      //           )}
  
      //           <div className="space-y-6">
      //             <TitleSubtitle idTitle={idSection.header} />
      //             <CustomCard
      //               idCardProps={{
      //                 header: idSection.card.header,
      //                 link: idSection.card.button?.map((idButton) => ({
      //                   ...idButton,
      //                   icon: <ArrowRight className="ml-2 h-4 w-4" />,
      //                   iconPosition: "after",
      //                 })) as Tbutton[],
  
      //                 className: "bg-primary/5",
      //               }}
      //             />
      //           </div>
  
      //           {idSection.image.position === "right" && (
      //             <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg order-last lg:order-none">
      //               <Image
      //                 src={idSection.image.src || "/placeholder.svg"}
      //                 alt={idSection.image.alt}
      //                 fill
      //                 className="object-cover"
      //               />
      //             </div>
      //           )}
      //         </div>
      //       ))}
      //     </div>
      //   </section>
  
      //   {/* allFeature */}
      //   <section className="px-4 md:px-24 lg:px-8 py-16 md:py-24 lg:py-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      //     <TitleSubtitle
      //       idTitle={{
      //         ...idIndustry?.allFeature.header,
      //         headingClass: "md:text-5xl",
      //         className: "text-center mb-4",
      //       }}
      //     />
      //     <Tab
      //       idTab={{
      //         data:
      //         idIndustry?.allFeature.cards.map((idCard) => ({
      //             ...idCard,
      //             header: {
      //               ...idCard.header,
      //               headingClass: "text-xl font-semibold mb-2",
      //             },
      //             className: "max-w-sm",
      //             link:
      //               idCard.link?.map((idButton) => ({
      //                 ...idButton,
      //                 icon: <ArrowRight className="size-5" />,
      //                 iconPosition: "after",
      //               })) ?? [],
      //           })) ?? [],
      //         TabDefault: {
      //           text: "All",
      //           label: "Show More",
      //         },
      //       }}
      //     />
      //   </section>
  
      //   {/* cta */}
      //   <div ref={LdSectionRefs("containerThree")}>
      //   <section className="bg-primary/5 rounded-2xl text-center py-16 md:py-24 lg:py-24 ">
      //     <div className="max-w-3xl px-4 md:px-24 lg:px-8 mx-auto space-y-6">
      //       <TitleSubtitle
      //         idTitle={{
      //           ...idIndustry?.cta.header,
      //           className: "text-center items-center",
      //           headingClass: "lighting-tight mb-4",
      //           descripClass: "max-w-5xl",
      //         }}
      //       />
      //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
      //         {idIndustry?.cta.cards.map((idCard, iIndex) => (
      //           <CustomCard
      //             key={iIndex}
      //             idCardProps={{
      //               header: {
      //                 text: idCard.header.text,
      //                 subtitle: idCard.header.subtitle,
      //                 headingClass: "mb-2 text-md",
      //                 descripClass: "text-sm mb-4",
      //               },
      //               image: idCard.image
      //             }}
      //           />
      //         ))}
      //       </div>
      //       <div className="pt-6">
      //         <Button size="lg" className="text-md px-8 py-6"
      //         onClick={() => idIndustry?.cta.footer.button.formMode && fnHandleFormButtonClick(idIndustry?.cta.footer.button.formMode as TformMode, "containerThree")}
      //         >
      //             {idIndustry?.cta.footer.button.label}
      //         </Button>
      //         <p className="text-sm text-muted-foreground mt-4">
      //           {idIndustry?.cta.footer.title}
      //         </p>
      //       </div>
      //     </div>
      //   </section>
      //   {fnRenderFormBelowSection("containerThree")}
      //   </div>
  
      //   {/* success story */}
      //   <div ref={LdSectionRefs("containerFour")}>
      //   <section className="py-16 md:py-24 lg:py-24 bg-muted/30">
      //     <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      //       <TitleSubtitle
      //         idTitle={{
      //           ...idIndustry?.successStory.header,
      //           className: "text-center items-center",
      //           headingClass: "md:text-5xl",
      //         }}
      //       />
      //       <Tab
      //         idTab={{
      //           data: idIndustry?.successStory.cards.map((idCard) => ({
      //               ...idCard,
      //               header: {
      //                 ...idCard.header,
      //                 descripClass: "text-sm h-16",
      //                 headingClass: "text-lg mb-2",
      //               },
      //               image: {
      //                 src: idCard.image?.src,
      //                 alt: idCard.image!.alt, // ! -> to always there
      //                 aspectRatio: "wide",
      //               },
      //               button:
      //                 idCard.button?.map((idButton:Tbutton) => ({
      //                   ...idButton,
      //                   icon: <ArrowRight className="size-5" />,
      //                   iconPosition: "after",
      //                   size: "lg",
      //                   variant: "outline",
      //                 })) ?? [], // Ensure button is always an array
      //               tag: idCard.category,
      //             })),
      //           TabDefault: {
      //             text: "All",
      //             label: "Show More",
      //           },
      //         }}
      //       />
      //       <div className="mt-12 text-center">
      //         <div className="space-y-4">
      //           <h3 className="text-xl font-medium">
      //             {idIndustry?.successStory.footer.title}
      //           </h3>
      //           <Button size="lg" className="group"
      //           onClick={() => idIndustry.successStory.footer.button.formMode && fnHandleFormButtonClick(idIndustry.successStory.footer.button.formMode as TformMode, "containerFour")}
      //           >
      //               {idIndustry?.successStory.footer.button.label}
      //             <Calendar className="ml-2 h-4 w-4" />
      //           </Button>
      //         </div>
      //       </div>
      //     </div>
      //   </section>
      //   {fnRenderFormBelowSection("containerFour")}
      //   </div>
      //   <Footer />
      // </>
    );
  }
  