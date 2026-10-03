import { useEffect, useState } from "react";

import { place } from "@/content/site";

const read = () => {
  const now = new Date();
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: place.timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(now);
  const part = (type: string) => parts.find((p) => p.type === type)?.value ?? "00";
  const offset = (Number(part("hour")) - now.getUTCHours() + 24) % 24;

  return {
    time: `${part("hour")}:${part("minute")}:${part("second")}`,
    zone: offset === 2 ? "CEST" : "CET",
  };
};

export const useStockholmClock = () => {
  const [clock, setClock] = useState(read);

  useEffect(() => {
    const timer = window.setInterval(() => setClock(read()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return clock;
};
