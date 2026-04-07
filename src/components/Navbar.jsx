import { useEffect, useState } from "react";

const navItems = [
  { key: "home", href: "#home" },
  { key: "story", href: "#story" },
  { key: "weddingInfo", href: "#wedding-info" },
  { key: "photos", href: "#photos" },
  { key: "contact", href: "#contact" },
];

const languageOptions = [
  { value: "tr", label: "TR" },
  { value: "en", label: "EN" },
];

export default function Navbar({ language, onLanguageChange, t }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const ids = navItems.map((n) => n.href.slice(1));
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -40% 0px" },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const handleNavClick = (e, href) => {
    if (!href.startsWith("#")) return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    setMenuOpen(false);
    const top = target.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#fcf8f3]/80 shadow-[0_1px_16px_rgba(79,54,64,0.05)] backdrop-blur-xl"
          : "bg-[#fcf8f3]/60 backdrop-blur-md"
      }`}
    >
      <div
        className={`absolute inset-x-0 bottom-0 h-px transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
        style={{ background: "linear-gradient(90deg, transparent, rgba(201,160,122,0.2) 30%, rgba(201,160,122,0.25) 50%, rgba(201,160,122,0.2) 70%, transparent)" }}
      />
      <nav
        aria-label={t.navAriaLabel}
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="group flex items-center gap-1.5"
        >
          <span className="font-['Great_Vibes',cursive] text-[26px] text-[#4f3640] transition-colors duration-300 group-hover:text-[#9b5a6e] sm:text-[30px]">
            Ö
          </span>
          <svg
            width="13"
            height="12"
            viewBox="0 0 24 22"
            className="text-[#c9a07a] transition-transform duration-500 group-hover:scale-125"
            fill="currentColor"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <span className="font-['Great_Vibes',cursive] text-[26px] text-[#4f3640] transition-colors duration-300 group-hover:text-[#9b5a6e] sm:text-[30px]">
            M
          </span>
        </a>

        <div className="hidden items-center md:flex">
          <div className="flex items-center gap-0.5">
            {navItems.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`group relative rounded-full px-3.5 py-1.5 text-[13px] font-medium tracking-wide transition-all duration-300 ${
                    isActive
                      ? "text-[#4f3640]"
                      : "text-[#8f7d72] hover:text-[#5a443b]"
                  }`}
                >
                  {t[item.key]}
                  <span
                    className={`absolute inset-x-2 bottom-0 h-[2px] rounded-full bg-gradient-to-r from-[#c9a07a] to-[#e8a0b0] transition-all duration-300 ${
                      isActive
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-60"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          <span className="mx-3 h-5 w-px bg-[#e3d6ca]" />

          <div className="flex items-center gap-0.5 rounded-full border border-[#e3d6ca]/80 bg-[#f5ede5]/50 p-[3px]">
            {languageOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => onLanguageChange(opt.value)}
                className={`rounded-full px-3 py-[5px] text-[11px] font-bold tracking-widest transition-all duration-300 ${
                  language === opt.value
                    ? "bg-[#4f3640] text-[#fcf8f3] shadow-sm"
                    : "text-[#8f7d72] hover:text-[#5a443b]"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-0.5 w-6 rounded-full bg-[#4f3640] transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 rounded-full bg-[#4f3640] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 rounded-full bg-[#4f3640] transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>


      <div
        className={`overflow-hidden bg-[#fcf8f3]/90 backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-[28rem] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-sm flex-col items-stretch gap-1 px-6 pb-6 pt-3">
          {navItems.map((item) => {
            const isActive = active === item.href.slice(1);
            return (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative rounded-xl px-4 py-3 text-center text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-[#f5ede5] to-[#f0e6dc] text-[#4f3640] shadow-sm"
                    : "text-[#8f7d72] hover:bg-[#f5ede5]/60 hover:text-[#5a443b]"
                }`}
              >
                {t[item.key]}
                {isActive && (
                  <span className="absolute left-3 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#c9a07a]" />
                )}
              </a>
            );
          })}

          <div className="mx-auto mt-3 flex items-center gap-0.5 rounded-full border border-[#e3d6ca]/80 bg-[#f5ede5]/50 p-[3px]">
            {languageOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => onLanguageChange(opt.value)}
                className={`rounded-full px-5 py-1.5 text-xs font-bold tracking-widest transition-all duration-300 ${
                  language === opt.value
                    ? "bg-[#4f3640] text-[#fcf8f3] shadow-sm"
                    : "text-[#8f7d72] hover:text-[#5a443b]"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
