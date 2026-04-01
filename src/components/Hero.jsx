import { useMemo } from "react";
import { useCountdown } from "../hooks/useCountdown";
import ScrollReveal from "./ScrollReveal";
import { assetUrl } from "../utils/assetUrl";

export default function Hero({ t }) {
  const weddingDate = useMemo(() => new Date(2026, 5, 21, 19, 0, 0), []);
  const { days, hours, minutes, seconds } = useCountdown(weddingDate);

  const countdown = [
    { value: days, label: t.countdownDay },
    { value: hours, label: t.countdownHour },
    { value: minutes, label: t.countdownMinute },
    { value: seconds, label: t.countdownSecond },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center overflow-hidden scroll-mt-16"
    >
      <img
        src={assetUrl("back-ground.png")}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        style={{ animation: "gentle-breathe 8s ease-in-out infinite" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#fcf8f3]/60 via-transparent to-[#fcf8f3]/40 lg:bg-gradient-to-r lg:from-[#fcf8f3]/85 lg:via-[#fcf8f3]/30 lg:to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <ScrollReveal delay={0.2}>
          <div className="mx-auto max-w-xl text-center lg:mx-0 lg:max-w-lg lg:text-left">
            <p className="font-['Great_Vibes',cursive] text-3xl text-[#7b5d5e] sm:text-4xl lg:text-5xl">
              {t.homeTitleTop}
            </p>
            <h1 className="mt-4 font-['Great_Vibes',cursive] text-6xl leading-tight text-[#6a5056] sm:mt-6 sm:text-7xl lg:text-8xl">
              {t.coupleNames}
            </h1>
            <div className="mx-auto mt-6 max-w-md border-y border-[#d8c9bc] py-3 lg:mx-0">
              <p className="text-lg font-semibold text-[#5f3f47] sm:text-xl lg:text-2xl">
                {t.homeInviteLine}
              </p>
            </div>

            <div className="mx-auto mt-8 grid max-w-md grid-cols-4 gap-2 sm:gap-3 lg:mx-0">
              {countdown.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-[#e3d6ca] bg-white/60 px-2 py-3 text-center backdrop-blur-sm sm:px-4 sm:py-4"
                >
                  <span className="block text-2xl font-bold text-[#4f3241] sm:text-3xl lg:text-4xl">
                    {item.value}
                  </span>
                  <span className="text-[10px] font-medium text-[#5f4a41] sm:text-xs">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <button className="mt-8 w-full rounded-xl bg-gradient-to-b from-[#bd6f6b] to-[#9f5a57] px-8 py-3.5 text-base font-semibold text-[#f9f2ea] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-100 sm:w-auto sm:px-12 sm:text-lg">
              {t.invitationDetailsButton}
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
