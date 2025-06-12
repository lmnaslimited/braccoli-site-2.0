import type { Metadata } from 'next'
import Pricing from './pricing'
import { getPageMetadata } from '../../api/getPageMetadata'
import { fnGetCacheData } from '../../api/getData'
import { clTransformerFactory, TcaseStudiesPageTarget, Tcontext, TpricingPageTarget } from '@repo/middleware'

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
  return <Pricing idPricing={pageData} idcaseStudies={pricingPageData} />
}