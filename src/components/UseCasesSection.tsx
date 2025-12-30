import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Briefcase, BookOpen, Users, GraduationCap } from "lucide-react";

const UseCasesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      icon: Briefcase,
      label: "Directivos",
      title: "Gestión Institucional Eficiente",
      features: [
        "Envío masivo de comunicados oficiales",
        "Notificaciones de emergencia en segundos",
        "Reportes de engagement y lectura",
        "Coordinación con todo el personal",
      ],
      description:
        "Comunique decisiones importantes a toda la comunidad educativa de forma instantánea y mida el impacto de cada mensaje.",
    },
    {
      icon: BookOpen,
      label: "Profesores",
      title: "Comunicación Académica Simplificada",
      features: [
        "Recordatorios automáticos de tareas",
        "Notificación de calificaciones a padres",
        "Envío de material de estudio",
        "Gestión de evaluaciones",
      ],
      description:
        "Dedique más tiempo a enseñar y menos a tareas administrativas. Los agentes de IA manejan la comunicación rutinaria.",
    },
    {
      icon: Users,
      label: "Padres",
      title: "Conexión Directa con la Educación",
      features: [
        "Notificaciones en tiempo real",
        "Seguimiento académico de sus hijos",
        "Comunicación directa con profesores",
        "Recordatorios de eventos y pagos",
      ],
      description:
        "Manténgase informado sobre el progreso educativo de sus hijos sin necesidad de descargar apps adicionales.",
    },
    {
      icon: GraduationCap,
      label: "Estudiantes",
      title: "Nunca Pierdas una Fecha Importante",
      features: [
        "Recordatorios personalizados",
        "Acceso a materiales de clase",
        "Notificaciones de calificaciones",
        "Alertas de actividades próximas",
      ],
      description:
        "Recibe toda la información académica importante directamente en WhatsApp, organizada y a tiempo.",
    },
  ];

  return (
    <section id="use-cases" className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Casos de <span className="text-secondary">Uso</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluciones adaptadas para cada miembro de la comunidad educativa
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {tabs.map((tab, index) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === index
                  ? "bg-secondary text-secondary-foreground shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <motion.div
          key={activeTab}
          className="max-w-4xl mx-auto bg-card rounded-2xl p-8 md:p-10 border border-border shadow-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {tabs[activeTab].title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {tabs[activeTab].description}
              </p>
              <ul className="space-y-3">
                {tabs[activeTab].features.map((feature, index) => (
                  <motion.li
                    key={feature}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="text-foreground">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Illustration placeholder */}
            <div className="flex items-center justify-center">
              <motion.div
                className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {(() => {
                  const Icon = tabs[activeTab].icon;
                  return <Icon className="w-20 h-20 md:w-24 md:h-24 text-secondary" />;
                })()}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCasesSection;
