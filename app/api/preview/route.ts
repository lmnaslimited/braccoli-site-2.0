import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

function getPreviewPath(
  uid: string | null,
  slug: string | null,
  locale: string | null,
  status: string | null
): string {
  if (!uid) return "/";

  let basePath = "/";

  if (uid === "api::product.product") {
    basePath = slug ? `/products/${slug}` : "/products";
  }

  const localePath =
    locale && locale !== "en" ? `/${locale}${basePath}` : basePath;

  return status === "draft" ? `${localePath}?status=draft` : localePath;
}

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);

  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");
  const locale = searchParams.get("locale");
  const uid = searchParams.get("uid");
  const status = searchParams.get("status");

  if (secret !== process.env.PREVIEW_SECRET) {
    return new Response("Invalid token", { status: 401 });
  }

  const draft = await draftMode();
  status === "draft" ? draft.enable() : draft.disable();

  redirect(getPreviewPath(uid, slug, locale, status));
};
