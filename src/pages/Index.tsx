import Hero from "@/components/Hero";
import Tonestruments from "@/components/Tonestruments";
import Thesis from "@/components/Thesis";
import Writing from "@/components/Writing";
import Photography from "@/components/Photography";
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ScrollIndicator";
import { useAnalytics } from "@/hooks/useAnalytics";

const Index = () => {
  // Initialize analytics tracking
  useAnalytics();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors dark:bg-background dark:text-foreground">
      <ScrollIndicator />
      <Hero />
      <main className="relative mx-auto w-full max-w-[44rem] px-5 sm:px-6">
        <Tonestruments />
        <Thesis />
        <Writing />
        <Photography />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
