import Image from "next/image";

export default function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <Image
        src="/images/hero-banner.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-right opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/70 to-transparent" />
    </div>
  );
}
