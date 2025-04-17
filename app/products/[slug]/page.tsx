import {
  ArrowUpRight,
  Banknote,
  BarChart,
  Calculator,
  ClipboardCheck,
  ClipboardList,
  Clock,
  Cloud,
  DollarSign,
  EyeOff,
  Flag,
  Key,
  LineChart,
  Monitor,
  Server,
  Settings,
  Shield,
  ShieldCheck,
  Smartphone,
  TrendingDown,
  TrendingUp,
  UserCheck,
  Workflow,
  Zap,
  Lock,
  BarChart2,
  Activity,
  AlertTriangle,
  BarChartBig,
  BookMarked,
  BookOpen,
  Brain,
  CheckCircle,
  Eye,
  FileText,
  Gauge,
  Globe,
  Lightbulb,
  MapPin,
  MessageSquare,
  Repeat,
  Send,
  Shuffle,
  Smile,
  Sparkles,
  Users,
  HeartPulse,
  AreaChart,
  BadgeDollarSign,
  Ban,
  FileCheck2,
  Link,
  Link2,
  Settings2,
  Award,
  Briefcase,
  CheckSquare,
  Component,
  Laptop,
  Layers,
  PieChart,
  Star,
  Target,
  UserCircle,
} from "lucide-react";
import ProductsComp from "../product";
import { Tproduct } from "@repo/ui/type";

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
          formMode: "booking",
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
            text: "Things feel disconnected.",
            subtitle:
              "Your teams use different tools, but nothing works together. Do you often find yourself stitching data manually?",
          },
          {
            text: "You have software, but something’s missing.",
            subtitle:
              "An accounting tool helps with numbers, but does it streamline your entire business? Or do you still rely on separate systems?",
          },
          {
            text: "Processes feel scattered.",
            subtitle:
              "Documents here, reports there—are you spending more time searching than actually making decisions?",
          },
          {
            text: "Costs keep adding up.",
            subtitle:
              "Managing multiple systems, services, and fixes—is it eating into your profits without real efficiency?",
          },
          {
            text: "Scaling feels frustrating.",
            subtitle:
              "As your business grows, do your tools feel more like roadblocks than solutions?",
          },
        ],
      },
      footer: {
        header: {
          textWithoutColor:
            "Talk to an Expert & Get a Tailor-Made ERP Solution!",
          subtitle:
            "Our experts understand the unique challenges of growing businesses and can help you find the perfect solution.",
        },
        button: [
          {
            label: "Book a Demo Now",
            // href: "https://nectar.lmnas.com/contact",
            formMode: "contact",
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
              label: "Read Case Study",
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
              label: "Read Case Study",
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
              label: "Read Case Study",
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
              label: "Read Case Study",
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
              icon: <TrendingUp className="h-5 w-5 text-primary/70" />,
              text: "4x Revenue Growth in 3 Years",
            },
            {
              icon: <DollarSign className="h-5 w-5 text-primary/70" />,
              text: "Faster Break-Even Point",
            },
          ],
          header: {
            textWithoutColor: "Turn Efficiency into Profitability",
            subtitle:
              "Streamline operations, cut waste, and maximize your earning potential with a system built for growth.",
          },
          link: {
            label:
              "Read Case Study: How a Mid-Sized Firm Boosted Revenue by 4x",
            href: "/solutions",
          },
          img: (
            <Banknote className="h-24 w-24 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
          ),
        },
        {
          icons: [
            {
              icon: <ArrowUpRight className="h-5 w-5 text-primary/70" />,
              text: "Unified Business Platform",
            },
            {
              icon: <Cloud className="h-5 w-5 text-primary/70" />,
              text: "Multi-Cloud & Hybrid Deployment",
            },
          ],
          header: {
            textWithoutColor:
              "Seamless Business Operations Without Disruptions",
            subtitle:
              "Centralize every department—finance, HR, supply chain, and more—into a single, intelligent ERP system that eliminates silos and improves collaboration.",
          },
          link: {
            label:
              "Read Case Study: How a Manufacturer Connected 10+ Departments Under One System",
            href: "/solutions",
          },
          img: (
            <Settings className="h-24 w-24 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
          ),
        },
        {
          icons: [
            {
              icon: <BarChart className="h-5 w-5 text-primary/70" />,
              text: "AI-Powered Forecasting",
            },
            {
              icon: <Workflow className="h-5 w-5 text-primary/70" />,
              text: "Customizable Workflows",
            },
          ],
          header: {
            textWithoutColor: "Beyond Accounting – A Complete ERP Solution",
            subtitle:
              "Move beyond simple accounting software with a system that automates workflows, predicts business trends, and provides deep financial insights.",
          },
          link: {
            label:
              "Read Case Study: How a Retail Chain Transformed Its Operations Beyond Accounting",
            href: "/solutions",
          },
          img: (
            <Calculator className="h-24 w-24 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
          ),
        },
        {
          icons: [
            {
              icon: <Clock className="h-5 w-5 text-primary/70" />,
              text: "3x Faster Implementation",
            },
            {
              icon: <ClipboardCheck className="h-5 w-5 text-primary/70" />,
              text: "Compliance-Ready from Day One",
            },
          ],
          header: {
            textWithoutColor: "Faster ERP Implementation Without Delays",
            subtitle:
              "Deploy and start using your ERP in weeks, not months, with a user-friendly interface that requires little to no training.",
          },
          link: {
            label:
              "Read Case Study: How a Mid-Sized Business Went Live with ERP in 30 Days",
            href: "/solutions",
          },
          img: (
            <Flag className="h-24 w-24 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
          ),
        },
        {
          icons: [
            {
              icon: <Clock className="h-5 w-5 text-primary/70" />,
              text: "Real-Time Insights",
            },
            {
              icon: <ShieldCheck className="h-5 w-5 text-primary/70" />,
              text: "Auto-Regulatory Compliance",
            },
          ],
          header: {
            textWithoutColor: "Instant Access to AI-Powered Business Reports",
            subtitle:
              "Say goodbye to disconnected reporting tools. Generate accurate, compliance-ready reports in seconds with AI-driven analytics.",
          },
          link: {
            label:
              "Read Case Study: How a Logistics Firm Cut Reporting Time by 80%",
            href: "/solutions",
          },
          img: (
            <ClipboardList className="h-24 w-24 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
          ),
        },
        {
          icons: [
            {
              icon: <Shield className="h-5 w-5 text-primary/70" />,
              text: "100% Secure",
            },
            {
              icon: <Server className="h-5 w-5 text-primary/70" />,
              text: "Zero Downtime Operations",
            },
          ],
          header: {
            textWithoutColor: "Unbreakable Security & Reliability",
            subtitle:
              "Your data is fully protected with enterprise-grade security and zero-downtime architecture.",
          },
          link: {
            label:
              "Read Case Study: How a Finance Company Achieved 100% System Uptime",
            href: "/solutions",
          },
          img: (
            <Lock className="h-24 w-24 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
          ),
        },
        {
          icons: [
            {
              icon: <TrendingDown className="h-5 w-5 text-primary/70" />,
              text: "75% Lower TCO",
            },
            {
              icon: <EyeOff className="h-5 w-5 text-primary/70" />,
              text: "No Hidden Fees",
            },
          ],
          header: {
            textWithoutColor: "Eliminate High IT Costs and Hidden Expenses",
            subtitle:
              "Reduce IT overhead by consolidating multiple software tools into one system, cutting down on maintenance, and eliminating unexpected fees.",
          },
          link: {
            label:
              "Read Case Study: How a Mid-Sized Firm Saved 75% on ERP Costs",
            href: "/solutions",
          },
          img: (
            <Banknote className="h-24 w-24 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
          ),
        },
        {
          icons: [
            {
              icon: <UserCheck className="h-5 w-5 text-primary/70" />,
              text: "Minimal Training Required",
            },
            {
              icon: <Smartphone className="h-5 w-5 text-primary/70" />,
              text: "Multi-Device Accessibility",
            },
          ],
          header: {
            textWithoutColor: "Easy to Use, Accessible Anywhere",
            subtitle:
              "Designed for fast adoption, with minimal training needed. Access your ERP from any device, anywhere.",
          },
          link: {
            label:
              "Read Case Study: How a Distributed Team Operated Seamlessly Across Devices",
            href: "/solutions",
          },
          img: (
            <Monitor className="h-24 w-24 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
          ),
        },
        {
          icons: [
            {
              icon: <Lock className="h-5 w-5 text-primary/70" />,
              text: "100% Ownership & Control",
            },
            {
              icon: <Key className="h-5 w-5 text-primary/70" />,
              text: "End-to-End Encryption",
            },
          ],
          header: {
            textWithoutColor: "Data Ownership Without Vendor Lock-In",
            subtitle:
              "Maintain full control over your data and operations with an open system that lets you scale without vendor restrictions.",
          },
          link: {
            label:
              "Read Case Study: How a Legal Firm Retained Full Data Ownership",
            href: "/solutions",
          },
          img: (
            <ShieldCheck className="h-24 w-24 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
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
            formMode: "booking",
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
            formMode: "booking",
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
            formMode: "contact",
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
            formMode: "contact",
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
        textWithoutColor: "Put People First with Smarter HR Operations",
        subtitle:
          "HRMS Cloud helps you reduce manual workload, boost employee engagement, and stay compliant—so your team can focus on what matters most: your people.",
        badge: "Loved by 50+ Growing Teams",
      },
      buttons: [
        {
          label: "Book a Personalized HR Demo",
          // href: "https://nectar.lmnas.com/book_appointment",
          formMode: "booking",
        },
        {
          label: "Explore HRMS Features",
          href: "/products/hrms-cloud",
          variant: "outline",
        },
      ],
      image: {
        src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
        alt: "People-centric HR dashboard and automation",
      },
    },
    problems: {
      header: {
        textWithoutColor: "Still Managing People with Spreadsheets and Silos?",
        subtitle:
          "HR should drive impact, not drown in paperwork. If your processes feel manual and messy, it’s time for a change.",
      },
      card: {
        header: {
          text: "People Ops Pain Points",
        },
        list: [
          {
            text: "Too much admin, too little time.",
            subtitle:
              "HR teams are buried in tasks like leave, payroll, and forms instead of focusing on people.",
          },
          {
            text: "Onboarding feels broken.",
            subtitle:
              "Inconsistent processes leave new hires confused and disengaged from day one.",
          },
          {
            text: "No clear workforce visibility.",
            subtitle:
              "Pulling data is a pain. Reports are outdated or just not there when you need them.",
          },
          {
            text: "Policies exist—but aren’t followed.",
            subtitle:
              "Without automation, it’s tough to ensure compliance across the board.",
          },
          {
            text: "Employee experience is fractured.",
            subtitle:
              "Scattered tools and slow communication lower trust and engagement.",
          },
          {
            text: "Scaling HR feels impossible.",
            subtitle:
              "As you grow, manual HR systems can’t keep up with the pace or complexity.",
          },
        ],
      },
      footer: {
        header: {
          textWithoutColor: "Let HRMS Cloud Do the Heavy Lifting",
          subtitle:
            "Automate the routine, stay compliant, and give HR back its strategic edge.",
        },
        button: [
          {
            label: "Book a Free HR Assessment",
            formMode: "booking",
          },
          {
            label: "See How HR Teams Transformed with HRMS Cloud",
            href: "/solutions",
            variant: "outline",
          },
        ],
      },
    },
    solutions: {
      header: {
        textWithoutColor: "Simplify, Automate & Scale with HRMS Cloud",
        subtitle: "A Connected People Platform That Grows with You",
      },
      cards: [
        {
          header: {
            text: "Start with Unified HR Operations",
            subtitle:
              "Bring payroll, attendance, leave, and employee data into one place—no more spreadsheets or silos.",
          },
          button: [
            {
              label: "Read Case Study",
              href: "/solutions",
            },
          ],
        },
        {
          header: {
            text: "Deliver Seamless Employee Experiences",
            subtitle:
              "From onboarding to self-service, empower your workforce with tools that reduce manual effort and confusion.",
          },
          button: [
            {
              label: "Read Case Study",
              href: "/solutions",
            },
          ],
        },
        {
          header: {
            text: "Gain Visibility & Control",
            subtitle:
              "Track real-time metrics like attrition, performance, and engagement. Stay compliant and agile as you scale.",
          },
          button: [
            {
              label: "Read Case Study",
              href: "/solutions",
            },
          ],
        },
        {
          header: {
            text: "Drive Smarter People Decisions",
            subtitle:
              "Use analytics and automation to align HR with business strategy—from talent development to cost optimization.",
          },
          button: [
            {
              label: "Read Case Study",
              href: "/solutions",
            },
          ],
        },
      ],
      footer: {
        button: [
          {
            label: "Explore HRMS Plans",
            href: "/pricing",
          },
          {
            label: "Talk to a PeopleOps Expert",
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
              text: "80% Reduction in Manual HR Tasks",
            },
            {
              icon: <TrendingUp className="h-5 w-5 text-primary/70" />,
              text: "3x Productivity Boost in Admin Teams",
            },
          ],
          header: {
            textWithoutColor: "Automate the Repetitive, Focus on What Matters",
            subtitle:
              "From attendance to payroll, let HRMS Cloud handle routine tasks so your HR team can focus on people, not paperwork.",
          },
          link: {
            label: "See How One Company Freed Up 100+ HR Hours Monthly",
            href: "/solutions",
          },
          img: (
            <Zap className="h-24 w-24 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
          ),
        },
        {
          icons: [
            {
              icon: <UserCheck className="h-5 w-5 text-primary/70" />,
              text: "70% Decrease in Employee Queries",
            },
            {
              icon: <Smile className="h-5 w-5 text-primary/70" />,
              text: "Higher Engagement Scores",
            },
          ],
          header: {
            textWithoutColor: "Empower Employees with Self-Service Tools",
            subtitle:
              "Let your team access payslips, apply for leave, update their details—without waiting on HR.",
          },
          link: {
            label: "Discover How Self-Service Transformed Employee Experience",
            href: "/solutions",
          },
          img: (
            <Laptop className="h-24 w-24 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
          ),
        },
        {
          icons: [
            {
              icon: <BarChart className="h-5 w-5 text-primary/70" />,
              text: "Real-Time Workforce Insights",
            },
            {
              icon: <PieChart className="h-5 w-5 text-primary/70" />,
              text: "Data-Driven Retention Strategies",
            },
          ],
          header: {
            textWithoutColor: "Make Smarter People Decisions, Instantly",
            subtitle:
              "Track headcount, attrition, performance, and engagement metrics in one place—with insights you can act on.",
          },
          link: {
            label: "Explore How HR Analytics Reduced Attrition by 28%",
            href: "/solutions",
          },
          img: (
            <LineChart className="h-24 w-24 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
          ),
        },
        {
          icons: [
            {
              icon: <ShieldCheck className="h-5 w-5 text-primary/70" />,
              text: "Audit-Ready Compliance",
            },
            {
              icon: <ClipboardCheck className="h-5 w-5 text-primary/70" />,
              text: "Stress-Free Regulation Handling",
            },
          ],
          header: {
            textWithoutColor: "Stay Compliant, Stay Confident",
            subtitle:
              "No more scrambling during audits. HRMS Cloud keeps records, policies, and contracts organized, up-to-date, and accessible.",
          },
          link: {
            label:
              "Read How One Team Passed 3 Consecutive Audits with Zero Errors",
            href: "/solutions",
          },
          img: (
            <FileText className="h-24 w-24 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
          ),
        },
        {
          icons: [
            {
              icon: <Users className="h-5 w-5 text-primary/70" />,
              text: "Faster Hiring Cycles",
            },
            {
              icon: <CheckSquare className="h-5 w-5 text-primary/70" />,
              text: "Centralized Applicant Tracking",
            },
          ],
          header: {
            textWithoutColor: "Simplify Hiring, Amplify Results",
            subtitle:
              "Structure your recruitment pipeline—from job posts to offer letters—and collaborate across teams without chaos.",
          },
          link: {
            label: "Learn How Our Client Cut Time-to-Hire by 35%",
            href: "/solutions",
          },
          img: (
            <Briefcase className="h-24 w-24 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
          ),
        },
        {
          icons: [
            {
              icon: <Star className="h-5 w-5 text-primary/70" />,
              text: "More Consistent Reviews",
            },
            {
              icon: <Award className="h-5 w-5 text-primary/70" />,
              text: "Better Goal Tracking",
            },
          ],
          header: {
            textWithoutColor: "Streamline Performance Management",
            subtitle:
              "Run fair, frequent reviews tied to goals and outcomes—helping employees grow and managers make better decisions.",
          },
          link: {
            label: "Read How This Feature Boosted Manager Feedback Consistency",
            href: "/solutions",
          },
          img: (
            <Target className="h-24 w-24 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
          ),
        },
        {
          icons: [
            {
              icon: <Layers className="h-5 w-5 text-primary/70" />,
              text: "All-in-One System",
            },
            {
              icon: <Link className="h-5 w-5 text-primary/70" />,
              text: "Zero Integration Headaches",
            },
          ],
          header: {
            textWithoutColor: "Unify Your Entire HR Ecosystem",
            subtitle:
              "No more juggling tools for payroll, leave, onboarding, and offboarding. HRMS Cloud connects every dot—seamlessly.",
          },
          link: {
            label: "Discover the ROI of a Unified HR Stack",
            href: "/solutions",
          },
          img: (
            <Component className="h-24 w-24 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
          ),
        },
        {
          icons: [
            {
              icon: <MapPin className="h-5 w-5 text-primary/70" />,
              text: "Geo-Based Compliance",
            },
            {
              icon: <UserCircle className="h-5 w-5 text-primary/70" />,
              text: "Remote-Ready Architecture",
            },
          ],
          header: {
            textWithoutColor: "Built for a Distributed Workforce",
            subtitle:
              "Whether you're remote-first or globally spread, manage teams, time zones, and labor laws—all from one cloud-native system.",
          },
          link: {
            label: "See How a Remote Startup Scaled to 200+ Employees Smoothly",
            href: "/solutions",
          },
          img: (
            <Globe className="h-24 w-24 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
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
            formMode: "contact",
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
            formMode: "booking",
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
            formMode: "contact",
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
            formMode: "contact",
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
  {
    id: "crm-cloud",
    slug: "/crm-cloud",
    title: "CRM Cloud",
    description:
      "Accelerate revenue and strengthen customer relationships with a unified CRM platform for sales and service.",

    hero: {
      heading: {
        textWithoutColor:
          "CRM Cloud: Drive Smarter Sales and Exceptional Service",
        subtitle:
          "Your teams juggle leads, deals, and customer queries—often in silos. CRM Cloud connects every conversation, opportunity, and insight in one intelligent platform so your growth doesn’t get lost in the chaos.",
      },
      buttons: [
        {
          label: "Book an Appointment",
          formMode: "booking",
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
          "Are You Struggling with Sales and Customer Experience Gaps?",
        subtitle:
          "Your CRM should connect the dots, not create more silos. CRM Cloud helps sales and service teams work smarter—together.",
      },
      card: {
        header: {
          text: "Common CRM Challenges",
        },
        list: [
          {
            text: "Your sales funnel is disconnected.",
            subtitle:
              "Leads are lost in handovers. Without a unified funnel, reps don’t know where deals stand or who’s working on what.",
          },
          {
            text: "Customer context gets lost between teams.",
            subtitle:
              "Leads often repeat themselves because reps or support agents don’t have the full history—hurting trust and wasting time.",
          },
          {
            text: "No clear lead assignment or ownership.",
            subtitle:
              "Territories overlap, and responsibilities blur. Leads slip through cracks due to unclear assignment or lack of follow-up.",
          },
          {
            text: "Cross-selling is hard without the right data.",
            subtitle:
              "Reps miss upsell opportunities because product interest or customer behavior isn't tracked or surfaced contextually.",
          },
          {
            text: "Decisions aren’t data-driven.",
            subtitle:
              "Your CRM should guide your next move—but without insights, you're stuck with gut feelings instead of growth strategies.",
          },
          {
            text: "Support teams can’t see the full picture.",
            subtitle:
              "Service agents lack visibility into past sales or interactions, making personalized, proactive support nearly impossible.",
          },
        ],
      },
      footer: {
        header: {
          textWithoutColor: "Let’s Fix This—Together with CRM Cloud",
          subtitle:
            "Our CRM experts will map your pain points to real solutions—backed by automation, visibility, and customer intelligence.",
        },
        button: [
          {
            label: "Book a Demo Now",
            formMode: "contact",
          },
          {
            label: "Read How Teams Solved These Issues",
            href: "/solutions",
            variant: "outline",
          },
        ],
      },
    },
    solutions: {
      header: {
        textWithoutColor: "CRM Cloud – The Revenue Engine for Modern Teams",
        subtitle:
          "Your End-to-End Solution for Sales Acceleration & Customer Delight",
      },
      cards: [
        {
          header: {
            text: "Sales Funnel & Lead Strategy Alignment",
            subtitle:
              "Break down silos and create a unified sales process—track every lead, stage, and interaction across your team in real-time.",
          },
          button: [
            {
              label: "Read Case Study",
              href: "/solutions",
            },
          ],
        },
        {
          header: {
            text: "Frictionless Handoffs & Assignment Automation",
            subtitle:
              "Ensure seamless lead transitions and territory coverage with smart assignment rules and shared context.",
          },
          button: [
            {
              label: "Read Case Study",
              href: "/solutions",
            },
          ],
        },
        {
          header: {
            text: "Customer Service Orchestration",
            subtitle:
              "Centralize queries, automate ticket routing, and empower support teams with a 360° view of every customer.",
          },
          button: [
            {
              label: "Read Case Study",
              href: "/solutions",
            },
          ],
        },
        {
          header: {
            text: "AI Insights for Cross-Selling & Growth",
            subtitle:
              "Leverage AI-powered analytics to identify cross-sell opportunities and make informed decisions at every touchpoint.",
          },
          button: [
            {
              label: "Read Case Study",
              href: "/solutions",
            },
          ],
        },
      ],
      footer: {
        button: [
          {
            label: "Get a Tailored CRM Plan",
            href: "/pricing",
          },
          {
            label: "Explore How CRM Cloud Works",
            href: "/solutions",
            variant: "outline",
          },
        ],
      },
    },
    guide: {
      header: {
        textWithoutColor:
          "Transform the Way You Sell & Support—Unlock Your Full CRM Potential",
      },

      features: [
        {
          icons: [
            {
              icon: <BarChart2 className="h-5 w-5 text-primary/70" />,
              text: "+32% pipeline visibility",
            },
            {
              icon: <Zap className="h-5 w-5 text-primary/70" />,
              text: "40% faster deal closures",
            },
          ],
          header: {
            textWithoutColor: "Unified Sales Funnel with Real-Time Stage Sync",
            subtitle:
              "Bring your entire funnel into one view—updated in real time. Empower your team to act fast, stay aligned, and close deals with confidence, all without jumping between tools.",
          },
          link: {
            label:
              "Read Case Study: How a Scaling Sales Team Cut Deal Time by 40% with a Unified Sales Funnel",
            href: "/solutions",
          },
          img: (
            <MapPin className="h-24 w-24 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
          ),
        },
        {
          icons: [
            {
              icon: <Repeat className="h-5 w-5 text-primary/70" />,
              text: "68% fewer duplicated touches",
            },
            {
              icon: <TrendingUp className="h-5 w-5 text-primary/70" />,
              text: "+24% higher lead-to-win ratio",
            },
          ],
          header: {
            textWithoutColor: "Context-Rich Lead Handoff Across Teams",
            subtitle:
              "Seamlessly transfer lead insights, conversations, and files between SDRs, AEs, or territories. Ensure every rep speaks the customer’s language from day one.",
          },
          link: {
            label:
              "Discover How Better Handoffs Drove Consistent CX for a Remote Sales Team",
            href: "/solutions",
          },
          img: (
            <Users className="h-24 w-24 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
          ),
        },
        {
          icons: [
            {
              icon: <Globe className="h-5 w-5 text-primary/70" />,
              text: "3x faster lead distribution",
            },
            {
              icon: <Activity className="h-5 w-5 text-primary/70" />,
              text: "+19% sales team productivity",
            },
          ],
          header: {
            textWithoutColor: "Smart Territory & Assignment Management",
            subtitle:
              "Auto-assign leads based on region, expertise, or availability. Keep reps focused, eliminate overlaps, and scale growth with clarity and fairness.",
          },
          link: {
            label:
              "See How an Enterprise SaaS Scaled Lead Coverage by Territory Logic",
            href: "/solutions",
          },
          img: (
            <MapPin className="h-24 w-24 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
          ),
        },
        {
          icons: [
            {
              icon: <Lightbulb className="h-5 w-5 text-primary/70" />,
              text: "+22% increase in upsell rate",
            },
            {
              icon: <MessageSquare className="h-5 w-5 text-primary/70" />,
              text: "31% higher sales-qualified conversations",
            },
          ],
          header: {
            textWithoutColor: "AI-Powered Cross-Sell & Upsell Signals",
            subtitle:
              "Uncover hidden revenue from existing leads using AI that detects buying signals, product usage gaps, and past interaction patterns.",
          },
          link: {
            label:
              "Learn How Cross-Sell Intelligence Unlocked $1.2M in Pipeline Value",
            href: "/solutions",
          },
          img: (
            <Brain className="h-24 w-24 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
          ),
        },
        {
          icons: [
            {
              icon: <BarChart className="h-5 w-5 text-primary/70" />,
              text: "48% better forecast accuracy",
            },
            {
              icon: <Clock className="h-5 w-5 text-primary/70" />,
              text: "-35% wasted sales hours",
            },
          ],
          header: {
            textWithoutColor:
              "Sales Insights Dashboard for Data-Driven Decisions",
            subtitle:
              "Real-time dashboards with deal health, activity tracking, and pipeline velocity to guide sales strategies and coaching.",
          },
          link: {
            label:
              "Explore the Sales Ops Turnaround That Improved Forecast Trust",
            href: "/solutions",
          },
          img: (
            <BarChartBig className="h-24 w-24 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
          ),
        },
        {
          icons: [
            {
              icon: <Eye className="h-5 w-5 text-primary/70" />,
              text: "-43% resolution time",
            },
            {
              icon: <CheckCircle className="h-5 w-5 text-primary/70" />,
              text: "+35% first-contact resolution",
            },
          ],
          header: {
            textWithoutColor: "360° Customer View for Agents",
            subtitle:
              "Show agents every interaction across Sales, Marketing, and Support in one place. Say goodbye to ‘Can you repeat that?’ forever.",
          },
          link: {
            label:
              "Read How a Support Team Resolved Tickets 2x Faster with Full Context",
            href: "/solutions",
          },
          img: (
            <Monitor className="h-24 w-24 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
          ),
        },
        {
          icons: [
            {
              icon: <Send className="h-5 w-5 text-primary/70" />,
              text: "45% faster ticket resolution",
            },
            {
              icon: <AlertTriangle className="h-5 w-5 text-primary/70" />,
              text: "-50% SLA breaches",
            },
          ],
          header: {
            textWithoutColor: "Intelligent Ticket Routing & Escalation",
            subtitle:
              "Route tickets to the right agents instantly based on skill, priority, and history. Automate escalations with complete context and clear rules.",
          },
          link: {
            label:
              "Discover the Automation Framework That Transformed Customer Response",
            href: "/solutions",
          },
          img: (
            <Shuffle className="h-24 w-24 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
          ),
        },
        {
          icons: [
            {
              icon: <ShieldCheck className="h-5 w-5 text-primary/70" />,
              text: "28% churn reduction",
            },
            {
              icon: <Sparkles className="h-5 w-5 text-primary/70" />,
              text: "+21% proactive resolutions",
            },
          ],
          header: {
            textWithoutColor:
              "Proactive Support Triggers Based on Customer Health",
            subtitle:
              "Monitor engagement, satisfaction, and usage. Automatically trigger support check-ins or education flows before problems escalate.",
          },
          link: {
            label:
              "See How a SaaS Team Prevented Churn with Smart Proactive Touchpoints",
            href: "/solutions",
          },
          img: (
            <HeartPulse className="h-24 w-24 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
          ),
        },
        {
          icons: [
            {
              icon: <BookOpen className="h-5 w-5 text-primary/70" />,
              text: "35% deflection rate via self-service",
            },
            {
              icon: <FileText className="h-5 w-5 text-primary/70" />,
              text: "+18% agent productivity",
            },
          ],
          header: {
            textWithoutColor: "Integrated Knowledge Base + Smart Replies",
            subtitle:
              "Equip your customers and agents with AI-suggested answers, embedded help articles, and macros that adapt to each scenario.",
          },
          link: {
            label:
              "Learn How Smart Replies Reduced Support Volume by 37% in 3 Months",
            href: "/solutions",
          },
          img: (
            <BookMarked className="h-24 w-24 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
          ),
        },
        {
          icons: [
            {
              icon: <Smile className="h-5 w-5 text-primary/70" />,
              text: "+47% feedback collection rate",
            },
            {
              icon: <LineChart className="h-5 w-5 text-primary/70" />,
              text: "Real-time service sentiment tracking",
            },
          ],
          header: {
            textWithoutColor: "NPS, CSAT, and Sentiment Analytics",
            subtitle:
              "Capture, analyze, and act on customer feedback after every interaction. Turn every experience into a chance to improve.",
          },
          link: {
            label:
              "How Feedback Loops Helped a B2B Team Boost NPS by 20 Points",
            href: "/solutions",
          },
          img: (
            <Gauge className="h-24 w-24 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
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
            formMode: "booking",
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
        textWithoutColor: "CRM Cloud in Action: Real Results, Real Growth",
      },
      cards: [
        {
          header: {
            subtitle:
              "With CRM Cloud, we’ve eliminated lead leakage and improved conversion rates by 45%. The unified funnel gives our sales team full visibility and better coordination.",
          },
          avatar: {
            src: "/svg",
            alt: "AR",
          },
          nameAndPlace: {
            name: "Aarav Reddy",
            place: "VP Sales, SaaS Startup",
          },
          link: [
            {
              label: "Boosted Conversions by 45%",
            },
          ],
        },
        {
          header: {
            subtitle:
              "Our support resolution time dropped by 35%, thanks to the automated workflows and customer 360° view in CRM Cloud. We can finally track and resolve issues proactively.",
          },
          avatar: {
            src: "/svg",
            alt: "MP",
          },
          nameAndPlace: {
            name: "Megha Patel",
            place: "Head of Customer Experience, FinTech Firm",
          },
          link: [
            {
              label: "35% Faster Issue Resolution",
            },
          ],
        },
      ],
      items: [
        {
          header: {
            text: "45%",
            subtitle: "More Lead Conversions",
          },
        },
        {
          header: {
            text: "35%",
            subtitle: "Faster Support Response",
          },
        },
        {
          header: {
            text: "20%",
            subtitle: "Revenue Uplift via Cross-Selling",
          },
        },
        {
          header: {
            text: "100%",
            subtitle: "Unified Sales + Service View",
          },
        },
      ],
      footer: {
        header: {
          text: "Want proof? See how CRM Cloud drives pipeline clarity and customer delight.",
          subtitle: "Explore Our CRM Case Studies!",
        },
        button: [
          {
            label: "Book Your Free CRM Consultation",
            formMode: "booking",
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
        textWithoutColor: "Flexible CRM Pricing Built Around Your Pipeline",
        subtitle:
          "CRM Cloud adapts to the size of your team, the complexity of your sales and service operations, and the growth stage you're in. No one-size-fits-all here—only tailored value.",
        badge: "Limited Time Offer",
      },
      items: {
        header: {
          textWithoutColor: "Get a Custom CRM Quote Today",
          subtitle: "Only for the next 10 teams that sign up this month",
          badge: " Offer ends in: 5 days",
        },
        points: [
          {
            header: {
              text: "No Surprise Charges",
              subtitle:
                "One clear price—everything you need, upfront and honest",
            },
          },
          {
            header: {
              text: "Grow-As-You-Go Plans",
              subtitle: "Add users or modules when your team is ready",
            },
          },
          {
            header: {
              text: "Tailored Sales & Service Packages",
              subtitle: "Choose only the features your team will actually use",
            },
          },
          {
            header: {
              text: "Free Onboarding & Data Import",
              subtitle:
                "We’ll help migrate your pipeline and contacts without hassle or cost",
            },
          },
        ],
      },
      footer: {
        header: {
          text: "Ready to find your ideal plan? Let’s talk growth.",
          subtitle: "Only 3 personalized consultations left this month",
        },
        button: [
          {
            label: "Get a Custom CRM Quote",
            formMode: "contact",
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
        textWithoutColor: "Don't Miss Out—Start Closing Smarter Today!",
        subtitle:
          "While others chase leads blindly, you could be building meaningful pipelines and memorable customer moments with CRM Cloud.",
        badge: "Limited Availability",
      },
      item: {
        header: {
          textWithoutColor: "Premium Onboarding for Sales & Service Teams",
          subtitle:
            "Sign up now and unlock our expert-guided onboarding package (valued at $2,500) absolutely FREE—for a limited time.",
        },
      },
      footer: {
        header: {
          text: "Only 5 CRM onboarding slots remaining this month",
          subtitle:
            "Join 500+ forward-thinking teams already streamlining sales and delighting customers with CRM Cloud",
        },
        button: [
          {
            label: "Get a Personalized Demo Today",
            formMode: "contact",
          },
          {
            label: "See How Teams Thrive with CRM Cloud",
            href: "/solutions",
            variant: "outline",
          },
        ],
      },
    },
  },
  {
    id: "cpq-cloud",
    slug: "/cpq-cloud",
    title: "CPQ Cloud",
    description:
      "Deliver fast, accurate, and policy-aligned quotes with a centralized CPQ system built for revenue efficiency and margin protection.",

    hero: {
      heading: {
        textWithoutColor:
          "CPQ Cloud: Faster Quotes, Protected Margins, Zero Errors",
        subtitle:
          "If every quote feels like a bottleneck, it’s time to rethink the process. CPQ Cloud brings structure, speed, and control—so your team spends less time fixing and more time closing.",
      },
      buttons: [
        {
          label: "Book a Demo",
          formMode: "booking",
          variant: "default",
        },
        {
          label: "See CPQ in Action",
          href: "/solutions",
          variant: "outline",
        },
      ],
      image: {
        src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
        alt: "cpq-hero-image",
      },
    },
    problems: {
      header: {
        textWithoutColor: "Struggling with Quoting Chaos and Margin Leaks?",
        subtitle:
          "Your pricing shouldn’t be guesswork. CPQ Cloud helps sales teams move fast while protecting revenue integrity and operational alignment.",
      },
      card: {
        header: {
          text: "Common CPQ Challenges",
        },
        list: [
          {
            text: "Manual quotes slow things down.",
            subtitle:
              "Sales teams waste hours building quotes from scratch—errors creep in, and speed goes out the window.",
          },
          {
            text: "Inconsistent pricing hurts your brand and margins.",
            subtitle:
              "Rogue discounts and outdated price books lead to revenue leaks and deal-by-deal chaos.",
          },
          {
            text: "No connection between sales and ops.",
            subtitle:
              "Sales promises what ops can’t deliver. You need accurate inventory, bundling, and product logic built in.",
          },
          {
            text: "Approval processes are frustrating and slow.",
            subtitle:
              "Leadership spends too much time manually checking quotes for compliance and policy alignment.",
          },
          {
            text: "Cross-sell and upsell opportunities are missed.",
            subtitle:
              "Without data-powered suggestions, salespeople miss high-margin opportunities in every deal.",
          },
        ],
      },
      footer: {
        header: {
          textWithoutColor:
            "See How High-Growth Teams Master the Quote-to-Cash Process",
          subtitle:
            "Let’s fix the quoting bottlenecks and protect every dollar of revenue. It starts with a demo.",
        },
        button: [
          {
            label: "Book a CPQ Demo Now",
            formMode: "contact",
          },
          {
            label: "See How Businesses Solved These Issues",
            href: "/solutions",
            variant: "outline",
          },
        ],
      },
    },
    solutions: {
      header: {
        textWithoutColor:
          "Meet CPQ Cloud — Built for Speed, Precision & Control",
        subtitle:
          "From slow approvals to pricing errors, we’ve fixed the quoting chaos.",
      },
      cards: [
        {
          header: {
            text: "Centralized Pricing & Policy Governance",
            subtitle:
              "Say goodbye to rogue discounts. Lock in consistent pricing, enforce approval flows, and give sales teams a rule-based system that protects margins.",
          },
          button: [
            {
              label: "Read Case Study: How a Tech Firm Stopped Revenue Leaks",
              href: "/solutions",
            },
          ],
        },
        {
          header: {
            text: "Faster, Error-Free Quoting Workflow",
            subtitle:
              "Generate accurate quotes in minutes, not hours. Cut down manual entry and eliminate errors with product logic, bundling, and real-time configuration.",
          },
          button: [
            {
              label:
                "Read Case Study: How a Manufacturer Cut Quote Time by 70%",
              href: "/solutions",
            },
          ],
        },
        {
          header: {
            text: "Sales & Operations in Sync",
            subtitle:
              "Integrate with ERP, CRM, and inventory systems—ensuring what’s quoted is actually what’s deliverable. Remove handoff friction between departments.",
          },
          button: [
            {
              label: "Read Case Study: Streamlining Sales-Ops for a B2B Giant",
              href: "/solutions",
            },
          ],
        },
        {
          header: {
            text: "Smarter Upsell & Cross-Sell Recommendations",
            subtitle:
              "Surface smart suggestions at the quote level using historical data and customer behavior—turn every quote into a growth opportunity.",
          },
          button: [
            {
              label: "Read Case Study: +32% Deal Size with AI-Powered Selling",
              href: "/solutions",
            },
          ],
        },
      ],
      footer: {
        button: [
          {
            label: "Get a Personalized CPQ Demo",
            formMode: "booking",
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
          "Transform the Way You Quote & Close—Unlock Your Full Revenue Potential",
      },

      features: [
        {
          icons: [
            {
              icon: <ShieldCheck className="h-5 w-5 text-primary/70" />,
              text: "Protected Margins on Every Deal",
            },
            {
              icon: <TrendingUp className="h-5 w-5 text-primary/70" />,
              text: "90% Fewer Configuration Errors",
            },
          ],
          header: {
            textWithoutColor: "Guided Configuration with Built-In Compliance",
            subtitle:
              "Only valid combinations, every time. Ensure product integrity and price discipline across every quote—no more over-promises or margin bleed.",
          },
          link: {
            label:
              "Read Case Study: How a Tech Firm Cut Configuration Errors by 90%",
            href: "/solutions",
          },
          img: (
            <Settings2 className="h-24 w-24 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
          ),
        },
        {
          icons: [
            {
              icon: <Clock className="h-5 w-5 text-primary/70" />,
              text: "3x Faster Quote Turnaround",
            },
            {
              icon: <FileText className="h-5 w-5 text-primary/70" />,
              text: "Error-Free Proposals",
            },
          ],
          header: {
            textWithoutColor: "Instant, Branded, Error-Free Quotes",
            subtitle:
              "Auto-generate polished quotes in minutes—fully branded, legally aligned, and pricing-approved. Your sales team moves fast without missing details.",
          },
          link: {
            label:
              "Read Case Study: How a SaaS Provider Reduced Quote Time from 3 Days to 1 Hour",
            href: "/solutions",
          },
          img: (
            <FileCheck2 className="h-24 w-24 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
          ),
        },
        {
          icons: [
            {
              icon: <Send className="h-5 w-5 text-primary/70" />,
              text: "60% Faster Deal Approvals",
            },
            {
              icon: <Shield className="h-5 w-5 text-primary/70" />,
              text: "Zero Policy Breaches",
            },
          ],
          header: {
            textWithoutColor: "Automated Approvals with Smart Routing",
            subtitle:
              "Deals below threshold fly through. Higher-risk quotes get routed for quick management review—speed without compromise.",
          },
          link: {
            label: "Read Case Study: How a Supplier Cut Approval Time by 70%",
            href: "/solutions",
          },
          img: (
            <Workflow className="h-24 w-24 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
          ),
        },
        {
          icons: [
            {
              icon: <DollarSign className="h-5 w-5 text-primary/70" />,
              text: "Live Deal Margin Visibility",
            },
            {
              icon: <Ban className="h-5 w-5 text-primary/70" />,
              text: "Rogue Discount Protection",
            },
          ],
          header: {
            textWithoutColor: "Discount Governance & Margin Intelligence",
            subtitle:
              "Pre-set limits. Role-based pricing logic. Deal scoring and profitability tracking—so reps win without giving away too much.",
          },
          link: {
            label: "Read Case Study: How a B2B Brand Stopped Margin Erosion",
            href: "/solutions",
          },
          img: (
            <BadgeDollarSign className="h-24 w-24 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
          ),
        },
        {
          icons: [
            {
              icon: <Link className="h-5 w-5 text-primary/70" />,
              text: "CRM + ERP + Billing Integration",
            },
            {
              icon: <Repeat className="h-5 w-5 text-primary/70" />,
              text: "Zero Manual Handoffs",
            },
          ],
          header: {
            textWithoutColor: "Seamless Integration Across the Revenue Stack",
            subtitle:
              "Quotes sync across CRM, ERP, and billing tools for a unified quote-to-cash experience. No delays, no data re-entry, no missed steps.",
          },
          link: {
            label:
              "Read Case Study: How a Manufacturer Eliminated Manual Handoffs",
            href: "/solutions",
          },
          img: (
            <Link2 className="h-24 w-24 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
          ),
        },
        {
          icons: [
            {
              icon: <BarChart className="h-5 w-5 text-primary/70" />,
              text: "Forecast Accuracy Improved by 40%",
            },
            {
              icon: <LineChart className="h-5 w-5 text-primary/70" />,
              text: "Data-Driven Deal Coaching",
            },
          ],
          header: {
            textWithoutColor: "Real-Time Deal Insights & Forecast Accuracy",
            subtitle:
              "Monitor quote velocity, win rates, and discount trends. Equip leaders with insights to drive smarter forecasts and sales performance coaching.",
          },
          link: {
            label:
              "Read Case Study: How a Software Firm Boosted Forecast Accuracy by 40%",
            href: "/solutions",
          },
          img: (
            <AreaChart className="h-24 w-24 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
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
            formMode: "booking",
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
        textWithoutColor: "Real Success with CPQ Cloud",
      },
      cards: [
        {
          header: {
            subtitle:
              "CPQ Cloud completely changed how we quote. Our average quote time dropped from hours to minutes, and we’ve seen a significant boost in deal closure rates.",
          },
          avatar: {
            src: "/avatars/alex-taylor.svg",
            alt: "AT",
          },
          nameAndPlace: {
            name: "Alex Taylor",
            place: "VP of Sales, Tech Solutions Inc.",
          },
          link: [
            {
              label: "70% Faster Quote Turnaround",
            },
          ],
        },
        {
          header: {
            subtitle:
              "We eliminated rogue discounting entirely. Our pricing is now controlled, and leadership has full visibility into every quote being sent out.",
          },
          avatar: {
            src: "/avatars/nina-williams.svg",
            alt: "NW",
          },
          nameAndPlace: {
            name: "Nina Williams",
            place: "CRO, Global Equipment Corp.",
          },
          link: [
            {
              label: "100% Discount Policy Compliance",
            },
          ],
        },
      ],
      items: [
        {
          header: {
            text: "70%",
            subtitle: "Faster Quote Turnaround",
          },
        },
        {
          header: {
            text: "100%",
            subtitle: "Discount Compliance",
          },
        },
        {
          header: {
            text: "30%",
            subtitle: "Higher Win Rates",
          },
        },
        {
          header: {
            text: "50%",
            subtitle: "Reduction in Approval Time",
          },
        },
      ],
      footer: {
        header: {
          text: "Want proof? See how CPQ Cloud helped companies like yours protect margins and close deals faster.",
          subtitle: "Explore Case Studies!",
        },
        button: [
          {
            label: "Book Your CPQ Consultation",
            formMode: "booking",
          },
          {
            label: "Explore CPQ Success Stories",
            href: "/solutions",
            variant: "outline",
          },
        ],
      },
    },
    pricing: {
      header: {
        textWithoutColor: "Flexible Pricing Built for Revenue Teams",
        subtitle:
          "Every sales process is unique. CPQ Cloud adapts to your quoting complexity and growth stage—with transparent, scalable pricing that protects your margins.",
        badge: "Custom Plans Available",
      },
      items: {
        header: {
          textWithoutColor: "Tailored to Fit Your Sales Workflow",
          subtitle: "Only for the next 10 companies to sign up this quarter",
          badge: "Offer ends in: 7 days",
        },
        points: [
          {
            header: {
              text: "No Surprise Costs",
              subtitle:
                "Get clear pricing with everything included—no hidden fees",
            },
          },
          {
            header: {
              text: "Scales with You",
              subtitle:
                "From startups to global teams, CPQ Cloud grows with your complexity",
            },
          },
          {
            header: {
              text: "Smart Rules Engine",
              subtitle:
                "Built-in pricing logic and approval workflows, tailored to your policies",
            },
          },
          {
            header: {
              text: "Fast Implementation",
              subtitle: "Go live in weeks—not months—with guided onboarding",
            },
          },
        ],
      },
      footer: {
        header: {
          text: "Let’s find a pricing model that fits your sales strategy",
          subtitle: "Only 4 onboarding spots remain this month",
        },
        button: [
          {
            label: "Get Your Custom Quote",
            formMode: "contact",
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
        textWithoutColor: "Start Quoting Smarter Today",
        subtitle:
          "While others struggle with spreadsheets and pricing errors, you could be closing faster and protecting margins with CPQ Cloud.",
        badge: "Limited Onboarding Slots",
      },
      item: {
        header: {
          textWithoutColor: "Free CPQ Onboarding Package",
          subtitle:
            "Sign up now and get our premium implementation support (valued at $3,000) completely FREE. Only for a limited number of teams.",
        },
      },
      footer: {
        header: {
          text: "Only 3 onboarding packages left this month",
          subtitle:
            "Join 100+ revenue teams that transformed their sales cycles with CPQ Cloud",
        },
        button: [
          {
            label: "Get a Personalized Demo",
            formMode: "contact",
          },
          {
            label: "See CPQ in Action",
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
    <></>
    // <ProductsComp idProduct={Product as Tproduct} />
  );
}