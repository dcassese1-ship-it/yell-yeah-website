"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductGallery({
  frontImage,
  backImage,
  title,
}: {
  frontImage: string;
  backImage: string;
  title: string;
}) {
  const [active, setActive] = useState<"front" | "back">("front");
  const images = { front: frontImage, back: backImage };

  return (
    <div>
      <div className="relative aspect-square w-full overflow-hidden border-2 border-ink bg-paper">
        <Image
          src={images[active]}
          alt={title}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="mt-4 flex gap-3">
        {(["front", "back"] as const).map((view) => (
          <button
            key={view}
            type="button"
            onClick={() => setActive(view)}
            aria-pressed={active === view}
            className={`relative h-20 w-20 overflow-hidden border-2 border-ink ${
              active === view ? "ring-2 ring-teal ring-offset-2 ring-offset-paper" : "opacity-70"
            }`}
          >
            <Image src={images[view]} alt={`${title} — ${view}`} fill sizes="80px" className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
