import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye } from "lucide-react";

interface NeonCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  color: "orange" | "green";
  delay: number;
}

const NeonCard = ({ icon: Icon, title, description, color, delay }: NeonCardProps) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { amount: 0.5 });

  // Always use scroll-based activation (both mobile and desktop)
  const isLit = isInView;

  const glowColors = {
    orange: {
      border: isLit ? "border-secondary" : "border-secondary/50",
      shadow: isLit ? "0 0 20px hsl(32, 95%, 44%), 0 0 40px hsl(32, 95%, 44%, 0.4)" : "none",
      iconBg: "bg-secondary/20",
      iconText: "text-secondary",
      titleText: isLit ? "text-secondary drop-shadow-[0_0_12px_hsl(32,95%,44%)]" : "text-secondary",
      descText: "text-primary",
    },
    green: {
      border: isLit ? "border-[hsl(150,80%,50%)]" : "border-[hsl(150,80%,50%)]/50",
      shadow: isLit ? "0 0 20px hsl(150, 80%, 50%), 0 0 40px hsl(150, 80%, 50%, 0.4)" : "none",
      iconBg: "bg-[hsl(150,80%,50%)]/20",
      iconText: "text-[hsl(150,80%,50%)]",
      titleText: isLit ? "text-[hsl(150,80%,50%)] drop-shadow-[0_0_12px_hsl(150,80%,50%)]" : "text-[hsl(150,80%,50%)]",
      descText: "text-primary",
    },
  };

  const colors = glowColors[color];

  return (
    <motion.div
      ref={cardRef}
      className={`relative bg-white rounded-2xl p-8 border-2 transition-all duration-500 ${colors.border}`}
      style={{ boxShadow: colors.shadow }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Header: Icon + Title in same row */}
      <div className="flex items-center gap-4 mb-6">
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${colors.iconBg}`}>
          <Icon className={`w-7 h-7 ${colors.iconText}`} />
        </div>
        <h3 className={`font-display font-medium text-2xl md:text-3xl uppercase tracking-tight transition-all duration-500 ${colors.titleText}`}>
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className={`leading-relaxed text-base ${colors.descText}`}>
        {description}
      </p>
    </motion.div>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    {
      icon: Target,
      title: "Misión",
      description:
        "Preparar a la sociedad ante los avances de la inteligencia artificial, impulsando su integración en la vida cotidiana de las personas. En Cailico desarrollamos sistemas que acercan la IA a todos, incluyendo a quienes normalmente no la usarían, reduciendo la distancia entre tecnología y ciudadanía para que su adopción sea natural, masiva y sostenible, de esa manera aportando también a su financiación y desarrollo.",
      color: "orange" as const,
    },
    {
      icon: Eye,
      title: "Visión",
      description:
        "Convertirnos en una empresa líder, con impacto nacional e internacional, en la transición social en la era de la inteligencia artificial, reconocida por hacer que esta tecnología pase de ser una novedad técnica a ser una presencia cotidiana. Aspiramos a impulsar una sociedad más familiarizada y preparada para los avances presentes y futuros, gracias a infraestructuras centradas en las personas que vuelven la IA visible, útil y común en distintos ámbitos de la vida.",
      color: "green" as const,
    },
  ];

  return (
    <section id="quienes-somos" className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-medium text-3xl md:text-5xl text-foreground mb-4 uppercase tracking-tight">
            ¿Quiénes <span className="text-secondary">Somos</span>?
          </h2>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto mb-16 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-lg text-foreground/80 leading-relaxed text-center">
            Cailico es una empresa enfocada en acercar la inteligencia artificial a las personas y lograr la integración de esta tecnología a la sociedad más rápidamente. Para ello creamos infraestructuras inteligentes que resuelvan necesidades de las personas del común. Nuestro trabajo parte de una idea simple: la IA debe volverse comprensible, accesible y cotidiana para todos. En otra palabras, que vuelva parte del paisaje: que la gente la vea, la use, confíe en ella y la entienda como un elemento del día a día.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed text-center">
            Nuestro enfoque actual es el sector educativo al ser uno de los más masivos y transversales de la sociedad: casi todas las personas se relacionan con él, directa o indirectamente. Esto nos permite acelerar la adopción de la IA en la vida cotidiana y avanzar con mayor fuerza hacia nuestra misión.
          </p>
          <p className="text-lg text-secondary font-medium leading-relaxed text-center">
            En Cailico construimos puentes: entre lo que la tecnología ya puede hacer y lo que las personas realmente pueden aprovechar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <NeonCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
              color={card.color}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
