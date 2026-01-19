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
    codigoPais: "+57",
    telefono: "",
    correo: "",
    cargo: "",
    institucion: "",
    naturalezaJuridica: "",
    numeroEstudiantes: "",
    pais: "Colombia",
    productoInteres: "Infraestructura AIECS",
  });

  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, boolean> = {};
    
    if (!formData.nombre.trim()) newErrors.nombre = true;
    if (!formData.apellido.trim()) newErrors.apellido = true;
    if (!formData.codigoPais) newErrors.codigoPais = true;
    if (!formData.telefono.trim()) newErrors.telefono = true;
    if (!formData.correo.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) newErrors.correo = true;
    if (!formData.cargo) newErrors.cargo = true;
    if (!formData.institucion.trim()) newErrors.institucion = true;
    if (!formData.naturalezaJuridica) newErrors.naturalezaJuridica = true;
    if (!formData.numeroEstudiantes) newErrors.numeroEstudiantes = true;
    if (!formData.pais) newErrors.pais = true;

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

  const codigosPaises = [
    { codigo: "+1", pais: "Estados Unidos/Canadá" },
    { codigo: "+7", pais: "Rusia" },
    { codigo: "+20", pais: "Egipto" },
    { codigo: "+27", pais: "Sudáfrica" },
    { codigo: "+30", pais: "Grecia" },
    { codigo: "+31", pais: "Países Bajos" },
    { codigo: "+32", pais: "Bélgica" },
    { codigo: "+33", pais: "Francia" },
    { codigo: "+34", pais: "España" },
    { codigo: "+36", pais: "Hungría" },
    { codigo: "+39", pais: "Italia" },
    { codigo: "+40", pais: "Rumania" },
    { codigo: "+41", pais: "Suiza" },
    { codigo: "+43", pais: "Austria" },
    { codigo: "+44", pais: "Reino Unido" },
    { codigo: "+45", pais: "Dinamarca" },
    { codigo: "+46", pais: "Suecia" },
    { codigo: "+47", pais: "Noruega" },
    { codigo: "+48", pais: "Polonia" },
    { codigo: "+49", pais: "Alemania" },
    { codigo: "+51", pais: "Perú" },
    { codigo: "+52", pais: "México" },
    { codigo: "+53", pais: "Cuba" },
    { codigo: "+54", pais: "Argentina" },
    { codigo: "+55", pais: "Brasil" },
    { codigo: "+56", pais: "Chile" },
    { codigo: "+57", pais: "Colombia" },
    { codigo: "+58", pais: "Venezuela" },
    { codigo: "+60", pais: "Malasia" },
    { codigo: "+61", pais: "Australia" },
    { codigo: "+62", pais: "Indonesia" },
    { codigo: "+63", pais: "Filipinas" },
    { codigo: "+64", pais: "Nueva Zelanda" },
    { codigo: "+65", pais: "Singapur" },
    { codigo: "+66", pais: "Tailandia" },
    { codigo: "+81", pais: "Japón" },
    { codigo: "+82", pais: "Corea del Sur" },
    { codigo: "+84", pais: "Vietnam" },
    { codigo: "+86", pais: "China" },
    { codigo: "+90", pais: "Turquía" },
    { codigo: "+91", pais: "India" },
    { codigo: "+92", pais: "Pakistán" },
    { codigo: "+93", pais: "Afganistán" },
    { codigo: "+94", pais: "Sri Lanka" },
    { codigo: "+95", pais: "Myanmar" },
    { codigo: "+98", pais: "Irán" },
    { codigo: "+212", pais: "Marruecos" },
    { codigo: "+213", pais: "Argelia" },
    { codigo: "+216", pais: "Túnez" },
    { codigo: "+218", pais: "Libia" },
    { codigo: "+220", pais: "Gambia" },
    { codigo: "+221", pais: "Senegal" },
    { codigo: "+234", pais: "Nigeria" },
    { codigo: "+254", pais: "Kenia" },
    { codigo: "+255", pais: "Tanzania" },
    { codigo: "+256", pais: "Uganda" },
    { codigo: "+260", pais: "Zambia" },
    { codigo: "+263", pais: "Zimbabue" },
    { codigo: "+351", pais: "Portugal" },
    { codigo: "+352", pais: "Luxemburgo" },
    { codigo: "+353", pais: "Irlanda" },
    { codigo: "+354", pais: "Islandia" },
    { codigo: "+358", pais: "Finlandia" },
    { codigo: "+370", pais: "Lituania" },
    { codigo: "+371", pais: "Letonia" },
    { codigo: "+372", pais: "Estonia" },
    { codigo: "+380", pais: "Ucrania" },
    { codigo: "+420", pais: "República Checa" },
    { codigo: "+421", pais: "Eslovaquia" },
    { codigo: "+502", pais: "Guatemala" },
    { codigo: "+503", pais: "El Salvador" },
    { codigo: "+504", pais: "Honduras" },
    { codigo: "+505", pais: "Nicaragua" },
    { codigo: "+506", pais: "Costa Rica" },
    { codigo: "+507", pais: "Panamá" },
    { codigo: "+509", pais: "Haití" },
    { codigo: "+591", pais: "Bolivia" },
    { codigo: "+592", pais: "Guyana" },
    { codigo: "+593", pais: "Ecuador" },
    { codigo: "+595", pais: "Paraguay" },
    { codigo: "+598", pais: "Uruguay" },
    { codigo: "+852", pais: "Hong Kong" },
    { codigo: "+853", pais: "Macao" },
    { codigo: "+855", pais: "Camboya" },
    { codigo: "+856", pais: "Laos" },
    { codigo: "+880", pais: "Bangladesh" },
    { codigo: "+886", pais: "Taiwán" },
    { codigo: "+960", pais: "Maldivas" },
    { codigo: "+961", pais: "Líbano" },
    { codigo: "+962", pais: "Jordania" },
    { codigo: "+963", pais: "Siria" },
    { codigo: "+964", pais: "Irak" },
    { codigo: "+965", pais: "Kuwait" },
    { codigo: "+966", pais: "Arabia Saudita" },
    { codigo: "+967", pais: "Yemen" },
    { codigo: "+968", pais: "Omán" },
    { codigo: "+970", pais: "Palestina" },
    { codigo: "+971", pais: "Emiratos Árabes" },
    { codigo: "+972", pais: "Israel" },
    { codigo: "+973", pais: "Baréin" },
    { codigo: "+974", pais: "Catar" },
    { codigo: "+975", pais: "Bután" },
    { codigo: "+976", pais: "Mongolia" },
    { codigo: "+977", pais: "Nepal" },
  ];

  const naturalezaOptions = [
    "Oficial (Pública)",
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
      <div className="container mx-auto px-4 relative z-10 max-w-6xl" ref={ref}>
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="font-display font-medium text-3xl md:text-5xl uppercase tracking-tight mb-4">
            <span className="text-secondary">COS</span>
            <span className="text-foreground">TO</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/90 max-w-3xl mx-auto">
            Nuestro modelo de pagos se divide en un pago inicial por desarrollo seguido de pagos mensuales de acuerdo a la capacidad de la institución educativa:
          </p>
        </motion.div>

        {/* Tarjetas de precios lado a lado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {pricingFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <h3 className="font-display font-medium text-xl text-secondary mb-3 uppercase tracking-tight">
                {feature.title}
              </h3>
              <p className="text-foreground/80 text-base leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Tarjeta blanca contenedora con CTA y Formulario */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-xl"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Columna izquierda: CTA centrado */}
            <div className="flex flex-col justify-center h-full">
              <h3 className="font-display font-medium text-2xl md:text-3xl text-[#1e293b] mb-4 uppercase tracking-tight">
                ¿Quieres una cotización?
              </h3>
              <p className="text-[#475569] text-lg leading-relaxed">
                Para una cotización y más detalles sobre nuestros costos, contáctanos a través de nuestro WhatsApp o deja tus datos en el formulario a continuación y nos pondremos en contacto contigo lo antes posible.
              </p>
            </div>

            {/* Columna derecha: Formulario */}
            <div>
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
                      <Label htmlFor="nombre" className="text-[#1e293b] font-medium">
                        Nombre<span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="nombre"
                        value={formData.nombre}
                        onChange={(e) => handleChange("nombre", e.target.value)}
                        className={`bg-[#f8fafc] border-[#e2e8f0] text-[#1e293b] placeholder:text-[#94a3b8] focus:border-[#F7941D] ${errors.nombre ? "border-red-500" : ""}`}
                      />
                      {errors.nombre && (
                        <p className="text-red-500 text-sm">Rellena este campo obligatorio.</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="apellido" className="text-[#1e293b] font-medium">
                        Apellido<span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="apellido"
                        value={formData.apellido}
                        onChange={(e) => handleChange("apellido", e.target.value)}
                        className={`bg-[#f8fafc] border-[#e2e8f0] text-[#1e293b] placeholder:text-[#94a3b8] focus:border-[#F7941D] ${errors.apellido ? "border-red-500" : ""}`}
                      />
                      {errors.apellido && (
                        <p className="text-red-500 text-sm">Rellena este campo obligatorio.</p>
                      )}
                    </div>
                  </div>

                  {/* Teléfono y Correo */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-[#1e293b] font-medium">
                        Teléfono<span className="text-red-500">*</span>
                      </Label>
                      <div className="flex">
                        <Select value={formData.codigoPais} onValueChange={(value) => handleChange("codigoPais", value)}>
                          <SelectTrigger className={`w-20 rounded-r-none bg-[#f1f5f9] border-[#e2e8f0] text-[#1e293b] ${errors.codigoPais ? "border-red-500" : ""}`}>
                            <SelectValue placeholder="+57">
                              {formData.codigoPais || "+57"}
                            </SelectValue>
                          </SelectTrigger>
                          <SelectContent className="bg-white z-50 max-h-60 border border-[#e2e8f0] shadow-lg">
                            {codigosPaises.map((item) => (
                              <SelectItem key={item.codigo} value={item.codigo} className="text-[#1e293b] hover:bg-[#f1f5f9]">
                                {item.codigo} {item.pais}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <Input
                          id="telefono"
                          value={formData.telefono}
                          onChange={(e) => handleChange("telefono", e.target.value)}
                          className={`rounded-l-none border-l-0 bg-[#f8fafc] border-[#e2e8f0] text-[#1e293b] placeholder:text-[#94a3b8] focus:border-[#F7941D] ${errors.telefono ? "border-red-500" : ""}`}
                        />
                      </div>
                      {(errors.codigoPais || errors.telefono) && (
                        <p className="text-red-500 text-sm">Rellena este campo obligatorio.</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="correo" className="text-[#1e293b] font-medium">
                        Correo<span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="correo"
                        type="email"
                        value={formData.correo}
                        onChange={(e) => handleChange("correo", e.target.value)}
                        className={`bg-[#f8fafc] border-[#e2e8f0] text-[#1e293b] placeholder:text-[#94a3b8] focus:border-[#F7941D] ${errors.correo ? "border-red-500" : ""}`}
                      />
                      {errors.correo && (
                        <p className="text-red-500 text-sm">Ingresa un correo válido.</p>
                      )}
                    </div>
                  </div>

                  {/* Cargo y Nombre de la institución */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-[#1e293b] font-medium">
                        Cargo<span className="text-red-500">*</span>
                      </Label>
                      <Select value={formData.cargo} onValueChange={(value) => handleChange("cargo", value)}>
                        <SelectTrigger className={`bg-[#f8fafc] border-[#e2e8f0] text-[#1e293b] ${errors.cargo ? "border-red-500" : ""}`}>
                          <SelectValue placeholder="Selecciona">
                            {formData.cargo || "Selecciona"}
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent className="bg-white z-50 border border-[#e2e8f0] shadow-lg">
                          {cargoOptions.map((option) => (
                            <SelectItem key={option} value={option} className="text-[#1e293b] hover:bg-[#f1f5f9]">
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
                      <Label htmlFor="institucion" className="text-[#1e293b] font-medium">
                        Nombre de la Institución<span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="institucion"
                        value={formData.institucion}
                        onChange={(e) => handleChange("institucion", e.target.value)}
                        className={`bg-[#f8fafc] border-[#e2e8f0] text-[#1e293b] placeholder:text-[#94a3b8] focus:border-[#F7941D] ${errors.institucion ? "border-red-500" : ""}`}
                      />
                      {errors.institucion && (
                        <p className="text-red-500 text-sm">Rellena este campo obligatorio.</p>
                      )}
                    </div>
                  </div>

                  {/* Naturaleza Jurídica y Número de estudiantes */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-[#1e293b] font-medium">
                        Naturaleza Jurídica<span className="text-red-500">*</span>
                      </Label>
                      <Select value={formData.naturalezaJuridica} onValueChange={(value) => handleChange("naturalezaJuridica", value)}>
                        <SelectTrigger className={`bg-[#f8fafc] border-[#e2e8f0] text-[#1e293b] ${errors.naturalezaJuridica ? "border-red-500" : ""}`}>
                          <SelectValue placeholder="Selecciona">
                            {formData.naturalezaJuridica || "Selecciona"}
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent className="bg-white z-50 border border-[#e2e8f0] shadow-lg">
                          {naturalezaOptions.map((option) => (
                            <SelectItem key={option} value={option} className="text-[#1e293b] hover:bg-[#f1f5f9]">
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
                      <Label className="text-[#1e293b] font-medium">
                        Nº de estudiantes<span className="text-red-500">*</span>
                      </Label>
                      <Select value={formData.numeroEstudiantes} onValueChange={(value) => handleChange("numeroEstudiantes", value)}>
                        <SelectTrigger className={`bg-[#f8fafc] border-[#e2e8f0] text-[#1e293b] ${errors.numeroEstudiantes ? "border-red-500" : ""}`}>
                          <SelectValue placeholder="Selecciona">
                            {formData.numeroEstudiantes || "Selecciona"}
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent className="bg-white z-50 border border-[#e2e8f0] shadow-lg">
                          {estudiantesOptions.map((option) => (
                            <SelectItem key={option} value={option} className="text-[#1e293b] hover:bg-[#f1f5f9]">
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

                  {/* País y Producto de Interés */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-[#1e293b] font-medium">
                        País<span className="text-red-500">*</span>
                      </Label>
                      <Select value={formData.pais} onValueChange={(value) => handleChange("pais", value)}>
                        <SelectTrigger className={`bg-[#f8fafc] border-[#e2e8f0] text-[#1e293b] ${errors.pais ? "border-red-500" : ""}`}>
                          <SelectValue placeholder="Selecciona">
                            {formData.pais || "Selecciona"}
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent className="bg-white z-50 max-h-60 border border-[#e2e8f0] shadow-lg">
                          {paisesOptions.map((option) => (
                            <SelectItem key={option} value={option} className="text-[#1e293b] hover:bg-[#f1f5f9]">
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
                      <Label className="text-[#1e293b] font-medium">
                        Producto de Interés<span className="text-red-500">*</span>
                      </Label>
                      <Select value={formData.productoInteres} onValueChange={(value) => handleChange("productoInteres", value)}>
                        <SelectTrigger className="bg-[#f8fafc] border-[#e2e8f0] text-[#1e293b]">
                          <SelectValue placeholder="Selecciona">
                            {formData.productoInteres || "Selecciona"}
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent className="bg-white z-50 border border-[#e2e8f0] shadow-lg">
                          <SelectItem value="Infraestructura AIECS" className="text-[#1e293b] hover:bg-[#f1f5f9]">
                            Infraestructura AIECS
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-[#0066CC] hover:bg-[#0052A3] text-white font-medium py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar"}
                  </Button>

                  <p className="text-center text-[#64748b] text-sm">
                    Al enviar este formulario, aceptas nuestra{" "}
                    <a href="#" className="text-[#0066CC] hover:underline">
                      Política de Privacidad
                    </a>
                    .
                  </p>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CostSection;
