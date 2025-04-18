"use client";

import { ArrowRight, ChevronRight, Linkedin, Mail, Twitter, Youtube } from "lucide-react";
import { Button } from "@repo/ui/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/ui/components/ui/tabs";
import TrendCard from "@repo/ui/components/trendCard";
import Navbar from "@repo/ui/components/navbar";
import Hero from "@repo/ui/components/hero";
import { TcalloutProps, TformMode, TheroProps } from "@repo/ui/type";
import { useState } from "react";
import TitleSubtitle from "@repo/ui/components/titleSubtitle";
import Footer from "@repo/ui/components/footer";
import Callout from "@repo/ui/components/callout";
import { useFormHandler } from "../hooks/useFormHandler";


const TrendingPage = {
  heroDataWithoutImage: {
    heading: {
      textWithoutColor: "Cut Through the Noise.",
      text: "Stay Ahead of the Curve.",
      subtitle: "Real insights. Real growth. No distractions.",
    },
    description:
      "In today's fast-paced digital landscape, staying updated is crucial. Unlike social media's overwhelming noise, LMNAs brings you data-driven trends, industry insights, and AI-powered innovations to fuel your business growth.",
    buttons: [
      {
        label: "Explore the Latest Trends",
        href: "https://demolens.lmnas.com/#login",
        size: "lg",
        icon: (
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        ),
        iconPosition: "after",
      },
      {
        label: "Talk to an Expert",
        // href: "https://nectar.lmnas.com/contact",
        size: "lg",
        icon: (
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        ),
        iconPosition: "after",
        variant: "outline",
        formMode: "contact",
      },
    ],
  },

  trendsData: [
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
  ],
  latestTrendsHeader: {
    textWithoutColor: "Latest Trends from",
    text: "LMNAs Cloud Solutions",
    subtitle:
      "Stay updated with the latest innovations, industry insights, and AI-driven solutions from LMNAs Cloud Solutions.",
  },
  trendSection: {
    footer: "Show All Trends",
  },

  noiseData: [
    {
      title: "Information Overload",
      subtitle: "Too much content, too little value",
      items: [
        {
          title: "Random Update",
          description: "Just another irrelevant post cluttering your feed...",
        },
        {
          title: "Clickbait Article",
          description:
            "You won't BELIEVE what happened next! Click to find out...",
        },
        {
          title: "Viral Trend",
          description:
            "Everyone's talking about this but it has zero business value...",
        },
        {
          title: "Sponsored Content",
          description: "Yet another ad disguised as valuable content...",
        },
        {
          title: "Outdated News",
          description: "This information was relevant two weeks ago...",
        },
      ],
    },
    {
      title: "Constant Distractions",
      subtitle: "Notifications that derail productivity",
      items: [
        {
          title: "Notification #1",
          description: "Someone you don't know liked a post...",
        },
        {
          title: "Notification #2",
          description: "A group you forgot you joined has a new post...",
        },
        {
          title: "Notification #3",
          description: "Someone mentioned a keyword you once searched for...",
        },
        {
          title: "Notification #4",
          description: "Your post from 3 years ago is getting attention again...",
        },
        {
          title: "Notification #5",
          description: "A platform you rarely use wants your attention...",
        },
      ],
    },
    {
      title: "Missed Opportunities",
      subtitle: "Critical insights lost in the noise",
      items: [
        {
          title: "Market Trend Report",
          description: "Buried under 50 other posts in your feed...",
        },
        {
          title: "Industry Analysis",
          description: "You missed this because of algorithm changes...",
        },
        {
          title: "Competitor Update",
          description: "This critical information was lost in the noise...",
        },
        {
          title: "Growth Opportunity",
          description: "A perfect fit for your business that you never saw...",
        },
        {
          title: "Strategic Insight",
          description: "This could have transformed your business approach...",
        },
      ],
    },
  ],

  frustrationData: {
    header: { textWithoutColor: "The Information Overload Problem" },
    title: "Why Business Leaders Are Frustrated",
    description:
      "Today's digital landscape is overwhelming. The constant barrage of notifications, updates, and content creates more noise than signal.",
    callout: {
      header: {
        textWithoutColor:
          "LMNAs cuts through the noise to deliver only the insights that matter for your business growth.",
      },
      buttons: {
        label: "Discover How LMNAs Can Help",
        // href: "https://nectar.lmnas.com/book_appointment",
        variant: "outline",
        icon: <Mail className="size-5" />,
        iconPosition: "before",
        size: "lg",
        formMode: "booking",
      },
    },
  },

  Finalcallout: {
    header: {
      textWithoutColor: "Stay Ahead: Subscribe for Insights",
    },
    points: {
      title:
        "Be the first to discover AI trends, innovations, and game-changing insights—subscribe now!",
    },
    buttons: [
      {
        label: "Subscribe Now",
        href: "https://nectar.lmnas.com/book_appointment",
        variant: "outline",
        icon: <Mail className="size-5" />,
        iconPosition: "before",
        size: "lg",
      },
    ],
  },
}


