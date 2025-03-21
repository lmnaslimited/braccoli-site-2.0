"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

// UI Components
import { Button } from "@repo/ui/components/ui/button"
import { Input } from "@repo/ui/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@repo/ui/components/ui/card"
import { Badge } from "@repo/ui/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/ui/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@repo/ui/components/ui/dropdown-menu"
import { Checkbox } from "@repo/ui/components/ui/checkbox"
import { Label } from "@repo/ui/components/ui/label"

// Icons
import {
  ArrowRight,
  ArrowLeft,
  Lightbulb,
  Building,
  Briefcase,
  Search,
  X,
  Calendar,
  Phone,
  Award,
  Globe,
  Users,
  Clock,
  Heart,
  GraduationCap,
  FileText,
  Youtube,
  Linkedin,
  Twitter,
} from "lucide-react"
import Navbar from "@repo/ui/components/navbar"


type Tjobs={
  id: string;
  title: string;
  location: string;
  type: string;
  level: string;
  role: string;
  skills: string[];
  description: string;
}

type  TsuccessStories={
  title: string;
  description: string;
  image: string;
  type: string;
  platform: string;
  views: string;
  date: string;
  author: string;
}


export default function CareerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Navbar />
        <HeroSection />
        <ProblemSection />
        <PlanSection />
        <CtaSection />
        <LearningSection />
        <StoriesSection />
      </main>
    </div>
  )
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 bg-white">
      <div className="container max-w-6xl relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          <motion.div
            className="space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="block sm:inline">Redefining Career Journeys</span>
            </motion.div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Empowering Careers <br />
              <motion.span
                className="relative inline-block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <span className="relative z-10">Enabling Growth</span>
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-1 bg-black"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                ></motion.span>
              </motion.span>
            </h1>

            <motion.p
              className="text-muted-foreground max-w-lg text-lg mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Shape Your Future with LMNAS – Where Talent Meets Opportunity and Growth.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-6 pt-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Button size="lg" className="group bg-black hover:bg-black/90 text-white">
                Explore Opportunities
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-black/20 hover:bg-black/5">
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative mx-auto lg:mr-0 w-full max-w-lg hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-0.5 rounded-xl bg-black/10 opacity-75 blur-xl"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 3,
                  ease: "easeInOut",
                }}
              ></motion.div>
              <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-1">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="LMNAS Team"
                  width={600}
                  height={600}
                  className="w-full rounded-lg object-cover aspect-square"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Problem Section
