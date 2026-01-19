import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
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
      title: "Pago Inicial por Desarrollo",
      description: "Incluye el desarrollo, adaptación de la infraestructura AIECS y el primer mes de despliegue. Este pago es el mismo para todas las instituciones."
    },
    {
      title: "Pagos Mensuales",
      description: "Basados en el número de estudiantes de la institución. Para instituciones con menos de 1.000 estudiantes, se aplica un pago fijo mensual. Para aquellas con más de 1.000 estudiantes, el pago es variable según el número exacto de estudiantes."
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
    "Afganistán", "Albania", "Alemania", "Andorra", "Angola", "Antigua y Barbuda", "Arabia Saudita", "Argelia", "Argentina", "Armenia", "Australia", "Austria", "Azerbaiyán",
    "Bahamas", "Bangladés", "Barbados", "Baréin", "Bélgica", "Belice", "Benín", "Bielorrusia", "Birmania", "Bolivia", "Bosnia y Herzegovina", "Botsuana", "Brasil", "Brunéi", "Bulgaria", "Burkina Faso", "Burundi",
    "Bután", "Cabo Verde", "Camboya", "Camerún", "Canadá", "Catar", "Chad", "Chile", "China", "Chipre", "Colombia", "Comoras", "Corea del Norte", "Corea del Sur", "Costa de Marfil", "Costa Rica", "Croacia", "Cuba",
    "Dinamarca", "Dominica", "Ecuador", "Egipto", "El Salvador", "Emiratos Árabes Unidos", "Eritrea", "Eslovaquia", "Eslovenia", "España", "Estados Unidos", "Estonia", "Etiopía",
    "Filipinas", "Finlandia", "Fiyi", "Francia",
    "Gabón", "Gambia", "Georgia", "Ghana", "Granada", "Grecia", "Guatemala", "Guinea", "Guinea-Bisáu", "Guinea Ecuatorial", "Guyana",
    "Haití", "Honduras", "Hungría",
    "India", "Indonesia", "Irak", "Irán", "Irlanda", "Islandia", "Israel", "Italia",
    "Jamaica", "Japón", "Jordania",
    "Kazajistán", "Kenia", "Kirguistán", "Kiribati", "Kuwait",
    "Laos", "Lesoto", "Letonia", "Líbano", "Liberia", "Libia", "Liechtenstein", "Lituania", "Luxemburgo",
    "Madagascar", "Malasia", "Malaui", "Maldivas", "Malí", "Malta", "Marruecos", "Mauricio", "Mauritania", "México", "Micronesia", "Moldavia", "Mónaco", "Mongolia", "Montenegro", "Mozambique",
    "Namibia", "Nauru", "Nepal", "Nicaragua", "Níger", "Nigeria", "Noruega", "Nueva Zelanda",
    "Omán",
    "Países Bajos", "Pakistán", "Palaos", "Panamá", "Papúa Nueva Guinea", "Paraguay", "Perú", "Polonia", "Portugal",
    "Reino Unido", "República Centroafricana", "República Checa", "República del Congo", "República Democrática del Congo", "República Dominicana", "Ruanda", "Rumania", "Rusia",
    "Samoa", "San Cristóbal y Nieves", "San Marino", "San Vicente y las Granadinas", "Santa Lucía", "Santo Tomé y Príncipe", "Senegal", "Serbia", "Seychelles", "Sierra Leona", "Singapur", "Siria", "Somalia", "Sri Lanka", "Suazilandia", "Sudáfrica", "Sudán", "Sudán del Sur", "Suecia", "Suiza", "Surinam",
    "Tailandia", "Tanzania", "Tayikistán", "Timor Oriental", "Togo", "Tonga", "Trinidad y Tobago", "Túnez", "Turkmenistán", "Turquía", "Tuvalu",
    "Ucrania", "Uganda", "Uruguay", "Uzbekistán",
    "Vanuatu", "Vaticano", "Venezuela", "Vietnam",
    "Yemen",
    "Yibuti",
    "Zambia", "Zimbabue"
  ];

  const estudiantesOptions = [
    "Menos de 1000",
    "Más de 1000"
  ];

  return (
    <section id="costo" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-medium text-3xl md:text-5xl uppercase tracking-tight mb-4">
            <span className="text-secondary">COS</span>
            <span className="text-foreground">TO</span>
          </h2>
          <p className="text-xl md:text-2xl text-white font-medium max-w-3xl mx-auto">
            En CaIlico, nuestro modelo de precios está diseñado para adaptarse a las capacidades de las instituciones educativas
          </p>
        </motion.div>

        {/* Layout de dos columnas: Descripción + Formulario */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Columna izquierda: Modelo de precios */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {pricingFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <h3 className="font-semibold text-xl text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-foreground/80 text-base leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Columna derecha: Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* CTA texto arriba del formulario */}
            <p className="text-foreground/80 text-base leading-relaxed mb-6">
              Para una cotización y más detalles sobre nuestros costos, contáctanos a través de nuestro WhatsApp o deja tus datos en el formulario a continuación y nos pondremos en contacto contigo lo antes posible.
            </p>

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
                  <h3 className="font-display font-medium text-2xl text-gray-800 mb-2">
                    ¡Gracias!
                  </h3>
                  <p className="text-gray-600">
                    Nos pondremos en contacto pronto.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
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

                  {/* Cargo y Correo */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-gray-700">
                        Cargo<span className="text-red-500">*</span>
                      </Label>
                      <Select value={formData.cargo} onValueChange={(value) => handleChange("cargo", value)}>
                        <SelectTrigger className={`border-gray-300 bg-white text-gray-900 ${errors.cargo ? "border-red-500" : ""}`}>
                          <SelectValue placeholder="Selecciona">
                            {formData.cargo || "Selecciona"}
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent className="bg-white z-50 border border-gray-200 shadow-lg">
                          {cargoOptions.map((option) => (
                            <SelectItem key={option} value={option} className="text-gray-900 hover:bg-gray-100">
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.cargo && (
                        <p className="text-red-500 text-sm">Rellena este campo obligatorio.</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="correo" className="text-gray-700">
                        Correo<span className="text-red-500">*</span>
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
                        <p className="text-red-500 text-sm">Ingresa un correo válido.</p>
                      )}
                    </div>
                  </div>

                  {/* Teléfono e Institución */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="telefono" className="text-gray-700">
                        Teléfono<span className="text-red-500">*</span>
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
                        Institución<span className="text-red-500">*</span>
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
                        <SelectTrigger className={`border-gray-300 bg-white text-gray-900 ${errors.naturalezaJuridica ? "border-red-500" : ""}`}>
                          <SelectValue placeholder="Selecciona">
                            {formData.naturalezaJuridica || "Selecciona"}
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent className="bg-white z-50 border border-gray-200 shadow-lg">
                          {naturalezaOptions.map((option) => (
                            <SelectItem key={option} value={option} className="text-gray-900 hover:bg-gray-100">
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
                        <SelectTrigger className="border-gray-300 bg-white text-gray-900">
                          <SelectValue placeholder="Selecciona">
                            {formData.productoInteres || "Selecciona"}
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent className="bg-white z-50 border border-gray-200 shadow-lg">
                          <SelectItem value="Infraestructura AIECS" className="text-gray-900 hover:bg-gray-100">
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
                        <SelectTrigger className={`border-gray-300 bg-white text-gray-900 ${errors.pais ? "border-red-500" : ""}`}>
                          <SelectValue placeholder="Selecciona">
                            {formData.pais || "Selecciona"}
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent className="bg-white z-50 max-h-60 border border-gray-200 shadow-lg">
                          {paisesOptions.map((option) => (
                            <SelectItem key={option} value={option} className="text-gray-900 hover:bg-gray-100">
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
                        Nº de estudiantes<span className="text-red-500">*</span>
                      </Label>
                      <Select value={formData.numeroEstudiantes} onValueChange={(value) => handleChange("numeroEstudiantes", value)}>
                        <SelectTrigger className={`border-gray-300 bg-white text-gray-900 ${errors.numeroEstudiantes ? "border-red-500" : ""}`}>
                          <SelectValue placeholder="Selecciona">
                            {formData.numeroEstudiantes || "Selecciona"}
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent className="bg-white z-50 border border-gray-200 shadow-lg">
                          {estudiantesOptions.map((option) => (
                            <SelectItem key={option} value={option} className="text-gray-900 hover:bg-gray-100">
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

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar"}
                  </Button>

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
      </div>
    </section>
  );
};

export default CostSection;
