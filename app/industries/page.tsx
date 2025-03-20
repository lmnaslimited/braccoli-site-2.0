"use client";
import Callout from "@repo/ui/components/callout";
import CustomCard from "@repo/ui/components/customCard";
import Footer from "@repo/ui/components/footer";
import Header from "@repo/ui/components/header";
import Hero from "@repo/ui/components/hero";
import TitleSubtitle from "@repo/ui/components/titleSubtitle";
import { Tbutton, TcalloutProps, TheroProps } from "@repo/ui/type";
import {
  ArrowRight,
  BarChart,
  BarChart3,
  BarChart4,
  Boxes,
  Calendar,
  ClipboardList,
  Clock,
  DollarSign,
  Factory,
  FileWarning,
  LayoutGrid,
  PhoneCall,
  Play,
  Settings,
  ShoppingCart,
  Truck,
  Users,
} from "lucide-react";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Tab from "@repo/ui/components/tab";
import { Button } from "@repo/ui/components/ui/button";
import Link from "next/link";

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
    image: {
      src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
      alt: "hero-image",
    },
  };
  const section2 = {
    header: {
      textWithoutColor: "Are manual processes slowing down",
      text: "your production and increasing costs?",
      subtitle:
        "Manufacturing businesses face unique challenges that outdated systems can't solve. Our ERP solution addresses these pain points directly.",
    },
    items: [
      {
        icon: <Clock className="h-6 w-6 text-primary/70" />,
        question: "Frequent production delays leading to missed deadlines",
        answer:
          "Manual scheduling and production tracking create bottlenecks that cascade into missed delivery dates and unhappy customers.",
      },
      {
        icon: <DollarSign className="h-6 w-6 text-primary/70" />,
        question: "High operational costs due to inefficiencies",
        answer:
          "Disconnected systems and manual processes waste valuable resources, driving up labor costs and reducing your profit margins.",
      },
      {
        icon: <FileWarning className="h-6 w-6 text-primary/70" />,
        question: "Manual data entry errors affecting inventory accuracy",
        answer:
          "Human errors in data entry lead to inventory discrepancies, causing unexpected stockouts or excess inventory that ties up capital.",
      },
      {
        icon: <BarChart4 className="h-6 w-6 text-primary/70" />,
        question: "Poor demand forecasting causing overstocking or stockouts",
        answer:
          "Without accurate forecasting tools, you're forced to guess future demand, leading to either excess inventory costs or missed sales opportunities.",
      },
      {
        icon: <Users className="h-6 w-6 text-primary/70" />,
        question: "Siloed departments creating communication breakdowns",
        answer:
          "When your teams can't share information efficiently, critical details fall through the cracks, causing costly mistakes and delays.",
      },
      {
        icon: <Settings className="h-6 w-6 text-primary/70" />,
        question: "Inability to adapt quickly to market changes",
        answer:
          "Rigid, outdated systems prevent you from pivoting when market conditions change, putting you at a competitive disadvantage.",
      },
    ],
    footer: {
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
  };

  const section3 = {
    header: {
      textWithoutColor: "LENS ERP Suite: Streamline Your Manufacturing",
      subtitle:
        "Discover how our comprehensive ERP solution can transform your manufacturing operations with these powerful features.",
    },
    feature: [
      {
        header: {
          text: "Intelligent Production Planning",
          subtitle:
            "Optimize your production schedules with AI-powered planning tools that adapt to changing demands and resource availability.",
        },
        image: {
          src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
          alt: "Production Planning Dashboard",
          position: "right",
        },
        card: {
          header: {
            text: "Manufacturing Giant Reduces Manual Work by 72%",
            subtitle:
              "How a leading manufacturer automated their processes and saved thousands of work hours annually.",
          },
          buttons: [
            {
              label: "Read Case Study",
              href: "/solutions",
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
        image: {
          src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
          alt: "Inventory Management Interface",
          position: "left",
        },
        card: {
          header: {
            text: "Retail Chain Increases Revenue by $8M",
            subtitle:
              "A national retail chain transformed their operations and saw immediate revenue growth with our inventory solutions.",
          },
          buttons: [
            {
              label: "Read Case Study",
              href: "/solutions",
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
        image: {
          src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
          alt: "Supply Chain Visualization",
          position: "right",
        },
        card: {
          header: {
            text: "Distribution Company Achieves Full Automation",
            subtitle:
              "How a distribution company automated 95% of their manual processes in just 30 days with our supply chain solutions.",
          },
          buttons: [
            {
              label: "Read Case Study",
              href: "/solutions",
            },
          ],
        },
      },
    ],
  };

  const section4 = {
    header: {
      textWithoutColor: "Explore All Features",
    },
    cards: [
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
        buttons: [
          {
            label: "Learn More",
            href: "/",
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
        buttons: [
          {
            label: "Learn More",
            href: "/",
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
        buttons: [
          {
            label: "Learn More",
            href: "/",
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
        buttons: [
          {
            label: "Learn More",
            href: "/",
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
        buttons: [
          {
            label: "Learn More",
            href: "/",
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
        buttons: [
          {
            label: "Learn More",
            href: "/",
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
        buttons: [
          {
            label: "Learn More",
            href: "/",
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
        buttons: [
          {
            label: "Learn More",
            href: "/",
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
    footer: {
      title:
        "No commitment required. Our experts are ready to help you succeed.",
      button: { label: "Book Your Free Consultation", href:"https://nectar.lmnas.com/book_appointment" },
    },
  };
  const section6 = {
    header: {
      textWithoutColor: "Success Stories",
      subtitle:
        "Explore how businesses across different industries achieved breakthrough results with our solutions.",
    },
    cards: [
      {
        header: {
          text: "Manufacturing Giant Reduces Manual Work by 72%",
          subtitle:
            "How a leading manufacturer automated their processes and saved thousands of work hours annually.",
        },
        category: "manufacturing",
        image: {
          src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
          alt: "image",
        },
        buttons: [
          {
            label: "Read Case Study",
            href: "/solutions",
          },
        ],
      },
      {
        header: {
          text: "Retail Chain Increases Revenue by $8M",
          subtitle:
            "A national retail chain transformed their operations and saw immediate revenue growth.",
        },
        category: "retail",
        image: {
          src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
          alt: "image",
        },
        buttons: [
          {
            label: "Read Case Study",
            href: "/solutions",
          },
        ],
      },
      {
        header: {
          text: "Distribution Company Achieves Full Automation",
          subtitle:
            "How a distribution company automated 95% of their manual processes in just 30 days.",
        },
        category: "distribution",
        image: {
          src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
          alt: "image",
        },
        buttons: [
          {
            label: "Read Case Study",
            href: "/solutions",
          },
        ],
      },
      {
        header: {
          text: "Cross-Industry Solution Saves $2M Annually",
          subtitle:
            "A versatile solution that worked across departments to eliminate inefficiencies.",
        },
        category: "cross-industry",
        image: {
          src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
          alt: "image",
        },
        buttons: [
          {
            label: "Read Case Study",
            href: "/solutions",
          },
        ],
      },
      {
        header: {
          text: "Manufacturing Firm Streamlines Operations",
          subtitle:
            "How a manufacturing firm reduced operational costs by 35% through process optimization.",
        },
        category: "manufacturing",
        image: {
          src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
          alt: "image",
        },
        buttons: [
          {
            label: "Read Case Study",
            href: "/solutions",
          },
        ],
      },
      {
        header: {
          text: "Retail Business Enhances Customer Experience",
          subtitle:
            "A retail business that transformed their customer journey and increased repeat purchases.",
        },
        category: "retail",
        image: {
          src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
          alt: "image",
        },
        buttons: [
          {
            label: "Read Case Study",
            href: "/solutions",
          },
        ],
      },
      {
        header: {
          text: "Distribution Network Optimization",
          subtitle:
            "How a distribution company reduced delivery times by 40% through network optimization.",
        },
        category: "distribution",
        image: {
          src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
          alt: "image",
        },
        buttons: [
          {
            label: "Read Case Study",
            href: "/solutions",
          },
        ],
      },
      {
        header: {
          text: "Cross-Department Efficiency Boost",
          subtitle:
            "A solution that bridged gaps between departments and created a unified workflow.",
        },
        category: "cross-industry",
        image: {
          src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
          alt: "image",
        },
        buttons: [
          {
            label: "Read Case Study",
            href: "/solutions",
          },
        ],
      },
    ],
    footer: {
      title: "Could This Be Your Business Story Too?",
      button: { label: " Book Your Free Consultation", href:"https://nectar.lmnas.com/book_appointment" },
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
          <TitleSubtitle
            iTitle={{
              ...section2.header,
              className: "lg:sticky lg:top-24 h-fit",
              headingClass: "md:text-5xl leading-tight font-bold",
              descripClass: "mt-6",
            }}
          />
          <div ref={painPointsRef} className="space-y-12">
            {section2.items.map((point, index) => {
              return (
                <div
                  key={index}
                  className="pain-point opacity-0 translate-y-4 transition-all duration-500 ease-out border-b border-gray-200 pb-8"
                >
                  <div className="flex items-start gap-6">
                    <div className="bg-muted p-3 rounded-full">
                      {point.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary">
                        {point.question}
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        {point.answer}
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
        <Callout iCallout={section2.footer as TcalloutProps} />
      </div>

      {/* 3 */}
      <section className="container mx-auto px-4 md:px-6 py-16">
        <TitleSubtitle
          iTitle={{
            ...section3.header,
            className: "text-center items-center",
            headingClass: "md:text-5xl",
            descripClass: "mt-6",
          }}
        />
        <div className="space-y-24 mb-24">
          {section3.feature.map((section, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              {section.image.position === "left" && (
                <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={section.image.src}
                    alt={section.image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div className="space-y-6">
                <TitleSubtitle iTitle={section.header} />
                <CustomCard
                  header={section.card.header}
                  link={
                    section.card.buttons.map((button) => ({
                      ...button,
                      icon: <ArrowRight className="ml-2 h-4 w-4" />,
                      iconPosition: "after",
                    })) as Tbutton[]
                  }
                  className="bg-primary/5"
                />
              </div>

              {section.image.position === "right" && (
                <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={section.image.src}
                    alt={section.image.alt}
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
        <TitleSubtitle
          iTitle={{
            ...section4.header,
            headingClass: "md:text-5xl",
            className: "text-center",
          }}
        />
        <Tab
          data={section4.cards}
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
              link={study.buttons.map((button: Tbutton) => ({
                ...button,
                icon: <ArrowRight className="size-5" />,
                iconPosition: "after",
              }))}
            />
          )}
        />
      </section>

      {/* 5 */}
      <section className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <TitleSubtitle
            iTitle={{
              ...section5.header,
              className: "text-center items-center",
              headingClass: "lighting-tight mb-4",
              descripClass: "max-w-5xl",
            }}
          />
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
              <Link href={section5.footer.button.href}>{section5.footer.button.label}</Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              {section5.footer.title}
            </p>
          </div>
        </div>
      </section>

      {/* 6 */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <TitleSubtitle
            iTitle={{
              ...section6.header,
              className: "text-center items-center",
              headingClass: "md:text-5xl",
            }}
          />
          <Tab
            data={section6.cards}
            renderItem={(study, index) => (
              <CustomCard
                key={index}
                header={{
                  ...study.header,
                  descripClass: "text-sm h-16",
                  headingClass: "text-lg mb-2",
                }}
                className=""
                image={{
                  src: study.image.src,
                  alt: study.image.alt,
                  aspectRatio: "wide",
                }}
                button={study.buttons.map((button: Tbutton) => ({
                  ...button,
                  icon: <ArrowRight className="size-5" />,
                  iconPosition: "after",
                  size: "lg",
                  variant: "outline",
                }))}
                tag={study.category}
              />
            )}
          />
          <div className="mt-12 text-center">
            <div className="space-y-4">
              <h3 className="text-xl font-medium">{section6.footer.title}</h3>
              <Button size="lg" className="group">
                <Link href={section6.footer.button.href}>{section6.footer.button.label}</Link>
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
