import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Heart, CheckCircle } from "lucide-react";

const BenefitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const institutionBenefits = [
    "Reducción del 80% en carga administrativa",
    "Comunicación efectiva y centralizada",
    "Reportes y métricas en tiempo real",
    "Ahorro significativo de tiempo y recursos",
  ];

  const communityBenefits = [
    "Información oportuna en WhatsApp",
    "Canal familiar sin apps adicionales",
    "Mejor seguimiento académico",
    "Comunicación directa y personal",
  ];

  return (
    <section className="py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Beneficios para <span className="text-secondary">Todos</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Institution Benefits */}
          <motion.div
            className="bg-card rounded-2xl p-8 border border-border"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Para la Institución
              </h3>
            </div>

            <ul className="space-y-4">
              {institutionBenefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Community Benefits */}
          <motion.div
            className="bg-card rounded-2xl p-8 border border-border"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Heart className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Para la Comunidad
              </h3>
            </div>

            <ul className="space-y-4">
              {communityBenefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
