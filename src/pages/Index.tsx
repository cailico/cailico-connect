import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatIsSection from "@/components/WhatIsSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BenefitsSection from "@/components/BenefitsSection";
import UseCasesSection from "@/components/UseCasesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-classroom.png";

const Index = () => {
  const [loadingPhase, setLoadingPhase] = useState<'image' | 'text' | 'ui' | 'complete'>('image');

  useEffect(() => {
    // Precargar la imagen de fondo
    const img = new Image();
    img.src = heroImage;
    img.onload = () => {
      // Imagen cargada, pasar a fase de texto
      setTimeout(() => setLoadingPhase('text'), 100);
      // Después del zoom del texto, mostrar navbar y botones inmediatamente
      setTimeout(() => setLoadingPhase('ui'), 500);
      // Animación completa
      setTimeout(() => setLoadingPhase('complete'), 1100);
    };
    // Fallback si la imagen ya está en caché
    if (img.complete) {
      setTimeout(() => setLoadingPhase('text'), 100);
      setTimeout(() => setLoadingPhase('ui'), 500);
      setTimeout(() => setLoadingPhase('complete'), 1100);
    }
  }, []);

  return (
    <main className="overflow-x-hidden">
      <Navbar loadingPhase={loadingPhase} />
      <HeroSection loadingPhase={loadingPhase} />
      <WhatIsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <BenefitsSection />
      <UseCasesSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
