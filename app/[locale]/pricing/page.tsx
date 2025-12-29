import type { Metadata } from 'next'
import Pricing from './pricing'
import { fnGetCacheData } from '../../api/getData'
import { getPageMetadata } from '../../api/getPageMetadata'
import { clTransformerFactory } from '@repo/middleware'
import { TcaseStudiesPageTarget, Tcontext, TpricingPageTarget } from '@repo/middleware/types'

async function getPricingPageData(params: { locale: string }) {
  const { locale } = params

  const pricingContext: Tcontext = {
    locale: locale,
    filters: {
      slug: {
        eq: 'erp-comparison-lens'
      }
    }
  }
  const pricingPageData: TcaseStudiesPageTarget = await fnGetCacheData(
    pricingContext,
    clTransformerFactory.createTransformer('caseStudies')
  )

  const context: Tcontext = { locale: locale, }
  const pageData: TpricingPageTarget = await fnGetCacheData(
    context,
    clTransformerFactory.createTransformer('pricing')
  )

  return {
    pricingPageData,
    pageData
  }
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { pageData } = await getPricingPageData(await params)
  return getPageMetadata(pageData.pricing.metaData)
}

export default async function PricingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { pricingPageData, pageData } = await getPricingPageData(await params)
  const jsonLd = pageData.pricing.metaData.schemaData
  return (
    <>
      <Pricing idPricing={pageData} idcaseStudies={pricingPageData} />
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd, null, 2).replace(/</g, '\\u003c'),
          }}
        />
      )}
    </>
  )
}