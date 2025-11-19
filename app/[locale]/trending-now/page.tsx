import type { Metadata } from 'next'
import TrendingNowPage from './trending-now'
import { getPageMetadata } from '../../api/getPageMetadata'
import { fnGetCacheData } from '../../api/getData'
import {  Tcontext, TtrendsPageTarget } from '@repo/middleware/type'
import { clTransformerFactory } from '@repo/middleware'

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
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd, null, 2).replace(/</g, '\\u003c'),
          }}
        />
      )}
      <TrendingNowPage idTrend={pageData} />
    </>
  )
}