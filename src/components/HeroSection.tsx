import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-classroom.png";

const HeroSection = () => {
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
            <span className="group relative inline-flex items-center px-8 py-3 text-secondary text-sm font-bold tracking-wider uppercase cursor-pointer">
              {/* Left L bracket - top */}
              <span className="absolute left-0 top-0 w-4 h-[2px] bg-secondary transition-all duration-300 group-hover:w-[calc(50%-20px)]" />
              <span className="absolute left-0 top-0 w-[2px] h-4 bg-secondary transition-all duration-300 group-hover:h-1/2" />
              
              {/* Left L bracket - bottom */}
              <span className="absolute left-0 bottom-0 w-4 h-[2px] bg-secondary transition-all duration-300 group-hover:w-[calc(50%-20px)]" />
              <span className="absolute left-0 bottom-0 w-[2px] h-4 bg-secondary transition-all duration-300 group-hover:h-1/2" />
              
              <span className="transition-opacity duration-300 group-hover:opacity-0 group-hover:delay-0 delay-150">
                IA para Instituciones Educativas
              </span>
              
              {/* Right L bracket - top */}
              <span className="absolute right-0 top-0 w-4 h-[2px] bg-secondary transition-all duration-300 group-hover:w-[calc(50%-20px)]" />
              <span className="absolute right-0 top-0 w-[2px] h-4 bg-secondary transition-all duration-300 group-hover:h-1/2" />
              
              {/* Right L bracket - bottom */}
              <span className="absolute right-0 bottom-0 w-4 h-[2px] bg-secondary transition-all duration-300 group-hover:w-[calc(50%-20px)]" />
              <span className="absolute right-0 bottom-0 w-[2px] h-4 bg-secondary transition-all duration-300 group-hover:h-1/2" />
            </span>
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
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
