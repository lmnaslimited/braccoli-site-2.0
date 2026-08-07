import { NextResponse } from "next/server";

import { fnGetCacheData } from "../../utils/strapi/get-data";
import { clTransformerFactory } from "@repo/middleware";
import { Tcontext } from "@repo/middleware/types";
import { fnCheckUserApproval } from "@repo/ui/api/crm/check-user-approval";

export async function POST(request: Request) {
  // API endpoint to check whether a user has an approved CRM status.
  // It fetches environment configuration from Strapi cache and validates the user approval
  // using the provided PostHog distinct ID and CRM doctype configuration.

  try {
    // Extract request payload containing user identity, CRM configuration, locale, and status.
    const body = await request.json();
    const { distinctId, doctypeConfig, locale, LStatus } = body;

    // Retrieve cached environment settings required for CRM API communication.
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

    // Validate user approval status against CRM using the user's distinct ID.
    const result = await fnCheckUserApproval({
      doctype: doctypeConfig,
      env: LdEnvSettings,
      iDistinctId: distinctId,
    });

    // Return approval status response to the client.
    const response = NextResponse.json(result, { status: 200 });

    return response;
  } catch (error) {
    console.error("Error in /api/approval-access:", error);
    return NextResponse.json(
      { approved: false, is_customer: false, reason: "SERVER_ERROR" },
    );
  }
}