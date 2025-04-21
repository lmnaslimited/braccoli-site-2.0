import { TcareerPageSource, Iquery, clTransformerFactory, Itransformer, TcareerPageTarget } from '@repo/middleware'
import Career from "./career";
export default async function CareerPage() {
  const ioTransformer: Itransformer<TcareerPageSource, TcareerPageTarget> = clTransformerFactory.createTransformer('Careers');
  const pageData: TcareerPageTarget = await ioTransformer.execute({ locale: 'de-DE' });
  return (
    <Career idCareer={pageData} />
  );
}