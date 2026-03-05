import type { Metadata } from 'next';
import ProductsComp from "../products";
import { fnGetCacheData } from '../../../lib/strapi/get-data'
import { getPageMetadata } from '../../../lib/metadata/page-metadata'
import { fnGetStatus } from '../../../lib/strapi/get-status'
import { clQuerySlug } from "../../../../../../packages/middleware/src/api/query";
import { clSlugsTransformer } from "../../../../../../packages/middleware/src/engine/transformer";
import { clTransformerFactory } from "@repo/middleware";
import { IQuery, ITransformer, Tcontext, TproductsPageTarget, TslugsSource, TslugsTarget, } from "@repo/middleware/types";

export async function generateStaticParams({ params }: { params: { locale: string } }) {
  const { locale } = params

  const ioQuery: IQuery<TslugsSource> = new clQuerySlug('products')
  const ioTransformer: ITransformer<TslugsSource, TslugsTarget> =
    new clSlugsTransformer('products', ioQuery)

  const slugs: TslugsTarget = await ioTransformer.fnExecute({ locale: locale, })

  return slugs.map(islug => ({
    slug: islug.slug
  }))
}

async function getProductsPageData({ slug, locale, status }: { slug: string; locale: string; status?: string }) {
  const context: Tcontext = {
    locale: locale,
    status: status,
    filters: {
      slug: {
        eq: slug
      }
    }
  }

  const pageData: TproductsPageTarget = await fnGetCacheData(
    context,
    clTransformerFactory.fnCreateTransformer('products')
  )

  return pageData
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string, slug: string }> }): Promise<Metadata> {
  const { slug, locale } = await params
  const LStatus = await fnGetStatus()
  const pageData = await getProductsPageData({ slug, locale, status: LStatus })

  if (!pageData?.products?.[0]?.metaData) {
    throw new Error(`Meta data not found for product slug: ${slug}`)
  }

  return getPageMetadata(pageData.products[0].metaData)
}

export default async function Products({ params }: { params: Promise<{ locale: string, slug: string }> }) {
  const { slug, locale } = await params
  const LStatus = await fnGetStatus()
  const pageData = await getProductsPageData({ slug, locale, status: LStatus })
  const jsonLd = pageData.products[0]?.metaData.schemaData
  return (
    <>
      <ProductsComp idProduct={pageData.products[0]!} />
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