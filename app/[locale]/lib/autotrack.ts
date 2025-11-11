// /lib/autotrack.ts
import { RudderAnalytics, RudderAnalyticsPreloader } from "@rudderstack/analytics-js";

type RA = RudderAnalytics | RudderAnalyticsPreloader | undefined;

export const initAutoTracking = (rudderanalytics: RA) => {
  if (typeof window === "undefined" || !rudderanalytics) return;
  console.log("✅ Smart Auto-Tracking initializing...");

  const normalizeText = (text?: string | null) => {
    if (!text) return undefined;
    return text.replace(/\s+/g, " ").trim().slice(0, 100);
  };

  const getElementPath = (el: HTMLElement | null): string => {
    const parts: string[] = [];
    while (el && el.tagName && el.tagName.toLowerCase() !== "body") {
      let part = el.tagName.toLowerCase();
      if (el.id) part += `#${el.id}`;
      if (el.className && typeof el.className === "string") {
        const cls = el.className.split(" ").filter(Boolean).slice(0, 3).join(".");
        if (cls) part += `.${cls}`;
      }
      parts.unshift(part);
      el = el.parentElement;
    }
    return parts.join(" > ");
  };

  // 1️⃣ Page views
  const trackPage = () => {
    rudderanalytics.page(window.location.pathname, document.title, {
      url: window.location.href,
      referrer: document.referrer,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };
  trackPage();
  window.addEventListener("popstate", trackPage);
  window.addEventListener("pushstate", trackPage);

  // 2️⃣ Clicks with semantic context
  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    if (!target) return;

    const tag = target.tagName.toLowerCase();
    const role = target.getAttribute("role");
    const ariaLabel = target.getAttribute("aria-label");
    const dataEvent = target.getAttribute("data-event");
    const component = target.closest("[data-component]")?.getAttribute("data-component");

    // Determine interaction type
    const interactionType =
      dataEvent ||
      role ||
      (tag === "button"
        ? "button_click"
        : tag === "a"
        ? "link_click"
        : tag === "input"
        ? "input_interaction"
        : "ui_interaction");

    // Collect semantic details
    const eventData = {
      event: interactionType,
      tag,
      id: target.id || undefined,
      class: target.className || undefined,
      text: normalizeText(target.textContent),
      ariaLabel: ariaLabel || undefined,
      dataEvent,
      component,
      path: getElementPath(target),
      location: {
        pathname: window.location.pathname,
        href: window.location.href,
      },
      timestamp: new Date().toISOString(),
    };

    rudderanalytics.track(interactionType, eventData);

    // Outbound links
    if (tag === "a" && (target as HTMLAnchorElement).hostname !== window.location.hostname) {
      rudderanalytics.track("outbound_link_click", {
        href: (target as HTMLAnchorElement).href,
        targetHost: (target as HTMLAnchorElement).hostname,
        component,
        text: normalizeText(target.textContent),
      });
    }
  });

  // 3️⃣ Forms
  document.addEventListener("submit", (e) => {
    const form = e.target as HTMLFormElement;
    const name = form.getAttribute("name") || form.id || "Unnamed Form";

    rudderanalytics.track("form_submit", {
      form_name: name,
      path: getElementPath(form),
      fields: Array.from(form.elements)
        // .map((el: any) => el.name)
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

  // 4️⃣ Scroll depth tracking
  let lastDepth = 0;
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrolled = Math.floor((scrollTop / docHeight) * 100);
    const thresholds = [25, 50, 75, 100];

    for (const t of thresholds) {
      if (scrolled >= t && lastDepth < t) {
        lastDepth = t;
        rudderanalytics.track("scroll_depth", {
          depth: `${t}%`,
          page: window.location.pathname,
          viewport: {
            width: window.innerWidth,
            height: window.innerHeight,
          },
        });
      }
    }
  });

  // 5️⃣ Session start/end
  rudderanalytics.startSession?.();
  window.addEventListener("beforeunload", () => {
    rudderanalytics.endSession?.();
  });

  // 6️⃣ Identify known user
  const user = JSON.parse(localStorage.getItem("lens_user") || "null");
  if (user?.id) {
    rudderanalytics.identify(user.id, {
      name: user.name,
      email: user.email,
      role: user.role,
    });
  }

//   // 7️⃣ Consent data
//   const consent = localStorage.getItem("lens_consent");
//   if (consent) {
//     rudderanalytics.consent?.({ marketing: consent === "true" });
//   }

//   // 8️⃣ Register custom integration
//   rudderanalytics.addCustomIntegration?.("ConsoleLogger", {
//     track: (event: any) => console.log("🧩 Tracked event:", event),
//   });

  console.log("✅ Smart Auto-tracking fully enabled");
};