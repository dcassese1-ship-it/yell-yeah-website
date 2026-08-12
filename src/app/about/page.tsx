import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import HeroBackdrop from "@/components/HeroBackdrop";
import MarqueeBanner from "@/components/MarqueeBanner";
import { tileColorForHandle } from "@/lib/format";

const MERCH_SPOTLIGHTS = [
  { id: "merch-1", caption: "Tag us @yellyeahpickleball" },
  { id: "merch-2", caption: "Tag us @yellyeahpickleball" },
  { id: "merch-3", caption: "Tag us @yellyeahpickleball" },
  { id: "merch-4", caption: "Tag us @yellyeahpickleball" },
];

const SOCIALS = [
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@yellyeahpickleball",
    bg: "bg-teal",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/yellyeahpickleball",
    bg: "bg-ocean",
  },
];

export const metadata = {
  title: "About | Yell Yeah Pickleball",
};

export default function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b-2 border-ink bg-paper px-5 py-16 sm:px-8 sm:py-24">
        <HeroBackdrop />

        <div className="relative mx-auto max-w-4xl">
          <h1 className="shout font-display text-6xl sm:text-7xl">
            Where Passion <br /> Meets <span className="text-teal">Paddle</span>
          </h1>
        </div>
      </section>

      <MarqueeBanner tone="dark" />

      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <div className="space-y-6 text-lg leading-relaxed text-ink/80">
          <p>
            Yell Yeah started the way most good pickleball stories do: with a loud rally, a
            ridiculous celebration, and someone yelling &quot;YEAH!&quot; a little too
            enthusiastically. We figured a sport this fun deserved gear that matched the energy.
          </p>
          <p>
            Every piece we make is built for players who show up to actually play — moisture-
            wicking performance fabric, bold graphics, and designs that hold up rally after
            rally. No boring gear. No quiet celebrations.
          </p>
          <p>
            We&apos;re a small, player-run brand, which means every design starts on the court,
            not in a spreadsheet. If it doesn&apos;t make us want to yell &quot;yeah,&quot; it
            doesn&apos;t make the cut.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <div className="card-hard bg-cream p-6">
            <p className="font-display shout text-2xl text-teal">Performance First</p>
            <p className="mt-2 text-sm text-ink/70">
              Cool-dry fabrics built to keep up with your game, not slow it down.
            </p>
          </div>
          <div className="card-hard bg-cream p-6">
            <p className="font-display shout text-2xl text-ocean">Bold by Design</p>
            <p className="mt-2 text-sm text-ink/70">
              Tie-dye, big graphics, loud colors — gear that&apos;s easy to spot across the court.
            </p>
          </div>
          <div className="card-hard bg-cream p-6">
            <p className="font-display shout text-2xl text-ink">Player Run</p>
            <p className="mt-2 text-sm text-ink/70">
              Built by people who actually play, test, and yell on the court every week.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4 border-t-2 border-ink pt-8">
          <p className="font-display shout text-xl">Ready to gear up?</p>
          <Link href="/shop" className="btn-hard bg-volt px-6 py-3 font-display shout text-lg text-ink">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* People wearing merch */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <h2 className="shout font-display text-4xl sm:text-5xl">Yell Yeah In The Wild</h2>
        <p className="mt-2 max-w-xl text-ink/70">
          Real players, real energy. Send us your on-court fits and we&apos;ll feature them here.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {MERCH_SPOTLIGHTS.map((spot) => {
            const tileColor = tileColorForHandle(spot.id);
            const textOnTile = tileColor === "bg-volt" || tileColor === "bg-mint" ? "text-ink" : "text-cream";
            return (
              <div key={spot.id} className="card-hard bg-cream">
                <div
                  className={`flex aspect-square w-full items-center justify-center border-b-2 border-ink ${tileColor} ${textOnTile}`}
                >
                  <span className="font-display shout text-3xl opacity-90">YY</span>
                </div>
                <p className="p-3 text-center text-xs text-ink/70">{spot.caption}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <div className="card-hard bg-cream p-4">
            <blockquote
              className="tiktok-embed"
              cite="https://www.tiktok.com/@yellyeahpickleball/video/7557104493788155167"
              data-video-id="7557104493788155167"
              style={{ maxWidth: "605px", minWidth: "325px" }}
            >
              <section></section>
            </blockquote>
          </div>
        </div>
        <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />
      </section>

      {/* Meet the Brand Ambassador */}
      <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
        <h2 className="shout font-display text-4xl sm:text-5xl">Meet the Brand Ambassador</h2>

        <div className="mt-8 grid gap-10 sm:grid-cols-2 sm:items-center">
          <div className="card-hard relative aspect-square w-full overflow-hidden">
            <Image
              src="/images/tie-dye-dave.jpg"
              alt="Tie Dye Dave, Yell Yeah brand ambassador"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="font-display shout text-2xl text-teal">Tie Dye Dave — Brand Ambassador</p>
            <p className="mt-4 leading-relaxed text-ink/80">
              Two years ago I reluctantly picked up a paddle — and got hooked instantly. Now
              I&apos;m on the court every chance I get, catching matches on TV, studying
              instructional videos, and always working to level up my game. Any chance I get,
              I&apos;m repping Yell Yeah and hyping up this sport.
            </p>
            <a
              href="https://www.tiktok.com/@tiedyedave"
              target="_blank"
              rel="noreferrer"
              className="btn-hard mt-6 inline-block bg-mint px-5 py-2 font-display shout text-base text-ink"
            >
              Follow Tie Dye Dave →
            </a>
          </div>
        </div>
      </section>

      {/* Social strip */}
      <section className="border-t-2 border-ink bg-ink py-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <h2 className="shout font-display text-4xl text-cream sm:text-5xl">Get Loud With Us</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {SOCIALS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className={`card-hard block ${social.bg} p-6 text-cream`}
              >
                <p className="font-display shout text-3xl">{social.name}</p>
                <p className="mt-2 font-display shout text-sm text-volt">Follow the Energy →</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
