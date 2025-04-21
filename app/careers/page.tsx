import { TcareersPageSource, IQuery, clTransformerFactory, ITransformer, TcareersPageTarget } from '@repo/middleware'
import Career from "./career";
export default async function CareerPage() {
  const ioTransformer: ITransformer<TcareersPageSource, TcareersPageTarget> = clTransformerFactory.createTransformer('Careers');
  const pageData: TcareersPageTarget = await ioTransformer.execute({ locale: 'en' });
  return (
    <Career idCareer={pageData} />
  );
}