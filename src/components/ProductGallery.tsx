"use client";

import { useState } from "react";
import Image from "next/image";
import { ProductImage } from "@/lib/types";

export default function ProductGallery({ images, title }: { images: ProductImage[]; title: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = images[activeIndex];

  return (
    <div>
      <div className="relative aspect-square w-full overflow-hidden border-2 border-ink bg-paper">
        <Image
          src={active.image}
          alt={`${title} — ${active.label}`}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="mt-4 flex items-center gap-3">
        {images.map((img, index) => (
          <button
            key={img.label}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-pressed={index === activeIndex}
            aria-label={img.label}
            className={`relative h-20 w-20 overflow-hidden border-2 border-ink ${
              index === activeIndex ? "ring-2 ring-teal ring-offset-2 ring-offset-paper" : "opacity-70"
            }`}
          >
            <Image src={img.image} alt={`${title} — ${img.label}`} fill sizes="80px" className="object-cover" />
          </button>
        ))}
        <p className="font-display shout text-sm text-ink/60">{active.label}</p>
      </div>
    </div>
  );
}
