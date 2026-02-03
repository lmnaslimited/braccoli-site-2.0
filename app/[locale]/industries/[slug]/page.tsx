import type { Metadata } from 'next'
import IndustryComp from '../industry'
import { fnGetCacheData } from '../../../utils/strapi/get-data'
import { getPageMetadata } from '../../../utils/metadata/page-metadata'
import { clQuerySlug } from '../../../../../../packages/middleware/src/api/query'
import { clSlugsTransformer } from '../../../../../../packages/middleware/src/engine/transformer'
import { clTransformerFactory } from '@repo/middleware'
import { IQuery, ITransformer, Tcontext, TindustriesPageTarget, TslugsSource, TslugsTarget } from '@repo/middleware/types'

export async function generateStaticParams({ params }: { params: { locale: string } }) {
  const { locale } = params
  const ioQuery: IQuery<TslugsSource> = new clQuerySlug('industries')
  const ioTransformer: ITransformer<TslugsSource, TslugsTarget> = new clSlugsTransformer('industries', ioQuery)
  const slugs: TslugsTarget = await ioTransformer.execute({ locale: locale })

  return slugs.map((islug) => ({
    slug: islug.slug
  }))
}

async function getIndustriesPageData({ slug, locale }: { slug: string; locale: string }) {
  const context: Tcontext = {
    locale: locale,
    filters: {
      slug: {
        eq: slug,
      },
    },
    caseStudiesLocale2: locale,
    caseStudiesFilters2: {
      heroSection: {
        tag: {
          eq: slug,
        },
      },
    },
  };

  const pageData: TindustriesPageTarget = await fnGetCacheData(
    context,
    clTransformerFactory.createTransformer('industries')
  )
  return pageData
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string, slug: string }> }): Promise<Metadata> {
  const { slug, locale } = await params
  const pageData = await getIndustriesPageData({ slug, locale })

  if (!pageData?.industries?.[0]?.metaData) {
    console.warn(`No metadata found for industry page: ${slug}`)
    return {}
  }

  return getPageMetadata(pageData.industries[0].metaData)
}

export default async function Industries({ params }: { params: Promise<{ locale: string, slug: string }> }) {
  const { slug, locale } = await params
  const pageData = await getIndustriesPageData({ slug, locale })
  const jsonLd = pageData.industries[0]?.metaData.schemaData
  return (
    <>
      <IndustryComp idIndustry={pageData} />
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