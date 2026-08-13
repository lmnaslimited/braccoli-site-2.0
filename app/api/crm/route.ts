import { NextResponse } from "next/server";

import { fnGetCacheData } from "../../utils/strapi/get-data";
import { clTransformerFactory } from "@repo/middleware";
import { Tcontext } from "@repo/middleware/types";
import { fnLeadToOpportunity } from "@repo/ui/api/casestudy/create-lead-opportunity";
import { fnGetStatus } from "../../utils/strapi/get-status";

export async function POST(request: Request) {
    // API endpoint to create a CRM lead and opportunity.
    // It validates the incoming request data, loads environment configuration,
    // and forwards the lead details for CRM processing.
  try {
    // Extract request payload containing lead information, locale, and application status.
    const body = await request.json();
    const LStatus = await fnGetStatus()
    const { data, locale } = body;
    // Retrieve cached environment settings required for CRM integration.
    const Ldcontext: Tcontext = { locale: locale, status: LStatus };
    const LdEnvSettings = await fnGetCacheData(
        Ldcontext, 
        clTransformerFactory.createTransformer("env")
      )

      if (!data) {
        return NextResponse.json(
          { data: null, message: "MISSING_DATA" },
          { status: 400 }
        );
      }
  
      if (!data.email) {
        return NextResponse.json(
          { data: null, message: "MISSING_EMAIL" },
          { status: 400 }
        );
      }

    // Create CRM lead and opportunity using the provided user and company details.
    const LdLeadResult = await fnLeadToOpportunity({
        email: data.email,
        name: data.name,
        companyName: data.companyName,
        companyDomain: data.companyDomain,
        companyWebsite: data.companyWebsite,
        employeeCount: data.employeeCount,
        interestReason: data.interestReason,
        createOpportunity: data.createOpportunity,
        sendEmail: data.sendEmail,
        emailTemplate: data.emailTemplate,
        opportType: data.opportType,
        source: data.source,
        campaign: data.campaign,
        itemName: data.itemName,
        env: LdEnvSettings,
        doctype: data.doctype,
        anonymousId: data.anonymousId || null
    });
    
    // Return the CRM processing result to the client.
    const response = NextResponse.json(LdLeadResult, { status: 200 });

    return response;
  } catch (error) {
    console.error("Error in /api/crm:", error);
    return NextResponse.json(
      { message: "error", data:null },
      { status: 500 }
    );
  }
}