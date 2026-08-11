import Image from "next/image";

export const metadata = {
  title: "Contact | Yell Yeah Pickleball",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
      <h1 className="shout font-display text-6xl">Say Something Loud</h1>
      <p className="mt-4 max-w-md text-ink/70">
        Questions about an order, a wholesale ask, or just want to tell us about your last
        smash winner? We&apos;re listening.
      </p>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="order-2 grid gap-10 sm:grid-cols-2 lg:order-1">
          <form
            action="mailto:hello@yellyeahpickleball.com"
            method="GET"
            encType="text/plain"
            className="card-hard flex flex-col gap-4 bg-cream p-6"
          >
            <label className="flex flex-col gap-1">
              <span className="font-display shout text-sm text-ink/60">Name</span>
              <input
                name="name"
                required
                className="border-2 border-ink bg-paper px-3 py-2 outline-none focus:bg-cream"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="font-display shout text-sm text-ink/60">Email</span>
              <input
                type="email"
                name="email"
                required
                className="border-2 border-ink bg-paper px-3 py-2 outline-none focus:bg-cream"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="font-display shout text-sm text-ink/60">Message</span>
              <textarea
                name="body"
                required
                rows={5}
                className="border-2 border-ink bg-paper px-3 py-2 outline-none focus:bg-cream"
              />
            </label>
            <button type="submit" className="btn-hard mt-2 bg-teal px-6 py-3 font-display shout text-lg text-cream">
              Send It
            </button>
          </form>

          <div className="flex flex-col gap-6">
            <div>
              <p className="font-display shout text-lg text-ocean">Email</p>
              <a href="mailto:hello@yellyeahpickleball.com" className="text-ink/80 hover:text-teal">
                hello@yellyeahpickleball.com
              </a>
            </div>
            <div>
              <p className="font-display shout text-lg text-ocean">Socials</p>
              <a
                href="https://www.tiktok.com/@yellyeahpickleball"
                target="_blank"
                rel="noreferrer"
                className="block text-ink/80 hover:text-teal"
              >
                TikTok — @yellyeahpickleball
              </a>
            </div>
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2">
          <Image
            src="/images/wordmark-sticker.png"
            alt="Yell Yeah Pickleball"
            width={760}
            height={735}
            className="h-auto w-72 lg:w-80"
          />
        </div>
      </div>
    </div>
  );
}
