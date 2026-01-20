import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductSection from "@/components/ProductSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CostSection from "@/components/CostSection";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import heroImage from "@/assets/hero-classroom.png";

const Index = () => {
  const [loadingPhase, setLoadingPhase] = useState<'image' | 'text' | 'ui' | 'complete'>('image');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isCenterButtonVisible, setIsCenterButtonVisible] = useState(true);

  useEffect(() => {
    // Precargar la imagen de fondo
    const img = new Image();
    img.src = heroImage;
    img.onload = () => {
      // Imagen cargada, pasar a fase de texto
      setTimeout(() => setLoadingPhase('text'), 100);
      // Después del zoom del texto, mostrar navbar y botones (más rápido)
      setTimeout(() => setLoadingPhase('ui'), 600);
      setTimeout(() => setLoadingPhase('complete'), 1200);
    };
    // Fallback si la imagen ya está en caché
    if (img.complete) {
      setTimeout(() => setLoadingPhase('text'), 100);
      setTimeout(() => setLoadingPhase('ui'), 600);
      setTimeout(() => setLoadingPhase('complete'), 1200);
    }
  }, []);

  const handleOpenChat = () => {
    setIsChatOpen(true);
  };

  const handleChatButtonVisibilityChange = (isVisible: boolean) => {
    setIsCenterButtonVisible(isVisible);
  };

  return (
    <main className="overflow-x-hidden">
      <Navbar loadingPhase={loadingPhase} />
      <HeroSection 
        loadingPhase={loadingPhase} 
        onOpenChat={handleOpenChat}
        onChatButtonVisibilityChange={handleChatButtonVisibilityChange}
      />
      <AboutSection />
      <ProductSection />
      <HowItWorksSection />
      <CostSection />
      <Footer />
      <ChatWidget 
        externalOpen={isChatOpen} 
        onOpenChange={setIsChatOpen}
        showFloatingButton={!isCenterButtonVisible}
      />
    </main>
  );
};

export default Index;
