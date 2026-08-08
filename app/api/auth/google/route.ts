import { loginViaGoogle } from '@repo/ui/api/auth/google';
import { clTransformerFactory } from "@repo/middleware";
import { Tcontext } from '@repo/middleware/types';
import { fnGetStatus } from '../../../utils/strapi/get-status';
import { fnGetCacheData } from '../../../utils/strapi/get-data';

export async function GET(request:Request) {
    const LStatus = await fnGetStatus();
    // Get the env config from cms
    const Ldcontext: Tcontext = {
      locale: "en",
      status: LStatus,
    };
  
    const LdEnvSettings = await fnGetCacheData(
      Ldcontext,
      clTransformerFactory.createTransformer("env"),
    );
  return loginViaGoogle(request, LdEnvSettings)
}