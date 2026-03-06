import type { Metadata } from 'next'
import Solution from './solution'
import { fnGetCacheData } from '../../lib/strapi/get-data'
import { getPageMetadata } from '../../lib/metadata/page-metadata'
import { fnGetStatus } from '../../lib/strapi/get-status'
import { clTransformerFactory } from '@repo/middleware'
import { Tcontext, TsolutionPageTarget } from '@repo/middleware/types'

async function fnGetSolutionPageData(params: { locale: string }) {
  const { locale } = params
  const LStatus = await fnGetStatus()
  const LdContext: Tcontext = {
    locale: locale,
    caseStudiesLocale2: locale,
    status: LStatus,
  }

  const LdPageData: TsolutionPageTarget = await fnGetCacheData(
    LdContext,
    clTransformerFactory.fnCreateTransformer('solution')
  )

  return LdPageData
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const LdPageData = await fnGetSolutionPageData(await params)
  return getPageMetadata(LdPageData.solution.metaData)
}

export default async function SolutionPage({ params }: { params: Promise<{ locale: string }> }) {
  const LdPageData = await fnGetSolutionPageData(await params)
  const LdJsonLd = LdPageData.solution.metaData.schemaData
  return (
    <>
      <Solution idSolution={LdPageData} />
      {LdJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(LdJsonLd, null, 2).replace(/</g, '\\u003c'),
          }}
        />
      )}
    </>
  )
}