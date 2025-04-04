import {
  ArrowUpCircle,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  Clock,
  DollarSign,
  Expand,
  LineChart,
  Settings,
  Shield,
  TrendingDown,
  Zap,
} from "lucide-react";
import ProductsComp from "../product";
import { Tproduct } from "@repo/ui/type";

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
          // href: "https://nectar.lmnas.com/book_appointment",
          formMode:"booking",
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

    problems: {
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
        button: [
          {
            label: "Book a Demo Now",
            // href: "https://nectar.lmnas.com/contact",
            formMode:"contact"
          },
          {
            label: "Read How Businesses Solved These Issues",
            href: "/solutions",
            variant: "outline",
          },
        ],
      },
    },
    solutions: {
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
          button: [
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
          button: [
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
          button: [
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
          button: [
            {
              label:
                "Read Case Study",
              href: "/solutions",
            },
          ],
        },
      ],
      footer: {
        button: [
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
    guide: {
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
          header: {
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
          header: {
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
          header: {
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
          header: {
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
          header: {
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
          header: {
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
        header: {
          text: "Not sure where to start? Let's discuss your challenges and tailor a solution just for you.",
        },
        button: [
          {
            label: "Get a Free Business Assessment",
            // href: "https://nectar.lmnas.com/contact",
            formMode:"booking"
          },
          {
            label: "Discover More Success Stories",
            href: "/solutions",
            variant: "outline",
          },
        ],
      },
    },
    successStory: {
      header: {
        textWithoutColor: "Experience Success with LENS ERP",
      },
      cards: [
        {
          header: {
            subtitle:
              "LENS ERP transformed our operations. We've seen a 40% increase in productivity and our team loves how easy it is to use.",
          },
          avatar: {
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
          header: {
            subtitle:
              "The cost savings have been remarkable. We've reduced our operational expenses by 30% while improving our decision-making capabilities.",
          },
          avatar: {
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
        header: {
          text: "Want proof? Discover how LENS ERP transformed businesses like yours.",
          subtitle: "Read Case Studies!",
        },
        button: [
          {
            label: "Book Your Free ERP Consultation",
            // href: "https://nectar.lmnas.com/book_appointment",
            formMode:"booking"
          },
          {
            label: "Explore Real Business Transformations",
            href: "/solutions",
            variant: "outline",
          },
        ],
      },
    },
    pricing: {
      header: {
        textWithoutColor: "Flexible Pricing to Fit Your Business Needs",
        subtitle:
          " We understand that every business is unique, and so are its needs. That's why LENS ERP offers flexible pricing models tailored to your business size, industry, and required features.",
        badge: "Limited Time Offer",
      },
      items: {
        header: {
          textWithoutColor: "Get a Customized Quote Now",
          subtitle: "Only for the next 10 businesses that sign up this month",
          badge: " Offer ends in: 5 days",
        },
        points: [
          {
            header: {
              text: "No Hidden Fees",
              subtitle: "Transparent pricing with no unexpected costs",
            },
          },
          {
            header: {
              text: "Scalable Plans",
              subtitle: "Start small and expand as your business grows",
            },
          },
          {
            header: {
              text: "Custom Solutions",
              subtitle: "Get a plan that perfectly matches your business needs",
            },
          },
          {
            header: {
              text: "Free Migration",
              subtitle:
                "We'll help you move from your current system at no cost",
            },
          },
        ],
      },
      footer: {
        header: {
          text: "Which plan suits you best? Let's discuss your business needs!",
          subtitle: "Only 3 spots left for this month's special offer",
        },
        button: [
          {
            label: " Get a Customized Quote Now",
            // href: "https://nectar.lmnas.com/contact",
            formMode:"contact"
          },
          {
            label: "Explore Pricing Options",
            href: "/pricing",
            variant: "outline",
          },
        ],
      },
    },
    cta: {
      header: {
        textWithoutColor: " Don't Miss Out—Get Started Today!",
        subtitle:
          "While your competitors struggle with outdated systems, you could be optimizing operations and driving growth with LENS ERP.",
        badge: "Limited Availability",
      },
      item: {
        header: {
          textWithoutColor: "Exclusive Onboarding Package",
          subtitle:
            "For a limited time, get our premium onboarding package (valued at $2,500) completely FREE when you sign up.",
        },
      },
      footer: {
        header: {
          text: " Only 5 spots remaining this month",
          subtitle:
            "Join the 500+ businesses already transforming their operations with LENS ERP",
        },
        button: [
          {
            label: " Get a Personalized Demo Today",
            // href: "https://nectar.lmnas.com/contact",
            formMode:"contact"
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
          // href: "https://nectar.lmnas.com/book_appointment",
          formMode:"booking",
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
    problems: {
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
        button: [
          {
            label: "Book a Demo Now",
            // href: "https://demolens.lmnas.com/",
            formMode:"contact"
          },
          {
            label: "Read How Companies Transformed HR Processes",
            href: "/solutions",
            variant: "outline",
          },
        ],
      },
    },
    solutions: {
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
          button: [
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
          button: [
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
          button: [
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
          button: [
            {
              label:
                "Read Case Study",
              href: "/solutions",
            },
          ],
        },
      ],
      footer: {
        button: [
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
    guide: {
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
          header: {
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
          header: {
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
          header: {
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
          header: {
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
          header: {
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
          header: {
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
        header: {
          text: "Not sure where to start? Let's discuss your HR challenges and tailor a solution just for you.",
        },
        button: [
          {
            label: "Get a Free HRMS Assessment",
            // href: "https://nectar.lmnas.com/contact",
            formMode:"contact"
          },
          {
            label: "Discover More HR Success Stories",
            href: "/solutions",
            variant: "outline",
          },
        ],
      },
    },
    successStory: {
      header: {
        textWithoutColor: "Experience Success with HRMS Cloud",
      },
      cards: [
        {
          header: {
            subtitle:
              "HRMS Cloud revolutionized our HR processes. We've seen a 50% reduction in administrative workload, making HR management seamless.",
          },
          avatar: {
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
          header: {
            subtitle:
              "With HRMS Cloud, employee engagement has improved significantly. We've seen a 35% increase in workforce satisfaction.",
          },
          avatar: {
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
        header: {
          text: "Want proof? Discover how HRMS Cloud transformed businesses like yours.",
          subtitle: "Read Case Studies!",
        },
        button: [
          {
            label: "Book Your Free HRMS Consultation",
            // href: "https://nectar.lmnas.com/book_appointment",
            formMode: "booking"
          },
          {
            label: "Explore Real HR Success Stories",
            href: "/solutions",
            variant: "outline",
          },
        ],
      },
    },
    pricing: {
      header: {
        textWithoutColor: "Flexible Pricing to Fit Your HR Needs",
        subtitle:
          "We understand that every organization has unique HR challenges. That's why HRMS Cloud offers flexible pricing models tailored to your company size, industry, and workforce requirements.",
        badge: "Limited Time Offer",
      },
      items: {
        header: {
          textWithoutColor: "Get a Customized Quote Now",
          subtitle:
            "Only for the next 10 organizations that sign up this month",
          badge: "Offer ends in: 5 days",
        },
        points: [
          {
            header: {
              text: "No Hidden Fees",
              subtitle: "Transparent pricing with no unexpected costs",
            },
          },
          {
            header: {
              text: "Scalable Plans",
              subtitle:
                "Start with core HR features and scale as your workforce grows",
            },
          },
          {
            header: {
              text: "Custom Solutions",
              subtitle: "Get a package tailored to your HR management needs",
            },
          },
          {
            header: {
              text: "Free Implementation",
              subtitle:
                "Seamless transition from your current HR system at no cost",
            },
          },
        ],
      },
      footer: {
        header: {
          text: "Which HR plan suits your organization best? Let's discuss your workforce needs!",
          subtitle: "Only 3 spots left for this month's special offer",
        },
        button: [
          {
            label: "Get a Customized Quote Now",
            // href: "https://nectar.lmnas.com/contact",
            formMode:"contact"
          },
          {
            label: "Explore Pricing Options",
            href: "/pricing",
            variant: "outline",
          },
        ],
      },
    },
    cta: {
      header: {
        textWithoutColor: "Don't Miss Out—Enhance Your HR Today!",
        subtitle:
          "While other companies struggle with manual HR processes, you could be automating tasks and improving employee management with HRMS Cloud.",
        badge: "Limited Availability",
      },
      item: {
        header: {
          textWithoutColor: "Exclusive HR Onboarding Package",
          subtitle:
            "For a limited time, get our premium HR onboarding package (valued at $2,500) completely FREE when you sign up.",
        },
      },
      footer: {
        header: {
          text: "Only 5 spots remaining this month",
          subtitle:
            "Join the 500+ organizations already transforming their workforce with HRMS Cloud",
        },
        button: [
          {
            label: "Get a Personalized Demo Today",
            // href: "https://nectar.lmnas.com/contact",
            formMode:"contact"
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

  return <ProductsComp idProduct={Product as Tproduct}/>
}
