import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link2, Settings, Zap, TrendingUp } from "lucide-react";

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: Link2,
      number: "01",
      title: "Conectamos",
      description:
        "Integramos Cailico con tu sistema educativo existente de forma rápida y segura.",
    },
    {
      icon: Settings,
      number: "02",
      title: "Configuramos",
      description:
        "Personalizamos los agentes según las necesidades específicas de tu institución.",
    },
    {
      icon: Zap,
      number: "03",
      title: "Automatizamos",
      description:
        "Los agentes inteligentes gestionan la comunicación 24/7 sin intervención manual.",
    },
    {
      icon: TrendingUp,
      number: "04",
      title: "Mejoramos",
      description:
        "Análisis continuo y optimización basada en datos para mejores resultados.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-medium text-3xl md:text-5xl text-foreground mb-4 uppercase tracking-tight">
            Cómo <span className="text-secondary">Funciona</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un proceso simple para resultados extraordinarios
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative flex gap-6 pb-12 last:pb-0"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Timeline line */}
              {index !== steps.length - 1 && (
                <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-border" />
              )}

              {/* Icon */}
              <motion.div
                className="relative z-10 w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0"
                whileHover={{ scale: 1.1 }}
              >
                <step.icon className="w-5 h-5 text-secondary-foreground" />
              </motion.div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-secondary">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
