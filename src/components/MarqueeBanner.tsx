const DEFAULT_ITEMS = [
  "GAME LOUD",
  "PLAY HARD",
  "WHERE PASSION MEETS PADDLE",
  "BOLD GEAR FOR A LOUD GAME",
];

export default function MarqueeBanner({
  items = DEFAULT_ITEMS,
  tone = "dark",
}: {
  items?: string[];
  tone?: "dark" | "light";
}) {
  const doubled = [...items, ...items];
  const bg = tone === "dark" ? "bg-ink text-cream" : "bg-yell text-ink";

  return (
    <div className={`overflow-hidden border-y-2 border-ink py-3 ${bg}`}>
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="mx-4 flex items-center font-display shout text-xl sm:text-2xl">
            {item}
            <span className="mx-4 inline-block h-2 w-2 rounded-full bg-punch" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}
