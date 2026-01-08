import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Megaphone,
  BarChart3,
  Calendar,
  FileText,
  PenTool,
  Users,
} from "lucide-react";

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Megaphone,
      title: "Comunicados automáticos",
      description: "Envío masivo a estudiantes y padres con segmentación inteligente",
    },
    {
      icon: BarChart3,
      title: "Notificaciones de calificaciones",
      description: "Informes en tiempo real del rendimiento académico",
    },
    {
      icon: Calendar,
      title: "Recordatorios de actividades",
      description: "Tareas, evaluaciones y exposiciones organizadas",
    },
    {
      icon: FileText,
      title: "Envío de materiales",
      description: "Archivos y recursos educativos directamente al WhatsApp",
    },
    {
      icon: PenTool,
      title: "Creación de evaluaciones",
      description: "Genera tareas, talleres, quices y evaluaciones fácilmente",
    },
    {
      icon: Users,
      title: "Gestión por roles",
      description: "Segmentación para directivos, profesores, padres y estudiantes",
    },
  ];

  return (
    <section id="features" className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-medium text-3xl md:text-5xl text-foreground mb-4 uppercase tracking-tight">
            PRODUCTO
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Todo lo que necesitas para transformar la comunicación educativa
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative bg-card rounded-xl p-6 border border-border hover:border-secondary/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                >
                  <feature.icon className="w-6 h-6 text-secondary" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
