import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-classroom.png";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const defaultText = "IA PARA INSTITUCIONES EDUCATIVAS";
  const altText = "REPORTES, NOTAS AL INSTANTE, ¡Y MUCHO MÁS!";

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
            {/* Badge con efecto de brocha */}
            <div 
              className="relative inline-flex items-center justify-center cursor-pointer px-4"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Contenedor del texto */}
              <div className="relative px-3 py-2 max-w-[calc(100vw-40px)]">
                {/* Texto por defecto */}
                <motion.span 
                  className="text-[clamp(0.6rem,2.5vw,0.875rem)] font-bold tracking-wider uppercase text-secondary block"
                  animate={{ opacity: isHovered ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {defaultText}
                </motion.span>

                {/* Trazo de brocha negro + texto alternativo blanco */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center overflow-hidden"
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  animate={{ 
                    clipPath: isHovered ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)"
                  }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                >
                  {/* Fondo de brocha */}
                  <div className="absolute inset-0 bg-secondary rounded-sm" 
                    style={{
                      maskImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,20 Q10,5 30,18 T60,22 T90,15 T120,25 T150,18 T180,22 T200,20 L200,40 L0,40 Z' fill='black'/%3E%3C/svg%3E\")",
                      WebkitMaskImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,20 Q10,5 30,18 T60,22 T90,15 T120,25 T150,18 T180,22 T200,20 L200,40 L0,40 Z' fill='black'/%3E%3C/svg%3E\")",
                      maskSize: "100% 100%",
                      WebkitMaskSize: "100% 100%",
                    }}
                  />
                  {/* Texto alternativo */}
                  <span className="relative z-10 text-[clamp(0.6rem,2.5vw,0.875rem)] font-bold tracking-wider uppercase text-primary-foreground whitespace-nowrap px-3">
                    {altText}
                  </span>
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
