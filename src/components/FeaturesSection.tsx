import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import productoBg from "@/assets/producto-bg.png";

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="relative bg-background" ref={ref}>
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <img 
          src={productoBg} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>
      
      <div className="container mx-auto px-4 pt-16 md:pt-20 pb-4 md:pb-6 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-medium text-3xl md:text-5xl uppercase tracking-tight mb-2">
            <span className="text-secondary">PROD</span><span className="text-white">UCTO</span>
          </h2>
          <h3 className="font-display font-medium text-xl md:text-3xl uppercase tracking-tight mt-6 mb-2">
            <span className="text-white/90">Infraestructura AIECS</span>
          </h3>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;