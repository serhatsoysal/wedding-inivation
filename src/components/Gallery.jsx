import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import GalleryModal from "./GalleryModal";
import GalleryAnimations from "./GalleryAnimations";
import { categories } from "../data/galleryData";

export default function Gallery({ t }) {
  const [modal, setModal] = useState(null);

  return (
    <>
      <section
        id="photos"
        className="relative min-h-[calc(100svh-4rem)] bg-gradient-to-b from-[#fcf8f3] to-[#f5ede5] py-16 sm:py-24 lg:py-32"
      >
        <GalleryAnimations />
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center">
            <h2 className="font-['Great_Vibes',cursive] text-4xl text-[#4f3640] sm:text-5xl">
              {t.galleryTitle}
            </h2>
          </ScrollReveal>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            {categories.map((cat, i) => (
              <ScrollReveal key={cat.id} delay={0.1 * (i + 1)}>
                <button
                  onClick={() =>
                    setModal({ mode: "category", categoryId: cat.id })
                  }
                  className="group flex w-full flex-col overflow-hidden rounded-xl border border-[#e8ddd4] bg-[#fcf8f3] shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#d8c9bc] hover:shadow-xl"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-[#f5ede5]">
                    <img
                      src={cat.cover}
                      alt={t[cat.titleKey]}
                      className="h-full w-full object-cover object-[center_26%] transition-transform duration-500 group-hover:scale-105"
                      style={{ height: "100%" }}
                      draggable={false}
                      loading="lazy"
                    />
                  </div>
                  <div className="border-t border-[#e3d6ca]/70 bg-gradient-to-b from-[#fffdfb] to-[#f9f2ea] px-2 py-2.5 text-center sm:px-3 sm:py-3">
                    <span className="font-['Great_Vibes',cursive] text-lg leading-tight text-[#5a443b] sm:text-xl">
                      {t[cat.titleKey]}
                    </span>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-8 text-center sm:mt-10" delay={0.5}>
            <button
              onClick={() => setModal({ mode: "all" })}
              className="w-full rounded-xl bg-gradient-to-b from-[#bd6f6b] to-[#9f5a57] px-8 py-3.5 text-base font-semibold text-[#fff0ea] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-100 sm:w-auto sm:px-12 sm:text-lg"
            >
              {t.galleryCta}
            </button>
          </ScrollReveal>
        </div>
      </section>

      {modal && (
        <GalleryModal
          mode={modal.mode}
          categoryId={modal.categoryId}
          onClose={() => setModal(null)}
          t={t}
        />
      )}
    </>
  );
}
