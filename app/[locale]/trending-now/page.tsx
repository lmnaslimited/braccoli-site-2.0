import type { Metadata } from 'next'
import TrendingNowPage from './trending-now'
import { fnGetCacheData } from '../../utils/strapi/get-data'
import { getPageMetadata } from '../../utils/metadata/page-metadata'
import { clTransformerFactory } from '@repo/middleware'
import { Tcontext, TtrendsPageTarget } from '@repo/middleware/types'

async function getTrendingNowPageData(params: { locale: string }) {
  const { locale } = params

  const context: Tcontext = { locale: locale }

  const pageData: TtrendsPageTarget = await fnGetCacheData(
    context,
    clTransformerFactory.createTransformer('trend')
  )

  return pageData
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const pageData = await getTrendingNowPageData(await params)
  return getPageMetadata(pageData.trend.metaData)
}

export default async function TrendingNow({ params }: { params: Promise<{ locale: string }> }) {
  const pageData = await getTrendingNowPageData(await params)
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