function ProblemSection() {
  return (
    <section id="problem" className="py-24 bg-gray-50">
      <div className="container max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left side - Image holder with simplified layout */}
          <div className="relative mx-auto md:ml-0 w-full space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/10">
                <Lightbulb className="h-4 w-4 text-black" />
              </div>
              <h4 className="font-semibold text-lg">What We Discovered…</h4>
            </div>

            {/* Single image below the heading - increased size */}
            <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-1 w-full">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="What we discovered"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Right side - Content (styled like learning section) */}
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-black/10 px-4 py-1.5 text-sm font-medium bg-black/5 text-black">
              <span className="block sm:inline">Career Challenges</span>
            </div>

            <p className="text-lg text-muted-foreground">
              Curious about what truly shapes a successful career, we conducted a study at LMNAS to understand the real
              challenges professionals face.
            </p>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Where Does Growth{" "}
              <span className="relative">
                <span className="relative z-10">Truly Happen?</span>
                <span className="absolute bottom-2 left-0 w-full h-2 bg-black/10 -z-10"></span>
              </span>
            </h2>

            <p className="text-muted-foreground">
              {"Real success isn't just about where you come from, but about having the right platform to grow, learn, and thrive."}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button className="group bg-black hover:bg-black/90 text-white h-12 px-6 text-base">
                Discover How We Help
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Plan Section
function PlanSection() {
  return (
    <section id="plan" className="py-28 bg-white">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Bold, emphasized content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center rounded-full border border-primary/10 px-4 py-1.5 text-sm font-medium bg-primary/5 text-primary">
              <span className="block sm:inline">Join Our Community</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Life at LMNAS is{" "}
              <span className="relative">
                <span className="relative z-10">extraordinary</span>
                <span className="absolute bottom-2 left-0 w-full h-2 bg-primary/10 -z-10"></span>
              </span>
            </h2>

            <p className="text-lg text-muted-foreground">
              Experience a fulfilling career where your skills are valued, your confidence grows, and your potential is
              unlocked.
            </p>

            <Button className="group bg-primary hover:bg-primary/90 text-white h-12 px-6 text-base">
              Join Our Team
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Right side - features in a single column on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="feature-item">
                <div className="feature-icon">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div className="feature-content">
                  <h4>Collaborative Culture</h4>
                  <p>Work alongside talented professionals in a supportive atmosphere</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div className="feature-content">
                  <h4>Career Growth</h4>
                  <p>Clear progression paths with continuous learning opportunities</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div className="feature-content">
                  <h4>Work-Life Balance</h4>
                  <p>Flexible policies that respect your wellbeing</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <div className="feature-content">
                  <h4>Global Opportunities</h4>
                  <p>Work with international teams and gain diverse perspectives</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <div className="feature-content">
                  <h4>Health & Wellness</h4>
                  <p>Comprehensive programs to support your physical and mental health</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <Lightbulb className="h-5 w-5 text-primary" />
                </div>
                <div className="feature-content">
                  <h4>Innovation Focus</h4>
                  <p>Freedom to explore new ideas and contribute to cutting-edge solutions</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// CTA Section
function CtaSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [, setActiveTab] = useState<"students" | "institutions">("students");
  type FilterCategory = "levels" | "roles" | "cities" | "types";

  const [selectedFilters, setSelectedFilters] = useState<{
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
  
 
  
  // Example usage
  

  // Filter jobs based on search and filters
  const filteredJobs = studentJobs.filter((job) => {
    const matchesSearch =
      searchTerm === "" ||
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesLevels = selectedFilters.levels.length === 0 || selectedFilters.levels.includes(job.level)
    const matchesRoles = selectedFilters.roles.length === 0 || selectedFilters.roles.includes(job.role)
    const matchesCities =
      selectedFilters.cities.length === 0 || selectedFilters.cities.some((city) => job.location.includes(city))
    const matchesTypes = selectedFilters.types.length === 0 || selectedFilters.types.includes(job.type)

    return matchesSearch && matchesLevels && matchesRoles && matchesCities && matchesTypes
  })

  const handleFilterChange = (category: FilterCategory, value: string) => {
    setSelectedFilters((prev) => {
      const newFilters = { ...prev };
  
      if (newFilters[category].includes(value)) {
        newFilters[category] = newFilters[category].filter((item) => item !== value);
      } else {
        newFilters[category] = [...newFilters[category], value];
      }
  
      return newFilters;
    });
  };
  
  
  const clearFilters = () => {
    setSelectedFilters({
      levels: [],
      roles: [],
      cities: [],
      types: [],
    })
    setSearchTerm("")
  }

  const getActiveFilterCount = () => {
    return Object.values(selectedFilters).reduce((count, filters) => count + filters.length, 0)
  }

  // Filter options
  const filterOptions = {
    levels: ["Entry", "Mid", "Senior"],
    roles: ["Development", "Design", "Data", "Support"],
    cities: ["Bangalore", "Chennai", "Mumbai", "Delhi"],
    types: ["Full-time", "Part-time", "Internship", "Contract"],
  }

  // Filter labels
  const filterLabels = {
    levels: "Experience Level",
    roles: "Role",
    cities: "Location",
    types: "Job Type",
  }

  return (
    <section id="cta" className="py-20 bg-gray-50">
      <div className="container max-w-5xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">Take Your Next Step</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Find the perfect pathway for your professional journey
          </p>
        </motion.div>

        {/* Custom Tabs */}
        <Tabs defaultValue="students" className="mb-10">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="students" onClick={() => setActiveTab("students")}>
              <GraduationCap className="h-4 w-4 mr-2" />
              For Students
            </TabsTrigger>
            <TabsTrigger value="institutions" onClick={() => setActiveTab("institutions")}>
            <Building className="h-4 w-4 mr-2" />
              For Institutions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="students" className="mt-6">
            {/* Simplified search and filters */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <Input
                    placeholder="Search for opportunities..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                {getActiveFilterCount() > 0 && (
                  <Button variant="outline" size="icon" onClick={clearFilters} className="h-10 w-10 shrink-0">
                    <X className="h-4 w-4" />
                    <span className="sr-only">Clear filters</span>
                  </Button>
                )}
              </div>

              {/* Simplified horizontal filter bar */}
              <div className="flex flex-wrap gap-3 mb-4">
                {Object.entries(filterLabels).map(([category, label]) => (
 
                  <DropdownMenu key={category}>
  <DropdownMenuTrigger asChild>
    <Button variant="outline" className="border-black/20 hover:bg-black/5">
      {label}
      {selectedFilters[category as FilterCategory].length > 0 && (
        <Badge className="ml-2 bg-black text-white">
          {selectedFilters[category as FilterCategory].length}
        </Badge>
      )}
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="start" className="w-56">
    {filterOptions[category as FilterCategory].map((option) => (
      <DropdownMenuItem
        key={option}
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => handleFilterChange(category as FilterCategory, option)}
      >                      
        <Checkbox
          id={`${category}-${option}`}
          checked={selectedFilters[category as FilterCategory].includes(option)}
          onCheckedChange={() => handleFilterChange(category as FilterCategory, option)}
          className="rounded-sm"
        />
        <Label
          htmlFor={`${category}-${option}`}
          className={`text-sm flex-1 cursor-pointer ${
            selectedFilters[category as FilterCategory].includes(option) ? "font-medium" : ""
          }`}
        >
          {option}
        </Label>
      </DropdownMenuItem>
    ))}
  </DropdownMenuContent>
</DropdownMenu>

                ))}
              </div>

              {/* Active filters display */}
              {getActiveFilterCount() > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {Object.entries(selectedFilters).map(([category, values]) =>
                    values.map((value) => (
                      <Badge
                        key={`${category}-${value}`}
                        variant="secondary"
                        className="flex items-center gap-1 bg-gray-100"
                      >
                        {value}
                        <X
                          className="h-3 w-3 cursor-pointer ml-1"
                          onClick={() => handleFilterChange(category as FilterCategory, value)}
                          />
                      </Badge>
                    )),
                  )}
                </div>
              )}
            </div>

            {/* Job listings */}
            {filteredJobs.length > 0 ? (
              <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
                {filteredJobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <JobCard job={job} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-xl border">
                <p className="text-muted-foreground">No matching opportunities found. Try adjusting your filters.</p>
              </div>
            )}

            <motion.div
              className="mt-10 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Button variant="outline" className="group border-black/20 hover:bg-black/5">
                View All Opportunities
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </TabsContent>

          <TabsContent value="institutions" className="mt-6">
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-2/3 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/10">
                      <Building className="h-5 w-5 text-black" />
                    </div>
                    <h3 className="text-xl font-bold">Campus Connect Program</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Bridge the gap between academia and industry with our comprehensive campus partnership program. We
                    offer customized training modules, industry-aligned curriculum support, and exclusive placement
                    opportunities for your students.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2">Training & Workshops</h4>
                      <p className="text-sm text-muted-foreground">
                        Industry-relevant skill development sessions conducted by our experts
                      </p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2">Internship & On-Campus Recruitment</h4>
                      <p className="text-sm text-muted-foreground">
                        Structured internships with real-world project experience and dedicated on-campus hiring drives
                        for your students
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <Button className="group bg-black hover:bg-black/90 text-white flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      On-Campus Recruitment
                    </Button>
                    <Button
                      variant="outline"
                      className="group border-black/20 hover:bg-black/5 flex items-center gap-2"
                    >
                      <Phone className="h-4 w-4" />
                      Contact Our Team
                    </Button>
                  </div>
                </div>
                <div className="md:w-1/3 flex justify-center md:block">
                  <div className="relative w-full max-w-xs aspect-square">
                    <div className="absolute -inset-0.5 rounded-xl bg-black/10 opacity-75 blur-xl"></div>
                    <div className="relative h-full w-full rounded-xl bg-white flex items-center justify-center p-6">
                      <Building className="h-16 w-16 text-black opacity-20" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

// Learning Section
function LearningSection() {
  return (
    <section id="learning" className="py-28 bg-white">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image (hidden on mobile) */}
          <motion.div
            className="relative mx-auto lg:ml-0 w-full max-w-lg hidden lg:block"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-0.5 rounded-xl bg-black/5 opacity-75 blur-xl"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 3,
                  ease: "easeInOut",
                }}
              ></motion.div>
              <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-1">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="LMNAS Learning"
                  width={600}
                  height={600}
                  className="w-full rounded-lg object-cover aspect-square"
                />
              </div>
            </div>
          </motion.div>

          {/* Right side - Content (reduced) */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center rounded-full border border-black/10 px-4 py-1.5 text-sm font-medium bg-black/5 text-black">
              <span className="block sm:inline">Continuous Learning</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Grow your skills with{" "}
              <span className="relative">
                <span className="relative z-10">LMNAS</span>
                <span className="absolute bottom-2 left-0 w-full h-2 bg-black/10 -z-10"></span>
              </span>
            </h2>

            <p className="text-lg text-muted-foreground">
              {"Even if you haven't joined us yet, you can still learn and grow with LMNAS through our expert-led courses and webinars."}
            </p>

            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/10 mt-1">
                <Lightbulb className="h-4 w-4 text-black" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Looking for industry insights?</h4>
                <p className="text-muted-foreground">
                  Join our webinars featuring experts discussing the latest trends and technologies.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button className="group bg-black hover:bg-black/90 text-white h-12 px-6 text-base">
                Explore Courses
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="group border-black/20 hover:bg-black/5 h-12 px-6 text-base">
                Register for Webinars
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Stories Section
function StoriesSection() {
  return (
    <section id="stories" className="py-24 bg-white">
      <div className="container">
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            <span className="relative inline-block">
              Success Stories
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary/40"></span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from our people and see how LMNAS has transformed careers.
          </p>
        </motion.div>

        <SuccessStoriesCarousel stories={successStories} />

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-lg font-medium mb-2">Your story could be next.</p>
          <p className="text-muted-foreground mb-6">Join us and be part of something bigger!</p>
          <Button variant="outline" className="group border-primary/20 hover:bg-primary/5 h-12 px-6 text-base">
            View All Stories
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

// Job Card Component
function JobCard({ job }:{job:Tjobs}) {
  return (
    <Card className="h-full border hover:shadow-md transition-all group">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Badge variant="outline" className="w-fit bg-black/5 text-black border-black/20">
            {job.type}
          </Badge>
          <Badge variant="outline" className="w-fit bg-black/5 text-black border-black/20">
            {job.level} Level
          </Badge>
        </div>
        <CardTitle className="text-lg mt-2">{job.title}</CardTitle>
        <CardDescription className="flex items-center">
          <Briefcase className="h-3 w-3 mr-1" />
          {job.location}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-sm text-muted-foreground line-clamp-2">{job.description}</p>
        <div className="mt-2 flex flex-wrap gap-1">
          {job.skills.map((skill, index) => (
            <span key={index} className="inline-block px-2 py-1 text-xs bg-gray-100 rounded-md">
              {skill}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/jobs/${job.id}`} className="w-full">
          <Button variant="outline" className="w-full group/btn border-black/20 hover:bg-black/5">
            Apply <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

// Success Stories Carousel Component
function SuccessStoriesCarousel({ stories }:{stories:TsuccessStories[]}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slideWidth, setSlideWidth] = useState(0)
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const slidesPerView = { mobile: 1, tablet: 2, desktop: 3 }

  useEffect(() => {
    const updateSlideWidth = () => {
      if (carouselRef.current) {
        const containerWidth = carouselRef.current.offsetWidth
        let slidesShown = slidesPerView.mobile

        if (window.innerWidth >= 768) {
          slidesShown = slidesPerView.tablet
        }
        if (window.innerWidth >= 1024) {
          slidesShown = slidesPerView.desktop
        }

        setSlideWidth(containerWidth / slidesShown)
      }
    }

    updateSlideWidth()
    window.addEventListener("resize", updateSlideWidth)

    return () => {
      window.removeEventListener("resize", updateSlideWidth)
    }
  }, [slidesPerView.desktop, slidesPerView.mobile, slidesPerView.tablet])

  const nextSlide = () => {
    let slidesShown = 1
    if (window.innerWidth >= 768) slidesShown = 2
    if (window.innerWidth >= 1024) slidesShown = 3

    setCurrentIndex((prevIndex) => (prevIndex + 1 >= stories.length - slidesShown + 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    let slidesShown = 1
    if (window.innerWidth >= 768) slidesShown = 2
    if (window.innerWidth >= 1024) slidesShown = 3

    setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? stories.length - slidesShown : prevIndex - 1))
  }

  // Helper function to get the appropriate icon based on the source
  function getIcon(source: string) {
    switch (source) {
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
    <div className="relative">
      <div className="carousel" ref={carouselRef}>
        <div
 className="carousel-inner flex px-2 gap-4 transition-transform duration-300 ease-in-out"
           style={{
            transform: `translateX(-${currentIndex * slideWidth}px)`,
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
          }}
        >
          {stories.map((story, index) => (
            <div key={index} className="carousel-item flex-shrink-0 px-2" style={{ width: slideWidth ? `${slideWidth}px` : "100%" }}>
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
                        {getIcon(story.platform)}
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
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 text-primary rounded-full p-3 z-10 border shadow-sm"
        aria-label="Previous slide"
      >
        <ArrowLeft className="h-5 w-5" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 text-primary rounded-full p-3 z-10 border shadow-sm"
        aria-label="Next slide"
      >
        <ArrowRight className="h-5 w-5" />
      </button>
    </div>
  )
}

// Sample data for student jobs
const studentJobs = [
  {
    id: "JD-0142",
    title: "Junior Software Developer",
    location: "Bangalore, India (Hybrid)",
    type: "Full-time",
    level: "Entry",
    role: "Development",
    skills: ["JavaScript", "React", "Node.js"],
    description: "Join our development team to build innovative solutions using modern technologies.",
  },
  {
    id: "JD-0156",
    title: "Associate Data Analyst",
    location: "Chennai, India (Remote)",
    type: "Full-time",
    level: "Entry",
    role: "Data",
    skills: ["SQL", "Excel", "Python"],
    description: "Help transform data into actionable insights. Looking for analytical minds.",
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
    description: "Provide technical assistance to our clients. Ideal for graduates with good communication skills.",
  },
  {
    id: "JD-0185",
    title: "Senior Frontend Developer",
    location: "Bangalore, India (Hybrid)",
    type: "Full-time",
    level: "Senior",
    role: "Development",
    skills: ["React", "TypeScript", "Next.js"],
    description: "Lead our frontend development efforts and mentor junior developers.",
  },
  {
    id: "JD-0192",
    title: "Data Science Lead",
    location: "Chennai, India (Hybrid)",
    type: "Full-time",
    level: "Senior",
    role: "Data",
    skills: ["Machine Learning", "Python", "TensorFlow"],
    description: "Drive our data science initiatives and develop predictive models.",
  },
]

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
    author: "Priya Sharma",
  },
  {
    title: "Switching Careers Successfully",
    description: "Rahul's transition from finance to technology",
    image: "/placeholder.svg?height=300&width=600",
    type: "video",
    platform: "YouTube",
    views: "8.5K",
    date: "3 months ago",
    author: "Rahul Mehta",
  },
  {
    title: "Breaking Barriers in Tech",
    description: "Meera's return to work after a 3-year break",
    image: "/placeholder.svg?height=300&width=600",
    type: "video",
    platform: "YouTube",
    views: "15K",
    date: "1 month ago",
    author: "Meera Patel",
  },
  {
    title: "Campus to Corporate Journey",
    description: "How LMNAS helped Arjun bridge the gap",
    image: "/placeholder.svg?height=300&width=600",
    type: "article",
    platform: "LinkedIn",
    views: "5.2K",
    date: "2 weeks ago",
    author: "Arjun Singh",
  },
  {
    title: "Leadership Development",
    description: "Vikram's growth from developer to engineering manager",
    image: "/placeholder.svg?height=300&width=600",
    type: "article",
    platform: "LinkedIn",
    views: "7.8K",
    date: "1 month ago",
    author: "Vikram Desai",
  },
  {
    title: "International Opportunities",
    description: "Ananya's experience working with global teams",
    image: "/placeholder.svg?height=300&width=600",
    type: "video",
    platform: "YouTube",
    views: "10.3K",
    date: "3 weeks ago",
    author: "Ananya Gupta",
  },
]

