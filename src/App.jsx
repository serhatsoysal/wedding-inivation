import { useLanguage } from "./hooks/useLanguage";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import WeddingInfo from "./components/WeddingInfo";
import RSVP from "./components/RSVP";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import FloatingElements from "./components/FloatingElements";

export default function App() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <main className="min-h-svh bg-[#fcf8f3] font-['Montserrat',sans-serif] text-[#4f3640]">
      <Navbar language={language} onLanguageChange={setLanguage} t={t} />
      <FloatingElements />
      <Hero t={t} />
      <Story t={t} />
      <WeddingInfo t={t} />
      <RSVP t={t} />
      <Gallery t={t} />
      <FAQ t={t} />
      <Footer t={t} />
    </main>
  );
}
