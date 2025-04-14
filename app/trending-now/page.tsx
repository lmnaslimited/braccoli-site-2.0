
import { ArrowRight, ChevronRight, Linkedin, Mail, Twitter, Youtube } from "lucide-react";
import { Button } from "@repo/ui/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/ui/components/ui/tabs";
import TrendCard from "@repo/ui/components/trendCard";
import Hero from "@repo/ui/components/hero";
import { TcalloutProps, TformMode, TheroProps, Ttrend } from "@repo/ui/type";
import { useState } from "react";
import TitleSubtitle from "@repo/ui/components/titleSubtitle";
import Callout from "@repo/ui/components/callout";
import { useFormHandler } from "../hooks/useFormHandler";
import { getData } from "../api/getData";
import TrendingChildPage from "./trend"
// import { TrendData } from "../layout";

// console.log(TrendData)

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


export default async function TrendingNowPage() {
    const idTrend=await getData<Ttrend>("trend")
    console.log(idTrend)
    return (
        <TrendingChildPage idTrend={idTrend} />
    )

}