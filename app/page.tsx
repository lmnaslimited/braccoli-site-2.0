"use client"
import { useState, useRef, ReactNode } from "react"
import { DynamicForm, LDContactFormConfig, LDBookingFormConfig, LDDownloadFormConfig } from "@repo/ui/components/form"
import Feature from "@repo/ui/components/feature"
import Hero from "@repo/ui/components/hero"
import Callout from "@repo/ui/components/callout"
import FAQs from "@repo/ui/components/faq"
import SocialProof from "@repo/ui/components/imageComp"
import Footer from "@repo/ui/components/footer"
import { TfeatureProps, TcalloutProps, TheroProps, TformMode } from "@repo/ui/type"
import { ArrowRight, CheckCircle } from "lucide-react"
import Navbar from "@repo/ui/components/navbar"
import { Button } from "@repo/ui/components/ui/button"

export default function Home() {
  const [LActiveSection, fnSetActiveSection] = useState<string | null>(null)
  const [LFormMode, fnSetFormMode] = useState<TformMode>(null)
  const [LSuccessMessage, fnSetSuccessMessage] = useState<string | null>(null)

  const LDSectionRefs = {
    hero: useRef<HTMLDivElement>(null),
    callout1: useRef<HTMLDivElement>(null),
    callout2: useRef<HTMLDivElement>(null),
    callout3: useRef<HTMLDivElement>(null),
  }

  const fnHandleFormButtonClick = (iMode: TformMode, iSectionId: string) => {
    if (LActiveSection === iSectionId && LFormMode === iMode) {
      fnSetActiveSection(null)
      fnSetFormMode(null)
    } else {
      fnSetActiveSection(iSectionId)
      fnSetFormMode(iMode)
      fnSetSuccessMessage(null)

      setTimeout(() => {
        const currentRef = LDSectionRefs[iSectionId as keyof typeof LDSectionRefs]
        if (currentRef?.current) {
          currentRef.current.scrollIntoView({
            behavior: "smooth",
            block: "center",
          })
        }
      }, 50)
    }
  }

  const fnHandleFormSuccess = (idFormData: Record<string, unknown>, iMessage: string) => {
    fnSetSuccessMessage(iMessage)
    fnSetFormMode(null)
  }

  const fnRenderFormBelowSection = (iSectionId: string): ReactNode => {
    if (LActiveSection !== iSectionId && !LSuccessMessage) return null

    let LDFormConfig = undefined
    switch (LFormMode) {
      case "contact":
        LDFormConfig = LDContactFormConfig
        break
      case "booking":
        LDFormConfig = LDBookingFormConfig
        break
      case "download":
        LDFormConfig = LDDownloadFormConfig
        break
      default:
        if (!LSuccessMessage) return null
    }

    return (
      <div className="w-full bg-white py-8">
        <div className="container mx-auto px-4">
          {LSuccessMessage ? (
            <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-6 text-center">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Success!</h3>
              <p className="mb-6">{LSuccessMessage}</p>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  fnSetSuccessMessage(null)
                  fnSetActiveSection(null)
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }, 300)
                }}
              >
                Close
              </Button>
            </div>
          ) : LDFormConfig ? (
            <DynamicForm
              config={LDFormConfig}
              onSuccess={fnHandleFormSuccess}
              onCancel={() => {
                fnSetActiveSection(null)
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }, 300)
              }}
            />
          ) : null}
        </div>
      </div>
    )
  }

  const LDHero = {
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

  const LAFeatures = [
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
        textWithoutColor: "What to Expect When You Work with LMNAs",
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

  const LACalloutData = [
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
        }
      ],
      points: {
        title: "We understand the challenges you face:",
        items: [
          "Your Sales Manager struggles with manual pricing and lost leads.",
          "Your Procurement team misses deadlines due to poor coordination.",
          "Your Operations Manager is tired of firefighting inefficiencies.",
          "Your Finance Manager can't trust the numbers during quarterly reviews."
        ],
        actionText: "We get it. And we're here to fix it—for good."
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
        subtitle: "Let's work together to build a future where your business operates at its best—every single day. The first step to solving your enterprise problems is just a conversation away.",
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
      variant: "text-black"
    }
  ]

  const LDFaq = {
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
    ]
  }

  return (
    <div>
      <Navbar />
      <div ref={LDSectionRefs.hero}>
        <Hero
          idHero={LDHero as TheroProps}
          onButtonClick={(mode) => fnHandleFormButtonClick(mode as TformMode, "hero")}
        />
        {fnRenderFormBelowSection("hero")}
      </div>
      <div className="bg-grayBackground">
        <Feature idFeature={{ ...LAFeatures[0], iShowButton: true, buttonPosition: "header" } as TfeatureProps} />
      </div>
      <div className="my-16">
        <Feature idFeature={{ ...LAFeatures[1], iShowButton: false, layout: "centered" } as TfeatureProps} />
      </div>
      <div className="bg-dark/70" ref={LDSectionRefs.callout1}>
        <Callout
          idCallout={LACalloutData[0] as TcalloutProps}
          onButtonClick={(mode) => fnHandleFormButtonClick(mode as TformMode, "callout1")}
        />
        {fnRenderFormBelowSection("callout1")}
      </div>
      <div className="my-16">
        <Feature idFeature={{ ...LAFeatures[2], layout: "centered", iShowButton: true, buttonPosition: "bottom-center" } as TfeatureProps} />
      </div>
      <SocialProof />
      <div className="bg-dark/70" ref={LDSectionRefs.callout2}>
        <Callout
          idCallout={LACalloutData[1] as TcalloutProps}
          onButtonClick={(mode) => fnHandleFormButtonClick(mode as TformMode, "callout2")}
        />
        {fnRenderFormBelowSection("callout2")}
      </div>
      <div className="my-16">
        <Feature idFeature={{ ...LAFeatures[3], layout: "centered", iShowButton: false } as TfeatureProps} />
      </div>
      <div className="bg-grayBackground">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto divide-y-2 divide-muted">
            <h2 className="text-center text-3xl font-extrabold text-primary sm:text-4xl">
              {LDFaq.title}
            </h2>
            <FAQs idFaq={LDFaq.items} />
          </div>
        </div>
      </div>
      <div ref={LDSectionRefs.callout3}>
        <Callout
          idCallout={{ ...LACalloutData[2], layout: "simple" } as TcalloutProps}
          onButtonClick={(mode) => fnHandleFormButtonClick(mode as TformMode, "callout3")}
        />
        {fnRenderFormBelowSection("callout3")}
      </div>
      <Footer />
    </div>
  )
}