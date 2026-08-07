import { NextResponse } from "next/server";

import { fnGetCacheData } from "../../utils/strapi/get-data";
import { clTransformerFactory } from "@repo/middleware";
import { Tcontext } from "@repo/middleware/types";
import { fnCheckUserApproval } from "@repo/ui/api/crm/check-user-approval";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { distinctId, doctypeConfig, locale, LStatus } = body;

    const Ldcontext: Tcontext = { locale: locale, status: LStatus };
    const LdEnvSettings = await fnGetCacheData(
        Ldcontext, 
        clTransformerFactory.createTransformer("env")
      )

    if (!distinctId) {
      return NextResponse.json(
        { approved: false, is_customer: false, reason: "MISSING_DISTINCT_ID" },
      );
    }

    // Call your internal server-side logic
    const result = await fnCheckUserApproval({
      doctype: doctypeConfig,
      env: LdEnvSettings,
      iDistinctId: distinctId,
    });

    // You can handle response headers or set cookies here if needed
    const response = NextResponse.json(result, { status: 200 });

    return response;
  } catch (error) {
    console.error("Error in /api/approval-access:", error);
    return NextResponse.json(
      { approved: false, is_customer: false, reason: "SERVER_ERROR" },
    );
  }
}