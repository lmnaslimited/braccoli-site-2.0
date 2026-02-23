import type { Metadata } from 'next'
import Solution from './solution'
import { fnGetCacheData } from '../../lib/strapi/get-data'
import { getPageMetadata } from '../../lib/metadata/page-metadata'
import { fnGetStatus } from '../../lib/strapi/get-status'
import { clTransformerFactory } from '@repo/middleware'
import { Tcontext, TsolutionPageTarget } from '@repo/middleware/types'

async function getSolutionPageData(params: { locale: string }) {
  const { locale } = params
  const LStatus = await fnGetStatus()
  const context: Tcontext = {
    locale: locale,
    caseStudiesLocale2: locale,
    status: LStatus,
  }

  const pageData: TsolutionPageTarget = await fnGetCacheData(
    context,
    clTransformerFactory.createTransformer('solution')
  )

  return pageData
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const pageData = await getSolutionPageData(await params)
  return getPageMetadata(pageData.solution.metaData)
}

export default async function SolutionPage({ params }: { params: Promise<{ locale: string }> }) {
  const pageData = await getSolutionPageData(await params)
  const jsonLd = pageData.solution.metaData.schemaData
  return (
    <>
      <Solution idSolution={pageData} />
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