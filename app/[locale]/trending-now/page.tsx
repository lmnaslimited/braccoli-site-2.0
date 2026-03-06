import type { Metadata } from 'next'
import TrendingNowPage from './trending-now'
import { fnGetCacheData } from '../../lib/strapi/get-data'
import { getPageMetadata } from '../../lib/metadata/page-metadata'
import { fnGetStatus } from '../../lib/strapi/get-status'
import { clTransformerFactory } from '@repo/middleware'
import { Tcontext, TtrendsPageTarget } from '@repo/middleware/types'

async function fnGetTrendingNowPageData(params: { locale: string }) {
  const { locale } = params

  const LStatus = await fnGetStatus()   //Fetch publication status from Strapi and pass it to context 
  const LdContext: Tcontext = { locale: locale, status: LStatus }

  const ldPageData: TtrendsPageTarget = await fnGetCacheData(
    LdContext,
    clTransformerFactory.fnCreateTransformer('trend')
  )

  return ldPageData
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const LdPageData = await fnGetTrendingNowPageData(await params)
  return getPageMetadata(LdPageData.trend.metaData)
}

export default async function TrendingNow({ params }: { params: Promise<{ locale: string }> }) {
  const pageData = await fnGetTrendingNowPageData(await params)
  const jsonLd = pageData.trend.metaData.schemaData
  return (
    <>
      <TrendingNowPage idTrend={pageData} />
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