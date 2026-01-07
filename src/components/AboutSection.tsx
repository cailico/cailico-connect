import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
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
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // On mobile: light up when in view. On desktop: light up on hover
  const isLit = isMobile ? isInView : isHovered;

  const glowColors = {
    orange: {
      border: isLit ? "border-secondary" : "border-secondary/20",
      shadow: isLit ? "0 0 30px hsl(32, 95%, 44%), 0 0 60px hsl(32, 95%, 44%, 0.5), 0 0 90px hsl(32, 95%, 44%, 0.3)" : "none",
      iconBg: isLit ? "bg-secondary/30" : "bg-secondary/10",
      iconText: isLit ? "text-secondary drop-shadow-[0_0_10px_hsl(32,95%,44%)]" : "text-secondary/50",
      titleText: isLit ? "text-secondary drop-shadow-[0_0_8px_hsl(32,95%,44%)]" : "text-secondary/40",
      descText: isLit ? "text-foreground/90" : "text-foreground/30",
    },
    green: {
      border: isLit ? "border-accent" : "border-accent/20",
      shadow: isLit ? "0 0 30px hsl(142, 76%, 36%), 0 0 60px hsl(142, 76%, 36%, 0.5), 0 0 90px hsl(142, 76%, 36%, 0.3)" : "none",
      iconBg: isLit ? "bg-accent/30" : "bg-accent/10",
      iconText: isLit ? "text-accent drop-shadow-[0_0_10px_hsl(142,76%,36%)]" : "text-accent/50",
      titleText: isLit ? "text-accent drop-shadow-[0_0_8px_hsl(142,76%,36%)]" : "text-accent/40",
      descText: isLit ? "text-foreground/90" : "text-foreground/30",
    },
  };

  const colors = glowColors[color];

  return (
    <motion.div
      ref={cardRef}
      className={`relative bg-primary/80 rounded-2xl p-8 border-2 transition-all duration-500 ${colors.border}`}
      style={{ boxShadow: colors.shadow }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header: Icon + Title in same row */}
      <div className="flex items-center gap-4 mb-6">
        <motion.div
          className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 ${colors.iconBg}`}
          animate={{ scale: isLit ? 1.05 : 1 }}
        >
          <Icon className={`w-7 h-7 transition-all duration-500 ${colors.iconText}`} />
        </motion.div>
        <h3 className={`font-display font-medium text-2xl md:text-3xl uppercase tracking-tight transition-all duration-500 ${colors.titleText}`}>
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className={`leading-relaxed text-base transition-all duration-500 ${colors.descText}`}>
        {description}
      </p>

      {/* Neon glow overlay */}
      <div 
        className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500 ${isLit ? 'opacity-100' : 'opacity-0'}`}
        style={{
          background: color === 'orange' 
            ? 'radial-gradient(ellipse at center, hsl(32, 95%, 44%, 0.1) 0%, transparent 70%)'
            : 'radial-gradient(ellipse at center, hsl(142, 76%, 36%, 0.1) 0%, transparent 70%)'
        }}
      />
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
