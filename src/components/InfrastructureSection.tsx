import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import featureProgramacion from "@/assets/feature-programacion.png";
import featureComunicados from "@/assets/feature-comunicados.png";
import featureReporte from "@/assets/feature-reporte.png";
import featureNotas from "@/assets/feature-notas.png";
import featureEvaluaciones from "@/assets/feature-evaluaciones.png";
import featureEstadisticas from "@/assets/feature-estadisticas.png";

const InfrastructureSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const features = [
    {
      id: 1,
      title: "Programación de actividades académicas",
      description: "Los profesores podrán programar evaluaciones, exposiciones, actividades lúdicas, o cualquier tipo de actividad que les interese, por curso y desde el agente o la plataforma. El agente se encargará de comunicarlas de forma individual a padres de familia y estudiantes.",
      image: featureProgramacion,
    },
    {
      id: 2,
      title: "Envío de comunicados personalizados",
      description: "Directivos y profesores podrán enviar comunicados de forma individual o grupal. El agente reconoce a quien o quienes está dirigido y se encargará de enviarlos a las personas correspondientes. Permite que tu comunidad educativa esté enterada en tiempo real.",
      image: featureComunicados,
    },
    {
      id: 3,
      title: "Reporte diario de actividades",
      description: 'Padres de familia y estudiantes recibirán un reporte diario con las actividades académicas para el día siguiente. Adiós a los "no me acordaba que había tarea" y "eso no era para hoy".',
      image: featureReporte,
    },
    {
      id: 4,
      title: "Notificación de notas por estudiante o grupo",
      description: "Comunique en tiempo real las notas a estudiantes y padres de familia. El Agente IA se encargará de comunicar las notas a las personas correspondientes. Ahora los padres de familia podrán saber en tiempo real cómo van sus estudiantes.",
      image: featureNotas,
    },
    {
      id: 5,
      title: "Generador de evaluaciones, talleres y quices",
      description: "Los docentes podrán crear instrumentos de evaluación de forma ágil y estandarizada, listos para ajustar y aplicar, con guía de preguntas correctas y posibilidad de edición.",
      image: featureEvaluaciones,
    },
    {
      id: 6,
      title: "Plataforma de estadísticas académicas",
      description: "Especial para directivos. Visualice la situación académica de la institución en tiempo real con gráficos y tablas intuitivas, desde indicadores generales hasta el detalle por grado, salón, materia o estudiante.",
      image: featureEstadisticas,
    },
  ];

  const stopAutoPlay = useCallback(() => {
    setIsAutoPlaying(false);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  }, []);

  const goToSlide = useCallback((index: number) => {
    stopAutoPlay();
    setActiveIndex(index);
  }, [stopAutoPlay]);

  const goToPrev = useCallback(() => {
    stopAutoPlay();
    setActiveIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  }, [stopAutoPlay, features.length]);

  const goToNext = useCallback(() => {
    stopAutoPlay();
    setActiveIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  }, [stopAutoPlay, features.length]);

  useEffect(() => {
    if (isAutoPlaying && isInView) {
      autoPlayRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1));
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, isInView, features.length]);

  const currentFeature = features[activeIndex];

  return (
    <section id="infrastructure" className="py-16 md:py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-medium text-3xl md:text-5xl text-foreground mb-4 uppercase tracking-tight">
            <span className="text-secondary">INFRAESTRUCTURA</span> <span className="text-white">AIECS</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Lleve la comunicación entre los miembros de su comunidad educativa al siguiente nivel con nuestro Sistema de Comunicación Educativa por Inteligencia Artificial, el cual integra un agente de WhatsApp disponible 24/7, el cual reconoce y recuerda a la persona, y una plataforma institucional que trabajan en conjunto.
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrev}
              className="hidden md:flex shrink-0 h-10 w-10 rounded-full border border-border hover:border-secondary/50 hover:bg-secondary/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex-1 overflow-x-auto scrollbar-hide">
              <div className="flex gap-2 md:gap-3 pb-2 min-w-max md:justify-center">
                {features.map((feature, index) => (
                  <button
                    key={feature.id}
                    onClick={() => goToSlide(index)}
                    className={`px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 border ${
                      activeIndex === index
                        ? "bg-secondary/20 border-secondary text-secondary"
                        : "bg-card border-border text-muted-foreground hover:border-secondary/30 hover:text-foreground"
                    }`}
                  >
                    {feature.title.length > 25 
                      ? feature.title.substring(0, 22) + "..." 
                      : feature.title}
                  </button>
                ))}
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="hidden md:flex shrink-0 h-10 w-10 rounded-full border border-border hover:border-secondary/50 hover:bg-secondary/10"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>

        {/* Content Card */}
        <motion.div
          className="relative bg-card rounded-2xl border border-border overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Text Content */}
            <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-center order-2 md:order-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeature.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-wider text-secondary bg-secondary/10 rounded-full">
                    {activeIndex + 1} de {features.length}
                  </span>
                  <h3 className="font-display font-medium text-2xl md:text-3xl text-foreground mb-4 uppercase tracking-tight">
                    {currentFeature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                    {currentFeature.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Mobile Navigation */}
              <div className="flex items-center justify-between mt-8 md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={goToPrev}
                  className="h-10 w-10 rounded-full border border-border"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                
                <div className="flex gap-2">
                  {features.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeIndex === index
                          ? "bg-secondary w-6"
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                    />
                  ))}
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={goToNext}
                  className="h-10 w-10 rounded-full border border-border"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-64 md:h-auto md:min-h-[400px] order-1 md:order-2 bg-gradient-to-br from-secondary/5 to-primary/5">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentFeature.id}
                  src={currentFeature.image}
                  alt={currentFeature.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Progress Bar */}
          {isAutoPlaying && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-border">
              <motion.div
                className="h-full bg-secondary"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
                key={activeIndex}
              />
            </div>
          )}
        </motion.div>

        {/* Desktop Dots */}
        <div className="hidden md:flex justify-center gap-2 mt-6">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "bg-secondary w-8"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
