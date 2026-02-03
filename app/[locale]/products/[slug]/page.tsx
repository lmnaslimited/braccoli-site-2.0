import type { Metadata } from 'next';
import ProductsComp from "../products";
import { fnGetCacheData } from '../../../utils/strapi/get-data'
import { getPageMetadata } from '../../../utils/metadata/page-metadata'
import { clQuerySlug } from "../../../../../../packages/middleware/src/api/query";
import { clSlugsTransformer } from "../../../../../../packages/middleware/src/engine/transformer";
import { clTransformerFactory } from "@repo/middleware";
import { IQuery, ITransformer, Tcontext, TproductsPageTarget, TslugsSource, TslugsTarget, } from "@repo/middleware/types";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";


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

async function getProductsPageData({
  slug,
  locale,
  status,
}: {
  slug: string;
  locale: string;
  status: "draft" | "published";
}) {
  const context: Tcontext = {
    locale,
    filters: {
      slug: { eq: slug },
    },
    status
  };

  return fnGetCacheData(
    context,
    clTransformerFactory.createTransformer("products")
  );
}

// export async function generateMetadata({ params }: { params: Promise<{ locale: string, slug: string }> }): Promise<Metadata> {
//   const { slug, locale } = await params
//   const pageData = await getProductsPageData({ slug, locale })

//   if (!pageData?.products?.[0]?.metaData) {
//     console.warn(`No metadata found for product page: ${slug}`)
//     return {}
//   }

//   return getPageMetadata(pageData?.products?.[0]?.metaData)
// }

export default async function Products({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string; slug: string }>;
  searchParams?: { status?: string };
}) {
  const { slug, locale } = await params;

  const { isEnabled: isDraftMode } = await draftMode();

  const status =
    searchParams?.status === "draft" || isDraftMode
      ? "draft"
      : "published";

  const pageData = await getProductsPageData({
    slug,
    locale,
    status,
  });

  if (!pageData?.products?.length) notFound();

  return <ProductsComp idProduct={pageData.products[0]} />;
}
