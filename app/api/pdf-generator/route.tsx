import React from "react";
import { renderToBuffer } from "@react-pdf/renderer";
import { enrichCharts } from "@repo/ui/components/pdf/chart/enrich-echart";

/**
 * API Route: Generates a PDF file dynamically from request data
 */
export async function POST(request: Request) {
  try {
     // Parse incoming JSON payload containing PDF data
    const idPdfData = await request.json();

    /**
     * Check whether detailed content exists.
     * This decides which PDF layout to use.
     */
    const LHasDetailedContent =
      !!idPdfData.caseStudies?.[0]?.pdfDownloadContent?.length;

    /**
     * Dynamically choose PDF layout:
     * - Detailed layout if chart/content blocks exist
     * - Simple layout otherwise
     */
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
    
    /**
     * Enrich chart blocks:
     * Convert ECharts → SVG → PNG → Base64 image
     * so React-PDF can render them properly
     */
    const LaEnrichedPdfData = await enrichCharts(idPdfData);
     /**
     * Render React-PDF component into a PDF buffer
     */
    const LdPdfBuffer = await renderToBuffer(<PdfComponent idData={LaEnrichedPdfData} />);

    const LFileName =
      idPdfData?.caseStudies?.[0]?.pdfName || "CaseStudy";

     /**
     * Return generated PDF as downloadable response
     */
    return new Response(LdPdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${LFileName}.pdf"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (error: unknown) {
    console.error("PDF generation failed:", error);
    // Normalize error message for API response
    const LMessage = error instanceof Error ? error.message : "PDF generation failed";

    /**
     * Return structured error response
     */
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