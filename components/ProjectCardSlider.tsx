"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

export function ProjectCardSlider({
  images,
  alt,
}: {
  readonly images: string[];
  readonly alt: string;
}) {
  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (safeImages.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % safeImages.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [safeImages.length]);

  if (safeImages.length === 0) {
    return <div className="relative aspect-video overflow-hidden bg-[var(--muted-bg)]" />;
  }

  return (
    <div className="relative aspect-video overflow-hidden bg-[var(--muted-bg)]">
      {safeImages.map((image, index) => (
        <Image
          key={`${image}-${index}`}
          src={image}
          alt={alt}
          fill
          className={`object-cover transition-all duration-700 ease-in-out group-hover:scale-105 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ))}

      {safeImages.length > 1 && (
        <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
          {safeImages.map((image, index) => (
            <span
              key={`${image}-${index}`}
              className={`h-1.5 w-1.5 rounded-full ${
                activeIndex === index ? "bg-white" : "bg-white/45"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
