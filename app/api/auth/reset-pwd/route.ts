import { resetPassword } from '@repo/ui/api/auth/reset-password';
import { clTransformerFactory } from "@repo/middleware";
import { fnGetStatus } from "../../../utils/strapi/get-status";
import { Tcontext } from "@repo/middleware/types";
import { fnGetCacheData } from '../../../utils/strapi/get-data';


export async function POST(request: Request) {
    const LStatus = await fnGetStatus();
        
    const Ldcontext: Tcontext = {
    locale: "en",
    status: LStatus,
    };
    // Get the env config from cms
    const LdEnvSettings = await fnGetCacheData(
    Ldcontext,
    clTransformerFactory.createTransformer("env"),
    );
 return resetPassword(request, LdEnvSettings)
}