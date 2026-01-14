import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Target, Eye, ChevronDown } from "lucide-react";
import misionBg from "@/assets/mision-bg.png";
import visionBg from "@/assets/vision-bg.png";

interface AccordionCardProps {
  icon: React.ElementType;
  title: string;
  buttonText: string;
  description: string;
  color: "orange" | "green";
  bgImage: string;
  delay: number;
}

const AccordionCard = ({ icon: Icon, title, buttonText, description, color, bgImage, delay }: AccordionCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const colors = {
    orange: {
      border: "border-secondary",
      buttonBorder: "border-secondary",
      buttonText: "text-secondary",
      iconBg: "bg-secondary/20",
      iconText: "text-secondary",
      titleText: "text-secondary",
    },
    green: {
      border: "border-[hsl(142,76%,30%)]",
      buttonBorder: "border-[hsl(142,76%,30%)]",
      buttonText: "text-[hsl(142,76%,30%)]",
      iconBg: "bg-[hsl(142,76%,30%)]/20",
      iconText: "text-[hsl(142,76%,30%)]",
      titleText: "text-[hsl(142,76%,30%)]",
    },
  };

  const c = colors[color];

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl border-2 ${c.buttonBorder} bg-white hover:bg-gray-50 transition-colors`}
      >
        <Icon className={`w-6 h-6 ${c.iconText}`} />
        <span className={`font-display font-medium text-lg md:text-xl uppercase tracking-tight ${c.buttonText}`}>
          {buttonText}
        </span>
        <ChevronDown 
          className={`w-5 h-5 ${c.iconText} transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {/* Collapsible Content */}
      <motion.div
        initial={false}
        animate={{ 
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
          marginTop: isOpen ? 16 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div 
          className={`relative rounded-2xl p-8 border-2 ${c.border} bg-white overflow-hidden`}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-contain bg-right bg-no-repeat opacity-15"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
          
          {/* Content */}
          <div className="relative z-10">
            {/* Header: Icon + Title in same row */}
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${c.iconBg}`}>
                <Icon className={`w-7 h-7 ${c.iconText}`} />
              </div>
              <h3 className={`font-display font-medium text-2xl md:text-3xl uppercase tracking-tight ${c.titleText}`}>
                {title}
              </h3>
            </div>

            {/* Description */}
            <p className="leading-relaxed text-base text-primary font-semibold">
              {description}
            </p>
          </div>
        </div>
      </motion.div>
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
      buttonText: "Ver Misión",
      description:
        "Preparar a la sociedad ante los avances de la inteligencia artificial, impulsando su integración en la vida cotidiana de las personas. En Cailico desarrollamos sistemas que acercan la IA a todos, incluyendo a quienes normalmente no la usarían, reduciendo la distancia entre tecnología y ciudadanía para que su adopción sea natural, masiva y sostenible, de esa manera aportando también a su financiación y desarrollo.",
      color: "orange" as const,
      bgImage: misionBg,
    },
    {
      icon: Eye,
      title: "Visión",
      buttonText: "Ver Visión",
      description:
        "Convertirnos en la empresa líder en el mundo en el desarrollo de productos e infraestructuras que impulsen la transición social en la era de la inteligencia artificial. Aspiramos a formar una sociedad más familiarizada y preparada para los avances presentes y futuros, gracias a infraestructuras que vuelven la IA visible, útil y común en distintos ámbitos de la vida.",
      color: "green" as const,
      bgImage: visionBg,
    },
  ];

  return (
    <section id="quienes-somos" className="py-20 md:py-24 pb-8 md:pb-12 bg-background" ref={ref}>
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
            Cailico es una empresa enfocada en acercar la inteligencia artificial a las personas y lograr la integración de esta tecnología a la sociedad más rápidamente. Para ello creamos infraestructuras inteligentes que resuelvan necesidades de las personas del común. Nuestro trabajo parte de una idea simple: la IA debe volverse comprensible, accesible y cotidiana para todos. En otra palabras, hacerla parte del paisaje: que la gente la vea, la use, confíe en ella y la entienda como un elemento del día a día.
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
            <AccordionCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              buttonText={card.buttonText}
              description={card.description}
              color={card.color}
              bgImage={card.bgImage}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