export default function TrendingNowPage() {
  const { fnHandleFormButtonClick, fnRenderFormBelowSection, LdSectionRefs } = useFormHandler();

  const [SelectedTab, setSelectedTab] = useState("all");
  const UniqueSources = [
    "all",
    ...new Set(TrendingPage.trendsData.map((idTrend) => idTrend.source.toLowerCase())),
  ];

  const FilteredTrends =
    SelectedTab === "all"
      ? TrendingPage.trendsData
      : TrendingPage.trendsData.filter(
        (idTrend) => idTrend.source.toLowerCase() === SelectedTab
      );

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Component */}
      <section
        ref={LdSectionRefs("containerOne")}
      >
        <Hero idHero={TrendingPage.heroDataWithoutImage as TheroProps}
          onButtonClick={(mode) => fnHandleFormButtonClick(mode as TformMode, "containerOne")} />
        {fnRenderFormBelowSection("containerOne")}
      </section>

      {/* Problem Section*/}
      <section ref={LdSectionRefs("containerTwo")}>
        <div className="bg-gradient-to-br from-grayBackground to-background overflow-hidden">
          <div className="px-4 md:px-24 lg:px-8 py-16 md:py-24 lg:24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
            <div className="mx-auto max-w-[58rem]">
              <TitleSubtitle
                idTitle={{
                  ...TrendingPage.frustrationData.header,
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
                    {TrendingPage.frustrationData.title}
                  </h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    {TrendingPage.frustrationData.description}
                  </p>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                  {TrendingPage.noiseData.map((idSection, idIndex) => (
                    <div key={idIndex} className="relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 z-10"></div>
                      <div className="h-48 overflow-y-scroll p-4 bg-grayBackground rounded-lg border border-border text-sm">
                        <div className="space-y-3">
                          {idSection.items.map((idItem, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <div className="w-8 h-8 rounded-full bg-muted flex-shrink-0"></div>
                              <div>
                                <p className="font-medium">{idItem.title}</p>
                                <p className="text-muted-foreground">
                                  {idItem.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mt-3 text-center">
                        <p className="font-medium text-primary">
                          {idSection.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {idSection.subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-16 text-center bg-gradient-to-r from-grayBackground to-muted p-8 rounded-xl border border-border">
                <p className="text-lg font-medium mb-6">
                  <span className="font-bold">
                    {TrendingPage.frustrationData.callout.header.textWithoutColor}
                  </span>
                </p>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/80 text-background"
                  onClick={() => TrendingPage.frustrationData.callout.buttons.formMode && fnHandleFormButtonClick(TrendingPage.frustrationData.callout.buttons.formMode as TformMode, "containerTwo")}
                >
                  {TrendingPage.frustrationData.callout.buttons.label}
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
              ...TrendingPage.latestTrendsHeader,
              className: "text-center md:text-left",
              headingClass: "",
              descripClass: "",
            }}
          />
          <Tabs
            defaultValue="all"
            className="w-full"
            onValueChange={setSelectedTab}
          >
            <div className="border-b mb-8">
              <TabsList className="w-full justify-start h-auto p-0 bg-transparent">
                {UniqueSources.map((idTab) => (
                  <TabsTrigger
                    key={idTab}
                    value={idTab}
                    className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none px-4 py-3 bg-transparent"
                  >
                    {idTab.charAt(0).toUpperCase() + idTab.slice(1)}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value={SelectedTab} className="mt-0">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {FilteredTrends.map((idTrend, idIndex) => (
                  <TrendCard key={idIndex} idTrends={idTrend} />
                ))}
              </div>

              <div className="mt-12 text-center">
                <Button variant="outline" size="lg" className="group">
                  {TrendingPage.trendSection.footer}
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="bg-primary">
        <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
          <Callout idCallout={TrendingPage.Finalcallout as TcalloutProps} />
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div >
  );
}