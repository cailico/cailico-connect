import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sectionTitle = "text-2xl font-bold mt-10 mb-4";
const subSectionTitle = "text-xl font-semibold mt-8 mb-3";
const paragraph = "mb-4 leading-relaxed";
const list = "mb-4 ml-6 space-y-1 list-disc";

const SecurityPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar loadingPhase="complete" forceBackground />

      <main className="pt-28 md:pt-36 pb-16" style={{ color: "#333" }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-6xl text-base">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center" style={{ color: "#333" }}>
            Política de Seguridad de la Información
          </h1>
          <p className="text-sm mb-10 text-center" style={{ color: "#666" }}>
            CAILICO SAS | Vigencia: Enero de 2026
          </p>
          {/* Intro highlight */}
          <div className="bg-orange/10 border-l-4 border-orange px-6 py-5 rounded-r-lg mb-8">
            <p className="font-semibold text-navy text-lg mb-2">Compromiso con la Seguridad y Privacidad de la Información</p>
            <p className="mb-0" style={{ color: "#444" }}>
              La Seguridad y Privacidad de la Información en Cailico es parte fundamental del negocio para entregar confianza a nuestros clientes y usuarios sobre las tecnologías de la información que operamos. Los datos, con base en nuestra clasificación de la información, son gestionados con los más altos estándares según las mejores prácticas disponibles en el mercado, lo cual es una base para nuestro crecimiento y sustentabilidad organizacional.
            </p>
          </div>

          <p className={paragraph}>
            La Seguridad y Privacidad de la Información en Cailico es posible gracias al compromiso de la alta dirección, promoviendo una cultura de mejora continua y facilitando los recursos y herramientas necesarias.
          </p>
          <p className={paragraph}>
            La alta dirección entiende y atiende la importancia y beneficios de mantenerse en cumplimiento no solo con los requerimientos de la Ley 1581 de 2012 y demás normas colombianas de protección de datos personales, sino además con otros requisitos legales, contractuales y mejores prácticas de seguridad relevantes para el contexto de la organización.
          </p>
          <p className={paragraph}>
            En Cailico, nuestras políticas y procedimientos en cuanto a la Seguridad y Privacidad de la Información son del conocimiento general de los empleados y contratistas cuando aplique. En la medida de lo posible, nuestras partes interesadas clave son informadas de nuestros lineamientos y mejores prácticas.
          </p>

          {/* 1 */}
          <h2 className={`${sectionTitle} text-navy`}>1. Principios de Seguridad</h2>
          <p className={paragraph}>
            Cailico se compromete a proteger la información que procesa, almacena y transmite a través de su infraestructura AIPEC (Artificial Intelligence Powered Educational Communication), mediante la aplicación de los siguientes principios:
          </p>

          <h3 className={`${subSectionTitle} text-navy`}>1.1 Confidencialidad</h3>
          <p className={paragraph}>
            Garantizamos que la información solo sea accesible para aquellas personas autorizadas, implementando controles de acceso estrictos y mecanismos de autenticación robustos.
          </p>

          <h3 className={`${subSectionTitle} text-navy`}>1.2 Integridad</h3>
          <p className={paragraph}>
            Protegemos la exactitud y completitud de la información, implementando controles para detectar y prevenir modificaciones no autorizadas de los datos de estudiantes, padres de familia, profesores y directivos.
          </p>

          <h3 className={`${subSectionTitle} text-navy`}>1.3 Disponibilidad</h3>
          <p className={paragraph}>
            Aseguramos que los sistemas y la información estén disponibles cuando los usuarios autorizados los necesiten, mediante arquitecturas redundantes, respaldos periódicos y planes de continuidad del negocio.
          </p>

          <h3 className={`${subSectionTitle} text-navy`}>1.4 Cumplimiento Legal</h3>
          <p className={paragraph}>
            Nos comprometemos a cumplir con todas las obligaciones legales y regulatorias aplicables, incluyendo la Ley 1581 de 2012 sobre protección de datos personales en Colombia.
          </p>

          {/* 2 */}
          <h2 className={`${sectionTitle} text-navy`}>2. Alcance</h2>
          <p className={paragraph}>Esta política aplica a:</p>
          <ul className={list}>
            <li>Todos los empleados, contratistas y proveedores de Cailico</li>
            <li>Todos los sistemas, aplicaciones y bases de datos que componen la infraestructura AIPEC</li>
            <li>Toda la información procesada por Cailico, incluyendo datos de instituciones educativas, estudiantes, padres de familia, profesores y directivos</li>
            <li>Todos los dispositivos utilizados para acceder a los sistemas de Cailico</li>
          </ul>

          {/* 3 */}
          <h2 className={`${sectionTitle} text-navy`}>3. Responsabilidades</h2>

          <h3 className={`${subSectionTitle} text-navy`}>3.1 Alta Dirección</h3>
          <p className={paragraph}>La alta dirección de Cailico es responsable de:</p>
          <ul className={list}>
            <li>Aprobar y promover la Política de Seguridad de la Información</li>
            <li>Asignar los recursos necesarios para implementar y mantener las medidas de seguridad</li>
            <li>Fomentar una cultura organizacional de seguridad</li>
            <li>Revisar periódicamente la efectividad de las medidas de seguridad implementadas</li>
          </ul>

          <h3 className={`${subSectionTitle} text-navy`}>3.2 Todos los Colaboradores</h3>
          <p className={paragraph}>Todos los empleados, contratistas y proveedores son responsables de:</p>
          <ul className={list}>
            <li>Conocer y cumplir con esta Política de Seguridad</li>
            <li>Proteger la información a la que tienen acceso</li>
            <li>Reportar inmediatamente cualquier incidente o sospecha de violación de seguridad</li>
            <li>Participar en las capacitaciones de seguridad de la información</li>
          </ul>

          {/* 4 */}
          <h2 className={`${sectionTitle} text-navy`}>4. Medidas de Seguridad Implementadas</h2>
          <p className={paragraph}>Cailico implementa medidas técnicas, organizativas y físicas para proteger la información, incluyendo pero no limitándose a:</p>

          <h3 className={`${subSectionTitle} text-navy`}>4.1 Medidas Técnicas</h3>
          <ul className={list}>
            <li>Cifrado de datos en tránsito y en reposo</li>
            <li>Control de acceso basado en roles y funciones</li>
            <li>Autenticación de usuarios</li>
            <li>Monitoreo continuo de sistemas</li>
            <li>Respaldos automáticos y periódicos de información</li>
            <li>Protección contra software malicioso</li>
            <li>Actualizaciones de seguridad regulares</li>
            <li>Segregación de datos por institución educativa</li>
          </ul>

          <h3 className={`${subSectionTitle} text-navy`}>4.2 Medidas Organizativas</h3>
          <ul className={list}>
            <li>Políticas y procedimientos de seguridad documentados</li>
            <li>Capacitación periódica del personal en seguridad de la información</li>
            <li>Acuerdos de confidencialidad con empleados y contratistas</li>
            <li>Gestión de incidentes de seguridad</li>
            <li>Auditorías de seguridad</li>
            <li>Plan de continuidad del negocio y recuperación ante desastres</li>
          </ul>

          <h3 className={`${subSectionTitle} text-navy`}>4.3 Medidas Físicas</h3>
          <ul className={list}>
            <li>Control de acceso a instalaciones</li>
            <li>Protección de equipos críticos</li>
            <li>Resguardo adecuado de información física</li>
          </ul>

          {/* 5 */}
          <h2 className={`${sectionTitle} text-navy`}>5. Gestión de Incidentes de Seguridad</h2>
          <p className={paragraph}>
            Cailico cuenta con procedimientos establecidos para la detección, reporte, contención y resolución de incidentes de seguridad de la información.
          </p>
          <p className={paragraph}>En caso de un incidente que afecte datos personales de la comunidad educativa, Cailico se compromete a:</p>
          <ul className={list}>
            <li>Notificar a las instituciones educativas afectadas en el menor tiempo posible</li>
            <li>Implementar medidas correctivas inmediatas</li>
            <li>Colaborar con las autoridades competentes cuando corresponda</li>
            <li>Documentar lecciones aprendidas para prevenir futuros incidentes</li>
          </ul>

          <div className="bg-orange/10 border-l-4 border-orange px-6 py-4 rounded-r-lg my-6">
            <p className="text-sm m-0">
              <strong className="text-navy">Canal de reporte de incidentes:</strong><br />
              WhatsApp: (+57) 301 624 1863<br />
              Correo electrónico: contacto@cailico.com
            </p>
          </div>

          {/* 6 */}
          <h2 className={`${sectionTitle} text-navy`}>6. Gestión de Terceros</h2>
          <p className={paragraph}>Los proveedores y terceros que procesen o tengan acceso a información de Cailico o de sus clientes deben:</p>
          <ul className={list}>
            <li>Cumplir con requisitos de seguridad establecidos por Cailico</li>
            <li>Firmar acuerdos de confidencialidad y protección de datos</li>
            <li>Implementar medidas de seguridad adecuadas</li>
            <li>Reportar cualquier incidente de seguridad</li>
            <li>Someterse a evaluaciones de seguridad cuando sea requerido</li>
          </ul>

          {/* 7 */}
          <h2 className={`${sectionTitle} text-navy`}>7. Mejora Continua</h2>
          <p className={paragraph}>Cailico se compromete a la mejora continua de su sistema de gestión de seguridad de la información mediante:</p>
          <ul className={list}>
            <li>Revisión periódica de esta política (mínimo anualmente)</li>
            <li>Monitoreo de nuevas amenazas y vulnerabilidades</li>
            <li>Actualización de controles de seguridad según evolución tecnológica</li>
            <li>Evaluación de la efectividad de las medidas implementadas</li>
            <li>Implementación de mejores prácticas de la industria</li>
            <li>Capacitación continua del personal</li>
          </ul>

          {/* 8 */}
          <h2 className={`${sectionTitle} text-navy`}>8. Clasificación de la Información</h2>
          <p className={paragraph}>Cailico clasifica la información según su nivel de sensibilidad y criticidad, aplicando controles de seguridad proporcionales a cada categoría:</p>
          <ul className={list}>
            <li><strong className="text-navy">Información Crítica:</strong> Requiere máximo nivel de protección (credenciales, claves de cifrado, código fuente propietario)</li>
            <li><strong className="text-navy">Información Confidencial:</strong> Requiere alto nivel de protección (datos personales de la comunidad educativa, contratos, información financiera)</li>
            <li><strong className="text-navy">Información de Uso Interno:</strong> Requiere protección básica (documentación interna, procedimientos)</li>
            <li><strong className="text-navy">Información Pública:</strong> Información que puede divulgarse sin restricciones</li>
          </ul>

          {/* 9 */}
          <h2 className={`${sectionTitle} text-navy`}>9. Cumplimiento y Auditoría</h2>
          <p className={paragraph}>
            Cailico realiza auditorías periódicas para verificar el cumplimiento de esta política y la efectividad de los controles implementados.
          </p>
          <p className={paragraph}>
            El incumplimiento de esta política puede resultar en acciones disciplinarias, incluyendo la terminación de la relación laboral o contractual, y cuando corresponda, acciones legales.
          </p>

          {/* 10 */}
          <h2 className={`${sectionTitle} text-navy`}>10. Contacto</h2>
          <p className={paragraph}>Para consultas, reportes o sugerencias relacionadas con la seguridad de la información, puede contactar a:</p>
          <p className="mb-2 font-semibold text-navy">Área de Seguridad de la Información de Cailico:</p>
          <ul className={list}>
            <li><strong className="text-navy">WhatsApp:</strong> (+57) 301 624 1863</li>
            <li><strong className="text-navy">Correo electrónico:</strong> contacto@cailico.com</li>
            <li><strong className="text-navy">Sitio web:</strong> www.cailico.com</li>
          </ul>

          {/* 11 */}
          <h2 className={`${sectionTitle} text-navy`}>11. Vigencia y Actualización</h2>
          <p className={paragraph}>
            Esta Política de Seguridad de la Información se encuentra vigente a partir del primero (01) de enero de 2026 y se revisa periódicamente para garantizar su vigencia y efectividad.
          </p>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t-2 border-navy/20">
            <p className="text-sm" style={{ color: "#666" }}>
              <strong className="text-navy">CAILICO SAS</strong><br />
              NIT: 901697615-9<br />
              Sucre, Colombia<br /><br />
              Empresa fundada en Corozal, Sucre, en el año 2023 por Juan Sebastián Castillo, actual CEO de la compañía.<br /><br />
              Vigencia: Enero de 2026 | Última actualización: Enero de 2026
            </p>
            <p className="text-xs italic mt-4" style={{ color: "#888" }}>
              Esta Política de Seguridad de la Información refleja el compromiso de Cailico SAS con la protección de la información de sus clientes y usuarios. Su cumplimiento es obligatorio para todos los colaboradores.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SecurityPage;
