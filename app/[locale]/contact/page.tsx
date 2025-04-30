import { clTransformerFactory, TcontactTarget, Tcontext } from '@repo/middleware'
import { fnGetCacheData } from '../../api/getData';
import Contact from './contact';

export default async function ContactPage({
    params,
}: {
    params: Promise<{
        locale: string;
    }>;
}) {
    const { locale } = await params;
    const context: Tcontext = { locale: locale }

    const pageData: TcontactTarget = await fnGetCacheData(
        context,
        clTransformerFactory.createTransformer('contact')
    );
    return (
        <Contact idContact={pageData} />
    );
}