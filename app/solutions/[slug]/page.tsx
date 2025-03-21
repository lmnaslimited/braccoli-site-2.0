import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@repo/ui/components/ui/button"
import { Badge } from "@repo/ui/components/ui/badge"
import { ProblemSection } from "@repo/ui/components/problemSection"
import { SolutionSection } from "@repo/ui/components/solutionSection"
import { DynamicSidebar } from "@repo/ui/components/dynamicSidebar"
import { RelatedCaseStudies } from "@repo/ui/components/relatedCaseStudy"
import { ArrowLeft, Building, Globe, MapPin, Download } from "lucide-react"
import Navbar from "@repo/ui/components/navbar"
import Footer from "@repo/ui/components/footer"

// Sample case study data - in a real app, this would come from a database or API
const caseStudies = [
  {
    id: 1,
    slug: "manufacturing-efficiency-lmnas",
    company: "TechManufacture Inc.",
    logo: "/placeholder.svg?height=80&width=160",
    heroImage: "/placeholder.svg?height=600&width=1200",
    industry: "Manufacturing",
    location: "Chicago, IL",
    website: "https://example.com",
    challenges: [
      "Legacy systems causing production delays and inefficiencies",
      "Lack of real-time visibility into manufacturing processes",
      "High operational costs due to manual inventory management",
      "Difficulty scaling production to meet growing demand",
    ],
    solution: {
      description:
        "LMNAs implemented a comprehensive LENS ERP solution integrated with Analytics Cloud to provide real-time insights and automation across the manufacturing process.",
      products: ["LENS ERP", "Analytics Cloud"],
      details: [
        "Automated production scheduling and resource allocation",
        "Real-time monitoring of manufacturing processes and equipment",
        "Predictive maintenance to prevent costly downtime",
        "Integrated inventory management with automated reordering",
      ],
    },
    results: [
      { metric: "Production efficiency", value: "Increased by 45%" },
      { metric: "Operational costs", value: "Reduced by $1.2M annually" },
      { metric: "Inventory accuracy", value: "Improved to 99.8%" },
      { metric: "Manufacturing cycle time", value: "Reduced by 35%" },
    ],
    testimonial: {
      quote:
        "LMNAs transformed our manufacturing operations. We've seen dramatic improvements in efficiency and significant cost savings.",
      author: "Sarah Johnson",
      title: "COO, TechManufacture Inc.",
    },
  },
  {
    id: 2,
    slug: "retail-revenue-growth-lmnas",
    company: "Global Retail Co.",
    logo: "/placeholder.svg?height=80&width=160",
    heroImage: "/placeholder.svg?height=600&width=1200",
    industry: "Retail",
    location: "New York, NY",
    website: "https://example.com",
    challenges: [
      "Disconnected customer data across online and physical stores",
      "Inefficient inventory management leading to stockouts and overstock",
      "Slow order processing impacting customer satisfaction",
      "Limited insights into customer behavior and preferences",
    ],
    solution: {
      description:
        "LMNAs deployed an integrated CRM & CPQ solution with AI-powered tools to unify customer data and optimize the retail experience across all channels.",
      products: ["CRM & CPQ", "AI-Powered Tools"],
      details: [
        "Unified customer data platform across all sales channels",
        "AI-powered demand forecasting and inventory optimization",
        "Automated order processing and fulfillment",
        "Personalized customer recommendations and marketing",
      ],
    },
    results: [
      { metric: "Revenue", value: "Increased by 27% in 6 months" },
      { metric: "Customer satisfaction", value: "Improved by 35%" },
      { metric: "Order processing time", value: "Reduced by 60%" },
      { metric: "Inventory turnover", value: "Increased by 40%" },
    ],
    testimonial: {
      quote:
        "The LMNAs solution has revolutionized how we understand and serve our customers. The revenue growth we've experienced has been remarkable.",
      author: "Michael Chen",
      title: "CEO, Global Retail Co.",
    },
  },
  {
    id: 3,
    slug: "cross-industry-insights-lmnas",
    company: "Omni Solutions Group",
    logo: "/placeholder.svg?height=80&width=160",
    heroImage: "/placeholder.svg?height=600&width=1200",
    industry: "Cross-Industry",
    location: "San Francisco, CA",
    website: "https://example.com",
    challenges: [
      "Siloed data across multiple business units",
      "Slow decision-making due to lack of real-time insights",
      "Inefficient data processing and analysis",
      "Inability to leverage data for strategic planning",
    ],
    solution: {
      description:
        "LMNAs implemented Analytics Cloud with AI-Powered Tools to unify data sources and provide real-time insights across all business units.",
      products: ["Analytics Cloud", "AI-Powered Tools"],
      details: [
        "Unified data platform integrating information from all business units",
        "AI-powered analytics for real-time business intelligence",
        "Automated data processing and visualization",
        "Predictive analytics for strategic decision-making",
      ],
    },
    results: [
      { metric: "Decision-making time", value: "Reduced by 60%" },
      { metric: "Data processing speed", value: "Improved by 85%" },
      { metric: "Revenue growth", value: "18% year-over-year" },
      { metric: "Operational efficiency", value: "Increased by 42%" },
    ],
    testimonial: {
      quote:
        "LMNAs has transformed how we leverage data across our organization. We now make faster, more informed decisions that drive real business results.",
      author: "Jennifer Lee",
      title: "CIO, Omni Solutions Group",
    },
  },
]

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((study) => study.slug === slug)

  if (!caseStudy) {
    notFound()
  }

  // Get related case studies (excluding current one)
  const relatedCaseStudies = caseStudies.filter((study) => study.id !== caseStudy.id)

  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-background pb-20">
      {/* Hero Section - Keeping original design but adding download component */}
      <section className="relative h-[400px] md:h-[500px]">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-primary/40" />

        {/* Download Component - Positioned on the right side */}
        <div className="absolute right-4 top-4 z-20 hidden md:block md:right-8 md:top-8 lg:right-12 lg:top-12">
          <div className="backdrop-blur-md bg-background/10 border border-background/20 rounded-xl p-5 shadow-xl w-64 text-background">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-lg">Full Case Study</h3>
              <div className="bg-background/20 rounded-full p-2">
                <Download className="h-5 w-5" />
              </div>
            </div>
            <p className="text-sm text-background/80 mb-4">
              {"Get all the details, metrics, and implementation steps in our comprehensive PDF."}
            </p>
            <Button className="w-full bg-background hover:bg-background/90 text-primary gap-2">
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
            <p className="mt-2 text-center text-xs text-background/60">No email required</p>
          </div>
        </div>

        <div className="container relative z-10 mx-auto flex h-full flex-col items-start justify-end px-4 pb-12">
          <Link href="/solutions" className="mb-4 flex items-center gap-2 text-background hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Back to Case Studies
          </Link>
          <Badge className="mb-2">{caseStudy.industry}</Badge>
          <h1 className="mb-2 text-4xl font-bold text-background md:text-5xl">{caseStudy.company}</h1>
          <div className="flex flex-wrap items-center gap-4 text-background">
            <div className="flex items-center gap-1">
              <Building className="h-4 w-4" />
              <span className="text-sm">{caseStudy.industry}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{caseStudy.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Globe className="h-4 w-4" />
              <a href={caseStudy.website} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Dynamic Sidebar */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Main Content Column */}
          <div className="lg:col-span-8">
            {/* Problem Section */}
            <ProblemSection idCaseStudy={caseStudy} />

            {/* Solution Section */}
            <SolutionSection idCaseStudy={caseStudy} />
          </div>

          {/* Dynamic Sidebar - Hidden on smaller screens */}
          <div className="hidden lg:block lg:col-span-4">
            <DynamicSidebar idCaseStudy={caseStudy} />
          </div>
        </div>
      </section>

      {/* Related Case Studies Section */}
      <RelatedCaseStudies idCaseStudies={relatedCaseStudies} />

      <section className="bg-primary/5 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Transform Your Business?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            {"Let's discuss how LMNAs Cloud Solutions can help you achieve similar results."}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="px-8">
              Book Your Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Explore Our Solutions
            </Button>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  )
}

