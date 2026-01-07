import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    {
      icon: Target,
      title: "Misión",
      description:
        "Preparar a la sociedad ante los avances de la inteligencia artificial, impulsando su integración en la vida cotidiana de las personas. En Cailico desarrollamos sistemas que acercan la IA a todos, incluyendo a quienes normalmente no la usarían, reduciendo la distancia entre tecnología y ciudadanía para que su adopción sea natural, masiva y sostenible, de esa manera aportando también a su financiación y desarrollo.",
      color: "secondary",
    },
    {
      icon: Eye,
      title: "Visión",
      description:
        "Convertirnos en una empresa líder, con impacto nacional e internacional, en la transición social en la era de la inteligencia artificial, reconocida por hacer que esta tecnología pase de ser una novedad técnica a ser una presencia cotidiana. Aspiramos a impulsar una sociedad más familiarizada y preparada para los avances presentes y futuros, gracias a infraestructuras centradas en las personas que vuelven la IA visible, útil y común en distintos ámbitos de la vida.",
      color: "accent",
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
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            Cailico es una empresa enfocada en acercar a todas las personas a la inteligencia artificial y lograr la integración de esta tecnología a la sociedad más rápidamente. Para ello creamos infraestructuras inteligentes que resuelvan necesidades de las personas del común. Nuestro trabajo parte de una idea simple: la IA debe volverse comprensible, accesible y cotidiana para todos. Por eso desarrollamos soluciones que ayudan a que la IA se vuelva parte del paisaje: que la gente la vea, la use, confíe en ella y la entienda como una herramienta del día a día.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            Nuestro enfoque actual es el sector educativo al ser uno de los más masivos y transversales de la sociedad: casi todas las personas se relacionan con él, directa o indirectamente. Esto nos permite acelerar la adopción de la IA en la vida cotidiana y avanzar con mayor fuerza hacia nuestra misión.
          </p>
          <p className="text-lg text-secondary font-medium leading-relaxed text-center">
            En Cailico construimos puentes: entre lo que la tecnología ya puede hacer y lo que las personas realmente pueden aprovechar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-secondary/30"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <motion.div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  card.color === "secondary"
                    ? "bg-secondary/10 text-secondary"
                    : "bg-accent/10 text-accent"
                }`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <card.icon className="w-7 h-7" />
              </motion.div>

              <h3 className="text-xl font-semibold text-foreground mb-4">
                {card.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
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

export default AboutSection;
