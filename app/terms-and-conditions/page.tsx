import Link from "next/link"
import FAQs from "@repo/ui/components/faq"
import Navbar from "@repo/ui/components/navbar"
import Footer from "@repo/ui/components/footer"
import type { Theader, Titems } from "@repo/ui/type"
import { ChevronRight, FileText, Mail, Globe } from "lucide-react"

export const termsHeader: Theader = {
  textWithoutColor: "Terms &",
  text: "Conditions",
  subtitle: "Our Terms and Conditions were last updated on 14-Apr 2023.",
}

export const introParagraph = "Please read these terms and conditions carefully before using Our Service."

export const contentSections = [
  {
    heading: "Acknowledgment",
    paragraphs: [
      "These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and https://lmnas.com and its subdomains are a property of LMNAs Cloud Solutions, #B206, Radiance Royal, Poonthamalle Chennai - 56. These Terms and Conditions set out the rights and obligations of all users regarding using the Service.",
      "Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.",
      "By accessing or using the Service, You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.",
    ],
  },
]

export const faqsHeader: Theader = {
  textWithoutColor: "",
  text: "Key User Responsibilities & Clarifications",
}

export const faqItems: Titems[] = [
  {
    question: "What details are required when registering an account?",
    answer:
      "When submitting a form such as Contact Us, Job Application, or Trial Request, certain forms may require you to register with nectar.lmnas.com. You must provide information that is accurate, complete, and current. Failing to do so may impact communication effectiveness.",
  },
  {
    question: "What responsibilities do I hold when submitting content?",
    answer:
      "You are solely responsible for any content you submit, including its legality, reliability, and appropriateness.",
  },
  {
    question: "Which laws apply to the use of this service?",
    answer:
      "The Terms and Conditions and your use of this website are governed by the laws of India, unless otherwise specified. Disputes are subject to the exclusive jurisdiction of Chennai, Tamilnadu courts.",
  },
  {
    question: "How is my payment information handled?",
    answer:
      "While billing details may be collected, we never collect sensitive card data. All payment information is securely processed through authorized third-party payment partners.",
  },
  {
    question: "What personal information may be collected?",
    answer:
      "We may collect information such as your IP address, browser type, country, and device details to optimize your experience and content delivery.",
  },
  {
    question: "How will I be informed of changes to these terms?",
    answer:
      "We may revise these Terms at any time. For material changes, we aim to provide a 30-day notice. Continued use after updates implies acceptance.",
  },
  {
    question: "How is my email address utilized?",
    answer:
      "We may use your email to send support responses, product/service updates, or relevant promotional content if applicable.",
  },
  {
    question: "Is sharing a mobile number mandatory?",
    answer:
      "Providing your mobile number is optional but can enhance the speed and clarity of form-based communication.",
  },
  {
    question: "Why is my country of residence collected?",
    answer: "This information helps us tailor offerings and content relevant to your region and compliance needs.",
  },
  {
    question: "How do I opt out of promotional emails?",
    answer:
      "You can unsubscribe by emailing hello@lmnas.com. Processing takes up to 5 working days. Transactional messages may still be sent.",
  },
]

export const contactDetails = {
  paragraph: "If you have any questions about these Terms and Conditions, You can contact us:",
  websiteLink: "https://www.lmnas.com",
  email: "hello@lmnas.com",
}

export default function TermsAndConditions() {
  return (
    <>
      <Navbar />
      <div className="bg-background min-h-screen">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-primary text-primary-foreground py-20">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-background"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-muted to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-muted to-transparent"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 max-w-4xl">
            <div className="flex flex-col items-center text-center">
              <FileText className="w-16 h-16 mb-6 opacity-80" />
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                {termsHeader.textWithoutColor} <span className="opacity-80">{termsHeader.text}</span>
              </h1>
              <p className="text-primary-foreground/70 mt-4 max-w-2xl">{termsHeader.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="p-8 mb-12">
            <p className="font-medium text-foreground mb-6 text-center">{introParagraph}</p>

            <div className="prose prose-gray max-w-none">
              {contentSections.map((section, i) => (
                <section className="mb-8" key={i}>
                  <h2 className="text-xl font-bold text-foreground mb-6 flex items-center">
                    <span className="bg-muted p-2 rounded-full mr-3">
                      <FileText className="w-5 h-5 text-muted-foreground" />
                    </span>
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((para, j) => (
                    <p key={j} className={`${j > 0 ? "mt-6" : ""} text-card-foreground leading-relaxed text-justify`}>
                      {para}
                    </p>
                  ))}
                </section>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-12">
            <div className="flex items-center mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border"></div>
              <h2 className="text-2xl font-bold px-4 text-foreground">{faqsHeader.text}</h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border"></div>
            </div>
            <div className="bg-card rounded-xl shadow-sm border border-border p-6 md:p-8">
              <FAQs idFaq={faqItems} />
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-card rounded-xl shadow-sm border border-border p-8 mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <span className="bg-muted p-2 rounded-full mr-3">
                <Mail className="w-5 h-5 text-muted-foreground" />
              </span>
              Contact Us
            </h2>
            <p className="text-card-foreground mb-6">{contactDetails.paragraph}</p>

            <div className="space-y-4">
              <div className="flex items-start md:items-center flex-col md:flex-row md:space-x-2 p-4 bg-muted rounded-lg">
                <Globe className="w-5 h-5 text-muted-foreground mb-2 md:mb-0" />
                <span className="text-muted-foreground md:mr-2">Website:</span>
                <Link
                  href={contactDetails.websiteLink}
                  className="text-foreground font-medium hover:text-foreground/80 transition-colors flex items-center group"
                >
                  {contactDetails.websiteLink}
                  <ChevronRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </div>

              <div className="flex items-start md:items-center flex-col md:flex-row md:space-x-2 p-4 bg-muted rounded-lg">
                <Mail className="w-5 h-5 text-muted-foreground mb-2 md:mb-0" />
                <span className="text-muted-foreground md:mr-2">Email:</span>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="text-foreground font-medium hover:text-foreground/80 transition-colors flex items-center group"
                >
                  {contactDetails.email}
                  <ChevronRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
