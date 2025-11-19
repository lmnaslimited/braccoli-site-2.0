import AboutUs from './about-us'
import type { Metadata } from 'next'
import { fnGetCacheData } from '../../api/getData'
import { getPageMetadata } from '../../api/getPageMetadata'
import {clTransformerFactory} from "@repo/middleware"
import {  TaboutUsPageTarget, Tcontext } from '@repo/middleware/type'

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
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd, null, 2).replace(/</g, '\\u003c'),
          }}
        />
      )}
      <AboutUs idAboutUs={pageData} />
    </>
  )
}