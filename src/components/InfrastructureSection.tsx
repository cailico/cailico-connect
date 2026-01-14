import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import featureProgramacion from "@/assets/feature-programacion.png";
import featureComunicados from "@/assets/feature-comunicados.png";
import featureReporte from "@/assets/feature-reporte.png";
import featureNotas from "@/assets/feature-notas.png";
import featureEvaluaciones from "@/assets/feature-evaluaciones.png";
import featureEstadisticas from "@/assets/feature-estadisticas.png";

const InfrastructureSection = () => {
  const ref = useRef(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const [tabOffset, setTabOffset] = useState(0); // Offset for tab sliding
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef(0);
  const hasSwiped = useRef(false);
  
  // Tab gap for sliding calculation
  const tabGap = 8;

  const features = [
    {
      id: 1,
      tab: "Agenda",
      title: "Programación de actividades académicas",
      description: "Los profesores podrán programar evaluaciones, exposiciones, actividades lúdicas, o cualquier tipo de actividad que les interese, por curso y desde el agente o la plataforma. El agente se encargará de comunicarlas de forma individual a padres de familia y estudiantes.",
      image: featureProgramacion,
    },
    {
      id: 2,
      tab: "Comunicados",
      title: "Envío de comunicados personalizados",
      description: "Directivos y profesores podrán enviar comunicados de forma individual o grupal. El agente reconoce a quien o quienes está dirigido y se encargará de enviarlos a las personas correspondientes. Permite que tu comunidad educativa esté enterada en tiempo real.",
      image: featureComunicados,
    },
    {
      id: 3,
      tab: "Reporte diario",
      title: "Reporte diario de actividades",
      description: 'Padres de familia y estudiantes recibirán un reporte diario con las actividades académicas para el día siguiente. Adiós a los "no me acordaba que había tarea" y "eso no era para hoy".',
      image: featureReporte,
    },
    {
      id: 4,
      tab: "Notas",
      title: "Notificación de notas por estudiante o grupo",
      description: "Comunique en tiempo real las notas a estudiantes y padres de familia. El Agente IA se encargará de comunicar las notas a las personas correspondientes. Ahora los padres de familia podrán saber en tiempo real cómo van sus estudiantes.",
      image: featureNotas,
    },
    {
      id: 5,
      tab: "Evaluaciones",
      title: "Generador de evaluaciones, talleres y quices",
      description: "Los docentes podrán crear instrumentos de evaluación de forma ágil y estandarizada, listos para ajustar y aplicar, con guía de preguntas correctas y posibilidad de edición.",
      image: featureEvaluaciones,
    },
    {
      id: 6,
      tab: "Estadísticas",
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

  // Select a tab (changes the card)
  const selectTab = useCallback((index: number) => {
    stopAutoPlay();
    setActiveIndex(index);
  }, [stopAutoPlay]);

  // Navigate tabs (slides the visible tabs with animation)
  const scrollTabsPrev = useCallback(() => {
    setTabOffset((prev) => Math.max(0, prev - 1));
  }, []);

  const scrollTabsNext = useCallback(() => {
    setTabOffset((prev) => Math.min(features.length - 2, prev + 1));
  }, [features.length]);

  // Navigate cards
  const goToPrevCard = useCallback(() => {
    stopAutoPlay();
    setActiveIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  }, [stopAutoPlay, features.length]);

  const goToNextCard = useCallback(() => {
    stopAutoPlay();
    setActiveIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  }, [stopAutoPlay, features.length]);

  // Swipe handlers - immediate response
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    hasSwiped.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (hasSwiped.current) return;
    
    const diff = touchStartX.current - e.touches[0].clientX;
    
    if (Math.abs(diff) > 30) {
      hasSwiped.current = true;
      if (diff > 0) {
        goToNextCard();
      } else {
        goToPrevCard();
      }
    }
  };

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

  return (
    <section id="infrastructure" className="relative pb-16 md:pb-20 bg-transparent" ref={ref}>
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-8 md:mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            Lleve la comunicación entre los miembros de su comunidad educativa al siguiente nivel con nuestro Sistema de Comunicación Educativa por Inteligencia Artificial. Integramos un agente de WhatsApp disponible 24/7, el cual reconoce a cada persona y su rol dentro de la institución, y una plataforma institucional que trabajan en conjunto.
          </p>
        </motion.div>

        {/* Tabs Navigation with Arrows - Mobile shows sliding tabs */}
        <motion.div
          className="relative mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Mobile Tabs - Sliding carousel of tabs, 2 visible, calc width to fit */}
          <div className="flex md:hidden items-center justify-center gap-2 px-2">
            <button
              onClick={scrollTabsPrev}
              className="shrink-0 items-center justify-center text-white hover:text-secondary transition-colors flex disabled:opacity-30"
              aria-label="Anterior pestaña"
              disabled={tabOffset === 0}
            >
              <ChevronLeft className="h-6 w-6 stroke-[1.5]" />
            </button>

            {/* Sliding tabs container - uses calc to fit 2 tabs properly */}
            <div 
              className="overflow-hidden flex-1 max-w-[calc(100vw-120px)]"
            >
              <div 
                className="flex gap-2 transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(calc(-${tabOffset} * (50% + ${tabGap/2}px)))` }}
              >
                {features.map((feature, index) => (
                  <button
                    key={feature.id}
                    onClick={() => selectTab(index)}
                    className={`shrink-0 w-[calc(50%-4px)] py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                      activeIndex === index
                        ? "bg-secondary border-secondary text-white shadow-md"
                        : "bg-white border-gray-300 text-gray-600 hover:border-secondary/50 hover:text-secondary"
                    }`}
                  >
                    {feature.tab}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={scrollTabsNext}
              className="shrink-0 items-center justify-center text-white hover:text-secondary transition-colors flex disabled:opacity-30"
              aria-label="Siguiente pestaña"
              disabled={tabOffset >= features.length - 2}
            >
              <ChevronRight className="h-6 w-6 stroke-[1.5]" />
            </button>
          </div>

          {/* Desktop Tabs - Shows all tabs with uniform size */}
          <div className="hidden md:flex items-center justify-center gap-2.5">
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => selectTab(index)}
                className={`w-32 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeIndex === index
                    ? "bg-secondary border-secondary text-white shadow-md"
                    : "bg-white border-gray-300 text-gray-600 hover:border-secondary/50 hover:text-secondary"
                }`}
              >
                {feature.tab}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Carousel Container with Arrows Outside - Same for all screen sizes */}
        <motion.div
          className="relative max-w-5xl mx-auto flex items-center gap-2 md:gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Left Arrow - Always visible, outside card */}
          <button
            onClick={goToPrevCard}
            className="shrink-0 flex items-center justify-center text-white hover:text-secondary transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-8 w-8 stroke-[1.5]" />
          </button>

          {/* Cards Carousel */}
          <div 
            className="flex-1 overflow-hidden touch-pan-y" 
            ref={carouselRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="w-full shrink-0"
                >
                  <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden h-[520px] md:h-[450px] flex flex-col md:flex-row">
                    {/* Text Content - Top on mobile, Left on desktop */}
                    <div className="p-5 md:p-8 lg:p-10 border-b md:border-b-0 md:border-r border-gray-200 md:w-1/2 md:flex md:flex-col md:justify-center">
                      <h3 className="font-display font-bold text-lg md:text-2xl lg:text-3xl text-[hsl(209,52%,22%)] mb-3 leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        {feature.description}
                      </p>
                    </div>

                    {/* Image - Bottom on mobile, Right on desktop */}
                    <div className="relative flex-1 min-h-0 md:w-1/2">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow - Always visible, outside card */}
          <button
            onClick={goToNextCard}
            className="shrink-0 flex items-center justify-center text-white hover:text-secondary transition-colors"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-8 w-8 stroke-[1.5]" />
          </button>
        </motion.div>

        {/* Progress Bar for auto-play */}
        {isAutoPlaying && (
          <div className="max-w-5xl mx-auto mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-secondary"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 6, ease: "linear" }}
              key={activeIndex}
            />
          </div>
        )}

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-4">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => selectTab(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "bg-secondary w-6"
                  : "bg-gray-300 w-2 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
