"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { ChevronRight, LucideIcon } from "lucide-react";
import Hero from "@repo/ui/components/hero";
import TitleSubtitle from "@repo/ui/components/titleSubtitle";
import { Tabs, TabsContent, TabsList, TabsTrigger, } from "@repo/ui/components/ui/tabs";
import { Input } from "@repo/ui/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "@repo/ui/components/ui/dropdown-menu";
import { Button } from "@repo/ui/components/ui/button";
import { Label } from "@repo/ui/components/ui/label";
import { Badge } from "@repo/ui/components/ui/badge";
import { Checkbox } from "@repo/ui/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@repo/ui/components/ui/card";
import TrendCard from "@repo/ui/components/trendCard";
import { ArrowRight, Briefcase, Building, Lightbulb, Search, X, } from "lucide-react";
import { JobData, JobFilters, Tbutton, TcareerPageTarget, TformMode, TtrendCardProps } from "@repo/middleware";
import { useFormHandler } from "../hooks/useFormHandler";
import { getIconComponent } from "@repo/ui/lib/icon";
import { CarrerChart } from "@repo/ui/components/pieChart";




export default function Career({ idCareer }: { idCareer: TcareerPageTarget }) {

  const { fnHandleFormButtonClick, fnRenderFormBelowSection, LdSectionRefs } = useFormHandler();
  const [, fnSetActiveTab] = useState("students");
  // Search term for filtering jobs
  const [SearchTerm, fnSetSearchTerm] = useState("");
  // Selected filter values for job role and location
  const [SelectedFilters, fnSetSelectedFilters] = useState<{
    // levels: string[];
    role: string[];
    location: string[];
    // types: string[];
  }>({
    // levels: [],
    role: [],
    location: [],
    // types: [],
  });

  // State to hold all student job listings fetched from the API
  const [StudentJobs, fnSetStudentJobs] = useState<JobData[]>([]);
  // State to store all available filter options (roles, locations) from the API
  const [FilterOptions, fnSetFilterOptions] = useState<JobFilters>({
    role: [],
    location: [],
  });

  // Fetch jobs and available filter options from the API on component mount
  useEffect(() => {
    const fnFetchJobs = async (): Promise<void> => {
      try {
        const LdResult = await fetch('/api/job');
        const LdJobs = await LdResult.json();
        fnSetStudentJobs(LdJobs.data.data);
        fnSetFilterOptions(LdJobs.data.filters);
      } catch (error) {
        console.error("Failed :", error);
      }
    };

    fnFetchJobs();
  }, []);

  // Apply filtering logic to the list of jobs based on search input and selected filters
  const LaFilteredJobs = StudentJobs.filter((idJob) => {
    // Check if job matches search term in title or description
    const MatchesSearch =
      SearchTerm === "" ||
      idJob.title.toLowerCase().includes(SearchTerm.toLowerCase()) ||
      idJob.description.toLowerCase().includes(SearchTerm.toLowerCase());

    // const MatchesLevels =
    //   SelectedFilters.levels.length === 0 ||
    //   SelectedFilters.levels.includes(idJob.level);

    // Check if job matches selected roles
    const MatchesRoles =
      SelectedFilters.role.length === 0 ||
      SelectedFilters.role.includes(idJob.role);

    // Check if job matches selected locations
    const MatchesCities =
      SelectedFilters.location.length === 0 ||
      SelectedFilters.location.some((city) => idJob.location.includes(city));
    // const MatchesTypes =
    //   SelectedFilters.types.length === 0 ||
    //   SelectedFilters.types.includes(idJob.type);

    return (
      MatchesSearch &&
      // MatchesLevels &&
      MatchesRoles &&
      MatchesCities
      // &&
      // MatchesTypes
    );
  });

  // Toggle a filter value for a given category (role or location)
  const fnHandleFilterChange = (
    iCategory: keyof typeof SelectedFilters,
    iValue: string
  ): void => {
    fnSetSelectedFilters((idPrev) => {
      const NewFilters = { ...idPrev };
      // If value is already selected, remove it; otherwise, add it
      if (NewFilters[iCategory].includes(iValue)) {
        NewFilters[iCategory] = NewFilters[iCategory].filter(
          (item) => item !== iValue
        );
      } else {
        NewFilters[iCategory] = [...NewFilters[iCategory], iValue];
      }
      return NewFilters;
    });
  };

  // Clear all active filters and reset the search term
  const fnClearFilters = (): void => {
    fnSetSelectedFilters({
      // levels: [],
      role: [],
      location: [],
      // types: [],
    });
    fnSetSearchTerm("");
  };

  // Count the total number of active filters applied
  const fnGetActiveFilterCount = (): number => {
    return Object.values(SelectedFilters).reduce(
      (count, filters) => count + filters.length,
      0
    );
  };

  // Clean up markdown or HTML tags from input strings for display
  const fnStripMarkdownOrHtml = (iInput: string): string => {
    if (!iInput) return "";

    // First, remove any HTML tags
    const LHtmlStripped = iInput.replace(/<\/?[^>]+(>|$)/g, "");

    // Then, remove common markdown symbols
    const LMarkdownStripped = LHtmlStripped
      .replace(/[*_~`>#\-+=[\]{}()]/g, "")
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1"); // [text](link) => text

    // Split by \n, trim each line, and join with commas
    const LCommaSeparated = LMarkdownStripped
      .split("\n")
      .map(line => line.trim())
      .filter(line => line !== "")
      .join(", ");

    return LCommaSeparated;
  };


  // //Section 5 social page

  //social section
  // Tracks the currently selected tab (e.g., "all", "linkedin", etc.)
  const [SelectedTab, setSelectedTab] = useState("all");
  // Tracks the tab where "Show More" has been triggered
  const [expandedTab, setExpandedTab] = useState("");
  // Define available content sources for tabs
  const UniqueSources = [
    "all", "linkedin", "youtube", "x"
  ];


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
  const [video, fnSetVideo] = useState<TtrendCardProps[]>([])

  // If "all" is selected, return all videos
  // Otherwise, return cards matching the selected source
  // Control the number of items shown in the UI
  // If the tab is expanded (via "Show More"), show all filtered videos
  // Otherwise, show only the first 6 items

  const FilteredTrends = (() => {
    if (SelectedTab === "all") {
      const YoutubeItems = video.filter(v => v.source.toLowerCase() === "youtube");
      const otherItems = video.filter(v => v.source.toLowerCase() !== "youtube");
      
  
      return expandedTab === "all"
        ? [...YoutubeItems.slice(0, 6), ...otherItems.slice(0, 3)]
        : [...YoutubeItems.slice(0, 6), ...otherItems.slice(0, 0)];
    } else {
      const tabItems = video.filter(v => v.source.toLowerCase() === SelectedTab);
      return expandedTab === SelectedTab ? tabItems.slice(0, 9) : tabItems.slice(0, 6);
    }
  })();


  // Fetch video data from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const LdResult = await fetch('/api/social');
        const LdSocialData = await LdResult.json();
        fnSetVideo(LdSocialData.data);
      } catch (error) {
        console.error("Failed to fetch social data:", error);
      }
    };

    fetchData();
  }, []);


  const renderIcon = (icon: Tbutton['icon']) => {
    const iconName = typeof icon === "string" ? icon : "HelpCircle";
    const IconComponent = getIconComponent(iconName);
    return <IconComponent className="w-5 h-5" />;
  };
  return (
    <>
          <div ref={LdSectionRefs("containerOne")}>
      <Hero
        idHero={
          {
            ...idCareer?.career?.heroSection,
            buttons: idCareer?.career?.heroSection.buttons.map((iaButton) => ({
              ...iaButton,
              iconPosition: "after",
              size: "lg",
            })),
          }
        }
        onButtonClick={(mode) =>
          fnHandleFormButtonClick(mode as TformMode, "containerOne")
        }
      />
      {fnRenderFormBelowSection("containerOne")}
      </div>

      {/* challengeSection */}
      <section id="problem" className="lg:py-24 md:py-24 py-16 bg-accent">
        <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative mx-auto md:ml-0 w-full space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                  <Lightbulb className="h-4 w-4 text-background" />
                </div>
                <h4 className="font-semibold text-lg">
                  {idCareer.career.challengeSection.highlight && idCareer.career.challengeSection.highlight[0]?.label}
                </h4>
              </div>
              <div className="relative overflow-hidden rounded-xl border border-border bg-background p-1 w-full">
                {/* <div className="aspect-[4/3] relative">
                  {idCareer.career.challengeSection.image?.source && (
                    <Image
                      src={idCareer.career.challengeSection.image.source}
                      alt={idCareer.career.challengeSection.image.alternate || 'image'}
                      fill
                      className="object-cover rounded-lg"
                    />
                  )}
                </div> */}
                <CarrerChart />
              </div>
            </div>
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-primary/10 px-4 py-1.5 text-sm font-medium bg-accent text-primary">
                <span className="block sm:inline">
                  {idCareer.career.challengeSection.heading.badge}
                </span>
              </div>
              <p className="text-lg text-muted-foreground">
                {idCareer.career?.challengeSection?.highlight?.[0]?.description}
              </p>
              <TitleSubtitle
                idTitle={{
                  ...idCareer?.career?.challengeSection?.heading,
                  className: "m-0",
                  headingClass: "md:text-5xl tracking-normal",
                  descripClass: "mt-6 md:text-lg",
                }}
              />
              <div className="flex flex-wrap gap-4 pt-2">
                <Link href={idCareer.career?.challengeSection?.buttons?.[0]?.href ?? "#"}>
                  <Button size={"lg"}>
                    {idCareer.career?.challengeSection?.buttons?.[0]?.label}
                    {" "}
                    {renderIcon(idCareer.career?.challengeSection?.buttons?.[0]?.icon)}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* guideSection */}
      <section id="plan" className="lg:py-24 md:py-24 py-16">
        <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full border border-primary/10 px-4 py-1.5 text-sm font-medium bg-accent text-primary">
                <span className="block sm:inline">
                  {idCareer.career.guideSection[0].heading.badge}
                </span>
              </div>
              <TitleSubtitle idTitle={{
                ...idCareer.career.guideSection[0].heading,
                className: "m-0",
                headingClass: "md:text-5xl tracking-normal",
                descripClass: "mt-6 md:text-lg",
              }}
              />
              {/* <Link href={idCareer?.career?.guideSection?.[1]?.href ?? "#"}>
                <Button className="mt-2">
                  {idCareer.career?.guideSection[1].label}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link> */}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {idCareer.career.guideSection[0].point.map((idItem, iIndex) => {
                const IconComponent =
                  (Icons[idItem.icon as keyof typeof Icons] as LucideIcon) || Icons.Users;
                return (
                  <div className="flex items-start gap-2" key={iIndex}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent shrink-0">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <TitleSubtitle
                        idTitle={{
                          ...idItem,
                          className: "space-y-1 mb-0 md:mb-8",
                          headingClass: "sm:text-base text-base tracking-normal", //changed text-sze
                          descripClass: "md:text-base text-base", //changed text-sze
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* jobsSection */}
      <div ref={LdSectionRefs("containerThree")}>
      <section id="jobs" className="lg:py-24 md:py-24 py-16">
        <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-6xl">
          <TitleSubtitle
            idTitle={{
              ...idCareer.career.jobsSection.header,
              className: "m-0 items-center justify-center",
              headingClass: "text-3xl sm:text-4xl tracking-normal",
              descripClass: "max-w-lg mx-auto",
            }}
          />
          <Tabs defaultValue="students" className="mb-10">
            {/* student and industry tab */}
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 rounded-none">
              {idCareer.career.jobsSection.list.slice(0, 2).map((idTitle, iIndex) => (
                <TabsTrigger
                  value={idTitle.subtitle}
                  onClick={() => fnSetActiveTab(idTitle.subtitle)}
                  key={iIndex}
                  className="rounded-none"
                >
                  <Icons.GraduationCap className="h-4 w-4 mr-2" />
                  {idTitle.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {/* <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
      {career.section3.tab.tabTitle.map((idTitle, iIndex) => (
        <TabsTrigger
          value={idTitle.value}
          onClick={() => fnSetActiveTab(idTitle.value)}
          key={iIndex}
        >
          <Icons.GraduationCap className="h-4 w-4 mr-2" />
          {idTitle.label}
        </TabsTrigger>
      ))}
    </TabsList> */}
            <TabsContent value="students" className="mt-6">
              {/* Simplified search and filters */}
              <div className="mb-8">
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                  <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-border" />
                    <Input
                      placeholder="Search for opportunities..."
                      className="pl-10"
                      value={SearchTerm}
                      onChange={(event) => fnSetSearchTerm(event.target.value)}
                    />
                  </div>
                  {fnGetActiveFilterCount() > 0 && (
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={fnClearFilters}
                      className="h-10 w-10 shrink-0"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                {/* Simplified horizontal filter bar */}
                <div className="flex flex-wrap gap-3 mb-4">
                  {Object.entries(FilterOptions).map(
                    ([iCategory]) => (
                      <DropdownMenu key={iCategory}>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="outline"
                            className="border-primary/20 hover:bg-primary/5"
                          >
                            {iCategory}
                            {SelectedFilters[
                              iCategory as keyof typeof SelectedFilters
                            ].length > 0 && (
                                <Badge className="ml-2 bg-primary text-background">
                                  {
                                    SelectedFilters[
                                      iCategory as keyof typeof SelectedFilters
                                    ].length
                                  }
                                </Badge>
                              )}
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="w-56">
                          {FilterOptions[
                            iCategory as keyof typeof SelectedFilters
                          ].map((iOption) => (
                            <DropdownMenuItem
                              key={iOption}
                              className="flex items-center gap-2 cursor-pointer"
                              onSelect={(e) => {
                                e.preventDefault();
                                fnHandleFilterChange(
                                  iCategory as keyof typeof SelectedFilters,
                                  iOption
                                );
                              }}
                            >
                              <Checkbox
                                id={`${iCategory}-${iOption}`}
                                checked={SelectedFilters[
                                  iCategory as keyof typeof SelectedFilters
                                ].includes(iOption)}
                                onCheckedChange={() => { }}
                                className="rounded-sm"
                              />
                              <Label
                                htmlFor={`${iCategory}-${iOption}`}
                                className={`text-sm flex-1 cursor-pointer ${SelectedFilters[
                                  iCategory as keyof typeof SelectedFilters
                                ].includes(iOption)
                                  ? "font-medium"
                                  : ""
                                  }`}
                              >
                                {iOption}
                              </Label>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )
                  )}
                </div>
                {/* Active filters display */}
                {fnGetActiveFilterCount() > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {Object.entries(SelectedFilters).map(
                      ([iCategory, iaValues]) =>
                        iaValues.map((iValue) => (
                          <Badge
                            key={`${iCategory}-${iValue}`}
                            variant="secondary"
                            className="flex items-center gap-1 bg-grayBackground"
                          >
                            {iValue}
                            <X
                              className="h-3 w-3 cursor-pointer ml-1"
                              onClick={() =>
                                fnHandleFilterChange(
                                  iCategory as keyof typeof SelectedFilters,
                                  iValue
                                )
                              }
                            />
                          </Badge>
                        ))
                    )}
                  </div>
                )}
              </div>
              {/* Job listings */}
              {LaFilteredJobs.length > 0 ? (
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
                  {LaFilteredJobs.map((idJob, iIndex) => (
                    <motion.div
                      key={idJob.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: iIndex * 0.1 }}
                    >
                      <Card className="h-full border hover:shadow-md transition-all group">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <Badge
                              variant="outline"
                              className="w-fit bg-primary/5 text-primary border-primary/20"
                            >
                              {idJob.role}
                            </Badge>
                            <Badge
                              variant="outline"
                              className="w-fit bg-primary/5 text-primary border-primary/20"
                            >
                              {idJob.location}
                            </Badge>
                          </div>
                          <CardTitle className="text-lg mt-2">
                            {idJob.title}
                          </CardTitle>
                          <CardDescription className="flex items-center">
                            <Briefcase className="h-3 w-3 mr-1" />
                            {idJob.location}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {fnStripMarkdownOrHtml(idJob.description)}
                          </p>
                          {/* <div className="mt-2 flex flex-wrap gap-1">
                    {idJob.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="inline-block px-2 py-1 text-xs bg-border rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div> */}
                        </CardContent>
                        <CardFooter>
                          <Link href={idJob.applyUrl} target="_blank" className="w-full">
                            <Button
                              variant="outline"
                              className="w-full group/btn border-primary/20 hover:bg-primary/5"
                            >
                              Apply{" "}
                              <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                            </Button>
                          </Link>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-background rounded-xl border">
                  <p className="text-muted-foreground">
                    {idCareer.career.jobsSection.buttons[0]?.description}
                  </p>
                </div>
              )}
              <motion.div
                className="mt-10 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Button variant="outline" className="group border-primary/20 hover:bg-primary/5">
                  {idCareer.career.jobsSection.buttons[0]?.label}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </TabsContent>
            <TabsContent value="institutions" className="mt-6">
              <div className="bg-background rounded-xl p-8 shadow-sm border">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-2/3 space-y-6">
                    {/* <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 ">
                <Building className="h-5 w-5 text-primary" />
              </div>
            </div> */}
                    {/* <TitleSubtitle idTitle={{
                      ...idCareer.career.planSection.heading,
                      className: "m-0",
                      headingClass: "md:text-xl tracking-tight leading-tight",
                      descripClass: "md:text-sm",
                    }}
                    /> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                      {idCareer.career.jobsSection.list.slice(2, 4).map((idTitle, iIndex) => (
                        <div className="border rounded-lg p-4" key={iIndex}>
                          <TitleSubtitle idTitle={{
                            ...idTitle,
                            className: "m-0",
                            headingClass:
                              "md:text-lg text-lg tracking-tight leading-tight",
                            descripClass: "md:text-base text-base",
                          }}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-4 pt-4">
                      {idCareer.career.jobsSection.buttons.slice(1, 3).map((idBtn, iIndex) => {
                        const BtnIconComponent =
                          (Icons[idBtn.icon as keyof typeof Icons] as LucideIcon) || Icons.Users;
                        return (
                          
                          <Button key={iIndex} size="lg" className="group"
                            variant={
                              (idBtn.variant as Tbutton["variant"]) ?? "default"
                            }
                            onClick={() => idBtn.formMode && fnHandleFormButtonClick(idBtn.formMode as TformMode, "containerThree")}>
                            <BtnIconComponent className="h-4 w-4" />
                            {idBtn.label}
                          </Button>
                          
                        );
                      })}
                       

                    </div>
                  </div>
                  <div className="md:w-1/3 md:flex justify-center hidden">
                    <div className="relative w-full max-w-xs aspect-square">
                      <div className="absolute -inset-0.5 rounded-xl bg-primary/10 opacity-75 blur-xl"></div>
                      <div className="relative h-full w-full rounded-xl bg-background flex items-center justify-center p-6">
                        <Building className="h-16 w-16 text-primary opacity-20" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      {fnRenderFormBelowSection("containerThree")}
      </div>

      {/* planSection */}
      <section id="learning" className="lg:py-24 md:py-24 py-16">
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-7xl md:px-24 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
            {/* (hidden on mobile) */}
            <motion.div
              className="relative mx-auto lg:ml-0 w-full max-w-lg hidden lg:block"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-0.5 rounded-xl bg-primary/5 opacity-75 blur-xl"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 3,
                    ease: "easeInOut",
                  }}
                ></motion.div>
                <div className="relative overflow-hidden rounded-xl border border-border bg-background p-1">
                  {idCareer.career.planSection.image?.source && (
                    <Image
                      src={idCareer.career.planSection.image.source}
                      alt={idCareer.career.planSection.image.alternate || 'image'}
                      width={600}
                      height={600}
                      className="w-full rounded-lg object-cover aspect-square"
                    />
                  )}
                </div>
              </div>
            </motion.div>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center rounded-full border border-primary/10 px-4 py-1.5 text-sm font-medium bg-accent text-foreground">
                <span className="block sm:inline">
                  {idCareer.career.planSection.heading.badge}
                </span>
              </div>
              <TitleSubtitle idTitle={{
                ...idCareer?.career?.planSection.heading,
                className: "m-0 items-center justify-center",
                headingClass: "md:text-5xl tracking-tight leading-tight",
                descripClass: "md:text-lg",
              }}
              />
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent mt-1">
                  <Lightbulb className="h-4 w-4 text-foreground" />
                </div>
                <TitleSubtitle idTitle={{
                  ...(idCareer.career.planSection.highlight?.[0] ?? {}),
                  className: "space-y-2 m-0",
                  headingClass:
                    "font-semibold md:text-lg tracking-tight leading-tight",
                  descripClass: "md:text-base",
                }}
                />
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                {idCareer.career.planSection.buttons.map((idBtn, iIndex) => (
                  <Link href={idBtn.href ?? "#"}  target="_blank" key={iIndex}>
                  <Button
                    key={iIndex} size="lg" className="group"
                    variant={(idBtn.variant as Tbutton["variant"]) ?? "default"}
                  >
                     {idBtn.label}{" "}
                    {renderIcon(idBtn.icon)}
                  </Button>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* trendingSection */}


      <section id="recent-trend" className="py-16 md:py-24 lg:py-24 px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <div className="mx-auto max-w-[85rem]">
        <TitleSubtitle idTitle={{
            ...idCareer.career.trendingSection,
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
      ? idCareer.career.trendingFooter[0]?.description
      : idCareer.career.trendingFooter[0]?.label}
    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
  </Button>
</div>

            </TabsContent>
          </Tabs>
        </div>
      </section>

    </>
  );
}



// <section className="lg:py-24 md:py-24 py-16 px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
// <div className="mx-auto max-w-[85rem]">
//   <TitleSubtitle idTitle={{
//     ...idCareer.career.trendingSection,
//     className: "text-center md:text-left",
//     headingClass: "",
//     descripClass: "",
//   }}
//   />
//   <Tabs
//     defaultValue="all"
//     className="w-full"
//     onValueChange={setSelectedTab}
//   >
//     <div className="border-b mb-8">
//       <TabsList className="w-full justify-start h-auto p-0 bg-transparent">
//         {UniqueSources.map((idTab) => (
//           <TabsTrigger
//             key={idTab}
//             value={idTab}
//             className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none px-4 py-3 bg-transparent"
//           >
//             {idTab.charAt(0).toUpperCase() + idTab.slice(1)}
//           </TabsTrigger>
//         ))}
//       </TabsList>
//     </div>

//     <TabsContent value={SelectedTab} className="mt-0">
//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {FilteredTrends.map((idTrend, idIndex) => (
//           <TrendCard key={idIndex} idTrends={idTrend} />
//         ))}
//       </div>
//       {/* <div className="mt-12 text-center">
// <Link href={career.section5.trendSection.footer.button.href}><Button variant="outline" size="lg" className="group">
//   {career.section5.trendSection.footer.button.label}
//   <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
// </Button></Link>
// </div> */}
//     </TabsContent>
//   </Tabs>
// </div>
// </section>