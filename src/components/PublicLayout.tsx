import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import FilmRail from "@/components/FilmRail";
import SiteFooter from "@/components/SiteFooter";
import TopLine from "@/components/TopLine";
import { useAnalytics } from "@/hooks/useAnalytics";

// Shared frame for every public page. Analytics runs here so page views are
// recorded for the landing page, the album and writing alike.
const PublicLayout = () => {
  useAnalytics();
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <div className="site relative min-h-screen overflow-hidden bg-background text-foreground">
      <FilmRail />
      <TopLine />
      <Outlet />
      <SiteFooter />
    </div>
  );
};

export default PublicLayout;
