import CustomCard from "@repo/ui/components/customCard";
import Footer from "@repo/ui/components/footer";
import Hero from "@repo/ui/components/hero";
import Navbar from "@repo/ui/components/navbar";
import TitleSubtitle from "@repo/ui/components/titleSubtitle";
import { Button } from "@repo/ui/components/ui/button";
import { Separator } from "@repo/ui/components/ui/separator";
import { Tbutton, TheroProps } from "@repo/ui/type";
import {
  ArrowRight,
  ArrowUpCircle,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  CheckCircle,
  ChevronRight,
  Clock,
  DollarSign,
  Expand,
  LineChart,
  Settings,
  Shield,
  TrendingDown,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";

// export default function Products() {
const PageSlug = [
  {
    id: "lens-erp-suite",
    slug: "/lens-erp-suite",
    title: "LENS ERP Suite",
    description:
      "Streamline your manufacturing processes with AI-powered ERP solutions.",

    hero: {
      heading: {
        textWithoutColor:
          "LENS ERP Suite: The Smart Choice for Growing Businesses",
        subtitle:
          "LENS ERP Suite: The Smart Choice for Growing Businesses. Your business is expanding, but disconnected systems and outdated tools are holding you back. Managing operations shouldn't be this complicated.",
      },
      buttons: [
        {
          label: "Book an Appointment",
          href: "https://nectar.lmnas.com/book_appointment",
          variant: "default",
        },
        {
          label: "Find the Right Plan",
          href: "/pricing",
          variant: "outline",
        },
      ],
      image: {
        src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
        alt: "hero-image",
      },
    },

    Section1: {
      header: {
        textWithoutColor: "Are You Struggling with Business Growth Challenges?",
        subtitle:
          "The right ERP solution should simplify, not complicate. LENS ERP is designed to meet your unique business needs.",
      },
      card: {
        header: {
          text: "Common Business Challenges",
        },
        list: [
          {
            text: "Disconnected Systems",
            subtitle: "Making your operations inefficient and disjointed",
          },
          {
            text: "Limited Functionality",
            subtitle: "Slowing down your business performance",
          },
          {
            text: "High Service & Operational Costs",
            subtitle: "Draining your resources unnecessarily",
          },
          {
            text: "System Complexities",
            subtitle: "Making it difficult to scale your business",
          },
          {
            text: "Expensive Internal Tech Team",
            subtitle: "Adding unnecessary overhead to your business",
          },
        ],
      },
      footer: {
        header: {
          textWithoutColor: "Talk to an Expert & Get a Tailor-Made ERP Solution!",
          subtitle:
            "Our experts understand the unique challenges of growing businesses and can help you find the perfect solution.",
        },
        buttons: [
          {
            label: "Book a Demo Now",
            href: "https://nectar.lmnas.com/contact",
          },
          {
            label: "Read How Businesses Solved These Issues",
            href: "/solutions",
            variant: "outline",
          },
        ],
      },
    },
    Section2: {
      header: {
        textWithoutColor:
          "Meet LENS ERP Suite - The Solution You've Been Looking For",
        subtitle: "A Proven Roadmap to Operational Excellence",
      },
      cards: [
        {
          header: {
            text: "Business Assessment & Strategy",
            subtitle:
              "We pinpoint inefficiencies and tailor an ERP strategy that fits your unique business needs.",
          },
          buttons: [
            {
              label:
                "Read Case Study",
              href: "/solutions",
            },
          ],
        },
        {
          header: {
            text: "Seamless Implementation & Customization",
            subtitle:
              "We ensure a smooth, worry-free transition so your team stays focused on growth.",
          },
          buttons: [
            {
              label:
                "Read Case Study",
              href: "/solutions",
            },
          ],
        },
        {
          header: {
            text: "Training & Support for Easy Adoption",
            subtitle:
              "Your team will master LENS ERP with our hands-on training and 24/7 support.",
          },
          buttons: [
            {
              label:
                "Read Case Study",
              href: "/solutions",
            },
          ],
        },
        {
          header: {
            text: "AI-Powered Optimization & Continuous Growth",
            subtitle:
              "Real-time insights help you make smarter, faster decisions.",
          },
          buttons: [
            {
              label:
                "Read Case Study",
              href: "/solutions",
            },
          ],
        },
      ],
      footer: {
        buttons: [
          {
            label: "Get a Customized ERP Plan",
            href: "/pricing",
          },
          {
            label: "Learn More About Our Process",
            href: "/solutions",
            variant: "outline",
          },
        ],
      },
    },
    Section3: {
      header: {
        textWithoutColor:
          "Transform the Way You Work—Unlock Your Full Business Potential",
      },

      features: [
        {
          icons: [
            {
              icon: <Clock className="h-5 w-5 text-primary/70" />,
              text: "3x Faster Operations",
            },
            {
              icon: <Zap className="h-5 w-5 text-primary/70" />,
              text: "5x Faster Decision-Making",
            },
          ],
          heading: {
            textWithoutColor: "Break Free from Manual Work & Bottlenecks",
            subtitle:
              "Tired of endless spreadsheets and outdated tools? Automate workflows, eliminate human errors, and free up time to focus on what matters—growing your business.",
          },
          link: {
            label:
              "Read Case Study: How a Service Business Reduced Admin Work by 40%",
            href: "/solutions",
          },
          img: (
            <Settings className="h-24 w-24 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
          ),
        },
        {
          icons: [
            {
              icon: <ArrowUpRight className="h-5 w-5 text-primary/70" />,
              text: "4x Revenue Growth in 3 Years",
            },
          ],
          heading: {
            textWithoutColor: "Turn Efficiency into Profitability",
            subtitle:
              "Streamline operations, cut waste, and maximize your earning potential with LENS ERP.",
          },
          link: {
            label:
              "Read Case Study: How a Mid-Sized Firm Boosted Revenue by 4x",
            href: "/solutions",
          },
          img: (
            <DollarSign className="h-24 w-24 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
          ),
        },
        {
          icons: [
            {
              icon: <Shield className="h-5 w-5 text-primary/70" />,
              text: "100% Secure",
            },
            {
              icon: <LineChart className="h-5 w-5 text-primary/70" />,
              text: "Zero Downtime Operations",
            },
          ],
          heading: {
            textWithoutColor: " Unbreakable Security & Reliability",
            subtitle:
              "Your data is fully protected with enterprise-grade security and zero-downtime architecture.",
          },
          link: {
            label:
              "Read Case Study: How a Finance Company Achieved 100% System Uptime",
            href: "/solutions",
          },
          img: (
            <BarChart3 className="h-24 w-24 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
          ),
        },
        {
          icons: [
            {
              icon: <Expand className="h-5 w-5 text-primary/70" />,
              text: "Future-Proof Scalability",
            },
          ],
          heading: {
            textWithoutColor: "Grow Without Limits",
            subtitle:
              "LENS ERP scales with your business, ensuring seamless operations as you expand.",
          },
          link: {
            label:
              "Read Case Study: How a Fast-Growing Company Scaled Operations Seamlessly",
            href: "/solutions",
          },
          img: (
            <ArrowUpCircle className="h-24 w-24 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
          ),
        },
        {
          icons: [
            {
              icon: <TrendingDown className="h-5 w-5 text-primary/70" />,
              text: "75% Lower TCO",
            },
            {
              icon: <DollarSign className="h-5 w-5 text-primary/70" />,
              text: "50% Lower IT Costs",
            },
          ],
          heading: {
            textWithoutColor: "Cut Costs Without Compromising Growth",
            subtitle:
              "Reduce unnecessary expenses while maintaining high performance and efficiency.",
          },
          link: {
            label: "Read Case Study: How a Business Saved 75% in ERP Costs",
            href: "/solutions",
          },
          img: (
            <BrainCircuit className="h-24 w-24 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
          ),
        },
        {
          icons: [
            {
              icon: <Clock className="h-5 w-5 text-primary/70" />,
              text: "3x Faster Implementation",
            },
            {
              icon: <Shield className="h-5 w-5 text-primary/70" />,
              text: "100% Ownership & Control",
            },
          ],
          heading: {
            textWithoutColor: "Your Data, Your Rules",
            subtitle:
              "Maintain complete control over your system, ensuring data privacy and operational independence.",
          },
          link: {
            label:
              " Read Case Study: How a Legal Firm Retained Full Data Ownership",
            href: "/solutions",
          },
          img: (
            <ArrowUpCircle className="h-24 w-24 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
          ),
        },
      ],
      footer: {
        heading: {
          text: "Not sure where to start? Let's discuss your challenges and tailor a solution just for you.",
        },
        buttons: [
          {
            label: "Get a Free Business Assessment",
            href: "https://nectar.lmnas.com/contact",
          },
          {
            label: "Discover More Success Stories",
            href: "/solutions",
            variant: "outline",
          },
        ],
      },
    },
    Section4: {
      heading: {
        textWithoutColor: "Experience Success with LENS ERP",
      },
      cards: [
        {
          heading: {
            subtitle:
              "LENS ERP transformed our operations. We've seen a 40% increase in productivity and our team loves how easy it is to use.",
          },
          avator: {
            src: "/svg",
            alt: "JD",
          },
          nameAndPlace: {
            name: "John Doe",
            place: "CEO, Retail Chain",
          },
          link: [
            {
              label: "Increased Productivity by 40%",
            },
          ],
        },
        {
          heading: {
            subtitle:
              "The cost savings have been remarkable. We've reduced our operational expenses by 30% while improving our decision-making capabilities.",
          },
          avator: {
            src: "/svg",
            alt: "JS",
          },
          nameAndPlace: {
            name: "Jane Smith",
            place: "COO, Manufacturing Firm",
          },
          link: [
            {
              label: "Reduced Costs by 30%",
            },
          ],
        },
      ],
      items: [
        {
          header: {
            text: "40%",
            subtitle: "Increased Productivity",
          },
        },
        {
          header: {
            text: "30%",
            subtitle: "Better Decision-Making",
          },
        },
        {
          header: {
            text: "25%",
            subtitle: "Cost Savings",
          },
        },
        {
          header: {
            text: "100%",
            subtitle: "Seamless Integration",
          },
        },
      ],
      footer: {
        heading: {
          text: "Want proof? Discover how LENS ERP transformed businesses like yours.",
          subtitle: "Read Case Studies!",
        },
        buttons: [
          {
            label: "Book Your Free ERP Consultation",
            href: "https://nectar.lmnas.com/book_appointment",
          },
          {
            label: "Explore Real Business Transformations",
            href: "/solutions",
            variant: "outline",
          },
        ],
      },
    },
    Section5: {
      heading: {
        textWithoutColor: "Flexible Pricing to Fit Your Business Needs",
        subtitle:
          " We understand that every business is unique, and so are its needs. That's why LENS ERP offers flexible pricing models tailored to your business size, industry, and required features.",
        badge: "Limited Time Offer",
      },
      items: {
        heading: {
          textWithoutColor: "Get a Customized Quote Now",
          subtitle: "Only for the next 10 businesses that sign up this month",
          badge: " Offer ends in: 5 days",
        },
        points: [
          {
            heading: {
              text: "No Hidden Fees",
              subtitle: "Transparent pricing with no unexpected costs",
            },
          },
          {
            heading: {
              text: "Scalable Plans",
              subtitle: "Start small and expand as your business grows",
            },
          },
          {
            heading: {
              text: "Custom Solutions",
              subtitle: "Get a plan that perfectly matches your business needs",
            },
          },
          {
            heading: {
              text: "Free Migration",
              subtitle:
                "We'll help you move from your current system at no cost",
            },
          },
        ],
      },
      footer: {
        heading: {
          text: "Which plan suits you best? Let's discuss your business needs!",
          subtitle: "Only 3 spots left for this month's special offer",
        },
        buttons: [
          {
            label: " Get a Customized Quote Now",
            href: "https://nectar.lmnas.com/contact",
          },
          {
            label: "Explore Pricing Options",
            href: "/pricing",
            variant: "outline",
          },
        ],
      },
    },
    Section6: {
      heading: {
        textWithoutColor: " Don't Miss Out—Get Started Today!",
        subtitle:
          "While your competitors struggle with outdated systems, you could be optimizing operations and driving growth with LENS ERP.",
        badge: "Limited Availability",
      },
      item: {
        heading: {
          textWithoutColor: "Exclusive Onboarding Package",
          subtitle:
            "For a limited time, get our premium onboarding package (valued at $2,500) completely FREE when you sign up.",
        },
      },
      footer: {
        heading: {
          text: " Only 5 spots remaining this month",
          subtitle:
            "Join the 500+ businesses already transforming their operations with LENS ERP",
        },
        buttons: [
          {
            label: " Get a Personalized Demo Today",
            href: "https://nectar.lmnas.com/contact",
          },
          {
            label: "See How Others Succeeded with LENS ERP",
            href: "/solutions",
            variant: "outline",
          },
        ],
      },
    },
  },
  {
    id: "hrms-cloud",
    slug: "/hrms-cloud",
    title: "HRMS Cloud",
    description:
      "Optimize your human resource management with AI-powered HRMS solutions.",

    hero: {
      heading: {
        textWithoutColor: "HRMS Cloud: The Future of Workforce Management",
        subtitle:
          "HRMS Cloud: The Future of Workforce Management. Empower your HR team with automation, AI-driven insights, and seamless workforce management. Say goodbye to manual HR tasks and inefficiencies.",
      },
      buttons: [
        {
          label: "Book an Appointment",
          href: "https://nectar.lmnas.com/book_appointment",
          variant: "default",
        },
        {
          label: "Find the Right Plan",
          href: "/pricing",
          variant: "outline",
        },
      ],
      image: {
        src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
        alt: "hero-image",
      },
    },
    Section1: {
      header: {
        textWithoutColor:
          "Are You Struggling with Workforce Management Challenges?",
        subtitle:
          "The right HRMS solution should empower, not burden. HRMS Cloud is designed to optimize your human resource operations with ease.",
      },
      card: {
        header: {
          text: "Common HR Challenges",
        },
        list: [
          {
            text: "Manual Payroll Processing",
            subtitle: "Time-consuming and prone to errors",
          },
          {
            text: "Employee Data Management",
            subtitle: "Difficult to maintain accurate and updated records",
          },
          {
            text: "Compliance & Regulations",
            subtitle: "Ensuring adherence to labor laws and company policies",
          },
          {
            text: "Talent Acquisition & Retention",
            subtitle: "Struggling to find and keep top talent",
          },
          {
            text: "Lack of AI-Driven Insights",
            subtitle: "Limited workforce analytics for better decision-making",
          },
        ],
      },
      footer: {
        header: {
          textWithoutColor: "Talk to an Expert & Get a Tailor-Made HRMS Solution!",
          subtitle:
            "Our experts understand the challenges of modern HR management and can help you implement the perfect solution.",
        },
        buttons: [
          {
            label: "Book a Demo Now",
            href: "https://demolens.lmnas.com/",
          },
          {
            label: "Read How Companies Transformed HR Processes",
            href: "/solutions",
            variant: "outline",
          },
        ],
      },
    },
    Section2: {
      header: {
        textWithoutColor:
          "Meet HRMS Cloud - The Solution You've Been Looking For",
        subtitle: "A Proven Roadmap to Workforce Excellence",
      },
      cards: [
        {
          header: {
            text: "HR Assessment & Strategy",
            subtitle:
              "We analyze workforce inefficiencies and customize an HRMS strategy tailored to your business needs.",
          },
          buttons: [
            {
              label:
                "Read Case Study",
              href: "/solutions",
            },
          ],
        },
        {
          header: {
            text: "Seamless Implementation & Customization",
            subtitle:
              "We ensure a smooth, worry-free transition so your HR team can focus on talent and performance management.",
          },
          buttons: [
            {
              label:
                "Read Case Study",
              href: "/solutions",
            },
          ],
        },
        {
          header: {
            text: "Training & Support for Easy Adoption",
            subtitle:
              "Your HR team will master HRMS Cloud with our hands-on training and 24/7 support.",
          },
          buttons: [
            {
              label:
                "Read Case Study",
              href: "/solutions",
            },
          ],
        },
        {
          header: {
            text: "AI-Powered Workforce Insights & Growth",
            subtitle:
              "Leverage real-time HR analytics to make smarter, data-driven decisions.",
          },
          buttons: [
            {
              label:
                "Read Case Study",
              href: "/solutions",
            },
          ],
        },
      ],
      footer: {
        buttons: [
          {
            label: "Get a Customized HRMS Plan",
            href: "/pricing",
          },
          {
            label: "Learn More About Our Process",
            href: "/solutions",
            variant: "outline",
          },
        ],
      },
    },
    Section3: {
      header: {
        textWithoutColor:
          "Revolutionize Workforce Management—Unlock Your HR Potential",
      },

      features: [
        {
          icons: [
            {
              icon: <Clock className="h-5 w-5 text-primary/70" />,
              text: "3x Faster HR Processes",
            },
            {
              icon: <Zap className="h-5 w-5 text-primary/70" />,
              text: "5x Faster Employee Onboarding",
            },
          ],
          heading: {
            textWithoutColor: "Eliminate Manual HR Tasks & Boost Efficiency",
            subtitle:
              "Tired of paperwork and outdated HR systems? Automate payroll, performance tracking, and compliance management effortlessly.",
          },
          link: {
            label:
              "Read Case Study: How a Company Reduced HR Admin Time by 40%",
            href: "/solutions",
          },
          img: (
            <Settings className="h-24 w-24 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
          ),
        },
        {
          icons: [
            {
              icon: <ArrowUpRight className="h-5 w-5 text-primary/70" />,
              text: "4x Improvement in Employee Engagement",
            },
          ],
          heading: {
            textWithoutColor: "Turn HR Efficiency into Employee Satisfaction",
            subtitle:
              "Streamline HR operations, improve employee experience, and maximize workforce productivity with HRMS Cloud.",
          },
          link: {
            label:
              "Read Case Study: How a Corporation Boosted Employee Engagement by 4x",
            href: "/solutions",
          },
          img: (
            <DollarSign className="h-24 w-24 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
          ),
        },
        {
          icons: [
            {
              icon: <Shield className="h-5 w-5 text-primary/70" />,
              text: "100% Secure Employee Data",
            },
            {
              icon: <LineChart className="h-5 w-5 text-primary/70" />,
              text: "Zero Downtime HR Operations",
            },
          ],
          heading: {
            textWithoutColor: " Unbreakable Security & Compliance",
            subtitle:
              "Your HR data is fully protected with enterprise-grade security and compliance-ready architecture.",
          },
          link: {
            label:
              "Read Case Study: How an Enterprise Achieved 100% HR Data Security",
            href: "/solutions",
          },
          img: (
            <BarChart3 className="h-24 w-24 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
          ),
        },
        {
          icons: [
            {
              icon: <Expand className="h-5 w-5 text-primary/70" />,
              text: "Scalable HR Operations",
            },
          ],
          heading: {
            textWithoutColor: "Grow Your Workforce Without Limits",
            subtitle:
              "HRMS Cloud scales with your business, ensuring seamless HR operations as you expand.",
          },
          link: {
            label:
              "Read Case Study: How a Fast-Growing Company Scaled HR Operations Seamlessly",
            href: "/solutions",
          },
          img: (
            <ArrowUpCircle className="h-24 w-24 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
          ),
        },
        {
          icons: [
            {
              icon: <TrendingDown className="h-5 w-5 text-primary/70" />,
              text: "75% Lower HR Operational Costs",
            },
            {
              icon: <DollarSign className="h-5 w-5 text-primary/70" />,
              text: "50% Lower HR Software Expenses",
            },
          ],
          heading: {
            textWithoutColor: "Reduce HR Costs Without Compromising Efficiency",
            subtitle:
              "Cut unnecessary HR expenses while maintaining high employee satisfaction and performance.",
          },
          link: {
            label: "Read Case Study: How a Business Saved 75% in HRMS Costs",
            href: "/solutions",
          },
          img: (
            <BrainCircuit className="h-24 w-24 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
          ),
        },
        {
          icons: [
            {
              icon: <Clock className="h-5 w-5 text-primary/70" />,
              text: "3x Faster Employee Onboarding",
            },
            {
              icon: <Shield className="h-5 w-5 text-primary/70" />,
              text: "100% Control Over HR Data",
            },
          ],
          heading: {
            textWithoutColor: "Your Workforce, Your Rules",
            subtitle:
              "Maintain complete control over your HR system, ensuring compliance, data privacy, and operational independence.",
          },
          link: {
            label:
              "Read Case Study: How a Legal Firm Retained Full HR Data Ownership",
            href: "/solutions",
          },
          img: (
            <ArrowUpCircle className="h-24 w-24 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
          ),
        },
      ],
      footer: {
        heading: {
          text: "Not sure where to start? Let's discuss your HR challenges and tailor a solution just for you.",
        },
        buttons: [
          {
            label: "Get a Free HRMS Assessment",
            href: "https://nectar.lmnas.com/contact",
          },
          {
            label: "Discover More HR Success Stories",
            href: "/solutions",
            variant: "outline",
          },
        ],
      },
    },
    Section4: {
      heading: {
        textWithoutColor: "Experience Success with HRMS Cloud",
      },
      cards: [
        {
          heading: {
            subtitle:
              "HRMS Cloud revolutionized our HR processes. We've seen a 50% reduction in administrative workload, making HR management seamless.",
          },
          avator: {
            src: "/svg",
            alt: "AR",
          },
          nameAndPlace: {
            name: "Alice Roberts",
            place: "HR Director, Tech Firm",
          },
          link: [
            {
              label: "Reduced HR Admin Work by 50%",
            },
          ],
        },
        {
          heading: {
            subtitle:
              "With HRMS Cloud, employee engagement has improved significantly. We've seen a 35% increase in workforce satisfaction.",
          },
          avator: {
            src: "/svg",
            alt: "BK",
          },
          nameAndPlace: {
            name: "Brian Keller",
            place: "VP of People Operations, Finance Corp",
          },
          link: [
            {
              label: "Increased Employee Engagement by 35%",
            },
          ],
        },
      ],
      items: [
        {
          header: {
            text: "50%",
            subtitle: "Reduction in HR Admin Work",
          },
        },
        {
          header: {
            text: "35%",
            subtitle: "Improved Employee Engagement",
          },
        },
        {
          header: {
            text: "40%",
            subtitle: "Faster Payroll Processing",
          },
        },
        {
          header: {
            text: "100%",
            subtitle: "Seamless HR Integration",
          },
        },
      ],
      footer: {
        heading: {
          text: "Want proof? Discover how HRMS Cloud transformed businesses like yours.",
          subtitle: "Read Case Studies!",
        },
        buttons: [
          {
            label: "Book Your Free HRMS Consultation",
            href: "https://nectar.lmnas.com/book_appointment",
          },
          {
            label: "Explore Real HR Success Stories",
            href: "/solutions",
            variant: "outline",
          },
        ],
      },
    },
    Section5: {
      heading: {
        textWithoutColor: "Flexible Pricing to Fit Your HR Needs",
        subtitle:
          "We understand that every organization has unique HR challenges. That's why HRMS Cloud offers flexible pricing models tailored to your company size, industry, and workforce requirements.",
        badge: "Limited Time Offer",
      },
      items: {
        heading: {
          textWithoutColor: "Get a Customized Quote Now",
          subtitle:
            "Only for the next 10 organizations that sign up this month",
          badge: "Offer ends in: 5 days",
        },
        points: [
          {
            heading: {
              text: "No Hidden Fees",
              subtitle: "Transparent pricing with no unexpected costs",
            },
          },
          {
            heading: {
              text: "Scalable Plans",
              subtitle:
                "Start with core HR features and scale as your workforce grows",
            },
          },
          {
            heading: {
              text: "Custom Solutions",
              subtitle: "Get a package tailored to your HR management needs",
            },
          },
          {
            heading: {
              text: "Free Implementation",
              subtitle:
                "Seamless transition from your current HR system at no cost",
            },
          },
        ],
      },
      footer: {
        heading: {
          text: "Which HR plan suits your organization best? Let's discuss your workforce needs!",
          subtitle: "Only 3 spots left for this month's special offer",
        },
        buttons: [
          {
            label: "Get a Customized Quote Now",
            href: "https://nectar.lmnas.com/contact",
          },
          {
            label: "Explore Pricing Options",
            href: "/pricing",
            variant: "outline",
          },
        ],
      },
    },
    Section6: {
      heading: {
        textWithoutColor: "Don't Miss Out—Enhance Your HR Today!",
        subtitle:
          "While other companies struggle with manual HR processes, you could be automating tasks and improving employee management with HRMS Cloud.",
        badge: "Limited Availability",
      },
      item: {
        heading: {
          textWithoutColor: "Exclusive HR Onboarding Package",
          subtitle:
            "For a limited time, get our premium HR onboarding package (valued at $2,500) completely FREE when you sign up.",
        },
      },
      footer: {
        heading: {
          text: "Only 5 spots remaining this month",
          subtitle:
            "Join the 500+ organizations already transforming their workforce with HRMS Cloud",
        },
        buttons: [
          {
            label: "Get a Personalized Demo Today",
            href: "https://nectar.lmnas.com/contact",
          },
          {
            label: "See How Others Optimized HR with HRMS Cloud",
            href: "/solutions",
            variant: "outline",
          },
        ],
      },
    },
  },
];

export default async function Products({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const Product = PageSlug.find((idProduct) => idProduct.id === slug);

  return (
    <>
      <Navbar />
      <Hero
        idHero={
          {
            ...Product?.hero,
            buttons: Product?.hero.buttons.map((idButton) => ({
              ...idButton,
              icon: (
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              ),
              iconPosition: "after",
              size: "lg",
            })),
          } as TheroProps
        }
      />

      {/* section1 */}
      <section className="border-b border-border/40 py-16 md:py-24 lg:py-24">
        <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
          <TitleSubtitle
            idTitle={{
              ...Product?.Section1.header,
              className:
                "mx-auto max-w-[58rem] items-center justify-center gap-4 text-center mb-0", //changed
              headingClass: "md:text-5xl",
              descripClass: "max-w-[85%] md:text-xl/relaxed",
            }}
          />
          <div className="mx-auto grid max-w-5xl py-12 md:grid-cols-2 gap-12">  {/*changed*/}
            <CustomCard
              idCardProps={{
                header: { text: Product?.Section1.card.header.text },
                list: Product?.Section1.card.list.map((iaList) => ({
                  ...iaList,
                  icon: (
                    <div className="mt-1 rounded-full bg-grayBackground p-1">
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  ),
                }))
              }}
            />
            <div className="flex flex-col justify-center space-y-4">
              <TitleSubtitle
                idTitle={{
                  ...Product?.Section1.footer.header,
                  headingClass: "md:text-2xl",
                  className: "md:text-left text-center mb-2"
                }}
              />
              <div className="flex flex-col gap-4 sm:flex-row"> {/*changed */}
                {Product?.Section1.footer.buttons.map((idBtn, iIndex) => (
                  <Button
                    key={iIndex}
                    size="lg"
                    className="gap-4"
                    variant={(idBtn.variant as Tbutton["variant"]) ?? "default"}
                  >
                    <Link href={idBtn.href}>
                      <span>{idBtn.label}</span>
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 2 */}
      <section className="border-b border-border/40 py-16 md:py-24 lg:py-24 bg-muted">
        <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
          <TitleSubtitle
            idTitle={{
              ...Product?.Section2.header,
              className:
                "mx-auto max-w-[58rem] items-center justify-center gap-4 text-center",
              headingClass: "md:text-5xl",
              descripClass: "max-w-[85%] md:text-xl/relaxed",
            }}
          />
          <div className="mx-auto max-w-5xl md:py-12 py-6"> {/*changed */}
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>
              {Product?.Section2.cards.map((idCard, iIndex) => (
                <div className="relative mb-12 md:mb-16" key={iIndex}>
                  <div className="grid gap-8 md:grid-cols-[80px_1fr] items-start">
                    {/* Step Number hiden on mobile */}
                    <div className="relative z-10 hidden md:flex h-16 w-16 items-center justify-center rounded-full bg-background border-2 border-border shadow-md">
                      <span className="text-xl font-bold">{iIndex + 1}</span>
                    </div>

                    {/* Card Component */}
                    <CustomCard
                      key={iIndex}
                      idCardProps={{
                        header: idCard.header,
                        link:
                          idCard.buttons.map((iaButton) => ({
                            ...iaButton,
                            icon: <ChevronRight className="ml-1 h-3 w-3" />,
                            iconPosition: "after",
                          })) as Tbutton[],

                        footerClassName: "items-start",
                        className: "relative z-10 md:ml-4 border-none hover:shadow-none shadow-none"
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mx-auto max-w-[58rem] text-center mt-16">
              <div className="flex flex-col gap-4 sm:flex-row justify-center"> {/*changed */}
                {Product?.Section2.footer.buttons.map((idBtn, iIndex) => (
                  <Button
                    key={iIndex}
                    size="lg"
                    className="gap-2"
                    variant={(idBtn.variant as Tbutton["variant"]) ?? "default"}
                  >
                    <Link href={idBtn.href}>
                      <span>{idBtn.label}</span>
                    </Link>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section3 */}
      <section className="border-b border-border/40 py-16 md:py-24 lg:py-24 bg-background">
        <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
          <TitleSubtitle
            idTitle={{
              ...Product?.Section3.header,
              className:
                "mx-auto max-w-[58rem] items-center justify-center gap-4 text-center",
              headingClass: "md:text-5xl",
            }}
          />
          <div className="mx-auto max-w-6xl md:py-12 "> {/*changed */}
            {Product?.Section3.features.map((idFeature, iIndex) => (
              <div
                key={iIndex}
                className="group relative overflow-hidden rounded-lg border border-border bg-background shadow-sm transition-all hover:shadow-md mb-12"
              >
                <div className="grid gap-8 md:grid-cols-2 items-center p-6 md:p-8">
                  {iIndex % 2 !== 0 ? (
                    <div className="relative h-[300px] rounded-lg border border-border bg-grayBackground flex items-center justify-center overflow-hidden order-last md:order-first group-hover:border-border transition-all">
                      <div className="absolute inset-0 bg-gradient-to-br from-grayBackground to-muted opacity-50 group-hover:opacity-30 transition-all"></div>
                      {idFeature.img}
                    </div>
                  ) : null}

                  <div className="space-y-4">
                    <div className="flex items-center gap-4 mb-4 flex-wrap">
                      {idFeature.icons.map((idHighlight, iHighlightIndex) => (
                        <div
                          key={iHighlightIndex}
                          className="flex items-center gap-2 bg-grayBackground px-3 py-2 rounded-lg"
                        >
                          {idHighlight.icon}
                          <span className="text-sm font-medium">
                            {idHighlight.text}
                          </span>
                        </div>
                      ))}
                    </div>
                    <TitleSubtitle
                      idTitle={{
                        ...idFeature.heading,
                        headingClass:
                          "md:text-2xl transition-al",
                      }}
                    />
                    <Link
                      href={idFeature.link.href}
                      className="inline-flex items-center text-sm font-medium text-muted-foreground bg-grayBackground px-4 py-2 rounded-md hover:bg-graybackground transition-colors underline-offset-4 hover:underline"
                    >
                      {idFeature.link.label}
                      <ChevronRight className="ml-1 md:h-3 md:w-3 h-6 w-6 transition-transform group-hover:translate-x-1" /> {/*changed */}
                    </Link>
                  </div>

                  {iIndex % 2 === 0 ? (
                    <div className="relative h-[300px] rounded-lg border border-border bg-grayBackground flex items-center justify-center overflow-hidden group-hover:border-muted transition-all">
                      <div className="absolute inset-0 bg-gradient-to-br from-grayBackground to-muted opacity-50 group-hover:opacity-30 transition-all"></div>
                      {idFeature.img}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto max-w-[58rem] text-center mt-12 bg-grayBackground p-8 rounded-lg border border-border shadow-sm">
            <p className="text-primary/70 font-medium mb-6">
              {Product?.Section3.footer.heading.text}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center"> {/*changed */}
              {Product?.Section3.footer.buttons.map((idBtn, iIndex) => (
                <Button
                  key={iIndex}
                  size="lg"
                  className="gap-2"
                  variant={(idBtn.variant as Tbutton["variant"]) ?? "default"}
                >
                  <Link href={idBtn.href}>
                    <span>{idBtn.label}</span>
                  </Link>
                  <ArrowRight className=" h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* section4 */}
      <section className="border-b border-border/40 py-16 md:py-24 lg:py-24 bg-muted">
        <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
          <TitleSubtitle
            idTitle={{
              ...Product?.Section4.heading,
              className:
                "mx-auto max-w-[58rem] items-center justify-center gap-4 text-center",
              headingClass: "md:text-5xl",
            }}
          />
          <div className="mx-auto max-w-5xl md:py-12"> {/*changed */}
            <div className="grid gap-8 md:grid-cols-2">
              {Product?.Section4.cards.map((idCard, iIndex) => (
                <CustomCard
                  key={iIndex}
                  idCardProps={{
                    header: {
                      subtitle: idCard.heading.subtitle,
                      descripClass: "italic m-0",
                      headingClass: "mb-0",
                    },
                    avatar: idCard.avator,
                    nameAndPlace: idCard.nameAndPlace,
                    namePosition: "top",
                    link: idCard.link.map((iaLnk) => ({
                      ...iaLnk,
                      icon: <CheckCircle className="h-5 w-5" />,
                      iconPosition: "before",
                      size: "lg",
                    }))
                  }}
                />
              ))}
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-4">
              {Product?.Section4.items.map((idItem, iIndex) => (
                <CustomCard
                  key={iIndex}
                  idCardProps={{
                    header: {
                      text: idItem.header.text,
                      subtitle: idItem.header.subtitle,
                      headingClass: "md:text-4xl mb-0",
                    },
                    className: "text-center"
                  }}
                />
              ))}
            </div>
          </div>
          <div className="mx-auto max-w-[58rem] text-center mt-8">
            <p className="text-primary/50 mb-6">
              {Product?.Section4.footer.heading.text}
              <br />
              <span className="font-medium text-primary">
                {Product?.Section4.footer.heading.subtitle}
              </span>
            </p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center"> {/*changed */}
              {Product?.Section4.footer.buttons.map((idBtn, iIndex) => (
                <Button
                  key={iIndex}
                  size="lg"
                  className="gap-2"
                  variant={(idBtn.variant as Tbutton["variant"]) ?? "default"}
                >
                  <Link href={idBtn.href}>
                    <span>{idBtn.label}</span>
                  </Link>
                  <ArrowRight className=" h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* section5  */}
      <section className="border-b border-border/40 py-16 md:py-24 lg:py-24 bg-grayBackground">
        <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
          <div className="flex mx-auto w-fit items-center justify-center rounded-full bg-muted px-3 py-1 text-sm mb-4">
            <span className="font-medium">
              {Product?.Section5.heading.badge}
            </span>
          </div>
          <TitleSubtitle
            idTitle={{
              ...Product?.Section5.heading,
              className:
                "mx-auto max-w-[58rem] items-center justify-center gap-4 text-center",
              headingClass: "md:text-5xl",
              descripClass: "max-w-[85%] md:text-xl/relaxed",
            }}
          />
          <div className="mx-auto max-w-5xl py-12">
            <div className="relative mx-auto max-w-3xl bg-background rounded-xl border-2 border-primary p-8 shadow-lg">
              <TitleSubtitle
                idTitle={{
                  ...Product?.Section5.items.heading,
                  className: "text-center",
                  headingClass: "md:text-2xl",
                }}
              />
              <div className="flex items-center justify-center gap-2 text-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-grayBackground">
                  <Clock className="h-4 w-4" />
                </div>

                {Product?.Section5.items.heading.badge}
              </div>
              <Separator className="my-6" />

              <div className="mt-8 space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  {Product?.Section5.items.points.map((idpoint, iIndex) => (
                    <div className="space-y-2" key={iIndex}>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5" />
                        <span className="font-medium">
                          {idpoint.heading.text}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground pl-7">
                        {idpoint.heading.subtitle}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="text-center space-y-2 mt-8">
                  <p className="font-medium text-lg">
                    {Product?.Section5.footer.heading.text}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {Product?.Section5.footer.heading.subtitle}
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row justify-center mt-6"> {/*changed */}
                  {Product?.Section5.footer.buttons.map((idBtn, iIndex) => (
                    <Button
                      key={iIndex}
                      size="lg"
                      className="gap-2"
                      variant={
                        (idBtn.variant as Tbutton["variant"]) ?? "default"
                      }
                    >
                      <Link href={idBtn.href}>
                        <span>{idBtn.label}</span>
                      </Link>
                      <ArrowRight className=" h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section6 */}
      <section className="py-16 md:py-24 lg:py-24 bg-gradient-to-b from-background to-grayBackground">
        <div className="px-4 md:px-24 lg:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex mx-auto w-fit items-center justify-center rounded-full bg-muted px-3 py-1 text-sm mb-4">
              <span className="font-medium">
                {Product?.Section6.heading.badge}
              </span>
            </div>
            <TitleSubtitle
              idTitle={{
                ...Product?.Section6.heading,
                className: "items-center justify-center",
                headingClass: "md:text-5xl",
                descripClass: "md:text-xl/relaxed text-center",
              }}
            />
            <div className="mt-8 p-6 bg-background rounded-lg border border-border shadow-sm">
              <TitleSubtitle
                idTitle={{
                  ...Product?.Section6.item.heading,
                  className: "mb-4",
                  headingClass: "md:text-xl mb-2",
                  descripClass: "md:text-base",
                }}
              />
              <div className="flex items-center justify-center gap-2 text-sm mb-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-border">
                  <Users className="h-4 w-4" />
                </div>
                <span>{Product?.Section6.footer.heading.text}</span>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row justify-center"> {/*changed */}
                {Product?.Section6.footer.buttons.map((idBtn, iIndex) => (
                  <Button
                    key={iIndex}
                    size="lg"
                    className="gap-2"
                    variant={(idBtn.variant as Tbutton["variant"]) ?? "default"}
                  >
                    <Link href={idBtn.href}>
                      <span> {idBtn.label}</span>
                    </Link>
                    <ArrowRight className=" h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                ))}
              </div>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              {Product?.Section6.footer.heading.subtitle}
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
