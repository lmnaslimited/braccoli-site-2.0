"use client";

import CustomCard from "@repo/ui/components/customCard";
import Header from "@repo/ui/components/header";
import {
  CheckCircle,
  Download,
  Lightbulb,
  Play,
  PlayIcon,
  Quote,
} from "lucide-react";
import { TcalloutProps, Theader, TheroProps } from "@repo/ui/type";
import { ArrowRight, Calendar } from "lucide-react";
import Hero from "@repo/ui/components/hero";
import TitleSubtitle from "@repo/ui/components/titleSubtitle";
import Footer from "@repo/ui/components/footer";
import Callout from "@repo/ui/components/callout";
import LogoShowcase from "@repo/ui/components/logoShowCase";
import { Button } from "@repo/ui/components/ui/button";
import Tab from "@repo/ui/components/tab";
import Link from "next/link";
import { Input } from "@repo/ui/components/ui/input";

export default function Solutions() {
  const hero = {
    heading: {
      textWithoutColor: "Your Business Deserves More Than Just Surviving.",
      text: " It Deserves To Thrive.",
      subtitle:
        "Discover how businesses like yours eliminated inefficiencies, scaled faster, and gained complete control over their operations.",
    },
    buttons: [
      {
        label: "See the Success Story",
        href: "/",
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

  const calloutData = [
    {
      header: {
        textWithoutColor: "Could This Be Your Story Too?",
      },
      points: {
        title:
          "You've seen how businesses like yours transformed. Now it's your turn.",
        items: [
          "You don't have to stay stuck. The challenges you're facing today can become yesterday's problems.",
          "Your breakthrough is one call away.",
        ],
        actionText: "What's stopping you from transforming your business?",
      },
      buttons: [
        {
          label: "Book a Free Consultation Now",
          href: "https://nectar.lmnas.com/book_appointment",
          variant: "outline",
          icon: <Calendar className="size-5" />,
          iconPosition: "before",
        },
      ],
    },
  ];

  const section1 = {
    header: {
      textWithoutColor: "Finding The Right Solution Shouldn't Be Difficult",
      subtitle:
        "We've helped businesses like yours overcome these common challenges",
      className: "text-center items-center",
    },
    card: [
      {
        header: {
          text: "Are you getting generic solutions instead of tailored advice?",
          subtitle:
            "Our case studies show how we develop customized approaches for each client's unique situation.",
        },
        className: "border-l-4 border-l-primary",
        button: [
          {
            label: "Download Case Study",
            href: "/",
            variant: "outline",
            icon: <Download className="size-5" />,
            iconPosition: "before",
          },
        ],
      },
      {
        header: {
          text: "Struggling to find experts who understand your industry?",
          subtitle:
            "See how our industry specialists have solved complex problems in your specific sector.",
        },
        className: "border-l-4 border-l-primary",
        button: [
          {
            label: "Download Case Study",
            href: "/",
            variant: "outline",
            icon: <Download className="size-5" />,
            iconPosition: "before",
          },
        ],
      },
      {
        header: {
          text: "Tired of solutions that create more problems than they solve?",
          subtitle:
            "Our case studies demonstrate how we implement solutions with minimal disruption and maximum impact.",
        },
        className: "border-l-4 border-l-primary",
        button: [
          {
            label: "Download Case Study",
            href: "/",
            variant: "outline",
            icon: <Download className="size-5" />,
            iconPosition: "before",
          },
        ],
      },
    ] as const,
  };

  const section3 = {
    header: {
      textWithoutColor: "Our Proven Approach to Your Success",
      subtitle:
        "We don't just sell solutions — we partner with you through a transparent, collaborative process to ensure you get exactly what you need",
      className: "text-center items-center",
    },
    steps: [
      {
        header: {
          text: "1. In-Depth Discovery Discussion",
          subtitle:
            "We start by truly understanding your challenges through a comprehensive production discussion. Unlike others, we listen first and propose later.",
        },
        footer: "You'll be heard, not sold to.",
        icon: Calendar,
        cardPosition: "right",
        iconPosition: "left",
      },
      {
        header: {
          text: "2. Gap Analysis & Solution Design",
          subtitle:
            "We analyze what you already have and identify the exact gaps between your current state and desired outcomes. Then we design a tailored solution approach.",
        },
        footer: "You'll see exactly what you need and why.",
        icon: Lightbulb,
        cardPosition: "left",
        iconPosition: "right",
      },
      {
        header: {
          text: "3. Prototype & Validation",
          subtitle:
            "Before full implementation, we build a working prototype to demonstrate feasibility and get your feedback. This ensures alignment before major investment.",
        },
        footer: "You'll see it work before committing fully.",
        icon: Play,
        cardPosition: "right",
        iconPosition: "left",
      },
      {
        header: {
          text: "4. Complete Solution Delivery",
          subtitle:
            "Only after your approval do we build and implement the complete solution. We continue to collaborate throughout to ensure it meets your expectations.",
        },
        footer: "You'll get exactly what you approved, no surprises.",
        icon: CheckCircle,
        cardPosition: "left",
        iconPosition: "right",
      },
    ],
    card: {
      header: {
        text: "Ready to Experience Our Approach?",
        subtitle:
          "Take the first step toward a solution that's truly built for your needs. Book a discovery call, schedule a free demo, or explore our other successful solutions.",
      },
      className:
        "items-center text-center my-4 py-4 border-none shadow-none hover:shadow-none bg-slate",
      button: [
        {
          label: "Book a Free Consultation Now",
          href: "https://nectar.lmnas.com/book_appointment",
          variant: "default",
          icon: <Calendar className="size-5" />,
          iconPosition: "before",
          size: "lg",
        },
        {
          label: "Schedule a Demo",
          href: "https://demolens.lmnas.com/contact",
          variant: "outline",
          icon: <PlayIcon className="size-5" />,
          iconPosition: "before",
          size: "lg",
        },
        {
          label: "Explore Other Solutions",
          href: "/solutions",
          variant: "secondary",
          icon: <ArrowRight className="size-5" />,
          iconPosition: "before",
          size: "lg",
        },
      ],
    } as const,
  };

  const section4 = {
    header: {
      textWithoutColor:
        "We've Been The Guide To Hundreds of Businesses Like Yours",
      subtitle:
        "We've walked alongside businesses struggling with inefficiencies, missed revenue, and slow processes. Like a guide, we helped them transform their operations.",
      className: "text-center items-center",
      headingClass: "md:text-5xl",
    },
    card: [
      {
        header: {
          text: "Would you like us to find the exact solution tailored for your business?",
          subtitle:
            "Our experts will analyze your specific challenges and design a custom solution that addresses your unique needs.",
        },
        className:
          "max-w-xl bg-slate border-gray-200 text-center items-center justify-center",
        button: [
          {
            label: "Book a Free Consultation Now",
            href: "https://nectar.lmnas.com/book_appointment",
            variant: "default",
            icon: <Calendar className="size-5" />,
            iconPosition: "after",
            size: "lg",
          },
        ],
      },
      {
        header: {
          text: "Not ready to talk?",
          subtitle:
            "Explore our case studies to see how we've helped businesses similar to yours overcome their challenges.",
        },
        className:
          "max-w-xl border-gray-200 text-center items-center justify-center",
        button: [
          {
            label: "Explore More Case Studies",
            href: "/solutions",
            variant: "outline",
            icon: <ArrowRight className="size-5" />,
            iconPosition: "after",
            size: "lg",
          },
        ],
      },
    ] as const,
    footer: {
      title:
        " What is the one thing holding your business back from scaling faster?",
      label: "See How Other Businesses Solved It",
      href: "/",
      icon: <ArrowRight className="size-6" />,
    },
  };
  const section5 = {
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
          headingClass: "text-lg",
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
          headingClass: "text-lg",
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
          headingClass: "text-lg",
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
          headingClass: "text-lg",
        },
        category: "cross-industry",
        image: "/placeholder2.svg",
        alt: "image",
        button: [
          {
            label: "Read Case Study",
            href: "solutions",
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
          headingClass: "text-lg",
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
          headingClass: "text-lg",
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
          headingClass: "text-lg",
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
          headingClass: "text-lg",
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

  const section6 = {
    header: {
      textWithoutColor: "This Is What Transformation Feels Like",
      subtitle:
        "These aren't just numbers. They represent real businesses that broke through their limitations.",
      className: "text-center items-center",
      headingClass: "md:text-5xl",
    },
    card: [
      {
        header: {
          text: "Reduced manual work by 72%",
          subtitle:
            "Automation replaced tedious manual processes, freeing up staff for strategic work.",
          headingClass: "md:text-2xl",
        },
        className: "max-w-md bg-primary/5 border-gray-400 text-left",
      },
      {
        header: {
          text: "Increased revenue by $8M in 12 months",
          subtitle:
            "New efficiencies and insights led to significant revenue growth.",
          headingClass: "md:text-2xl",
        },
        className: "max-w-md bg-primary/5 border-gray-400 text-left",
      },
      {
        header: {
          text: "Achieved full process automation in 30 days",
          subtitle: "Rapid implementation led to quick wins and immediate ROI.",
          headingClass: "md:text-2xl",
        },
        className: "max-w-md bg-primary/5 border-gray-400 text-left",
      },
      {
        header: {
          text: "Unified data across 12 departments",
          subtitle:
            "Breaking down silos created unprecedented visibility and collaboration.",
          headingClass: "md:text-2xl",
        },
        className: "max-w-md bg-primary/5 border-gray-400 text-left",
      },
      {
        header: {
          text: "Reduced operational costs by 35%",
          subtitle:
            "Streamlined processes eliminated waste and reduced overhead.",
          headingClass: "md:text-2xl",
        },
        className: "max-w-md bg-primary/5 border-gray-400 text-left",
      },
      {
        header: {
          text: "Improved customer satisfaction by 48%",
          subtitle:
            "Better internal processes translated to superior customer experiences.",
          headingClass: "md:text-2xl",
        },
        className: "max-w-md bg-primary/5 border-gray-400 text-left",
      },
    ],
    footer: {
      title: "Could This Be Your Business Story Too?",
      label: "Book Your Consultation",
      href: "https://nectar.lmnas.com/book_appointment",
      icon: <Calendar className="size-6" />,
    },
  };

  const section7 = {
    header: {
      textWithoutColor: "Trusted By Leading Businesses Across Industries",
      subtitle:
        "Join hundreds of businesses that have transformed their operations and achieved breakthrough results.",
      className: "text-center items-center",
      headingClass: "md:text-5xl",
    },
    logo: Array(6).fill({
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 200"
          className="w-full max-w-md sm:max-w-lg lg:max-w-xl"
        >
          <rect width="100%" height="100%" fill="#ddd" />
        </svg>
      ),
      alt: "rectangle",
    }),
    card: [
      {
        header: {
          text: "",
          subtitle:
            "We were skeptical at first, but the results speak for themselves. Revenue is up, costs are down, and our team is more productive than ever. This was the breakthrough we needed.",
          descripClass: "italic",
        },
        className: "max-w-md ",
        image: {
          svg: <Quote className="h-9 w-9 mx-4 mt-4" />,
          alt: "quote",
        },
        avatar: {
          src: "/placeholder2.svg",
          alt: "User avatar",
          fallback: "JD",
        },
        nameAndPlace: {
          name: "John Doe",
          place: "Product Designer",
        },
        namePosition: "bottom",
        footerClassName: "items-start",
      },
      {
        header: {
          text: "",
          subtitle:
            "The transformation was beyond what we expected. Our team now has complete visibility into our operations, and we've eliminated the inefficiencies that were holding us back.",
          descripClass: "italic",
        },
        className: "max-w-md",
        image: {
          svg: <Quote className="h-9 w-9 mx-4 mt-4" />,
          alt: "quote",
        },
        avatar: {
          src: "/placeholder2.svg",
          alt: "User avatar",
          fallback: "JD",
        },
        nameAndPlace: {
          name: "John Doe",
          place: "Product Designer",
        },
        namePosition: "bottom",
        footerClassName: "items-start",
      },
      {
        header: {
          text: "",
          subtitle:
            "The implementation was smooth, and the team was incredibly supportive. We saw immediate improvements in our processes, and the long-term impact has been substantial.",
          descripClass: "italic",
        },
        className: "max-w-md",
        image: {
          svg: <Quote className="h-9 w-9 mx-4 mt-4" />,
          alt: "quote",
        },
        avatar: {
          src: "/placeholder2.svg",
          alt: "User avatar",
          fallback: "JD",
        },
        nameAndPlace: {
          name: "John Doe",
          place: "Product Designer",
        },
        namePosition: "bottom",
        footerClassName: "items-start",
      },
    ] as const,
    footer: {
      label: "Explore Success Stories ",
      href: "/",
      icon: <ArrowRight className="size-5" />,
    },
  };

  return (
    <>
      <Header />
      <Hero iHero={hero as TheroProps} />

      <section className="w-full py-12 md:py-16 bg-slate">
        <div className="container mx-auto px-4 md:px-6">
          <TitleSubtitle iTitle={section1.header as Theader} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
            {section1.card.map((card, index) => (
              <CustomCard
                key={index}
                header={card.header}
                className={card.className}
                button={[...card.button]}
              />
            ))}
          </div>

          <div className="flex flex-col items-center space-y-6 bg-background p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-center">
              Discover How We've Helped Others Like You
            </h3>
            <p className="max-w-[700px] text-center text-muted-foreground">
              Our detailed case studies provide real-world examples of how we've
              helped businesses overcome these exact challenges.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="gap-2">
                <Link href={"https://nectar.lmnas.com/book_appointment"}>
                  <span>Book a Consultation</span>
                </Link>
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Link href={"/solutions"}>
                  <span>Explore All Case Studies</span>
                </Link>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/*3*/}
      <section className="py-16 container mx-auto px-4 md:px-6">
        <TitleSubtitle iTitle={section3.header as Theader} />
        <div className="grid gap-12 md:gap-16 relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-muted -translate-x-1/2 z-0"></div>

          {section3.steps.map((step, index) => (
            <div
              key={index}
              className="relative grid md:grid-cols-2 gap-8 items-center"
            >
              {step.cardPosition === "right" ? (
                <>
                  {/* Card Section - Right */}
                  <CustomCard
                    header={step.header}
                    nameAndPlace={{ name: step.footer }}
                    namePosition="bottom"
                    footerClassName="items-end"
                    className="bg-slate md:text-right order-2 md:order-1 border-none hover:shadow-none shadow-none"
                  />
                  {/* Icon Section - Left */}
                  <div className="flex justify-center md:justify-start order-1 md:order-2">
                    <div className="bg-primary/10 p-6 rounded-full relative z-10">
                      <div className="bg-primary text-primary-foreground p-4 rounded-full">
                        <step.icon className="h-8 w-8" />
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Icon Section - Left */}
                  <div className="flex justify-center md:justify-end">
                    <div className="bg-primary/10 p-6 rounded-full relative z-10">
                      <div className="bg-primary text-primary-foreground p-4 rounded-full">
                        <step.icon className="h-8 w-8" />
                      </div>
                    </div>
                  </div>
                  {/* Card Section - Left */}
                  <CustomCard
                    header={step.header}
                    nameAndPlace={{ name: step.footer }}
                    namePosition="bottom"
                    footerClassName="items-start"
                    className="bg-slate shadow-none border-none hover:shadow-none"
                  />
                </>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate p-8 md:p-10 rounded-lg shadow-sm">
          <div className="flex flex-col items-center text-center space-y-6">
            <h3 className="text-2xl font-bold">
              Ready to Experience Our Approach?
            </h3>
            <p className="max-w-[700px] text-muted-foreground">
              Take the first step toward a solution that's truly built for your
              needs. Book a discovery call, schedule a free demo, or explore our
              other successful solutions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="gap-2">
                <Calendar className="h-4 w-4" />
                <Link href={"https://nectar.lmnas.com/book_appointment"}>
                  <span>Book an Appointment</span>
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Play className="h-4 w-4" />
                <Link href={"https://demolens.lmnas.com/#login"}>
                  <span>Schedule a Free Demo</span>
                </Link>
              </Button>
              <Button variant="secondary" size="lg" className="gap-2">
                <ArrowRight className="h-4 w-4" />
                <Link href={"/solutions"}>
                  <span>Explore Other Solutions</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4 */}
      <section className="my-40 mx-auto text-center flex flex-col items-center justify-center">
        <TitleSubtitle iTitle={section4.header as Theader} />
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 mb-4 max-w-6xl">
          {section4.card.map((card, index) => (
            <CustomCard
              key={index}
              header={card.header}
              className={card.className}
              buttonPosition="items-center justify-center"
              button={[...card.button]}
            />
          ))}
        </div>
        <p className="font-semibold mt-16 mb-6 text-xl">
          {section4.footer.title}
        </p>
        <Button size={"lg"}>
          <Link href={section4.footer.href}> {section4.footer.label} </Link>{" "}
          {section4.footer.icon}{" "}
        </Button>
      </section>

      {/* 5 */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <TitleSubtitle iTitle={section5.header as Theader} />
          <Tab
            data={section5.caseStudies}
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
          <div className="mt-3 text-center">
            <Button size="lg" className="group">
              <Link href={section5.footer.href}> {section5.footer.label} </Link>
              {section5.footer.icon}
            </Button>
          </div>
        </div>
      </section>

      {/* 6 */}
      <section className="py-20 container mx-auto px-4 md:px-6 text-center">
        <TitleSubtitle iTitle={section6.header as Theader} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {section6.card.map((card, index) => (
            <CustomCard
              key={index}
              header={card.header}
              className={card.className}
            />
          ))}
        </div>
        <p className="font-semibold mt-16 mb-6 text-xl">
          {section6.footer.title}
        </p>
        <Button size={"lg"}>
          <Link href={section6.footer.href}> {section6.footer.label} </Link>{" "}
          {section6.footer.icon}{" "}
        </Button>
      </section>

      {/* 7 */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <TitleSubtitle iTitle={section7.header as Theader} />
          <div className="flex items-center justify-center">
            <div className="max-w-7xl ">
              <LogoShowcase
                logos={section7.logo}
                variant="grid"
                logoSize="small"
                logosPerRow={6}
              />
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
            {section7.card.map((card, index) => (
              <CustomCard
                key={index}
                header={card.header}
                className={card.className}
                image={card.image}
                avatar={card.avatar}
                nameAndPlace={card.nameAndPlace}
                namePosition={card.namePosition}
                footerClassName={card.footerClassName}
              />
            ))}
          </div>
          <div className="flex items-center justify-center my-8">
            <Button size={"lg"}>
              <Link href={section7.footer.href}>{section7.footer.label} </Link>{" "}
              {section7.footer.icon}{" "}
            </Button>
          </div>
        </div>
      </section>
      <div className="bg-primary">
        <Callout iCallout={calloutData[0] as TcalloutProps} />
      </div>
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-md mx-auto bg-muted/50 dark:bg-muted/20 rounded-xl border p-6 shadow-sm">
            <div className="text-center space-y-2 mb-6">
              <h2 className="text-2xl font-bold">
                Want To See Full Case Study Reports?
              </h2>
              <p className="text-muted-foreground">
                Download detailed PDF reports of how we helped companies achieve
                massive breakthroughs.
              </p>
            </div>

            <form className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full"
                />
                <p className="text-xs text-muted-foreground">
                  We'll send the case study directly to your inbox. We respect
                  your privacy.
                </p>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Download Full Case Study Report
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
