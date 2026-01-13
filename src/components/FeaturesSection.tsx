import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="pt-24 md:pt-32 pb-4 md:pb-6 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-medium text-3xl md:text-5xl text-foreground uppercase tracking-tight mb-2">
            <span className="text-secondary">PROD</span><span className="text-white">UCTO</span>
          </h2>
          <h3 className="font-display font-medium text-xl md:text-3xl uppercase tracking-tight">
            <span className="text-white/90">Infraestructura AIECS</span>
          </h3>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;