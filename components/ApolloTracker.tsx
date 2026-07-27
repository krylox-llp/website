"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import { CONSENT_EVENT, CONSENT_KEY } from "@/lib/consent";

export default function ApolloTracker() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    const sync = () => setConsented(localStorage.getItem(CONSENT_KEY) === "accepted");
    sync();
    window.addEventListener(CONSENT_EVENT, sync);
    return () => window.removeEventListener(CONSENT_EVENT, sync);
  }, []);

  if (!consented) return null;

  return (
    <Script id="apollo-tracker" strategy="afterInteractive">
      {`function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");
o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,
o.onload=function(){window.trackingFunctions.onLoad({appId:"69bc97e8cfbf91001d25f187"})},
document.head.appendChild(o)}initApollo();`}
    </Script>
  );
}
