import type { Metadata } from 'next'
import Career from './career'
import { fnGetCacheData } from '../../lib/strapi/get-data'
import { getPageMetadata } from '../../lib/metadata/page-metadata'
import { fnGetStatus } from '../../lib/strapi/get-status'
import { clTransformerFactory } from '@repo/middleware'
import { TcareerPageTarget, Tcontext } from '@repo/middleware/types'

async function fnGetCareerPageData(params: { locale: string }) {
  const { locale } = params
  const LStatus = await fnGetStatus()
  const LdContext: Tcontext = { locale: locale, status: LStatus }
  const LdPageData: TcareerPageTarget = await fnGetCacheData(
    LdContext,
    clTransformerFactory.fnCreateTransformer('career')
  )
  return LdPageData
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const pageData = await fnGetCareerPageData(await params)
  return getPageMetadata(pageData.career.metaData)
}

export default async function CareerPage({ params }: { params: Promise<{ locale: string }> }) {
  const pageData = await fnGetCareerPageData(await params)
  const jsonLd = pageData.career.metaData.schemaData
  return (
    <>
      <Career idCareer={pageData} />
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