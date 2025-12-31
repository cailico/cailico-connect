import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-classroom.png";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [animationPhase, setAnimationPhase] = useState<'idle' | 'closing' | 'closed' | 'opening'>('idle');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const textRef = useRef<HTMLDivElement>(null);
  const [textWidth, setTextWidth] = useState(320);

  const texts = [
    { text: "IA PARA INSTITUCIONES EDUCATIVAS", color: "text-secondary" },
    { text: "REPORTES, NOTAS AL INSTANTE, ¡Y MUCHO MÁS!", color: "text-white" }
  ];

  const currentText = texts[currentTextIndex];

  // Measure text width
  useEffect(() => {
    if (textRef.current) {
      const width = textRef.current.offsetWidth;
      setTextWidth(width);
    }
  }, [currentTextIndex]);

  const handleMouseEnter = () => {
    if (animationPhase !== 'idle') return;
    setIsHovered(true);
    setAnimationPhase('closing');
  };

  const handleMouseLeave = () => {
    if (animationPhase !== 'idle') return;
    setIsHovered(true);
    setAnimationPhase('closing');
  };

  // Animation sequence
  useEffect(() => {
    if (animationPhase === 'closing') {
      // Wait for brackets to close
      const timer = setTimeout(() => {
        setAnimationPhase('closed');
      }, 400);
      return () => clearTimeout(timer);
    }

    if (animationPhase === 'closed') {
      // Switch text and start opening
      setCurrentTextIndex(prev => (prev + 1) % texts.length);
      const timer = setTimeout(() => {
        setAnimationPhase('opening');
      }, 100);
      return () => clearTimeout(timer);
    }

    if (animationPhase === 'opening') {
      // Wait for brackets to open
      const timer = setTimeout(() => {
        setAnimationPhase('idle');
        setIsHovered(false);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [animationPhase, texts.length]);

  // Letter animation - outside to inside when closing, inside to outside when opening
  const getLetterOpacity = (index: number, total: number) => {
    const center = total / 2;
    const distanceFromCenter = Math.abs(index - center);
    const maxDistance = center;
    const normalizedDistance = distanceFromCenter / maxDistance;

    if (animationPhase === 'closing') {
      // Fade from outside to inside (edges fade first)
      return normalizedDistance > 0.5 ? 0 : 1;
    }
    if (animationPhase === 'closed') {
      return 0;
    }
    if (animationPhase === 'opening') {
      // Fade from inside to outside (center appears first)
      return normalizedDistance < 0.5 ? 1 : 0;
    }
    return 1;
  };

  const getLetterDelay = (index: number, total: number) => {
    const center = total / 2;
    const distanceFromCenter = Math.abs(index - center);
    const maxDistance = center;
    const normalizedDistance = distanceFromCenter / maxDistance;

    if (animationPhase === 'closing') {
      // Edges fade first, center fades last
      return (1 - normalizedDistance) * 0.25;
    }
    if (animationPhase === 'opening') {
      // Center appears first, edges appear last
      return normalizedDistance * 0.25;
    }
    return 0;
  };

  // Calculate bracket position based on phase
  const getBracketOffset = () => {
    if (animationPhase === 'closing' || animationPhase === 'closed') {
      return textWidth / 2;
    }
    return 0;
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
            >
              {/* Corchete IZQUIERDO - Esquina superior izquierda ┌ */}
              <motion.div
                className="absolute"
                style={{ top: '-2px', left: '-6px' }}
                animate={{ 
                  x: getBracketOffset()
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <svg width="12" height="24" viewBox="0 0 12 24" fill="none">
                  <path d="M1 1 L11 1 M1 1 L1 23" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="square"/>
                </svg>
              </motion.div>

              {/* Corchete DERECHO - Esquina inferior derecha ┘ */}
              <motion.div
                className="absolute"
                style={{ bottom: '-2px', right: '-6px' }}
                animate={{ 
                  x: -getBracketOffset()
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <svg width="12" height="24" viewBox="0 0 12 24" fill="none">
                  <path d="M11 23 L1 23 M11 23 L11 1" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="square"/>
                </svg>
              </motion.div>

              {/* Texto con animación letra por letra */}
              <div ref={textRef} className="flex items-center justify-center px-3 py-1">
                <span className="text-sm font-bold tracking-wider uppercase whitespace-nowrap flex">
                  {currentText.text.split('').map((letter, index) => (
                    <motion.span
                      key={`${currentTextIndex}-${index}`}
                      initial={{ opacity: animationPhase === 'opening' ? 0 : 1 }}
                      animate={{ opacity: getLetterOpacity(index, currentText.text.length) }}
                      transition={{ 
                        duration: 0.1,
                        delay: getLetterDelay(index, currentText.text.length)
                      }}
                      className={currentText.color}
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
