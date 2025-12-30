import { motion } from "framer-motion";
import { MessageCircle, Users, Bell, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const floatingIcons = [
    { Icon: MessageCircle, delay: 0, x: "10%", y: "20%" },
    { Icon: Users, delay: 0.2, x: "80%", y: "15%" },
    { Icon: Bell, delay: 0.4, x: "15%", y: "70%" },
    { Icon: GraduationCap, delay: 0.6, x: "85%", y: "65%" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 geometric-pattern opacity-50" />

      {/* Animated Connection Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" aria-hidden="true">
        <motion.line
          x1="20%" y1="30%" x2="80%" y2="70%"
          stroke="hsl(var(--secondary))"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.line
          x1="70%" y1="20%" x2="30%" y2="80%"
          stroke="hsl(var(--accent))"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
        />
      </svg>

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute hidden md:flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.5 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: delay }}
          >
            <Icon className="w-6 h-6 text-primary-foreground" />
          </motion.div>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              IA para Instituciones Educativas
            </span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Transformamos la Comunicación Educativa con{" "}
            <span className="text-gradient">Inteligencia Artificial</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Agentes inteligentes que conectan colegios, universidades, profesores,
            estudiantes y padres de familia a través de WhatsApp
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
