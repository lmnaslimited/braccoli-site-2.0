import LdContentData from "./content.json";

// Locales this launch page ships content for. Keep in sync with middleware.ts.
export type TLocale = "en" | "de";

// Shape every locale must provide. The `Record<TLocale, TLensCloudContent>`
// assignment below turns any missing key in en/de into a compile-time error,
// so both locales can never drift out of sync.
export type TLensCloudContent = {
  metadata: {
    title: string;
    description: string;
  };
  common: {
    countdownLabels: {
      days: string;
      hours: string;
      minutes: string;
      seconds: string;
    };
    launchedMessage: string;
    talkToSales: string;
  };
  control: {
    badge: string;
    titleBefore: string;
    highlight: string;
    subtitle: string;
    joinWaitlist: string;
  };
  variantB: {
    badge: string;
    title: string;
    subtitle: string;
    requestAccess: string;
  };
};

const LdContent: Record<TLocale, TLensCloudContent> = LdContentData;

// Resolve content for a locale, falling back to English for anything unexpected.
export function fnGetLensCloudContent(iLocale: string): TLensCloudContent {
  return LdContent[iLocale as TLocale] ?? LdContent.en;
}
