import { clTransformerFactory, TaboutUsPageTarget, Tcontext } from "@repo/middleware";
import AboutUs from "./about-us";
import { fnGetCacheData } from "../../api/getData";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'About LMNAs Cloud Solutions | Mission-Driven ERP Innovation',
    description:
      'Learn how LMNAs Cloud Solutions is building the future of ERP with a mission-led approach, green hosting, local talent, and inclusive innovation. Discover our values and journey.',
    keywords: [
      'About LMNAs',
      'LMNAs Cloud Solutions',
      'cloud ERP',
      'AI ERP platform',
      'green cloud hosting',
      'local talent',
      'diversity in tech',
      'ERPNext',
      'Frappe framework',
      'sustainable ERP',
      'inclusive technology',
      'ERP company history'
    ],
    metadataBase: new URL('https://beta.lmnas.com'),
    alternates: {
      canonical: 'https://beta.lmnas.com/about',
    },
    openGraph: {
      title: 'About LMNAs | ERP with Purpose',
      description:
        'Explore LMNAs Cloud Solutions’ mission to transform industries with AI-driven ERP. Learn about our core values, journey, and long-term vision.',
      url: 'https://beta.lmnas.com/about',
      type: 'website',
      siteName: 'LMNAs Cloud Solutions',
      locale: 'en_IN',
      images: [
        {
          url: 'https://res.cloudinary.com/lmnas/image/upload/v1747286845/Website/Home/lrjjd8uqh5htjfhqw04p.png',
          width: 1200,
          height: 630,
          alt: 'About LMNAs Hero Image'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About LMNAs | ERP with Purpose',
      description:
        'From sustainable practices to local-first hiring, see how LMNAs is reimagining ERP for modern businesses.',
      images: [
        'https://res.cloudinary.com/lmnas/image/upload/v1747286845/Website/Home/lrjjd8uqh5htjfhqw04p.png'
      ],
      creator: '@lmnaslimited',
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1,
      }
    },
    authors: [
      {
        name: 'LMNAs Team',
        url: 'https://beta.lmnas.com/about'
      }
    ],
    creator: 'LMNAs',
    publisher: 'LMNAs',
    category: 'Company',
    applicationName: 'LMNAs Cloud ERP',
    icons: {
      icon: [
        { url: '/icon.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
      ],
      apple: [
        { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }
      ],
      shortcut: '/favicon.ico',
    },
    appleWebApp: {
      capable: true,
      title: 'LMNAs Cloud ERP',
      statusBarStyle: 'default',
    },
    manifest: '/manifest.webmanifest',
  };
}

export default async function AboutUsPage({
  params,
}: {
  params: Promise<{
    locale: string;
  }>;
}) {
  const { locale } = await params;
  const context: Tcontext = { locale: locale }

  const pageData: TaboutUsPageTarget = await fnGetCacheData(
    context,
    clTransformerFactory.createTransformer('aboutUs')
  );
  return (
    <AboutUs idAboutUs={pageData} />
  );
}