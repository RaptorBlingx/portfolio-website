"use client";

import Image from "next/image";
import { useState } from "react";

interface GalleryImage {
  src: string;
  alt: string;
}

export function ImageGallery({
  images = [],
  columns = 2,
}: Readonly<{
  images: GalleryImage[];
  columns?: number;
}>) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  if (!images || images.length === 0) return null;

  return (
    <>
      <div
        className={`grid gap-4 my-8 ${
          columns === 3
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            : "grid-cols-1 sm:grid-cols-2"
        }`}
      >
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setLightbox(i)}
            className="group relative aspect-video overflow-hidden rounded-lg border border-[var(--card-border)] bg-[var(--muted-bg)] cursor-zoom-in"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2 text-left text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
              {img.alt}
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <dialog
          open
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm w-full h-full max-w-full max-h-full m-0 p-0 border-none"
          onClick={() => setLightbox(null)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setLightbox(null);
            if (e.key === "ArrowRight")
              setLightbox((prev) =>
                prev === null ? null : (prev + 1) % images.length
              );
            if (e.key === "ArrowLeft")
              setLightbox((prev) =>
                prev === null
                  ? null
                  : (prev - 1 + images.length) % images.length
              );
          }}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 z-10"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            ✕
          </button>
          {images.length > 1 && (
            <>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gray-300 z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox(
                    (lightbox - 1 + images.length) % images.length
                  );
                }}
                aria-label="Previous"
              >
                ‹
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gray-300 z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox((lightbox + 1) % images.length);
                }}
                aria-label="Next"
              >
                ›
              </button>
            </>
          )}
          <div className="relative max-h-[90vh] max-w-[90vw] w-full aspect-video mx-auto">
            <Image
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>
          <p className="absolute bottom-4 text-white text-sm text-center w-full">
            {images[lightbox].alt} ({lightbox + 1}/{images.length})
          </p>
        </dialog>
      )}
    </>
  );
}
