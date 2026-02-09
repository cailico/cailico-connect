import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Bot } from "lucide-react";
import heroImage from "@/assets/hero-classroom.webp";

interface HeroSectionProps {
  loadingPhase?: 'image' | 'text' | 'ui' | 'complete';
  onOpenChat?: () => void;
  onChatButtonVisibilityChange?: (isVisible: boolean) => void;
}

const HeroSection = ({ loadingPhase = 'complete', onOpenChat, onChatButtonVisibilityChange }: HeroSectionProps) => {
  const chatButtonRef = useRef<HTMLButtonElement>(null);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [startTyping, setStartTyping] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const showImage = loadingPhase !== 'image';
  const showText = loadingPhase === 'text' || loadingPhase === 'ui' || loadingPhase === 'complete';
  const showButtons = loadingPhase === 'ui' || loadingPhase === 'complete';

  const texts = [
    { text: "IA PARA INSTITUCIONES EDUCATIVAS", cursorColor: "bg-secondary" },
    { text: "REPORTES, NOTAS AL INSTANTE ¡Y MUCHO MÁS!", cursorColor: "bg-white" }
  ];

  const currentTextData = texts[textIndex];
  const fullText = currentTextData.text;

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  // Intersection Observer para detectar visibilidad del botón de chat
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        onChatButtonVisibilityChange?.(entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: '0px'
      }
    );

    if (chatButtonRef.current) {
      observer.observe(chatButtonRef.current);
    }

    return () => {
      if (chatButtonRef.current) {
        observer.unobserve(chatButtonRef.current);
      }
    };
  }, [onChatButtonVisibilityChange]);

  // Start typing only after UI is loaded
  useEffect(() => {
    if (showButtons && !startTyping) {
      // Small delay after buttons appear
      const timer = setTimeout(() => {
        setStartTyping(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [showButtons, startTyping]);

  // Typewriter effect
  useEffect(() => {
    if (!startTyping) return;
    
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing
      if (displayedText.length < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        }, 50); // Velocidad de escritura
      } else {
        // Texto completo, esperar 7 segundos
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 7000);
      }
    } else {
      // Deleting (más rápido)
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 20); // Velocidad de borrado (más rápido)
      } else {
        // Texto borrado, cambiar al siguiente
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [startTyping, displayedText, isDeleting, fullText, texts.length]);

  // Renderizar texto con colores
  const renderText = () => {
    if (textIndex === 1) {
      // Segundo texto: "¡Y MUCHO MÁS!" en naranja
      const orangePart = "¡Y MUCHO MÁS!";
      const orangeStartIndex = fullText.indexOf(orangePart);
      
      return (
        <>
          {displayedText.split('').map((letter, index) => {
            const isOrange = index >= orangeStartIndex;
            return (
              <span
                key={index}
                className={isOrange ? "text-secondary" : "text-white"}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            );
          })}
        </>
      );
    }
    
    // Primer texto: todo en naranja
    return (
      <>
        {displayedText.split('').map((letter, index) => (
          <span key={index} className="text-secondary">
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </>
    );
  };

  // Determinar el color del cursor
  const getCursorColor = () => {
    if (textIndex === 1) {
      const orangePart = "¡Y MUCHO MÁS!";
      const orangeStartIndex = fullText.indexOf(orangePart);
      // Si estamos escribiendo/borrando en la parte naranja
      if (displayedText.length >= orangeStartIndex) {
        return "bg-secondary";
      }
      return "bg-white";
    }
    return "bg-secondary"; // Primer texto siempre naranja
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20"
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
          {/* Badge con efecto typewriter */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: showText ? 1 : 0, 
              scale: showText ? 1 : 0.9 
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-4"
          >
            <div className="relative inline-flex items-center justify-center">
              <div className="flex items-center justify-center px-3 py-2">
                <span className="text-[clamp(0.6rem,2.5vw,0.875rem)] font-bold tracking-wider uppercase flex flex-wrap justify-center min-h-[1.5em]">
                  {renderText()}
                  {/* Cursor rectangular */}
                  <span 
                    className={`inline-block w-[0.6em] h-[1.1em] ml-[2px] align-middle transition-opacity duration-100 ${getCursorColor()}`}
                    style={{ opacity: showCursor ? 1 : 0 }}
                  />
                </span>
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
            <span className="block bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent">COMUNICACIÓN DE TU</span>
            <span className="block text-secondary">ESCUELA CON IA</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: showText ? 1 : 0, 
              scale: showText ? 1 : 0.9 
            }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Diseñamos infraestructuras inteligentes para integrar la comunicación de directivos y profesores con estudiantes y padres de familia. ¡Lleva tu institución a la nueva era!
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
              <a href="https://wa.me/573016241863" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Nuestro WhatsApp
              </a>
            </Button>
            <Button 
              ref={chatButtonRef}
              size="lg" 
              className="bg-secondary hover:bg-orange-dark text-white font-semibold rounded-full px-8"
              onClick={onOpenChat}
            >
              <Bot className="w-5 h-5 mr-2" />
              Chatea con la IA
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
