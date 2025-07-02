import type { Metadata } from 'next'
import Solution from './solution'
import { getPageMetadata } from '../../api/getPageMetadata'
import { fnGetCacheData } from '../../api/getData'
import { clTransformerFactory, Tcontext, TsolutionPageTarget } from '@repo/middleware'

async function getSolutionPageData(params: { locale: string }) {
  const { locale } = params

  const context: Tcontext = {
    locale: locale,
    caseStudiesLocale2: locale
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
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd, null, 2).replace(/</g, '\\u003c'),
          }}
        />
      )}
      <Solution idSolution={pageData} />
    </>
  )
}