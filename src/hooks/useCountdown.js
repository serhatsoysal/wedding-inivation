import { useEffect, useState } from "react";

function calculate(target) {
  const diff = Math.max(0, target.getTime() - Date.now());
  const s = Math.floor(diff / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}

export function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState(() => calculate(targetDate));

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculate(targetDate)), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}
