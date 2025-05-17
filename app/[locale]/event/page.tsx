import { clTransformerFactory, Tcontext, TeventPageTarget } from '@repo/middleware'
import { fnGetCacheData } from '../../api/getData';
import Events from './event';

export default async function EventsPage({
    params,
}: {
    params: Promise<{
        locale: string;
    }>;
}) {
    const { locale } = await params;
    const context: Tcontext = { locale: locale }

    const pageData: TeventPageTarget = await fnGetCacheData(
        context,
        clTransformerFactory.createTransformer('event')
    );

    return (
        <Events idEvent={pageData} />
    );
}