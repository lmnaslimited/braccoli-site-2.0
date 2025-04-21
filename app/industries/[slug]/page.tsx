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
  FileText,
  FileWarning,
  LayoutGrid,
  Package,
  PhoneCall,
  Play,
  Route,
  Settings,
  ShoppingCart,
  Store,
  Tag,
  TrendingUp,
  Truck,
  UserCheck,
  Users,
  Map,
  Cpu,
  RefreshCw,
  Home,
  Activity,
  CheckCircle,
  Clipboard,
  PackageSearch,
  Warehouse,
  CalendarCheck,
  Barcode,
  ClipboardCheck,
  Ruler,
  Gift,
  LineChart,
  RotateCcw,
  Globe,
  MapPin,
  Navigation,
  User,
} from "lucide-react";
import IndustryComp from "../industry";
import { clTransformerFactory, ITransformer, TindustriesPageSource, TindustriesPageTarget } from "@repo/middleware";
const PageSlugs = [
  {
    id: "manufacturing",
    slug: "/manufacturing",
    title: "LENS ERP for Manufacturing",
    description:
      "Streamline your manufacturing processes with AI-powered ERP solutions.",
    hero: {
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
          item: "50% Faster Reporting",
        },
        {
          icon: <ArrowRight className="h-5 w-5 text-primary/80" />,
          item: "90% Defect Reduction",
        },
      ],
      buttons: [
        {
          label: "Ask for Demo",
          // href: "https://demolens.lmnas.com/#login",
          formMode: "contact",
          variant: "default",
          icon: <ArrowRight className="size-6" />,
          iconPosition: "after",
          size: "lg",
        },
        {
          label: "Book a Free Consultation",
          // href: "https://nectar.lmnas.com/book_appointment",
          formMode: "booking",
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
    },
    problems: {
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
            // href: "https://nectar.lmnas.com/book_appointment",
            formMode: "booking",
            variant: "outline",
            icon: <Calendar className="size-5" />,
            iconPosition: "before",
            size: "lg",
          },
        ],
      },
    },
    features: {
      header: {
        textWithoutColor: "LENS ERP Suite: Streamline Your Manufacturing",
        subtitle:
          "Discover how our comprehensive ERP solution can transform your manufacturing operations with these powerful features.",
      },

      feature: [
        {
          header: {
            textWithoutColor: "Master Production with AI-Driven Planning",
            subtitle:
              "Slash material waste and optimize resource flow with predictive scheduling and intelligent allocation.",
          },
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "Production Planning Dashboard",
            position: "right",
          },
          card: {
            header: {
              text: "Global Manufacturer Slashes Waste by 40% with AI-Powered Scheduling",
              subtitle:
                "A top manufacturer revolutionized production by leveraging AI to cut raw material waste, boost efficiency, and drive cost savings.",
            },
            button: [
              {
                label: "Read Case Study",
                href: "/solutions",
              },
            ],
          },
        },
        {
          header: {
            textWithoutColor:
              "Take Full Control of Your Inventory – in Real Time",
            subtitle:
              "Eliminate stockouts and overages with automated tracking, instant visibility, and proactive replenishment.",
          },
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "Inventory Management Interface",
            position: "left",
          },
          card: {
            header: {
              text: "Reduces Inventory Losses by 50% with Smart Tracking",
              subtitle:
                "A leading automotive company overhauled its inventory process, cutting losses in half and ensuring seamless production flow.",
            },
            button: [
              {
                label: "Read Case Study",
                href: "/solutions",
              },
            ],
          },
        },
        {
          header: {
            textWithoutColor:
              "Unlock Maximum Uptime with Smart Production Execution",
            subtitle:
              "Prevent costly delays with real-time workflow tracking, automated bottleneck detection, and intelligent downtime analysis.",
          },
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "Production Execution Dashboard",
            position: "right",
          },
          card: {
            header: {
              text: "Electronics Giant Increases Uptime by 35% with AI-Driven Monitoring",
              subtitle:
                "A major electronics firm improved efficiency by tracking downtime causes, optimizing workflows, and cutting production delays.",
            },
            button: [
              {
                label: "Read Case Study",
                href: "/solutions",
              },
            ],
          },
        },
        {
          header: {
            textWithoutColor:
              "Revolutionize Quality Control with Smart Inspections",
            subtitle:
              "Detect defects before they happen with automated inspections, AI-driven anomaly detection, and predictive maintenance.",
          },
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "Quality Control Inspection",
            position: "left",
          },
          card: {
            header: {
              text: "Auto Supplier Achieves 99.5% Quality Compliance with AI-Powered Inspection",
              subtitle:
                "A top-tier auto parts manufacturer slashed defects by 90%, cut rework costs, and exceeded Industry compliance standards.",
            },
            button: [
              {
                label: "Read Case Study",
                href: "/solutions",
              },
            ],
          },
        },
        {
          header: {
            textWithoutColor:
              "Supercharge Deliveries with AI-Optimized Logistics",
            subtitle:
              "Improve delivery times, optimize routes, and reduce costs with intelligent fleet and demand-based scheduling.",
          },
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "Delivery Optimization",
            position: "right",
          },
          card: {
            header: {
              text: "Logistics Leader Boosts On-Time Deliveries by 40% with AI Routing",
              subtitle:
                "A global distributor streamlined fleet operations, slashed fuel costs, and dramatically improved service reliability.",
            },
            button: [
              {
                label: "Read Case Study",
                href: "/solutions",
              },
            ],
          },
        },
        {
          header: {
            textWithoutColor: "End-to-End Project Management",
            subtitle:
              "Seamlessly connect production, inventory, quality, and logistics in one powerful platform for total control.",
          },
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "Project Management Dashboard",
            position: "left",
          },
          card: {
            header: {
              text: "Industrial Manufacturer Boosts Efficiency by 45% with Connected Workflows",
              subtitle:
                "A leading manufacturer integrated all operations, reducing complexity, boosting productivity, and accelerating delivery.",
            },
            button: [
              {
                label: "Read Case Study",
                href: "/solutions",
              },
            ],
          },
        },
      ],
    },
    allFeature: {
      header: {
        textWithoutColor: "Explore All Features",
      },

      cards: [
        {
          header: {
            text: "Bill of Materials (BOM)",
            subtitle:
              "Reduce errors in assembly by 60% with structured BOM tracking.",
          },
          image: {
            svg: <ClipboardList className="h-10 w-10 mx-6 mt-4" />,
            alt: "clipboard",
          },
          category: "production",
          link: [{ label: "Learn More", href: "/solutions" }],
        },
        {
          header: {
            text: "Material Resource Planning (MRP)",
            subtitle: "Cut procurement delays by 40% with automated planning.",
          },
          image: {
            svg: <Factory className="h-10 w-10 mx-6 mt-4" />,
            alt: "factory",
          },
          category: "production",
          link: [{ label: "Learn More", href: "/solutions" }],
        },
        {
          header: {
            text: "Work Order Management",
            subtitle: "Increase efficiency by 30% with automated work orders.",
          },
          image: {
            svg: <ClipboardList className="h-10 w-10 mx-6 mt-4" />,
            alt: "clipboard",
          },
          category: "production",
          link: [{ label: "Learn More", href: "/solutions" }],
        },
        {
          header: {
            text: "Shop Floor Control",
            subtitle: "Minimize downtime by 35% with real-time monitoring.",
          },
          image: {
            svg: <Cpu className="h-10 w-10 mx-6 mt-4" />,
            alt: "cpu",
          },
          category: "production",
          link: [{ label: "Learn More", href: "/solutions" }],
        },
        {
          header: {
            text: "Production Scheduling",
            subtitle:
              "Improve on-time delivery by 45% with dynamic scheduling.",
          },
          image: {
            svg: <Calendar className="h-10 w-10 mx-6 mt-4" />,
            alt: "calendar",
          },
          category: "production",
          link: [{ label: "Learn More", href: "/solutions" }],
        },
        {
          header: {
            text: "Item Variants",
            subtitle:
              "Reduce stock mismatches by 50% with centralized tracking.",
          },
          image: {
            svg: <LayoutGrid className="h-10 w-10 mx-6 mt-4" />,
            alt: "layout-grid",
          },
          category: "inventory",
          link: [{ label: "Learn More", href: "/solutions" }],
        },
        {
          header: {
            text: "Inventory Tracking",
            subtitle:
              "Lower lost inventory cases by 65% with real-time tracking.",
          },
          image: {
            svg: <Boxes className="h-10 w-10 mx-6 mt-4" />,
            alt: "boxes",
          },
          category: "inventory",
          link: [{ label: "Learn More", href: "/solutions" }],
        },
        {
          header: {
            text: "Automated Reordering",
            subtitle:
              "Reduce emergency procurement costs by 40% with automation.",
          },
          image: {
            svg: <RefreshCw className="h-10 w-10 mx-6 mt-4" />,
            alt: "refresh",
          },
          category: "inventory",
          link: [{ label: "Learn More", href: "/solutions" }],
        },
        {
          header: {
            text: "Warehouse Optimization",
            subtitle:
              "Increase picking speed by 50% with AI-driven automation.",
          },
          image: {
            svg: <Home className="h-10 w-10 mx-6 mt-4" />,
            alt: "home",
          },
          category: "inventory",
          link: [{ label: "Learn More", href: "/solutions" }],
        },
        {
          header: {
            text: "Procurement Management",
            subtitle: "Reduce purchasing cycle time by 50% with automation.",
          },
          image: {
            svg: <ShoppingCart className="h-10 w-10 mx-6 mt-4" />,
            alt: "shoppingcart",
          },
          category: "order/delivery",
          link: [{ label: "Learn More", href: "/solutions" }],
        },
        {
          header: {
            text: "Logistics Management",
            subtitle: "Cut shipping costs by 20% with optimized logistics.",
          },
          image: {
            svg: <Truck className="h-10 w-10 mx-6 mt-4" />,
            alt: "truck",
          },
          category: "order/delivery",
          link: [{ label: "Learn More", href: "/solutions" }],
        },
        {
          header: {
            text: "Demand Forecasting",
            subtitle:
              "Improve stock availability by 30% with predictive analytics.",
          },
          image: {
            svg: <Activity className="h-10 w-10 mx-6 mt-4" />,
            alt: "activity",
          },
          category: "order/delivery",
          link: [{ label: "Learn More", href: "/solutions" }],
        },
        {
          header: {
            text: "Production Planning Report",
            subtitle: "Reduce idle time by 30% with real-time insights.",
          },
          image: {
            svg: <BarChart className="h-10 w-10 mx-6 mt-4" />,
            alt: "barchart",
          },
          category: "reports",
          link: [{ label: "Learn More", href: "/solutions" }],
        },
        {
          header: {
            text: "Work Order Summary",
            subtitle:
              "Increase work order completion by 30% with live tracking.",
          },
          image: {
            svg: <FileText className="h-10 w-10 mx-6 mt-4" />,
            alt: "file",
          },
          category: "reports",
          link: [{ label: "Learn More", href: "/solutions" }],
        },
        {
          header: {
            text: "Job Card Summary",
            subtitle: "Improve workforce productivity by 25% with tracking.",
          },
          image: {
            svg: <Clipboard className="h-10 w-10 mx-6 mt-4" />,
            alt: "clipboard",
          },
          category: "reports",
          link: [{ label: "Learn More", href: "/solutions" }],
        },
        {
          header: {
            text: "Quality Inspection Summary",
            subtitle: "Reduce defect rates by 50% with automated reports.",
          },
          image: {
            svg: <CheckCircle className="h-10 w-10 mx-6 mt-4" />,
            alt: "check-circle",
          },
          category: "reports",
          link: [{ label: "Learn More", href: "/solutions" }],
        },
      ],
    },
    cta: {
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
        button: {
          label: "Book Your Free Consultation",
          // href: "https://nectar.lmnas.com/book_appointment",
          formMode: "booking"
        },
      },
    },
    successStory: {
      header: {
        textWithoutColor: "Success Stories",
        subtitle:
          "Explore how businesses across different industries achieved breakthrough results with our solutions.",
      },
      cards: [
        {
          header: {
            text: "Manufacturing Giant Cuts Manual Work 72%",
            subtitle:
              "Automated planning boosts efficiency, eliminating thousands of wasted work hours annually.",
          },
          category: "production planning",
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "image",
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
            text: "Optimized Scheduling Reduces Lead Time 50%",
            subtitle:
              "Faster workflows eliminate bottlenecks, ensuring production stays on track without delays.",
          },
          category: "production planning",
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "image",
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
            text: "Factory Prevents Stockouts, Cuts Costs 40%",
            subtitle:
              "Real-time inventory tracking minimizes excess stock, optimizing warehouse space effectively.",
          },
          category: "inventory management",
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "image",
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
            text: "Smart Inventory Management Reduces Waste 30%",
            subtitle:
              "Better material tracking prevents losses, improving cost efficiency across manufacturing processes.",
          },
          category: "inventory management",
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "image",
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
            text: "Quality Control Lowers Defects by 60%",
            subtitle:
              "Automated inspections reduce rework, ensuring higher product quality and lower failure rates.",
          },
          category: "quality control",
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "image",
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
            text: "Precision Checks Reduce Recalls by 45%",
            subtitle:
              "Consistent quality assurance processes improve compliance, minimizing costly product returns.",
          },
          category: "quality control",
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "image",
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
            text: "Live Reports Improve Efficiency by 35%",
            subtitle:
              "Real-time analytics provide key insights, streamlining production workflows for better output.",
          },
          category: "reports",
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "image",
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
            text: "Work Order Insights Boost Output 25%",
            subtitle:
              "Data-driven analysis enhances scheduling, ensuring resources are utilized at peak performance.",
          },
          category: "reports",
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "image",
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
        title: "Could This Be Your Business Story Too?",
        button: {
          label: " Book Your Free Consultation",
          // href: "https://nectar.lmnas.com/book_appointment",
          formMode: "booking"
        },
      },
    },
  },
  {
    id: "retail",
    slug: "/retail",
    title: "LENS ERP for Retail",
    description:
      "Optimize inventory, enhance customer experience, and drive higher sales with AI-powered ERP solutions.",
    hero: {
      heading: {
        textWithoutColor: "Transform Your Retail Business with",
        text: "AI-Powered ERP",
        subtitle:
          "Optimize inventory, enhance customer experience, and drive higher sales—all with LENS ERP Suite.",
        badge: "LENS ERP Suite",
      },
      items: [
        {
          icon: <ShoppingCart className="h-5 w-5 text-primary/80" />,
          item: "60% Faster Checkout Speeds",
        },
        {
          icon: <BarChart3 className="h-5 w-5 text-primary/80" />,
          item: "25% Increase in Repeat Customers",
        },
        {
          icon: <ArrowRight className="h-5 w-5 text-primary/80" />,
          item: "50% Reduction in Stockouts",
        },
      ],
      buttons: [
        {
          label: "Ask for Demo",
          // href: "https://demolens.lmnas.com/#login",
          formMode: "contact",
          variant: "default",
          icon: <ArrowRight className="size-6" />,
          iconPosition: "after",
          size: "lg",
        },
        {
          label: "Book a Free Consultation",
          // href: "https://nectar.lmnas.com/book_appointment",
          formMode: "booking",
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
    },
    problems: {
      header: {
        textWithoutColor: "Are Manual Processes Hurting Your",
        text: "Retail Business and Profitability?",
        subtitle:
          "Retailers face unique challenges that traditional systems can't solve. Our ERP solution addresses these pain points directly.",
      },
      items: [
        {
          icon: <Boxes className="h-6 w-6 text-primary/70" />,
          question: "Inconsistent inventory leading to lost sales",
          answer:
            "Manual stock tracking results in frequent stockouts or overstock, frustrating customers and reducing profitability.",
        },
        {
          icon: <BarChart3 className="h-6 w-6 text-primary/70" />,
          question: "Lack of real-time sales visibility across stores",
          answer:
            "Without centralized tracking, it's difficult to manage multiple locations and keep inventory balanced.",
        },
        {
          icon: <Truck className="h-6 w-6 text-primary/70" />,
          question: "Manual order fulfillment causing delays",
          answer:
            "Inefficient processes lead to slow order processing and missed delivery windows, affecting customer satisfaction.",
        },
        {
          icon: <Store className="h-6 w-6 text-primary/70" />,
          question: "Siloed POS, e-commerce, and warehouse systems",
          answer:
            "Disconnected platforms make omnichannel retailing complex, causing errors and inefficiencies.",
        },
        {
          icon: <UserCheck className="h-6 w-6 text-primary/70" />,
          question: "Difficulty in personalizing customer experiences",
          answer:
            "Without AI-driven insights, it's hard to tailor promotions and recommendations to individual shoppers.",
        },
        {
          icon: <TrendingUp className="h-6 w-6 text-primary/70" />,
          question: "Slow response to market trends and demand shifts",
          answer:
            "Retailers struggle to quickly adapt to changing consumer behavior and seasonal trends without data-driven forecasting.",
        },
      ],
      footer: {
        header: {
          textWithoutColor: "Ready to Solve These Retail Challenges?",
        },
        points: {
          title: "Book a free consultation with our retail ERP specialists",
        },
        buttons: [
          {
            label: "Book a Free Consultation Now",
            // href: "https://nectar.lmnas.com/book_appointment",
            formMode: "booking",
            variant: "outline",
            icon: <Calendar className="size-5" />,
            iconPosition: "before",
            size: "lg",
          },
        ],
      },
    },
    features: {
      header: {
        textWithoutColor: "LENS ERP Suite: Transform Your Retail Business",
        subtitle:
          "Discover how our advanced ERP solution can revolutionize your retail operations with these key features.",
      },

      feature: [
        {
          header: {
            textWithoutColor: "Unlock a Seamless Omnichannel Retail Revolution",
            subtitle:
              "Seamlessly integrate POS, e-commerce, and inventory for a smooth shopping experience across all platforms.",
          },
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "Omnichannel Experience",
            position: "left",
          },
          card: {
            header: {
              text: "National Retail Chain Increases Online Sales by 65%",
              subtitle:
                "A major retailer streamlined their online and offline operations for maximum efficiency.",
            },
            button: [
              {
                label: "Read Case Study",
                href: "/case-studies/omnichannel-retail",
              },
            ],
          },
        },
        {
          header: {
            textWithoutColor:
              "The All-in-One POS Powerhouse: Sell Smarter, Faster, Anywhere",
            subtitle:
              "A powerful POS with billing, inventory sync, customer management, analytics, and offline mode—seamless in-store & online transactions.",
          },
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "Automated Fulfillment",
            position: "right",
          },
          card: {
            header: {
              text: "Cuts Checkout Time by 60% & Boosts Customer Loyalty",
              subtitle:
                "A nationwide retailer adopted a unified POS, reducing wait times and enhancing customer engagement with personalized promotions.",
            },
            button: [
              {
                label: "Read Case Study",
                href: "/case-studies/order-fulfillment",
              },
            ],
          },
        },
        {
          header: {
            textWithoutColor:
              "Supercharge Fulfillment with AI-Driven Automation",
            subtitle:
              "Accelerate order processing with automated workflows, reducing delays and increasing customer satisfaction.",
          },
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "Automated Fulfillment",
            position: "right",
          },
          card: {
            header: {
              text: "Electronics Retailer Reduces Order Processing Time by 50%",
              subtitle:
                "How an electronics chain automated fulfillment to speed up deliveries and improve service.",
            },
            button: [
              {
                label: "Read Case Study",
                href: "/case-studies/order-fulfillment",
              },
            ],
          },
        },
        {
          header: {
            textWithoutColor: "Retail Without Boundaries: Unify & Grow Faster",
            subtitle:
              "Eliminate disconnected systems by unifying sales, inventory, finance, and operations into a single platform.",
          },
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "Retail Integration",
            position: "left",
          },
          card: {
            header: {
              text: "Retail Chain Reduces Operational Complexity by 60%",
              subtitle:
                "A nationwide retailer integrated all processes, reducing inefficiencies and boosting business performance.",
            },
            button: [
              {
                label: "Read Case Study",
                href: "/case-studies/retail-integration",
              },
            ],
          },
        },
        {
          header: {
            textWithoutColor:
              "Stop Losing Sales to Inventory Errors – Fix It Now!",
            subtitle:
              "Ensure accurate stock tracking with real-time updates. Minimize stockouts, overstocking, and errors with automated controls.",
          },
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "Inventory Management",
            position: "right",
          },
          card: {
            header: {
              text: "Supermarket Reduces Inventory Errors by 45%",
              subtitle:
                "A leading grocery chain automated stock management, reducing losses and improving replenishment accuracy.",
            },
            button: [
              {
                label: "Read Case Study",
                href: "/case-studies/inventory-management",
              },
            ],
          },
        },
        {
          header: {
            textWithoutColor: "Never Lose Another Product to Expire Again!",
            subtitle:
              "Track batch numbers, expiration dates, and product lifecycles to prevent losses and compliance issues.",
          },
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "Expiry Management",
            position: "left",
          },
          card: {
            header: {
              text: "Retail Distributor Eliminates 98% of Expired Stock Losses",
              subtitle:
                "Business automated expiry tracking, preventing financial losses and ensuring product safety.",
            },
            button: [
              {
                label: "Read Case Study",
                href: "/case-studies/expiry-management",
              },
            ],
          },
        },
        {
          header: {
            textWithoutColor:
              "Maximize Profits with Smarter Cash & Finance Management",
            subtitle:
              "Link sales, promotions, inventory, and incentives to a centralized finance system, simplifying complex financial operations.",
          },
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "Finance Management",
            position: "right",
          },
          card: {
            header: {
              text: "Retailer Increases Profit Margins by 30% with Automated Cash Flow Management",
              subtitle:
                "An enterprise retail chain streamlined financial processes, reducing discrepancies and boosting profits.",
            },
            button: [
              {
                label: "Read Case Study",
                href: "/case-studies/finance-management",
              },
            ],
          },
        },
        {
          header: {
            textWithoutColor:
              "Empower Your Workforce with Smart HR & Productivity Tools",
            subtitle:
              "Measure human effort, track work hours, and optimize labor allocation with integrated HRMS.",
          },
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "HR & Workforce Management",
            position: "left",
          },
          card: {
            header: {
              text: "Apparel Manufacturer Improves Workforce Efficiency by 35%",
              subtitle:
                "A clothing brand optimized workforce planning, reducing labor costs and improving productivity.",
            },
            button: [
              {
                label: "Read Case Study",
                href: "/case-studies/workforce-management",
              },
            ],
          },
        },
        {
          header: {
            textWithoutColor:
              "Eliminate Manual Errors with Automated Unit Conversions",
            subtitle:
              "Seamlessly convert units across suppliers, warehouses, and sales channels to ensure consistency and accuracy.",
          },
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "Unit Conversion",
            position: "right",
          },
          card: {
            header: {
              text: "Food Manufacturer Reduces Conversion Errors by 80%",
              subtitle:
                "A food production company standardized UoM conversion, minimizing errors in procurement and distribution.",
            },
            button: [
              {
                label: "Read Case Study",
                href: "/case-studies/unit-conversion",
              },
            ],
          },
        },
        {
          header: {
            textWithoutColor: "Master Batch Processing with Real-Time Tracking",
            subtitle:
              "Streamline batch management with real-time tracking, automated labeling, and regulatory compliance monitoring.",
          },
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "Batch Processing",
            position: "left",
          },
          card: {
            header: {
              text: "Beverage Company Reduces Batch Processing Time by 50%",
              subtitle:
                "An FMCG company automated batch tracking, enhancing traceability and production efficiency.",
            },
            button: [
              {
                label: "Read Case Study",
                href: "/case-studies/batch-processing",
              },
            ],
          },
        },
      ],
    },
    allFeature: {
      header: {
        textWithoutColor: "Explore All Features",
      },
      cards: [
        {
          header: {
            text: "Real-Time Inventory Tracking",
            subtitle:
              "Reduce stockouts by 45% and improve replenishment accuracy with automated updates.",
          },
          image: {
            svg: <PackageSearch className="h-10 w-10 mx-6 mt-4" />,
            alt: "inventory tracking",
          },
          category: "Inventory Control",
          link: [{ label: "Learn More", href: "/solutions" }],
        },
        {
          header: {
            text: "Supplier & Procurement Management",
            subtitle:
              "Cut procurement cycle time by 30% and enhance vendor efficiency.",
          },
          image: {
            svg: <Truck className="h-10 w-10 mx-6 mt-4" />,
            alt: "supplier procurement",
          },
          category: "Inventory Control",
          link: [{ label: "Learn More", href: "/solutions" }],
        },
        {
          header: {
            text: "Smart Inventory & Stock Maintenance",
            subtitle:
              "Decrease inventory errors by 40% and improve stock accuracy with real-time monitoring.",
          },
          image: {
            svg: <Warehouse className="h-10 w-10 mx-6 mt-4" />,
            alt: "stock maintenance",
          },
          category: "Inventory Control",
          link: [{ label: "Learn More", href: "/solutions" }],
        },
        {
          header: {
            text: "Automated Batch & Expiry Management",
            subtitle:
              "Eliminate 98% of expired stock losses through automated tracking and alerts.",
          },
          image: {
            svg: <CalendarCheck className="h-10 w-10 mx-6 mt-4" />,
            alt: "batch expiry",
          },
          category: "Inventory Control",
          link: [{ label: "Learn More", href: "/solutions" }],
        },
        {
          header: {
            text: "End-to-End Serial Number Tracking",
            subtitle:
              "Reduce warranty fraud by 65% and enhance product traceability.",
          },
          image: {
            svg: <Barcode className="h-10 w-10 mx-6 mt-4" />,
            alt: "serial tracking",
          },
          category: "Inventory Control",
          link: [{ label: "Learn More", href: "/solutions" }],
        },
        {
          header: {
            text: "Automated Unit of Measure (UoM) Conversion",
            subtitle:
              "Reduce conversion errors by 80% with intelligent unit mapping.",
          },
          image: {
            svg: <Ruler className="h-10 w-10 mx-6 mt-4" />,
            alt: "unit conversion",
          },
          category: "Inventory Control",
          link: [{ label: "Learn More", href: "/solutions" }],
        },
        {
          header: {
            text: "Omnichannel Integration",
            subtitle:
              "Increase online sales by 65% by unifying POS, e-commerce, and supply chain data.",
          },
          image: {
            svg: <ShoppingCart className="h-10 w-10 mx-6 mt-4" />,
            alt: "omnichannel integration",
          },
          category: "Order Management",
          link: [{ label: "Learn More", href: "/solutions" }],
        },
        {
          header: {
            text: "Order & Fulfillment Automation",
            subtitle:
              "Accelerate order processing by 50% and reduce fulfillment errors.",
          },
          image: {
            svg: <ClipboardCheck className="h-10 w-10 mx-6 mt-4" />,
            alt: "order automation",
          },
          category: "Order Management",
          link: [{ label: "Learn More", href: "/solutions" }],
        },
        {
          header: {
            text: "AI-Powered Demand Forecasting",
            subtitle:
              "Improve stock planning accuracy by 75% with predictive analytics.",
          },
          image: {
            svg: <LineChart className="h-10 w-10 mx-6 mt-4" />,
            alt: "demand forecasting",
          },
          category: "Order Management",
          link: [{ label: "Learn More", href: "/solutions" }],
        },
        {
          header: {
            text: "Automated Returns & Refund Processing",
            subtitle:
              "Reduce return handling time by 60% and improve customer satisfaction.",
          },
          image: {
            svg: <RotateCcw className="h-10 w-10 mx-6 mt-4" />,
            alt: "returns processing",
          },
          category: "Order Management",
          link: [{ label: "Learn More", href: "/solutions" }],
        },
        {
          header: {
            text: "Intelligent Backorder Management",
            subtitle:
              "Reduce fulfillment delays by 40% with real-time order visibility.",
          },
          image: {
            svg: <Clock className="h-10 w-10 mx-6 mt-4" />,
            alt: "backorder management",
          },
          category: "Order Management",
          link: [{ label: "Learn More", href: "/solutions" }],
        },
        {
          header: {
            text: "Dynamic Pricing & Promotions",
            subtitle:
              "Boost revenue by 20% with AI-driven pricing optimization.",
          },
          image: {
            svg: <Tag className="h-10 w-10 mx-6 mt-4" />,
            alt: "pricing promotions",
          },
          category: "Sales Analytics",
          link: [{ label: "Learn More", href: "/solutions" }],
        },
        {
          header: {
            text: "Customer Loyalty & Rewards Management",
            subtitle:
              "Increase customer retention by 30% with personalized rewards.",
          },
          image: {
            svg: <Gift className="h-10 w-10 mx-6 mt-4" />,
            alt: "loyalty management",
          },
          category: "Sales Analytics",
          link: [{ label: "Learn More", href: "/solutions" }],
        },
        {
          header: {
            text: "AI-Driven Customer Insights",
            subtitle:
              "Understand buying patterns and increase sales conversions by 25%.",
          },
          image: {
            svg: <UserCheck className="h-10 w-10 mx-6 mt-4" />,
            alt: "customer insights",
          },
          category: "Sales Analytics",
          link: [{ label: "Learn More", href: "/solutions" }],
        },
        {
          header: {
            text: "Sales Forecasting & Trend Analysis",
            subtitle:
              "Improve quarterly sales projections by 40% with AI-powered trend insights.",
          },
          image: {
            svg: <TrendingUp className="h-10 w-10 mx-6 mt-4" />,
            alt: "sales forecasting",
          },
          category: "Sales Analytics",
          link: [{ label: "Learn More", href: "/solutions" }],
        },
        {
          header: {
            text: "Workforce Productivity & HR Management",
            subtitle:
              "Increase labor efficiency by 35% with automated HR tools.",
          },
          image: {
            svg: <Users className="h-10 w-10 mx-6 mt-4" />,
            alt: "hr management",
          },
          category: "HR & Workforce",
          link: [{ label: "Learn More", href: "/solutions" }],
        },
        {
          header: {
            text: "Payroll & Compliance Automation",
            subtitle:
              "Eliminate 90% of payroll errors and ensure tax compliance.",
          },
          image: {
            svg: <FileText className="h-10 w-10 mx-6 mt-4" />,
            alt: "payroll compliance",
          },
          category: "HR & Workforce",
          link: [{ label: "Learn More", href: "/solutions" }],
        },
        {
          header: {
            text: "Employee Performance Analytics",
            subtitle:
              "Optimize workforce performance and reduce turnover by 20%.",
          },
          image: {
            svg: <Activity className="h-10 w-10 mx-6 mt-4" />,
            alt: "performance analytics",
          },
          category: "HR & Workforce",
          link: [{ label: "Learn More", href: "/solutions" }],
        },
        {
          header: {
            text: "Automated Shift & Attendance Management",
            subtitle:
              "Reduce scheduling conflicts and improve workforce efficiency.",
          },
          image: {
            svg: <Clock className="h-10 w-10 mx-6 mt-4" />,
            alt: "shift management",
          },
          category: "HR & Workforce",
          link: [{ label: "Learn More", href: "/solutions" }],
        },
      ],
    },
    cta: {
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
        button: {
          label: "Book Your Free Consultation",
          // href: "https://nectar.lmnas.com/book_appointment",
          formMode: "booking"
        },
      },
    },
    successStory: {
      header: {
        textWithoutColor: "Success Stories",
        subtitle:
          "Explore how businesses across different industries achieved breakthrough results with our solutions.",
      },
      cards: [
        {
          header: {
            text: "AI-Driven Stock Management Boosts Availability by 30%",
            subtitle:
              "A leading retailer used AI demand forecasting to prevent stockouts and optimize replenishment, improving product availability by 30%.",
          },
          category: "inventory Control",
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "inventory tracking",
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
            text: "Automated Replenishment Reduces Overstock by 45%",
            subtitle:
              "A grocery chain reduced excess inventory and holding costs by automating replenishment, cutting overstock by 45%.",
          },
          category: "inventory Control",
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "automated replenishment",
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
            text: "RFID Tracking Eliminates 90% of Inventory Shrinkage",
            subtitle:
              "A fashion retailer used RFID tracking for real-time stock visibility, reducing inventory shrinkage by 90%.",
          },
          category: "inventory Control",
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "RFID tracking",
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
            text: "Smart Shelf Monitoring Improves On-Shelf Availability by 28%",
            subtitle:
              "An electronics retailer used IoT-based shelf monitoring to maintain optimal stock levels, increasing availability by 28%.",
          },
          category: "inventory Control",
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "smart shelf",
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
            text: "Intelligent Fulfillment Cuts Delivery Time by 50%",
            subtitle:
              "An online retailer used AI order routing to optimize fulfillment centers, reducing delivery times by 50%.",
          },
          category: "order Management",
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "order fulfillment",
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
            text: "Automated Order Processing Increases Efficiency by 60%",
            subtitle:
              "A retail brand automated order processing, reducing manual effort and increasing fulfillment speed by 60%.",
          },
          category: "order Management",
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "automated order processing",
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
            text: "AI-Powered Returns Processing Cuts Costs by 35%",
            subtitle:
              "A major retailer automated return approvals, cutting processing costs by 35%.",
          },
          category: "order Management",
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "returns management",
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
            text: "AI-Powered Insights Increase Conversion Rates by 40%",
            subtitle:
              "A retail chain personalized promotions using AI, increasing online and in-store conversion rates by 40%.",
          },
          category: "sales Analytics",
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "sales insights",
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
            text: "Dynamic Pricing Model Lifts Profit Margins by 22%",
            subtitle:
              "A retailer implemented real-time price adjustments, improving profit margins by 22%.",
          },
          category: "sales Analytics",
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "dynamic pricing",
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
            text: "Customer Segmentation Boosts Average Order Value by 18%",
            subtitle:
              "A department store used AI-driven segmentation to tailor promotions, increasing order value by 18%.",
          },
          category: "sales Analytics",
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "customer segmentation",
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
            text: "Real-Time Sales Dashboards Improve Decision-Making by 50%",
            subtitle:
              "A luxury fashion brand implemented real-time analytics, enhancing sales forecasting and decision-making by 50%.",
          },
          category: "sales Analytics",
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "real-time sales dashboard",
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
            text: "AI-Driven Scheduling Cuts Overtime Costs by 25%",
            subtitle:
              "A retail chain optimized workforce scheduling using AI, reducing overtime expenses by 25%.",
          },
          category: "HR & Workforce",
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "workforce scheduling",
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
            text: "Automated Payroll Processing Reduces Errors by 90%",
            subtitle:
              "A fashion retailer implemented an AI-driven payroll system, eliminating manual errors and improving payout efficiency by 90%.",
          },
          category: "HR & Workforce",
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "payroll automation",
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
            text: "Employee Productivity Tracking Boosts Efficiency by 40%",
            subtitle:
              "A supermarket chain introduced AI-driven workforce analytics, increasing employee productivity by 40%.",
          },
          category: "HR & Workforce",
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "employee tracking",
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
        title: "Could This Be Your Business Story Too?",
        button: {
          label: " Book Your Free Consultation",
          // href: "https://nectar.lmnas.com/book_appointment",
          formMode: "booking"
        },
      },
    },
  },
  {
    id: "distribution",
    slug: "/distribution",
    title: "LENS ERP for Distribution",
    description:
      "Enhance supply chain visibility, streamline logistics, and boost operational efficiency with AI-powered ERP.",
    hero: {
      heading: {
        textWithoutColor: "Optimize Your Distribution Network with",
        text: "AI-Powered ERP",
        subtitle:
          "Enhance supply chain visibility, streamline logistics, and boost operational efficiency with LENS ERP Suite.",
        badge: "LENS ERP Suite",
      },
      items: [
        {
          icon: <Truck className="h-5 w-5 text-primary/80" />,
          item: "99% On-Time Deliveries",
        },
        {
          icon: <BarChart3 className="h-5 w-5 text-primary/80" />,
          item: "40% Faster Route Optimization",
        },
        {
          icon: <Package className="h-5 w-5 text-primary/80" />,
          item: "0% Reduced Inventory Waste",
        },
      ],

      buttons: [
        {
          label: "Ask for Demo",
          // href: "https://demolens.lmnas.com/#login",
          formMode: "contact",
          variant: "default",
          icon: <ArrowRight className="size-6" />,
          iconPosition: "after",
          size: "lg",
        },
        {
          label: "Book a Free Consultation",
          // href: "https://nectar.lmnas.com/book_appointment",
          formMode: "booking",
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
    },
    problems: {
      header: {
        textWithoutColor: "Are Inefficiencies Slowing Down Your",
        text: "Distribution Operations and Increasing Costs?",
        subtitle:
          "Distribution businesses face unique challenges that outdated systems can't solve. Our ERP solution addresses these pain points directly.",
      },
      items: [
        {
          icon: <Boxes className="h-6 w-6 text-primary/70" />,
          question: "Inventory discrepancies leading to stockouts or overstock",
          answer:
            "Poor inventory tracking results in shortages or excess stock, tying up capital and impacting service levels.",
        },
        {
          icon: <FileText className="h-6 w-6 text-primary/70" />,
          question: "Slow and error-prone order processing",
          answer:
            "Manual workflows increase the risk of order mistakes, delayed shipments, and frustrated customers.",
        },
        {
          icon: <Map className="h-6 w-6 text-primary/70" />,
          question: "Lack of real-time visibility into supply chain movements",
          answer:
            "Without a centralized system, tracking shipments, orders, and inventory across multiple locations is challenging.",
        },
        {
          icon: <Route className="h-6 w-6 text-primary/70" />,
          question: "High logistics costs due to inefficient routing",
          answer:
            "Suboptimal route planning and carrier management drive up transportation expenses and delivery times.",
        },
        {
          icon: <Boxes className="h-6 w-6 text-primary/70" />,
          question: "Siloed systems affecting collaboration",
          answer:
            "Disconnected sales, inventory, and logistics systems create bottlenecks and miscommunications.",
        },
        {
          icon: <Users className="h-6 w-6 text-primary/70" />,
          question: "Difficulty in meeting evolving customer expectations",
          answer:
            "Customers demand faster deliveries, accurate tracking, and personalized service that legacy systems can't provide.",
        },
      ],
      footer: {
        header: {
          textWithoutColor: "Ready to Overcome These Distribution Challenges?",
        },
        points: {
          title:
            "Book a free consultation with our distribution ERP specialists",
        },
        buttons: [
          {
            label: "Book a Free Consultation Now",
            // href: "https://nectar.lmnas.com/book_appointment",
            formMode: "booking",
            variant: "outline",
            icon: <Calendar className="size-5" />,
            iconPosition: "before",
            size: "lg",
          },
        ],
      },
    },
    features: {
      header: {
        textWithoutColor: "LENS ERP Suite: Optimize Your Distribution Network",
        subtitle:
          "Discover how our ERP solution can transform your distribution operations with AI-powered features.",
      },

      feature: [
        {
          header: {
            textWithoutColor:
              "Eliminate Stockouts with AI-Driven Inventory Mastery",
            subtitle:
              "Predict demand, optimize storage, and automate restocking to cut waste and prevent inventory shortages.",
          },
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "Inventory Optimization Dashboard",
            position: "right",
          },
          card: {
            header: {
              text: "Wholesale Distributor Cuts Excess Inventory by 35%",
              subtitle:
                "A leading distributor used AI forecasting to maintain the perfect balance of stock, reducing storage costs and improving working capital.",
            },
            button: [
              {
                label: "Read Case Study",
                href: "/solutions",
              },
            ],
          },
        },
        {
          header: {
            textWithoutColor:
              "Slash Order Delays with Smart Procurement & Fulfillment",
            subtitle:
              "Automate orders, streamline procurement, and speed up fulfillment to reduce errors and ensure deliveries.",
          },
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "Order Processing Automation",
            position: "left",
          },
          card: {
            header: {
              text: "Electronics Supplier Cuts Order Processing Time by 50%",
              subtitle:
                "A major electronics distributor automated procurement planning, significantly reducing manual effort and improving order accuracy.",
            },
            button: [
              {
                label: "Read Case Study",
                href: "/solutions",
              },
            ],
          },
        },
        {
          header: {
            textWithoutColor:
              "Maximize Deliveries with Optimized Route Planning",
            subtitle:
              "Save time and fuel with AI-powered routing, optimizing delivery schedules based on demand and traffic.",
          },
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "Route Optimization Dashboard",
            position: "right",
          },
          card: {
            header: {
              text: "Retailer Saves 25% on Logistics Costs with AI-Powered Routing",
              subtitle:
                "A national distributor optimized delivery schedules, cutting transportation costs and ensuring on-time shipments.",
            },
            button: [
              {
                label: "Read Case Study",
                href: "/solutions",
              },
            ],
          },
        },
        {
          header: {
            textWithoutColor:
              "Say Goodbye to Expired Stock – Automate Batch & Expiry Tracking",
            subtitle:
              "Monitor batch numbers, expiration dates, and product cycles to avoid losses and ensure compliance.",
          },
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "Batch Expiry Management Dashboard",
            position: "left",
          },
          card: {
            header: {
              text: "Eliminate 98% of Expired Stock Losses—Boosts Profitability",
              subtitle:
                "A pharmaceutical distributor automated expiry tracking, preventing financial losses and ensuring product safety.",
            },
            button: [
              {
                label: "Read Case Study",
                href: "/solutions",
              },
            ],
          },
        },
        {
          header: {
            textWithoutColor:
              "Master Price Management with AI-Driven Dynamic Pricing",
            subtitle:
              "Adjust pricing based on demand, competition, and trends to maximize revenue and stay competitive.",
          },
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "Dynamic Pricing Dashboard",
            position: "right",
          },
          card: {
            header: {
              text: "Retailer Increases Revenue by 20% with AI-Optimized Pricing",
              subtitle:
                "A leading retailer implemented AI-based pricing strategies, boosting profits without losing competitiveness.",
            },
            button: [
              {
                label: "Read Case Study",
                href: "/solutions",
              },
            ],
          },
        },
        {
          header: {
            textWithoutColor:
              "Gain 360° Visibility into Your Entire Supply Chain",
            subtitle:
              "Track products in real-time, optimize inventory, and improve logistics efficiency with AI-powered insights.",
          },
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "Supply Chain Visibility Dashboard",
            position: "left",
          },
          card: {
            header: {
              text: "99% On-Time Deliveries with Real-Time Supply Chain Insights",
              subtitle:
                "A national distributor improved logistics efficiency and customer satisfaction with AI-powered tracking and analytics.",
            },
            button: [
              {
                label: "Read Case Study",
                href: "/solutions",
              },
            ],
          },
        },
        {
          header: {
            textWithoutColor:
              "Supercharge Your Workforce with AI-Powered Productivity Tools",
            subtitle:
              "Enhance workforce efficiency with AI-driven scheduling, task allocation, and real-time productivity tracking.",
          },
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "Workforce Management Dashboard",
            position: "right",
          },
          card: {
            header: {
              text: "FMCG Leader Boosts Workforce Efficiency by 35%",
              subtitle:
                "An FMCG distributor leveraged AI-driven HR tools to streamline workforce operations and reduce downtime.",
            },
            button: [
              {
                label: "Read Case Study",
                href: "/solutions",
              },
            ],
          },
        },
        {
          header: {
            textWithoutColor:
              "Automate Reorder & Return Management for Zero Stock Disruptions",
            subtitle:
              "AI-powered predictions ensure smooth reorders and return handling, keeping inventory balanced and efficient.",
          },
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "Reorder & Return Management Dashboard",
            position: "left",
          },
          card: {
            header: {
              text: "Global Retailer Cuts Return Processing Time by 60%",
              subtitle:
                "A major retail chain automated return workflows, improving stock efficiency and reducing losses.",
            },
            button: [
              {
                label: "Read Case Study",
                href: "/solutions",
              },
            ],
          },
        },
      ],
    },
    allFeature: {
      header: {
        textWithoutColor: "Explore All Features",
      },

      cards: [
        {
          header: {
            text: "Real-Time Inventory Tracking",
            subtitle:
              "Reduce stockouts by 40% with automated tracking and instant stock updates.",
          },
          image: {
            svg: <Boxes className="h-10 w-10 mx-6 mt-4" />,
            alt: "boxes",
          },
          category: "Warehouse Management",
          link: [
            {
              label: "Learn More",
              href: "/solutions",
            },
          ],
        },
        {
          header: {
            text: "Supplier & Procurement Management",
            subtitle:
              "Streamline vendor operations and cut procurement time by 30%.",
          },
          image: {
            svg: <Factory className="h-10 w-10 mx-6 mt-4" />,
            alt: "factory",
          },
          category: "Warehouse Management",
          link: [
            {
              label: "Learn More",
              href: "/solutions",
            },
          ],
        },
        {
          header: {
            text: "Batch & Expiry Tracking",
            subtitle:
              "Reduce expired stock losses by 98% with real-time monitoring.",
          },
          image: {
            svg: <ClipboardList className="h-10 w-10 mx-6 mt-4" />,
            alt: "clipboard",
          },
          category: "Warehouse Management",
          link: [
            {
              label: "Learn More",
              href: "/solutions",
            },
          ],
        },
        {
          header: {
            text: "Automated Warehouse Optimization",
            subtitle:
              "Increase warehouse efficiency by 25% with AI-powered space and stock placement optimization.",
          },
          image: {
            svg: <BarChart className="h-10 w-10 mx-6 mt-4" />,
            alt: "barchart",
          },
          category: "Warehouse Management",
          link: [
            {
              label: "Learn More",
              href: "/solutions",
            },
          ],
        },
        {
          header: {
            text: "Order & Fulfillment Automation",
            subtitle:
              "Reduce order processing errors by 60% and speed up fulfillment by 50%.",
          },
          image: {
            svg: <ClipboardList className="h-10 w-10 mx-6 mt-4" />,
            alt: "clipboard",
          },
          category: "Order Management",
          link: [
            {
              label: "Learn More",
              href: "/solutions",
            },
          ],
        },
        {
          header: {
            text: "Reorder & Returns Management",
            subtitle:
              "Automate reordering and cut return processing time by 40%.",
          },
          image: {
            svg: <RefreshCw className="h-10 w-10 mx-6 mt-4" />,
            alt: "refresh",
          },
          category: "Order Management",
          link: [
            {
              label: "Learn More",
              href: "/solutions",
            },
          ],
        },
        {
          header: {
            text: "Contract & Price Compliance",
            subtitle:
              "Ensure 100% compliance with supplier contracts and automated price adjustments.",
          },
          image: {
            svg: <Tag className="h-10 w-10 mx-6 mt-4" />,
            alt: "tag",
          },
          category: "Order Management",
          link: [
            {
              label: "Learn More",
              href: "/solutions",
            },
          ],
        },
        {
          header: {
            text: "AI-Powered Demand Forecasting",
            subtitle:
              "Improve order accuracy by 35% with predictive analytics.",
          },
          image: {
            svg: <TrendingUp className="h-10 w-10 mx-6 mt-4" />,
            alt: "trendingup",
          },
          category: "Order Management",
          link: [
            {
              label: "Learn More",
              href: "/solutions",
            },
          ],
        },
        {
          header: {
            text: "AI-Powered Customer Insights",
            subtitle:
              "Boost customer retention by 20% through personalized recommendations.",
          },
          image: {
            svg: <User className="h-10 w-10 mx-6 mt-4" />,
            alt: "user",
          },
          category: "Sales Analytics",
          link: [
            {
              label: "Learn More",
              href: "/solutions",
            },
          ],
        },
        {
          header: {
            text: "Dynamic Pricing & Promotions",
            subtitle:
              "Increase sales by 18% with automated, demand-driven pricing adjustments.",
          },
          image: {
            svg: <DollarSign className="h-10 w-10 mx-6 mt-4" />,
            alt: "dollarsign",
          },
          category: "Sales Analytics",
          link: [
            {
              label: "Learn More",
              href: "/solutions",
            },
          ],
        },
        {
          header: {
            text: "Territory & Sales Performance Tracking",
            subtitle:
              "Improve sales coverage by 30% with real-time tracking of territories and reps.",
          },
          image: {
            svg: <Globe className="h-10 w-10 mx-6 mt-4" />,
            alt: "globe",
          },
          category: "Sales Analytics",
          link: [
            {
              label: "Learn More",
              href: "/solutions",
            },
          ],
        },
        {
          header: {
            text: "AI-Driven Sales Forecasting",
            subtitle:
              "Enhance revenue prediction accuracy by 25% with machine learning insights.",
          },
          image: {
            svg: <LineChart className="h-10 w-10 mx-6 mt-4" />,
            alt: "linechart",
          },
          category: "Sales Analytics",
          link: [
            {
              label: "Learn More",
              href: "/solutions",
            },
          ],
        },
        {
          header: {
            text: "Omnichannel Integration",
            subtitle:
              "Improve sales synchronization across channels, reducing order mismatches by 40%.",
          },
          image: {
            svg: <ShoppingCart className="h-10 w-10 mx-6 mt-4" />,
            alt: "shoppingcart",
          },
          category: "Logistics",
          link: [
            {
              label: "Learn More",
              href: "/solutions",
            },
          ],
        },
        {
          header: {
            text: "AI-Optimized Route Planning",
            subtitle:
              "Cut delivery costs by 25% and improve on-time deliveries by 99%.",
          },
          image: {
            svg: <MapPin className="h-10 w-10 mx-6 mt-4" />,
            alt: "mappin",
          },
          category: "Logistics",
          link: [
            {
              label: "Learn More",
              href: "/solutions",
            },
          ],
        },
        {
          header: {
            text: "Automated Freight & Carrier Selection",
            subtitle:
              "Lower shipping costs by 15% through AI-driven carrier recommendations.",
          },
          image: {
            svg: <Truck className="h-10 w-10 mx-6 mt-4" />,
            alt: "truck",
          },
          category: "Logistics",
          link: [
            {
              label: "Learn More",
              href: "/solutions",
            },
          ],
        },
        {
          header: {
            text: "Real-Time Delivery & Fleet Tracking",
            subtitle:
              "Reduce delivery delays by 30% with live tracking and route optimization.",
          },
          image: {
            svg: <Navigation className="h-10 w-10 mx-6 mt-4" />,
            alt: "navigation",
          },
          category: "Logistics",
          link: [
            {
              label: "Learn More",
              href: "/solutions",
            },
          ],
        },
      ],
    },
    cta: {
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
        button: {
          label: "Book Your Free Consultation",
          // href: "https://nectar.lmnas.com/book_appointment",
          formMode: "booking"
        },
      },
    },
    successStory: {
      header: {
        textWithoutColor: "Success Stories",
        subtitle:
          "Explore how businesses across different industries achieved breakthrough results with our solutions.",
      },

      cards: [
        {
          header: {
            text: "AI-Powered Forecasting Slashes Overstock by 35%",
            subtitle:
              "A leading distributor optimized stock levels, reducing excess inventory and storage costs.",
          },
          category: "warehouse management",
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "warehouse optimization",
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
            text: "Smart Warehousing Increases Picking Speed by 40%",
            subtitle:
              "Automated tracking and robotics improved efficiency, reducing errors and accelerating order fulfillment.",
          },
          category: "warehouse management",
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "warehouse automation",
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
            text: "Predictive Reordering Reduces Stockouts by 50%",
            subtitle:
              "A global supplier leveraged AI-driven demand planning, ensuring shelves were always stocked.",
          },
          category: "warehouse management",
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "inventory management",
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
            text: "Cold Storage Optimization Cuts Energy Costs by 25%",
            subtitle:
              "A food distributor reduced energy consumption with smart temperature monitoring and automation.",
          },
          category: "warehouse management",
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "cold storage efficiency",
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
            text: "Automated Order Fulfillment Speeds Up Delivery by 45%",
            subtitle:
              "An e-commerce giant used AI-powered logistics to cut processing delays and boost customer satisfaction.",
          },
          category: "order management",
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "order automation",
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
            text: "AI-Driven Returns Processing Cuts Costs by 30%",
            subtitle:
              "A fashion retailer optimized reverse logistics, reducing manual workload and refund times.",
          },
          category: "order management",
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "returns automation",
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
            text: "Seamless Multi-Warehouse Fulfillment Lowers Costs 20%",
            subtitle:
              "A wholesaler automated order routing across warehouses, minimizing transportation expenses.",
          },
          category: "order management",
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "warehouse fulfillment",
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
            text: "Real-Time Order Tracking Improves Accuracy by 35%",
            subtitle:
              "A B2B distributor integrated live tracking, eliminating lost orders and enhancing customer trust.",
          },
          category: "order management",
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "real-time tracking",
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
            text: "AI-Powered Sales Forecasting Reduces Stockouts by 50%",
            subtitle:
              "A consumer goods company used predictive analytics to anticipate demand and optimize inventory.",
          },
          category: "sales analytics",
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "sales forecasting",
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
            text: "Dynamic Pricing Strategy Boosts Revenue by 22%",
            subtitle:
              "A wholesale distributor implemented AI-driven pricing adjustments, increasing margins.",
          },
          category: "sales analytics",
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "pricing optimization",
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
            text: "Customer Insights Drive Repeat Sales Up by 28%",
            subtitle:
              "Personalized recommendations and targeted promotions improved customer retention.",
          },
          category: "sales analytics",
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "customer analytics",
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
            text: "Predictive Demand Analytics Reduces Wastage by 40%",
            subtitle:
              "A food supplier adjusted production levels based on real-time data, minimizing spoilage.",
          },
          category: "sales analytics",
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "demand prediction",
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
            text: "Route Optimization Lowers Fuel Costs by 20%",
            subtitle:
              "A transportation company leveraged AI-driven logistics planning to cut fuel expenses and reduce emissions.",
          },
          category: "logistics",
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "route optimization",
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
            text: "Live Shipment Tracking Improves On-Time Delivery by 35%",
            subtitle:
              "A retailer introduced real-time tracking, reducing delivery delays and improving customer satisfaction.",
          },
          category: "logistics",
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "shipment tracking",
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
            text: "Fleet Management AI Cuts Maintenance Costs by 25%",
            subtitle:
              "A logistics provider optimized vehicle maintenance schedules, preventing costly breakdowns.",
          },
          category: "logistics",
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "fleet management",
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
            text: "Last-Mile Delivery Optimization Reduces Delays by 30%",
            subtitle:
              "A courier service improved delivery efficiency using dynamic AI-based routing.",
          },
          category: "logistics",
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "last-mile delivery",
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
        title: "Could This Be Your Business Story Too?",
        button: {
          label: " Book Your Free Consultation",
          // href: "https://nectar.lmnas.com/book_appointment",
          formMode: "booking"
        },
      },
    },
  },
];

export default async function Industries({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ioTransformer: ITransformer<TindustriesPageSource, TindustriesPageTarget> = clTransformerFactory.createTransformer('Industries');
  const pageData: TindustriesPageTarget = await ioTransformer.execute({ locale: 'de-DE' });
  console.log(pageData);
  const Industry = pageData.industries.find((idIndustry) => idIndustry.slug === slug);

  return (

    <IndustryComp idIndustry={Industry} />
  )
}
