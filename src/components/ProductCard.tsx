import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";
import { formatMoney } from "@/lib/format";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/shop/${product.handle}`} className="card-hard group block bg-cream">
      <div className="relative aspect-square w-full overflow-hidden border-b-2 border-ink bg-paper">
        <Image
          src={product.images[0].image}
          alt={product.title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover"
        />
      </div>

      <div className="p-4">
        <p className="font-display shout text-xl leading-tight">{product.title}</p>
        <p className="mt-1 font-display shout text-lg text-teal">{formatMoney(product.price)}</p>
      </div>
    </Link>
  );
}
