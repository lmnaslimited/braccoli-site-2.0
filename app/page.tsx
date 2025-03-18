import Header from "@repo/ui/components/header";
import Feature from "@repo/ui/components/feature"
import Footer from "@repo/ui/components/footer";
import Hero from "@repo/ui/components/hero"
import Callout from "@repo/ui/components/callout";
import FAQs from "@repo/ui/components/faq";
import SocialProof from "@repo/ui/components/imageComp";
import {Tfeature, TcalloutProps, TheroProps} from "@repo/ui/type"
import { ArrowRight } from "lucide-react";

export default function Home() {

  const hero = {
    heading:{
      textWithoutColor:"Reimagine Your Business.",
      text:"Achieve the Extraordinary.",
      subtitle:"From seamless operations to actionable insights, LMNAs empowers businesses to overcome their toughest challenges and unlock growth—no matter the industry.",
    },
    buttons:[
      {
        label: "Book Your Free Consultation",
        href:"/",
        variant: "default",
        icon:<ArrowRight className="size-6" />,
        iconPosition: "after",
      },
      {
        label: "Explore Our Solution",
        href:"/",
        variant: "outline",
        icon:<ArrowRight className="size-6" />,
        iconPosition: "after",
      },
    ],
    image:{
      src: "https://res.cloudinary.com/lmnas/image/upload/v1742273824/Website/placeholder/placeholder.svg",
      alt: "hero-image"
    }
  }
const feature=[
  {
      header: {
          textWithoutColor:"Why Choose LMNAs?",
          text:"We solve problems that matter."
      },
      button:{
          label:"See How We Can Help You",
          href:"/"
      },
      items:[
          { question: "Is inefficiency slowing you down?", answer: "Our solutions streamline your processes, boosting productivity across your organization."},
          { question: "Are disjointed systems holding your teams back?", answer: "We integrate your systems, ensuring seamless communication and collaboration."},
          { question: "Do you need real-time insights to make smarter decisions?", answer: "Our analytics tools provide actionable insights, empowering you to make data-driven decisions."},
          { question: "Looking for a trusted partner in your digital transformation?", answer: "With decades of experience, we're committed to your success every step of the way."},
      ]
  },
  {
      header: {
          badge:"Why Choose Us",
          textWithoutColor:"Why Businesses Trust LMNAs",
          subtitle:" We don't just provide solutions—we help you solve problems that matter."
      },
      items:[
          { question: "Tailored Solutions", answer: "We customize our ERP and solutions to fit your specific industry needs.", icon:"Sliders"},
          { question: "End-to-End Expertise", answer: "From CRM and CPQ to Analytics and HRMS, we integrate and streamline your enterprise processes.", icon:"Users"},
          { question: "Proven Results", answer: "Decades of experience helping businesses reduce inefficiencies, improve profitability, and scale effortlessly.", icon:"TrendingUp"},
          { question: "Trusted Advisors", answer: "LMNAs consultants partner with you every step of the way to ensure success.", icon:"HeadphonesIcon"},
      ]
  },
  {
      header: {
          badge:"Solutions",
          textWithoutColor:"Powerful Solutions Tailored to Your Needs",
          subtitle:"From ERP to AI-powered analytics, we offer a comprehensive suite of solutions to drive your business forward."
      },
      button:{
          label:"Explore Our Solutions",
          href:"/"
      },
      items:[
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
      ]
  },
  {
    header: {
        badge:"Customer Journey",
        textWithoutColor:" What to Expect When You Work with LMNAs",
        subtitle:"Our proven process ensures a smooth transition and maximizes the value of your investment."
    },
    items:[
        { question: "Discovery Session", answer: "Understand your pain points and goals.", icon:"CheckCircle"},
        { question: "Customized Roadmap", answer: "Tailored solutions designed for your business.", icon:"CheckCircle"},
        { question: "Implementation", answer: "Seamless integration of LMNAs tools into your workflows.", icon:"CheckCircle"},
        { question: "Continuous Support", answer: "Ongoing training, optimization, and enhancements.", icon:"CheckCircle"},
    ]
},
]

const calloutData = [
  {
    header:{
       textWithoutColor: "Does This Sound Like Your Business?",
     subtitle:
      "If so, you're in the right place.",
    },
    buttons: [
      {
        label: "Start Solving Your Problems Today",
        href: "https://nectar.lmnas.com/book_appointment",
        variant: "default",
      }
    ],
    points:{
      title: "We understand the challenges you face:",
      items:
      ["Your Sales Manager struggles with manual pricing and lost leads.",
      "Your Procurement team misses deadlines due to poor coordination.",
      "Your Operations Manager is tired of firefighting inefficiencies.",
      "Your Finance Manager can't trust the numbers during quarterly reviews."],
      actionText:"We get it. And we're here to fix it—for good."
    },
  },
  {
  header:{
     textWithoutColor: "Your Transformation Starts Here.",
   subtitle:
    "The first step to solving your enterprise problems is just a conversation away.",
  },
  buttons: [
    {
      label: "Book a Free Consultation Now",
      href: "https://nectar.lmnas.com/book_appointment",
      variant: "default",
    },
    {
      label: "Talk to an Expert",
      href: "#contact",
      variant: "outline",
    },
  ],
},
{
  header:{
    textWithoutColor: "Ready to Eliminate Your Enterprise Challenges?",
  subtitle:
   " Let's work together to build a future where your business operates at its best—every single day.The first step to solving your enterprise problems is just a conversation away.",
 },
 buttons: [
   {
     label: "Book Your Free Consultation",
     href: "https://nectar.lmnas.com/book_appointment",
     variant: "default",
   },
   {
     label: "Contact Us Now",
     href: "#contact",
     variant: "outline",
   },
 ],
 variant: "text-black"
}
]
  return (
<div>
<Header />
<Hero iHero={hero as TheroProps}/>
<div className="bg-grayBackground">
<Feature iFeature={feature[0] as Tfeature}/>
</div>
<div className="my-16">
<Feature iShowButton={false} layout="centered" iFeature={feature[1]as Tfeature} />
</div>
<div className="bg-dark/70">
  <Callout iCallout={calloutData[0] as TcalloutProps}/>
</div>
<div className="my-16">
<Feature layout="centered" buttonPosition="bottom-center" iFeature={feature[2]as Tfeature}/>
</div>
<SocialProof />
<div className="bg-dark/70">
  <Callout iCallout={calloutData[1] as TcalloutProps} />
</div>
<div className="my-16">
<Feature layout="centered" iShowButton={false} iFeature={feature[3]as Tfeature} />
</div>
<FAQs />
<Callout iCallout={calloutData[2] as TcalloutProps} layout="simple" />
<Footer />
</div>
  )
}

