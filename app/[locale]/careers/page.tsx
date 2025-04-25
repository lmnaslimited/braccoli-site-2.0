import {  clTransformerFactory, TcareersPageTarget } from '@repo/middleware'
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

  const pageData:TcareersPageTarget = await fnGetCacheData(
    locale,
    clTransformerFactory.createTransformer('Careers')
  );
  return (
    <Career idCareer={pageData} />
  );
}