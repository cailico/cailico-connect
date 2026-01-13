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
      }, 6000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, isInView, features.length]);

  const currentFeature = features[activeIndex];

  return (
    <section id="infrastructure" className="py-8 md:py-12 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-medium text-3xl md:text-5xl mb-6 uppercase tracking-tight">
            <span className="text-secondary">INFRAESTRUCTURA</span>{" "}
            <span className="text-white">AIECS</span>
          </h2>
          <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            Lleve la comunicación entre los miembros de su comunidad educativa al siguiente nivel con nuestro Sistema de Comunicación Educativa por Inteligencia Artificial, el cual integra un agente de WhatsApp disponible 24/7, el cual reconoce y recuerda a la persona, y una plataforma institucional que trabajan en conjunto.
          </p>
        </motion.div>

        {/* Tabs Navigation - estilo Truora */}
        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-2 md:gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrev}
              className="shrink-0 h-10 w-10 rounded-full border border-white/20 hover:border-secondary hover:bg-secondary/10 text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex gap-2 md:gap-3 overflow-hidden">
              {features.map((feature, index) => (
                <button
                  key={feature.id}
                  onClick={() => goToSlide(index)}
                  className={`px-4 md:px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 border hidden md:block ${
                    activeIndex === index
                      ? "bg-secondary border-secondary text-white"
                      : "bg-transparent border-white/30 text-white/70 hover:border-secondary/50 hover:text-white"
                  }`}
                >
                  {feature.title.length > 20 
                    ? feature.title.substring(0, 18) + "..." 
                    : feature.title}
                </button>
              ))}
              {/* Mobile: mostrar solo el activo */}
              <span className="md:hidden px-4 py-2.5 rounded-full text-sm font-medium bg-secondary border border-secondary text-white">
                {currentFeature.title.length > 25 
                  ? currentFeature.title.substring(0, 23) + "..." 
                  : currentFeature.title}
              </span>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="shrink-0 h-10 w-10 rounded-full border border-white/20 hover:border-secondary hover:bg-secondary/10 text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>

        {/* Content Card - estilo con difuminado */}
        <motion.div
          className="relative bg-white rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid md:grid-cols-2 min-h-[400px] md:min-h-[450px]">
            {/* Text Content */}
            <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center order-2 md:order-1 relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeature.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="font-display font-bold text-2xl md:text-3xl text-navy-900 mb-5 leading-tight">
                    {currentFeature.title}
                  </h3>
                  <p className="text-navy-700 leading-relaxed text-base md:text-lg">
                    {currentFeature.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Image with gradient fade */}
            <div className="relative h-64 md:h-auto order-1 md:order-2 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeature.id}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={currentFeature.image}
                    alt={currentFeature.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient overlay para difuminar la transición */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent md:block hidden" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent md:hidden" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Progress Bar */}
          {isAutoPlaying && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
              <motion.div
                className="h-full bg-secondary"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 6, ease: "linear" }}
                key={activeIndex}
              />
            </div>
          )}
        </motion.div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-6">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "bg-secondary w-8"
                  : "bg-white/30 w-2 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;