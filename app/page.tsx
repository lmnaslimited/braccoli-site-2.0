"use client"

import { useState, useRef, useEffect } from "react"
import { DynamicForm, type FormMode } from "@repo/ui/components/form"
import Feature from "@repo/ui/components/feature"
import Hero from "@repo/ui/components/hero"
import Callout from "@repo/ui/components/callout"
import FAQs from "@repo/ui/components/faq";
import SocialProof from "@repo/ui/components/imageComp";
import Footer from "@repo/ui/components/footer";
import { TfeatureProps, TcalloutProps, TheroProps } from "@repo/ui/type"
import { ArrowRight } from "lucide-react"
import Navbar from "@repo/ui/components/navbar"
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
  // Track active section and form mode
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [formMode, setFormMode] = useState<FormMode>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  // Refs for sections
  const sectionRefs = {
    hero: useRef<HTMLDivElement>(null),
    callout1: useRef<HTMLDivElement>(null),
    callout2: useRef<HTMLDivElement>(null),
    callout3: useRef<HTMLDivElement>(null),
  }

  // Update the handleFormButtonClick function to only accept mode and section ID
  const handleFormButtonClick = (mode: FormMode, sectionId: string) => {
    // If clicking the same section that's already active, close it
    if (activeSection === sectionId && formMode === mode) {
      setActiveSection(null)
      setFormMode(null)
    } else {
      // Set the active section and form mode
      setActiveSection(sectionId)
      setFormMode(mode)
      setSuccessMessage(null)

      // Scroll to the section
      setTimeout(() => {
        const sectionRef = sectionRefs[sectionId as keyof typeof sectionRefs]
        if (sectionRef?.current) {
          const sectionRect = sectionRef.current.getBoundingClientRect()
          const scrollPosition = window.scrollY + sectionRect.bottom - 100
          window.scrollTo({
            top: scrollPosition,
            behavior: "smooth",
          })
        }
      }, 50)
    }
  }

  const handleFormSuccess = (mode: FormMode, message: string) => {
    setSuccessMessage(message)

    // If message is empty, it means the form was closed
    if (!message) {
      setActiveSection(null)
      setFormMode(null)
    }
  }

  // Auto-close success message after 5 seconds
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage(null)
        setFormMode(null)
        setActiveSection(null)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [successMessage])

  // Render form component below the active section
  const renderFormBelowSection = (sectionId: string) => {
    if (activeSection !== sectionId) return null

    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="relative p-6"
        >
          <div className="container px-4 md:px-6 relative">
            <DynamicForm initialMode={formMode} onSuccess={handleFormSuccess} />
          </div>
        </motion.div>
      </AnimatePresence>
    )
  }

  // Hero section data
  const hero = {
    heading: {
      textWithoutColor: "Reimagine Your Business.",
      text: "Achieve the Extraordinary.",
      subtitle:
        "From seamless operations to actionable insights, LMNAs empowers businesses to overcome their toughest challenges and unlock growth—no matter the industry.",
    },
    buttons: [
      {
        label: "Book Your Free Consultation",
        variant: "default",
        icon: <ArrowRight className="size-6" />,
        iconPosition: "after",
        formMode: "booking",
      },
      {
        label: "Explore Our Solution",
        href: "/solutions",
        variant: "outline",
        icon: <ArrowRight className="size-6" />,
        iconPosition: "after",
      },
    ],
    image: {
      src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
      alt: "hero-image",
    },
  }

  // Feature sections data
  const feature = [
    {
      header: {
        textWithoutColor: "Why Choose LMNAs?",
        text: "We solve problems that matter.",
      },
      button: {
        label: "See How We Can Help You",
        formMode: "contact",
      },
      items: [
        {
          question: "Is inefficiency slowing you down?",
          answer: "Our solutions streamline your processes, boosting productivity across your organization.",
        },
        {
          question: "Are disjointed systems holding your teams back?",
          answer: "We integrate your systems, ensuring seamless communication and collaboration.",
        },
        {
          question: "Do you need real-time insights to make smarter decisions?",
          answer: "Our analytics tools provide actionable insights, empowering you to make data-driven decisions.",
        },
        {
          question: "Looking for a trusted partner in your digital transformation?",
          answer: "With decades of experience, we're committed to your success every step of the way.",
        },
      ],
    },
    {
      header: {
        badge: "Why Choose Us",
        textWithoutColor: "Why Businesses Trust LMNAs",
        subtitle: " We don't just provide solutions—we help you solve problems that matter.",
      },
      items: [
        {
          question: "Tailored Solutions",
          answer: "We customize our ERP and solutions to fit your specific industry needs.",
          icon: "Sliders",
        },
        {
          question: "End-to-End Expertise",
          answer: "From CRM and CPQ to Analytics and HRMS, we integrate and streamline your enterprise processes.",
          icon: "Users",
        },
        {
          question: "Proven Results",
          answer:
            "Decades of experience helping businesses reduce inefficiencies, improve profitability, and scale effortlessly.",
          icon: "TrendingUp",
        },
        {
          question: "Trusted Advisors",
          answer: "LMNAs consultants partner with you every step of the way to ensure success.",
          icon: "HeadphonesIcon",
        },
      ],
    },
    {
      header: {
        badge: "Solutions",
        textWithoutColor: "Powerful Solutions Tailored to Your Needs",
        subtitle:
          "From ERP to AI-powered analytics, we offer a comprehensive suite of solutions to drive your business forward.",
      },
      button: {
        label: "Explore Our Solutions",
        formMode: "booking",
      },
      items: [
        {
          question: "LENS ERP Suite",
          answer: "The heart of your enterprise operations—integrated, efficient, and built to grow with you.",
          icon: "Database",
        },
        {
          question: "CRM & CPQ",
          answer: "Drive revenue with better customer management and streamlined pricing.",
          icon: "Users",
        },
        {
          question: "Analytics Cloud",
          answer: "Actionable insights, whenever and wherever you need them.",
          icon: "BarChart3",
        },
        {
          question: "HRMS Cloud",
          answer: "Empower your workforce with seamless employee management.",
          icon: "UserCircle",
        },
        {
          question: "AI-Powered Tools",
          answer: "From chatbots to predictive analytics, we deliver cutting-edge technology to your business.",
          icon: "Bot",
        },
      ],
    },
    {
      header: {
        badge: "Customer Journey",
        textWithoutColor: " What to Expect When You Work with LMNAs",
        subtitle: "Our proven process ensures a smooth transition and maximizes the value of your investment.",
      },
      items: [
        { question: "Discovery Session", answer: "Understand your pain points and goals.", icon: "CheckCircle" },
        {
          question: "Customized Roadmap",
          answer: "Tailored solutions designed for your business.",
          icon: "CheckCircle",
        },
        {
          question: "Implementation",
          answer: "Seamless integration of LMNAs tools into your workflows.",
          icon: "CheckCircle",
        },
        {
          question: "Continuous Support",
          answer: "Ongoing training, optimization, and enhancements.",
          icon: "CheckCircle",
        },
      ],
    },
  ]

  // Callout sections data
  const calloutData = [
    {
      header: {
        textWithoutColor: "Does This Sound Like Your Business?",
        subtitle: "If so, you're in the right place.",
      },
      buttons: [
        {
          label: "Start Solving Your Problems Today",
          variant: "default",
          formMode: "booking",
        },
      ],
      points: {
        title: "We understand the challenges you face:",
        items: [
          "Your Sales Manager struggles with manual pricing and lost leads.",
          "Your Procurement team misses deadlines due to poor coordination.",
          "Your Operations Manager is tired of firefighting inefficiencies.",
          "Your Finance Manager can't trust the numbers during quarterly reviews.",
        ],
        actionText: "We get it. And we're here to fix it—for good.",
      },
    },
    {
      header: {
        textWithoutColor: "Your Transformation Starts Here.",
        subtitle: "The first step to solving your enterprise problems is just a conversation away.",
      },
      buttons: [
        {
          label: "Book a Free Consultation Now",
          variant: "default",
          formMode: "booking",
        },
        {
          label: "Talk to an Expert",
          variant: "outline",
          formMode: "contact",
        },
      ],
    },
    {
      header: {
        textWithoutColor: "Ready to Eliminate Your Enterprise Challenges?",
        subtitle:
          " Let's work together to build a future where your business operates at its best—every single day.The first step to solving your enterprise problems is just a conversation away.",
      },
      buttons: [
        {
          label: "Book Your Free Consultation",
          variant: "default",
          formMode: "booking",
        },
        {
          label: "Contact Us Now",
          variant: "outline",
          formMode: "contact",
        },
      ],
      variant: "text-black",
    },
  ]

  const Faq = {
    title: "Got Questions? We've Got Answers!",
    items: [
      {
        question: "Can LMNAs work with my existing systems?",
        answer:
          "Yes, LMNAs is designed to integrate seamlessly with a wide range of existing systems. Our team of experts will work closely with you to ensure a smooth integration process, minimizing disruption to your current operations.",
      },
      {
        question: "How fast can I see results?",
        answer:
          "Many of our clients start seeing improvements within weeks of implementation. However, the full benefits of LMNAs solutions typically become apparent within 3-6 months as your team becomes more familiar with the system and you start leveraging its full capabilities.",
      },
      {
        question: "What industries do you specialize in?",
        answer:
          "LMNAs has extensive experience across various industries, including manufacturing, retail, healthcare, and logistics. Our solutions are highly customizable to meet the specific needs of your industry and business.",
      },
      {
        question: "How do you ensure data security?",
        answer:
          "At LMNAs, we take data security very seriously. We employ industry-leading security measures, including end-to-end encryption, regular security audits, and compliance with international data protection standards to ensure your data is always safe and secure.",
      },
    ],
  }
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div ref={sectionRefs.hero}>
        <Hero iHero={hero as TheroProps} onButtonClick={(mode) => handleFormButtonClick(mode, "hero")} />
        {renderFormBelowSection("hero")}
      </div>
      <div className="bg-grayBackground">
        <Feature idFeature={{ ...feature[0], iShowButton: true, buttonPosition: "header" } as TfeatureProps} />
      </div>
      <div className="my-16">
        <Feature idFeature={{ ...feature[1], iShowButton: false, layout: "centered" } as TfeatureProps} />
      </div>
      <div className="bg-dark/70" ref={sectionRefs.callout1}>
        {/* In the Callout sections */}
        <Callout
          idCallout={calloutData[0] as TcalloutProps}
          onButtonClick={(mode) => handleFormButtonClick(mode, "callout1")}
        />
        {renderFormBelowSection("callout1")}
      </div>
      <div className="my-16">
        <Feature idFeature={{ ...feature[2], layout: "centered", iShowButton: true, buttonPosition: "bottom-center" } as TfeatureProps} />
      </div>
      <SocialProof />
      <div className="bg-dark/70" ref={sectionRefs.callout2}>
        <Callout
          idCallout={calloutData[1] as TcalloutProps}
          onButtonClick={(mode) => handleFormButtonClick(mode, "callout2")}
        />
        {renderFormBelowSection("callout2")}
      </div>
      <div className="my-16">
        <Feature idFeature={{ ...feature[3], layout: "centered", iShowButton: false } as TfeatureProps} />
      </div>
      <div className="bg-grayBackground">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto divide-y-2 divide-muted">
            <h2 className="text-center text-3xl font-extrabold text-primary sm:text-4xl">
              {Faq.title}
            </h2>
            <FAQs idFaq={Faq.items} />
          </div>
        </div>
      </div>
      <div ref={sectionRefs.callout3}>
        <Callout
          idCallout={calloutData[2] as TcalloutProps}
          layout="simple"
          onButtonClick={(mode) => handleFormButtonClick(mode, "callout3")}
        />
        {renderFormBelowSection("callout3")}
      </div>      <Footer />
    </div>
  )
}

