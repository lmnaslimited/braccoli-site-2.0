import { TcareersPageSource, IQuery, clTransformerFactory, ITransformer, TcareersPageTarget } from '@repo/middleware'
import Career from "./career";
import { fnGetCacheData } from '../../api/getData';

type Props = {
  params: {
    locale: string;
  };
};

export default async function CareerPage({ params }: Props) {
  const { locale } = await params;

  const pageData:TcareersPageTarget = await fnGetCacheData(
    locale,
    clTransformerFactory.createTransformer('Careers')
  );
  return (
    <Career idCareer={pageData} />
  );
}