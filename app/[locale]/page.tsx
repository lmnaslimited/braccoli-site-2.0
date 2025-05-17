import { clTransformerFactory, Tcontext, ThomePageTarget } from '@repo/middleware'
import { fnGetCacheData } from '../api/getData';
import Home from './home/home';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'LMNAs Cloud Solutions | Cloud ERP for End-to-End Business Transformation.',
    description:
      'Unlock seamless operations and actionable insights with LMNAs. Empowering businesses across industries to overcome challenges and achieve transformational growth.',
    keywords: [
      'business transformation',
      'cloud ERP',
      'enterprise solutions',
      'operations optimization',
      'data insights',
      'LMNAs',
      'industry growth',
      'manufacturing ERP',
      'education ERP',
      'distribution solutions'
    ],
    alternates: {
      canonical: 'https://beta.lmnas.com/',
    },
    openGraph: {
      title: 'Reimagine Your Business | LMNAs',
      description:
        'Empowering businesses to overcome challenges and unlock extraordinary growth with LMNAs.',
      url: 'https://beta.lmnas.com/',
      type: 'website',
      siteName: 'LMNAs Cloud Solutions',
      locale: 'en_IN',
      images: [
        {
          url: 'https://res.cloudinary.com/lmnas/image/upload/v1747286845/Website/Home/lrjjd8uqh5htjfhqw04p.png',
          width: 1200,
          height: 630,
          alt: 'LMNAs Hero Banner'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Reimagine Your Business | LMNAs',
      description:
        'Achieve seamless operations and data-driven growth with LMNAs. Discover how industry leaders succeed.',
      images: [
        'https://res.cloudinary.com/lmnas/image/upload/v1747286845/Website/Home/lrjjd8uqh5htjfhqw04p.png'
      ],
      creator: '@lmnaslimited',
    },
    category: 'Business',
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