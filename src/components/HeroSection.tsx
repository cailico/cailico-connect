import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-classroom.png";

const HeroSection = () => {
  const [bracketsClosed, setBracketsClosed] = useState(false);
  const [showAltText, setShowAltText] = useState(false);
  const [targetText, setTargetText] = useState<'default' | 'alt'>('default');
  const animationRef = useRef<NodeJS.Timeout | null>(null);
  const isHoveredRef = useRef(false);

  const defaultText = "IA PARA INSTITUCIONES EDUCATIVAS";
  const altText = "REPORTES, NOTAS AL INSTANTE, ¡Y MUCHO MÁS!";
  
  // Ancho fijo para evitar saltos (basado en el texto más largo)
  const containerWidth = 380;
  
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
    // Limpiar timeout anterior
    if (animationRef.current) {
      clearTimeout(animationRef.current);
      animationRef.current = null;
    }

    const shouldShowAlt = targetText === 'alt';
    
    // Si ya estamos en el estado correcto, no hacer nada
    if (showAltText === shouldShowAlt && !bracketsClosed) return;

    // Cerrar corchetes
    setBracketsClosed(true);

    // Después de cerrar, cambiar texto y abrir
    animationRef.current = setTimeout(() => {
      // Verificar si todavía queremos este estado
      const currentTarget = isHoveredRef.current ? 'alt' : 'default';
      setShowAltText(currentTarget === 'alt');
      setBracketsClosed(false);
    }, 350);
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
    const center = (total - 1) / 2;
    const distanceFromEdge = Math.min(index, total - 1 - index);
    const maxDistance = Math.floor(total / 2);
    
    const closingDelay = distanceFromEdge * 0.006;
    const openingDelay = (maxDistance - distanceFromEdge) * 0.006;
    
    return {
      opacity: bracketsClosed ? 0 : 1,
      transition: `opacity 0.1s ease ${bracketsClosed ? closingDelay : openingDelay}s`
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
              <div className="flex items-center">
                {/* Corchete IZQUIERDO ┌ */}
                <motion.div
                  className="flex-shrink-0"
                  animate={{ x: bracketsClosed ? containerWidth / 2 : 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  style={{ zIndex: 10 }}
                >
                  <svg width="10" height="20" viewBox="0 0 10 20" fill="none">
                    <path d="M1 1 L9 1 M1 1 L1 19" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="square"/>
                  </svg>
                </motion.div>

                {/* Texto con ancho fijo */}
                <div 
                  className="px-1.5 py-1 flex justify-center"
                  style={{ width: containerWidth }}
                >
                  <span className={`text-sm font-bold tracking-wider uppercase whitespace-nowrap flex ${textColor}`}>
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
                  animate={{ x: bracketsClosed ? -containerWidth / 2 : 0 }}
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
