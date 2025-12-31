import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-classroom.png";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showAltText, setShowAltText] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const mainText = "IA PARA INSTITUCIONES EDUCATIVAS";
  const altText = "REPORTES, NOTAS AL INSTANTE, ¡Y MUCHO MÁS!";

  const handleMouseEnter = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsHovered(true);
    // Wait for brackets to close, then switch text
    setTimeout(() => {
      setShowAltText(true);
    }, 400);
    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  };

  const handleMouseLeave = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsHovered(false);
    setTimeout(() => {
      setShowAltText(false);
    }, 400);
    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  };

  const currentText = showAltText ? altText : mainText;
  const textColor = showAltText ? "text-white" : "text-secondary";

  // Letter animation - each letter fades based on hover state
  const getLetterDelay = (index: number, total: number) => {
    // When closing (hover), letters in the middle fade first
    // When opening (not hover), letters appear from edges to center
    const center = total / 2;
    const distanceFromCenter = Math.abs(index - center);
    const maxDistance = center;
    return (1 - distanceFromCenter / maxDistance) * 0.2;
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
              className="relative inline-flex items-center justify-center cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ minWidth: '420px' }}
            >
              {/* Corchete IZQUIERDO - Esquina superior izquierda ┌ */}
              <motion.div
                className="absolute"
                style={{ top: '-4px', left: '-8px' }}
                animate={{ 
                  x: isHovered ? 'calc(210px - 12px)' : 0
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <svg width="20" height="32" viewBox="0 0 20 32" fill="none">
                  <line x1="0" y1="1" x2="20" y2="1" stroke="hsl(var(--secondary))" strokeWidth="2"/>
                  <line x1="1" y1="0" x2="1" y2="32" stroke="hsl(var(--secondary))" strokeWidth="2"/>
                </svg>
              </motion.div>

              {/* Corchete DERECHO - Esquina inferior derecha ┘ */}
              <motion.div
                className="absolute"
                style={{ bottom: '-4px', right: '-8px' }}
                animate={{ 
                  x: isHovered ? 'calc(-210px + 12px)' : 0
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <svg width="20" height="32" viewBox="0 0 20 32" fill="none">
                  <line x1="19" y1="0" x2="19" y2="32" stroke="hsl(var(--secondary))" strokeWidth="2"/>
                  <line x1="0" y1="31" x2="20" y2="31" stroke="hsl(var(--secondary))" strokeWidth="2"/>
                </svg>
              </motion.div>

              {/* Texto con animación letra por letra */}
              <div className="flex items-center justify-center px-4 py-2">
                <span className={`text-sm font-bold tracking-wider uppercase whitespace-nowrap flex`}>
                  {currentText.split('').map((letter, index) => (
                    <motion.span
                      key={`${showAltText}-${index}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isHovered && !showAltText ? 0 : (!isHovered && showAltText ? 0 : 1) }}
                      transition={{ 
                        duration: 0.15,
                        delay: getLetterDelay(index, currentText.length)
                      }}
                      className={textColor}
                    >
                      {letter === ' ' ? '\u00A0' : letter}
                    </motion.span>
                  ))}
                </span>
              </div>
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

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </section>
  );
};

export default HeroSection;
