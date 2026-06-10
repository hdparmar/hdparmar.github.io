import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 text-foreground">
      <div className="w-full max-w-[32rem] border-t border-border pt-5">
        <p className="mb-3 text-sm font-extralight text-muted-foreground">404</p>
        <h1 className="mb-4 text-3xl font-bold">Page not found</h1>
        <p className="mb-6 font-light leading-7 text-muted-foreground">The route does not exist in this portfolio ledger.</p>
        <a href="/" className="text-sm font-medium text-accent underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
