import type { Metadata } from 'next'
import AboutUs from './about-us'
import { fnGetCacheData } from '../../lib/strapi/get-data'
import { getPageMetadata } from '../../lib/metadata/page-metadata'
import { fnGetStatus } from '../../lib/strapi/get-status'
import { clTransformerFactory } from '@repo/middleware'
import type { Tcontext, TaboutUsPageTarget } from '@repo/middleware/types'

async function fnGetAboutUsPageData(params: { locale: string }) {
  const { locale } = params
  const LStatus = await fnGetStatus()
  const LdContext: Tcontext = { locale: locale, status: LStatus }
  const LdPageData: TaboutUsPageTarget = await fnGetCacheData(
    LdContext,
    clTransformerFactory.fnCreateTransformer('aboutUs')
  )
  return LdPageData
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const LdPageData = await fnGetAboutUsPageData(await params)
  return getPageMetadata(LdPageData.aboutUs.metaData)
}

export default async function AboutUsPage({ params }: { params: Promise<{ locale: string }> }) {
  const LdPageData = await fnGetAboutUsPageData(await params)
  const LdjsonLd = LdPageData.aboutUs.metaData.schemaData

  return (
    <>
      <AboutUs idAboutUs={LdPageData} />
      {LdjsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(LdjsonLd, null, 2).replace(/</g, '\\u003c'),
          }}
        />
      )}
    </>
  )
}