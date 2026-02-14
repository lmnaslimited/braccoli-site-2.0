// app/api/preview/route.ts

import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

// Constant dictionaries for route mapping
const LdCollectionRoutes: Record<string, string> = {
  product: "products",
  industry: "industries",
  solution: "solutions",
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

// 🔹 Function to build preview redirect path
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
    const lRoute = LdCollectionRoutes[iContentType];
    lBasePath = iSlug ? `/${lRoute}/${iSlug}` : `/${lRoute}`;
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

  const lLocalePath =
    iLocale && iLocale !== "en" ? `/${iLocale}${lBasePath}` : lBasePath;

  const lStatusParam = iStatus ? `?status=${iStatus}` : "";

  return lLocalePath + lStatusParam;
}

export const GET = async (iRequest: Request) => {

  const { searchParams } = new URL(iRequest.url);

  const ldSearchParams = Object.fromEntries(searchParams);

  const { secret, slug, locale, uid, status } = ldSearchParams;

  if (secret !== process.env.PREVIEW_SECRET) {
    return new Response("Invalid token", { status: 401 });
  }

  const lContentType = uid?.split(".").pop();

  const lFinalPath = fnGetPreviewPath(
    lContentType,
    slug ?? null,
    locale ?? null,
    status ?? null,
  );

  const lDraft = await draftMode();

  if (status === "draft") {
    lDraft.enable();
  } else {
    lDraft.disable();
  }

  redirect(lFinalPath);
};
