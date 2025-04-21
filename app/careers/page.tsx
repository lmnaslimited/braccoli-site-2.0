import { TcareersPageSource, Iquery, clTransformerFactory, Itransformer, TcareersPageTarget } from '@repo/middleware'
import Career from "./career";
export default async function CareerPage() {
  const ioTransformer: Itransformer<TcareersPageSource, TcareersPageTarget> = clTransformerFactory.createTransformer('Careers');
  const pageData: TcareersPageTarget = await ioTransformer.execute({ locale: 'de-DE' });
  return (
    <Career idCareer={pageData} />
  );
}