import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, MessageSquare, GraduationCap } from "lucide-react";

const WhatIsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    {
      icon: Bot,
      title: "Agentes Inteligentes",
      description:
        "Automatización de comunicaciones institucionales con IA que entiende y responde de forma natural.",
      color: "secondary",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Nativo",
      description:
        "El canal que todos usan en Latinoamérica. Sin apps adicionales, sin curva de aprendizaje.",
      color: "accent",
    },
    {
      icon: GraduationCap,
      title: "Para Educación",
      description:
        "Diseñado específicamente para instituciones educativas, entendiendo sus necesidades únicas.",
      color: "primary",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-medium text-3xl md:text-5xl text-foreground mb-4 uppercase tracking-tight">
            ¿Qué Hace <span className="text-secondary">Cailico</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conectamos la tecnología con la educación de forma simple y efectiva
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-secondary/30"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  card.color === "secondary"
                    ? "bg-secondary/10 text-secondary"
                    : card.color === "accent"
                    ? "bg-accent/10 text-accent"
                    : "bg-primary/10 text-primary"
                }`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <card.icon className="w-7 h-7" />
              </motion.div>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                {card.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {card.description}
              </p>

              {/* Hover gradient effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
