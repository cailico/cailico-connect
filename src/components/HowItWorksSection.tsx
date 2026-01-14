import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { 
  MessageCircle, 
  Building2, 
  ShoppingCart, 
  ClipboardList, 
  Wrench, 
  Rocket, 
  GraduationCap, 
  Headphones, 
  RefreshCw 
} from "lucide-react";

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [visibleCount, setVisibleCount] = useState(1);
  const sectionRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      icon: MessageCircle,
      number: "01",
      title: "Contáctanos",
      description:
        "Escríbenos por WhatsApp, correo o déjanos tus datos en el formulario. Te respondemos rápido y te orientamos desde el primer mensaje.",
    },
    {
      icon: Building2,
      number: "02",
      title: "Cuéntanos quién eres y a qué institución educativa perteneces",
      description:
        "Queremos conocerte a ti y a tu institución. Tendremos el tiempo necesario para entender sus necesidades reales, identificar los principales dolores y definir contigo la mejor forma de adaptar AIECS a tu contexto.",
    },
    {
      icon: ShoppingCart,
      number: "03",
      title: "Adquisición del servicio",
      description:
        "Cuando hayas resuelto todas tus dudas, formalizamos la adquisición del servicio y damos inicio al proceso. A partir de ese momento, cuando necesitemos información específica, te la iremos solicitando para avanzar con total claridad.",
    },
    {
      icon: ClipboardList,
      number: "04",
      title: "Recopilación de información institucional",
      description:
        "Recolectamos lo necesario para adaptar AIECS a tu institución: estructura académica (grados, grupos, áreas), responsables, flujos de comunicación, formatos y necesidades particulares. Todo con orden, sin traumatismos.",
    },
    {
      icon: Wrench,
      number: "05",
      title: "Desarrollo y configuración a la medida",
      description:
        "Construimos tu infraestructura AIECS con tu identidad y tus reglas de operación. Dejamos listo el Agente de WhatsApp 24/7 y la Plataforma Institucional, alineados a tus procesos reales. (Tiempo estimado: 2 a 3 semanas, según el alcance y la disponibilidad de la información.)",
    },
    {
      icon: Rocket,
      number: "06",
      title: "Despliegue y activación",
      description:
        "Ponemos la infraestructura en marcha y verificamos que todo esté funcionando correctamente: notificaciones, comunicados, reportes, accesos y flujos.",
    },
    {
      icon: GraduationCap,
      number: "07",
      title: "Pedagogía y capacitación por roles",
      description:
        "Entregamos guías prácticas y capacitamos por perfiles: directivos, docentes, administrativos, estudiantes y padres de familia. Si tu institución está en Colombia y lo deseas, un asociado puede desplazarse y capacitar presencialmente, dejando a cada grupo listo para usar AIECS con confianza.",
    },
    {
      icon: Headphones,
      number: "08",
      title: "Acompañamiento y soporte continuo",
      description:
        "No te dejamos solo. Te acompañamos en el día a día para resolver dudas, ajustar detalles y garantizar que todo se mantenga estable y funcionando como debe ser.",
    },
    {
      icon: RefreshCw,
      number: "09",
      title: "Mejora continua y actualización permanente",
      description:
        "AIECS evoluciona con la IA. Mejoramos funciones, optimizamos flujos y actualizamos la infraestructura para que tu institución siempre tenga lo más útil y vigente, sin quedarse atrás.",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const viewportMiddle = viewportHeight / 2;

      // Get all step elements and check which ones have passed the middle of the viewport
      const stepElements = sectionRef.current.querySelectorAll('[data-step]');
      let count = 1; // Always show at least the first one

      stepElements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const elementTop = rect.top;
        
        // If the top of the element is above the middle of the viewport, it should be visible
        if (elementTop < viewportMiddle) {
          count = index + 1;
        }
      });

      setVisibleCount(Math.max(1, Math.min(steps.length, count)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [steps.length]);

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4" ref={sectionRef}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-medium text-3xl md:text-5xl text-foreground mb-4 uppercase tracking-tight">
            <span className="text-foreground">PROC</span><span className="text-secondary">ESO</span>
          </h2>
          <p className="text-xl md:text-2xl text-white font-medium max-w-2xl mx-auto">
            Un proceso simple para resultados extraordinarios
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.number}
              data-step={index}
              className="relative"
            >
              <AnimatePresence mode="sync">
                {index < visibleCount && (
                  <motion.div
                    className="relative flex gap-4 md:gap-6 pb-6 last:pb-0"
                    initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                    animate={{ opacity: 1, height: "auto", marginBottom: 0 }}
                    exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
              >
                {/* Timeline line */}
                {index !== visibleCount - 1 && (
                  <div className="absolute left-5 md:left-6 top-12 md:top-14 bottom-0 w-0.5 bg-secondary/30" />
                )}

                {/* Icon */}
                <motion.div
                  className="relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 shadow-lg"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <step.icon className="w-4 h-4 md:w-5 md:h-5 text-secondary-foreground" />
                </motion.div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-xs font-bold text-secondary">
                      {step.number}
                    </span>
                    <h3 className="text-base md:text-xl font-semibold text-white leading-tight">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-foreground/80 leading-relaxed pl-0 md:pl-9">
                    {step.description}
                  </p>
                </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
