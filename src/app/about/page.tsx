import Link from "next/link";
import MarqueeBanner from "@/components/MarqueeBanner";

export const metadata = {
  title: "About | Yell Yeah Pickleball",
};

export default function AboutPage() {
  return (
    <div>
      <section className="bg-dots border-b-2 border-ink bg-paper px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl">
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
    </div>
  );
}
