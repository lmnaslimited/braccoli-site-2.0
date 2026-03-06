import type { Metadata } from 'next'
import Pricing from './pricing'
import { fnGetCacheData } from '../../lib/strapi/get-data'
import { getPageMetadata } from '../../lib/metadata/page-metadata'
import { fnGetStatus } from '../../lib/strapi/get-status'
import { clTransformerFactory } from '@repo/middleware'
import { TcaseStudiesPageTarget, Tcontext, TpricingPageTarget } from '@repo/middleware/types'

async function fnGetPricingPageData(params: { locale: string }) {
  const { locale } = params

  const LStatus = await fnGetStatus()
  const LdPricingContext: Tcontext = {
    locale: locale,
    filters: {
      slug: {
        eq: 'erp-comparison-lens'
      }
    },
    status: LStatus
  }
  const LdPricingPageData: TcaseStudiesPageTarget = await fnGetCacheData(
    LdPricingContext,
    clTransformerFactory.fnCreateTransformer('caseStudies')
  )

  const LdContext: Tcontext = { locale: locale, status: LStatus } //Include publication status in context for pricing page data as well
  const LdPageData: TpricingPageTarget = await fnGetCacheData(
    LdContext,
    clTransformerFactory.fnCreateTransformer('pricing')
  )

  return {
    LdPricingPageData,
    LdPageData
  }
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { LdPageData } = await fnGetPricingPageData(await params)
  return getPageMetadata(LdPageData.pricing.metaData)
}

export default async function PricingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { LdPricingPageData, LdPageData } = await fnGetPricingPageData(await params)
  const LdJsonLd = LdPageData.pricing.metaData.schemaData
  return (
    <>
      <Pricing idPricing={LdPageData} idcaseStudies={LdPricingPageData} />
      {LdJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(LdJsonLd, null, 2).replace(/</g, '\\u003c'),
          }}
        />
      )}
    </>
  )
}