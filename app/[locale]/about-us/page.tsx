import type { Metadata } from 'next'
import AboutUs from './about-us'
import { fnGetCacheData } from '@app/lib/strapi/get-data'
import { getPageMetadata } from '@app/lib/metadata/page-metadata'
import { clTransformerFactory } from "@repo/middleware"
import { TaboutUsPageTarget, Tcontext } from '@repo/middleware/type'

async function getAboutUsPageData(params: { locale: string }) {
  const { locale } = params
  const context: Tcontext = { locale: locale }
  const pageData: TaboutUsPageTarget = await fnGetCacheData(
    context,
    clTransformerFactory.createTransformer('aboutUs')
  )
  return pageData
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const pageData = await getAboutUsPageData(await params)
  return getPageMetadata(pageData.aboutUs.metaData)
}

export default async function AboutUsPage({ params }: { params: Promise<{ locale: string }> }) {
  const pageData = await getAboutUsPageData(await params)
  const jsonLd = pageData.aboutUs.metaData.schemaData

  return (
    <>
      <AboutUs idAboutUs={pageData} />
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