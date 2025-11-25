"use client";
import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import TrendCard from "@repo/ui/components/trendCard";
import { Button } from "@repo/ui/components/ui/button";
import { useFormHandler } from "../../hooks/useFormHandler";
import TitleSubtitle from "@repo/ui/components/titleSubtitle";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@repo/ui/components/ui/tabs";
import {
  TeventPageTarget,
  TformMode,
  TtrendCardProps,
} from "@repo/middleware/type";

export default function Events({ idEvent }: { idEvent: TeventPageTarget }) {
  const { fnHandleFormButtonClick, fnRenderFormBelowSection, LdSectionRefs } =
    useFormHandler();
  const [SelectedCard, fnSetSelectedCard] = useState<number | null>(null);
  const [SelectedTab, setSelectedTab] = useState("all");
  // Track which tab is currently expanded (used for "show more" logic)
  const [expandedTab, setExpandedTab] = useState("");
  // Define the available source types
  const UniqueSources = ["all", "webinar"];
  const [event, fnSetEvent] = useState<TtrendCardProps[]>([]);

  // When the selected tab changes, reset the expanded state
  useEffect(() => {
    setExpandedTab(""); // reset expanded tab when tab is switched
  }, [SelectedTab]);

  // Filter videos based on the selected tab.
  // If "all" is selected, show everything.
  // Otherwise, filter by the matching source.
  const filteredByTab =
    SelectedTab === "all"
      ? event
      : event.filter((idTrend) => idTrend.source.toLowerCase() === SelectedTab);

  // If the current tab is expanded, show all items in that tab.
  // Otherwise, only show the first 9 items.
  const FilteredTrends =
    expandedTab === SelectedTab ? filteredByTab : filteredByTab.slice(0, 9);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const LdResult = await fetch("/api/event");
        const LdSocialData = await LdResult.json();
        fnSetEvent(LdSocialData);
      } catch (error) {
        console.error("Failed to fetch social data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div ref={LdSectionRefs("containerOne")}>
        <section className="lg:py-24 md:py-24 py-16 px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
          <div className="mx-auto max-w-[85rem]">
            <TitleSubtitle
              idTitle={{
                title: idEvent.event.heroSection.heading.title,
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
                  {FilteredTrends.map((video, iIndex) => (
                    <TrendCard
                      key={iIndex}
                      idTrends={{
                        ...video,
                        btnLabel: idEvent.event.heroSection.heading.highlight,
                      }}
                      onButtonClick={(mode, formTitle) => {
                        fnHandleFormButtonClick(
                          mode as TformMode,
                          "containerOne",
                          formTitle
                        );
                        fnSetSelectedCard(iIndex);
                      }}
                    />
                  ))}
                </div>

                {filteredByTab.length > 9 && expandedTab !== SelectedTab && (
                  <div className="mt-12 text-center">
                    <Button
                      variant="outline"
                      size="lg"
                      className="group"
                      onClick={() => setExpandedTab(SelectedTab)}
                    >
                      {idEvent.event.heroSection.buttons[0]?.label}
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>
        {fnRenderFormBelowSection("containerOne", {
          idData: SelectedCard != null ? event[SelectedCard] : undefined,
        })}
      </div>
    </>
  );
}
