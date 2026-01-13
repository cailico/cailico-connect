import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import productoBg from "@/assets/producto-bg.png";
import InfrastructureSection from "./InfrastructureSection";

const ProductSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="relative" ref={ref}>
      {/* Background image with dark overlay - covers entire product section */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${productoBg})` }}
      >
        <div className="absolute inset-0 bg-black/85" />
      </div>
      
      {/* Title Section */}
      <div className="container mx-auto px-4 pt-16 md:pt-20 pb-6 md:pb-8 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-medium text-3xl md:text-5xl uppercase tracking-tight mb-2">
            <span className="text-secondary">PROD</span><span className="text-white">UCTO</span>
          </h2>
          <h3 className="font-display font-medium text-xl md:text-3xl uppercase tracking-tight mt-6">
            <span className="text-white/90">Infraestructura AIECS</span>
          </h3>
        </motion.div>
      </div>

      {/* Infrastructure Widget */}
      <InfrastructureSection />
    </section>
  );
};

export default ProductSection;
