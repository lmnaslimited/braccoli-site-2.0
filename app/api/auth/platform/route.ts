import { openPlatform } from "@repo/ui/api/auth/platform";
import { clTransformerFactory } from "@repo/middleware";
import { fnGetStatus } from "../../../utils/strapi/get-status";
import { NextRequest } from "next/server";
import { Tcontext } from "@repo/middleware/types";
import { fnGetCacheData } from "../../../utils/strapi/get-data";

export async function GET(request: NextRequest) {
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

  return openPlatform(request, LdEnvSettings);
}