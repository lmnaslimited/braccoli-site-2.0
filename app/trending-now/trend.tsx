"use client";

import { useState } from "react";
import { ArrowRight, ChevronRight, Linkedin, Mail, Twitter, Youtube } from "lucide-react";
import { Button } from "@repo/ui/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/ui/components/ui/tabs";
import TrendCard from "@repo/ui/components/trendCard";
import Hero from "@repo/ui/components/hero";
import TitleSubtitle from "@repo/ui/components/titleSubtitle";
import Callout from "@repo/ui/components/callout";
import { Tcallout, TformMode, Thero, Ttrend } from "@repo/ui/type";
import { useFormHandler } from "../hooks/useFormHandler";


const trendsData = [
  {
    title: "AI-Powered ERP: How Businesses Are Scaling Faster",
    description:
      "Discover how AI-powered ERP solutions are transforming business operations and enabling unprecedented growth rates for enterprises of all sizes.",
    source: "LinkedIn",
    imageUrl: "/placeholder.svg?height=200&width=400",
    author: "By LMNAs Cloud Solutions",
    date: "2 days ago",
  },
  {
    title: "5 AI-Driven ERP Trends That Will Transform Your Business",
    description:
      "The ERP landscape is evolving rapidly with AI at the forefront. Here are five key trends that will shape the future of enterprise resource planning.",
    source: "LinkedIn",
    imageUrl: "/placeholder.svg?height=200&width=400",
    author: "By LMNAs Tech Blog",
    date: "1 week ago",
  },
  {
    title: "The Impact of AI on Enterprise Growth & Innovation",
    description:
      "Our CEO discusses how artificial intelligence is revolutionizing enterprise growth strategies and what businesses should do to stay competitive.",
    source: "YouTube",
    imageUrl: "/placeholder.svg?height=200&width=400",
    author: "By LMNAs Channel",
    date: "3 days ago",
  },
  {
    title: "Automation isn't the future. It's the present.",
    description:
      "See how LMNAs Cloud is leading the charge with real-world solutions that deliver immediate ROI.",
    source: "Twitter",
    author: "By @LMNAsCloud",
    date: "1 day ago",
  },
  {
    title: "The Future of Cloud Solutions for Enterprise Transformation",
    description:
      "As cloud technology evolves, enterprises are finding new ways to leverage these solutions for greater efficiency, security, and scalability.",
    source: "LinkedIn",
    imageUrl: "/placeholder.svg?height=200&width=400",
    author: "By LMNAs Cloud Solutions",
    date: "4 days ago",
  },
  {
    title: "How Data Analytics is Revolutionizing Business Decision-Making",
    description:
      "Data-driven decision making is no longer optional. Learn how advanced analytics is transforming how businesses operate and compete in today's market.",
    source: "LinkedIn",
    author: "By LMNAs Tech Blog",
    date: "5 days ago",
  },
]

