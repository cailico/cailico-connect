import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, CircleDollarSign, CreditCard, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const CostSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    cargo: "",
    correo: "",
    telefono: "",
    institucion: "",
    naturalezaJuridica: "",
    productoInteres: "Infraestructura AIECS",
    pais: "Colombia",
    numeroEstudiantes: "",
  });

  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, boolean> = {};
    
    if (!formData.nombre.trim()) newErrors.nombre = true;
    if (!formData.apellido.trim()) newErrors.apellido = true;
    if (!formData.cargo) newErrors.cargo = true;
    if (!formData.correo.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) newErrors.correo = true;
    if (!formData.telefono.trim()) newErrors.telefono = true;
    if (!formData.institucion.trim()) newErrors.institucion = true;
    if (!formData.naturalezaJuridica) newErrors.naturalezaJuridica = true;
    if (!formData.pais) newErrors.pais = true;
    if (!formData.numeroEstudiantes) newErrors.numeroEstudiantes = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Por favor, completa todos los campos obligatorios.");
      return;
    }

    setIsSubmitting(true);
    
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitted(true);
    toast.success("¡Gracias! Nos pondremos en contacto pronto.");
    setIsSubmitting(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: false }));
    }
  };

  const pricingFeatures = [
    {
      icon: CreditCard,
      title: "Pago Inicial por Desarrollo",
      description: "Incluye el desarrollo, adaptación de la infraestructura AIECS y el primer mes de despliegue. Este pago es el mismo para todas las instituciones."
    },
    {
      icon: Users,
      title: "Pagos Mensuales",
      description: "Basados en el número de estudiantes de la institución. Para instituciones con menos de 1.000 estudiantes, se aplica un pago fijo mensual. Para aquellas con más de 1.000 estudiantes, el pago es variable según el número exacto de estudiantes."
    },
    {
      icon: Check,
      title: "Sin Costos Ocultos",
      description: "No aplicamos costos ocultos. Total transparencia en nuestra estructura de precios."
    }
  ];

  const cargoOptions = [
    "Rector(a)",
    "Coordinador(a)",
    "Profesor(a)",
    "Administrativo(a)"
  ];

  const naturalezaOptions = [
    "Oficial (Público)",
    "Privado"
  ];

  const paisesOptions = [
    "Colombia",
    "México",
    "Argentina",
    "Chile",
    "Perú",
    "Ecuador",
    "Venezuela",
    "Panamá",
    "Costa Rica",
    "Guatemala",
    "Honduras",
    "El Salvador",
    "Nicaragua",
    "Bolivia",
    "Paraguay",
    "Uruguay",
    "República Dominicana",
    "Puerto Rico",
    "España",
    "Otro"
  ];

  const estudiantesOptions = [
    "Menos de 1000",
    "Más de 1000"
  ];

  return (
    <section id="costo" className="py-20 md:py-32 bg-[#0a1628] relative overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F7941D]/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <CircleDollarSign className="w-10 h-10 text-[#F7941D]" />
            <h2 className="font-oswald font-medium text-4xl md:text-5xl text-white uppercase tracking-tight">
              Costo
            </h2>
          </div>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mt-4">
            En CaIlico, nuestro modelo de precios está diseñado para adaptarse a las capacidades de las instituciones educativas
          </p>
        </motion.div>

        {/* Modelo de precios */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {pricingFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#F7941D]/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#F7941D]/20 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-[#F7941D]" />
              </div>
              <h3 className="font-oswald font-medium text-xl text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Llamado a la acción */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12"
        >
          <p className="text-gray-300 text-lg max-w-4xl mx-auto">
            Para una cotización y más detalles sobre nuestros costos, contáctanos a través de los canales detallados en la sección de Contacto más abajo. Alternativamente, deja tus datos en el formulario a continuación y nos pondremos en contacto contigo lo antes posible para discutir cómo AIECS puede transformar tu institución.
          </p>
        </motion.div>

        {/* Formulario */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-oswald font-medium text-2xl text-gray-800 mb-2">
                  ¡Gracias!
                </h3>
                <p className="text-gray-600">
                  Nos pondremos en contacto pronto.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nombre y Apellido */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nombre" className="text-gray-700">
                      Nombre<span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="nombre"
                      value={formData.nombre}
                      onChange={(e) => handleChange("nombre", e.target.value)}
                      className={`border-gray-300 focus:border-primary ${errors.nombre ? "border-red-500" : ""}`}
                      placeholder="Tu nombre"
                    />
                    {errors.nombre && (
                      <p className="text-red-500 text-sm">Rellena este campo obligatorio.</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="apellido" className="text-gray-700">
                      Apellido<span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="apellido"
                      value={formData.apellido}
                      onChange={(e) => handleChange("apellido", e.target.value)}
                      className={`border-gray-300 focus:border-primary ${errors.apellido ? "border-red-500" : ""}`}
                      placeholder="Tu apellido"
                    />
                    {errors.apellido && (
                      <p className="text-red-500 text-sm">Rellena este campo obligatorio.</p>
                    )}
                  </div>
                </div>

                {/* Cargo */}
                <div className="space-y-2">
                  <Label className="text-gray-700">
                    Cargo<span className="text-red-500">*</span>
                  </Label>
                  <Select value={formData.cargo} onValueChange={(value) => handleChange("cargo", value)}>
                    <SelectTrigger className={`border-gray-300 bg-white ${errors.cargo ? "border-red-500" : ""}`}>
                      <SelectValue placeholder="Selecciona" />
                    </SelectTrigger>
                    <SelectContent className="bg-white z-50">
                      {cargoOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.cargo && (
                    <p className="text-red-500 text-sm">Rellena este campo obligatorio.</p>
                  )}
                </div>

                {/* Correo */}
                <div className="space-y-2">
                  <Label htmlFor="correo" className="text-gray-700">
                    Correo de contacto<span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="correo"
                    type="email"
                    value={formData.correo}
                    onChange={(e) => handleChange("correo", e.target.value)}
                    className={`border-gray-300 focus:border-primary ${errors.correo ? "border-red-500" : ""}`}
                    placeholder="correo@ejemplo.com"
                  />
                  {errors.correo && (
                    <p className="text-red-500 text-sm">Ingresa un correo electrónico válido.</p>
                  )}
                </div>

                {/* Teléfono e Institución */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="telefono" className="text-gray-700">
                      Número de teléfono<span className="text-red-500">*</span>
                    </Label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md text-gray-600 text-sm">
                        +57
                      </span>
                      <Input
                        id="telefono"
                        value={formData.telefono}
                        onChange={(e) => handleChange("telefono", e.target.value)}
                        className={`rounded-l-none border-gray-300 focus:border-primary ${errors.telefono ? "border-red-500" : ""}`}
                        placeholder="300 123 4567"
                      />
                    </div>
                    {errors.telefono && (
                      <p className="text-red-500 text-sm">Rellena este campo obligatorio.</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="institucion" className="text-gray-700">
                      Nombre de la institución<span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="institucion"
                      value={formData.institucion}
                      onChange={(e) => handleChange("institucion", e.target.value)}
                      className={`border-gray-300 focus:border-primary ${errors.institucion ? "border-red-500" : ""}`}
                      placeholder="Nombre de tu institución"
                    />
                    {errors.institucion && (
                      <p className="text-red-500 text-sm">Rellena este campo obligatorio.</p>
                    )}
                  </div>
                </div>

                {/* Naturaleza y Producto */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-gray-700">
                      Naturaleza Jurídica<span className="text-red-500">*</span>
                    </Label>
                    <Select value={formData.naturalezaJuridica} onValueChange={(value) => handleChange("naturalezaJuridica", value)}>
                      <SelectTrigger className={`border-gray-300 bg-white ${errors.naturalezaJuridica ? "border-red-500" : ""}`}>
                        <SelectValue placeholder="Selecciona" />
                      </SelectTrigger>
                      <SelectContent className="bg-white z-50">
                        {naturalezaOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.naturalezaJuridica && (
                      <p className="text-red-500 text-sm">Rellena este campo obligatorio.</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label className="text-gray-700">
                      Producto de Interés<span className="text-red-500">*</span>
                    </Label>
                    <Select value={formData.productoInteres} onValueChange={(value) => handleChange("productoInteres", value)}>
                      <SelectTrigger className="border-gray-300 bg-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white z-50">
                        <SelectItem value="Infraestructura AIECS">
                          Infraestructura AIECS
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* País y Estudiantes */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-gray-700">
                      País<span className="text-red-500">*</span>
                    </Label>
                    <Select value={formData.pais} onValueChange={(value) => handleChange("pais", value)}>
                      <SelectTrigger className={`border-gray-300 bg-white ${errors.pais ? "border-red-500" : ""}`}>
                        <SelectValue placeholder="Selecciona" />
                      </SelectTrigger>
                      <SelectContent className="bg-white z-50 max-h-60">
                        {paisesOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.pais && (
                      <p className="text-red-500 text-sm">Rellena este campo obligatorio.</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label className="text-gray-700">
                      Número de estudiantes de la institución<span className="text-red-500">*</span>
                    </Label>
                    <Select value={formData.numeroEstudiantes} onValueChange={(value) => handleChange("numeroEstudiantes", value)}>
                      <SelectTrigger className={`border-gray-300 bg-white ${errors.numeroEstudiantes ? "border-red-500" : ""}`}>
                        <SelectValue placeholder="Selecciona" />
                      </SelectTrigger>
                      <SelectContent className="bg-white z-50">
                        {estudiantesOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.numeroEstudiantes && (
                      <p className="text-red-500 text-sm">Rellena este campo obligatorio.</p>
                    )}
                  </div>
                </div>

                {/* Botón Enviar */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-oswald font-medium text-lg py-6 uppercase tracking-wide"
                >
                  {isSubmitting ? "Enviando..." : "Enviar"}
                </Button>

                {/* Política de privacidad */}
                <p className="text-center text-gray-500 text-sm">
                  Al enviar este formulario, aceptas nuestra{" "}
                  <a href="#" className="text-primary hover:underline">
                    Política de Privacidad
                  </a>
                  .
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CostSection;
