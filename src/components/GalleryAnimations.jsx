import DancingScene from "./DancingScene";

const items = [
  { emoji: "\u{1F4F7}", left: "5%", top: "12%", delay: 0, duration: 14, anim: "photo-float", size: 18 },
  { emoji: "\u{1F4F8}", left: "88%", top: "8%", delay: 2, duration: 10, anim: "photo-bounce", size: 17 },
  { emoji: "\u{1F39E}\uFE0F", left: "72%", top: "78%", delay: 4, duration: 18, anim: "photo-drift", size: 16 },
  { emoji: "\u2728", left: "18%", top: "68%", delay: 1, duration: 6, anim: "photo-twinkle", size: 14 },
  { emoji: "\u2728", left: "82%", top: "42%", delay: 4, duration: 7, anim: "photo-twinkle", size: 15 },
  { emoji: "\u2B50", left: "92%", top: "62%", delay: 0, duration: 8, anim: "gentle-breathe", size: 14 },
  { emoji: "\u{1F31F}", left: "14%", top: "38%", delay: 3, duration: 20, anim: "photo-orbit", size: 16 },
  { emoji: "\u{1F495}", left: "48%", top: "6%", delay: 2, duration: 12, anim: "photo-rise", size: 17 },
  { emoji: "\u{1F5BC}\uFE0F", left: "35%", top: "82%", delay: 5, duration: 10, anim: "photo-sway", size: 15 },
  { emoji: "\u{1F3A5}", left: "60%", top: "14%", delay: 6, duration: 16, anim: "photo-float", size: 16 },
  { emoji: "\u{1F38A}", left: "26%", top: "22%", delay: 3, duration: 14, anim: "photo-spiral", size: 15 },
  { emoji: "\u{1F4AB}", left: "76%", top: "28%", delay: 1, duration: 5, anim: "photo-twinkle", size: 14 },
  { emoji: "\u{1F339}", left: "42%", top: "72%", delay: 7, duration: 9, anim: "photo-sway", size: 15 },
  { emoji: "\u{1F380}", left: "55%", top: "88%", delay: 0, duration: 15, anim: "photo-drift", size: 14 },
  { emoji: "\u{1F3AC}", left: "8%", top: "85%", delay: 5, duration: 11, anim: "photo-bounce", size: 16 },
];

export default function GalleryAnimations() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {items.map((it, i) => (
        <span
          key={i}
          className="absolute"
          style={{
            left: it.left,
            top: it.top,
            fontSize: `${it.size}px`,
            opacity: 0.15 + (i % 3) * 0.07,
            animation: `${it.anim} ${it.duration}s ease-in-out ${it.delay}s infinite`,
            willChange: "transform, opacity",
          }}
        >
          {it.emoji}
        </span>
      ))}
      <div
        className="absolute bottom-0 right-0"
        style={{ width: "400px", maxWidth: "55%", opacity: 0.22 }}
      >
        <DancingScene />
      </div>
    </div>
  );
}
