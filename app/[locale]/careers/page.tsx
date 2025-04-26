import { clTransformerFactory, TcareersPageTarget } from '@repo/middleware'
import Career from "./career";
import { fnGetCacheData } from '../../api/getData';

export default async function CareerPage({
  params,
}: {
  params: Promise<{
    locale: string;
  }>;
}) {
  const { locale } = await params;
  const context: Record<string, any> = { locale: locale }

  const pageData: TcareersPageTarget = await fnGetCacheData(
    context,
    clTransformerFactory.createTransformer('career')
  );
  return (
    <Career idCareer={pageData} />
  );
}