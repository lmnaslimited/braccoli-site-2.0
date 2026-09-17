import LdContentData from "./content.json";

// Locales this launch page ships content for. Keep in sync with middleware.ts.
export type TLocale = "en" | "de";

// Shape every locale must provide.
export type TLensCloudContent = {
  metadata: {
    title: string;
    description: string;
  };

  common: {
    talkToSales: string;
  };

  control: {
    badge: string;
    titleBefore: string;
    highlight: string;
    subtitle: string;
    joinWaitlist: string;
    exploreBtn: string;
  };
};

const LdContent: Record<TLocale, TLensCloudContent> = LdContentData;

// Resolve content for a locale, falling back to English for anything unexpected.
export function fnGetLensCloudContent(
  iLocale: string
): TLensCloudContent {
  return LdContent[iLocale as TLocale] ?? LdContent.en;
}