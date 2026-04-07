import { useCallback, useEffect, useState } from "react";
import ProtectedMedia from "./ProtectedMedia";
import GalleryAnimations from "./GalleryAnimations";
import { categories } from "../data/galleryData";

function prevent(e) {
  e.preventDefault();
}

export default function GalleryModal({ mode, categoryId, onClose, t }) {
  const [lightbox, setLightbox] = useState(null);

  const mediaItems =
    mode === "all"
      ? categories.flatMap((cat) =>
          cat.media.map((m) => ({ ...m, catTitle: t[cat.titleKey] })),
        )
      : (categories.find((c) => c.id === categoryId)?.media ?? []);

  const categoryTitle =
    mode === "category"
      ? t[categories.find((c) => c.id === categoryId)?.titleKey]
      : t.galleryAllPhotos;

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        if (lightbox) {
          setLightbox(null);
        } else {
          onClose();
        }
      }
    },
    [lightbox, onClose],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <div
      className="modal-backdrop fixed inset-0 z-[60] flex flex-col bg-[#4f3640]/60 backdrop-blur-sm"
      onContextMenu={prevent}
    >
      <div className="relative z-10 flex shrink-0 items-center justify-between border-b border-[#e3d6ca]/30 bg-[#fcf8f3]/95 px-4 py-4 backdrop-blur-md sm:px-6">
        <h3 className="font-['Great_Vibes',cursive] text-2xl text-[#4f3640] sm:text-3xl">
          {categoryTitle}
        </h3>
        <button
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e3d6ca] bg-white/80 text-lg text-[#4f3640] transition-all duration-200 hover:bg-[#f5ede5] hover:shadow-md"
        >
          ✕
        </button>
      </div>

      <div className="relative z-10 flex-1 overflow-y-auto bg-[#fcf8f3]/70 p-4 sm:p-6 lg:p-8">
        <div className="pointer-events-none sticky top-0 left-0 z-0 h-0">
          <div className="absolute inset-0 h-[calc(100vh-5rem)] w-[calc(100vw)] -translate-x-4 overflow-hidden sm:-translate-x-6 lg:-translate-x-8">
            <GalleryAnimations />
          </div>
        </div>
        {mediaItems.length === 0 ? (
          <div className="flex h-full items-center justify-center">
            <p className="relative z-10 text-center text-lg text-[#9f8574]">
              {t.galleryEmpty}
            </p>
          </div>
        ) : (
          <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
            {mediaItems.map((item, i) => (
              <button
                key={i}
                onClick={() => setLightbox(item)}
                className="group aspect-[4/3] w-full overflow-hidden rounded-xl border border-[#e8ddd4] bg-white/70 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <ProtectedMedia
                  src={item.src}
                  type={item.type}
                  alt={`${categoryTitle} ${i + 1}`}
                  className="h-full w-full"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 backdrop-blur-md"
          onClick={() => setLightbox(null)}
          onContextMenu={prevent}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(null);
            }}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-lg text-white transition-colors hover:bg-white/40"
          >
            ✕
          </button>
          <div
            className="max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <ProtectedMedia
              src={lightbox.src}
              type={lightbox.type}
              alt=""
              className="max-h-[85vh] max-w-[85vw] rounded-lg"
              objectFit="contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
