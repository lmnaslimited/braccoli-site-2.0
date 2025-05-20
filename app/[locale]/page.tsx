import { clTransformerFactory, Tcontext, ThomePageTarget } from '@repo/middleware'
import { fnGetCacheData } from '../api/getData';
import Home from './home/home';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string; }> }): Promise<Metadata> {

  const { locale } = await params;
  const context: Tcontext = { locale: locale }

  const pageData: ThomePageTarget = await fnGetCacheData(
    context,
    clTransformerFactory.createTransformer('home')
  );

  const data = pageData.home.metaData;

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords.map((k) => k.description),
    alternates: {
      canonical: data.canonical,
    },
    openGraph: {
      title: data.ogTitle,
      description: data.ogDescription,
      url: data.ogUrl,
      type: data.ogType,
      siteName: data.ogSiteName,
      locale: data.ogLocale,
      images: data.ogImages?.map((img) => ({
        url: img.url,
        width: img.width,
        height: img.height,
        alt: img.alt,
      })),
    },
    twitter: {
      card: data.twitterCard,
      title: data.twitterTitle,
      description: data.twitterDescription,
      images: data.twitterImage?.map((img) => img.url),
      creator: data.twitterCreator,
    },
    category: data.category,
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{
    locale: string;
  }>;
}) {
  const { locale } = await params;
  const context: Tcontext = { locale: locale }

  const pageData: ThomePageTarget = await fnGetCacheData(
    context,
    clTransformerFactory.createTransformer('home')
  );
  return (
    <>
      <Home idHome={pageData} />
    </>
  );
}