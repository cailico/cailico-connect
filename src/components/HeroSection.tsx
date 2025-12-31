import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-classroom.png";

const HeroSection = () => {
  const [bracketsClosed, setBracketsClosed] = useState(false);
  const [showAltText, setShowAltText] = useState(false);
  const [lettersVisible, setLettersVisible] = useState(true);
  const [targetText, setTargetText] = useState<'default' | 'alt'>('default');
  const [isAnimating, setIsAnimating] = useState(false);
  const animationRef = useRef<NodeJS.Timeout | null>(null);
  const isHoveredRef = useRef(false);
  const textRef = useRef<HTMLSpanElement>(null);
  const [bracketOffset, setBracketOffset] = useState(0);

  const defaultText = "IA PARA INSTITUCIONES EDUCATIVAS";
  const altText = "REPORTES, NOTAS AL INSTANTE, ¡Y MUCHO MÁS!";
  
  const currentText = showAltText ? altText : defaultText;
  const textColor = showAltText ? "text-white" : "text-secondary";

  // Medir y actualizar el offset solo cuando NO estamos animando
  useEffect(() => {
    if (!isAnimating && textRef.current) {
      setBracketOffset(textRef.current.offsetWidth / 2 + 6);
    }
  }, [currentText, isAnimating]);

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
    
    if (showAltText === shouldShowAlt && !bracketsClosed && lettersVisible && !isAnimating) return;

    // Marcar que estamos animando para congelar el offset
    setIsAnimating(true);

    // Fase 1: Ocultar letras (afuera hacia adentro)
    setLettersVisible(false);

    // Fase 2: Cerrar corchetes después de que las letras empiecen a desaparecer
    animationRef.current = setTimeout(() => {
      setBracketsClosed(true);
      
      // Fase 3: Cambiar texto cuando los corchetes están cerrados
      animationRef.current = setTimeout(() => {
        const currentTarget = isHoveredRef.current ? 'alt' : 'default';
        setShowAltText(currentTarget === 'alt');
        
        // Fase 4: Abrir corchetes
        animationRef.current = setTimeout(() => {
          setBracketsClosed(false);
          
          // Fase 5: Mostrar letras (centro hacia afuera) después de que los corchetes empiecen a abrirse
          animationRef.current = setTimeout(() => {
            setLettersVisible(true);
            // Animación completa, permitir actualización del offset
            setIsAnimating(false);
          }, 100);
        }, 50);
      }, 250);
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
    
    // Cuando se ocultan: de afuera hacia adentro (los extremos primero)
    const hidingDelay = distanceFromEdge * 0.008;
    // Cuando aparecen: del centro hacia afuera (el centro primero)
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
            {/* Badge con corchetes animados */}
            <div 
              className="relative inline-flex items-center justify-center cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center justify-center">
                {/* Corchete IZQUIERDO ┌ */}
                <motion.div
                  className="flex-shrink-0"
                  animate={{ x: bracketsClosed ? bracketOffset : 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  style={{ zIndex: 10 }}
                >
                  <svg width="10" height="20" viewBox="0 0 10 20" fill="none">
                    <path d="M1 1 L9 1 M1 1 L1 19" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="square"/>
                  </svg>
                </motion.div>

                {/* Texto */}
                <div className="px-1.5 py-1">
                  <span 
                    ref={textRef}
                    className={`text-sm font-bold tracking-wider uppercase whitespace-nowrap flex ${textColor}`}
                  >
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

                {/* Corchete DERECHO ┘ */}
                <motion.div
                  className="flex-shrink-0"
                  animate={{ x: bracketsClosed ? -bracketOffset : 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  style={{ zIndex: 10 }}
                >
                  <svg width="10" height="20" viewBox="0 0 10 20" fill="none">
                    <path d="M9 19 L1 19 M9 19 L9 1" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="square"/>
                  </svg>
                </motion.div>
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
