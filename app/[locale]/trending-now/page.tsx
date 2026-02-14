import type { Metadata } from 'next'
import TrendingNowPage from './trending-now'
import { getPageMetadata } from '../../api/getPageMetadata'
import { fnGetCacheData } from '../../api/getData'
import { clTransformerFactory, Tcontext, TtrendsPageTarget } from '@repo/middleware'
import { fnGetStatus } from '../../utils/strapi/get-status'

async function getTrendingNowPageData(params: { locale: string }) {
  const { locale } = params

  const lStatus = await fnGetStatus()   //Fetch publication status from Strapi and pass it to context 
  const context: Tcontext = { locale: locale, status: lStatus }

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