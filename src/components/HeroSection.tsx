import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Bot } from "lucide-react";
import heroImage from "@/assets/hero-classroom.png";

interface HeroSectionProps {
  loadingPhase?: 'image' | 'text' | 'ui' | 'complete';
}

const HeroSection = ({ loadingPhase = 'complete' }: HeroSectionProps) => {
  const [bracketsClosed, setBracketsClosed] = useState(false);
  const [showAltText, setShowAltText] = useState(false);
  const [lettersVisible, setLettersVisible] = useState(true);
  const [targetText, setTargetText] = useState<'default' | 'alt'>('default');
  const animationRef = useRef<NodeJS.Timeout | null>(null);
  const isHoveredRef = useRef(false);
  const closingOffsetRef = useRef(0);

  const showImage = loadingPhase !== 'image';
  const showText = loadingPhase === 'text' || loadingPhase === 'ui' || loadingPhase === 'complete';
  const showButtons = loadingPhase === 'ui' || loadingPhase === 'complete';
  
  // Pre-calcular anchos para ambos textos (medidos manualmente)
  const defaultTextWidth = 285; // "IA PARA INSTITUCIONES EDUCATIVAS"
  const altTextWidth = 380; // "REPORTES, NOTAS AL INSTANTE, ¡Y MUCHO MÁS!"
  
  const defaultOffset = defaultTextWidth / 2 + 6;
  const altOffset = altTextWidth / 2 + 6;
  
  // Constante de seguridad: distancia máxima que los corchetes pueden moverse hacia el centro
  // (nunca deben cruzarse, así que el máximo es llegar justo al centro - 5px de margen)
  const maxSafeOffset = Math.min(defaultOffset, altOffset) - 5;

  const defaultText = "IA PARA INSTITUCIONES EDUCATIVAS";
  const altText = "REPORTES, NOTAS AL INSTANTE, ¡Y MUCHO MÁS!";
  
  const currentText = showAltText ? altText : defaultText;
  const textColor = showAltText ? "text-white" : "text-secondary";

  // Inicializar el ref
  useEffect(() => {
    closingOffsetRef.current = defaultOffset;
  }, []);

  // Limpiar timeouts
  useEffect(() => {
    return () => {
      if (animationRef.current) clearTimeout(animationRef.current);
    };
  }, []);

  // Calcular el offset actual basado en el texto mostrado (solo cuando está abierto)
  const currentOffset = showAltText ? altOffset : defaultOffset;
  
  // El offset animado: cuando está cerrado usa el ref congelado, cuando está abierto usa el actual
  // IMPORTANTE: Limitamos con maxSafeOffset para que los corchetes NUNCA puedan cruzarse
  const rawOffset = bracketsClosed ? closingOffsetRef.current : currentOffset;
  const animatedOffset = Math.min(rawOffset, maxSafeOffset);

  // Ejecutar animación cuando cambia el objetivo
  useEffect(() => {
    if (animationRef.current) {
      clearTimeout(animationRef.current);
      animationRef.current = null;
    }

    const shouldShowAlt = targetText === 'alt';
    
    if (showAltText === shouldShowAlt && !bracketsClosed && lettersVisible) return;

    // Congelar el offset actual para la animación de cierre
    closingOffsetRef.current = showAltText ? altOffset : defaultOffset;

    // Fase 1: Ocultar letras (afuera hacia adentro)
    setLettersVisible(false);

    // Fase 2: Cerrar corchetes después de que las letras empiecen a desaparecer
    animationRef.current = setTimeout(() => {
      setBracketsClosed(true);
      
      // Fase 3: Cuando los corchetes están completamente cerrados, cambiar texto
      animationRef.current = setTimeout(() => {
        const currentTarget = isHoveredRef.current ? 'alt' : 'default';
        const newShowAlt = currentTarget === 'alt';
        
        // Cambiar el texto mientras los corchetes están cerrados
        setShowAltText(newShowAlt);
        
        // Fase 4: Abrir corchetes (el nuevo offset se usará automáticamente cuando bracketsClosed sea false)
        setBracketsClosed(false);
        
        // Fase 5: Mostrar letras (centro hacia afuera) después de que los corchetes empiecen a abrirse
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
      {/* Background Image with Overlay - sin fade */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge con corchetes animados - posicionado más arriba */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: showText ? 1 : 0, 
              scale: showText ? 1 : 0.9 
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-4"
          >
            <div 
              className="relative inline-flex items-center justify-center cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center justify-center">
                {/* Corchete IZQUIERDO ┌ */}
                <motion.div
                  className="flex-shrink-0"
                  animate={{ x: bracketsClosed ? animatedOffset : 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  style={{ zIndex: 10 }}
                >
                  <svg width="10" height="20" viewBox="0 0 10 20" fill="none">
                    <path d="M1 1 L9 1 M1 1 L1 19" stroke="hsl(var(--secondary))" strokeWidth="2" strokeLinecap="square"/>
                  </svg>
                </motion.div>

                {/* Texto */}
                <div className="px-1.5 py-1 max-w-[calc(100vw-80px)]">
                  <span className={`text-[clamp(0.6rem,2.5vw,0.875rem)] font-bold tracking-wider uppercase flex flex-wrap justify-center ${textColor}`}>
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
                  animate={{ x: bracketsClosed ? -animatedOffset : 0 }}
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

          {/* Título principal con fuente display estirada */}
          <motion.h1
            className="font-display font-medium text-[clamp(2.5rem,10vw,6rem)] leading-[1.15] mb-4 tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: showText ? 1 : 0, 
              scale: showText ? 1 : 0.9 
            }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <span className="block text-white">TRANSFORMA LA</span>
            <span className="block bg-gradient-to-r from-white via-white/80 to-white/60 bg-clip-text text-transparent">COMUNICACIÓN DE TU</span>
            <span className="block text-secondary">ESCUELA CON IA</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: showText ? 1 : 0, 
              scale: showText ? 1 : 0.9 
            }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Diseñamos infraestructuras inteligentes para integrar la comunicación entre directivos, profesores, estudiantes y padres de familia. ¡Lleva tu institución a la nueva era!
          </motion.p>

          {/* Botones - aparecen después del navbar */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: showButtons ? 1 : 0, 
              y: showButtons ? 0 : 30 
            }}
            transition={{ duration: 0.4, delay: 0.25, ease: [0.4, 0, 0.2, 1] }}
          >
            <Button 
              size="lg" 
              className="bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold rounded-full px-8"
              asChild
            >
              <a href="#contact" className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Contáctanos
              </a>
            </Button>
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-orange-dark text-white font-semibold rounded-full px-8"
              asChild
            >
              <a href="#contact" className="flex items-center gap-2">
                <Bot className="w-5 h-5" />
                Chatea con la IA
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient - minimal height to not cover content */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background via-background/40 to-transparent" />
    </section>
  );
};

export default HeroSection;
