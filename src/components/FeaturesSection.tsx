import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="relative bg-white" ref={ref}>
      {/* Gradient transition from navy to white */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[hsl(209,52%,22%)] to-white" />
      
      <div className="container mx-auto px-4 pt-40 md:pt-48 pb-4 md:pb-6 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-medium text-3xl md:text-5xl uppercase tracking-tight mb-1">
            <span className="text-secondary">PROD</span><span className="text-[hsl(209,52%,22%)]">UCTO</span>
          </h2>
          <h3 className="font-display font-medium text-xl md:text-3xl uppercase tracking-tight mt-6 mb-2">
            <span className="text-[hsl(209,52%,22%)]">Infraestructura AIECS</span>
          </h3>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;