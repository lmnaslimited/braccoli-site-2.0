import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@repo/ui/components/ui/badge";
import { ProblemSection } from "@repo/ui/components/problemSection";
import { SolutionSection } from "@repo/ui/components/solutionSection";
import { DynamicSidebar } from "@repo/ui/components/dynamicSidebar";
import Navbar from "@repo/ui/components/navbar";
import Footer from "@repo/ui/components/footer";
import CustomCard from "@repo/ui/components/customCard";
import * as Icons from "lucide-react";
// import Callout from "@repo/ui/components/callout";
import { ArrowLeft, ArrowRight, Download, LucideIcon } from "lucide-react";
import Tab from "@repo/ui/components/tab";
import { Button } from "@repo/ui/components/ui/button";

// Sample case study data - in a real app, this would come from a database or API
const caseStudies = [
  {
    id: 1,
    slug: "manufacturing-efficiency-lmnas",
    title: "TechManufacture Inc.",
    hero: {
      card: {
        header: {
          text: "Full Case Study",
          subtitle:
            "Get all the details, metrics, and implementation steps in our comprehensive PDF.",
        },
        button: {
          label: "Download PDF",
          href: "#",
        },
      },
      link: {
        label: "Back to Case Studies",
        href: "/solutions",
      },
      badge: "Manufacturing",
      industry: [
        {
          icon: "Building",
          label: "Manufacturing",
        },
        {
          icon: "MapPin",
          label: "Chicago, IL",
        },
        {
          icon: "Globe",
          label: "Globally",
        },
      ],
    },
    footer: {
      header: {
        textWithoutColor: "Ready to Transform Your Business?",
      },
      points: {
        title:
          "Let's discuss how LMNAs Cloud Solutions can help you achieve similar results.",
      },
      buttons: [
        {
          label: "Book Your Free Consultation",
          href: "https://nectar.lmnas.com/book_appointment",
          variant: "default",
          size: "lg",
        },
        {
          label: "Explore Our Solutions",
          href: "/solutions",
          variant: "outline",
          size: "lg",
        },
      ],
    },
    problem: {
      header: {
        textWithoutColor:
          " How TechManufacture Inc. eliminated production bottlenecks with AI-powered predictive maintenance.",
        subtitle:
          "Before partnering with LMNAs, TechManufacture Inc. faced several critical challenges that were impacting their business growth and operational efficiency.",
      },
      button: {
        label: " Download Case Study PDF",
      },
      challenges: [
        "Legacy systems causing production delays and inefficiencies",
        "Lack of real-time visibility into manufacturing processes",
        "High operational costs due to manual inventory management",
        "Difficulty scaling production to meet growing demand",
      ],
      footer: {
        title: "Click to learn how we solved this challenge",
        header: {
          textWithoutColor: "The Bottom Line",
          subtitle:
            "These challenges were costing TechManufacture Inc. an estimated $2.5M annually</span> in lost revenue and operational inefficiencies.",
        },
      },
    },
    solution: {
      header: {
        textWithoutColor: "The Breakthrough Moment: How We Transformed TechManufacture Inc.",
        subtitle: "LMNAs implemented a comprehensive LENS ERP solution integrated with Analytics Cloud to provide real-time insights and automation across the manufacturing process."
      },
      products: ["LENS ERP", "Analytics Cloud"],
      details: [
        "Automated production scheduling and resource allocation",
        "Real-time monitoring of manufacturing processes and equipment",
        "Predictive maintenance to prevent costly downtime",
        "Integrated inventory management with automated reordering",
      ],
      title: "The Results",
      results: [
        { textWithoutColor: "Production efficiency", subtitle: "Increased by 45%" },
        { textWithoutColor: "Operational costs", subtitle: "Reduced by $1.2M annually" },
        { textWithoutColor: "Inventory accuracy", subtitle: "Improved to 99.8%" },
        { textWithoutColor: "Manufacturing cycle time", subtitle: "Reduced by 35%" },
      ],
      testimonial: {
        quote:
          "LMNAs transformed our manufacturing operations. We've seen dramatic improvements in efficiency and significant cost savings.",
        author: "Sarah Johnson",
        title: "COO, TechManufacture Inc.",
        verify: "Verified Client"
      },
      footer: {
        title: "Share this case study",
        handles: [
          {
            label: "Share on LinkedIn",
            icon: "LinkedIn"
          },
          {
            label: "Share on Twitter",
            icon: "TwitterIcon"
          },
          {
            label: "Share via Email",
            icon: "Mail"
          }
        ],
        button: {
          label: " Download Case Study PDF"
        }
      }
    },
    RelatedCaseStudies: [
      {
        header: {
          text: "Omni Solutions Group",
          subtitle: "Decision-making time : Reduced by 60%",
        },
        category: "Cross Industry",
        link: [
          {
            label: "Learn More",
            href: "/solutions",
          },
        ],
      },
      {
        header: {
          text: "Global Retail Co.",
          subtitle: "Revenue : Increased by 27% in 6 months",
        },
        category: "Retail",
        link: [
          {
            label: "Learn More",
            href: "/solutions",
          },
        ],
      },
    ],
    sidebarData: [
      {
        title: "Ready to Transform Your Business?",
        content: "Let's discuss how LMNAs can help you achieve similar results for your organization.",
        button: {
          label: "Book a Free Consultation",
          link: "https://nectar.lmnas.com/book_appointment"
        }
      },
      {
        title: "Solutions Used",
        content: "A list of solutions used in this case study.",
        solutions: ["LENS ERP", "Analytics Cloud"],
        solutionsDescription: [
          "Core solution for business operations",
          "Enhanced analytics and insights"
        ],
        link: {
          label: "Learn more about our solutions",
          href: "/solutions"
        }
      },
      {
        title: "Get the Full Story",
        content: "Download the complete case study with detailed analysis and implementation steps.",
        button: {
          label: "Download Case Study",
          icon: "Download"
        }
      }
    ]
  },
  {
    id: 2,
    slug: "retail-revenue-growth-lmnas",
    title: "Global Retail Co.",
    hero: {
      card: {
        header: {
          text: "Full Case Study",
          subtitle:
            "Get all the details, metrics, and implementation steps in our comprehensive PDF.",
        },
        button: {
          label: "Download PDF",
          href: "#",
        },
      },
      link: {
        label: "Back to Case Studies",
        href: "/solutions",
      },
      badge: "Retail",
      industry: [
        {
          icon: "Building",
          label: "Retail",
        },
        {
          icon: "MapPin",
          label: "New York, NY",
        },
        {
          icon: "Globe",
          label: "Globally",
        },
      ],
    },
    footer: {
      header: {
        textWithoutColor: "Ready to Transform Your Business?",
      },
      points: {
        title:
          "Let's discuss how LMNAs Cloud Solutions can help you achieve similar results.",
      },
      buttons: [
        {
          label: "Book Your Free Consultation",
          href: "https://nectar.lmnas.com/book_appointment",
          variant: "default",
          size: "lg",
        },
        {
          label: "Explore Our Solutions",
          href: "/solutions",
          variant: "outline",
          size: "lg",
        },
      ],
    },
    problem: {
      header: {
        textWithoutColor:
          " How Global Retail Co. eliminated production bottlenecks with AI-powered predictive maintenance.",
        subtitle:
          "Before partnering with LMNAs, Global Retail Co. faced several critical challenges that were impacting their business growth and operational efficiency.",
      },
      button: {
        label: " Download Case Study PDF",
      },
      challenges: [
        "Disconnected customer data across online and physical stores",
        "Inefficient inventory management leading to stockouts and overstock",
        "Slow order processing impacting customer satisfaction",
        "Limited insights into customer behavior and preferences",
      ],
      footer: {
        title: "Click to learn how we solved this challenge",
        header: {
          textWithoutColor: "The Bottom Line",
          subtitle:
            "These challenges were costing Global Retail Co. an estimated $2.5M annually</span> in lost revenue and operational inefficiencies.",
        },
      },
    },
    solution: {
      header: {
        textWithoutColor: "The Breakthrough Moment: How We Transformed Global Retail Co.",
        subtitle: "LMNAs deployed an integrated CRM & CPQ solution with AI-powered tools to unify customer data and optimize the retail experience across all channels."
      },
      products: ["CRM & CPQ", "AI-Powered Tools"],
      details: [
        "Unified customer data platform across all sales channels",
        "AI-powered demand forecasting and inventory optimization",
        "Automated order processing and fulfillment",
        "Personalized customer recommendations and marketing",
      ],
      title: "The Results",
      results: [
        { textWithoutColor: "Revenue", subtitle: "Increased by 27% in 6 months" },
        { textWithoutColor: "Customer satisfaction", subtitle: "Improved by 35%" },
        { textWithoutColor: "Order processing time", subtitle: "Reduced by 60%" },
        { textWithoutColor: "Inventory turnover", subtitle: "Increased by 40%" },
      ],
      testimonial: {
        quote:
          "The LMNAs solution has revolutionized how we understand and serve our customers. The revenue growth we've experienced has been remarkable.",
        author: "Michael Chen",
        title: "CEO, Global Retail Co.",
        verify: "Verified Client"
      },
      footer: {
        title: "Share this case study",
        handles: [
          {
            label: "Share on LinkedIn",
            icon: "LinkedIn"
          },
          {
            label: "Share on Twitter",
            icon: "TwitterIcon"
          },
          {
            label: "Share via Email",
            icon: "Mail"
          }
        ],
        button: {
          label: " Download Case Study PDF"
        }
      }
    },
    RelatedCaseStudies: [
      {
        header: {
          text: "COO, TechManufacture Inc.",
          subtitle: "Production efficiency : Increased by 45%",
        },
        category: "Manufacturing",
        link: [
          {
            label: "Learn More",
            href: "/solutions",
          },
        ],
      },
      {
        header: {
          text: "Omni Solutions Group",
          subtitle: "Decision-making time : Reduced by 60%",
        },
        category: "Cross Industry",
        link: [
          {
            label: "Learn More",
            href: "/solutions",
          },
        ],
      },
    ],
    sidebarData: [
      {
        title: "Ready to Transform Your Business?",
        content: "Let's discuss how LMNAs can help you achieve similar results for your organization.",
        button: {
          label: "Book a Free Consultation",
          link: "https://nectar.lmnas.com/book_appointment"
        }
      },
      {
        title: "Solutions Used",
        content: "A list of solutions used in this case study.",
        solutions: ["CRM & CPQ", "AI-Powered Tools"],
        solutionsDescription: [
          "Core solution for business operations",
          "Enhanced analytics and insights"
        ],
        link: {
          label: "Learn more about our solutions",
          href: "/solutions"
        }
      },
      {
        title: "Get the Full Story",
        content: "Download the complete case study with detailed analysis and implementation steps.",
        button: {
          label: "Download Case Study",
          icon: "Download"
        }
      }
    ]
  },
  {
    id: 3,
    slug: "cross-industry-insights-lmnas",
    title: "Omni Solutions Group",
    hero: {
      card: {
        header: {
          text: "Full Case Study",
          subtitle:
            "Get all the details, metrics, and implementation steps in our comprehensive PDF.",
        },
        button: {
          label: "Download PDF",
          href: "#",
        },
      },
      link: {
        label: "Back to Case Studies",
        href: "/solutions",
      },
      badge: "Cross-Industry",
      industry: [
        {
          icon: "Building",
          label: "Cross-Industry",
        },
        {
          icon: "MapPin",
          label: "San Francisco, CA",
        },
        {
          icon: "Globe",
          label: "Globally",
        },
      ],
    },
    footer: {
      header: {
        textWithoutColor: "Ready to Transform Your Business?",
      },
      points: {
        title:
          "Let's discuss how LMNAs Cloud Solutions can help you achieve similar results.",
      },
      buttons: [
        {
          label: "Book Your Free Consultation",
          href: "https://nectar.lmnas.com/book_appointment",
          variant: "default",
          size: "lg",
        },
        {
          label: "Explore Our Solutions",
          href: "/solutions",
          variant: "outline",
          size: "lg",
        },
      ],
    },
    problem: {
      header: {
        textWithoutColor:
          " How Omni Solutions Group eliminated production bottlenecks with AI-powered predictive maintenance.",
        subtitle:
          "Before partnering with LMNAs, Omni Solutions Group faced several critical challenges that were impacting their business growth and operational efficiency.",
      },
      button: {
        label: " Download Case Study PDF",
      },
      challenges: [
        "Siloed data across multiple business units",
        "Slow decision-making due to lack of real-time insights",
        "Inefficient data processing and analysis",
        "Inability to leverage data for strategic planning",
      ],
      footer: {
        title: "Click to learn how we solved this challenge",
        header: {
          textWithoutColor: "The Bottom Line",
          subtitle:
            "These challenges were costing Omni Solutions Group an estimated $2.5M annually</span> in lost revenue and operational inefficiencies.",
        },
      },
    },
    solution: {
      header: {
        textWithoutColor: "The Breakthrough Moment: How We Transformed Omni Solutions Group",
        subtitle: "LMNAs implemented Analytics Cloud with AI-Powered Tools to unify data sources and provide real-time insights across all business units.",
      },
      products: ["Analytics Cloud", "AI-Powered Tools"],
      details: [
        "Unified data platform integrating information from all business units",
        "AI-powered analytics for real-time business intelligence",
        "Automated data processing and visualization",
        "Predictive analytics for strategic decision-making",
      ],
      title: "The Results",
      results: [
        { textWithoutColor: "Decision-making time", subtitle: "Reduced by 60%" },
        { textWithoutColor: "Data processing speed", subtitle: "Improved by 85%" },
        { textWithoutColor: "Revenue growth", subtitle: "18% year-over-year" },
        { textWithoutColor: "Operational efficiency", subtitle: "Increased by 42%" },
      ],
      testimonial: {
        quote:
          "LMNAs has transformed how we leverage data across our organization. We now make faster, more informed decisions that drive real business results.",
        author: "Jennifer Lee",
        title: "CIO, Omni Solutions Group",
        verify: "Verified Client"
      },
      footer: {
        title: "Share this case study",
        handles: [
          {
            label: "Share on LinkedIn",
            icon: "LinkedIn"
          },
          {
            label: "Share on Twitter",
            icon: "TwitterIcon"
          },
          {
            label: "Share via Email",
            icon: "Mail"
          }
        ],
        button: {
          label: " Download Case Study PDF"
        }
      }
    },
    RelatedCaseStudies: [
      {
        header: {
          text: "COO, TechManufacture Inc.",
          subtitle: "Production efficiency : Increased by 45%",
        },
        category: "Manufacturing",
        link: [
          {
            label: "Learn More",
            href: "/solutions",
          },
        ],
      },
      {
        header: {
          text: "Global Retail Co.",
          subtitle: "Revenue : Increased by 27% in 6 months",
        },
        category: "Retail",
        link: [
          {
            label: "Learn More",
            href: "/solutions",
          },
        ],
      },
    ],
    sidebarData: [
      {
        title: "Ready to Transform Your Business?",
        content: "Let's discuss how LMNAs can help you achieve similar results for your organization.",
        button: {
          label: "Book a Free Consultation",
          link: "https://nectar.lmnas.com/book_appointment"
        }
      },
      {
        title: "Solutions Used",
        content: "A list of solutions used in this case study.",
        solutions: ["Analytics Cloud", "AI-Powered Tools"],
        solutionsDescription: [
          "Core solution for business operations",
          "Enhanced analytics and insights"
        ],
        link: {
          label: "Learn more about our solutions",
          href: "/solutions"
        }
      },
      {
        title: "Get the Full Story",
        content: "Download the complete case study with detailed analysis and implementation steps.",
        button: {
          label: "Download Case Study",
          icon: "Download"
        }
      }
    ]
  }
];

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((study) => study.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pb-20">
        <section className="relative h-[400px] md:h-[500px]">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-primary/40" />
          {/* Download Component - Positioned on the right side */}
          <CustomCard
            idCardProps={{
              header: {
                ...caseStudy.hero.card.header,
                headingClass: "text-lg mb-2 text-background",
                descripClass: "text-sm text-background/80",
              },
              className:
                "absolute right-4 top-4 z-20 hidden md:block md:right-8 md:top-8 lg:right-12 lg:top-12 w-64 backdrop-blur-md bg-background/10 border border-background/20",
              button: [
                {
                  ...caseStudy.hero.card.button,
                  icon: <Download className="h-4 w-4" />,
                  iconPosition: "before",
                  variant: "outline",
                  size: "lg",
                },
              ],
            }}
          />
          <div className="container relative z-10 mx-auto flex h-full flex-col items-start justify-end px-4 pb-12">
            <Link
              href={caseStudy.hero.link.href}
              className="mb-4 flex items-center gap-2 text-background hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              {caseStudy.hero.link.label}
            </Link>
            <Badge className="mb-2">{caseStudy.hero.badge}</Badge>
            <h1 className="mb-2 text-4xl font-bold text-background md:text-5xl">
              {caseStudy.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-background">
              {caseStudy.hero.industry.map((idItem, iIndex) => {
                const IconComponent =
                  (Icons[idItem.icon as keyof typeof Icons] as LucideIcon) ||
                  Icons.Users;
                return (
                  <div className="flex items-center gap-1" key={iIndex}>
                    <IconComponent className="h-4 w-4" />
                    <span className="text-sm">{idItem.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Main Content with Dynamic Sidebar */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Main Content Column */}
            <div className="lg:col-span-8">
              {/* Problem Section */}
              <ProblemSection idCaseStudy={caseStudy.problem} />

              {/* Solution Section */}
              <SolutionSection idCaseStudy={caseStudy.solution} />
            </div>

            {/* Dynamic Sidebar - Hidden on smaller screens */}
            <div className="hidden lg:block lg:col-span-4">
              <DynamicSidebar idCaseStudy={caseStudy.sidebarData} />
            </div>
          </div>
        </section>

        {/* Related Case Studies Section */}
        {/* <RelatedCaseStudies idCaseStudies={relatedCaseStudies} /> */}
        <section className="border-t bg-muted/30 py-20">
        <div className=" flex flex-col items-center justify-between gap-6 sm:flex-row container mx-auto">
        <h2 className="text-3xl font-bold">Explore More Case Studies</h2>
        </div>
        <Tab
          idTab={{
            data:
              caseStudy.RelatedCaseStudies.map((idCard) => ({
                ...idCard,
                header: {
                  ...idCard.header,
                  headingClass: "text-xl font-semibold mb-2",
                  descripClass:"text-base"
                },
                tag:idCard.category,
                // className: "max-w-sm",
                link:
                  idCard.link?.map((iaButton) => ({
                    ...iaButton,
                    icon: <ArrowRight className="size-5" />,
                    iconPosition: "after",
                    size:"lg"
                  })) ?? [],
              })) ?? [],
            TabDefault: {
              text: "All Industry",
              label: "View All Solution",
            },
          }}
        />
        <div className="text-center">
       <Link href={caseStudy.hero.link.href}> <Button size={"lg"}>
       {caseStudy.hero.link.label}
       <ArrowRight className="h-4 w-4" />
        </Button></Link>
        </div>
        </section>
        <section className="bg-dark/70 py-12">
          <div className="container mx-auto px-4 text-center">
            {/* <Callout idCallout={caseStudy.footer as TcalloutProps} /> */}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
