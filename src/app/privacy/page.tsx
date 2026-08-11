export const metadata = {
  title: "Privacy Policy | Yell Yeah Pickleball",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <h1 className="shout font-display text-5xl sm:text-6xl">Privacy Policy</h1>
      <p className="mt-2 text-sm text-ink/60">Last updated: [add date]</p>

      <div className="mt-10 space-y-8 text-ink/80">
        <section>
          <h2 className="font-display shout text-2xl text-ocean">Information We Collect</h2>
          <p className="mt-2 leading-relaxed">
            We collect information you provide directly to us, such as your name
            and email address when you contact us, along with basic analytics about how visitors
            use this site.
          </p>
        </section>

        <section>
          <h2 className="font-display shout text-2xl text-ocean">How We Use Information</h2>
          <p className="mt-2 leading-relaxed">
            We use the information we collect to respond to inquiries, improve the
            site, and communicate with you.
          </p>
        </section>

        <section>
          <h2 className="font-display shout text-2xl text-ocean">Purchases &amp; Printful</h2>
          <p className="mt-2 leading-relaxed">
            Product purchases are completed on Printful&apos;s platform, not on this
            site. Any payment, shipping, and order information you provide during checkout is
            collected and processed by Printful under their own privacy policy.
          </p>
        </section>

        <section>
          <h2 className="font-display shout text-2xl text-ocean">Contact Us</h2>
          <p className="mt-2 leading-relaxed">
            Questions about this policy can be sent to{" "}
            <a href="mailto:yellyeahgear@gmail.com" className="text-teal hover:underline">
              yellyeahgear@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
