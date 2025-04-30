import { clTransformerFactory, Tcontext, ThomePageTarget } from '@repo/middleware'
import { fnGetCacheData } from '../api/getData';
import Home from './home/home';

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
    <Home idHome={pageData} />
  );
}