export default function TrendingChildPage({ idTrend }: { idTrend: Ttrend }) {
  const { fnHandleFormButtonClick, fnRenderFormBelowSection, LdSectionRefs } = useFormHandler();

  // State for tab filtering
  const [selectedTab, setSelectedTab] = useState("all");

  // Get unique sources from trendsData
  const uniqueSources = [
    "all",
    ...new Set(trendsData.map((trend) => trend.source.toLowerCase())),
  ];

  // Filter trends based on selected tab
  const filteredTrends = selectedTab === "all"
    ? trendsData
    : trendsData?.filter(trend =>
      trend.source.toLowerCase() === selectedTab
    );

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Hero Component */}
      <section ref={LdSectionRefs("containerOne")}>
        <Hero
          idHero={{
            ...idTrend.heroSection as Thero
          }}
          onButtonClick={(mode) => fnHandleFormButtonClick(mode as TformMode, "containerOne")}
        />
        {fnRenderFormBelowSection("containerOne")}
      </section>

      {/* frustrationSection */}
      <section ref={LdSectionRefs("containerTwo")}>
        <div className="bg-gradient-to-br from-grayBackground to-background overflow-hidden">
          <div className="px-4 md:px-24 lg:px-8 py-16 md:py-24 lg:24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
            <div className="mx-auto max-w-[58rem]">
              <TitleSubtitle
                idTitle={{
                  highlight: idTrend.frustrationSection[0]?.highlight,
                  className: "text-center",
                }}
              />
              <div className="relative mb-16 mx-auto max-w-4xl p-6 md:p-10 bg-background rounded-xl shadow-lg border border-border">
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-muted rounded-lg shadow-md flex items-center justify-center rotate-12 animate-pulse">
                  <Twitter className="h-8 w-8 text-muted-foreground" />
                </div>
                <div className="absolute -top-4 left-20 w-12 h-12 bg-muted rounded-lg shadow-md flex items-center justify-center -rotate-6 animate-pulse delay-300">
                  <Youtube className="h-6 w-6 text-muted-foreground" />
                </div>
                <div className="absolute top-10 -right-8 w-14 h-14 bg-muted rounded-lg shadow-md flex items-center justify-center rotate-12 animate-pulse delay-700">
                  <Linkedin className="h-7 w-7 text-muted-foreground" />
                </div>

                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold mb-4">
                    {idTrend.frustrationSection[1]?.title}
                  </h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    {idTrend.frustrationSection[1]?.subtitle}
                  </p>
                </div>

                {/* Noisesection */}
                <div className="grid gap-6 md:grid-cols-3">
                  {idTrend.noiseSection.map((idSection, idIndex) => (
                    <div key={idIndex} className="relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 z-10"></div>
                      <div className="h-48 overflow-y-scroll p-4 bg-grayBackground rounded-lg border border-border text-sm">
                        <div className="space-y-3">
                          {idSection.point.map((idPoint, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <div className="w-8 h-8 rounded-full bg-muted flex-shrink-0"></div>
                              <div>
                                <p className="font-medium">{idPoint.label}</p>
                                <p className="text-muted-foreground">
                                  {idPoint.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mt-3 text-center">
                        <p className="font-medium text-primary">
                          {idSection.heading.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {idSection.heading.subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-16 text-center bg-gradient-to-r from-grayBackground to-muted p-8 rounded-xl border border-border">
                <p className="text-lg font-medium mb-6">
                  <span className="font-bold">
                    {idTrend.frustrationSection[1]?.header?.highlight}
                  </span>
                </p>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/80 text-background"
                  onClick={() => {
                    if (idTrend.frustrationSection[1]?.button?.formMode) {
                      fnHandleFormButtonClick(
                        idTrend.frustrationSection[1]?.button?.formMode as TformMode,
                        "containerTwo"
                      );
                    }
                  }}
                >
                  {idTrend.frustrationSection[1]?.button?.label}
                </Button>
              </div>
            </div>
          </div>
        </div>
        {fnRenderFormBelowSection("containerTwo")}
      </section>


      {/* Latest Trends Section */}
      <section className="py-16 md:py-24 lg:py-24 px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <div className="mx-auto max-w-[85rem]">
          <TitleSubtitle
            idTitle={{
              ...idTrend.trendHeader,
              className: "text-center md:text-left",
              headingClass: "",
              descripClass: "",
            }}
          />
          {/* Tabs for filtering trends */}
          <Tabs
            defaultValue="all"
            className="w-full"
            onValueChange={setSelectedTab}
          >
            <div className="border-b mb-8">
              <TabsList className="w-full justify-start h-auto p-0 bg-transparent">
                {uniqueSources.map((source) => (
                  <TabsTrigger
                    key={source}
                    value={source}
                    className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none px-4 py-3 bg-transparent"
                  >
                    {source.charAt(0).toUpperCase() + source.slice(1)}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            <TabsContent value={selectedTab} className="mt-0">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredTrends?.map((trend, index) => (
                  <TrendCard key={index} idTrends={trend} />
                ))}
              </div>
              <div className="mt-12 text-center">
                <Button variant="outline" size="lg" className="group">
                  {idTrend.trendFooter.title}
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section >

      {/* Subscribe Section */}
      <section className="bg-primary">
        <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
          <Callout idCallout={idTrend.calloutSection as Tcallout} />
        </div>
      </section>
    </div >
  );
}



