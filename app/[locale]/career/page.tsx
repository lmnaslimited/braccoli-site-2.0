import type { Metadata } from 'next'
import Career from './career'
import { fnGetCacheData } from '../../api/getData'
import { getPageMetadata } from '../../api/getPageMetadata'
import { clTransformerFactory, TcareerPageTarget, Tcontext } from '@repo/middleware'

async function getCareerPageData(params: { locale: string }) {
  const { locale } = params
  const context: Tcontext = { locale: locale }
  const pageData: TcareerPageTarget = await fnGetCacheData(
    context,
    clTransformerFactory.createTransformer('career')
  )
  return pageData
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const pageData = await getCareerPageData(await params)
  return getPageMetadata(pageData.career.metaData)
}

export default async function CareerPage({ params }: { params: Promise<{ locale: string }> }) {
  const pageData = await getCareerPageData(await params)
  const jsonLd = pageData.career.metaData.schemaData
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
      <Career idCareer={pageData} />
    </>
  )
}