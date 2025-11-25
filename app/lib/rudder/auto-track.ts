import {
  RudderAnalytics,
  RudderAnalyticsPreloader,
} from "@rudderstack/analytics-js";

type RA = RudderAnalytics | RudderAnalyticsPreloader | undefined;

export const fnInitAutoTracking = (rudderanalytics: RA) => {
  if (typeof window === "undefined" || !rudderanalytics) return;

  const fnNormalizeText = (iText?: string | null) => {
    if (!iText) return undefined;
    return iText.replace(/\s+/g, " ").trim().slice(0, 100);
  };

  const fnGetElementPath = (ieElement: HTMLElement | null): string => {
    const LaParts: string[] = [];
    while (
      ieElement &&
      ieElement.tagName &&
      ieElement.tagName.toLowerCase() !== "body"
    ) {
      let lPart = ieElement.tagName.toLowerCase();
      if (ieElement.id) lPart += `#${ieElement.id}`;
      if (ieElement.className && typeof ieElement.className === "string") {
        const lCls = ieElement.className
          .split(" ")
          .filter(Boolean)
          .slice(0, 3)
          .join(".");
        if (lCls) lPart += `.${lCls}`;
      }
      LaParts.unshift(lPart);
      ieElement = ieElement.parentElement;
    }
    return LaParts.join(" > ");
  };

  // Page views
  const fnTrackPage = () => {
    rudderanalytics.page(window.location.pathname, document.title, {
      url: window.location.href,
      referrer: document.referrer,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };
  fnTrackPage();
  window.addEventListener("popstate", fnTrackPage);
  window.addEventListener("pushstate", fnTrackPage);

  // Clicks with semantic context
  document.addEventListener("click", (event) => {
    const LeTarget = event.target as HTMLElement;
    if (!LeTarget) return;

    const LTag = LeTarget.tagName.toLowerCase();
    const LRole = LeTarget.getAttribute("role");
    const LAriaLabel = LeTarget.getAttribute("aria-label");
    const LDataEvent = LeTarget.getAttribute("data-event");
    const LdComponent =
      LeTarget.closest("[data-component]")?.getAttribute("data-component");

    // Determine interaction type
    const LInteractionType =
      LDataEvent ||
      LRole ||
      (LTag === "button"
        ? "button_click"
        : LTag === "a"
          ? "link_click"
          : LTag === "input"
            ? "input_interaction"
            : "ui_interaction");

    // Collect semantic details
    const LdEventData = {
      event: LInteractionType,
      LTag,
      id: LeTarget.id || undefined,
      class: LeTarget.className || undefined,
      text: fnNormalizeText(LeTarget.textContent),
      ariaLabel: LAriaLabel || undefined,
      LDataEvent,
      LdComponent,
      path: fnGetElementPath(LeTarget),
      location: {
        pathname: window.location.pathname,
        href: window.location.href,
      },
      timestamp: new Date().toISOString(),
    };

    rudderanalytics.track(LInteractionType, LdEventData);

    // Outbound links
    if (
      LTag === "a" &&
      (LeTarget as HTMLAnchorElement).hostname !== window.location.hostname
    ) {
      rudderanalytics.track("outbound_link_click", {
        href: (LeTarget as HTMLAnchorElement).href,
        targetHost: (LeTarget as HTMLAnchorElement).hostname,
        LdComponent,
        text: fnNormalizeText(LeTarget.textContent),
      });
    }
  });

  // Forms
  document.addEventListener("submit", (event) => {
    const LeForm = event.target as HTMLFormElement;
    const LName = LeForm.getAttribute("name") || LeForm.id || "Unnamed Form";

    rudderanalytics.track("form_submit", {
      form_name: LName,
      path: fnGetElementPath(LeForm),
      fields: Array.from(LeForm.elements)
        .map((el) => {
          if (
            el instanceof HTMLInputElement ||
            el instanceof HTMLSelectElement ||
            el instanceof HTMLTextAreaElement ||
            el instanceof HTMLButtonElement
          ) {
            return el.name;
          }
          return null;
        })
        .filter(Boolean),
    });
  });

  // Scroll depth tracking
  let lLastDepth = 0;
  window.addEventListener("scroll", () => {
    const LScrollTop = window.scrollY;
    const LDocHeight = document.body.scrollHeight - window.innerHeight;
    const LScrolled = Math.floor((LScrollTop / LDocHeight) * 100);
    const LaThresholds = [25, 50, 75, 100];

    for (const LThreshold of LaThresholds) {
      if (LScrolled >= LThreshold && lLastDepth < LThreshold) {
        lLastDepth = LThreshold;
        rudderanalytics.track("scroll_depth", {
          depth: `${LThreshold}%`,
          page: window.location.pathname,
          viewport: {
            width: window.innerWidth,
            height: window.innerHeight,
          },
        });
      }
    }
  });

  // Session start/end
  rudderanalytics.startSession?.();
  window.addEventListener("beforeunload", () => {
    rudderanalytics.endSession?.();
  });

  // Identify known user
  const LdUser = JSON.parse(localStorage.getItem("lens_user") || "null");
  if (LdUser?.id) {
    rudderanalytics.identify(LdUser.id, {
      name: LdUser.name,
      email: LdUser.email,
      role: LdUser.role,
    });
  }
};
