"use client";
import Footer from "@repo/ui/components/footer";
import Hero from "@repo/ui/components/hero";
import Navbar from "@repo/ui/components/navbar";
import TitleSubtitle from "@repo/ui/components/titleSubtitle";
import { Button } from "@repo/ui/components/ui/button";
import { Tbutton, TheroProps } from "@repo/ui/type";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Building,
  FileText,
  Lightbulb,
  Linkedin,
  Search,
  Twitter,
  X,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";
import { ReactElement, useEffect, useRef, useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@repo/ui/components/ui/tabs";
import { Input } from "@repo/ui/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@repo/ui/components/ui/dropdown-menu";
import { Label } from "@repo/ui/components/ui/label";
import { Badge } from "@repo/ui/components/ui/badge";
import { Checkbox } from "@repo/ui/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";

const career = {
  hero: {
    heading: {
      textWithoutColor: "Empowering Careers",
      text: "Enabling Growth",
      subtitle:
        "Shape Your Future with LMNAS - Where Talent Meets Opportunity and Growth.Enhance supply chain visibility, streamline logistics, and boost operational efficiency with LENS ERP Suite.",
      badge: "Redefining Career Journeys",
    },
    buttons: [
      {
        label: "Explore Opportunities",
        href: "https://demolens.lmnas.com/#login",
        variant: "default",
      },
      {
        label: "Book a Free Consultation",
        href: "https://nectar.lmnas.com/book_appointment",
        variant: "outline",
      },
    ],
    image: {
      src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
      alt: "hero-image",
    },
  },
  section1: {
    title: "What We Discovered…",
    image: {
      src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
      alt: "What we discovered",
    },
    header: {
      textWithoutColor: "Where Does Growth Truly Happen?",
      subtitle:
        "Real success isn't just about where you come from, but about having the right platform to grow, learn, and thrive.",
      badge: "Career Challenges",
    },
    subtitle:
      "Curious about what truly shapes a successful career, we conducted a study at LMNAS to understand the real challenges professionals face.",
    buttons: {
      label: "Discover How We Help",
      href: "https://nectar.lmnas.com/contact",
    },
  },
  section2: {
    header: {
      textWithoutColor: "Life at LMNAS is extraordinary",
      subtitle:
        "Experience a fulfilling career where your skills are valued, your confidence grows, and your potential is unlocked.",
      badge: "Join Our Community",
    },
    buttons: {
      label: "Join Our Team",
      href: "#career",
    },
    items: [
      {
        header: {
          textWithoutColor: "Collaborative Culture",
          subtitle:
            "Work alongside talented professionals in a supportive atmosphere",
        },
        icon: "User",
      },
      {
        header: {
          textWithoutColor: "Career Growth",
          subtitle:
            "Clear progression paths with continuous learning opportunities",
        },
        icon: "Award",
      },
      {
        header: {
          textWithoutColor: "Work-Life Balance",
          subtitle: "Flexible policies that respect your wellbeing",
        },
        icon: "Clock",
      },
      {
        header: {
          textWithoutColor: "Global Opportunities",
          subtitle: "Flexible policies that respect your wellbeing",
        },
        icon: "Globe",
      },
      {
        header: {
          textWithoutColor: "Health & Wellness",
          subtitle:
            "Comprehensive programs to support your physical and mental health",
        },
        icon: "Heart",
      },
      {
        header: {
          textWithoutColor: "Innovation Focus",
          subtitle:
            "Freedom to explore new ideas and contribute to cutting-edge solutions",
        },
        icon: "Lightbulb",
      },
    ],
  },
  section3: {
    header: {
      textWithoutColor: "Take Your Next Step",
      subtitle: " Find the perfect pathway for your professional journey",
    },
    points: [
      {
        header: {
          textWithoutColor: "Training & Workshops",
          subtitle:
            "Industry-relevant skill development sessions conducted by our experts",
        },
      },
      {
        header: {
          textWithoutColor: "Internship & On-Campus Recruitment",
          subtitle:
            "Structured internships with real-world project experience and dedicated on-campus hiring drives for your students",
        },
      },
    ],
    tab: {
      tabTitle: [
        {
          label: "For Students",
          value: "students",
        },
        {
          label: "For Institutions",
          value: "institutions",
        },
      ],
      filterOptions: {
        text: "Clear filters",
        levels: ["Entry", "Mid", "Senior"],
        roles: ["Development", "Design", "Data", "Support"],
        cities: ["Bangalore", "Chennai", "Mumbai", "Delhi"],
        types: ["Full-time", "Part-time", "Internship", "Contract"],
      },
      filterLabels: {
        levels: "Experience Level",
        roles: "Role",
        cities: "Location",
        types: "Job Type",
      },
      error: "No matching opportunities found. Try adjusting your filters.",
      button: {
        label: "View All Opportunities",
      },
    },
    buttons: [
      {
        label: " On-Campus Recruitment",
        href: "#",
        icon: "Calendar",
      },
      {
        label: " Contact Our Team",
        href: "#",
        icon: "Phone",
        variant: "outline",
      },
    ],
  },
  section4: {
    image: {
      src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
      alt: "LMNAS-learning",
    },
    header: {
      textWithoutColor: "Grow your skills with ",
      text: "LMNAS",
      subtitle:
        "Even if you haven't joined us yet, you can still learn and grow with LMNAS through our expert-led courses and webinars.",
      badge: "Continuous Learning",
    },
    points: {
      textWithoutColor: "Looking for industry insights?",
      subtitle:
        "Join our webinars featuring experts discussing the latest trends and technologies.",
    },
    buttons: [
      {
        label: "Explore Courses",
        href: "https://nectar.lmnas.com/index",
      },
      {
        label: "Register for Webinars",
        href: "#",
        variant: "outline",
      },
    ],
  },
  section5:{
    header:{
      textWithoutColor:"Success Stories",
      subtitle: "Hear from our people and see how LMNAS has transformed careers."
    },
    footer:{
      header:{
        textWithoutColor:"Your story could be next.",
        subtitle:"Join us and be part of something bigger!"
      },
      button:{
        label: "View All Stories",
        href:"/solutions"
      }
    }
  }
};

export default function Career() {
  //section 3 usestate
  const [, fnSetActiveTab] = useState("students");
  const [SearchTerm, fnSetSearchTerm] = useState("");
  const [SelectedFilters, fnSetSelectedFilters] = useState<{
    levels: string[];
    roles: string[];
    cities: string[];
    types: string[];
  }>({
    levels: [],
    roles: [],
    cities: [],
    types: [],
  });

  // Filter jobs based on search and filters
  const LaFilteredJobs = studentJobs.filter((idJob) => {
    const MatchesSearch =
      SearchTerm === "" ||
      idJob.title.toLowerCase().includes(SearchTerm.toLowerCase()) ||
      idJob.description.toLowerCase().includes(SearchTerm.toLowerCase());

    const MatchesLevels =
      SelectedFilters.levels.length === 0 ||
      SelectedFilters.levels.includes(idJob.level);
    const MatchesRoles =
      SelectedFilters.roles.length === 0 ||
      SelectedFilters.roles.includes(idJob.role);
    const MatchesCities =
      SelectedFilters.cities.length === 0 ||
      SelectedFilters.cities.some((city) => idJob.location.includes(city));
    const MatchesTypes =
      SelectedFilters.types.length === 0 ||
      SelectedFilters.types.includes(idJob.type);

    return (
      MatchesSearch &&
      MatchesLevels &&
      MatchesRoles &&
      MatchesCities &&
      MatchesTypes
    );
  });

  const fnHandleFilterChange = (
    category: keyof typeof SelectedFilters,
    value: string
  ): void => {
    fnSetSelectedFilters((idPrev) => {
      const NewFilters = { ...idPrev };
      if (NewFilters[category].includes(value)) {
        NewFilters[category] = NewFilters[category].filter(
          (item) => item !== value
        );
      } else {
        NewFilters[category] = [...NewFilters[category], value];
      }
      return NewFilters;
    });
  };

  const fnClearFilters = (): void => {
    fnSetSelectedFilters({
      levels: [],
      roles: [],
      cities: [],
      types: [],
    });
    fnSetSearchTerm("");
  };

  const fnGetActiveFilterCount = (): number => {
    return Object.values(SelectedFilters).reduce(
      (count, filters) => count + filters.length,
      0
    );
  };

  // section4 socialCard
  const [CurrentIndex, fnSetCurrentIndex] = useState(0)
  const [SlideWidth, fnSetSlideWidth] = useState(0)
  const CarouselRef = useRef<HTMLDivElement | null>(null);
  const SlidesPerView = { mobile: 1, tablet: 2, desktop: 3 }

  useEffect(() => {
    const fnUpdateSlideWidth = ():void => {
      if (CarouselRef.current) {
        const containerWidth = CarouselRef.current.offsetWidth
        let slidesShown = SlidesPerView.mobile

        if (window.innerWidth >= 768) {
          slidesShown = SlidesPerView.tablet
        }
        if (window.innerWidth >= 1024) {
          slidesShown = SlidesPerView.desktop
        }

        fnSetSlideWidth(containerWidth / slidesShown)
      }
    }

    fnUpdateSlideWidth()
    window.addEventListener("resize", fnUpdateSlideWidth)

    return () => {
      window.removeEventListener("resize", fnUpdateSlideWidth)
    }
  }, [SlidesPerView.desktop, SlidesPerView.mobile, SlidesPerView.tablet])

  const fnNextSlide = ():void => {
    let slidesShown = 1
    if (window.innerWidth >= 768) slidesShown = 2
    if (window.innerWidth >= 1024) slidesShown = 3

    fnSetCurrentIndex((prevIndex) => (prevIndex + 1 >= successStories.length - slidesShown + 1 ? 0 : prevIndex + 1))
  }

  const fnPrevSlide = ():void => {
    let slidesShown = 1
    if (window.innerWidth >= 768) slidesShown = 2
    if (window.innerWidth >= 1024) slidesShown = 3

    fnSetCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? successStories.length - slidesShown : prevIndex - 1))
  }

  // Helper function to get the appropriate icon based on the source
  function fnGetIcon(iSource: string):ReactElement {
    switch (iSource) {
      case "YouTube":
        return <Youtube className="h-3 w-3 mr-1" />
      case "LinkedIn":
        return <Linkedin className="h-3 w-3 mr-1" />
      case "Twitter":
        return <Twitter className="h-3 w-3 mr-1" />
      default:
        return <FileText className="h-3 w-3 mr-1" />
    }
  }

  return (
    <>
      <Navbar />
      <Hero
        idHero={
          {
            ...career?.hero,
            buttons: career?.hero.buttons.map((iaButton) => ({
              ...iaButton,
              icon: (
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              ),
              iconPosition: "after",
              size: "lg",
            })),
          } as TheroProps
        }
      />

      {/* section 1 */}
      <section id="problem" className="py-24 bg-grayBackground">
        <div className="container max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative mx-auto md:ml-0 w-full space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <Lightbulb className="h-4 w-4 text-primary" />
                </div>
                <h4 className="font-semibold text-lg">
                  {career.section1.title}
                </h4>
              </div>
              <div className="relative overflow-hidden rounded-xl border border-border bg-background p-1 w-full">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={career.section1.image.src}
                    alt={career.section1.image.alt}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-primary/10 px-4 py-1.5 text-sm font-medium bg-primary/5 text-primary">
                <span className="block sm:inline">
                  {career?.section1.header.badge}
                </span>
              </div>
              <p className="text-lg text-muted-foreground">
                {career?.section1.subtitle}
              </p>
              <TitleSubtitle
                idTitle={{
                  ...career?.section1.header,
                  className: "m-0",
                  headingClass: "md:text-5xl tracking-normal",
                  descripClass: "mt-6 md:text-lg",
                }}
              />
              <div className="flex flex-wrap gap-4 pt-2">
                <Link href={career.section1.buttons.href}>
                  <Button size={"lg"}>
                    {career.section1.buttons.label}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 2 */}
      <section id="plan" className="py-28 bg-background">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full border border-primary/10 px-4 py-1.5 text-sm font-medium bg-primary/5 text-primary">
                <span className="block sm:inline">
                  {career?.section2.header.badge}
                </span>
              </div>
              <TitleSubtitle
                idTitle={{
                  ...career?.section2.header,
                  className: "m-0",
                  headingClass: "md:text-5xl tracking-normal",
                  descripClass: "mt-6 md:text-lg",
                }}
              />
              <Link href={career.section2.buttons.href}>
                <Button className="mt-2">
                  {career.section2.buttons.label}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {career?.section2.items.map((idItem, iIndex) => {
                const IconComponent =
                  (Icons[idItem.icon as keyof typeof Icons] as LucideIcon) ||
                  Icons.Users; // Ensure TypeScript recognizes it as a valid component

                return (
                  <div className="flex items-start gap-3" key={iIndex}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 shrink-0">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <TitleSubtitle
                        idTitle={{
                          ...idItem.header,
                          className: "space-y-1",
                          headingClass: "sm:text-base tracking-normal",
                          descripClass: "md:text-sm",
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

      {/* section 3 */}
      <section id="cta" className="py-20 bg-grayBackground">
        <div className="container max-w-5xl px-4 sm:px-6 mx-auto">
          <TitleSubtitle
            idTitle={{
              ...career?.section3.header,
              className: "m-0 items-center justify-center",
              headingClass: "text-3xl sm:text-4xl tracking-normal",
              descripClass: "max-w-lg mx-auto",
            }}
          />

          <Tabs defaultValue="students" className="mb-10">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
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
            </TabsList>
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
                      <span className="sr-only">
                        {career.section3.tab.filterOptions.text}
                      </span>
                    </Button>
                  )}
                </div>
                {/* Simplified horizontal filter bar */}
                <div className="flex flex-wrap gap-3 mb-4">
                  {Object.entries(career.section3.tab.filterLabels).map(
                    ([iCategory, iLabel]) => (
                      <DropdownMenu key={iCategory}>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="outline"
                            className="border-primary/20 hover:bg-primary/5"
                          >
                            {iLabel}
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
                          {career.section3.tab.filterOptions[
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
                                onCheckedChange={() => {}}
                                className="rounded-sm"
                              />
                              <Label
                                htmlFor={`${iCategory}-${iOption}`}
                                className={`text-sm flex-1 cursor-pointer ${
                                  SelectedFilters[
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
                              {idJob.type}
                            </Badge>
                            <Badge
                              variant="outline"
                              className="w-fit bg-primary/5 text-primary border-primary/20"
                            >
                              {idJob.level} Level
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
                            {idJob.description}
                          </p>
                          <div className="mt-2 flex flex-wrap gap-1">
                            {idJob.skills.map((skill, index) => (
                              <span
                                key={index}
                                className="inline-block px-2 py-1 text-xs bg-border rounded-md"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Link href={`/jobs/${idJob.id}`} className="w-full">
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
                    {career.section3.tab.error}
                  </p>
                </div>
              )}

              <motion.div
                className="mt-10 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Button
                  variant="outline"
                  className="group border-primary/20 hover:bg-primary/5"
                >
                  {career.section3.tab.button.label}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </TabsContent>
            <TabsContent value="institutions" className="mt-6">
              <div className="bg-background rounded-xl p-8 shadow-sm border">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-2/3 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <Building className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <TitleSubtitle
                      idTitle={{
                        ...career?.section4.header,
                        className: "m-0 items-center justify-center",
                        headingClass:
                          "md:text-base tracking-tight leading-tight",
                        descripClass: "md:text-sm",
                      }}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                      {career.section3.points.map((idTitle, iIndex) => (
                        <div className="border rounded-lg p-4" key={iIndex}>
                          <TitleSubtitle
                            idTitle={{
                              ...idTitle.header,
                              className: "m-0",
                              headingClass:
                                "md:text-2xl tracking-tight leading-tight",
                              descripClass: "md:text-lg",
                            }}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-4 pt-4">
                      {career.section3.buttons.map((idBtn, iIndex) => {
                        const BtnIconComponent =
                          (Icons[
                            idBtn.icon as keyof typeof Icons
                          ] as LucideIcon) || Icons.Users;

                        return (
                          <Button
                            key={iIndex}
                            size="lg"
                            className="group"
                            variant={
                              (idBtn.variant as Tbutton["variant"]) ?? "default"
                            }
                          >
                            <BtnIconComponent className="h-4 w-4" />
                            <Link href={idBtn.href}>{idBtn.label}</Link>
                          </Button>
                        );
                      })}
                    </div>
                  </div>
                  <div className="md:w-1/3 flex justify-center md:block">
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

      {/* section 4 */}
      <section id="learning" className="py-28 bg-background">
        <div className="container max-w-6xl px-4 sm:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
                  <Image
                    src={career.section4.image.src}
                    alt={career.section4.image.alt}
                    width={600}
                    height={600}
                    className="w-full rounded-lg object-cover aspect-square"
                  />
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
              <div className="inline-flex items-center rounded-full border border-primary/10 px-4 py-1.5 text-sm font-medium bg-primary/5 text-primary">
                <span className="block sm:inline">
                  {career.section4.header.badge}
                </span>
              </div>
              <TitleSubtitle
                idTitle={{
                  ...career?.section4.header,
                  className: "m-0 items-center justify-center",
                  headingClass: "md:text-5xl tracking-tight leading-tight",
                  descripClass: "md:text-lg",
                }}
              />
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 mt-1">
                  <Lightbulb className="h-4 w-4 text-primary" />
                </div>
                <TitleSubtitle
                  idTitle={{
                    ...career?.section4.points,
                    className: "space-y-2 m-0",
                    headingClass:
                      "font-semibold md:text-lg tracking-tight leading-tight",
                    descripClass: "md:text-base",
                  }}
                />
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                {career.section4.buttons.map((idBtn, iIndex) => (
                  <Button
                    key={iIndex}
                    size="lg"
                    className="group"
                    variant={(idBtn.variant as Tbutton["variant"]) ?? "default"}
                  >
                    <Link href={idBtn.href}> {idBtn.label} </Link>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* section 5 */}
      <section className="py-24 bg-background">
      <div className="container px-4 sm:px-6 mx-auto">
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <TitleSubtitle idTitle={{...career.section5.header,
             className: "m-0 items-center justify center",
             headingClass: "md:text-5xl tracking-normal",
             descripClass: "mt-6 md:text-lg",
          }} />
        </motion.div>

        <div className="relative">
      <div className="carousel" ref={CarouselRef}>
        <div
 className="carousel-inner flex px-2 gap-4 transition-transform duration-300 ease-in-out"
           style={{
            transform: `translateX(-${CurrentIndex * SlideWidth}px)`,
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
          }}
        >
          {successStories.map((story, index) => (
            <div key={index} className="carousel-item flex-shrink-0 px-2" style={{ width: SlideWidth ? `${SlideWidth}px` : "100%" }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index * 0.1) % 0.3 }}
                whileHover={{ y: -5 }}
              >
                <Card className="overflow-hidden h-full">
                  <CardHeader className="p-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="flex items-center gap-1 mb-3">
                        {fnGetIcon(story.platform)}
                        {story.platform}
                      </Badge>
                      <CardDescription className="mb-3">{story.date}</CardDescription>
                    </div>
                    <CardTitle className="line-clamp-1">{story.title}</CardTitle>
                  </CardHeader>
                  <div className="relative h-48 w-full">
                    <Image
                      src={story.image || "/placeholder.svg?height=300&width=600"}
                      alt={story.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <CardDescription className="line-clamp-3">{story.description}</CardDescription>
                    {story.author && <p className="mt-2 text-sm font-medium">By {story.author}</p>}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={fnPrevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background hover:bg-grayBackground text-primary rounded-full p-3 z-10 border shadow-sm"
        aria-label="Previous slide"
      >
        <ArrowLeft className="h-5 w-5" />
      </button>

      <button
        onClick={fnNextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background hover:bg-grayBackground text-primary rounded-full p-3 z-10 border shadow-sm"
        aria-label="Next slide"
      >
        <ArrowRight className="h-5 w-5" />
      </button>
    </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
         <TitleSubtitle idTitle={{...career.section5.footer.header,
             className: "m-0 mb-4 items-center justify center",
             headingClass: "md:text-lg tracking-normal",
             descripClass: "mt-2 md:text-sm",
          }} /> 
          <Link href={career.section5.footer.button.href}><Button variant="outline" className="group border-primary/20 hover:bg-primary/5 h-12 px-6 text-base">
            {career.section5.footer.button.label}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button></Link>
          </motion.div>
        </div>
        </section>
      <Footer />
    </>
  );
}

const studentJobs = [
  {
    id: "JD-0142",
    title: "Junior Software Developer",
    location: "Bangalore, India (Hybrid)",
    type: "Full-time",
    level: "Entry",
    role: "Development",
    skills: ["JavaScript", "React", "Node.js"],
    description:
      "Join our development team to build innovative solutions using modern technologies.",
  },
  {
    id: "JD-0156",
    title: "Associate Data Analyst",
    location: "Chennai, India (Remote)",
    type: "Full-time",
    level: "Entry",
    role: "Data",
    skills: ["SQL", "Excel", "Python"],
    description:
      "Help transform data into actionable insights. Looking for analytical minds.",
  },
  {
    id: "JD-0163",
    title: "UI/UX Design Intern",
    location: "Mumbai, India (On-site)",
    type: "Internship",
    level: "Entry",
    role: "Design",
    skills: ["Figma", "Adobe XD", "UI/UX"],
    description: "Create beautiful, intuitive interfaces for our products.",
  },
  {
    id: "JD-0178",
    title: "Technical Support Engineer",
    location: "Delhi, India (Hybrid)",
    type: "Full-time",
    level: "Mid",
    role: "Support",
    skills: ["Troubleshooting", "Customer Service", "Technical Knowledge"],
    description:
      "Provide technical assistance to our clients. Ideal for graduates with good communication skills.",
  },
  {
    id: "JD-0185",
    title: "Senior Frontend Developer",
    location: "Bangalore, India (Hybrid)",
    type: "Full-time",
    level: "Senior",
    role: "Development",
    skills: ["React", "TypeScript", "Next.js"],
    description:
      "Lead our frontend development efforts and mentor junior developers.",
  },
  {
    id: "JD-0192",
    title: "Data Science Lead",
    location: "Chennai, India (Hybrid)",
    type: "Full-time",
    level: "Senior",
    role: "Data",
    skills: ["Machine Learning", "Python", "TensorFlow"],
    description:
      "Drive our data science initiatives and develop predictive models.",
  },
];

// Sample data for success stories
const successStories = [
  {
    title: "From Fresher to Team Lead",
    description: "How Priya navigated her career journey at LMNAS",
    image: "/placeholder.svg?height=300&width=600",
    type: "video",
    platform: "YouTube",
    views: "12K",
    date: "2 months ago",
    author: "By  Priya Sharma",
  },
  {
    title: "Switching Careers Successfully",
    description: "Rahul's transition from finance to technology",
    image: "/placeholder.svg?height=300&width=600",
    type: "video",
    platform: "YouTube",
    views: "8.5K",
    date: "3 months ago",
    author: "By  Rahul Mehta",
  },
  {
    title: "Breaking Barriers in Tech",
    description: "Meera's return to work after a 3-year break",
    image: "/placeholder.svg?height=300&width=600",
    type: "video",
    platform: "YouTube",
    views: "15K",
    date: "1 month ago",
    author: "By  Meera Patel",
  },
  {
    title: "Campus to Corporate Journey",
    description: "How LMNAS helped Arjun bridge the gap",
    image: "/placeholder.svg?height=300&width=600",
    type: "article",
    platform: "LinkedIn",
    views: "5.2K",
    date: "2 weeks ago",
    author: "By Arjun Singh",
  },
  {
    title: "Leadership Development",
    description: "Vikram's growth from developer to engineering manager",
    image: "/placeholder.svg?height=300&width=600",
    type: "article",
    platform: "LinkedIn",
    views: "7.8K",
    date: "1 month ago",
    author: "By Vikram Desai",
  },
  {
    title: "International Opportunities",
    description: "Ananya's experience working with global teams",
    image: "/placeholder.svg?height=300&width=600",
    type: "video",
    platform: "YouTube",
    views: "10.3K",
    date: "3 weeks ago",
    author: "By Ananya Gupta",
  },
]