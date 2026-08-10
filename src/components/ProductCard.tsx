import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";
import { formatMoney, tileColorForHandle } from "@/lib/format";

export default function ProductCard({ product }: { product: Product }) {
  const isComingSoon = product.tags.includes("coming-soon");
  const tileColor = tileColorForHandle(product.handle);
  const textOnTile = tileColor === "bg-yell" ? "text-ink" : "text-cream";

  return (
    <Link href={`/shop/${product.handle}`} className="card-hard group block bg-cream">
      <div className={`relative aspect-square w-full overflow-hidden border-b-2 border-ink ${tileColor}`}>
        {product.featuredImage ? (
          <Image
            src={product.featuredImage.url}
            alt={product.featuredImage.altText || product.title}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            className="object-cover"
          />
        ) : (
          <div className={`flex h-full w-full items-center justify-center ${textOnTile}`}>
            <span className="font-display shout px-4 text-center text-3xl leading-none opacity-90">
              {product.title
                .split(" ")
                .slice(0, 2)
                .map((w) => w[0])
                .join("")}
            </span>
          </div>
        )}

        {isComingSoon && (
          <span className="absolute left-2 top-2 border-2 border-ink bg-cream px-2 py-1 font-display shout text-xs">
            Coming Soon
          </span>
        )}
      </div>

      <div className="p-4">
        <p className="font-display shout text-xl leading-tight">{product.title}</p>
        <p className="mt-1 font-display shout text-lg text-punch">
          {formatMoney(product.priceRange.minVariantPrice)}
        </p>
      </div>
    </Link>
  );
}
