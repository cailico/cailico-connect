import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-classroom.png";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showAltText, setShowAltText] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Después de que los corchetes se cierran (300ms), cambiar el texto
    setTimeout(() => {
      setShowAltText(true);
    }, 300);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Después de que los corchetes se cierran (300ms), cambiar el texto de vuelta
    setTimeout(() => {
      setShowAltText(false);
    }, 300);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            {/* Badge con corchetes animados */}
            <div 
              className="relative inline-flex items-center justify-center px-8 py-3 cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Corchete izquierdo */}
              <motion.div
                className="absolute left-0 top-0 bottom-0 flex flex-col justify-between"
                animate={{ 
                  x: isHovered ? "calc(50% - 4px)" : 0,
                  left: isHovered ? "50%" : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {/* Top L */}
                <div className="relative">
                  <span className="block w-4 h-[2px] bg-secondary rounded-tl-[4px]" />
                  <span className="absolute left-0 top-0 w-[2px] h-4 bg-secondary rounded-tl-[4px]" />
                </div>
                {/* Bottom L */}
                <div className="relative">
                  <span className="block w-4 h-[2px] bg-secondary rounded-bl-[4px]" />
                  <span className="absolute left-0 bottom-0 w-[2px] h-4 bg-secondary rounded-bl-[4px]" />
                </div>
              </motion.div>

              {/* Corchete derecho */}
              <motion.div
                className="absolute right-0 top-0 bottom-0 flex flex-col justify-between"
                animate={{ 
                  x: isHovered ? "calc(-50% + 4px)" : 0,
                  right: isHovered ? "50%" : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {/* Top L invertida */}
                <div className="relative">
                  <span className="block w-4 h-[2px] bg-secondary rounded-tr-[4px] ml-auto" />
                  <span className="absolute right-0 top-0 w-[2px] h-4 bg-secondary rounded-tr-[4px]" />
                </div>
                {/* Bottom L invertida */}
                <div className="relative">
                  <span className="block w-4 h-[2px] bg-secondary rounded-br-[4px] ml-auto" />
                  <span className="absolute right-0 bottom-0 w-[2px] h-4 bg-secondary rounded-br-[4px]" />
                </div>
              </motion.div>

              {/* Texto */}
              <AnimatePresence mode="wait">
                {!showAltText ? (
                  <motion.span
                    key="original"
                    className="text-secondary text-sm font-bold tracking-wider uppercase px-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 0 : 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    IA para Instituciones Educativas
                  </motion.span>
                ) : (
                  <motion.span
                    key="alternate"
                    className="text-white text-sm font-bold tracking-wider uppercase px-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: !isHovered ? 0 : 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  >
                    Reportes, notas al instante, ¡y mucho más!
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.h1
            className="text-[clamp(1.5rem,6vw,3.5rem)] font-bold leading-[1.25] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="block text-white whitespace-nowrap">TRANSFORMA LA</span>
            <span className="block bg-gradient-to-r from-white via-white/80 to-white/60 bg-clip-text text-transparent whitespace-nowrap">COMUNICACIÓN DE TU</span>
            <span className="block text-secondary whitespace-nowrap">ESCUELA CON IA</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Diseñamos infraestructuras inteligentes para integrar la comunicación entre directivos, profesores, estudiantes y padres de familia. ¡Lleva tu institución a la nueva era!
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">Solicitar Demo</a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#how-it-works">Ver cómo funciona</a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient - moved lower */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </section>
  );
};

export default HeroSection;
