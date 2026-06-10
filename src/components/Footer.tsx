import { useEffect, useState } from "react";

const STOCKHOLM_TIME_ZONE = "Europe/Stockholm";

const getStockholmTime = () =>
  new Intl.DateTimeFormat("en-SE", {
    timeZone: STOCKHOLM_TIME_ZONE,
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  }).format(new Date());

const Footer = () => {
  const [stockholmTime, setStockholmTime] = useState(getStockholmTime);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setStockholmTime(getStockholmTime());
    }, 60_000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <footer className="mx-auto w-full max-w-[44rem] px-5 py-10 sm:px-6">
      <div className="border-t border-border pt-5">
        <div className="flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 font-extralight text-muted-foreground">
            <span>© {new Date().getFullYear()} Harshdeep Parmar</span>
          </div>
          <div className="font-extralight text-muted-foreground">
            <span aria-hidden="true">📍</span> Stockholm, Sweden · {stockholmTime}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
