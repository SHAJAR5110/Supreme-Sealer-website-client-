"use client";

import { useEffect, useRef } from "react";

const REVIEWS_WIDGET_BASE_URL =
  "https://www.localmarketingmanager.com/api/reviews/supreme-sealers-review-widget?pageSize=";

function getPageSizeForWidth(width: number) {
  if (width < 450) return 1;
  if (width < 675) return 2;
  if (width < 918) return 3;
  if (width < 1144) return 4;
  return 5;
}

export function ReviewsWidget() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const setIframeSrc = () => {
      const iframe = iframeRef.current;
      const container = containerRef.current;
      if (!iframe || !container) return;
      const width = container.offsetWidth;
      if (width === 0) return;
      const pageSize = getPageSizeForWidth(width);
      const expectedSrc = `${REVIEWS_WIDGET_BASE_URL}${pageSize}`;
      if (iframe.src !== expectedSrc) {
        iframe.src = expectedSrc;
      }
    };

    setIframeSrc();
    const timeout = setTimeout(setIframeSrc, 50);
    window.addEventListener("resize", setIframeSrc);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", setIframeSrc);
    };
  }, []);

  return (
    <div ref={containerRef} id="reviewsWidgetContainer">
      <iframe
        ref={iframeRef}
        id="reviewsWidget"
        style={{ width: "100%", border: "none", minHeight: 300 }}
        title="Reviews Widget"
      />
    </div>
  );
}
