import ScrollReveal from "./ScrollReveal";

export default function RSVP({ t }) {
  return (
    <section className="scroll-mt-16 bg-gradient-to-b from-[#f5ede5] to-[#fcf8f3] py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-['Great_Vibes',cursive] text-4xl text-[#6a5056] sm:text-5xl">
            {t.rsvpTitle}
          </h2>
          <p className="mt-4 text-base text-[#5f4a41] sm:text-lg">
            {t.rsvpDescription}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
            <button className="w-full rounded-xl bg-gradient-to-b from-[#e2ab57] to-[#d6953d] px-8 py-3.5 text-base font-semibold text-[#fff5e9] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-100 sm:w-auto sm:px-12 sm:text-lg">
              {t.rsvpYes}
            </button>
            <button className="w-full rounded-xl bg-gradient-to-b from-[#bd6f6b] to-[#9f5a57] px-8 py-3.5 text-base font-semibold text-[#fff0ea] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-100 sm:w-auto sm:px-12 sm:text-lg">
              {t.rsvpNo}
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
