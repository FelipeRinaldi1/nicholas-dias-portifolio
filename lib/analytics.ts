type GtagEventParams = Record<string, string | number | boolean | undefined | null>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (
      command: "event" | "config" | "js" | "set",
      targetIdOrAction: string | Date,
      params?: GtagEventParams
    ) => void;
  }
}

export const trackEvent = (
  eventName: string,
  params?: GtagEventParams
): void => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
};