import Hero from "@/components/Hero";
import Tonestruments from "@/components/Tonestruments";
import Thesis from "@/components/Thesis";
import Writing from "@/components/Writing";
import Photography from "@/components/Photography";
import Footer from "@/components/Footer";
import { useAnalytics } from "@/hooks/useAnalytics";

const Index = () => {
  // Initialize analytics tracking
  useAnalytics();

  return (
    <div className="min-h-screen">
      <Hero />
      <Tonestruments />
      <Thesis />
      <Writing />
      <Photography />
      <Footer />
    </div>
  );
};

export default Index;
