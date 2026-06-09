import React from "react";
import { renderToBuffer } from "@react-pdf/renderer";

export async function POST(request: Request) {
  try {
    const idPdfData = await request.json();

    const LHasDetailedContent =
      !!idPdfData.caseStudies?.[0]?.pdfDownloadContent?.length;

    const PdfComponent = LHasDetailedContent
      ? (
          await import(
            "@repo/ui/components/pdf/detailed-casestudy-layout"
          )
        ).DetailedPdf
      : (
          await import(
            "@repo/ui/components/pdf/casestudy-layout"
          )
        ).PdfDocument;

    const LdPdfBuffer = await renderToBuffer(<PdfComponent idData={idPdfData} />);

    const LFileName =
      idPdfData?.caseStudies?.[0]?.pdfName || "CaseStudy";

    return new Response(LdPdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${LFileName}.pdf"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (error: unknown) {
    console.error("PDF generation failed:", error);

    const LMessage = error instanceof Error ? error.message : "PDF generation failed";


    return Response.json(
      {
        success: false,
        error: LMessage,
      },
      {
        status: 500,
      }
    );
  }
}