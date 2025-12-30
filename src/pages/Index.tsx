import { useState } from "react";
import LoadingAnimation from "@/components/LoadingAnimation";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatIsSection from "@/components/WhatIsSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BenefitsSection from "@/components/BenefitsSection";
import UseCasesSection from "@/components/UseCasesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      {!showContent && <LoadingAnimation onComplete={() => setShowContent(true)} />}
      
      {showContent && (
        <main className="overflow-x-hidden">
          <Navbar />
          <HeroSection />
          <WhatIsSection />
          <FeaturesSection />
          <HowItWorksSection />
          <BenefitsSection />
          <UseCasesSection />
          <ContactSection />
          <Footer />
        </main>
      )}
    </>
  );
};

export default Index;
