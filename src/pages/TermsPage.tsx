import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar loadingPhase="complete" />
      
      {/* Content */}
      <main className="pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <article className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground/80 prose-li:text-foreground/80 prose-strong:text-foreground">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
              Términos y Condiciones de Uso de la Infraestructura AIPEC
            </h1>
            <p className="text-muted-foreground mb-8">
              <strong>CAILICO SAS</strong> | Vigencia: Enero de 2026
            </p>

            <div className="bg-primary/5 p-6 rounded-lg mb-8 border border-primary/10">
              <h2 className="text-xl font-semibold text-foreground mt-0">¡GRACIAS POR ELEGIR CAILICO!</h2>
              <p className="text-foreground/80 mb-0">
                Queremos que tu experiencia con nuestra infraestructura AIPEC sea excepcional. Por ello, hemos diseñado este documento para regular todas las interacciones con nuestros servicios.
              </p>
            </div>

            <p>
              Los términos y condiciones de uso establecidos en este documento son aplicables a los usuarios que utilicen los servicios ofrecidos por Cailico SAS a través de la infraestructura AIPEC. Estos Términos y Condiciones constituyen un contrato legal y vinculante entre los usuarios como cliente actual o futuro de los servicios de Cailico y Cailico SAS, y establecen los lineamientos para el uso de los servicios ofrecidos a través de nuestra infraestructura tecnológica.
            </p>

            <h2 className="text-foreground">1. Servicios de Cailico</h2>
            <h3 className="text-foreground">1.1 Descripción General del Servicio</h3>
            <p>
              Cailico SAS es una empresa colombiana especializada en desarrollar infraestructuras de inteligencia artificial para instituciones educativas. El servicio principal que ofrece Cailico es la implementación de la <strong>Infraestructura AIPEC</strong> (Artificial Intelligence Powered Educational Communication - Comunicación Educativa Potenciada por Inteligencia Artificial) en instituciones educativas.
            </p>

            <h3 className="text-foreground">1.2 Componentes de la Infraestructura AIPEC</h3>
            <h4 className="text-foreground">Agente Institucional de WhatsApp</h4>
            <p>
              Sistema de inteligencia artificial que opera 24/7 a través de WhatsApp, personalizado con la identidad de cada institución educativa. Funcionalidades incluyen:
            </p>
            <ul>
              <li>Envío de comunicados institucionales</li>
              <li>Consulta de información institucional</li>
              <li>Consulta de actividades académicas y calificaciones</li>
              <li>Recordatorios automáticos de actividades</li>
              <li>Notificaciones automáticas de calificaciones</li>
            </ul>

            <h4 className="text-foreground">Plataforma de Notas</h4>
            <p>
              Plataforma web especializada para la gestión académica institucional, accesible para docentes, rector y coordinadores.
            </p>

            <h2 className="text-foreground">2. Registro y Activación del Servicio</h2>
            <p>Para hacer uso de la infraestructura AIPEC, la institución educativa debe:</p>
            <ol>
              <li>Contactar a Cailico a través de WhatsApp: (+57) 301 624 1863 o correo: contacto@cailico.com</li>
              <li>Proporcionar información institucional completa</li>
              <li>Recibir cotización personalizada</li>
              <li>Formalizar la adquisición del servicio</li>
            </ol>

            <h2 className="text-foreground">3. Modelo de Precios y Pagos</h2>
            <h3 className="text-foreground">3.1 Estructura de Pagos</h3>
            <p>El servicio funciona bajo un modelo de dos componentes:</p>
            <ul>
              <li><strong>Pago Inicial:</strong> Desarrollo, adaptación, configuración y despliegue de la infraestructura AIPEC personalizada, incluyendo el primer mes de uso.</li>
              <li><strong>Pagos Mensuales:</strong> Mantenimiento, soporte continuo y mejora de la infraestructura.</li>
            </ul>

            <h2 className="text-foreground">4. Política de Cancelación y Terminación</h2>
            <p>
              La institución podrá solicitar la terminación del servicio en cualquier momento mediante notificación escrita. Los servicios estarán disponibles hasta el último día del mes en curso. El pago inicial NO es reembolsable bajo ninguna circunstancia.
            </p>

            <h2 className="text-foreground">5. Responsabilidades y Deberes de la Institución</h2>
            <ul>
              <li>Mantener la confidencialidad de las credenciales de acceso</li>
              <li>Utilizar la infraestructura de acuerdo con su diseño</li>
              <li>Contar con autorización previa de los titulares de datos personales</li>
              <li>Cumplir con la Ley 1581 de 2012 sobre protección de datos</li>
            </ul>

            <h2 className="text-foreground">6. Propiedad Intelectual</h2>
            <p>
              Todos los derechos de propiedad intelectual sobre AIPEC, incluyendo software, código fuente, diseños, algoritmos de inteligencia artificial, logos y marcas, pertenecen exclusivamente a Cailico SAS.
            </p>

            <h2 className="text-foreground">7. Tratamiento de Datos Personales</h2>
            <p>
              La Institución actúa como Responsable del Tratamiento de los datos personales. Cailico actúa como Encargado del Tratamiento de dichos datos. El tratamiento se rige por la Política de Privacidad de Cailico SAS.
            </p>

            <h2 className="text-foreground">8. Limitación de Responsabilidad</h2>
            <p>
              Cailico NO será responsable por decisiones académicas o administrativas tomadas basándose en información de AIPEC, daños indirectos, pérdida de datos causada por acciones del usuario, o interrupciones causadas por terceros.
            </p>

            <h2 className="text-foreground">9. Resolución de Controversias</h2>
            <p>
              Estos Términos y Condiciones se rigen por las leyes de la República de Colombia. Las controversias serán sometidas a arbitraje conforme a las reglas del Centro de Arbitraje competente.
            </p>

            <h2 className="text-foreground">10. Información de Contacto</h2>
            <ul>
              <li><strong>WhatsApp:</strong> (+57) 301 624 1863</li>
              <li><strong>Correo electrónico:</strong> contacto@cailico.com</li>
              <li><strong>Oficinas:</strong> Departamento de Sucre, Colombia</li>
            </ul>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <strong>CAILICO SAS</strong><br />
                NIT: 901697615-9<br />
                Sucre, Colombia<br /><br />
                Vigencia: Enero de 2026<br />
                Última actualización: Enero de 2026
              </p>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsPage;
