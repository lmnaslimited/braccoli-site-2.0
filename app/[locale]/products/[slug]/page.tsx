import type { Metadata } from 'next';
import ProductsComp from "../products";
import { getPageMetadata } from "../../../api/getPageMetadata";
import { fnGetCacheData } from "../../../api/getData";
import { clQuerySlug } from "../../../../../../packages/middleware/src/api/query";
import { clSlugsTransformer } from "../../../../../../packages/middleware/src/engine/transformer";
import {  IQuery, ITransformer, Tcontext, TproductsPageTarget, TslugsSource, TslugsTarget, } from "@repo/middleware/type";
import {clTransformerFactory} from "@repo/middleware"

export async function generateStaticParams({ params }: { params: { locale: string } }) {
  const { locale } = params

  const ioQuery: IQuery<TslugsSource> = new clQuerySlug('products')
  const ioTransformer: ITransformer<TslugsSource, TslugsTarget> =
    new clSlugsTransformer('products', ioQuery)

  const slugs: TslugsTarget = await ioTransformer.execute({ locale: locale, })

  return slugs.map(islug => ({
    slug: islug.slug
  }))
}

async function getProductsPageData({ slug, locale }: { slug: string; locale: string }) {
  const context: Tcontext = {
    locale: locale,
    filters: {
      slug: {
        eq: slug
      }
    }
  }

  const pageData: TproductsPageTarget = await fnGetCacheData(
    context,
    clTransformerFactory.createTransformer('products')
  )

  return pageData
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string, slug: string }> }): Promise<Metadata> {
  const { slug, locale } = await params
  const pageData = await getProductsPageData({ slug, locale })

  if (!pageData?.products?.[0]?.metaData) {
    throw new Error(`Meta data not found for product slug: ${slug}`)
  }

  return getPageMetadata(pageData.products[0].metaData)
}

export default async function Products({ params }: { params: Promise<{ locale: string, slug: string }> }) {
  const { slug, locale } = await params
  const pageData = await getProductsPageData({ slug, locale })
  const jsonLd = pageData.products[0]?.metaData.schemaData
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
      <ProductsComp idProduct={pageData.products[0]!} />
    </>
  )
}