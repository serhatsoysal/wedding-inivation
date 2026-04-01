import ScrollReveal from "./ScrollReveal";
import { assetUrl } from "../utils/assetUrl";

export default function Footer({ t }) {
  return (
    <footer className="relative overflow-hidden py-16 sm:py-24">
      <img
        src={assetUrl("footer-background.png")}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-[#fcf8f3]/40" />
      <ScrollReveal className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="font-['Great_Vibes',cursive] text-3xl text-[#6a5056] sm:text-4xl lg:text-5xl">
          {t.footerMessage}
        </p>
        <p className="mt-6 text-sm text-[#8a7068]">{t.footerCopyright}</p>
      </ScrollReveal>
    </footer>
  );
}
