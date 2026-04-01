import ScrollReveal from "./ScrollReveal";

const galleryImages = [
  "/assets/back-ground.png",
  "/assets/story-background.png",
  "/assets/photo-galery-background.png",
  "/assets/footer-background.png",
];

export default function Gallery({ t }) {
  return (
    <section
      id="photos"
      className="scroll-mt-16 bg-gradient-to-b from-[#fcf8f3] to-[#f5ede5] py-16 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <h2 className="font-['Great_Vibes',cursive] text-4xl text-[#4f3640] sm:text-5xl">
            {t.galleryTitle}
          </h2>
        </ScrollReveal>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {galleryImages.map((src, i) => (
            <ScrollReveal key={i} delay={0.08 * (i + 1)}>
              <div className="group overflow-hidden rounded-xl border border-[#e8ddd4] bg-white/70 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative overflow-hidden">
                  <img
                    src={src}
                    alt={`${t.galleryTitle} ${i + 1}`}
                    className="h-32 w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:h-44 lg:h-52"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#4f3640]/0 transition-colors duration-300 group-hover:bg-[#4f3640]/15" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-8 text-center sm:mt-10" delay={0.4}>
          <button className="w-full rounded-xl bg-gradient-to-b from-[#bd6f6b] to-[#9f5a57] px-8 py-3.5 text-base font-semibold text-[#fff0ea] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-100 sm:w-auto sm:px-12 sm:text-lg">
            {t.galleryCta}
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
}
