import { clTransformerFactory, TcareerPageTarget, Tcontext } from '@repo/middleware'
import { fnGetCacheData } from '../../api/getData';
import Career from './career';

export default async function CareerPage({
  params,
}: {
  params: Promise<{
    locale: string;
  }>;
}) {
  const { locale } = await params;
  const context: Tcontext = { locale: locale }

  const pageData: TcareerPageTarget = await fnGetCacheData(
    context,
    clTransformerFactory.createTransformer('career')
  );
  return (
    <Career idCareer={pageData} />
  );
}