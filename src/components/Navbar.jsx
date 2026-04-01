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
  const [opacity, setOpacity] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setOpacity(Math.min(window.scrollY / 200, 0.97));
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
      className="fixed inset-x-0 top-0 z-50 transition-colors duration-300"
      style={{ backgroundColor: `rgba(252, 248, 243, ${opacity})` }}
    >
      <nav
        aria-label={t.navAriaLabel}
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="font-['Great_Vibes',cursive] text-2xl text-[#4f3640]"
        >
          Ö & M
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-medium text-[#5a443b] transition-opacity duration-200 hover:opacity-60"
            >
              {t[item.key]}
            </a>
          ))}
          <div className="relative">
            <select
              aria-label={t.languageSwitcherAriaLabel}
              value={language}
              onChange={(e) => onLanguageChange(e.target.value)}
              className="h-8 appearance-none border-b border-[#d7c8bc] bg-transparent px-2 pr-5 text-xs font-medium text-[#5a443b] outline-none transition-colors focus:border-[#9f8574]"
            >
              {languageOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[10px] text-[#8f7d72]"
            >
              ▾
            </span>
          </div>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-[#4f3640] transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#4f3640] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#4f3640] transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
        style={{ backgroundColor: "rgba(252, 248, 243, 0.98)" }}
      >
        <div className="flex flex-col items-center gap-4 px-4 pb-6 pt-2">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-medium text-[#5a443b] transition-opacity duration-200 hover:opacity-60"
            >
              {t[item.key]}
            </a>
          ))}
          <select
            aria-label={t.languageSwitcherAriaLabel}
            value={language}
            onChange={(e) => onLanguageChange(e.target.value)}
            className="h-8 appearance-none border-b border-[#d7c8bc] bg-transparent px-2 text-xs font-medium text-[#5a443b] outline-none"
          >
            {languageOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
}
