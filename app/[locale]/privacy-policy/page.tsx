import Link from "next/link";
import type { Metadata } from 'next';
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import ReactMarkdown from "react-markdown";
import FAQs from "@repo/ui/components/faq";
import { fnGetCacheData } from "../../api/getData";
import { getPageMetadata } from '../../api/getPageMetadata';
import { ChevronRight, Shield, Mail, Globe } from "lucide-react";
import { clTransformerFactory, Tcontext, TprivacyPolicyPageSource } from "@repo/middleware";

async function getPrivacyPolicyData(locale: string) {
  const context: Tcontext = { locale: locale }
  const pageData: TprivacyPolicyPageSource = await fnGetCacheData(
    context,
    clTransformerFactory.createTransformer('privacyPolicy')
  )
  return pageData
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const pageData = await getPrivacyPolicyData(locale)
  return getPageMetadata(pageData.privacyPolicy.metaData)
}

export default async function PrivacyPolicy({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const idPrivacy = await getPrivacyPolicyData(locale)
  const jsonLd = idPrivacy.privacyPolicy.metaData.schemaData
  return (
    <>
      {
        jsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(jsonLd, null, 2).replace(/</g, '\\u003c'),
            }}
          />
        )
      }
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
                {idPrivacy.privacyPolicy.header.highlight}{" "}
                <span className="opacity-80">{idPrivacy.privacyPolicy.header.title}</span>
              </h1>
              <p className="text-primary-foreground/70 mt-4 max-w-2xl">
                {idPrivacy.privacyPolicy.header.subtitle}
              </p>
            </div>
          </div>
        </div>
        {/* Content Section */}
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="p-8 mb-12">
            <div className="prose prose-gray max-w-none text-card-foreground leading-relaxed text-justify">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
              >
                {idPrivacy.privacyPolicy.acknowledgment}
              </ReactMarkdown>
            </div>
          </div>
          {/* FAQ Section */}
          <div className="mb-12">
            <div className="flex items-center mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border"></div>
              <h2 className="text-2xl font-bold px-4 text-foreground">
                {idPrivacy.privacyPolicy.faq.heading.title}
              </h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border"></div>
            </div>
            <div className="bg-card rounded-xl shadow-sm border border-border p-6 md:p-8">
              <FAQs idFaq={idPrivacy.privacyPolicy.faq.point} />
            </div>
          </div>
          {/* Contact Section */}
          <div className="bg-card rounded-xl shadow-sm border border-border p-8 mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <span className="bg-muted p-2 rounded-full mr-3">
                <Mail className="w-5 h-5 text-muted-foreground" />
              </span>
              {idPrivacy.privacyPolicy.contact.label}
            </h2>
            <p className="text-card-foreground mb-6">
              {idPrivacy.privacyPolicy.contact.description}
            </p>
            <div className="space-y-4">
              <div className="flex items-start md:items-center flex-col md:flex-row md:space-x-2 p-4 bg-muted rounded-lg">
                <Globe className="w-5 h-5 text-muted-foreground mb-2 md:mb-0" />
                <span className="text-muted-foreground md:mr-2">Website:</span>
                <Link
                  href={idPrivacy.privacyPolicy.contact.websiteHref}
                  className="text-foreground font-medium hover:text-foreground/80 transition-colors flex items-center group"
                >
                  {idPrivacy.privacyPolicy.contact.websiteHref}
                  <ChevronRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </div>
              <div className="flex items-start md:items-center flex-col md:flex-row md:space-x-2 p-4 bg-muted rounded-lg">
                <Mail className="w-5 h-5 text-muted-foreground mb-2 md:mb-0" />
                <span className="text-muted-foreground md:mr-2">Email:</span>
                <a
                  href={`mailto:${idPrivacy.privacyPolicy.contact.emailHref}`}
                  className="text-foreground font-medium hover:text-foreground/80 transition-colors flex items-center group"
                >
                  {idPrivacy.privacyPolicy.contact.emailHref}
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

