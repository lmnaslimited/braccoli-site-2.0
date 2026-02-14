import type { Metadata } from 'next'
import AboutUs from './about-us'
import { fnGetCacheData } from '../../api/getData'
import { getPageMetadata } from '../../api/getPageMetadata'
import { clTransformerFactory, TaboutUsPageTarget, Tcontext } from '@repo/middleware'
import { fnGetStatus } from '../../utils/strapi/get-status'

async function getAboutUsPageData(params: { locale: string }) {
  const { locale } = params
  const lstatus = await fnGetStatus()   //Fetch publication status from Strapi and pass it to context 
  const context: Tcontext = { locale: locale ,status:lstatus}
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