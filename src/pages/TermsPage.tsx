import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sectionTitle = "text-2xl font-bold mt-10 mb-4";
const subSectionTitle = "text-xl font-semibold mt-8 mb-3";
const subSubSectionTitle = "text-lg font-semibold mt-6 mb-2";
const paragraph = "mb-4 leading-relaxed";
const list = "mb-4 ml-6 space-y-1 list-disc";
const orderedList = "mb-4 ml-6 space-y-1 list-decimal";
const nestedList = "mt-1 ml-6 space-y-1 list-disc";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar loadingPhase="complete" forceBackground />

      <main className="pt-28 md:pt-36 pb-16" style={{ color: "#333" }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-6xl text-base">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center" style={{ color: "#333" }}>
            Términos y Condiciones
          </h1>
          <p className="text-sm mb-10 text-center" style={{ color: "#666" }}>
            CAILICO SAS | Vigencia: Enero de 2026
          </p>
          {/* Intro highlight */}
          <div className="bg-orange/10 border-l-4 border-orange px-6 py-5 rounded-r-lg mb-8">
            <p className="font-semibold text-navy text-lg mb-2">¡Gracias por elegir Cailico!</p>
            <p className="mb-0" style={{ color: "#444" }}>
              Queremos que tu experiencia con nuestra infraestructura AIPEC sea excepcional. Por ello, hemos diseñado este documento para regular todas las interacciones con nuestros servicios. A continuación, encontrarás los términos y condiciones de uso. Por favor, léelos detalladamente.
            </p>
          </div>

          <p className={paragraph}>
            Los términos y condiciones de uso ("<strong className="text-navy">Términos y Condiciones</strong>") establecidos en este documento son aplicables a los usuarios que utilicen los servicios ofrecidos por Cailico SAS a través de la infraestructura AIPEC. Estos Términos y Condiciones constituyen un contrato legal y vinculante entre los usuarios ("<strong className="text-navy">Usted</strong>", "<strong className="text-navy">Usuario</strong>" o "<strong className="text-navy">Institución</strong>") como cliente actual o futuro de los servicios de Cailico y Cailico SAS ("<strong className="text-navy">Cailico</strong>", "<strong className="text-navy">nosotros</strong>" o "<strong className="text-navy">nuestro</strong>"), y establecen los lineamientos para el uso de los servicios ofrecidos a través de nuestra infraestructura tecnológica.
          </p>
          <p className={paragraph}>
            Cualquier persona o institución educativa que desee acceder o hacer uso de la infraestructura AIPEC o los servicios que en esta se ofrecen, podrá hacerlo sujetándose a los presentes Términos y Condiciones, así como a las políticas y principios incorporados en este documento y a las normas aplicables en la República de Colombia.
          </p>
          <p className={paragraph}>
            <strong className="text-navy">Al utilizar la infraestructura AIPEC, usted acepta y se obliga a cumplir los siguientes Términos y Condiciones de uso.</strong> Por favor, revise estos Términos y Condiciones de manera detallada y cuidadosa. Los servicios que ponemos a su disposición están sujetos a estos Términos y Condiciones. En todo caso, cualquier persona o institución que no acepte los presentes Términos y Condiciones deberá abstenerse de utilizar la infraestructura AIPEC y/o adquirir los servicios que sean ofrecidos.
          </p>

          {/* 1 */}
          <h2 className={`${sectionTitle} text-navy`}>1. Servicios de Cailico</h2>

          <h3 className={`${subSectionTitle} text-navy`}>1.1 Descripción General del Servicio</h3>
          <p className={paragraph}>
            Cailico SAS es una empresa colombiana especializada en desarrollar infraestructuras de inteligencia artificial para instituciones educativas. El servicio principal que ofrece Cailico es la <strong className="text-navy">implementación de la Infraestructura AIPEC</strong> (Artificial Intelligence Powered Educational Communication - Comunicación Educativa Potenciada por Inteligencia Artificial) en instituciones educativas.
          </p>
          <p className={paragraph}>
            AIPEC es una infraestructura tecnológica de inteligencia artificial enfocada en la comunicación y gestión educativa, diseñada para mejorar la eficiencia administrativa y la comunicación entre todos los miembros de la comunidad educativa.
          </p>

          <h3 className={`${subSectionTitle} text-navy`}>1.2 Componentes de la Infraestructura AIPEC</h3>
          <p className={paragraph}>La infraestructura AIPEC se compone de dos sistemas integrados que trabajan en conjunto:</p>

          <h4 className={`${subSubSectionTitle} text-navy`}>1.2.1 Agente Institucional de WhatsApp</h4>
          <p className={paragraph}>
            Sistema de inteligencia artificial que opera 24/7 a través de WhatsApp, personalizado con la identidad de cada institución educativa. Este agente funciona como un trabajador virtual de la institución y constituye el principal canal de comunicación con la comunidad educativa.
          </p>
          <p className="mb-2 font-semibold text-navy">Funcionalidades:</p>
          <ul className={list}>
            <li>Envío de comunicados institucionales desde directivos y profesores hacia estudiantes y padres de familia</li>
            <li>Consulta de información institucional (horarios, reglamentos, políticas, eventos)</li>
            <li>Consulta de actividades académicas (tareas, evaluaciones, exposiciones)</li>
            <li>Consulta de calificaciones</li>
            <li>Consulta de información de profesores</li>
            <li>Recordatorios automáticos de actividades</li>
            <li>Notificaciones automáticas de calificaciones</li>
          </ul>
          <p className={paragraph}>
            <strong className="text-navy">Importante:</strong> El Agente de WhatsApp permite que directivos y profesores envíen comunicaciones a estudiantes y padres de familia. Sin embargo, estudiantes y padres NO pueden usar el agente para enviar mensajes directos al personal institucional. Estos usuarios son receptores de información y pueden realizar consultas al sistema, pero no emisores de comunicación directa.
          </p>

          <h4 className={`${subSubSectionTitle} text-navy`}>1.2.2 Plataforma de Notas</h4>
          <p className={paragraph}>Plataforma web especializada para la gestión académica institucional, accesible para docentes, rector y coordinadores.</p>
          <p className="mb-2 font-semibold text-navy">Funcionalidades para Profesores:</p>
          <ul className={list}>
            <li>Gestión de actividades académicas (creación, modificación, eliminación)</li>
            <li>Subir calificaciones de actividades académicas</li>
            <li>Envío automático de notificaciones de notas a padres de familia</li>
            <li>Calendario interactivo de actividades</li>
            <li>Envío de comunicados a grupos o estudiantes específicos</li>
          </ul>
          <p className="mb-2 font-semibold text-navy">Funcionalidades adicionales para Rector y Coordinadores:</p>
          <ul className={list}>
            <li>Visualización de notas de todos los estudiantes</li>
            <li>Estadísticas en tiempo real del rendimiento institucional</li>
            <li>Análisis macro a micro (institución, grado, salón, estudiante, materia)</li>
            <li>Reportes y gráficas de rendimiento académico</li>
            <li>Monitoreo de actividades académicas</li>
          </ul>

          <h3 className={`${subSectionTitle} text-navy`}>1.3 Alcance del Servicio</h3>
          <p className={paragraph}>El servicio de Cailico consiste en:</p>
          <ul className={list}>
            <li>Desarrollo y configuración de la infraestructura AIPEC a la medida de la institución</li>
            <li>Personalización con la identidad institucional</li>
            <li>Integración de la estructura académica de la institución</li>
            <li>Despliegue y activación de los sistemas</li>
            <li>Capacitación virtual del personal y usuarios</li>
            <li>Soporte y mantenimiento continuo</li>
            <li>Actualizaciones y mejoras permanentes</li>
          </ul>

          {/* 2 */}
          <h2 className={`${sectionTitle} text-navy`}>2. Registro y Activación del Servicio</h2>

          <h3 className={`${subSectionTitle} text-navy`}>2.1 Proceso de Contratación</h3>
          <p className={paragraph}>Para hacer uso de la infraestructura AIPEC, la institución educativa debe:</p>
          <ol className={orderedList}>
            <li>
              <strong className="text-navy">Contactar a Cailico</strong> a través de:
              <ul className={nestedList}>
                <li>WhatsApp: (+57) 301 624 1863</li>
                <li>Correo electrónico: contacto@cailico.com</li>
                <li>Formulario web en la sección COSTO del sitio web</li>
              </ul>
            </li>
            <li>
              <strong className="text-navy">Proporcionar información institucional:</strong>
              <ul className={nestedList}>
                <li>Nombre de la institución educativa</li>
                <li>Nombre y cargo del representante legal</li>
                <li>Número de identificación tributaria (NIT)</li>
                <li>Información de contacto (teléfono, dirección, correo electrónico)</li>
                <li>Estructura académica (niveles, grados, grupos, áreas, materias)</li>
                <li>Número estimado de usuarios:
                  <ul className={nestedList}>
                    <li>Cantidad de estudiantes</li>
                    <li>Cantidad de padres de familia</li>
                    <li>Cantidad de profesores</li>
                    <li>Cantidad de directivos y personal administrativo</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <strong className="text-navy">Recibir cotización personalizada</strong> basada en:
              <ul className={nestedList}>
                <li>Número de usuarios</li>
                <li>Estructura académica</li>
                <li>Necesidades específicas</li>
                <li>Servicios adicionales requeridos</li>
              </ul>
            </li>
            <li><strong className="text-navy">Formalizar la adquisición del servicio</strong> mediante la firma del contrato y realización del pago inicial</li>
          </ol>

          <h3 className={`${subSectionTitle} text-navy`}>2.2 Recopilación de Información Institucional</h3>
          <p className={paragraph}>Una vez formalizada la adquisición, Cailico recopilará la información necesaria para adaptar AIPEC a la institución:</p>
          <ul className={list}>
            <li>Estructura académica completa (niveles, grados, grupos, áreas, materias)</li>
            <li>Datos de directivos, coordinadores y profesores</li>
            <li><strong className="text-navy">Datos completos de estudiantes:</strong>
              <ul className={nestedList}>
                <li>Nombres completos</li>
                <li>Grados y grupos asignados</li>
                <li>Materias que cursan</li>
                <li>Identificación del estudiante (número de documento)</li>
              </ul>
            </li>
            <li><strong className="text-navy">Datos de padres de familia:</strong>
              <ul className={nestedList}>
                <li>Nombres completos</li>
                <li>Números de teléfono (WhatsApp)</li>
                <li>Relación con los estudiantes (hasta 3 estudiantes por padre)</li>
              </ul>
            </li>
            <li><strong className="text-navy">Asignación académica de profesores:</strong>
              <ul className={nestedList}>
                <li>Materias que imparten</li>
                <li>Grados y grupos asignados</li>
                <li>Horarios y cargas académicas</li>
                <li>Números de contacto</li>
              </ul>
            </li>
            <li>Flujos de comunicación institucionales</li>
            <li>Formatos y documentos institucionales</li>
            <li>Identidad visual (logos, colores institucionales)</li>
            <li>Reglas y políticas de operación específicas</li>
          </ul>

          <h3 className={`${subSectionTitle} text-navy`}>2.3 Veracidad de la Información</h3>
          <p className={paragraph}>La institución debe brindar información precisa, completa y actualizada. Es responsable de mantener actualizada dicha información durante la vigencia del servicio. Cailico se reserva el derecho de suspender o cancelar el servicio si se detecta que la información proporcionada es falsa, inexacta o incompleta.</p>

          <h3 className={`${subSectionTitle} text-navy`}>2.4 Representación Legal</h3>
          <p className={paragraph}>La persona que actúe en nombre de la institución educativa declara tener las facultades legales suficientes para representar, contratar y obligar a la institución en los términos de estos Términos y Condiciones. La institución debe estar debidamente constituida y contar con las autorizaciones requeridas para obligarse conforme a este documento.</p>

          {/* 3 */}
          <h2 className={`${sectionTitle} text-navy`}>3. Modelo de Precios y Pagos</h2>

          <h3 className={`${subSectionTitle} text-navy`}>3.1 Estructura de Pagos</h3>
          <p className={paragraph}>El servicio de Cailico funciona bajo un modelo de dos componentes de pago:</p>

          <h4 className={`${subSubSectionTitle} text-navy`}>3.1.1 Pago Inicial</h4>
          <p className={paragraph}><strong className="text-navy">Concepto:</strong> Desarrollo, adaptación, configuración y despliegue de la infraestructura AIPEC personalizada para la institución.</p>
          <p className="mb-2 font-semibold text-navy">Incluye:</p>
          <ul className={list}>
            <li>Desarrollo y configuración a la medida</li>
            <li>Personalización con la identidad institucional</li>
            <li>Configuración del Agente de WhatsApp</li>
            <li>Configuración de la Plataforma de Notas</li>
            <li>Integración de estructura académica</li>
            <li>Despliegue y activación</li>
            <li>Pruebas y verificación de funcionamiento</li>
            <li><strong className="text-navy">Primer mes de uso de la infraestructura completa</strong></li>
            <li>Capacitación virtual para todos los roles</li>
          </ul>
          <p className={paragraph}><strong className="text-navy">Nota:</strong> El monto del pago inicial será establecido en la cotización personalizada proporcionada por Cailico.</p>

          <h4 className={`${subSubSectionTitle} text-navy`}>3.1.2 Pagos Mensuales</h4>
          <p className={paragraph}><strong className="text-navy">Concepto:</strong> Mantenimiento, soporte continuo y mejora de la infraestructura.</p>
          <p className="mb-2 font-semibold text-navy">Incluye:</p>
          <ul className={list}>
            <li>Mantenimiento técnico de la infraestructura</li>
            <li>Soporte técnico continuo</li>
            <li>Resolución de dudas y problemas</li>
            <li>Ajustes y optimizaciones</li>
            <li>Actualizaciones automáticas del sistema</li>
            <li>Mejoras continuas</li>
            <li>Acceso ininterrumpido al servicio</li>
            <li>Garantía de estabilidad y disponibilidad</li>
          </ul>
          <p className={paragraph}><strong className="text-navy">Inicio de facturación:</strong> Los pagos mensuales inician después del primer mes incluido en el pago inicial.</p>
          <p className={paragraph}><strong className="text-navy">Nota:</strong> AIPEC funciona como un servicio continuo que requiere mantenimiento, soporte y actualizaciones constantes. No es posible contratar únicamente el desarrollo sin mantenimiento mensual.</p>

          <h3 className={`${subSectionTitle} text-navy`}>3.2 Servicios con Costo Adicional (Opcionales)</h3>
          <p className={paragraph}>Los siguientes servicios tienen un costo adicional a los pagos de desarrollo y soporte mensual:</p>

          <h4 className={`${subSubSectionTitle} text-navy`}>3.2.1 Guías Ilustrativas</h4>
          <p className={paragraph}>Guías prácticas impresas personalizadas sobre el uso de la infraestructura AIPEC.</p>
          <p className="mb-2 font-semibold text-navy">Características:</p>
          <ul className={list}>
            <li>Personalizadas por roles (directivos, docentes, estudiantes, padres)</li>
            <li>Material diseñado específicamente para la institución</li>
            <li>Formato digital e impreso (según solicitud)</li>
            <li>Precio variable según la cantidad solicitada</li>
          </ul>

          <h4 className={`${subSubSectionTitle} text-navy`}>3.2.2 Capacitación Presencial</h4>
          <p className={paragraph}>Capacitación en las instalaciones de la institución educativa.</p>
          <p className={paragraph}><strong className="text-navy">Nota importante:</strong> La capacitación virtual está incluida en el servicio sin costo adicional. Solo la modalidad presencial tiene costo extra.</p>
          <p className="mb-2 font-semibold text-navy">Características:</p>
          <ul className={list}>
            <li>Disponible para instituciones en Colombia</li>
            <li>Precio variable según la distancia desde nuestras oficinas en el departamento de Sucre</li>
            <li>Capacitación por roles (directivos, docentes, estudiantes, padres)</li>
            <li>Sesiones prácticas y demostrativas</li>
            <li>Material de apoyo incluido</li>
            <li>Seguimiento post-capacitación</li>
          </ul>

          <h3 className={`${subSectionTitle} text-navy`}>3.3 Forma de Pago</h3>
          <p className={paragraph}>Cailico facturará los valores correspondientes por los medios de pago acordados con la institución. La institución expresamente autoriza el débito o cargo por concepto del pago inicial y los pagos mensuales según el método acordado.</p>

          <h3 className={`${subSectionTitle} text-navy`}>3.4 Renovación Automática</h3>
          <p className={paragraph}>La institución reconoce y acepta que la suscripción al servicio AIPEC será renovada de manera automática mensualmente. Por lo tanto, la institución acepta que Cailico realice el débito automático o facturación mensual según el método de pago acordado.</p>

          <h3 className={`${subSectionTitle} text-navy`}>3.5 Responsabilidad de Pago</h3>
          <p className={paragraph}>La institución es responsable de mantener disponibilidad de recursos o fondos para que los pagos a Cailico puedan ser procesados adecuadamente. Los pagos realizados no son reembolsables salvo por lo establecido en la ley colombiana.</p>

          <h3 className={`${subSectionTitle} text-navy`}>3.6 Mora en el Pago</h3>
          <p className={paragraph}>En caso de que por algún motivo Cailico no pueda realizar el cobro mensual, la institución se compromete a regularizar el pago dentro de un tiempo máximo de quince (15) días calendario. Si después de transcurrido este tiempo el pago no ha sido realizado:</p>
          <ul className={list}>
            <li>El acceso a la infraestructura AIPEC podrá ser bloqueado temporalmente</li>
            <li>Los servicios podrán ser suspendidos hasta confirmación del pago</li>
            <li>Si la institución no realiza el pago en un periodo de dos (2) meses calendario o incurre en mora en más de tres (3) ocasiones en los últimos doce meses, Cailico podrá cancelar definitivamente el servicio</li>
          </ul>

          <h3 className={`${subSectionTitle} text-navy`}>3.7 Modificación de Precios</h3>
          <p className={paragraph}>Cailico se reserva el derecho de modificar, cambiar, agregar o eliminar el valor de los servicios ofrecidos en cualquier momento, lo cual será notificado a la institución con treinta (30) días de anticipación por WhatsApp, correo electrónico o el medio que Cailico estime conveniente.</p>

          {/* 4 */}
          <h2 className={`${sectionTitle} text-navy`}>4. Política de Cancelación y Terminación</h2>

          <h3 className={`${subSectionTitle} text-navy`}>4.1 Cancelación por parte de la Institución</h3>
          <p className={paragraph}>La institución podrá solicitar la terminación del servicio en cualquier momento mediante notificación escrita a Cailico.</p>
          <p className="mb-2 font-semibold text-navy">Condiciones:</p>
          <ul className={list}>
            <li>Los servicios estarán disponibles hasta el último día del mes en curso</li>
            <li>No se generarán cobros adicionales después de la fecha de cancelación</li>
            <li>La institución reconoce y acepta que Cailico NO reembolsará el dinero pagado por el mes en curso ni por servicios ya prestados</li>
            <li>El pago inicial <strong className="text-navy">NO es reembolsable</strong> bajo ninguna circunstancia</li>
          </ul>

          <h3 className={`${subSectionTitle} text-navy`}>4.2 Cancelación por parte de Cailico</h3>
          <p className={paragraph}>Cailico podrá cancelar el servicio de manera inmediata en los siguientes casos:</p>
          <ul className={list}>
            <li>Incumplimiento de los presentes Términos y Condiciones</li>
            <li>Uso indebido o fraudulento de la infraestructura</li>
            <li>Mora en el pago según lo establecido en la sección 3.6</li>
            <li>Proporcionar información falsa o fraudulenta</li>
            <li>Uso de la infraestructura para actividades ilegales</li>
            <li>Violación de derechos de terceros o de los titulares de datos personales</li>
          </ul>

          <h3 className={`${subSectionTitle} text-navy`}>4.3 Efectos de la Terminación</h3>
          <p className={paragraph}>Al terminar el servicio, la institución perderá acceso a:</p>
          <ul className={list}>
            <li>El Agente de WhatsApp personalizado</li>
            <li>La Plataforma de Notas</li>
            <li>Todas las funcionalidades de AIPEC</li>
            <li>El soporte técnico</li>
          </ul>
          <p className={paragraph}><strong className="text-navy">Importante:</strong> Cailico se compromete a proporcionar a la institución una copia de los datos almacenados en un formato estándar (CSV o similar) dentro de los treinta (30) días siguientes a la terminación del servicio, siempre y cuando no existan pagos pendientes.</p>
          <p className={paragraph}>Los datos que se entregarán incluyen:</p>
          <ul className={list}>
            <li>Información completa de estudiantes (nombres, grados, materias cursadas)</li>
            <li>Calificaciones y notas registradas</li>
            <li>Actividades académicas creadas</li>
            <li>Asignación académica de profesores</li>
            <li>Estructura de grados y grupos</li>
            <li>Cualquier otro dato académico registrado en AIPEC</li>
          </ul>

          {/* 5 */}
          <h2 className={`${sectionTitle} text-navy`}>5. Responsabilidades y Deberes de la Institución</h2>

          <h3 className={`${subSectionTitle} text-navy`}>5.1 Confidencialidad de Accesos</h3>
          <p className={paragraph}>La institución es la única responsable de mantener la confidencialidad de las credenciales de acceso a la Plataforma de Notas y de restringir el acceso desde sus dispositivos. La institución es absolutamente responsable de las actividades que ocurran bajo sus cuentas de acceso.</p>
          <p className={paragraph}>La institución se compromete a notificar de forma inmediata a Cailico sobre cualquier uso indebido, robo, extravío o acceso no autorizado a cuentas y contraseñas, con el fin de proceder a su inmediata cancelación.</p>

          <h3 className={`${subSectionTitle} text-navy`}>5.2 Uso Adecuado de la Infraestructura</h3>
          <p className={paragraph}>La institución se compromete a:</p>
          <ul className={list}>
            <li>Utilizar la infraestructura AIPEC de acuerdo con la forma en la que fue diseñada</li>
            <li>No utilizar software que automatice de manera no autorizada la interacción con los sistemas</li>
            <li>Utilizar la información de manera lícita, sin contravenir estos Términos y Condiciones, la moral y el orden público</li>
            <li>Abstenerse de realizar actos que puedan afectar los derechos de terceros o perjudicar el funcionamiento de AIPEC</li>
            <li>No copiar, reproducir, modificar o distribuir el software o componentes de AIPEC sin autorización escrita de Cailico</li>
          </ul>

          <h3 className={`${subSectionTitle} text-navy`}>5.3 Protección de Datos Personales</h3>
          <p className={paragraph}>La institución, en calidad de Responsable del Tratamiento de Datos Personales, se obliga a:</p>
          <ul className={list}>
            <li>Contar con autorización previa, expresa e informada de los titulares de los datos personales (estudiantes, padres, profesores) para el tratamiento de su información</li>
            <li>Informar a los titulares que sus datos serán tratados por Cailico en calidad de Encargado del Tratamiento</li>
            <li>Incluir en las autorizaciones las finalidades relacionadas con el uso de AIPEC</li>
            <li>Mantener actualizada la información de los titulares</li>
            <li>Informar a Cailico sobre actualizaciones, rectificaciones, revocatorias o solicitudes de supresión de datos</li>
            <li>Conservar prueba de las autorizaciones otorgadas</li>
            <li>Recolectar los datos de manera lícita y consentida conforme a la Ley 1581 de 2012 y normas aplicables</li>
            <li>Cumplir con todas las obligaciones establecidas en la legislación colombiana sobre protección de datos personales</li>
          </ul>

          <h3 className={`${subSectionTitle} text-navy`}>5.4 Deberes Generales</h3>
          <p className={paragraph}>La institución declara que cumplirá con los siguientes deberes:</p>
          <ul className={list}>
            <li>No perjudicar el funcionamiento de la infraestructura ni intentar dañarla</li>
            <li>No intentar acceder a áreas restringidas o información confidencial de Cailico</li>
            <li>Cumplir con toda la legislación colombiana aplicable</li>
            <li>Cumplir con todas las obligaciones de estos Términos y Condiciones</li>
            <li>Capacitar a su personal en el uso adecuado de AIPEC</li>
            <li>Reportar cualquier incidente de seguridad o mal funcionamiento</li>
          </ul>

          <h3 className={`${subSectionTitle} text-navy`}>5.5 Consecuencias del Incumplimiento</h3>
          <p className={paragraph}>Cailico se reserva el derecho de terminar inmediatamente el servicio en caso de que la institución incumpla alguna de las reglas y obligaciones establecidas en estos Términos y Condiciones.</p>

          {/* 6 */}
          <h2 className={`${sectionTitle} text-navy`}>6. Restricciones del Usuario</h2>

          <h3 className={`${subSectionTitle} text-navy`}>6.1 Limitaciones de Uso</h3>
          <p className={paragraph}>Los derechos otorgados a la institución para el uso de AIPEC están sujetos a las siguientes restricciones:</p>
          <p className={paragraph}>El derecho de uso es:</p>
          <ul className={list}>
            <li><strong className="text-navy">Intransferible:</strong> No puede cederse a terceros</li>
            <li><strong className="text-navy">Revocable:</strong> Cailico puede revocarlo por incumplimiento</li>
            <li><strong className="text-navy">No exclusivo:</strong> Cailico puede ofrecer el servicio a otras instituciones</li>
            <li><strong className="text-navy">Limitado:</strong> Solo para los fines educativos y de gestión académica</li>
          </ul>

          <h3 className={`${subSectionTitle} text-navy`}>6.2 Acciones Prohibidas</h3>
          <p className={paragraph}>La institución NO puede ni debe permitir a terceros realizar ninguna de las siguientes acciones:</p>
          <ul className={list}>
            <li>Acceder o supervisar información de los sistemas de Cailico usando medios automatizados no autorizados (robots, scrapers, etc.)</li>
            <li>Descompilar, desensamblar o aplicar ingeniería inversa a AIPEC o sus componentes</li>
            <li>Intentar descubrir el código fuente o estructura de la infraestructura</li>
            <li>Realizar acciones que interfieran con el funcionamiento de AIPEC</li>
            <li>Copiar, reproducir, modificar, crear trabajos derivados o distribuir AIPEC o sus componentes</li>
            <li>Transferir los derechos otorgados a terceros sin autorización escrita de Cailico</li>
            <li>Utilizar AIPEC para actividades ilegales</li>
            <li>Utilizar la infraestructura para causar daño moral o patrimonial a terceros</li>
            <li>Utilizar la infraestructura para usurpar identidades</li>
            <li>Intentar obtener acceso no autorizado a información confidencial</li>
          </ul>

          <h3 className={`${subSectionTitle} text-navy`}>6.3 Reporte de Uso Indebido</h3>
          <p className={paragraph}>En caso de que Cailico sospeche razonablemente que la infraestructura se ha utilizado para un fin no autorizado, ilícito o delictivo, la institución autoriza expresamente a Cailico para compartir información con las autoridades competentes.</p>

          <h3 className={`${subSectionTitle} text-navy`}>6.4 Terminación por Incumplimiento</h3>
          <p className={paragraph}>Cailico se reserva el derecho a terminar inmediatamente el servicio en caso de incumplimiento de las restricciones establecidas.</p>

          {/* 7 */}
          <h2 className={`${sectionTitle} text-navy`}>7. Disponibilidad y Limitaciones Técnicas</h2>

          <h3 className={`${subSectionTitle} text-navy`}>7.1 Disponibilidad del Servicio</h3>
          <p className={paragraph}>Cailico hará sus mejores esfuerzos para mantener la infraestructura AIPEC disponible de manera continua. Sin embargo, pueden existir interrupciones por:</p>
          <ul className={list}>
            <li>Mantenimiento programado (notificado con anticipación)</li>
            <li>Actualizaciones del sistema</li>
            <li>Circunstancias de fuerza mayor</li>
            <li>Problemas con servicios de terceros (WhatsApp, proveedores de internet, etc.)</li>
          </ul>

          <h3 className={`${subSectionTitle} text-navy`}>7.2 Requisitos Técnicos</h3>
          <p className={paragraph}>Para utilizar AIPEC, la institución y sus usuarios deben contar con:</p>
          <ul className={list}>
            <li>Conexión a internet estable</li>
            <li>Navegador web actualizado (para la Plataforma de Notas)</li>
            <li>WhatsApp activo (para el Agente de WhatsApp)</li>
            <li>Dispositivos compatibles (computadores, tablets, smartphones)</li>
          </ul>
          <p className={paragraph}>Cada usuario es responsable de la adquisición y mantenimiento del hardware y conectividad necesarios.</p>

          <h3 className={`${subSectionTitle} text-navy`}>7.3 Limitaciones de Responsabilidad Técnica</h3>
          <p className={paragraph}><strong className="text-navy">Cailico NO garantiza que:</strong></p>
          <ul className={list}>
            <li>La infraestructura esté libre de errores en todo momento</li>
            <li>No habrá interrupciones del servicio</li>
            <li>Los servicios de terceros (WhatsApp, internet) funcionen sin problemas</li>
          </ul>
          <p className={paragraph}><strong className="text-navy">Cailico no se responsabiliza por:</strong></p>
          <ul className={list}>
            <li>Daños causados por uso inadecuado de la infraestructura</li>
            <li>Pérdidas derivadas de interrupciones del servicio</li>
            <li>Problemas causados por servicios de terceros fuera de su control</li>
            <li>Daños en equipos de los usuarios</li>
            <li>Pérdida de información causada por el usuario</li>
          </ul>

          {/* 8 */}
          <h2 className={`${sectionTitle} text-navy`}>8. Propiedad Intelectual y Derechos de Autor</h2>

          <h3 className={`${subSectionTitle} text-navy`}>8.1 Propiedad de Cailico</h3>
          <p className={paragraph}>La institución reconoce y acepta que todos los derechos de propiedad intelectual sobre AIPEC, incluyendo pero no limitándose a:</p>
          <ul className={list}>
            <li>Software y código fuente</li>
            <li>Diseños y arquitectura de sistemas</li>
            <li>Algoritmos de inteligencia artificial</li>
            <li>Logos y marcas de Cailico</li>
            <li>Documentación técnica</li>
            <li>Metodologías y procesos</li>
          </ul>
          <p className={paragraph}>Pertenecen exclusivamente a Cailico SAS o a sus proveedores de tecnología.</p>

          <h3 className={`${subSectionTitle} text-navy`}>8.2 Limitaciones de Uso</h3>
          <p className={paragraph}>La institución acepta que:</p>
          <ul className={list}>
            <li>No adquiere ningún derecho de propiedad sobre AIPEC</li>
            <li>No está autorizada para reproducir, ceder, vender, alquilar o prestar componentes de AIPEC</li>
            <li>No puede divulgar, publicar o poner a disposición de terceros la infraestructura o sus componentes</li>
            <li>El uso está limitado a los fines establecidos en estos Términos y Condiciones</li>
          </ul>

          <h3 className={`${subSectionTitle} text-navy`}>8.3 Propiedad de los Datos</h3>
          <p className={paragraph}>Los datos ingresados por la institución en AIPEC (información de estudiantes, calificaciones, actividades, etc.) son y seguirán siendo propiedad de la institución. Cailico actúa únicamente como Encargado del Tratamiento de dichos datos.</p>

          {/* 9 */}
          <h2 className={`${sectionTitle} text-navy`}>9. Modificaciones, Suspensión y Notificaciones</h2>

          <h3 className={`${subSectionTitle} text-navy`}>9.1 Modificaciones a los Términos y Condiciones</h3>
          <p className={paragraph}>Cailico se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Cuando se realice una modificación:</p>
          <ol className={orderedList}>
            <li>Cailico publicará la versión actualizada en su sitio web</li>
            <li>Notificará a las instituciones mediante:
              <ul className={nestedList}>
                <li>WhatsApp al número registrado</li>
                <li>Correo electrónico (cuando esté disponible)</li>
                <li>Notificación en la Plataforma de Notas</li>
              </ul>
            </li>
            <li>La versión actualizada entrará en vigencia treinta (30) días después de su publicación</li>
            <li>El uso continuo de AIPEC después de la fecha de vigencia constituye aceptación de la versión actualizada</li>
          </ol>
          <p className={paragraph}>Si la institución no está de acuerdo con las modificaciones, podrá cancelar el servicio conforme a la sección 4.1.</p>

          <h3 className={`${subSectionTitle} text-navy`}>9.2 Modificaciones al Servicio</h3>
          <p className={paragraph}>Cailico se reserva el derecho de:</p>
          <ul className={list}>
            <li>Modificar el diseño y presentación de AIPEC</li>
            <li>Añadir nuevas funcionalidades</li>
            <li>Modificar o eliminar funcionalidades existentes (notificando con anticipación)</li>
            <li>Actualizar la tecnología utilizada</li>
          </ul>
          <p className={paragraph}>Estas modificaciones buscan mejorar el servicio y se realizarán procurando minimizar el impacto en las instituciones.</p>

          <h3 className={`${subSectionTitle} text-navy`}>9.3 Notificaciones</h3>
          <p className={paragraph}>Todas las comunicaciones oficiales de Cailico hacia la institución se realizarán mediante:</p>
          <ul className={list}>
            <li>WhatsApp al número registrado</li>
            <li>Correo electrónico (cuando esté disponible)</li>
            <li>Notificaciones en la Plataforma de Notas</li>
          </ul>
          <p className={paragraph}>La institución es responsable de mantener actualizada su información de contacto.</p>
          <p className={paragraph}>Se considera que la institución ha recibido una notificación dentro de las veinticuatro (24) horas desde que fue enviada. Si la información de contacto proporcionada no es válida, el envío de la notificación constituirá igualmente una notificación efectiva.</p>

          {/* 10 */}
          <h2 className={`${sectionTitle} text-navy`}>10. Soporte y Atención al Cliente</h2>

          <h3 className={`${subSectionTitle} text-navy`}>10.1 Canales de Soporte</h3>
          <p className={paragraph}>Cailico proporciona soporte técnico y atención al cliente a través de:</p>
          <ul className={list}>
            <li><strong className="text-navy">WhatsApp:</strong> (+57) 301 624 1863</li>
            <li><strong className="text-navy">Correo electrónico:</strong> contacto@cailico.com</li>
            <li><strong className="text-navy">Formulario web:</strong> Disponible en el sitio web de Cailico</li>
          </ul>

          <h3 className={`${subSectionTitle} text-navy`}>10.2 Horarios de Atención</h3>
          <p className={paragraph}>El soporte está disponible en días y horarios hábiles comerciales en Colombia. Las consultas recibidas fuera de este horario serán atendidas en el siguiente día hábil.</p>

          <h3 className={`${subSectionTitle} text-navy`}>10.3 Tipos de Soporte</h3>
          <p className="mb-2 font-semibold text-navy">Incluido en el servicio:</p>
          <ul className={list}>
            <li>Soporte técnico para problemas de funcionamiento</li>
            <li>Resolución de dudas sobre el uso de AIPEC</li>
            <li>Asistencia en configuraciones básicas</li>
            <li>Reportes de incidentes</li>
          </ul>
          <p className="mb-2 font-semibold text-navy">No incluido:</p>
          <ul className={list}>
            <li>Capacitación adicional más allá de la inicial</li>
            <li>Consultoría para procesos educativos no relacionados con AIPEC</li>
            <li>Soporte para problemas causados por terceros (internet, dispositivos, WhatsApp)</li>
          </ul>

          <h3 className={`${subSectionTitle} text-navy`}>10.4 Tiempo de Respuesta</h3>
          <p className={paragraph}>Cailico hará sus mejores esfuerzos para responder las consultas en un tiempo razonable, generalmente dentro de las veinticuatro (24) horas hábiles. El tiempo de resolución dependerá de la complejidad del problema.</p>

          {/* 11 */}
          <h2 className={`${sectionTitle} text-navy`}>11. Tratamiento de Datos Personales</h2>

          <h3 className={`${subSectionTitle} text-navy`}>11.1 Roles en el Tratamiento de Datos</h3>
          <p className={paragraph}>En la relación contractual establecida:</p>
          <ul className={list}>
            <li><strong className="text-navy">La Institución</strong> actúa como <strong className="text-navy">Responsable del Tratamiento</strong> de los datos personales de estudiantes, padres, profesores y demás miembros de su comunidad educativa</li>
            <li><strong className="text-navy">Cailico</strong> actúa como <strong className="text-navy">Encargado del Tratamiento</strong> de dichos datos personales</li>
          </ul>

          <h3 className={`${subSectionTitle} text-navy`}>11.2 Finalidades del Tratamiento</h3>
          <p className={paragraph}>Cailico tratará los datos personales proporcionados por la institución únicamente para las siguientes finalidades:</p>

          <p className="mb-2 font-semibold text-navy">Funcionamiento del Agente de WhatsApp:</p>
          <ul className={list}>
            <li>Envío de comunicados institucionales personalizados</li>
            <li>Envío de notificaciones de calificaciones a padres de familia</li>
            <li>Envío de recordatorios de actividades académicas</li>
            <li>Consulta de información de estudiantes y profesores</li>
            <li>Filtrado de actividades por grado, grupo y estudiante</li>
          </ul>

          <p className="mb-2 font-semibold text-navy">Funcionamiento de la Plataforma de Notas:</p>
          <ul className={list}>
            <li>Gestión de calificaciones por estudiante, materia y período</li>
            <li>Registro y visualización de actividades académicas</li>
            <li>Asignación de materias a profesores</li>
            <li>Organización de estudiantes por grados y grupos</li>
            <li>Generación de reportes académicos individuales y grupales</li>
          </ul>

          <p className="mb-2 font-semibold text-navy">Gestión académica:</p>
          <ul className={list}>
            <li>Vinculación de estudiantes con sus materias cursadas</li>
            <li>Vinculación de profesores con su asignación académica</li>
            <li>Identificación de estudiantes dentro de sus grados y grupos</li>
            <li>Relación de padres de familia con sus estudiantes (hasta 3 por padre)</li>
          </ul>

          <p className="mb-2 font-semibold text-navy">Generación de estadísticas académicas institucionales:</p>
          <ul className={list}>
            <li>Rendimiento por estudiante, grado, grupo y materia</li>
            <li>Análisis del desempeño académico institucional</li>
            <li>Reportes de rendimiento por profesor</li>
          </ul>

          <p className="mb-2 font-semibold text-navy">Comunicación personalizada:</p>
          <ul className={list}>
            <li>Envío de notificaciones a padres sobre el rendimiento de sus estudiantes específicos</li>
            <li>Recordatorios de actividades filtrados por grado y materia</li>
            <li>Comunicados segmentados por nivel, grado o grupo</li>
          </ul>

          <p className="mb-2 font-semibold text-navy">Operación técnica:</p>
          <ul className={list}>
            <li>Soporte técnico y resolución de incidentes</li>
            <li>Mejora del servicio AIPEC</li>
            <li>Respaldos y recuperación de información</li>
          </ul>

          <h4 className={`${subSubSectionTitle} text-navy`}>11.2.1 Tipos de Datos Personales Tratados</h4>
          <p className={paragraph}>Para el cumplimiento de las finalidades descritas, Cailico tratará las siguientes categorías de datos personales:</p>

          <p className="mb-2 font-semibold text-navy">De Estudiantes:</p>
          <ul className={list}>
            <li>Nombres completos</li>
            <li>Número de identificación</li>
            <li>Grado y grupo académico</li>
            <li>Materias cursadas</li>
            <li>Calificaciones y notas académicas</li>
            <li>Actividades asignadas</li>
            <li>Asistencia (si aplica)</li>
          </ul>

          <p className="mb-2 font-semibold text-navy">De Padres de Familia:</p>
          <ul className={list}>
            <li>Nombres completos</li>
            <li>Números de teléfono (WhatsApp)</li>
            <li>Relación con estudiantes (parentesco)</li>
            <li>Vinculación con hasta 3 estudiantes</li>
          </ul>

          <p className="mb-2 font-semibold text-navy">De Profesores:</p>
          <ul className={list}>
            <li>Nombres completos</li>
            <li>Números de contacto</li>
            <li>Materias que imparten</li>
            <li>Grados y grupos asignados</li>
            <li>Asignación académica completa</li>
            <li>Calificaciones registradas</li>
          </ul>

          <p className="mb-2 font-semibold text-navy">De Directivos:</p>
          <ul className={list}>
            <li>Nombres completos</li>
            <li>Cargo institucional</li>
            <li>Información de contacto</li>
            <li>Accesos y permisos administrativos</li>
          </ul>

          <h3 className={`${subSectionTitle} text-navy`}>11.3 Obligaciones de Cailico como Encargado</h3>
          <p className={paragraph}>Cailico se compromete a:</p>
          <ul className={list}>
            <li>Tratar los datos únicamente según las instrucciones de la institución y las finalidades establecidas</li>
            <li>Implementar medidas de seguridad técnicas y administrativas para proteger los datos</li>
            <li>Guardar estricta confidencialidad sobre los datos tratados</li>
            <li>No utilizar los datos para fines propios o de terceros</li>
            <li>Facilitar el ejercicio de los derechos de los titulares (acceso, rectificación, supresión)</li>
            <li>Notificar a la institución sobre cualquier incidente de seguridad</li>
            <li>Eliminar o devolver los datos al finalizar el servicio, según lo acordado</li>
          </ul>

          <h3 className={`${subSectionTitle} text-navy`}>11.4 Obligaciones de la Institución como Responsable</h3>
          <p className={paragraph}>La institución se compromete a:</p>
          <ul className={list}>
            <li>Obtener las autorizaciones necesarias de los titulares de los datos</li>
            <li>Informar a los titulares que Cailico tratará sus datos</li>
            <li>Proporcionar información veraz y actualizada</li>
            <li>Atender las solicitudes de los titulares (acceso, rectificación, supresión)</li>
            <li>Informar a Cailico sobre cambios en las autorizaciones</li>
            <li>Cumplir con la Ley 1581 de 2012 y normas aplicables</li>
          </ul>

          <h3 className={`${subSectionTitle} text-navy`}>11.5 Política de Privacidad</h3>
          <p className={paragraph}>El tratamiento de datos personales por parte de Cailico se rige por la Política de Privacidad y Tratamiento de Datos Personales de Cailico SAS, la cual complementa estos Términos y Condiciones.</p>
          <p className={paragraph}>La institución y sus usuarios deben familiarizarse con dicha Política de Privacidad, disponible en el sitio web de Cailico.</p>

          {/* 12 */}
          <h2 className={`${sectionTitle} text-navy`}>12. Indemnidad y Limitación de Responsabilidad</h2>

          <h3 className={`${subSectionTitle} text-navy`}>12.1 Indemnidad</h3>
          <p className={paragraph}>La institución exonera de toda responsabilidad a Cailico y se obliga a mantener indemne a Cailico, sus empleados, directores y representantes de cualquier reclamo, costo, pérdida, daño o proceso legal que surja de o se relacione con:</p>
          <ul className={list}>
            <li>Incumplimiento de estos Términos y Condiciones por parte de la institución</li>
            <li>Uso indebido de la infraestructura AIPEC</li>
            <li>Violación de derechos de terceros o de titulares de datos personales</li>
            <li>Violación de leyes, normas o regulaciones aplicables</li>
            <li>Información falsa o inexacta proporcionada por la institución</li>
            <li>Acciones de usuarios de la institución (profesores, estudiantes, padres)</li>
            <li>Incumplimiento de obligaciones sobre protección de datos personales</li>
          </ul>

          <h3 className={`${subSectionTitle} text-navy`}>12.2 Limitación de Responsabilidad de Cailico</h3>
          <p className="mb-2 font-semibold text-navy">Cailico NO será responsable por:</p>
          <ul className={list}>
            <li>Decisiones académicas o administrativas tomadas por la institución basándose en información de AIPEC</li>
            <li>Daños indirectos, incidentales o consecuenciales derivados del uso de AIPEC</li>
            <li>Pérdida de datos causada por acciones del usuario</li>
            <li>Interrupciones del servicio causadas por terceros (WhatsApp, proveedores de internet, etc.)</li>
            <li>Fallas en servicios de terceros integrados</li>
            <li>Daños causados por fuerza mayor o caso fortuito</li>
            <li>Uso inadecuado de la infraestructura por parte de la institución</li>
          </ul>
          <p className={paragraph}><strong className="text-navy">Responsabilidad máxima de Cailico:</strong> En caso de que Cailico sea declarado responsable por algún daño, su responsabilidad estará limitada al valor total pagado por la institución en los últimos tres (3) meses de servicio.</p>

          <h3 className={`${subSectionTitle} text-navy`}>12.3 Naturaleza Informativa del Servicio</h3>
          <p className={paragraph}>La institución reconoce que AIPEC es una herramienta tecnológica de apoyo para la gestión educativa. La responsabilidad final sobre las decisiones académicas, administrativas y pedagógicas recae exclusivamente en la institución.</p>

          {/* 13 */}
          <h2 className={`${sectionTitle} text-navy`}>13. Fuerza Mayor y Caso Fortuito</h2>
          <p className={paragraph}>Ninguna de las partes será responsable por el incumplimiento de sus obligaciones cuando dicho incumplimiento sea causado por eventos de fuerza mayor o caso fortuito, incluyendo pero no limitándose a:</p>
          <ul className={list}>
            <li>Desastres naturales (terremotos, inundaciones, incendios)</li>
            <li>Actos de guerra, terrorismo o disturbios civiles</li>
            <li>Huelgas o paros laborales</li>
            <li>Fallas en servicios públicos (electricidad, internet)</li>
            <li>Pandemias o emergencias sanitarias</li>
            <li>Actos de gobierno o autoridades</li>
            <li>Fallas masivas en servicios de terceros críticos (WhatsApp, proveedores de infraestructura)</li>
          </ul>
          <p className={paragraph}>En caso de fuerza mayor, la parte afectada deberá notificar a la otra parte lo antes posible y hacer sus mejores esfuerzos para mitigar los efectos y reanudar el cumplimiento de sus obligaciones.</p>

          {/* 14 */}
          <h2 className={`${sectionTitle} text-navy`}>14. Resolución de Controversias</h2>

          <h3 className={`${subSectionTitle} text-navy`}>14.1 Negociación Directa</h3>
          <p className={paragraph}>Antes de iniciar cualquier procedimiento legal o arbitral, las partes se comprometen a intentar resolver cualquier controversia relacionada con estos Términos y Condiciones mediante negociación directa y de buena fe durante un período de treinta (30) días calendario.</p>

          <h3 className={`${subSectionTitle} text-navy`}>14.2 Jurisdicción y Ley Aplicable</h3>
          <p className={paragraph}>Estos Términos y Condiciones se rigen por las leyes de la República de Colombia.</p>

          <h3 className={`${subSectionTitle} text-navy`}>14.3 Arbitraje</h3>
          <p className={paragraph}>Si las controversias no pueden resolverse mediante negociación directa, serán sometidas a arbitraje conforme a las siguientes reglas:</p>
          <ul className={list}>
            <li><strong className="text-navy">Centro de Arbitraje:</strong> Centro de Arbitraje y Conciliación de la Cámara de Comercio competente en el lugar de domicilio de la institución educativa, o en su defecto, de Sincelejo, Sucre</li>
            <li><strong className="text-navy">Número de árbitros:</strong> Un (1) árbitro designado de común acuerdo por las partes, o en su defecto, por el Centro de Arbitraje</li>
            <li><strong className="text-navy">Tipo de arbitraje:</strong> En derecho</li>
            <li><strong className="text-navy">Sede del tribunal:</strong> Las instalaciones del Centro de Arbitraje correspondiente</li>
          </ul>

          {/* 15 */}
          <h2 className={`${sectionTitle} text-navy`}>15. Confidencialidad</h2>

          <h3 className={`${subSectionTitle} text-navy`}>15.1 Información Confidencial</h3>
          <p className={paragraph}>Ambas partes reconocen que durante la ejecución del servicio pueden tener acceso a información confidencial de la otra parte, incluyendo pero no limitándose a:</p>
          <p className="mb-2 font-semibold text-navy">De la Institución:</p>
          <ul className={list}>
            <li>Datos personales de la comunidad educativa</li>
            <li>Información académica</li>
            <li>Políticas y procedimientos internos</li>
            <li>Información financiera</li>
          </ul>
          <p className="mb-2 font-semibold text-navy">De Cailico:</p>
          <ul className={list}>
            <li>Tecnología y metodologías propietarias</li>
            <li>Código fuente y algoritmos</li>
            <li>Estrategias comerciales</li>
            <li>Información técnica de AIPEC</li>
          </ul>

          <h3 className={`${subSectionTitle} text-navy`}>15.2 Obligaciones de Confidencialidad</h3>
          <p className={paragraph}>Ambas partes se comprometen a:</p>
          <ul className={list}>
            <li>Mantener confidencial la información recibida</li>
            <li>No divulgarla a terceros sin autorización escrita</li>
            <li>Utilizarla únicamente para los fines del servicio</li>
            <li>Protegerla con medidas de seguridad razonables</li>
            <li>Mantener la confidencialidad incluso después de terminado el servicio</li>
          </ul>

          <h3 className={`${subSectionTitle} text-navy`}>15.3 Excepciones</h3>
          <p className={paragraph}>No se considerará violación de confidencialidad cuando:</p>
          <ul className={list}>
            <li>La información sea de dominio público</li>
            <li>La información deba revelarse por orden de autoridad competente</li>
            <li>La información sea necesaria para cumplir con obligaciones legales</li>
          </ul>

          {/* 16 */}
          <h2 className={`${sectionTitle} text-navy`}>16. Disposiciones Generales</h2>

          <h3 className={`${subSectionTitle} text-navy`}>16.1 Acuerdo Completo</h3>
          <p className={paragraph}>Estos Términos y Condiciones, junto con la Política de Privacidad de Cailico, constituyen el acuerdo completo entre las partes respecto al uso de AIPEC y reemplazan cualquier acuerdo previo.</p>

          <h3 className={`${subSectionTitle} text-navy`}>16.2 Divisibilidad</h3>
          <p className={paragraph}>Si alguna disposición de estos Términos y Condiciones es declarada inválida o inexigible, las demás disposiciones permanecerán en pleno vigor y efecto.</p>

          <h3 className={`${subSectionTitle} text-navy`}>16.3 Renuncia</h3>
          <p className={paragraph}>La falta de ejercicio o el retraso en el ejercicio de cualquier derecho bajo estos Términos y Condiciones no constituirá una renuncia a dicho derecho.</p>

          <h3 className={`${subSectionTitle} text-navy`}>16.4 Cesión</h3>
          <p className={paragraph}>La institución no podrá ceder sus derechos u obligaciones bajo estos Términos y Condiciones sin el consentimiento previo y escrito de Cailico. Cailico podrá ceder este acuerdo a cualquiera de sus afiliadas o en caso de fusión, adquisición o venta de activos.</p>

          <h3 className={`${subSectionTitle} text-navy`}>16.5 Idioma</h3>
          <p className={paragraph}>Estos Términos y Condiciones están redactados en español. En caso de existir traducciones, la versión en español prevalecerá.</p>

          <h3 className={`${subSectionTitle} text-navy`}>16.6 Títulos</h3>
          <p className={paragraph}>Los títulos de las secciones son únicamente para referencia y no afectan la interpretación de estos Términos y Condiciones.</p>

          {/* 17 */}
          <h2 className={`${sectionTitle} text-navy`}>17. Información de Contacto</h2>
          <p className={paragraph}>Para consultas, soporte o información sobre estos Términos y Condiciones, puede contactar a Cailico SAS a través de:</p>
          <ul className={list}>
            <li><strong className="text-navy">WhatsApp:</strong> (+57) 301 624 1863</li>
            <li><strong className="text-navy">Correo electrónico:</strong> contacto@cailico.com</li>
            <li><strong className="text-navy">Formulario web:</strong> Disponible en la sección COSTO del sitio web</li>
            <li><strong className="text-navy">Oficinas:</strong> Departamento de Sucre, Colombia</li>
          </ul>

          {/* 18 */}
          <h2 className={`${sectionTitle} text-navy`}>18. Aceptación de los Términos y Condiciones</h2>
          <p className={paragraph}>Al contratar el servicio AIPEC, la institución declara que:</p>
          <ol className={orderedList}>
            <li>Ha leído y comprendido estos Términos y Condiciones en su totalidad</li>
            <li>Acepta todos los términos y condiciones establecidos</li>
            <li>Tiene la capacidad legal para contratar en nombre de la institución</li>
            <li>Cuenta con las autorizaciones institucionales necesarias</li>
            <li>Se compromete a cumplir con todas las obligaciones establecidas</li>
          </ol>

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
              Este documento constituye un acuerdo legal vinculante. Por favor, consérvelo para su referencia.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsPage;
