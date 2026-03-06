import type { Metadata } from 'next'
import IndustryComp from '../industry'
import { fnGetCacheData } from '../../../lib/strapi/get-data'
import { getPageMetadata } from '../../../lib/metadata/page-metadata'
import { fnGetStatus } from '../../../lib/strapi/get-status'
import { clQuerySlug } from '../../../../../../packages/middleware/src/api/query'
import { clSlugsTransformer } from '../../../../../../packages/middleware/src/engine/transformer'
import { clTransformerFactory } from '@repo/middleware'
import { IQuery, ITransformer, Tcontext, TindustriesPageTarget, TslugsSource, TslugsTarget } from '@repo/middleware/types'

export async function generateStaticParams({ params }: { params: { locale: string } }) {
  const { locale } = params
  const ioQuery: IQuery<TslugsSource> = new clQuerySlug('industries')
  const ioTransformer: ITransformer<TslugsSource, TslugsTarget> = new clSlugsTransformer('industries', ioQuery)
  const slugs: TslugsTarget = await ioTransformer.fnExecute({ locale: locale })

  return slugs.map((islug) => ({
    slug: islug.slug
  }))
}

async function fnGetIndustriesPageData({ slug, locale, status }: { slug: string; locale: string; status?: string }) {
  const LdContext: Tcontext = {
    locale: locale,
    status: status,
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

  const LdPageData: TindustriesPageTarget = await fnGetCacheData(
    LdContext,
    clTransformerFactory.fnCreateTransformer('industries')
  )
  return LdPageData
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string, slug: string }> }): Promise<Metadata> {
  const { slug, locale } = await params
  const pageData = await fnGetIndustriesPageData({ slug, locale })

  if (!pageData?.industries?.[0]?.metaData) {
    throw new Error("Meta data not found for industry page")
  }

  return getPageMetadata(pageData.industries[0].metaData)
}

export default async function Industries({ params }: { params: Promise<{ locale: string, slug: string }> }) {
  const { slug, locale } = await params
  const LStatus = await fnGetStatus()
  const LdPageData = await fnGetIndustriesPageData({ slug, locale, status: LStatus })
  const jsonLd = LdPageData.industries[0]?.metaData.schemaData
  return (
    <>
      <IndustryComp idIndustry={LdPageData} />
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