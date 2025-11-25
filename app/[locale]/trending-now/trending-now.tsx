"use client";
import { ChevronRight, Linkedin, Twitter, Youtube } from "lucide-react";
import { Button } from "@repo/ui/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@repo/ui/components/ui/tabs";
import TrendCard from "@repo/ui/components/trendCard";
import Hero from "@repo/ui/components/hero";
import { useEffect, useState } from "react";
import TitleSubtitle from "@repo/ui/components/titleSubtitle";
import Callout from "@repo/ui/components/callout";
import { useFormHandler } from "../../hooks/useFormHandler";
import { Tbutton, TformMode, TtrendsPageSource, TtrendCardProps } from "@repo/middleware/type";
import { getIconComponent } from "@repo/ui/lib/icon";

export default function TrendingNowPage({
  idTrend,
}: {
  idTrend: TtrendsPageSource;
}) {
  const { fnHandleFormButtonClick, fnRenderFormBelowSection, LdSectionRefs } =
    useFormHandler();

  // Tracks the currently selected tab (e.g., "all", "linkedin", etc.)
  const [SelectedTab, setSelectedTab] = useState("all");
  // Tracks the tab where "Show More" has been triggered
  const [expandedTab, setExpandedTab] = useState("");
  // Define available content sources for tabs
  const UniqueSources = ["all", "linkedin", "youtube", "x"];

  const toggleExpandTab = () => {
    if (expandedTab === SelectedTab) {
      setExpandedTab(""); // collapse
    } else {
      setExpandedTab(SelectedTab); // expand
    }
  };

  // When user switches tabs, reset the expanded state
  useEffect(() => {
    setExpandedTab(""); // reset expanded tab when tab is switched
  }, [SelectedTab]);

  // Stores the video/trend data fetched from the backend
  const [video, fnSetVideo] = useState<TtrendCardProps[]>([]);

  // If "all" is selected, return all videos
  // Otherwise, return cards matching the selected source
  // Control the number of items shown in the UI
  // If the tab is expanded (via "Show More"), show all filtered videos
  // Otherwise, show only the first 6 items

  const FilteredTrends = (() => {
    if (SelectedTab === "all") {
      const linkedInItems = video.filter(
        (v) => v.source.toLowerCase() === "linkedin"
      );
      const otherItems = video.filter(
        (v) => v.source.toLowerCase() !== "linkedin"
      );

      return expandedTab === "all"
        ? [...linkedInItems.slice(0, 6), ...otherItems.slice(0, 3)]
        : [...linkedInItems.slice(0, 3), ...otherItems.slice(0, 3)];
    } else {
      const tabItems = video.filter(
        (v) => v.source.toLowerCase() === SelectedTab
      );
      return expandedTab === SelectedTab
        ? tabItems.slice(0, 9)
        : tabItems.slice(0, 6);
    }
  })();

  // Fetch video data from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const LdResult = await fetch("/api/social");
        const LdSocialData = await LdResult.json();
        fnSetVideo(LdSocialData.data);
      } catch (error) {
        console.error("Failed to fetch social data:", error);
      }
    };

    fetchData();
  }, []);

  const renderIcon = (icon: Tbutton["icon"]) => {
    const iconName = typeof icon === "string" ? icon : "HelpCircle";
    const IconComponent = getIconComponent(iconName);
    return <IconComponent className="w-5 h-5" />;
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section ref={LdSectionRefs("containerOne")}>
        <Hero
          idHero={{
            ...idTrend.trend.heroSection,
            buttons: [
              {
                ...idTrend.trend.heroSection.buttons?.[0],
                href: idTrend.trend.heroSection.buttons?.[0]?.href || "#",
                size: "lg",
                iconPosition: "after",
              },
            ],
          }}
          onButtonClick={(mode, formTitle) =>
            fnHandleFormButtonClick(
              mode as TformMode,
              "containerOne",
              formTitle
            )
          }
        />
        {fnRenderFormBelowSection("containerOne")}
      </section>

      {/* Frustration Section*/}
      <section ref={LdSectionRefs("containerTwo")}>
        <div className="bg-gradient-to-br from-accent to-background overflow-hidden">
          <div className="px-4 md:px-24 lg:px-8 py-16 md:py-24 lg:24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
            <div className="mx-auto max-w-[58rem]">
              <TitleSubtitle
                idTitle={{
                  ...idTrend.trend.frustrationSection[0],
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
                    {idTrend.trend.frustrationSection[1].header.title}
                  </h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    {idTrend.trend.frustrationSection[1].subtitle}
                  </p>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                  {idTrend.trend.noiseSection.map((idSection, idIndex) => (
                    <div key={idIndex} className="relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10"></div>
                      <div className="h-48 overflow-y-scroll p-4 bg-background rounded-lg border border-border text-sm">
                        <div className="space-y-3">
                          {idSection.point.map((idItem, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <div className="w-8 h-8 rounded-full bg-accent flex-shrink-0"></div>
                              <div>
                                <p className="font-medium">{idItem.label}</p>
                                <p className="text-foreground">
                                  {idItem.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mt-3 text-center">
                        <p className="font-medium text-foreground">
                          {idSection.heading.title}
                        </p>
                        <p className="text-xs text-foreground">
                          {idSection.heading.subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-16 text-center bg-accent p-8 rounded-xl border border-border">
                <p className="text-lg font-medium mb-6">
                  <span className="font-bold">
                    {idTrend.trend.frustrationSection[1].title}
                  </span>
                </p>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/80 text-background"
                  onClick={() =>
                    idTrend.trend.frustrationSection[1].buttons[0]?.formMode &&
                    fnHandleFormButtonClick(
                      idTrend.trend.frustrationSection[1].buttons[0]?.formMode,
                      "containerTwo",
                      idTrend.trend.frustrationSection[1].buttons[0]?.label
                    )
                  }
                >
                  {idTrend.trend.frustrationSection[1].buttons[0]?.label}{" "}
                  {renderIcon(
                    idTrend.trend.frustrationSection[1].buttons[0]?.icon
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
        {fnRenderFormBelowSection("containerTwo")}
      </section>

      {/* Latest Trends Section */}
      <section
        id="recent-trend"
        className="py-16 md:py-24 lg:py-24 px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl"
      >
        <div className="mx-auto max-w-[85rem]">
          <TitleSubtitle
            idTitle={{
              ...idTrend.trend.trendingSection,
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
                <Button
                  variant="outline"
                  size="lg"
                  className="group"
                  onClick={toggleExpandTab}
                >
                  {expandedTab === SelectedTab
                    ? idTrend.trend.showAll.description
                    : idTrend.trend.showAll.label}
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
          <Callout
            idCallout={{
              ...idTrend.trend.calloutSection,
              buttons: idTrend.trend.calloutSection.buttons.map((btn) => ({
                ...btn,
                iconPosition: "before",
                size: "lg",
              })),
            }}
            onButtonClick={(mode, formTitle) =>
              fnHandleFormButtonClick(
                mode as TformMode,
                "containerFour",
                formTitle
              )
            }
          />
        </div>
      </section>
      {fnRenderFormBelowSection("containerFour")}
    </div>
  );
}
