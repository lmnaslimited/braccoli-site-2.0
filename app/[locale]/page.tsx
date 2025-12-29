import Home from './home/home'
import type { Metadata } from 'next'
import { fnGetCacheData } from '../api/strapi/get-data'
import { getPageMetadata } from '../api/metadata/page-metadata'
import { clTransformerFactory } from '@repo/middleware'
import { Tcontext, ThomePageTarget } from '@repo/middleware/types'

async function getHomePageData(params: { locale: string }) {
  const { locale } = params
  const context: Tcontext = { locale: locale }
  const pageData: ThomePageTarget = await fnGetCacheData(
    context,
    clTransformerFactory.createTransformer('home')
  )
  return pageData
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const pageData = await getHomePageData(await params)
  return getPageMetadata(pageData.home.metaData)
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const pageData = await getHomePageData(await params)
  const jsonLd = pageData.home.metaData.schemaData
  return (
    <>
      <Home idHome={pageData} />
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