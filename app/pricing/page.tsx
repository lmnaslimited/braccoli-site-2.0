"use client";

import Header from "@repo/ui/components/header";
import Footer from "@repo/ui/components/footer";
import TitleSubtitle from "@repo/ui/components/titleSubtitle";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@repo/ui/components/ui/table";
import {
  ArrowRight,
  Clock,
  DollarSign,
  FileText,
  Zap,
  Lock,
  Star,
  CheckCircle,
  Download,
} from "lucide-react";
import { Button } from "@repo/ui/components/ui/button";
import Link from "next/link";
import { Tbutton } from "@repo/ui/type";
import CustomCard from "@repo/ui/components/customCard";
import FAQs from "@repo/ui/components/faq";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@repo/ui/components/ui/tabs";

export default function Pricing() {
  const Section1 = {
    header: {
      textWithoutColor: "Transparent Pricing. Maximum Value. Zero Surprises.",
      subtitle:
        "AI-powered ERP solutions tailored to your business growth—without the hidden costs.",
      className:
        "mx-auto flex max-w-[58rem] flex-col items-center justify-center mb-4 text-center",
      headingClass: "sm:text-4xl md:text-5xl lg:text-6xl",
      descripClass: "max-w-[85%] md:text-xl/relaxed mx-auto",
    },
    footer: {
      text: "Empower your business with AI-driven automation, real-time insights, and scalable ERP solutions—all at a predictable cost.",
      button: [
        {
          label: "Start Your Free Trial",
          href: "https://demolens.lmnas.com/#login",
          icon: (
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          ),
        },
        {
          label: "Request a Demo",
          href: "https://nectar.lmnas.com/contact",
          icon: (
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          ),
          variant: "outline",
        },
      ],
    },
  };
  const Section2 = {
    header: {
      textWithoutColor:
        "The Problem: Why Traditional ERPs Are Holding You Back",
      subtitle:
        "Most ERP solutions in the market come with hidden costs, rigid pricing structures, and inefficient processes that slow down business growth. Here's why businesses struggle with traditional ERPs:",
      className: "mx-auto max-w-[58rem] text-center",
      descripClass: "mx-auto",
    },
    issues: [
      {
        icon: <DollarSign className="h-4 w-4 text-primary/70" />,
        title: "High Total Cost of Ownership",
        description: "Expensive licensing fees and hidden costs",
      },
      {
        icon: <Clock className="h-4 w-4 text-primary/70" />,
        title: "Slow Implementation",
        description: "Months or years to fully deploy",
      },
      {
        icon: <FileText className="h-4 w-4 text-primary/70" />,
        title: "Lack of AI-Driven Insights",
        description: "Outdated analytics making decisions difficult",
      },
      {
        icon: <Lock className="h-4 w-4 text-primary/70" />,
        title: "Vendor Lock-in",
        description: "Restrictive ecosystems limiting flexibility",
      },
      {
        icon: <Zap className="h-4 w-4 text-primary/70" />,
        title: "Scalability Issues",
        description: "Heavy costs for upgrades and new modules",
      },
      {
        icon: <DollarSign className="h-4 w-4 text-primary/70" />,
        title: "Higher Operational Costs",
        description: "Extensive maintenance and infrastructure costs",
      },
    ],
    footer: {
      text: "LENS ERP Suite eliminates these pain points with AI-powered automation, transparent pricing, and rapid deployment.",
      button: [
        {
          label: "See How We Solve These Problems",
          href: "https://demolens.lmnas.com/#login",
          icon: (
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          ),
        },
        {
          label: " Book a Free Consultation",
          href: "https://nectar.lmnas.com/contact",
          variant: "outline",
        },
      ],
    },
  };
  const Section3 = {
    header: {
      textWithoutColor: "Find the Right Plan for Your Business",
      subtitle: "One simple comparison table—no complex pricing cards.",
      className:
        "mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-6",
      descripClass: "md:text-xl/relaxed ",
      headingClass: "md:text-5xl",
      tag: "Premium Solutions",
    },
    tableHead: "Feature",
    pricingPlans: [
      {
        name: "Growth Starter",
        users: "Up to 10",
        warranty: "1 Year",
        support: "Basic",
        db: "Shared",
        maintenance: "Self-serve",
        consulting: "Basic Onboarding",
      },
      {
        name: "Enterprise-Pro",
        users: "50+",
        warranty: "2 Years",
        support: "Standard",
        db: "Dedicated",
        maintenance: "Standard",
        consulting: "Growth Strategy",
      },
      {
        name: "AI-Powered Elite",
        users: "200+",
        warranty: "3 Years",
        support: "Advanced",
        db: "Multi-Region",
        maintenance: "Fully Managed",
        consulting: "Dedicated ERP Consultant",
      },
    ],
    features: [
      "Users",
      "Product Warranty",
      "Functional Support",
      "Regional DB",
      "Maintenance Support",
      "Consulting Levels",
    ],
    footer: {
      text: "Limited Time Offer",
      header: {
        textWithoutColor: "Get 20% Off Your First 6 Months",
        subtitle:
          "Plus, receive a free implementation package worth $2,500 when you sign up today.",
        className:
          "mx-auto flex max-w-[58rem] flex-col items-center justify-center text-center mb-6",
        descripClass: "md:text-sm",
        headingClass: "md:text-xl",
      },
      buttons: [
        {
          label: "Start Your Free Trial",
          href: "https://demolens.lmnas.com/#login",
          icon: (
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          ),
        },
        {
          label: "Request a Tailored Quote",
          href: "https://nectar.lmnas.com/contact",
          variant: "outline",
        },
      ],
    },
  };

  const Section4 = {
    header: {
      textWithoutColor: "What Our Customers Say",
      className:
        "mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-6",
      headingClass: "md:text-5xl",
    },
    cards: [
      {
        header: {
          text: "",
          subtitle:
            "LENS ERP transformed our operations, slashing costs and boosting productivity.",
          descripClass: "italic border-l-4 border-primary/70 px-2 pb-2",
          headingClass: "mb-0",
        },
        className: "max-w-md ",
        image: {
          svg: (
            <div className="flex px-6 pt-4 space-x-1 text-primary">
              <Star size={24} fill="currentColor" strokeWidth={0} />
              <Star size={24} fill="currentColor" strokeWidth={0} />
              <Star size={24} fill="currentColor" strokeWidth={0} />
              <Star size={24} fill="currentColor" strokeWidth={0} />
              <Star size={24} fill="currentColor" strokeWidth={0} />
            </div>
          ),
          alt: "5-star",
        },
        avatar: {
          src: "",
          alt: "JD",
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
            "AI-driven automation made decision-making 5x faster for us.",
          descripClass: "italic border-l-4 border-primary/70 px-2 pb-2",
          headingClass: "mb-0",
        },
        className: "max-w-md",
        image: {
          svg: (
            <div className="flex px-6 pt-4 space-x-1 text-primary">
              <Star size={24} fill="currentColor" strokeWidth={0} />
              <Star size={24} fill="currentColor" strokeWidth={0} />
              <Star size={24} fill="currentColor" strokeWidth={0} />
              <Star size={24} fill="currentColor" strokeWidth={0} />
              <Star size={24} fill="currentColor" strokeWidth={0} />
            </div>
          ),
          alt: "5-star",
        },
        avatar: {
          src: "",
          alt: "JD",
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
          subtitle: "Seamless migration and zero downtime—it's a game-changer.",
          descripClass: "italic border-l-4 border-primary/70 px-2 pb-2",
          headingClass: "mb-0",
        },
        className: "max-w-md",
        image: {
          svg: (
            <div className="flex px-6 pt-4 space-x-1 text-primary">
              <Star size={24} fill="currentColor" strokeWidth={0} />
              <Star size={24} fill="currentColor" strokeWidth={0} />
              <Star size={24} fill="currentColor" strokeWidth={0} />
              <Star size={24} fill="currentColor" strokeWidth={0} />
              <Star size={24} fill="currentColor" strokeWidth={0} />
            </div>
          ),
          alt: "5-star",
        },
        avatar: {
          src: "",
          alt: "JD",
        },
        nameAndPlace: {
          name: "John Doe",
          place: "Product Designer",
        },
        namePosition: "bottom",
        footerClassName: "items-start",
      },
    ] as const,
    cta: {
      label: "Explore Case Studies",
      href: "/solutions",
    },
  };

  const Section5 = {
    header: {
      textWithoutColor: "Frequently Asked Questions",
      subtitle: "Everything you need to know about LENS ERP Suite",
      className:
        "mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-6",
      headingClass: "md:text-5xl",
      descripClass: "md:text-xl/relaxed",
      tag: "Common Questions",
    },
    items: [
      {
        question: "How long does implementation typically take?",
        answer:
          "Unlike traditional ERPs that can take 6-12 months to implement, LENS ERP Suite can be fully deployed in as little as 4-8 weeks, depending on your business complexity and customization needs. Our rapid implementation methodology ensures minimal disruption to your operations.",
      },
      {
        question: "Are there any hidden costs I should be aware of?",
        answer:
          "No. We believe in complete transparency. The price you see includes all core functionality, updates, and standard support. The only additional costs would be for optional premium services like dedicated support, custom development, or specialized training that you explicitly request.",
      },
      {
        question: "How does the AI functionality actually help my business?",
        answer:
          "LENS ERP's AI capabilities work in three key ways: 1) Automating routine tasks to free up employee time, 2) Providing predictive analytics to help you make better decisions faster, and 3) Identifying patterns and opportunities in your data that humans might miss. Our clients report an average 40% increase in operational efficiency after implementing our AI features.",
      },
      {
        question: "Can I migrate data from my existing ERP system?",
        answer:
          "Yes, absolutely. LENS ERP Suite includes comprehensive data migration tools that support imports from all major ERP systems including SAP, Oracle, Microsoft Dynamics, and others. Our migration specialists will work with you to ensure a smooth transition with no data loss.",
      },
      {
        question: "What kind of support do you offer?",
        answer:
          "All plans include standard support during business hours. Our Growth, Enterprise, and Ultimate plans include increasingly comprehensive support options, with the Ultimate plan offering 24/7 priority support with dedicated account managers. We also offer extensive documentation, video tutorials, and a community forum for all users.",
      },
      {
        question: "Is LENS ERP suitable for my industry?",
        answer:
          "LENS ERP Suite is designed to be highly adaptable across industries. We have specialized configurations for manufacturing, retail, professional services, healthcare, construction, and distribution. If you have specific industry requirements, our team can provide a customized demo to show how LENS ERP addresses your unique needs.",
      },
    ],
  };

  const Section6 = {
    header: {
      textWithoutColor:
        "Still in Doubt? Let's Find the Best ERP Solution for You!",
      subtitle:
        "It's time for a smarter, faster, and more cost-effective ERP solution. With LENS ERP Suite you get AI-driven automation, real-time insights, and zero hidden fees—all designed to scale with your business.",
      headingClass: "md:text-5xl",
      descripClass: "md:text-xl/relaxed",
      tag: "Limited Time Offer",
    },
    cta: {
      title:
        "Need guidance on choosing the best plan? Want to see a custom demo?",
      buttons: [
        {
          title: "Want to see how LENS ERP Suite fits your business? ",
          label: "Request a Demo",
          href: "https://demolens.lmnas.com/#login",
          variant: "outline",
        },
        {
          title: "Ready to experience AI-powered ERP firsthand?",
          label: "Start Your Free Trial",
          href: "https://nectar.lmnas.com/contact",
          icon: (
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          ),
        },
      ],
    },
  };

  const Section7 = {
    header: {
      textWithoutColor: "How LENS ERP Stacks Up Against the Market",
      subtitle: "A direct comparison with traditional ERP solutions.",
      className:
        "mx-auto max-w-[58rem] text-center items-center justify-cenetr",
      headingClass: "md:text-5xl",
      descripClass: "md:text-xl/relaxed text-slate",
      tag: " Competitive Analysis",
    },
    categories: ["performance", "cost", "implementation", "security"],
    tableHeaders: ["Benefit", "LENS ERP Suite", "Other Traditional ERPs"],
    items: [
      {
        Benefit: "3x Faster Operations",
        header1: "Optimized workflows & AI automation",
        header2: "Legacy architecture leads to slower processes",
        category: "performance",
      },
      {
        Benefit: "5x Faster Decision-Making",
        header1: "Real-time AI-driven insights",
        header2: "Basic reports, no deep AI insights",
        category: "performance",
      },
      {
        Benefit: "4x Revenue Growth in 3 Years",
        header1: "AI + CPQ + Analytics drive sales & efficiency",
        header2: "Slow ROI due to high licensing & implementation costs",
        category: "performance",
      },
      {
        Benefit: "Lower Total Cost",
        header1: "Affordable subscription pricing",
        header2: "Expensive licensing & maintenance",
        category: "cost",
      },
      {
        Benefit: "Faster Implementation",
        header1: "Cloud-based & modular design",
        header2: "Long setup time with heavy IT dependency",
        category: "cost",
      },
      {
        Benefit: "Quick Onboarding",
        header1: "Intuitive UI & self-service setup",
        header2: "Requires extensive training",
        category: "implementation",
      },
      {
        Benefit: "Seamless Integrations",
        header1: "Plug-and-play with modern APIs",
        header2: "Complex & expensive integrations",
        category: "implementation",
      },
      {
        Benefit: "Enterprise-Grade Security",
        header1: "End-to-end encryption & compliance",
        header2: "Vulnerable legacy security",
        category: "security",
      },
      {
        Benefit: "Automatic Updates",
        header1: "Real-time patches & threat detection",
        header2: "Manual updates, prone to security risks",
        category: "security",
      },
    ],

    footer: {
      header: {
        textWithoutColor:
          "Thinking of comparing LENS ERP with others in the market? ",
        subtitle:
          "Get our detailed case study—loaded with real-world insights to help you decide. Plus, unlock exclusive special offers with a coupon code when you download!",
        headingClass: "md:text-2xl mb-2",
        descripClass: "md:text-base text-secondary",
      },
      buttons: [
        {
          label: "Download Comparison Study",
          href: "https://nectar.lmnas.com/contact",
          icon: <Download className="h-4 w-4" />,
        },
        {
          label: "Schedule a Demo",
          href: "https://demolens.lmnas.com/#login",
        },
      ],
      cta: {
        textWithoutColor: "Exclusive Offer",
        subtitle: "Download now and get 20% off your first year subscription",
        headingClass: "md:text-lg mb-1",
        descripClass: "md:text-sm text-secondary",
        tag: "Limited Time Only",
      },
    },
  };
  return (
    <>
      <Header />
      {/* hero section section1 */}
      <section className="relative overflow-hidden border-b border-border/40 py-20 md:py-32 bg-grayBackground">
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <TitleSubtitle iTitle={Section1.header} />
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center text-center">
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed">
              {Section1.footer.text}
            </p>
          </div>
          <div className="flex flex-col gap-2 md:flex-row mt-6 items-center justify-center">
            {Section1.footer.button.map((idBtn, iIndex) => (
              <Button
                key={iIndex}
                size="lg"
                className="group"
                variant={(idBtn.variant as Tbutton["variant"]) ?? "default"}
              >
                <Link href={idBtn.href}> {idBtn.label} </Link>
                {idBtn.icon && idBtn.icon}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* section 2 */}
      <section className="border-b border-border/40 py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <TitleSubtitle iTitle={Section2.header} />
          <div className="mx-auto max-w-4xl">
            <div className="relative p-8 bg-background rounded-xl border-2 border-muted shadow-lg">
              <div className="grid gap-6 md:grid-cols-2">
                {Section2.issues.map((issue, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 rounded-full bg-muted p-1.5 flex-shrink-0">
                      {issue.icon}
                    </div>
                    <div>
                      <p className="font-medium">{issue.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {issue.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                <p className="text-lg font-medium mb-6">
                  {Section2.footer.text}
                </p>
                <div className="flex flex-col gap-2 sm:flex-row justify-center">
                  {Section2.footer.button.map((idBtn, iIndex) => (
                    <Button
                      key={iIndex}
                      size="lg"
                      variant={
                        (idBtn.variant as Tbutton["variant"]) ?? "default"
                      }
                    >
                      <Link href={idBtn.href}> {idBtn.label} </Link>
                      {idBtn.icon ? idBtn.icon : ""}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans & Pricing Tiers  section3*/}
      <section className="border-b border-border/40 py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex w-fit items-center rounded-full bg-accent px-3 py-1 text-sm mb-4 mx-auto">
            <span className="font-medium">{Section3.header.tag}</span>
          </div>
          <TitleSubtitle iTitle={Section3.header} />
          <div className="mx-auto max-w-6xl">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-grayBackground to-background rounded-xl -m-4"></div>
              <div className="relative z-10 overflow-hidden border-2 border-primary rounded-xl shadow-2xl">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-primary text-background hover:bg-primary">
                        <TableHead className="w-[250px] text-background">
                          {Section3.tableHead}
                        </TableHead>
                        {Section3.pricingPlans.map((plan) => (
                          <TableHead
                            key={plan.name}
                            className="text-center text-background"
                          >
                            {plan.name}
                          </TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {Section3.features.map((feature, index) => (
                        <TableRow
                          key={index}
                          className="border-b hover:bg-grayBackground"
                        >
                          <TableCell className="font-medium p-4">
                            {feature}
                          </TableCell>
                          {Section3.pricingPlans.map((plan, i) => (
                            <TableCell key={i} className="text-center p-4">
                              {
                                plan[
                                  Object.keys(plan)[
                                    index + 1
                                  ] as keyof typeof plan
                                ]
                              }
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                      <TableRow className="bg-grayBackground border-t">
                        <TableCell></TableCell>
                        {Section3.pricingPlans.map((plan, index) => (
                          <TableCell key={index} className="text-center">
                            <Button
                              variant={index === 2 ? "default" : "outline"}
                              size="sm"
                              className={
                                index === 2
                                  ? "bg-primary hover:bg-primary/80"
                                  : ""
                              }
                            >
                              {index === 2 ? "Most Popular" : "Get Started"}
                            </Button>
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-[58rem] text-center mt-16 bg-grayBackground p-8 rounded-xl border-2 border-muted shadow-lg">
              <div className="inline-flex items-center rounded-full bg-primary text-background px-3 py-1 text-sm mb-4">
                <span className="font-medium">{Section3.footer.text}</span>
              </div>
              <TitleSubtitle iTitle={Section3.footer.header} />
              <div className="flex flex-col gap-2 sm:flex-row justify-center">
                {Section3.footer.buttons.map((idBtn, iIndex) => (
                  <Button
                    key={iIndex}
                    size="lg"
                    variant={(idBtn.variant as Tbutton["variant"]) ?? "default"}
                  >
                    <Link href={idBtn.href}> {idBtn.label} </Link>
                    {idBtn.icon ? idBtn.icon : ""}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LENS ERP vs. The Competition section7 */}
      <section className="border-b border-border/40 py-20 bg-gradient-to-b from-primary to-primary/70 text-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex mx-auto w-fit items-center rounded-full bg-background/20 text-background px-3 py-1 text-sm mb-4">
            <span className="font-medium">{Section7.header.tag}</span>
          </div>
          <TitleSubtitle iTitle={Section7.header} />
          <div className="mx-auto max-w-6xl">
            <Tabs defaultValue="performance" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 bg-primary/70 p-1 rounded-lg">
                {Section7.categories.map((tab) => (
                  <TabsTrigger
                    key={tab}
                    value={tab}
                    className="data-[state=active]:bg-secindary data-[state=active]:text-primary 
                         text-grayBackground hover:text-secondary transition-all px-4 rounded-lg"
                  >
                    {tab.charAt(0).toUpperCase() +
                      tab.slice(1).replace("-", " ")}
                  </TabsTrigger>
                ))}
              </TabsList>

              <div className="bg-background rounded-xl p-4 shadow-2xl">
                {Section7.categories.map((tab) => (
                  <TabsContent
                    key={tab}
                    value={tab}
                    className="space-y-4 rounded-lg overflow-hidden"
                  >
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-primary">
                            {Section7.tableHeaders.map((header, index) => (
                              <TableHead
                                key={index}
                                className="text-background font-bold text-base"
                              >
                                {header}
                              </TableHead>
                            ))}
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {Section7.items
                            .filter((item) => item.category === tab)
                            .map((row, index) => (
                              <TableRow key={index} className="border-b py-4">
                                <TableCell className="font-bold bg-grayBackground text-primary">
                                  {row.Benefit}
                                </TableCell>
                                <TableCell className="text-sm bg-background text-primary">
                                  <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-muted-primary" />
                                    <span>{row.header1}</span>
                                  </div>
                                </TableCell>
                                <TableCell className="text-sm bg-grayBackground text-primary">
                                  {row.header2}
                                </TableCell>
                              </TableRow>
                            ))}
                        </TableBody>
                      </Table>
                    </div>
                  </TabsContent>
                ))}
              </div>
            </Tabs>
            <div className="mx-auto max-w-5xl mt-12 bg-gradient-to-r from-primary/80 to-primary/70 rounded-xl overflow-hidden shadow-xl border border-primary/60">
              <div className="grid md:grid-cols-5 items-center">
                <div className="md:col-span-3 p-6 md:p-8 text-secondary">
                  <TitleSubtitle iTitle={Section7.footer.header} />
                  <div className="flex flex-col sm:flex-row gap-3">
                    {Section7.footer.buttons.map((idBtn, iIndex) => (
                      <Button key={iIndex} size="lg">
                        {idBtn.icon ? idBtn.icon : ""}
                        <Link href={idBtn.href}> {idBtn.label} </Link>
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-2 bg-gradient-to-br from-primary/70 to-primary/80 p-6 md:p-8 flex flex-col justify-center items-center text-center border-t md:border-t-0 md:border-l border-primary/60">
                  <div className="bg-secondary/10 rounded-full p-3 mb-3">
                    <Download className="h-6 w-6 text-secondary" />
                  </div>
                  <TitleSubtitle iTitle={Section7.footer.cta} />
                  <div className="inline-flex items-center rounded-full bg-secondary/20 px-3 py-1 text-sm">
                    <span className="font-medium">
                      {Section7.footer.cta.tag}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="border-b border-border/40 py-20 bg-grayBackground">
        <div className="container mx-auto px-4 md:px-6">
          <TitleSubtitle iTitle={Section4.header} />
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-3">
              {Section4.cards.map((idCard, iIndex) => (
                <CustomCard
                  key={iIndex}
                  header={idCard.header}
                  className={idCard.className}
                  image={idCard.image}
                  avatar={idCard.avatar}
                  nameAndPlace={idCard.nameAndPlace}
                  namePosition={idCard.namePosition}
                  footerClassName={idCard.footerClassName}
                />
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                <Link href={Section4.cta.href}>{Section4.cta.label} </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section Section5 */}
      <section className="border-b border-border/40 py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center w-fit mx-auto rounded-full bg-accent  px-3 py-1 text-sm mb-4">
            <span className="font-medium">{Section5.header.tag}</span>
          </div>
          <TitleSubtitle iTitle={Section5.header} />
          <div className="mx-auto max-w-3xl space-y-4">
            <FAQs iFaq={Section5.items} />
          </div>
        </div>
      </section>

      {/* final cta section6 */}
      <section className="py-20 bg-grayBackground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center mx-auto w-fit rounded-full bg-primary text-background px-3 py-1 text-sm mb-4">
              <span className="font-medium">{Section6.header.tag}</span>
            </div>
            <TitleSubtitle iTitle={Section6.header} />
            <div className="bg-background border-2 border-primary rounded-lg p-8 mb-8 shadow-xl">
              <h3 className="text-xl font-bold mb-6">{Section6.cta.title}</h3>
              <div className="grid gap-6 md:grid-cols-2">
                {Section6.cta.buttons.map((idBtn, iIndex) => (
                  <div className="space-y-4" key={iIndex}>
                    <p className="font-medium">{idBtn.title}</p>
                    <Button
                      key={iIndex}
                      size="lg"
                      variant={
                        (idBtn.variant as Tbutton["variant"]) ?? "default"
                      }
                    >
                      <Link href={idBtn.href}> {idBtn.label} </Link>
                      {idBtn.icon ? idBtn.icon : ""}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
