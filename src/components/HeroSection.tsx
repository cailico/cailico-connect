import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-classroom.png";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showAltText, setShowAltText] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Cambiar el texto cuando los corchetes están cerrados (400ms)
    setTimeout(() => {
      setShowAltText(true);
    }, 400);
  };

  const handleMouseLeave = () => {
    // Primero cerrar los corchetes
    setIsHovered(false);
    // Cambiar el texto cuando los corchetes están cerrados
    setTimeout(() => {
      setShowAltText(false);
    }, 400);
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
            {/* Badge con corchetes animados - efecto puertas corredizas */}
            <div 
              className="relative inline-flex items-center justify-center h-12 cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Corchete izquierdo - L invertida (línea arriba) */}
              <motion.div
                className="absolute left-0 top-0 h-full z-20 bg-black/50"
                style={{ width: 'calc(50% - 180px)' }}
                animate={{ 
                  x: isHovered ? 'calc(100% + 180px)' : 0
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <div className="absolute right-0 top-0 bottom-0 w-6">
                  {/* Línea vertical */}
                  <span className="absolute right-0 top-0 bottom-0 w-[2px] bg-secondary" />
                  {/* Línea horizontal arriba */}
                  <span className="absolute right-0 top-0 w-6 h-[2px] bg-secondary" />
                </div>
              </motion.div>

              {/* Corchete derecho - L (línea abajo) */}
              <motion.div
                className="absolute right-0 top-0 h-full z-20 bg-black/50"
                style={{ width: 'calc(50% - 180px)' }}
                animate={{ 
                  x: isHovered ? 'calc(-100% - 180px)' : 0
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-6">
                  {/* Línea vertical */}
                  <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-secondary" />
                  {/* Línea horizontal abajo */}
                  <span className="absolute left-0 bottom-0 w-6 h-[2px] bg-secondary" />
                </div>
              </motion.div>

              {/* Contenedor de texto con padding para los corchetes */}
              <div className="px-8 flex items-center justify-center min-w-[360px]">
                <span 
                  className={`text-sm font-bold tracking-wider uppercase whitespace-nowrap transition-colors duration-0 ${
                    showAltText ? 'text-white' : 'text-secondary'
                  }`}
                >
                  {showAltText 
                    ? "Reportes, notas al instante, ¡y mucho más!" 
                    : "IA para Instituciones Educativas"
                  }
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

      {/* Bottom Gradient - moved lower */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </section>
  );
};

export default HeroSection;
