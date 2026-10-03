import { Link, useLocation } from "react-router-dom";

import DarkModeToggle from "@/components/DarkModeToggle";
import { place } from "@/content/site";
import { useStockholmClock } from "@/hooks/useStockholmClock";

// "59.33° N ▸ 19:42:08 CEST", ticking every second, on every page.
const TopLine = () => {
  const { time, zone } = useStockholmClock();
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="page-column flex items-center justify-between gap-4 pt-10 md:pt-20">
      <p className="mono tabular-nums text-accent" aria-label={`Stockholm, ${place.latitude}. Local time ${time} ${zone}`}>
        {place.latitude} ▸ {time} {zone}
      </p>
      <div className="flex items-center gap-3">
        {!isHome && (
          <Link to="/" className="mono plain-link text-muted-foreground">
            ← Home
          </Link>
        )}
        <DarkModeToggle className="-mr-2" />
      </div>
    </div>
  );
};

export default TopLine;
