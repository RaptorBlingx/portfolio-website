"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

export function ProjectHeroSlider({
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
    return <div className="relative mb-10 aspect-video overflow-hidden rounded-xl bg-[var(--muted-bg)]" />;
  }

  return (
    <div className="relative mb-10 aspect-video overflow-hidden rounded-xl bg-[var(--muted-bg)]">
      {safeImages.map((image, index) => (
        <Image
          key={`${image}-${index}`}
          src={image}
          alt={alt}
          fill
          className={`object-cover transition-opacity duration-700 ease-in-out ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          priority={index === 0}
        />
      ))}

      {safeImages.length > 1 && (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
          {safeImages.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              aria-label={`Show image ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2 w-2 rounded-full transition-colors ${
                activeIndex === index ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
