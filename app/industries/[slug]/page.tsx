import Callout from "@repo/ui/components/callout";
import CustomCard from "@repo/ui/components/customCard";
import Footer from "@repo/ui/components/footer";
import Hero from "@repo/ui/components/hero";
import TitleSubtitle from "@repo/ui/components/titleSubtitle";
import { Tbutton, TcalloutProps, TheroProps, Titems } from "@repo/ui/type";
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
} from "lucide-react";
import Image from "next/image";
import Tab from "@repo/ui/components/tab";
import { Button } from "@repo/ui/components/ui/button";
import PainPoints from "@repo/ui/components/painPoint";
import Link from "next/link";
import Navbar from "@repo/ui/components/navbar";

const pageSlugs = [
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
    },
    section2: {
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
    },
    section3: {
      header: {
        textWithoutColor: "LENS ERP Suite: Streamline Your Manufacturing",
        subtitle:
          "Discover how our comprehensive ERP solution can transform your manufacturing operations with these powerful features.",
      },
      feature: [
        {
          header: {
            textWithoutColor: "Intelligent Production Planning",
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
            textWithoutColor: "Real-Time Inventory Management",
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
            textWithoutColor: "End-to-End Supply Chain Visibility",
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
    section4: {
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
          link: [
            {
              label: "Learn More",
              href: "/solutions",
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
              href: "/solutions",
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
              href: "/solutions",
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
              href: "/solutions",
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
              href: "/solutions",
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
              href: "/solutions",
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
              href: "/solutions",
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
              href: "/solutions",
            },
          ],
        },
      ],
    },
    section5: {
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
          href: "https://nectar.lmnas.com/book_appointment",
        },
      },
    },
    section6: {
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
        button: {
          label: " Book Your Free Consultation",
          href: "https://nectar.lmnas.com/book_appointment",
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
        textWithoutColor: "LENS ERP Suite: Transform Your Retail Business with",
        text: "AI-Powered ERP",
        subtitle:
          "Optimize inventory, enhance customer experience, and drive higher sales—all with LENS ERP Suite.",
        badge: "LENS ERP Suite",
      },
      items: [
        {
          icon: <ShoppingCart className="h-5 w-5 text-primary/80" />,
          item: "30% Reduction in Stockouts",
        },
        {
          icon: <BarChart3 className="h-5 w-5 text-primary/80" />,
          item: "Real-time Sales & Inventory Analytics",
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
    },
    section2: {
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
            href: "https://nectar.lmnas.com/book_appointment",
            variant: "outline",
            icon: <Calendar className="size-5" />,
            iconPosition: "before",
            size: "lg",
          },
        ],
      },
    },
    section3: {
      header: {
        textWithoutColor: "LENS ERP Suite: Transform Your Retail Business",
        subtitle:
          "Discover how our advanced ERP solution can revolutionize your retail operations with these key features.",
      },
      feature: [
        {
          header: {
            textWithoutColor: "AI-Driven Demand Forecasting",
            subtitle:
              "Anticipate market trends and optimize stock levels with real-time predictive analytics.",
          },
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "Demand Forecasting Dashboard",
            position: "right",
          },
          card: {
            header: {
              text: "Fashion Retailer Cuts Overstock by 40%",
              subtitle:
                "How a leading fashion brand leveraged AI forecasting to optimize inventory and reduce losses.",
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
            textWithoutColor: "Unified Omnichannel Experience",
            subtitle:
              "Seamlessly integrate POS, e-commerce, and inventory for a smooth shopping experience across all platforms.",
          },
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "Omnichannel Integration Dashboard",
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
                href: "/solutions",
              },
            ],
          },
        },
        {
          header: {
            textWithoutColor: "Automated Order Fulfillment & Logistics",
            subtitle:
              "Accelerate order processing with automated workflows, reducing delays and increasing customer satisfaction.",
          },
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "Order Fulfillment Automation",
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
                href: "/solutions",
              },
            ],
          },
        },
      ],
    },
    section4: {
      header: {
        textWithoutColor: "Explore All Features",
      },
      filters: [
        "All",
        "Sales Analytics",
        "Inventory Control",
        "Order Management",
        "Customer Engagement",
      ],
      cards: [
        {
          header: {
            text: "Real-Time Inventory Tracking",
            subtitle: "Minimize stockouts and optimize replenishment.",
          },
          category: "Inventory Control",
          link: [{ label: "Learn More", href: "/solutions" }],
        },
        {
          header: {
            text: "Omnichannel Integration",
            subtitle: "Connect POS, e-commerce, and supply chain seamlessly.",
          },
          category: "Order Management",
          link: [{ label: "Learn More", href: "/solutions" }],
        },
        {
          header: {
            text: "AI-Powered Customer Insights",
            subtitle:
              "Personalize offers and recommendations with data-driven analytics.",
          },
          category: "Customer Engagement",
          link: [{ label: "Learn More", href: "/solutions" }],
        },
        {
          header: {
            text: "Order & Fulfillment Automation",
            subtitle: "Reduce errors and speed up order processing.",
          },
          category: "Order Management",
          link: [{ label: "Learn More", href: "/solutions" }],
        },
        {
          header: {
            text: "Supplier & Procurement Management",
            subtitle: "Streamline vendor operations and procurement workflows.",
          },
          category: "Inventory Control",
          link: [{ label: "Learn More", href: "/solutions" }],
        },
        {
          header: {
            text: "Dynamic Pricing & Promotions",
            subtitle:
              "Optimize pricing strategies based on demand and competition.",
          },
          category: "Sales Analytics",
          link: [{ label: "Learn More", href: "/solutions" }],
        },
      ],
    },
    section5: {
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
          href: "https://nectar.lmnas.com/book_appointment",
        },
      },
    },
    section6: {
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
        button: {
          label: " Book Your Free Consultation",
          href: "https://nectar.lmnas.com/book_appointment",
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
        textWithoutColor:
          "LENS ERP Suite: Optimize Your Distribution Network with",
        text: "AI-Powered ERP",
        subtitle:
          "Enhance supply chain visibility, streamline logistics, and boost operational efficiency with LENS ERP Suite.",
        badge: "LENS ERP Suite",
      },
      items: [
        {
          icon: <Truck className="h-5 w-5 text-primary/80" />,
          item: "20% Faster Order Fulfillment",
        },
        {
          icon: <BarChart3 className="h-5 w-5 text-primary/80" />,
          item: "Real-time Supply Chain Insights",
        },
        {
          icon: <Package className="h-5 w-5 text-primary/80" />,
          item: "Seamless Warehouse & Logistics Management",
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
    },
    section2: {
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
            href: "https://nectar.lmnas.com/book_appointment",
            variant: "outline",
            icon: <Calendar className="size-5" />,
            iconPosition: "before",
            size: "lg",
          },
        ],
      },
    },
    section3: {
      header: {
        textWithoutColor: "LENS ERP Suite: Optimize Your Distribution Network",
        subtitle:
          "Discover how our ERP solution can transform your distribution operations with AI-powered features.",
      },
      feature: [
        {
          header: {
            textWithoutColor: "AI-Powered Inventory Optimization",
            subtitle:
              "Ensure optimal stock levels across all warehouses with predictive analytics and automated replenishment.",
          },
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "Inventory Optimization Dashboard",
            position: "right",
          },
          card: {
            header: {
              text: "Wholesale Distributor Reduces Excess Inventory by 35%",
              subtitle:
                "How a leading distributor improved inventory turnover and freed up working capital.",
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
            textWithoutColor: "Automated Order Processing & Fulfillment",
            subtitle:
              "Reduce errors and accelerate order turnaround with intelligent automation and workflow management.",
          },
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "Order Processing Automation",
            position: "left",
          },
          card: {
            header: {
              text: "Logistics Provider Cuts Order Processing Time by 50%",
              subtitle:
                "How automation helped a logistics company improve accuracy and efficiency.",
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
            textWithoutColor: "End-to-End Supply Chain Visibility",
            subtitle:
              "Gain complete control over your supply chain with real-time tracking and reporting tools.",
          },
          image: {
            src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
            alt: "Supply Chain Visibility Dashboard",
            position: "right",
          },
          card: {
            header: {
              text: "National Distributor Achieves 99% On-Time Deliveries",
              subtitle:
                "How a distribution company improved reliability and customer satisfaction with AI-powered insights.",
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
    section4: {
      header: {
        textWithoutColor: "Explore All Features",
      },
      cards: [
        {
          header: {
            text: "Real-Time Inventory Tracking",
            subtitle: "Minimize stockouts and optimize replenishment.",
          },
          image: {
            svg: <Boxes className="h-10 w-10 mx-6 mt-4" />,
            alt: "boxes",
          },
          category: "inventory",
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
            subtitle: "Connect POS, e-commerce, and supply chain seamlessly.",
          },
          image: {
            svg: <ShoppingCart className="h-10 w-10 mx-6 mt-4" />,
            alt: "shoppingcart",
          },
          category: "sales",
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
              "Personalize offers and recommendations with data-driven analytics.",
          },
          image: {
            svg: <BarChart className="h-10 w-10 mx-6 mt-4" />,
            alt: "barchart",
          },
          category: "analytics",
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
            subtitle: "Reduce errors and speed up order processing.",
          },
          image: {
            svg: <ClipboardList className="h-10 w-10 mx-6 mt-4" />,
            alt: "clipboard",
          },
          category: "order management",
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
            subtitle: "Streamline vendor operations and procurement workflows.",
          },
          image: {
            svg: <Factory className="h-10 w-10 mx-6 mt-4" />,
            alt: "factory",
          },
          category: "inventory",
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
              "Optimize pricing strategies based on demand and competition.",
          },
          image: {
            svg: <Tag className="h-10 w-10 mx-6 mt-4" />,
            alt: "tag",
          },
          category: "sales",
          link: [
            {
              label: "Learn More",
              href: "/solutions",
            },
          ],
        },
      ],
    },
    section5: {
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
          href: "https://nectar.lmnas.com/book_appointment",
        },
      },
    },
    section6: {
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
        button: {
          label: " Book Your Free Consultation",
          href: "https://nectar.lmnas.com/book_appointment",
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
  const industry = pageSlugs.find((industry) => industry.id === slug);

  return (
    <>
      <Navbar />
      <Hero idHero={industry?.hero as TheroProps} />
      {/* 2 */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <TitleSubtitle
            idTitle={{
              ...industry?.section2.header,
              className: "lg:sticky lg:top-24 h-fit",
              headingClass: "md:text-5xl leading-tight font-bold",
              descripClass: "mt-6",
            }}
          />
          <PainPoints idItems={industry?.section2.items as Titems[]} />
        </div>
      </section>
      <div className="bg-primary">
        <Callout idCallout={industry?.section2.footer as TcalloutProps} />
      </div>

      {/* 3 */}
      <section className="container mx-auto px-4 md:px-6 py-16">
        <TitleSubtitle
          idTitle={{
            ...industry?.section3.header,
            className: "text-center items-center",
            headingClass: "md:text-5xl",
            descripClass: "mt-6",
          }}
        />
        <div className="space-y-24 mb-24">
          {industry?.section3.feature.map((idSection, iIndex) => (
            <div
              key={iIndex}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              {idSection.image.position === "left" && (
                <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={idSection.image.src}
                    alt={idSection.image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div className="space-y-6">
                <TitleSubtitle idTitle={idSection.header} />
                <CustomCard
                  idCardProps={{
                    header: idSection.card.header,
                    link: idSection.card.button.map((iaButton) => ({
                      ...iaButton,
                      icon: <ArrowRight className="ml-2 h-4 w-4" />,
                      iconPosition: "after",
                    })) as Tbutton[],

                    className: "bg-primary/5",
                  }}
                />
              </div>

              {idSection.image.position === "right" && (
                <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={idSection.image.src}
                    alt={idSection.image.alt}
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
          idTitle={{
            ...industry?.section4.header,
            headingClass: "md:text-5xl",
            className: "text-center",
          }}
        />
        <Tab
          idTab={{
            data:
              industry?.section4.cards.map((idCard) => ({
                ...idCard,
                header: {
                  ...idCard.header,
                  headingClass: "text-xl font-semibold mb-2",
                },
                className: "max-w-sm",
                link:
                  idCard.link?.map((iaButton) => ({
                    ...iaButton,
                    icon: <ArrowRight className="size-5" />,
                    iconPosition: "after",
                  })) ?? [],
              })) ?? [],
            TabDefault: {
              text: "All",
              label: "Show More",
            },
          }}
        />
      </section>

      {/* 5 */}
      <section className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <TitleSubtitle
            idTitle={{
              ...industry?.section5.header,
              className: "text-center items-center",
              headingClass: "lighting-tight mb-4",
              descripClass: "max-w-5xl",
            }}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
            {industry?.section5.cards.map((idCard, iIndex) => (
              <CustomCard
                key={iIndex}
                idCardProps={{
                  header: {
                    text: idCard.header.text,
                    subtitle: idCard.header.subtitle,
                    headingClass: "mb-2 text-md",
                    descripClass: "text-sm mb-4",
                  },
                  image: {
                    svg: idCard.image.svg,
                    alt: idCard.image.alt,
                  },
                }}
              />
            ))}
          </div>
          <div className="pt-6">
            <Button size="lg" className="text-lg px-8 py-6">
              <Link href={industry?.section5.footer.button?.href ?? "/"}>
                {industry?.section5.footer.button.label}
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              {industry?.section5.footer.title}
            </p>
          </div>
        </div>
      </section>

      {/* 6 */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <TitleSubtitle
            idTitle={{
              ...industry?.section6.header,
              className: "text-center items-center",
              headingClass: "md:text-5xl",
            }}
          />
          <Tab
            idTab={{
              data: industry?.section6.cards
                ? industry.section6.cards.map((idCard) => ({
                  ...idCard,
                  header: {
                    ...idCard.header,
                    descripClass: "text-sm h-16",
                    headingClass: "text-lg mb-2",
                  },
                  image: {
                    src: idCard.image.src,
                    alt: idCard.image.alt,
                    aspectRatio: "wide",
                  },
                  button:
                    idCard.buttons?.map((iaButton) => ({
                      ...iaButton,
                      icon: <ArrowRight className="size-5" />,
                      iconPosition: "after",
                      size: "lg",
                      variant: "outline",
                    })) ?? [], // Ensure button is always an array
                  tag: idCard.category,
                }))
                : [], // Fallback value
              TabDefault: {
                text: "All",
                label: "Show More",
              },
            }}
          />

          <div className="mt-12 text-center">
            <div className="space-y-4">
              <h3 className="text-xl font-medium">
                {industry?.section6.footer.title}
              </h3>
              <Button size="lg" className="group">
                <Link href={industry?.section6.footer.button?.href ?? "/"}>
                  {industry?.section6.footer.button.label}
                </Link>
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
