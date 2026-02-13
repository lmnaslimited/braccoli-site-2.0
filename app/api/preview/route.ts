
// app/api/preview/route.ts

import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

function getPreviewPath(
  contentType: string | undefined,
  slug: string | null,
  locale: string | null,
  status: string | null,
): string {


  let basePath = "/";

  if (!contentType) {
    basePath = "/";
  }

  // Collection Types
  else if (contentType === "product") {
    basePath = slug ? `/products/${slug}` : "/products";
  }

  else if (contentType === "industry") {
    basePath = slug ? `/industries/${slug}` : "/industries";
  }

  else if (contentType === "solution") {
    basePath = slug ? `/solutions/${slug}` : "/solutions";
  }

  // Single Types
  else if (contentType === "about-us") {
    basePath = "/about-us";
  }

  else if (contentType === "career") {
    basePath = "/career";
  }

  else if (contentType === "contact") {
    basePath = "/contact";
  }

  else if (contentType === "event") {
    basePath = "/event";
  }

  else if (contentType === "home") {
    basePath = "/";
  }

  else if (contentType === "pricing") {
    basePath = "/pricing";
  }

  else if (contentType === "privacy-policy") {
    basePath = "/privacy-policy";
  }

  else if (contentType === "terms-and-condition") {
    basePath = "/terms-and-conditions";
  }

  else if (contentType === "trend") {
    basePath = "/trending-now";
  }

  // fallback
  else {
    basePath = `/${contentType}`;
  }

  const localePath =
    locale && locale !== "en" ? "/" + locale + basePath : basePath;
  const statusParam = status ? "?status=" + status : "";
  return localePath + statusParam;
}

export const GET = async (request: Request) => {
  // Parse query string parameters
  const { searchParams } = new URL(request.url);
  const searchParamsData = Object.fromEntries(searchParams);
  const { secret, slug, locale, uid, status } = searchParamsData;

  console.log(searchParamsData);

  // Check the secret and next parameters
  if (secret !== process.env.PREVIEW_SECRET) {
    return new Response("Invalid token", { status: 401 });
  }

  const contentType = uid?.split(".").pop();
  const finalPath = getPreviewPath(
    contentType,
    slug ?? null,
    locale ?? null,
    status ?? null,
  );

  // Enable Draft Mode by setting the cookie
  const draft = await draftMode();
 if (status === "draft") {
  draft.enable();
} else {
  draft.disable();
}

  // Redirect to the path from the fetched post
  redirect(finalPath);
};