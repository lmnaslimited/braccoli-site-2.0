import { NextResponse } from "next/server";

import { fnGetCacheData } from "../../utils/strapi/get-data";
import { clTransformerFactory } from "@repo/middleware";
import { Tcontext } from "@repo/middleware/types";
import { fnLeadToOpportunity } from "@repo/ui/api/casestudy/create-lead-opportunity";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { data, locale, LStatus } = body;

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

     const LdLeadResult = await fnLeadToOpportunity({
        email: data.email,
        name: data.name,
        recaptchaToken: data.recaptchaToken,
        companyName: data.companyName,
        companyDomain: data.companyDomain,
        companyWebsite: data.companyWebsite,
        employeeCount: data.employeeCount,
        interestReason: data.interestReason,
        createOpportunity: data.createOpportunity,
        sendEmail: data.sendEmail,
        emailTemplate: data.emailTemplate,
        humanVerfied: data.humanVerfied,
        opportType: data.opportType,
        source: data.source,
        campaign: data.campaign,
        itemName: data.itemName,
        env: LdEnvSettings
    });
    
    // You can handle response headers or set cookies here if needed
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