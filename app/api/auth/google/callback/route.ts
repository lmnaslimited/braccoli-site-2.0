
import { googleCallback } from '@repo/ui/api/auth/google-callback';
import { NextRequest } from 'next/server';
import { clTransformerFactory } from "@repo/middleware";
import { Tcontext } from '@repo/middleware/types';
import { fnGetStatus } from '../../../../utils/strapi/get-status';
import { fnGetCacheData } from '../../../../utils/strapi/get-data';

export async function GET(request:NextRequest) {
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
  return googleCallback(request, LdEnvSettings)
}