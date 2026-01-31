import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/cailico-logo.png";

const SecurityPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="Cailico" className="h-8 brightness-0 invert" />
          </Link>
          <Button variant="ghost" asChild className="text-primary-foreground hover:bg-primary-foreground/10">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Link>
          </Button>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <article className="prose prose-lg max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            Política de Seguridad de la Información
          </h1>
          <p className="text-muted-foreground mb-8">
            <strong>CAILICO SAS</strong> | Vigencia: Enero de 2026
          </p>

          <div className="bg-muted/50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-foreground mt-0">Compromiso con la Seguridad y Privacidad</h2>
            <p className="text-muted-foreground mb-0">
              La Seguridad y Privacidad de la Información en Cailico es parte fundamental del negocio para entregar confianza a nuestros clientes y usuarios sobre las tecnologías de la información que operamos.
            </p>
          </div>

          <p>
            Los datos, con base en nuestra clasificación de la información, son gestionados con los más altos estándares según las mejores prácticas disponibles en el mercado. La alta dirección entiende y atiende la importancia de mantenerse en cumplimiento con la Ley 1581 de 2012 y demás normas colombianas de protección de datos personales.
          </p>

          <h2>1. Principios de Seguridad</h2>
          <p>
            Cailico se compromete a proteger la información que procesa, almacena y transmite a través de su infraestructura AIPEC mediante los siguientes principios:
          </p>

          <h3>1.1 Confidencialidad</h3>
          <p>
            Garantizamos que la información solo sea accesible para aquellas personas autorizadas, implementando controles de acceso estrictos y mecanismos de autenticación robustos.
          </p>

          <h3>1.2 Integridad</h3>
          <p>
            Protegemos la exactitud y completitud de la información, implementando controles para detectar y prevenir modificaciones no autorizadas de los datos de estudiantes, padres de familia, profesores y directivos.
          </p>

          <h3>1.3 Disponibilidad</h3>
          <p>
            Aseguramos que los sistemas y la información estén disponibles cuando los usuarios autorizados los necesiten, mediante arquitecturas redundantes, respaldos periódicos y planes de continuidad del negocio.
          </p>

          <h3>1.4 Cumplimiento Legal</h3>
          <p>
            Nos comprometemos a cumplir con todas las obligaciones legales y regulatorias aplicables, incluyendo la Ley 1581 de 2012 sobre protección de datos personales en Colombia.
          </p>

          <h2>2. Alcance</h2>
          <p>Esta política aplica a:</p>
          <ul>
            <li>Todos los empleados, contratistas y proveedores de Cailico</li>
            <li>Todos los sistemas, aplicaciones y bases de datos que componen la infraestructura AIPEC</li>
            <li>Toda la información procesada por Cailico, incluyendo datos de instituciones educativas</li>
            <li>Todos los dispositivos utilizados para acceder a los sistemas de Cailico</li>
          </ul>

          <h2>3. Responsabilidades</h2>
          <h3>3.1 Alta Dirección</h3>
          <ul>
            <li>Aprobar y promover la Política de Seguridad</li>
            <li>Asignar los recursos necesarios para implementar medidas de seguridad</li>
            <li>Fomentar una cultura organizacional de seguridad</li>
            <li>Revisar periódicamente la efectividad de las medidas implementadas</li>
          </ul>

          <h3>3.2 Todos los Colaboradores</h3>
          <ul>
            <li>Conocer y cumplir con esta Política de Seguridad</li>
            <li>Proteger la información a la que tienen acceso</li>
            <li>Reportar inmediatamente cualquier incidente o sospecha de violación</li>
            <li>Participar en las capacitaciones de seguridad</li>
          </ul>

          <h2>4. Medidas de Seguridad Implementadas</h2>
          <h3>4.1 Medidas Técnicas</h3>
          <ul>
            <li>Cifrado de datos en tránsito y en reposo</li>
            <li>Control de acceso basado en roles y funciones</li>
            <li>Autenticación de usuarios</li>
            <li>Monitoreo continuo de sistemas</li>
            <li>Respaldos automáticos y periódicos</li>
            <li>Protección contra software malicioso</li>
            <li>Actualizaciones de seguridad regulares</li>
            <li>Segregación de datos por institución educativa</li>
          </ul>

          <h3>4.2 Medidas Organizativas</h3>
          <ul>
            <li>Políticas y procedimientos documentados</li>
            <li>Capacitación periódica del personal</li>
            <li>Acuerdos de confidencialidad con empleados y contratistas</li>
            <li>Gestión de incidentes de seguridad</li>
            <li>Auditorías de seguridad</li>
            <li>Plan de continuidad del negocio</li>
          </ul>

          <h3>4.3 Medidas Físicas</h3>
          <ul>
            <li>Control de acceso a instalaciones</li>
            <li>Protección de equipos críticos</li>
            <li>Resguardo adecuado de información física</li>
          </ul>

          <h2>5. Gestión de Incidentes de Seguridad</h2>
          <p>
            Cailico cuenta con procedimientos establecidos para la detección, reporte, contención y resolución de incidentes de seguridad. En caso de un incidente que afecte datos personales:
          </p>
          <ul>
            <li>Notificaremos a las instituciones educativas afectadas en el menor tiempo posible</li>
            <li>Implementaremos medidas correctivas inmediatas</li>
            <li>Colaboraremos con las autoridades competentes cuando corresponda</li>
            <li>Documentaremos lecciones aprendidas para prevenir futuros incidentes</li>
          </ul>

          <div className="bg-secondary/10 p-4 rounded-lg my-6">
            <p className="text-sm m-0">
              <strong>Canal de reporte de incidentes:</strong><br />
              WhatsApp: (+57) 301 624 1863<br />
              Correo electrónico: contacto@cailico.com
            </p>
          </div>

          <h2>6. Gestión de Terceros</h2>
          <p>Los proveedores y terceros que procesen o tengan acceso a información deben:</p>
          <ul>
            <li>Cumplir con requisitos de seguridad establecidos por Cailico</li>
            <li>Firmar acuerdos de confidencialidad y protección de datos</li>
            <li>Implementar medidas de seguridad adecuadas</li>
            <li>Reportar cualquier incidente de seguridad</li>
            <li>Someterse a evaluaciones de seguridad cuando sea requerido</li>
          </ul>

          <h2>7. Clasificación de la Información</h2>
          <p>Cailico clasifica la información según su nivel de sensibilidad:</p>
          <ul>
            <li><strong>Información Crítica:</strong> Requiere máximo nivel de protección (credenciales, claves de cifrado, código fuente)</li>
            <li><strong>Información Confidencial:</strong> Requiere alto nivel de protección (datos personales de la comunidad educativa, contratos)</li>
            <li><strong>Información de Uso Interno:</strong> Requiere protección básica (documentación interna, procedimientos)</li>
            <li><strong>Información Pública:</strong> Información que puede divulgarse sin restricciones</li>
          </ul>

          <h2>8. Mejora Continua</h2>
          <p>Cailico se compromete a la mejora continua mediante:</p>
          <ul>
            <li>Revisión periódica de esta política (mínimo anualmente)</li>
            <li>Monitoreo de nuevas amenazas y vulnerabilidades</li>
            <li>Actualización de controles de seguridad</li>
            <li>Evaluación de la efectividad de las medidas implementadas</li>
            <li>Implementación de mejores prácticas de la industria</li>
            <li>Capacitación continua del personal</li>
          </ul>

          <h2>9. Cumplimiento y Auditoría</h2>
          <p>
            Cailico realiza auditorías periódicas para verificar el cumplimiento de esta política. El incumplimiento puede resultar en acciones disciplinarias, incluyendo la terminación de la relación laboral o contractual.
          </p>

          <h2>10. Contacto</h2>
          <ul>
            <li><strong>WhatsApp:</strong> (+57) 301 624 1863</li>
            <li><strong>Correo electrónico:</strong> contacto@cailico.com</li>
            <li><strong>Sitio web:</strong> www.cailico.com</li>
          </ul>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              <strong>CAILICO SAS</strong><br />
              NIT: 901697615-9<br />
              Sucre, Colombia<br /><br />
              Vigencia: Enero de 2026<br />
              Última actualización: Enero de 2026
            </p>
            <p className="text-xs text-muted-foreground italic mt-4">
              Esta Política de Seguridad de la Información refleja el compromiso de Cailico SAS con la protección de la información de sus clientes y usuarios. Su cumplimiento es obligatorio para todos los colaboradores.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
};

export default SecurityPage;
