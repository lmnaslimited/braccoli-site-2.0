"use client";
import Callout from "@repo/ui/components/callout";
import CustomCard from "@repo/ui/components/customCard";
import Footer from "@repo/ui/components/footer";
import Header from "@repo/ui/components/header";
import Hero from "@repo/ui/components/hero";
import TitleSubtitle from "@repo/ui/components/titleSubtitle";
import { TcalloutProps, Theader, TheroProps } from "@repo/ui/type";
import {
  ArrowRight,
  BarChart,
  BarChart3,
  Boxes,
  Calendar,
  ClipboardList,
  Clock,
  Factory,
  LayoutGrid,
  Link,
  PhoneCall,
  Play,
  ShoppingCart,
  Truck,
} from "lucide-react";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Tab from "@repo/ui/components/tab";
import { Button } from "@repo/ui/components/ui/button";

export default function Industries() {
  const hero = {
    heading: {
      textWithoutColor: "Revolutionize Your Manufacturing with",
      text: "AI-Powered ERP",
      subtitle:
        "Eliminate inefficiencies, reduce delays, and gain real-time production insights—all with LENS ERP Suite.",
      badge: "LENS ERP Suite",
    },
    items: [
      {
        icon: <Clock className="h-5 w-5 text-primary/80" />,
        item: "30% Less Downtime",
      },
      {
        icon: <BarChart3 className="h-5 w-5 text-primary/80" />,
        item: "Real-time Analytics",
      },
      {
        icon: <ArrowRight className="h-5 w-5 text-primary/80" />,
        item: "Streamlined Workflow",
      },
    ],
    buttons: [
      {
        label: "Ask for Demo",
        href: "https://demolens.lmnas.com/#login",
        variant: "default",
        icon: <ArrowRight className="size-6" />,
        iconPosition: "after",
        size: "lg",
      },
      {
        label: "Book a Free Consultation",
        href: "https://nectar.lmnas.com/book_appointment",
        variant: "outline",
        icon: <Calendar className="size-6" />,
        iconPosition: "after",
        size: "lg",
      },
    ],
  };
  const section2 = {
    header: {
      textWithoutColor: "Are manual processes slowing down",
      text: "your production and increasing costs?",
      subtitle:
        "Manufacturing businesses face unique challenges that outdated systems can't solve. Our ERP solution addresses these pain points directly.",
      className: "lg:sticky lg:top-24 h-fit",
      headingClass: "md:text-5xl leading-tight font-bold",
      descripClass: "mt-6",
    },
    painPoints: [
      {
        icon: "Clock",
        title: "Frequent production delays leading to missed deadlines",
        description:
          "Manual scheduling and production tracking create bottlenecks that cascade into missed delivery dates and unhappy customers.",
      },
      {
        icon: "DollarSign",
        title: "High operational costs due to inefficiencies",
        description:
          "Disconnected systems and manual processes waste valuable resources, driving up labor costs and reducing your profit margins.",
      },
      {
        icon: "FileWarning",
        title: "Manual data entry errors affecting inventory accuracy",
        description:
          "Human errors in data entry lead to inventory discrepancies, causing unexpected stockouts or excess inventory that ties up capital.",
      },
      {
        icon: "BarChart4",
        title: "Poor demand forecasting causing overstocking or stockouts",
        description:
          "Without accurate forecasting tools, you're forced to guess future demand, leading to either excess inventory costs or missed sales opportunities.",
      },
      {
        icon: "Users",
        title: "Siloed departments creating communication breakdowns",
        description:
          "When your teams can't share information efficiently, critical details fall through the cracks, causing costly mistakes and delays.",
      },
      {
        icon: "Settings",
        title: "Inability to adapt quickly to market changes",
        description:
          "Rigid, outdated systems prevent you from pivoting when market conditions change, putting you at a competitive disadvantage.",
      },
    ],
  };
  const calloutData = [
    {
      header: {
        textWithoutColor: "Ready to solve these manufacturing challenges?",
      },
      points: {
        title:
          "Book a free consultation with our manufacturing ERP specialists",
      },
      buttons: [
        {
          label: "Book a Free Consultation Now",
          href: "https://nectar.lmnas.com/book_appointment",
          variant: "outline",
          icon: <Calendar className="size-5" />,
          iconPosition: "before",
          size: "lg",
        },
      ],
    },
  ];

  const section3 = {
    header: {
      textWithoutColor: "LENS ERP Suite: Streamline Your Manufacturing",
      subtitle:
        "Discover how our comprehensive ERP solution can transform your manufacturing operations with these powerful features.",
      className: "text-center items-center",
      headingClass: "md:text-5xl",
      descripClass: "mt-6",
    },
    keyFeature: [
      {
        header: {
          text: "Intelligent Production Planning",
          subtitle:
            "Optimize your production schedules with AI-powered planning tools that adapt to changing demands and resource availability.",
        },
        imageSrc: "/placeholder.svg?height=400&width=600",
        imageAlt: "Production Planning Dashboard",
        imagePosition: "right",
        caseStudy: {
          text: "Manufacturing Giant Reduces Manual Work by 72%",
          subtitle:
            "How a leading manufacturer automated their processes and saved thousands of work hours annually.",
          link: [
            {
              label: "Read Case Study",
              href: "/solutions",
              icon: <ArrowRight className="ml-2 h-4 w-4" />,
              iconPosition: "after",
            },
          ],
        },
      },
      {
        header: {
          text: "Real-Time Inventory Management",
          subtitle:
            "Gain complete visibility into your inventory with real-time tracking, automated reordering, and comprehensive reporting.",
        },
        imageSrc: "/placeholder.svg?height=400&width=600",
        imageAlt: "Inventory Management Interface",
        imagePosition: "left",
        caseStudy: {
          text: "Retail Chain Increases Revenue by $8M",
          subtitle:
            "A national retail chain transformed their operations and saw immediate revenue growth with our inventory solutions.",
          link: [
            {
              label: "Read Case Study",
              href: "/solutions",
              icon: <ArrowRight className="ml-2 h-4 w-4" />,
              iconPosition: "after",
            },
          ],
        },
      },
      {
        header: {
          text: "End-to-End Supply Chain Visibility",
          subtitle:
            "Connect every aspect of your supply chain from raw materials to finished products with comprehensive tracking and analytics.",
        },
        imageSrc: "/placeholder.svg?height=400&width=600",
        imageAlt: "Supply Chain Visualization",
        imagePosition: "right",
        caseStudy: {
          text: "Distribution Company Achieves Full Automation",
          subtitle:
            "How a distribution company automated 95% of their manual processes in just 30 days with our supply chain solutions.",
          link: [
            {
              label: "Read Case Study",
              href: "/solutions",
              icon: <ArrowRight className="ml-2 h-4 w-4" />,
              iconPosition: "after",
            },
          ],
        },
      },
    ] as const,
  };

  const section4 = {
    header: {
      textWithoutColor: "Explore All Features",
      headingClass: "md:text-5xl",
      className: "text-center",
    },
    features: [
      {
        header: {
          text: "Bill of Materials (BOM)",
          subtitle: "Track and manage multi-level BOMs seamlessly.",
        },
        image: {
          svg: <ClipboardList className="h-10 w-10 mx-6 mt-4" />,
          alt: "clipboard",
        },
        category: "production",
        link: [
          {
            label: "Learn More",
            href: "/",
            icon: <ArrowRight className="size-5" />,
            iconPosition: "after",
          },
        ],
      },
      {
        header: {
          text: "Material Resource Planning (MRP)",
          subtitle: "Automate procurement and production schedules.",
        },
        image: {
          svg: <Factory className="h-10 w-10 mx-6 mt-4" />,
          alt: "factory",
        },
        category: "production",
        link: [
          {
            label: "Learn More",
            href: "/",
            icon: <ArrowRight className="size-5" />,
            iconPosition: "after",
          },
        ],
      },
      {
        header: {
          text: "Item Variants",
          subtitle: "Manage product variations efficiently.",
        },
        image: {
          svg: <LayoutGrid className="h-10 w-10 mx-6 mt-4" />,
          alt: "layout-grid",
        },
        category: "inventory",
        link: [
          {
            label: "Learn More",
            href: "/",
            icon: <ArrowRight className="size-5" />,
            iconPosition: "after",
          },
        ],
      },
      {
        header: {
          text: "Production Planning Report",
          subtitle: "Gain real-time insights for better decision-making.",
        },
        image: {
          svg: <BarChart className="h-10 w-10 mx-6 mt-4" />,
          alt: "barchart",
        },
        category: "reports",
        link: [
          {
            label: "Learn More",
            href: "/",
            icon: <ArrowRight className="size-5" />,
            iconPosition: "after",
          },
        ],
      },
      {
        header: {
          text: "Inventory Tracking",
          subtitle: "Real-time visibility into stock levels and movements.",
        },
        image: {
          svg: <Boxes className="h-10 w-10 mx-6 mt-4" />,
          alt: "boxes",
        },
        category: "inventory",
        link: [
          {
            label: "Learn More",
            href: "/",
            icon: <ArrowRight className="size-5" />,
            iconPosition: "after",
          },
        ],
      },
      {
        header: {
          text: "Work Order Management",
          subtitle: "Create, track, and manage production work orders.",
        },
        image: {
          svg: <ClipboardList className="h-10 w-10 mx-6 mt-4" />,
          alt: "clipboard",
        },
        category: "assignments",
        link: [
          {
            label: "Learn More",
            href: "/",
            icon: <ArrowRight className="size-5" />,
            iconPosition: "after",
          },
        ],
      },
      {
        header: {
          text: "Procurement Management",
          subtitle: "Streamline purchasing processes and vendor management.",
        },
        image: {
          svg: <ShoppingCart className="h-10 w-10 mx-6 mt-4" />,
          alt: "shoppingcart",
        },
        category: "assignments",
        link: [
          {
            label: "Learn More",
            href: "/",
            icon: <ArrowRight className="size-5" />,
            iconPosition: "after",
          },
        ],
      },
      {
        header: {
          text: "Logistics Management",
          subtitle:
            "Optimize shipping, receiving, and distribution operations.",
        },
        image: {
          svg: <Truck className="h-10 w-10 mx-6 mt-4" />,
          alt: "truck",
        },
        category: "inventory",
        link: [
          {
            label: "Learn More",
            href: "/",
            icon: <ArrowRight className="size-5" />,
            iconPosition: "after",
          },
        ],
      },
    ],
  };

  const section5 = {
    header: {
      textWithoutColor: "Ready to Transform Your Manufacturing Operations?",
      subtitle:
        "Join hundreds of manufacturing companies that have streamlined their operations, reduced costs, and increased productivity with LENS ERP Suite.",
      className: "text-center items-center",
      headingClass: "lighting-tight mb-4",
      descripClass: "max-w-5xl",
    },
    cards: [
      {
        header: {
          text: "Schedule a Consultation",
          subtitle: "Get personalized advice from our ERP experts.",
        },
        image: {
          svg: <Calendar className="h-10 w-10 text-primary mx-auto mt-6" />,
          alt: "calendar",
        },
      },
      {
        header: {
          text: "Tailored Assessment",
          subtitle: "Receive a custom evaluation of your operations.",
        },
        image: {
          svg: <PhoneCall className="h-10 w-10 text-primary mx-auto mt-6" />,
          alt: "phone",
        },
      },
      {
        header: {
          text: "Live Demo",
          subtitle: "See LENS ERP Suite in action with your data.",
        },
        image: {
          svg: <Play className="h-10 w-10 text-primary mx-auto mt-6" />,
          alt: "demo",
        },
      },
    ],
  };
  const section6 = {
    header: {
      textWithoutColor: "Success Stories",
      subtitle:
        "Explore how businesses across different industries achieved breakthrough results with our solutions.",
      className: "text-center items-center",
      headingClass: "md:text-5xl",
    },
    caseStudies: [
      {
        header: {
          text: "Manufacturing Giant Reduces Manual Work by 72%",
          subtitle:
            "How a leading manufacturer automated their processes and saved thousands of work hours annually.",
          descripClass: "text-sm h-16",
          headingClass: "text-lg mb-2",
        },
        category: "manufacturing",
        image: "/placeholder2.svg",
        alt: "image",
        button: [
          {
            label: "Read Case Study",
            href: "/solutions",
            variant: "outline",
            icon: <ArrowRight className="size-5" />,
            iconPosition: "after",
            size: "lg",
          },
        ],
      },
      {
        header: {
          text: "Retail Chain Increases Revenue by $8M",
          subtitle:
            "A national retail chain transformed their operations and saw immediate revenue growth.",
          descripClass: "text-sm h-16",
          headingClass: "text-lg mb-2",
        },
        category: "retail",
        image: "/placeholder2.svg",
        alt: "image",
        button: [
          {
            label: "Read Case Study",
            href: "/solutions",
            variant: "outline",
            icon: <ArrowRight className="size-5" />,
            iconPosition: "after",
            size: "lg",
          },
        ],
      },
      {
        header: {
          text: "Distribution Company Achieves Full Automation",
          subtitle:
            "How a distribution company automated 95% of their manual processes in just 30 days.",
          descripClass: "text-sm h-16",
          headingClass: "text-lg mb-2",
        },
        category: "distribution",
        image: "/placeholder2.svg",
        alt: "image",
        button: [
          {
            label: "Read Case Study",
            href: "/solutions",
            variant: "outline",
            icon: <ArrowRight className="size-5" />,
            iconPosition: "after",
            size: "lg",
          },
        ],
      },
      {
        header: {
          text: "Cross-Industry Solution Saves $2M Annually",
          subtitle:
            "A versatile solution that worked across departments to eliminate inefficiencies.",
          descripClass: "text-sm h-16",
          headingClass: "text-lg mb-2",
        },
        category: "cross-industry",
        image: "/placeholder2.svg",
        alt: "image",
        button: [
          {
            label: "Read Case Study",
            href: "/solutions",
            variant: "outline",
            icon: <ArrowRight className="size-5" />,
            iconPosition: "after",
            size: "lg",
          },
        ],
      },
      {
        header: {
          text: "Manufacturing Firm Streamlines Operations",
          subtitle:
            "How a manufacturing firm reduced operational costs by 35% through process optimization.",
          descripClass: "text-sm h-16",
          headingClass: "text-lg mb-2",
        },
        category: "manufacturing",
        image: "/placeholder2.svg",
        alt: "image",
        button: [
          {
            label: "Read Case Study",
            href: "/solutions",
            variant: "outline",
            icon: <ArrowRight className="size-5" />,
            iconPosition: "after",
            size: "lg",
          },
        ],
      },
      {
        header: {
          text: "Retail Business Enhances Customer Experience",
          subtitle:
            "A retail business that transformed their customer journey and increased repeat purchases.",
          descripClass: "text-sm h-16",
          headingClass: "text-lg mb-2",
        },
        category: "retail",
        image: "/placeholder2.svg",
        alt: "image",
        button: [
          {
            label: "Read Case Study",
            href: "/solutions",
            variant: "outline",
            icon: <ArrowRight className="size-5" />,
            iconPosition: "after",
            size: "lg",
          },
        ],
      },
      {
        header: {
          text: "Distribution Network Optimization",
          subtitle:
            "How a distribution company reduced delivery times by 40% through network optimization.",
          descripClass: "text-sm h-16",
          headingClass: "text-lg mb-2",
        },
        category: "distribution",
        image: "/placeholder2.svg",
        alt: "image",
        button: [
          {
            label: "Read Case Study",
            href: "/solutions",
            variant: "outline",
            icon: <ArrowRight className="size-5" />,
            iconPosition: "after",
            size: "lg",
          },
        ],
      },
      {
        header: {
          text: "Cross-Department Efficiency Boost",
          subtitle:
            "A solution that bridged gaps between departments and created a unified workflow.",
          descripClass: "text-sm h-16",
          headingClass: "text-lg mb-2",
        },
        category: "cross-industry",
        image: "/placeholder2.svg",
        alt: "image",
        button: [
          {
            label: "Read Case Study",
            href: "/solutions",
            variant: "outline",
            icon: <ArrowRight className="size-5" />,
            iconPosition: "after",
            size: "lg",
          },
        ],
      },
    ],
    footer: {
      label: "Find Your Breakthrough ",
      href: "/",
      icon: (
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      ),
    },
  };

  const painPointsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-4");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const painPoints = document.querySelectorAll(".pain-point");
    painPoints.forEach((point) => {
      observer.observe(point);
    });

    return () => {
      painPoints.forEach((point) => {
        observer.unobserve(point);
      });
    };
  }, []);

  return (
    <>
      <Header />
      <Hero iHero={hero as TheroProps} />
      {/* 2 */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <TitleSubtitle iTitle={section2.header as Theader} />
          <div ref={painPointsRef} className="space-y-12">
            {section2.painPoints.map((point, index) => {
              const Icon = require("lucide-react")[point.icon];
              return (
                <div
                  key={index}
                  className="pain-point opacity-0 translate-y-4 transition-all duration-500 ease-out border-b border-gray-200 pb-8"
                >
                  <div className="flex items-start gap-6">
                    <div className="bg-muted p-3 rounded-full">
                      <Icon className="h-6 w-6 text-primary/70" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary">
                        {point.title}
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <div className="bg-primary">
        <Callout iCallout={calloutData[0] as TcalloutProps} />
      </div>

      {/* 3 */}
      <section className="container mx-auto px-4 md:px-6 py-16">
        <TitleSubtitle iTitle={section3.header as Theader} />
        <div className="space-y-24 mb-24">
          {section3.keyFeature.map((section, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              {section.imagePosition === "left" && (
                <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={section.imageSrc}
                    alt={section.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div className="space-y-6">
                <TitleSubtitle iTitle={section.header} />
                <CustomCard
                  header={{
                    text: section.caseStudy.text,
                    subtitle: section.caseStudy.subtitle,
                  }}
                  link={[...section.caseStudy.link]}
                  className="bg-primary/5"
                />
              </div>

              {section.imagePosition === "right" && (
                <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={section.imageSrc}
                    alt={section.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 4 */}
      <section className="mb-24 container mx-auto px-4 md:px-6">
        <TitleSubtitle iTitle={section4.header as Theader} />
        <Tab
          data={section4.features}
          renderItem={(study, index) => (
            <CustomCard
              key={index}
              header={{
                text: study.header.text,
                subtitle: study.header.subtitle,
                headingClass: "text-xl font-semibold mb-2",
              }}
              className="max-w-sm"
              image={{
                svg: study.image.svg,
                alt: study.image.alt,
              }}
              link={[...study.link]}
            />
          )}
        />
      </section>

      {/* 5 */}
      <section className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <TitleSubtitle iTitle={section5.header as Theader} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
            {section5.cards.map((card, index) => (
              <CustomCard
                key={index}
                header={{
                  text: card.header.text,
                  subtitle: card.header.subtitle,
                  headingClass: "mb-2 text-md",
                  descripClass: "text-sm mb-4",
                }}
                image={{
                  svg: card.image.svg,
                  alt: card.image.alt,
                }}
              />
            ))}
          </div>
          <div className="pt-6">
            <Button size="lg" className="text-lg px-8 py-6">
              Book Your Free Consultation
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              No commitment required. Our experts are ready to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* 6 */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <TitleSubtitle iTitle={section6.header as Theader} />
          <Tab
            data={section6.caseStudies}
            renderItem={(study, index) => (
              <CustomCard
                key={index}
                header={study.header}
                className=""
                image={{
                  src: study.image,
                  alt: study.alt,
                  aspectRatio: "wide",
                }}
                button={[...study.button]}
                tag={study.category}
              />
            )}
          />
          <div className="mt-12 text-center">
            <div className="space-y-4">
              <h3 className="text-xl font-medium">
                Could This Be Your Business Story Too?
              </h3>
              <Button size="lg" className="group">
                Book Your Free Consultation
                <Calendar className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
