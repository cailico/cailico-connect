import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-classroom.png";

const HeroSection = () => {
  const [bracketsClosed, setBracketsClosed] = useState(false);
  const [showAltText, setShowAltText] = useState(false);
  const [lettersVisible, setLettersVisible] = useState(true);
  const [targetText, setTargetText] = useState<'default' | 'alt'>('default');
  const [leftBracketX, setLeftBracketX] = useState(0);
  const [rightBracketX, setRightBracketX] = useState(0);
  const animationRef = useRef<NodeJS.Timeout | null>(null);
  const isHoveredRef = useRef(false);

  const defaultText = "IA PARA INSTITUCIONES EDUCATIVAS";
  const altText = "REPORTES, NOTAS AL INSTANTE, ¡Y MUCHO MÁS!";
  
  const currentText = showAltText ? altText : defaultText;
  const textColor = showAltText ? "text-white" : "text-secondary";

  // Limpiar timeouts
  useEffect(() => {
    return () => {
      if (animationRef.current) clearTimeout(animationRef.current);
    };
  }, []);

  // Ejecutar animación cuando cambia el objetivo
  useEffect(() => {
    if (animationRef.current) {
      clearTimeout(animationRef.current);
      animationRef.current = null;
    }

    const shouldShowAlt = targetText === 'alt';
    
    if (showAltText === shouldShowAlt && !bracketsClosed && lettersVisible) return;

    // Fase 1: Ocultar letras (afuera hacia adentro)
    setLettersVisible(false);

    // Fase 2: Cerrar corchetes - mover ambos hacia el centro (posición 0)
    animationRef.current = setTimeout(() => {
      setBracketsClosed(true);
      // CLAVE: Ambos corchetes se mueven hacia el centro (x=0 relativo a su posición natural)
      // El izquierdo NO puede ir más a la derecha que su posición natural
      // El derecho NO puede ir más a la izquierda que su posición natural
      setLeftBracketX(0);
      setRightBracketX(0);
      
      // Fase 3: Cuando los corchetes están cerrados, cambiar texto
      animationRef.current = setTimeout(() => {
        const currentTarget = isHoveredRef.current ? 'alt' : 'default';
        const newShowAlt = currentTarget === 'alt';
        
        // Cambiar el texto mientras los corchetes están cerrados
        setShowAltText(newShowAlt);
        
        // Fase 4: Abrir corchetes - volver a sus posiciones naturales (0)
        setBracketsClosed(false);
        
        // Fase 5: Mostrar letras
        animationRef.current = setTimeout(() => {
          setLettersVisible(true);
        }, 150);
      }, 300);
    }, 150);
  }, [targetText]);

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
    setTargetText('alt');
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    setTargetText('default');
  };

  // Animación de letras
  const getLetterStyle = (index: number, total: number) => {
    const distanceFromEdge = Math.min(index, total - 1 - index);
    const maxDistance = Math.floor(total / 2);
    
    const hidingDelay = distanceFromEdge * 0.008;
    const showingDelay = (maxDistance - distanceFromEdge) * 0.008;
    
    return {
      opacity: lettersVisible ? 1 : 0,
      transition: `opacity 0.12s ease ${lettersVisible ? showingDelay : hidingDelay}s`
    };
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
            {/* Badge con corchetes animados - responsive */}
            <div 
              className="relative inline-flex items-center justify-center cursor-pointer max-w-full overflow-hidden px-2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center justify-center">
                {/* Corchete IZQUIERDO ┌ - siempre en su posición natural */}
                <div
                  className="flex-shrink-0"
                  style={{ zIndex: 10 }}
                >
                  <svg width="10" height="20" viewBox="0 0 10 20" fill="none">
                    <path d="M1 1 L9 1 M1 1 L1 19" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="square"/>
                  </svg>
                </div>

                {/* Texto - con animación de ancho */}
                <motion.div 
                  className="overflow-hidden"
                  animate={{ 
                    width: bracketsClosed ? 0 : 'auto',
                    paddingLeft: bracketsClosed ? 0 : 6,
                    paddingRight: bracketsClosed ? 0 : 6
                  }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="py-1">
                    <span className={`text-xs sm:text-sm font-bold tracking-wider uppercase flex ${textColor}`}>
                      {currentText.split('').map((letter, index) => (
                        <span
                          key={`${showAltText}-${index}`}
                          style={getLetterStyle(index, currentText.length)}
                        >
                          {letter === ' ' ? '\u00A0' : letter}
                        </span>
                      ))}
                    </span>
                  </div>
                </motion.div>

                {/* Corchete DERECHO ┘ - siempre en su posición natural */}
                <div
                  className="flex-shrink-0"
                  style={{ zIndex: 10 }}
                >
                  <svg width="10" height="20" viewBox="0 0 10 20" fill="none">
                    <path d="M9 19 L1 19 M9 19 L9 1" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="square"/>
                  </svg>
                </div>
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
