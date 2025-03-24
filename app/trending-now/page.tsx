import Link from "next/link"
import { ArrowRight, ChevronRight, Filter, Linkedin, Twitter, Youtube } from "lucide-react"

import { Button } from "@repo/ui/components/ui/button"
import { Input } from "@repo/ui/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/ui/components/ui/tabs"

// At the top of the file, add the import for the TrendCard component
import { TrendCard } from "@repo/ui/components/trend-card"
import Navbar from "@repo/ui/components/navbar"

export default function TrendingNowPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Navigation */}
        <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border/40 py-20 md:py-32">
          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Cut Through the Noise. Stay Ahead of the Curve.
                </h1>
                <p className="max-w-[85%] text-gray-500 md:text-xl/relaxed mx-auto">
                  Real insights. Real growth. No distractions.
                </p>
              </div>
              <p className="max-w-[85%] text-gray-500 md:text-xl/relaxed mx-auto">
                {"In today's fast-paced digital landscape, staying updated is crucial. Unlike social media's overwhelming noise, LMNAs brings you"}{" "}
                <span className="font-semibold text-black">
                  data-driven trends, industry insights, and AI-powered innovations
                </span>{" "} to fuel your business growth.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
                <Button size="lg" className="group">
                  Explore the Latest Trends
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline">
                  Talk to an Expert
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem Section - Redesigned to show social media frustration */}
        <section className="border-b border-border/40 py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-[58rem]">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-10 text-center">
                The{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-500">
                  Information Overload
                </span>{" "}
                Problem
              </h2>

              <div className="relative mb-16">
                {/* Social Media Noise Visualization */}
                <div className="relative mx-auto max-w-4xl p-6 md:p-10 bg-white rounded-xl shadow-lg border border-gray-200">
                  {/* Floating social media elements */}
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-gray-100 rounded-lg shadow-md flex items-center justify-center rotate-12 animate-pulse">
                    <Twitter className="h-8 w-8 text-gray-400" />
                  </div>
                  <div className="absolute -top-4 left-20 w-12 h-12 bg-gray-100 rounded-lg shadow-md flex items-center justify-center -rotate-6 animate-pulse delay-300">
                    <Youtube className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="absolute top-10 -right-8 w-14 h-14 bg-gray-100 rounded-lg shadow-md flex items-center justify-center rotate-12 animate-pulse delay-700">
                    <Linkedin className="h-7 w-7 text-gray-400" />
                  </div>

                  <div className="text-center mb-8">
                    <h3 className="text-xl font-bold mb-4">Why Business Leaders Are Frustrated</h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      {"Today's digital landscape is overwhelming. The constant barrage of notifications, updates, and content creates more noise than signal."}
                    </p>
                  </div>

                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90 z-10"></div>
                      <div className="h-48 overflow-y-scroll p-4 bg-gray-50 rounded-lg border border-gray-200 text-sm">
                        <div className="space-y-3">
                          <div className="flex items-start gap-2">
                            <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0"></div>
                            <div>
                              <p className="font-medium">Random Update</p>
                              <p className="text-gray-500">Just another irrelevant post cluttering your feed...</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0"></div>
                            <div>
                              <p className="font-medium">Clickbait Article</p>
                              <p className="text-gray-500">
                               {"You won't BELIEVE what happened next! Click to find out..."}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0"></div>
                            <div>
                              <p className="font-medium">Viral Trend</p>
                              <p className="text-gray-500">
                                {"Everyone's talking about this but it has zero business value..."}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0"></div>
                            <div>
                              <p className="font-medium">Sponsored Content</p>
                              <p className="text-gray-500">Yet another ad disguised as valuable content...</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0"></div>
                            <div>
                              <p className="font-medium">Outdated News</p>
                              <p className="text-gray-500">This information was relevant two weeks ago...</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 text-center">
                        <p className="font-medium text-gray-800">Information Overload</p>
                        <p className="text-xs text-gray-500">Too much content, too little value</p>
                      </div>
                    </div>

                    <div className="relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90 z-10"></div>
                      <div className="h-48 overflow-y-scroll p-4 bg-gray-50 rounded-lg border border-gray-200 text-sm">
                        <div className="space-y-3">
                          <div className="flex items-start gap-2">
                            <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0"></div>
                            <div>
                              <p className="font-medium">Notification #1</p>
                              <p className="text-gray-500">{"Someone you don't know liked a post..."}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0"></div>
                            <div>
                              <p className="font-medium">Notification #2</p>
                              <p className="text-gray-500">A group you forgot you joined has a new post...</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0"></div>
                            <div>
                              <p className="font-medium">Notification #3</p>
                              <p className="text-gray-500">Someone mentioned a keyword you once searched for...</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0"></div>
                            <div>
                              <p className="font-medium">Notification #4</p>
                              <p className="text-gray-500">Your post from 3 years ago is getting attention again...</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0"></div>
                            <div>
                              <p className="font-medium">Notification #5</p>
                              <p className="text-gray-500">A platform you rarely use wants your attention...</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 text-center">
                        <p className="font-medium text-gray-800">Constant Distractions</p>
                        <p className="text-xs text-gray-500">Notifications that derail productivity</p>
                      </div>
                    </div>

                    <div className="relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90 z-10"></div>
                      <div className="h-48 overflow-y-scroll p-4 bg-gray-50 rounded-lg border border-gray-200 text-sm">
                        <div className="space-y-3">
                          <div className="flex items-start gap-2">
                            <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0"></div>
                            <div>
                              <p className="font-medium">Market Trend Report</p>
                              <p className="text-gray-500">Buried under 50 other posts in your feed...</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0"></div>
                            <div>
                              <p className="font-medium">Industry Analysis</p>
                              <p className="text-gray-500">You missed this because of algorithm changes...</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0"></div>
                            <div>
                              <p className="font-medium">Competitor Update</p>
                              <p className="text-gray-500">This critical information was lost in the noise...</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0"></div>
                            <div>
                              <p className="font-medium">Growth Opportunity</p>
                              <p className="text-gray-500">A perfect fit for your business that you never saw...</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0"></div>
                            <div>
                              <p className="font-medium">Strategic Insight</p>
                              <p className="text-gray-500">This could have transformed your business approach...</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 text-center">
                        <p className="font-medium text-gray-800">Missed Opportunities</p>
                        <p className="text-xs text-gray-500">Critical insights lost in the noise</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 text-center bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-xl border border-gray-200">
                <p className="text-lg font-medium mb-6">
                  <span className="font-bold">LMNAs cuts through the noise</span> to deliver only the insights that matter for your business growth.
                </p>
                <Button size="lg" className="bg-black hover:bg-black/80 text-white">
                  Discover How LMNAs Can Help
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Trends Section */}
        <section className="border-b border-border/40 py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-[85rem]">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Latest Trends from LMNAs Cloud Solutions
                  </h2>
                  <p className="text-gray-500 mt-2 max-w-2xl">
                    Stay updated with the latest innovations, industry insights, and AI-driven solutions from LMNAs Cloud Solutions.
                  </p>
                </div>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Advanced Filters
                </Button>
              </div>

              <Tabs defaultValue="all" className="w-full">
                <div className="border-b mb-8">
                  <TabsList className="w-full justify-start h-auto p-0 bg-transparent">
                    <TabsTrigger
                      value="all"
                      className="data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:shadow-none rounded-none px-4 py-3 bg-transparent"
                    >
                      All Trends
                    </TabsTrigger>
                    <TabsTrigger
                      value="linkedin"
                      className="data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:shadow-none rounded-none px-4 py-3 bg-transparent"
                    >
                      LinkedIn
                    </TabsTrigger>
                    <TabsTrigger
                      value="blogs"
                      className="data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:shadow-none rounded-none px-4 py-3 bg-transparent"
                    >
                      Blogs
                    </TabsTrigger>
                    <TabsTrigger
                      value="youtube"
                      className="data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:shadow-none rounded-none px-4 py-3 bg-transparent"
                    >
                      YouTube
                    </TabsTrigger>
                    <TabsTrigger
                      value="twitter"
                      className="data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:shadow-none rounded-none px-4 py-3 bg-transparent"
                    >
                      Twitter/X
                    </TabsTrigger>
                  </TabsList>
                </div>

                {/* All Trends Content */}
                <TabsContent value="all" className="mt-0">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* LinkedIn Post 1 */}
                    <TrendCard
                      idTrends={{title:"AI-Powered ERP: How Businesses Are Scaling Faster",
                      description:"Discover how AI-powered ERP solutions are transforming business operations and enabling unprecedented growth rates for enterprises of all sizes.",
                      source:"LinkedIn",
                      imageUrl:"/placeholder.svg?height=200&width=400",
                      author:"By LMNAs Cloud Solutions",
                      date:"2 days ago"}}
                    />

                    {/* Blog Post */}
                    <TrendCard
                      idTrends={{title:"5 AI-Driven ERP Trends That Will Transform Your Business",
                      description:"The ERP landscape is evolving rapidly with AI at the forefront. Here are five key trends that will shape the future of enterprise resource planning.",
                      source:"LinkedIn",
                      imageUrl:"/placeholder.svg?height=200&width=400",
                      author:"By LMNAs Tech Blog",
                      date:"1 week ago"}}
                    />

                    {/* YouTube Video */}
                    <TrendCard
                      idTrends={{title:"The Impact of AI on Enterprise Growth & Innovation",
                      description:"Our CEO discusses how artificial intelligence is revolutionizing enterprise growth strategies and what businesses should do to stay competitive.",
                      source:"YouTube",
                      imageUrl:"/placeholder.svg?height=200&width=400",
                      author:"By LMNAs Channel",
                      date:"3 days ago"}}
                    />

                    {/* Twitter Post */}
                    <TrendCard
                      idTrends={{title:"Automation isn't the future. It's the present.",
                      description:"See how LMNAs Cloud is leading the charge with real-world solutions that deliver immediate ROI.",
                      source:"Twitter",
                      author:"By @LMNAsCloud",
                      date:"1 day ago"}}
                    />

                    {/* LinkedIn Post 2 */}
                    <TrendCard
                      idTrends={{title:"The Future of Cloud Solutions for Enterprise Transformation",
                      description:"As cloud technology evolves, enterprises are finding new ways to leverage these solutions for greater efficiency, security, and scalability.",
                      source:"LinkedIn",
                      imageUrl:"/placeholder.svg?height=200&width=400",
                      author:"By LMNAs Cloud Solutions",
                      date:"4 days ago"}}
                    />

                    {/* Blog Post 2 */}
                    <TrendCard
                      idTrends={{title:"How Data Analytics is Revolutionizing Business Decision-Making",
                      description:"Data-driven decision making is no longer optional. Learn how advanced analytics is transforming how businesses operate and compete in today's market.",
                      source:"LinkedIn",
                      author:"By LMNAs Tech Blog",
                      date:"5 days ago"}}
                    />
                  </div>

                  <div className="mt-12 text-center">
                    <Button variant="outline" size="lg" className="group">
                      Show All Trends
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </TabsContent>

                {/* LinkedIn Content */}
                <TabsContent value="linkedin" className="mt-0">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* LinkedIn Post 1 */}
                    <TrendCard
                      idTrends={{title:"AI-Powered ERP: How Businesses Are Scaling Faster",
                      description:"Discover how AI-powered ERP solutions are transforming business operations and enabling unprecedented growth rates for enterprises of all sizes.",
                      source:"LinkedIn",
                      author:"By LMNAs Cloud Solutions",
                      date:"2 days ago"}}
                    />

                    {/* LinkedIn Post 2 */}
                    <TrendCard
                      idTrends={{title:"The Future of Cloud Solutions for Enterprises",
                      description:"As cloud technology evolves, enterprises are finding new ways to leverage these solutions for greater efficiency, security, and scalability.",
                      source:"LinkedIn",
                      author:"By LMNAs Cloud Solutions",
                      date:"4 days ago"}}
                    />

                    {/* LinkedIn Post 3 */}
                    <TrendCard
                      idTrends={{title:"Breaking Down the ROI of Intelligent ERP Systems",
                      description:"Our latest analysis shows how intelligent ERP systems are delivering unprecedented ROI for businesses across various industries.",
                      source:"LinkedIn",
                      author:"By LMNAs Cloud Solutions",
                      date:"1 week ago"}}
                    />
                  </div>

                  <div className="mt-12 text-center">
                    <Button variant="outline" size="lg" className="group">
                      Show All Trends
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </TabsContent>

                {/* Blogs Content */}
                <TabsContent value="blogs" className="mt-0">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Blog Post 1 */}
                    <TrendCard
                      idTrends={{title:"5 AI-Driven ERP Trends to Watch",
                      description:"The ERP landscape is evolving rapidly with AI at the forefront. Here are five key trends that will shape the future of enterprise resource planning.",
                      source:"LinkedIn",
                      author:"By LMNAs Tech Blog",
                      date:"1 week ago"}}
                    />

                    {/* Blog Post 2 */}
                    <TrendCard
                      idTrends={{title:"How Data Analytics is Reshaping Business Decisions",
                      description:"Data-driven decision making is no longer optional. Learn how advanced analytics is transforming how businesses operate and compete.",
                      source:"LinkedIn",
                      author:"By LMNAs Tech Blog",
                      date:"5 days ago"}}
                    />

                    {/* Blog Post 3 */}
                    <TrendCard
                      idTrends={{title:"Cloud Security: What Every Business Must Know",
                      description:"As businesses migrate more operations to the cloud, security becomes paramount. Here's what you need to know to keep your data safe.",
                      source:"LinkedIn",
                      author:"By LMNAs Tech Blog",
                      date:"2 weeks ago"}}
                    />
                  </div>

                  <div className="mt-12 text-center">
                    <Button variant="outline" size="lg" className="group">
                      Show All Trends
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </TabsContent>

                {/* YouTube Content */}
                <TabsContent value="youtube" className="mt-0">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* YouTube Video 1 */}
                    <TrendCard
                      idTrends={{title:"The Impact of AI on Enterprise Growth",
                      description:"Our CEO discusses how artificial intelligence is revolutionizing enterprise growth strategies and what businesses should do to stay competitive.",
                      source:"YouTube",
                      imageUrl:"/placeholder.svg?height=200&width=400",
                      author:"By LMNAs Channel",
                      date:"3 days ago"}}
                    />

                    {/* YouTube Video 2 */}
                    <TrendCard
                      idTrends={{title:"Inside LMNAs: Our Vision for the Future",
                      description:"Take a behind-the-scenes look at LMNAs and learn about our vision for the future of cloud solutions and enterprise technology.",
                      source:"YouTube",
                      imageUrl:"/placeholder.svg?height=200&width=400",
                      author:"By LMNAs Channel",
                      date:"1 week ago"}}
                    />

                    {/* YouTube Video 3 */}
                    <TrendCard
                      idTrends={{title:"Client Success Stories: How Businesses Transformed with LMNAs",
                      description:"Hear directly from our clients about how LMNAs Cloud Solutions helped transform their operations and drive growth.",
                      source:"YouTube",
                      imageUrl:"/placeholder.svg?height=200&width=400",
                      author:"By LMNAs Channel",
                      date:"2 weeks ago"}}
                    />
                  </div>

                  <div className="mt-12 text-center">
                    <Button variant="outline" size="lg" className="group">
                      Show All Trends
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </TabsContent>

                {/* Twitter Content */}
                <TabsContent value="twitter" className="mt-0">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Twitter Post 1 */}
                    <TrendCard
                      idTrends={{title:"Automation isn't the future. It's the present.",
                      description:"See how LMNAs Cloud is leading the charge.",
                      source:"Twitter",
                      author:"By @LMNAsCloud",
                      date:"1 day ago"}}
                    />

                    {/* Twitter Post 2 */}
                    <TrendCard
                      idTrends={{title:"AI-driven ERP systems are proving to cut costs by 50%",
                      description:"How prepared is your business?",
                      source:"Twitter",
                      author:"By @LMNAsCloud",
                      date:"3 days ago"}}
                    />

                    {/* Twitter Post 3 */}
                    <TrendCard
                      idTrends={{title:"The key to business scalability?",
                      description:"A future-proof cloud solution. Learn more at LMNAs.",
                      source:"Twitter",
                      author:"By @LMNAsCloud",
                      date:"5 days ago"}}
                    />
                  </div>

                  <div className="mt-12 text-center">
                    <Button variant="outline" size="lg" className="group">
                      Show All Trends
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="border-b border-border/40 py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-[58rem] text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                Stay Ahead: Subscribe for Exclusive Insights
              </h2>
              <p className="text-gray-500 mb-8 max-w-[85%] mx-auto">
                Want to be the first to know about the latest trends, innovations, and AI-powered solutions? Subscribe to our exclusive insights and never miss a game-changing update!
              </p>
              <p className="text-sm font-medium mb-8">Join thousands of business leaders staying ahead of the curve.</p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input type="email" placeholder="Enter Your Email" className="h-12" />
                <Button className="h-12 px-8">Subscribe Now</Button>
              </div>
              <p className="text-xs text-gray-400 mt-4">
                By subscribing, you agree to our Privacy Policy and Terms of Service.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-white">
        <div className="container flex flex-col gap-6 py-12 px-4 md:px-6 md:flex-row md:justify-between">
          <div className="flex flex-col gap-6 md:w-1/3">
            <div className="flex items-center gap-2 font-bold tracking-tight text-xl">
              <span>LMNAs</span>
            </div>
            <p className="text-sm text-gray-500">
              LMNAs Cloud Solutions provides data-driven trends, industry insights, and AI-powered innovations to fuel your business growth.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-8 md:flex-1">
            <div className="flex flex-col gap-2">
              <h3 className="font-medium">Solutions</h3>
              <nav className="flex flex-col gap-2 text-sm text-gray-500">
                <Link href="/products/lens-erp-suite" className="hover:underline">
                  Cloud ERP
                </Link>
                <Link href="/solutions" className="hover:underline">
                  AI Analytics
                </Link>
                <Link href="/solutions" className="hover:underline">
                  Business Intelligence
                </Link>
                <Link href="/solutions" className="hover:underline">
                  Data Security
                </Link>
              </nav>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-medium">Company</h3>
              <nav className="flex flex-col gap-2 text-sm text-gray-500">
                <Link href="/about-us" className="hover:underline">
                  About
                </Link>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
                <Link href="/careers" className="hover:underline">
                  Careers
                </Link>
                <Link href="https://nectar.lmnas.com/contact" className="hover:underline">
                  Contact
                </Link>
              </nav>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-medium">Legal</h3>
              <nav className="flex flex-col gap-2 text-sm text-gray-500">
                <Link href="/" className="hover:underline">
                  Terms
                </Link>
                <Link href="/" className="hover:underline">
                  Privacy
                </Link>
                <Link href="/" className="hover:underline">
                  Cookies
                </Link>
                <Link href="/" className="hover:underline">
                  Licenses
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="border-t border-border/40 py-6">
          <div className="container flex flex-col gap-4 px-4 md:px-6 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-gray-500">© 2025 LMNAs Cloud Solutions. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="https://twitter.com/lmnaslimited" className="text-gray-500 hover:text-gray-900">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://in.linkedin.com/company/lmnaslimited" className="text-gray-500 hover:text-gray-900">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://www.youtube.com/@lmnascloudsolutions.4549" className="text-gray-500 hover:text-gray-900">
                <span className="sr-only">YouTube</span>
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}