// app/api/preview/route.ts

import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

// Constant dictionaries for route mapping
const LdCollectionRoutes: Record<string, string> = {
  product: "products",
  industry: "industries",
  "case-study": "solutions"
};

const LdSingleRoutes: Record<string, string> = {
  "about-us": "about-us",
  career: "career",
  contact: "contact",
  event: "event",
  home: "",
  pricing: "pricing",
  "privacy-policy": "privacy-policy",
  "terms-and-condition": "terms-and-conditions",
  trend: "trending-now",
};
// Add special content types (e.g., "terms-and-condition") to the route maps above
// to ensure proper handling inside fnGetPreviewPath.

// Function to build preview redirect path
function fnGetPreviewPath(
  iContentType?: string,
  iSlug?: string | null,
  iLocale?: string | null,
  iStatus?: string | null,
): string {

  let lBasePath = "/";

  if (!iContentType) {
    lBasePath = "/";
  }

  // Collection Types
  else if (LdCollectionRoutes[iContentType]) {
    const LRoute = LdCollectionRoutes[iContentType];
    lBasePath = iSlug ? `/${LRoute}/${iSlug}` : `/${LRoute}`;
  }

  // Single Types
  else if (LdSingleRoutes[iContentType] !== undefined) {
    const lRoute = LdSingleRoutes[iContentType];
    lBasePath = lRoute ? `/${lRoute}` : "/";
  }

  // Fallback
  else {
    lBasePath = `/${iContentType}`;
  }

  const LLocalePath =
    iLocale && iLocale !== "en" ? `/${iLocale}${lBasePath}` : lBasePath;

  const LStatusParam = iStatus ? `?status=${iStatus}` : "";

  return LLocalePath + LStatusParam;
}

export const GET = async (iRequest: Request) => {

  const { searchParams } = new URL(iRequest.url);

  const LdSearchParams = Object.fromEntries(searchParams);

  const { secret, slug, locale, uid, status } = LdSearchParams;

  if (secret !== process.env.PREVIEW_SECRET) {
    return new Response("Invalid token", { status: 401 });
  }

  const LContentType = uid?.split(".").pop();

  const LFinalPath = fnGetPreviewPath(
    LContentType,
    slug ?? null,
    locale ?? null,
    status ?? null,
  );

  const LDraft = await draftMode();

  if (status === "draft") {
    LDraft.enable();
  } else {
    LDraft.disable();
  }

  redirect(LFinalPath);
};
