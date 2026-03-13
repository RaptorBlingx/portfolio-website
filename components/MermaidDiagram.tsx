"use client";

import { useEffect, useRef } from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: false,
  theme: "dark",
  securityLevel: "loose",
});

export function MermaidDiagram({ chart }: { readonly chart: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const renderChart = async () => {
      if (!containerRef.current) return;
      containerRef.current.innerHTML = "";
      try {
        const { svg } = await mermaid.render(
          `mermaid-${Math.random().toString(36).slice(2)}`,
          chart
        );
        containerRef.current.innerHTML = svg;
      } catch {
        containerRef.current.innerHTML = `<pre class="text-sm text-red-400">${chart}</pre>`;
      }
    };
    renderChart();
  }, [chart]);

  return <div ref={containerRef} className="mermaid-wrapper" />;
}
