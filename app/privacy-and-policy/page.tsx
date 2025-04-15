import Link from "next/link";
import FAQs from "@repo/ui/components/faq";
import type { Theader, Titems, TtermPrivacy } from "@repo/ui/type";
import { ChevronRight, Shield, Mail, Globe } from "lucide-react";
import { fnGetData } from "../api/getData";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const privacyHeader: Theader = {
  textWithoutColor: "Privacy",
  text: "& Policy",
  subtitle: "Our Privacy Policy was last updated on 14-Apr 2023.",
};
const contentSections = [
  {
    paragraphs: [
      `LMNAs Cloud Solutions ("us", "we", or "our") operates https://lmnas.com or any of its subdomain sites. This page informs you of our policies regarding the collection, use and disclosure of Personal Information we receive from users through forms such as job applications, contact requests, etc.`,
      "We use your Personal Information only for providing and improving the experience of our website users. By submitting any of the above-mentioned forms, you agree to the collection and use of information in accordance with this policy.",
    ],
  },
];
const faqItems: Titems[] = [
  {
    question: "What does this Privacy Policy cover?",
    answer:
      "This policy outlines how LMNAs Cloud Solutions collects, uses, and protects personal information submitted through forms such as job applications, contact requests, and more. By submitting forms on https://lmnas.com or its subdomains, you agree to the collection and use of information in accordance with this policy.",
  },
  {
    question: "What personal information do we collect?",
    answer:
      "We may collect information including but not limited to your name, email, mobile number, country, region, and industry your company belongs to. This is used solely for providing and improving user experience.",
  },
  {
    question: "Do we send communications using your data?",
    answer:
      "Yes. We may use your information to send newsletters, marketing or promotional content, and support-related messages, based on the context of your submission.",
  },
  {
    question: "Do we use cookies?",
    answer:
      "As of now, LMNAs websites do not use cookies. If cookie usage is implemented in the future, users will be notified through an update in the privacy policy. We encourage users to review the policy periodically.",
  },
  {
    question: "How secure is your personal information?",
    answer:
      "We implement commercially acceptable means to protect your data. However, no method of internet transmission or electronic storage is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    question: "How do we handle policy updates?",
    answer:
      "We may update this Privacy Policy at any time. Changes become effective upon being posted on this page. Material changes may also be communicated via email or a website notice.",
  },
  {
    question: "Do we share your information with third-parties?",
    answer:
      "We do not share personal information outside LMNAs Cloud Solutions unless required by law, government authorities, or in case of fraud investigations.",
  },
  {
    question: "What about links to third-party websites?",
    answer:
      "Our blog or pages may contain links to third-party sites. We are not responsible for their privacy practices. Please review their privacy policies before sharing any personal data.",
  },
  {
    question: "Which law governs our privacy practices?",
    answer:
      "This Privacy Policy is governed by the laws of India. Any disputes related to privacy are subject to this policy and the Terms of Use of our website, under the jurisdiction of Chennai, Tamil Nadu.",
  },
];
const contactDetails = {
  paragraph:
    "If you have any questions about this Privacy Policy, You can contact us:",
  websiteLink: "https://www.lmnas.com",
  email: "hello@lmnas.com",
};
export default async function PrivacyPolicy() {
  const idPrivacy = await fnGetData<TtermPrivacy>("privacyPolicy", "en");
  console.log("PrivacyPolicy Data:", idPrivacy);
  return (
    <>
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
              <Shield className="w-16 h-16 mb-6 opacity-80" />
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                {idPrivacy.header.highlight}{" "}
                <span className="opacity-80">{idPrivacy.header.title}</span>
              </h1>
              <p className="text-primary-foreground/70 mt-4 max-w-2xl">
                {idPrivacy.header.subtitle}
              </p>
            </div>
          </div>
        </div>
        {/* Content Section */}
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* <div className="p-8 mb-12">
            <div className="prose prose-gray max-w-none">
              {contentSections.map((section, i) => (
                <section className="mb-8" key={i}>
                  {section.paragraphs.map((para, j) => (
                    <p key={j} className={`${j > 0 ? "mt-6" : ""} text-card-foreground leading-relaxed text-justify`}>
                      {para}
                    </p>
                  ))}
                </section>
              ))}
            </div>
          </div> */}
<div className="p-8 mb-12">
  <div className="prose prose-gray max-w-none text-card-foreground leading-relaxed text-justify">
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
    >
      {idPrivacy.acknowledgment}
    </ReactMarkdown>
  </div>
</div>
          {/* FAQ Section */}
          <div className="mb-12">
            <div className="flex items-center mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border"></div>
              <h2 className="text-2xl font-bold px-4 text-foreground">
                {idPrivacy.faq.heading.title}
              </h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border"></div>
            </div>
            <div className="bg-card rounded-xl shadow-sm border border-border p-6 md:p-8">
              <FAQs idFaq={idPrivacy.faq.point} />
            </div>
          </div>
          {/* Contact Section */}
          <div className="bg-card rounded-xl shadow-sm border border-border p-8 mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <span className="bg-muted p-2 rounded-full mr-3">
                <Mail className="w-5 h-5 text-muted-foreground" />
              </span>
              {idPrivacy.contact.label}
            </h2>
            <p className="text-card-foreground mb-6">
              {idPrivacy.contact.description}
            </p>
            <div className="space-y-4">
              <div className="flex items-start md:items-center flex-col md:flex-row md:space-x-2 p-4 bg-muted rounded-lg">
                <Globe className="w-5 h-5 text-muted-foreground mb-2 md:mb-0" />
                <span className="text-muted-foreground md:mr-2">Website:</span>
                <Link
                  href={idPrivacy.contact.websiteHref}
                  className="text-foreground font-medium hover:text-foreground/80 transition-colors flex items-center group"
                >
                  {idPrivacy.contact.websiteHref}
                  <ChevronRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </div>
              <div className="flex items-start md:items-center flex-col md:flex-row md:space-x-2 p-4 bg-muted rounded-lg">
                <Mail className="w-5 h-5 text-muted-foreground mb-2 md:mb-0" />
                <span className="text-muted-foreground md:mr-2">Email:</span>
                <a
                  href={`mailto:${idPrivacy.contact.emailHref}`}
                  className="text-foreground font-medium hover:text-foreground/80 transition-colors flex items-center group"
                >
                  {idPrivacy.contact.emailHref}
                  <ChevronRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
