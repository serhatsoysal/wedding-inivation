import ScrollReveal from "./ScrollReveal";

export default function WeddingInfo({ t }) {
  const cards = [
    { title: t.dateTitle, lines: [t.dateValue, t.timeValue], icon: "📅" },
    { title: t.venueTitle, lines: [t.venueName, t.venueCity], icon: "📍" },
    { title: t.transportTitle, lines: [t.transportValue], icon: "🗺️" },
  ];

  return (
    <section
      id="wedding-info"
      className="relative flex min-h-[60vh] items-center overflow-hidden scroll-mt-16 sm:min-h-[70vh]"
    >
      <img
        src="/assets/story-background.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-[#fcf8f3]/30" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <ScrollReveal className="text-center">
          <h2 className="font-['Great_Vibes',cursive] text-4xl text-[#4f3640] sm:text-5xl">
            {t.weddingInfoTitle}
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-3 sm:gap-8">
          {cards.map((card, i) => (
            <ScrollReveal key={i} delay={0.1 * (i + 1)}>
              <div className="rounded-2xl border border-[#e3d6ca] bg-white/80 p-6 text-center shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">
                <span className="text-3xl">{card.icon}</span>
                <h3 className="mt-3 text-sm font-bold uppercase tracking-wider text-[#4f3640] sm:text-base">
                  {card.title}
                </h3>
                {card.lines.map((line, j) => (
                  <p
                    key={j}
                    className="mt-1 text-sm font-medium text-[#5f4a41] sm:text-base"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
