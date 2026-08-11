import Link from "next/link";

const NAV_LINKS = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "Story" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="font-display shout text-3xl tracking-wide text-navy sm:text-4xl">
          Yell<span className="text-punch">Yeah</span>
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display shout text-xl text-ink transition-colors hover:text-punch"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/shop"
          className="btn-hard hidden bg-yell px-5 py-2 font-display shout text-lg text-ink sm:inline-block"
        >
          Shop Now
        </Link>

        {/* Mobile nav */}
        <nav className="flex items-center gap-4 sm:hidden">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="font-display shout text-base text-ink">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
