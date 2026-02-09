import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sectionTitle = "text-2xl font-bold mt-10 mb-4";
const subSectionTitle = "text-xl font-semibold mt-8 mb-3";
const subSubSectionTitle = "text-lg font-semibold mt-6 mb-2";
const paragraph = "mb-4 leading-relaxed";
const list = "mb-4 ml-6 space-y-1 list-disc";
const orderedList = "mb-4 ml-6 space-y-1 list-decimal";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar loadingPhase="complete" forceBackground />

      <main className="pt-28 md:pt-36 pb-16" style={{ color: "#333" }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-6xl text-base">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center" style={{ color: "#333" }}>
            Política de Privacidad y Tratamiento de Datos Personales
          </h1>
          <p className="text-sm mb-10 text-center" style={{ color: "#666" }}>
            CAILICO SAS | Vigencia: Enero de 2026
          </p>
          {/* Intro highlight */}
          <div className="bg-orange/10 border-l-4 border-orange px-6 py-5 rounded-r-lg mb-8">
            <p className="font-semibold text-navy text-lg mb-2">¡Gracias por confiar en Cailico!</p>
            <p className="mb-0" style={{ color: "#444" }}>
              Su confianza es lo más importante para nosotros y estamos comprometidos en proteger la privacidad y la seguridad de sus datos personales. Contamos con un equipo dedicado que se compromete a proteger todos los datos personales que procesamos y a garantizar que los mismos se manejan correctamente conforme a la legislación colombiana.
            </p>
          </div>

          <p className={paragraph}>
            Por favor, lea atentamente nuestra Política de Privacidad y Tratamiento de Datos Personales (en adelante la "<strong className="text-navy">Política de Privacidad</strong>"). Para poder usar nuestra infraestructura AIPEC y recibir los servicios que prestamos es necesario que lea y acepte la presente Política de Privacidad, así como nuestros Términos y Condiciones.
          </p>

          {/* 1 */}
          <h2 className={`${sectionTitle} text-navy`}>1. Introducción y Objetivos</h2>
          <p className={paragraph}>
            Esta Política de Privacidad es el documento que regula el manejo de todas las bases de datos y/o archivos de Cailico SAS, que contengan datos personales de estudiantes, padres de familia, profesores, directivos, contratistas, proveedores y en general terceros, que sean objeto de tratamiento por parte de Cailico, en los eventos en los cuales se le considere como "<strong className="text-navy">Responsable</strong>" y/o "<strong className="text-navy">Encargado</strong>" del Tratamiento de dichos datos personales, conforme a las disposiciones de la Ley Estatutaria 1581 de 2012, el Decreto 1377 de 2013 y demás normas que en adelante las modifiquen y/o adicionen.
          </p>
          <p className={paragraph}>
            Asimismo, tiene como objetivo el establecer las políticas y procedimientos de la gestión y protección de información para Cailico alineadas con las mejores prácticas de seguridad de la información, con la finalidad de preservar la seguridad en el intercambio, transferencia o destrucción de información.
          </p>

          <h3 className={`${subSectionTitle} text-navy`}>1.1 Ámbito de Aplicación</h3>
          <p className={paragraph}>Esta Política de Privacidad aplica a:</p>
          <ul className={list}>
            <li>Instituciones educativas que contratan los servicios de Cailico</li>
            <li>Estudiantes cuyos datos son tratados a través de AIPEC</li>
            <li>Padres de familia cuyos datos son tratados a través de AIPEC</li>
            <li>Profesores y directivos cuyos datos son tratados a través de AIPEC</li>
            <li>Empleados y contratistas de Cailico</li>
            <li>Proveedores y aliados comerciales de Cailico</li>
            <li>Cualquier persona cuyos datos personales sean tratados por Cailico</li>
          </ul>

          {/* 2 */}
          <h2 className={`${sectionTitle} text-navy`}>2. Definiciones</h2>
          <ul className={list}>
            <li><strong className="text-navy">Autorización:</strong> Consentimiento previo, expreso e informado del Titular para llevar a cabo el Tratamiento de datos personales.</li>
            <li><strong className="text-navy">Aviso de Privacidad:</strong> Comunicación verbal o escrita dirigida a los Titulares de los datos personales que están siendo tratados por Cailico, en la cual se le informa acerca de la existencia de las políticas de tratamiento de datos personales que le serán aplicadas, la forma de acceder a las mismas y las finalidades para las cuales serán usados sus datos personales.</li>
            <li><strong className="text-navy">Base de Datos:</strong> Conjunto organizado de datos personales que sea objeto de Tratamiento.</li>
            <li><strong className="text-navy">AIPEC:</strong> Artificial Intelligence Powered Educational Communication. Infraestructura de inteligencia artificial desarrollada por Cailico para instituciones educativas, compuesta por el Agente de WhatsApp y la Plataforma de Notas.</li>
            <li><strong className="text-navy">Cailico:</strong> Cailico SAS, sociedad identificada con NIT 901697615-9, con domicilio en el departamento de Sucre, Colombia.</li>
            <li><strong className="text-navy">Datos Personales:</strong> Cualquier información vinculada o que pueda asociarse a una o varias personas naturales determinadas o determinables.</li>
            <li><strong className="text-navy">Datos Públicos:</strong> Dato calificado como tal según la ley o normatividad vigente. Son considerados datos públicos, entre otros, los datos relativos al estado civil de las personas, a su profesión u oficio y a su calidad de estudiante.</li>
            <li><strong className="text-navy">Datos Privados:</strong> Dato que por su naturaleza íntima o reservada solo es relevante para el Titular.</li>
            <li><strong className="text-navy">Datos Sensibles:</strong> Aquellos que afectan la intimidad del Titular o cuyo uso indebido puede generar su discriminación, tales como aquellos que revelen el origen racial o étnico, la orientación política, las convicciones religiosas o filosóficas, la pertenencia a sindicatos, organizaciones sociales, así como los datos relativos a la salud.</li>
            <li><strong className="text-navy">Encargado del Tratamiento:</strong> Persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, realice el Tratamiento de datos personales por cuenta del Responsable del Tratamiento.</li>
            <li><strong className="text-navy">Institución Educativa:</strong> Establecimiento educativo que contrata los servicios de AIPEC con Cailico.</li>
            <li><strong className="text-navy">Responsable del Tratamiento:</strong> Persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, decide sobre la base de datos y/o el Tratamiento de los datos.</li>
            <li><strong className="text-navy">Titular:</strong> Persona natural cuyos datos personales sean objeto de Tratamiento.</li>
            <li><strong className="text-navy">Tratamiento:</strong> Cualquier operación o conjunto de operaciones sobre datos personales, tales como la recolección, almacenamiento, uso, circulación o supresión de los mismos.</li>
            <li><strong className="text-navy">Transferencia:</strong> Envío de datos personales por parte del Responsable o Encargado del Tratamiento a un receptor ubicado dentro o fuera del país, que a su vez es Responsable del Tratamiento.</li>
            <li><strong className="text-navy">Transmisión:</strong> Tratamiento de datos personales que implica la comunicación de los mismos dentro o fuera del territorio de la República de Colombia cuando tenga por objeto la realización de un Tratamiento por el Encargado por cuenta del Responsable.</li>
          </ul>

          {/* 3 */}
          <h2 className={`${sectionTitle} text-navy`}>3. Identificación del Responsable y Encargado del Tratamiento</h2>

          <h3 className={`${subSectionTitle} text-navy`}>3.1 Identificación de Cailico</h3>
          <ul className={list}>
            <li><strong className="text-navy">Razón Social:</strong> Cailico SAS</li>
            <li><strong className="text-navy">NIT:</strong> 901697615-9</li>
            <li><strong className="text-navy">Domicilio:</strong> Departamento de Sucre, Colombia</li>
            <li><strong className="text-navy">Fundación:</strong> Corozal, Sucre, en el año 2023</li>
            <li><strong className="text-navy">CEO:</strong> Juan Sebastián Castillo</li>
            <li><strong className="text-navy">Contacto para protección de datos:</strong> WhatsApp (+57) 301 624 1863 / contacto@cailico.com</li>
            <li><strong className="text-navy">Sitio Web:</strong> www.cailico.com</li>
          </ul>

          <h3 className={`${subSectionTitle} text-navy`}>3.2 Rol de Cailico en el Tratamiento de Datos</h3>
          <p className={paragraph}>Cailico actúa en diferente calidad dependiendo del tipo de datos personales:</p>
          <p className="mb-2 font-semibold text-navy">Como Encargado del Tratamiento:</p>
          <p className={paragraph}>
            Cuando procesa datos personales de estudiantes, padres de familia, profesores y directivos que son proporcionados por las instituciones educativas para el funcionamiento de AIPEC. En este caso, la institución educativa actúa como Responsable del Tratamiento.
          </p>
          <p className="mb-2 font-semibold text-navy">Como Responsable del Tratamiento:</p>
          <p className={paragraph}>Cuando procesa datos personales de:</p>
          <ul className={list}>
            <li>Sus propios empleados y contratistas</li>
            <li>Representantes legales de las instituciones educativas clientes</li>
            <li>Proveedores y aliados comerciales</li>
          </ul>

          {/* 4 */}
          <h2 className={`${sectionTitle} text-navy`}>4. Tratamiento y Alcance de los Datos Personales</h2>

          <h3 className={`${subSectionTitle} text-navy`}>4.1 Datos Personales Tratados por Cailico</h3>
          <p className={paragraph}>Cailico, en el desarrollo de su objeto social y en la prestación de sus servicios a través de la infraestructura AIPEC, recolecta, almacena, utiliza, transmite y en general da Tratamiento a las siguientes categorías de datos personales:</p>

          <h4 className={`${subSubSectionTitle} text-navy`}>4.1.1 Datos de Estudiantes</h4>
          <p className={paragraph}>Cuando Cailico actúa como Encargado por cuenta de la institución educativa:</p>
          <ul className={list}>
            <li>Nombres completos</li>
            <li>Número de identificación</li>
            <li>Grado y grupo académico</li>
            <li>Materias cursadas</li>
            <li>Calificaciones y notas académicas</li>
            <li>Actividades académicas asignadas</li>
            <li>Asistencia (si aplica)</li>
            <li>Historial académico</li>
          </ul>

          <h4 className={`${subSubSectionTitle} text-navy`}>4.1.2 Datos de Padres de Familia</h4>
          <p className={paragraph}>Cuando Cailico actúa como Encargado por cuenta de la institución educativa:</p>
          <ul className={list}>
            <li>Nombres completos</li>
            <li>Números de teléfono (WhatsApp)</li>
            <li>Relación con estudiantes (parentesco)</li>
            <li>Vinculación con estudiantes (hasta 3 por padre)</li>
          </ul>

          <h4 className={`${subSubSectionTitle} text-navy`}>4.1.3 Datos de Profesores y Directivos</h4>
          <p className={paragraph}>Cuando Cailico actúa como Encargado por cuenta de la institución educativa:</p>
          <ul className={list}>
            <li>Nombres completos</li>
            <li>Números de contacto</li>
            <li>Correos electrónicos (si aplica)</li>
            <li>Materias que imparten</li>
            <li>Grados y grupos asignados</li>
            <li>Asignación académica completa</li>
            <li>Calificaciones registradas</li>
            <li>Cargo institucional</li>
          </ul>

          <h4 className={`${subSubSectionTitle} text-navy`}>4.1.4 Datos de Instituciones Educativas</h4>
          <p className={paragraph}>Cuando Cailico actúa como Responsable:</p>
          <ul className={list}>
            <li>Nombre de la institución</li>
            <li>NIT</li>
            <li>Representante legal (nombre, documento de identidad, cargo)</li>
            <li>Información de contacto (dirección, teléfono, correo electrónico)</li>
            <li>Información de facturación</li>
            <li>Estructura académica de la institución</li>
          </ul>

          <h4 className={`${subSubSectionTitle} text-navy`}>4.1.5 Datos de Empleados y Contratistas de Cailico</h4>
          <p className={paragraph}>Cuando Cailico actúa como Responsable:</p>
          <ul className={list}>
            <li>Información de identificación personal</li>
            <li>Información laboral</li>
            <li>Información de contacto</li>
            <li>Información financiera para pagos</li>
          </ul>

          <h3 className={`${subSectionTitle} text-navy`}>4.2 Alcance del Tratamiento</h3>
          <p className={paragraph}>
            Este documento abarca el tratamiento de la información gestionada en Cailico. Cubre todas las entregas, transferencias o traspaso de información y/o datos tanto en el interior de la organización como con el entorno de clientes, proveedores, y público general.
          </p>
          <p className={paragraph}>
            Los intercambios de información pueden ocurrir a través del uso de diversos tipos de comunicación: verbal (conversaciones presenciales o telefónicas), visual (videos), o escrita (papel o medios digitales). Implica la obtención, transferencia, procesamiento, almacenamiento y eliminación de la información.
          </p>

          {/* 5 */}
          <h2 className={`${sectionTitle} text-navy`}>5. Principios Rectores del Tratamiento</h2>
          <p className={paragraph}>Cailico está comprometido en que cualquier Tratamiento de datos personales que realiza respete siempre los derechos consagrados en la Constitución Política de Colombia y las leyes. Los siguientes son los principios que guían nuestro comportamiento:</p>
          <ul className={list}>
            <li><strong className="text-navy">Principio de Legalidad:</strong> El Tratamiento de datos personales se realiza conforme a lo establecido en la Ley 1581 de 2012 y demás normas aplicables.</li>
            <li><strong className="text-navy">Principio de Finalidad:</strong> El Tratamiento de datos personales obedece a una finalidad legítima que se informa al Titular.</li>
            <li><strong className="text-navy">Principio de Libertad:</strong> El Tratamiento solo puede ejercerse con el consentimiento previo, expreso e informado del Titular, salvo las excepciones legales.</li>
            <li><strong className="text-navy">Principio de Veracidad o Calidad:</strong> La información sujeta a Tratamiento debe ser veraz, completa, exacta, actualizada, comprobable y comprensible. Se prohíbe el Tratamiento de datos parciales, incompletos, fraccionados o que induzcan a error.</li>
            <li><strong className="text-navy">Principio de Transparencia:</strong> En el Tratamiento debe garantizarse el derecho del Titular a obtener del Responsable o del Encargado, en cualquier momento y sin restricciones, información acerca de la existencia de datos que le conciernan.</li>
            <li><strong className="text-navy">Principio de Acceso y Circulación Restringida:</strong> El Tratamiento se sujeta a los límites que se derivan de la naturaleza de los datos personales. Los datos personales, salvo la información pública, no podrán estar disponibles en Internet u otros medios de divulgación o comunicación masiva, salvo que el acceso sea técnicamente controlable para brindar un conocimiento restringido solo a los Titulares o terceros autorizados.</li>
            <li><strong className="text-navy">Principio de Seguridad:</strong> La información sujeta a Tratamiento se maneja con las medidas técnicas, humanas y administrativas necesarias para otorgar seguridad a los registros evitando su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento.</li>
            <li><strong className="text-navy">Principio de Confidencialidad:</strong> Todas las personas que intervengan en el Tratamiento de datos personales están obligadas a garantizar la reserva de la información, inclusive después de finalizada su relación con alguna de las labores que comprende el Tratamiento.</li>
          </ul>

          {/* 6 */}
          <h2 className={`${sectionTitle} text-navy`}>6. Finalidades del Tratamiento</h2>

          <h3 className={`${subSectionTitle} text-navy`}>6.1 Finalidades Generales</h3>
          <p className={paragraph}>Cailico trata los datos personales para las siguientes finalidades generales:</p>
          <ul className={list}>
            <li>Prestación de los servicios de la infraestructura AIPEC</li>
            <li>Cumplimiento de obligaciones contractuales con instituciones educativas</li>
            <li>Comunicación con clientes, usuarios y titulares de datos</li>
            <li>Mejora y desarrollo de productos y servicios</li>
            <li>Cumplimiento de obligaciones legales y regulatorias</li>
            <li>Gestión administrativa, contable y financiera</li>
            <li>Soporte técnico y atención al cliente</li>
            <li>Seguridad de la información y prevención de fraudes</li>
          </ul>

          <h3 className={`${subSectionTitle} text-navy`}>6.2 Finalidades Específicas para Datos de la Comunidad Educativa</h3>
          <p className={paragraph}>Cuando Cailico actúa como Encargado del Tratamiento por cuenta de las instituciones educativas, los datos personales se tratan para las siguientes finalidades específicas:</p>

          <h4 className={`${subSubSectionTitle} text-navy`}>6.2.1 Funcionamiento del Agente de WhatsApp</h4>
          <ul className={list}>
            <li>Envío de comunicados institucionales personalizados a estudiantes y padres de familia</li>
            <li>Envío de notificaciones de calificaciones a padres de familia</li>
            <li>Envío de recordatorios de actividades académicas</li>
            <li>Consulta de información institucional</li>
            <li>Consulta de actividades académicas filtradas por grado, grupo y estudiante</li>
            <li>Consulta de información de profesores</li>
            <li>Respuesta automática a consultas de la comunidad educativa</li>
          </ul>

          <h4 className={`${subSubSectionTitle} text-navy`}>6.2.2 Funcionamiento de la Plataforma de Notas</h4>
          <ul className={list}>
            <li>Gestión de calificaciones por estudiante, materia y período académico</li>
            <li>Registro y visualización de actividades académicas</li>
            <li>Asignación de materias a profesores</li>
            <li>Organización de estudiantes por grados y grupos</li>
            <li>Generación de reportes académicos individuales y grupales</li>
            <li>Envío automático de notificaciones de notas a padres de familia</li>
          </ul>

          <h4 className={`${subSubSectionTitle} text-navy`}>6.2.3 Gestión Académica</h4>
          <ul className={list}>
            <li>Vinculación de estudiantes con sus materias cursadas</li>
            <li>Vinculación de profesores con su asignación académica</li>
            <li>Identificación de estudiantes dentro de sus grados y grupos</li>
            <li>Relación de padres de familia con sus estudiantes (hasta 3 por padre)</li>
            <li>Seguimiento del rendimiento académico</li>
          </ul>

          <h4 className={`${subSubSectionTitle} text-navy`}>6.2.4 Generación de Estadísticas</h4>
          <ul className={list}>
            <li>Análisis de rendimiento por estudiante, grado, grupo y materia</li>
            <li>Generación de estadísticas académicas institucionales</li>
            <li>Reportes de rendimiento por profesor</li>
            <li>Análisis del desempeño académico institucional</li>
          </ul>

          <h4 className={`${subSubSectionTitle} text-navy`}>6.2.5 Comunicación Personalizada</h4>
          <ul className={list}>
            <li>Envío de notificaciones a padres sobre el rendimiento de sus estudiantes específicos</li>
            <li>Recordatorios de actividades filtrados por grado y materia</li>
            <li>Comunicados segmentados por nivel, grado o grupo</li>
          </ul>

          <h4 className={`${subSubSectionTitle} text-navy`}>6.2.6 Operación Técnica</h4>
          <ul className={list}>
            <li>Soporte técnico y resolución de incidentes</li>
            <li>Mejora del servicio AIPEC</li>
            <li>Respaldos y recuperación de información</li>
            <li>Garantía de disponibilidad y estabilidad del servicio</li>
          </ul>

          <h3 className={`${subSectionTitle} text-navy`}>6.3 Finalidades para Datos de Instituciones Educativas</h3>
          <p className={paragraph}>Cuando Cailico actúa como Responsable del Tratamiento de datos de instituciones educativas:</p>
          <ul className={list}>
            <li>Gestión de la relación comercial</li>
            <li>Facturación y cobro de servicios</li>
            <li>Cumplimiento de obligaciones contractuales</li>
            <li>Comunicación sobre el servicio</li>
            <li>Desarrollo y mejora de productos</li>
            <li>Cumplimiento de obligaciones tributarias</li>
          </ul>

          {/* 7 */}
          <h2 className={`${sectionTitle} text-navy`}>7. Derechos de los Titulares</h2>
          <p className={paragraph}>Los Titulares de los datos personales tienen los siguientes derechos conforme a la Ley 1581 de 2012:</p>

          <h3 className={`${subSectionTitle} text-navy`}>7.1 Derecho de Acceso</h3>
          <p className={paragraph}>Conocer, actualizar y rectificar sus datos personales frente a Cailico como Responsable o Encargado del Tratamiento. Este derecho se podrá ejercer, entre otros, frente a datos parciales, inexactos, incompletos, fraccionados, que induzcan a error, o aquellos cuyo Tratamiento esté expresamente prohibido o no haya sido autorizado.</p>

          <h3 className={`${subSectionTitle} text-navy`}>7.2 Derecho de Consulta</h3>
          <p className={paragraph}>Solicitar información a Cailico sobre los datos personales del Titular que reposan en las bases de datos.</p>

          <h3 className={`${subSectionTitle} text-navy`}>7.3 Derecho de Actualización y Rectificación</h3>
          <p className={paragraph}>Solicitar la actualización de sus datos personales cuando los mismos estén incompletos o no correspondan con la realidad, así como la rectificación de los datos inexactos.</p>

          <h3 className={`${subSectionTitle} text-navy`}>7.4 Derecho de Supresión</h3>
          <p className={paragraph}>Solicitar la supresión (eliminación) de sus datos personales cuando:</p>
          <ul className={list}>
            <li>Considere que no se respetan los principios, derechos y garantías constitucionales y legales</li>
            <li>Hayan dejado de ser necesarios o pertinentes para la finalidad para la cual fueron recolectados</li>
            <li>Se haya superado el periodo necesario para el cumplimiento de los fines para los que fueron recolectados</li>
          </ul>
          <p className={paragraph}><strong className="text-navy">Nota importante:</strong> La supresión no procederá cuando el Titular tenga un deber legal o contractual de permanecer en la base de datos.</p>

          <h3 className={`${subSectionTitle} text-navy`}>7.5 Derecho de Revocación</h3>
          <p className={paragraph}>Revocar la autorización otorgada para el Tratamiento de sus datos personales, siempre que no lo impida una disposición legal o contractual.</p>

          <h3 className={`${subSectionTitle} text-navy`}>7.6 Derecho a Presentar Quejas</h3>
          <p className={paragraph}>Presentar ante la Superintendencia de Industria y Comercio quejas por infracciones a lo dispuesto en la Ley 1581 de 2012 y demás normas que la modifiquen, adicionen o complementen.</p>

          <h3 className={`${subSectionTitle} text-navy`}>7.7 Derecho a ser Informado</h3>
          <p className={paragraph}>Ser informado por Cailico, previa solicitud, respecto del uso que se le ha dado a sus datos personales.</p>

          <h3 className={`${subSectionTitle} text-navy`}>7.8 Derecho a Solicitar Prueba de la Autorización</h3>
          <p className={paragraph}>Solicitar prueba de la autorización otorgada a Cailico para el Tratamiento de sus datos personales, salvo cuando expresamente se exceptúe como requisito para el Tratamiento.</p>

          {/* 8 */}
          <h2 className={`${sectionTitle} text-navy`}>8. Deberes de Cailico como Responsable y Encargado</h2>

          <h3 className={`${subSectionTitle} text-navy`}>8.1 Deberes como Responsable del Tratamiento</h3>
          <p className={paragraph}>Cuando Cailico actúa como Responsable, tiene los siguientes deberes:</p>
          <ul className={list}>
            <li>Garantizar al Titular, en todo tiempo, el pleno y efectivo ejercicio del derecho de hábeas data</li>
            <li>Solicitar y conservar copia de la respectiva autorización otorgada por el Titular</li>
            <li>Informar debidamente al Titular sobre la finalidad de la recolección y los derechos que le asisten por virtud de la autorización otorgada</li>
            <li>Conservar la información bajo las condiciones de seguridad necesarias para impedir su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento</li>
            <li>Garantizar que la información que se suministre al Encargado del Tratamiento sea veraz, completa, exacta, actualizada, comprobable y comprensible</li>
            <li>Actualizar la información, comunicando de forma oportuna al Encargado del Tratamiento todas las novedades respecto de los datos que previamente le haya suministrado</li>
            <li>Rectificar la información cuando sea incorrecta y comunicar lo pertinente al Encargado del Tratamiento</li>
            <li>Suministrar al Encargado del Tratamiento únicamente datos cuyo Tratamiento esté previamente autorizado</li>
            <li>Exigir al Encargado del Tratamiento el respeto a las condiciones de seguridad y privacidad de la información del Titular</li>
            <li>Tramitar las consultas y reclamos formulados por los Titulares</li>
            <li>Informar al Encargado del Tratamiento cuando determinada información se encuentra en discusión por parte del Titular</li>
            <li>Informar a solicitud del Titular sobre el uso dado a sus datos</li>
            <li>Informar a la autoridad de protección de datos cuando se presenten violaciones a los códigos de seguridad y existan riesgos en la administración de la información de los Titulares</li>
          </ul>

          <h3 className={`${subSectionTitle} text-navy`}>8.2 Deberes como Encargado del Tratamiento</h3>
          <p className={paragraph}>Cuando Cailico actúa como Encargado del Tratamiento por cuenta de las instituciones educativas, tiene los siguientes deberes:</p>
          <ul className={list}>
            <li>Dar Tratamiento, en nombre del Responsable (la institución educativa), a los datos personales conforme a los principios que los tutelan</li>
            <li>Tratar los datos únicamente según las instrucciones del Responsable y las finalidades establecidas</li>
            <li>Salvaguardar la seguridad de las bases de datos en los que se contengan datos personales</li>
            <li>Guardar estricta confidencialidad respecto del Tratamiento de los datos personales</li>
            <li>Garantizar a los Titulares el pleno y efectivo ejercicio de sus derechos</li>
            <li>Realizar oportunamente la actualización, rectificación o supresión de los datos en cumplimiento de la ley aplicable</li>
            <li>Actualizar la información reportada por el Responsable dentro de los cinco (5) días hábiles contados a partir de su recibo</li>
            <li>Tramitar las consultas y reclamos formulados por los Titulares en coordinación con el Responsable</li>
            <li>Realizar el Tratamiento de los datos personales conforme a las finalidades establecidas</li>
            <li>Notificar al Responsable sobre cualquier incidente de seguridad</li>
            <li>Eliminar o devolver los datos personales al Responsable al terminar la relación contractual</li>
          </ul>

          {/* 9 */}
          <h2 className={`${sectionTitle} text-navy`}>9. Autorizaciones para el Tratamiento de Datos Personales</h2>

          <h3 className={`${subSectionTitle} text-navy`}>9.1 Autorización Previa</h3>
          <p className={paragraph}>Cailico requiere autorización previa, expresa e informada del Titular para el Tratamiento de sus datos personales, salvo en los casos exceptuados por la ley.</p>

          <h3 className={`${subSectionTitle} text-navy`}>9.2 Forma de Obtención de la Autorización</h3>
          <p className={paragraph}>La autorización puede ser obtenida por cualquier medio que pueda ser objeto de consulta posterior:</p>
          <ul className={list}>
            <li>Escrito</li>
            <li>Oral</li>
            <li>Medios electrónicos</li>
            <li>Conductas inequívocas del Titular que permitan concluir de forma razonable que otorgó la autorización</li>
          </ul>

          <h3 className={`${subSectionTitle} text-navy`}>9.3 Contenido de la Autorización</h3>
          <p className={paragraph}>La autorización debe contener como mínimo:</p>
          <ul className={list}>
            <li>Identificación del Responsable y/o Encargado del Tratamiento</li>
            <li>Finalidades específicas del Tratamiento</li>
            <li>Derechos del Titular</li>
            <li>Mecanismos para ejercer los derechos</li>
            <li>Carácter facultativo de la respuesta a preguntas sobre datos sensibles</li>
          </ul>

          <h3 className={`${subSectionTitle} text-navy`}>9.4 Autorización para Datos de la Comunidad Educativa</h3>
          <p className={paragraph}>
            <strong className="text-navy">Importante:</strong> Cuando Cailico actúa como Encargado del Tratamiento, es responsabilidad de la institución educativa (como Responsable del Tratamiento) obtener las autorizaciones necesarias de los Titulares (estudiantes, padres de familia, profesores, directivos) para que Cailico pueda tratar sus datos personales.
          </p>
          <p className={paragraph}>La institución educativa debe informar a los Titulares que:</p>
          <ul className={list}>
            <li>Sus datos serán tratados por Cailico en calidad de Encargado</li>
            <li>Las finalidades incluyen el funcionamiento de AIPEC</li>
            <li>Cailico implementará medidas de seguridad adecuadas</li>
            <li>Los Titulares pueden ejercer sus derechos conforme a la ley</li>
          </ul>

          <h3 className={`${subSectionTitle} text-navy`}>9.5 Casos en que no se Requiere Autorización</h3>
          <p className={paragraph}>Conforme al artículo 10 de la Ley 1581 de 2012, no se requiere autorización del Titular cuando:</p>
          <ul className={list}>
            <li>Información requerida por una entidad pública o administrativa en ejercicio de sus funciones legales</li>
            <li>Datos de naturaleza pública</li>
            <li>Casos de urgencia médica o sanitaria</li>
            <li>Tratamiento de información autorizado por la ley para fines históricos, estadísticos o científicos</li>
            <li>Datos relacionados con el Registro Civil de las Personas</li>
          </ul>

          {/* 10 */}
          <h2 className={`${sectionTitle} text-navy`}>10. Medidas de Seguridad</h2>

          <h3 className={`${subSectionTitle} text-navy`}>10.1 Compromiso con la Seguridad</h3>
          <p className={paragraph}>Cailico está comprometido con la implementación de medidas de seguridad administrativas, técnicas y físicas para proteger los datos personales contra daño, pérdida, alteración, destrucción, uso, acceso o divulgación no autorizada.</p>

          <h3 className={`${subSectionTitle} text-navy`}>10.2 Medidas Técnicas de Seguridad</h3>
          <ul className={list}>
            <li>Cifrado de datos en tránsito y en reposo</li>
            <li>Controles de acceso basados en roles y permisos</li>
            <li>Autenticación de usuarios</li>
            <li>Monitoreo de accesos y actividades sospechosas</li>
            <li>Respaldos periódicos de información</li>
            <li>Firewall y protección contra intrusos</li>
            <li>Actualizaciones de seguridad periódicas</li>
            <li>Segregación de datos por institución educativa</li>
            <li>Protocolos seguros de comunicación (HTTPS, SSL/TLS)</li>
          </ul>

          <h3 className={`${subSectionTitle} text-navy`}>10.3 Medidas Administrativas</h3>
          <ul className={list}>
            <li>Políticas de seguridad de la información</li>
            <li>Capacitación periódica del personal en protección de datos</li>
            <li>Acuerdos de confidencialidad con empleados y contratistas</li>
            <li>Procedimientos de gestión de incidentes de seguridad</li>
            <li>Auditorías periódicas de seguridad</li>
            <li>Gestión de accesos y privilegios</li>
            <li>Políticas de contraseñas seguras</li>
          </ul>

          <h3 className={`${subSectionTitle} text-navy`}>10.4 Medidas Físicas</h3>
          <ul className={list}>
            <li>Control de acceso a instalaciones</li>
            <li>Áreas restringidas para equipos críticos</li>
            <li>Protección contra desastres naturales</li>
            <li>Sistemas de respaldo de energía</li>
          </ul>

          <h3 className={`${subSectionTitle} text-navy`}>10.5 Limitaciones</h3>
          <p className={paragraph}>
            Sin perjuicio de las medidas implementadas, Cailico informa que ningún sistema de seguridad es infalible. Pueden existir interceptaciones ilegales o violaciones a los sistemas y bases de datos por parte de personas no autorizadas. En estos eventos, Cailico no se responsabiliza por la indebida utilización de la información obtenida por esos medios, pero se compromete a:
          </p>
          <ul className={list}>
            <li>Notificar al Responsable del Tratamiento sobre el incidente</li>
            <li>Tomar las medidas correctivas necesarias</li>
            <li>Colaborar con las autoridades competentes</li>
            <li>Implementar mejoras para prevenir futuros incidentes</li>
          </ul>

          {/* 11 */}
          <h2 className={`${sectionTitle} text-navy`}>11. Transferencias y Transmisiones de Datos Personales</h2>

          <h3 className={`${subSectionTitle} text-navy`}>11.1 Transferencias Nacionales</h3>
          <p className={paragraph}>Cailico puede realizar transferencias nacionales de datos personales a:</p>
          <ul className={list}>
            <li>Proveedores de servicios tecnológicos que operan en Colombia</li>
            <li>Autoridades colombianas cuando sea requerido por ley</li>
            <li>Instituciones educativas clientes (cuando corresponda)</li>
          </ul>

          <h3 className={`${subSectionTitle} text-navy`}>11.2 Transferencias Internacionales</h3>
          <p className={paragraph}>Cailico puede realizar transferencias internacionales de datos personales a:</p>
          <ul className={list}>
            <li>Proveedores de servicios en la nube ubicados en países con niveles adecuados de protección de datos</li>
            <li>Proveedores de servicios tecnológicos necesarios para el funcionamiento de AIPEC</li>
          </ul>
          <p className="mb-2 font-semibold text-navy">Todas las transferencias internacionales se realizan garantizando:</p>
          <ul className={list}>
            <li>Niveles adecuados de protección de datos</li>
            <li>Cumplimiento con la legislación colombiana</li>
            <li>Cláusulas contractuales de protección de datos con los receptores</li>
          </ul>

          <h3 className={`${subSectionTitle} text-navy`}>11.3 Transmisiones a Encargados</h3>
          <p className={paragraph}>Cailico puede realizar transmisiones de datos personales a Encargados del Tratamiento, tales como:</p>
          <ul className={list}>
            <li>Proveedores de servicios de almacenamiento en la nube</li>
            <li>Proveedores de servicios de mensajería (WhatsApp Business API)</li>
            <li>Proveedores de servicios de soporte técnico</li>
          </ul>
          <p className={paragraph}>Todos los Encargados del Tratamiento están obligados contractualmente a:</p>
          <ul className={list}>
            <li>Tratar los datos únicamente según instrucciones de Cailico</li>
            <li>Implementar medidas de seguridad adecuadas</li>
            <li>Guardar confidencialidad</li>
            <li>No utilizar los datos para fines propios</li>
          </ul>

          {/* 12 */}
          <h2 className={`${sectionTitle} text-navy`}>12. Conservación y Supresión de Datos Personales</h2>

          <h3 className={`${subSectionTitle} text-navy`}>12.1 Tiempo de Conservación</h3>
          <p className={paragraph}>Los datos personales serán conservados por Cailico durante el tiempo que sea necesario para:</p>
          <ul className={list}>
            <li>Cumplir con las finalidades del Tratamiento</li>
            <li>Cumplir con obligaciones legales</li>
            <li>Atender requerimientos de autoridades</li>
            <li>Ejercer o defender derechos ante autoridades</li>
          </ul>

          <h3 className={`${subSectionTitle} text-navy`}>12.2 Plazos Específicos</h3>
          <p className={paragraph}>
            <strong className="text-navy">Datos de la comunidad educativa (cuando Cailico actúa como Encargado):</strong> Los datos se conservarán mientras la institución educativa mantenga activo el servicio AIPEC y hasta treinta (30) días después de la terminación del contrato, momento en el cual serán devueltos a la institución o eliminados según sus instrucciones.
          </p>
          <p className={paragraph}>
            <strong className="text-navy">Datos de instituciones educativas clientes:</strong> Se conservarán durante la vigencia del contrato y hasta cinco (5) años después de su terminación para efectos tributarios y legales.
          </p>
          <p className={paragraph}>
            <strong className="text-navy">Datos de empleados y contratistas:</strong> Se conservarán durante la relación laboral o contractual y hasta veinte (20) años después de su terminación, conforme a las obligaciones legales.
          </p>

          <h3 className={`${subSectionTitle} text-navy`}>12.3 Procedimiento de Supresión</h3>
          <p className={paragraph}>Cuando corresponda la supresión de datos personales, Cailico:</p>
          <ul className={list}>
            <li>Eliminará físicamente los datos de sus bases de datos activas</li>
            <li>Eliminará los datos de los respaldos en el siguiente ciclo de actualización de respaldos</li>
            <li>Garantizará que los datos sean irrecuperables</li>
            <li>Levantará acta de eliminación cuando sea requerido</li>
          </ul>

          {/* 13 */}
          <h2 className={`${sectionTitle} text-navy`}>13. Procedimiento para el Ejercicio de Derechos</h2>

          <h3 className={`${subSectionTitle} text-navy`}>13.1 Canales de Atención</h3>
          <p className={paragraph}>Los Titulares pueden ejercer sus derechos a través de los siguientes canales:</p>
          <ul className={list}>
            <li><strong className="text-navy">WhatsApp:</strong> (+57) 301 624 1863</li>
            <li><strong className="text-navy">Correo electrónico:</strong> contacto@cailico.com</li>
            <li><strong className="text-navy">Formulario web:</strong> Disponible en el sitio web de Cailico en la sección de protección de datos</li>
          </ul>

          <h3 className={`${subSectionTitle} text-navy`}>13.2 Consultas</h3>

          <h4 className={`${subSubSectionTitle} text-navy`}>13.2.1 Presentación de Consultas</h4>
          <p className={paragraph}>Los Titulares o sus causahabientes podrán consultar la información personal del Titular que repose en las bases de datos de Cailico.</p>

          <h4 className={`${subSubSectionTitle} text-navy`}>13.2.2 Requisitos de la Consulta</h4>
          <p className={paragraph}>La consulta debe contener:</p>
          <ul className={list}>
            <li>Nombres y apellidos del Titular</li>
            <li>Número de identificación</li>
            <li>Dirección física o electrónica para notificaciones</li>
            <li>Descripción de los datos sobre los cuales se desea obtener información</li>
            <li>Firma (si es escrita) o identificación del consultante</li>
          </ul>

          <h4 className={`${subSubSectionTitle} text-navy`}>13.2.3 Término para Atender Consultas</h4>
          <p className={paragraph}>
            Cailico atenderá las consultas en un término máximo de diez (10) días hábiles contados a partir de la fecha de recibo. Si no es posible atender la consulta en dicho término, se informará al Titular expresando los motivos de la demora y señalando la fecha en que se atenderá, la cual en ningún caso podrá superar los cinco (5) días hábiles siguientes al vencimiento del primer término.
          </p>

          <h3 className={`${subSectionTitle} text-navy`}>13.3 Reclamos</h3>

          <h4 className={`${subSubSectionTitle} text-navy`}>13.3.1 Presentación de Reclamos</h4>
          <p className={paragraph}>Los Titulares o sus causahabientes pueden presentar reclamos ante Cailico cuando:</p>
          <ul className={list}>
            <li>Consideren que la información contenida en las bases de datos debe ser objeto de corrección, actualización o supresión</li>
            <li>Adviertan un presunto incumplimiento de los deberes de Cailico en materia de protección de datos</li>
          </ul>

          <h4 className={`${subSubSectionTitle} text-navy`}>13.3.2 Requisitos del Reclamo</h4>
          <p className={paragraph}>El reclamo debe contener:</p>
          <ul className={list}>
            <li>Nombres y apellidos del Titular</li>
            <li>Número de identificación</li>
            <li>Descripción de los hechos que dan lugar al reclamo</li>
            <li>Dirección física o electrónica para notificaciones</li>
            <li>Documentos que se quieran hacer valer</li>
            <li>Firma (si es escrita) o identificación del reclamante</li>
          </ul>

          <h4 className={`${subSubSectionTitle} text-navy`}>13.3.3 Procedimiento para Reclamos</h4>
          <ol className={orderedList}>
            <li><strong className="text-navy">Si el reclamo está incompleto:</strong> Cailico requerirá al interesado dentro de los cinco (5) días siguientes a la recepción para que subsane las fallas. Si transcurren dos (2) meses desde la fecha del requerimiento sin que el solicitante presente la información requerida, se entenderá que ha desistido del reclamo.</li>
            <li><strong className="text-navy">Si el reclamo está completo:</strong> Se incluirá en la base de datos una leyenda que diga "reclamo en trámite" y el motivo del mismo, en un término no mayor a dos (2) días hábiles.</li>
            <li><strong className="text-navy">Término para resolver:</strong> El término máximo para atender el reclamo será de quince (15) días hábiles contados a partir del día siguiente a la fecha de su recibo. Cuando no fuere posible atender el reclamo dentro de dicho término, se informará al interesado los motivos de la demora y la fecha en que se atenderá su reclamo, la cual en ningún caso podrá superar los ocho (8) días hábiles siguientes al vencimiento del primer término.</li>
          </ol>

          <h3 className={`${subSectionTitle} text-navy`}>13.4 Derecho de Petición ante Autoridades</h3>
          <p className={paragraph}>
            Si después de agotar el trámite de consulta o reclamo ante Cailico, el Titular no se encuentra satisfecho con la respuesta, podrá presentar queja ante la Superintendencia de Industria y Comercio.
          </p>

          {/* 14 */}
          <h2 className={`${sectionTitle} text-navy`}>14. Datos de Menores de Edad</h2>

          <h3 className={`${subSectionTitle} text-navy`}>14.1 Tratamiento de Datos de Menores</h3>
          <p className={paragraph}>La infraestructura AIPEC procesa datos personales de estudiantes, muchos de los cuales son menores de edad. En estos casos:</p>

          <p className="mb-2 font-semibold text-navy">Responsabilidad de la institución educativa:</p>
          <ul className={list}>
            <li>La institución educativa, como Responsable del Tratamiento, debe obtener la autorización de los padres, tutores o representantes legales de los menores</li>
            <li>La autorización debe ser específica para el uso de AIPEC</li>
            <li>Debe informarse claramente sobre las finalidades del Tratamiento</li>
          </ul>

          <p className="mb-2 font-semibold text-navy">Compromiso de Cailico:</p>
          <ul className={list}>
            <li>Tratará los datos de menores con especial cuidado y protección</li>
            <li>Implementará medidas de seguridad reforzadas</li>
            <li>Limitará el acceso a estos datos únicamente al personal autorizado</li>
            <li>No utilizará los datos de menores para finalidades diferentes a las establecidas</li>
          </ul>

          <h3 className={`${subSectionTitle} text-navy`}>14.2 Derechos de los Menores</h3>
          <p className={paragraph}>Los padres, tutores o representantes legales de los menores pueden ejercer en su nombre todos los derechos establecidos en la Ley 1581 de 2012 y en esta Política de Privacidad.</p>

          {/* 15 */}
          <h2 className={`${sectionTitle} text-navy`}>15. Cookies y Tecnologías Similares</h2>

          <h3 className={`${subSectionTitle} text-navy`}>15.1 Uso de Cookies</h3>
          <p className={paragraph}>Cailico puede hacer uso de cookies y tecnologías similares en su sitio web para:</p>
          <ul className={list}>
            <li>Mejorar la experiencia del usuario</li>
            <li>Recordar preferencias</li>
            <li>Analizar el uso del sitio web</li>
            <li>Personalizar contenido</li>
          </ul>

          <h3 className={`${subSectionTitle} text-navy`}>15.2 Gestión de Cookies</h3>
          <p className={paragraph}>Los usuarios pueden configurar su navegador para:</p>
          <ul className={list}>
            <li>Rechazar todas las cookies</li>
            <li>Aceptar solo cookies de sitios específicos</li>
            <li>Ser notificado cuando se envíe una cookie</li>
          </ul>
          <p className={paragraph}><strong className="text-navy">Nota:</strong> Desactivar las cookies puede limitar la funcionalidad del sitio web.</p>

          <h3 className={`${subSectionTitle} text-navy`}>15.3 Tipos de Cookies Utilizadas</h3>
          <ul className={list}>
            <li><strong className="text-navy">Cookies técnicas:</strong> Necesarias para el funcionamiento del sitio web</li>
            <li><strong className="text-navy">Cookies de análisis:</strong> Para entender cómo los usuarios interactúan con el sitio</li>
            <li><strong className="text-navy">Cookies de preferencias:</strong> Para recordar configuraciones del usuario</li>
          </ul>

          {/* 16 */}
          <h2 className={`${sectionTitle} text-navy`}>16. Modificaciones a la Política de Privacidad</h2>

          <h3 className={`${subSectionTitle} text-navy`}>16.1 Derecho a Modificar</h3>
          <p className={paragraph}>Cailico se reserva el derecho de modificar esta Política de Privacidad en cualquier momento para adaptarla a:</p>
          <ul className={list}>
            <li>Cambios en la legislación aplicable</li>
            <li>Nuevas prácticas de protección de datos</li>
            <li>Cambios en los servicios ofrecidos</li>
            <li>Mejoras en las medidas de seguridad</li>
          </ul>

          <h3 className={`${subSectionTitle} text-navy`}>16.2 Notificación de Cambios</h3>
          <p className={paragraph}>Cualquier modificación a esta Política de Privacidad será notificada a los Titulares mediante:</p>
          <ul className={list}>
            <li>Publicación en el sitio web de Cailico</li>
            <li>WhatsApp a los números registrados</li>
            <li>Correo electrónico (cuando esté disponible)</li>
            <li>Notificación en la Plataforma de Notas de AIPEC</li>
          </ul>

          <h3 className={`${subSectionTitle} text-navy`}>16.3 Vigencia de las Modificaciones</h3>
          <p className={paragraph}>Las modificaciones entrarán en vigencia treinta (30) días después de su publicación. El uso continuado de los servicios de Cailico después de la fecha de vigencia constituirá la aceptación de las modificaciones.</p>

          <h3 className={`${subSectionTitle} text-navy`}>16.4 Derecho de Oposición</h3>
          <p className={paragraph}>Si un Titular no está de acuerdo con las modificaciones, puede:</p>
          <ul className={list}>
            <li>Solicitar la supresión de sus datos (cuando aplique)</li>
            <li>Revocar la autorización para el Tratamiento</li>
            <li>Contactar a Cailico para expresar su inconformidad</li>
          </ul>

          {/* 17 */}
          <h2 className={`${sectionTitle} text-navy`}>17. Área de Protección de Datos Personales</h2>

          <h3 className={`${subSectionTitle} text-navy`}>17.1 Responsable de Protección de Datos</h3>
          <p className={paragraph}>Cailico ha designado un área responsable de la protección de datos personales y de atender las consultas, reclamos y solicitudes de los Titulares.</p>

          <h3 className={`${subSectionTitle} text-navy`}>17.2 Información de Contacto</h3>
          <p className="mb-2 font-semibold text-navy">Área de Protección de Datos de Cailico:</p>
          <ul className={list}>
            <li><strong className="text-navy">WhatsApp:</strong> (+57) 301 624 1863</li>
            <li><strong className="text-navy">Correo electrónico:</strong> contacto@cailico.com</li>
            <li><strong className="text-navy">Formulario web:</strong> Disponible en el sitio web de Cailico</li>
            <li><strong className="text-navy">Oficinas:</strong> Departamento de Sucre, Colombia</li>
          </ul>

          <h3 className={`${subSectionTitle} text-navy`}>17.3 Horario de Atención</h3>
          <p className={paragraph}>El área de protección de datos atiende consultas y reclamos en días y horarios hábiles comerciales en Colombia.</p>

          {/* 18 */}
          <h2 className={`${sectionTitle} text-navy`}>18. Información Adicional</h2>

          <h3 className={`${subSectionTitle} text-navy`}>18.1 Normatividad Aplicable</h3>
          <p className={paragraph}>Esta Política de Privacidad se rige por:</p>
          <ul className={list}>
            <li>Constitución Política de Colombia</li>
            <li>Ley Estatutaria 1581 de 2012</li>
            <li>Decreto 1377 de 2013</li>
            <li>Demás normas que las modifiquen, adicionen o complementen</li>
          </ul>

          <h3 className={`${subSectionTitle} text-navy`}>18.2 Colaboración con Autoridades</h3>
          <p className={paragraph}>Cailico colaborará con las autoridades competentes en la investigación de posibles violaciones a la ley de protección de datos personales y proporcionará la información requerida en el marco de investigaciones administrativas o judiciales.</p>

          <h3 className={`${subSectionTitle} text-navy`}>18.3 Responsabilidad de Terceros</h3>
          <p className={paragraph}>Cailico no se hace responsable por las políticas de privacidad de terceros que puedan estar enlazados desde su sitio web o que interactúen con AIPEC (como WhatsApp). Se recomienda a los usuarios revisar las políticas de privacidad de dichos terceros.</p>

          {/* 19 */}
          <h2 className={`${sectionTitle} text-navy`}>19. Vigencia y Actualización</h2>

          <h3 className={`${subSectionTitle} text-navy`}>19.1 Vigencia</h3>
          <p className={paragraph}>Esta Política de Privacidad se encuentra vigente a partir del primero (01) de enero de 2026 y se revisará periódicamente.</p>

          <h3 className={`${subSectionTitle} text-navy`}>19.2 Última Actualización</h3>
          <p className={paragraph}><strong className="text-navy">Fecha de última actualización:</strong> Enero de 2026</p>

          <h3 className={`${subSectionTitle} text-navy`}>19.3 Disponibilidad</h3>
          <p className={paragraph}>Esta Política de Privacidad está disponible permanentemente en:</p>
          <ul className={list}>
            <li>Sitio web de Cailico</li>
            <li>Plataforma de Notas de AIPEC</li>
            <li>Solicitud directa a través de los canales de contacto</li>
          </ul>

          {/* 20 */}
          <h2 className={`${sectionTitle} text-navy`}>20. Aceptación de la Política de Privacidad</h2>
          <p className={paragraph}>Al proporcionar datos personales a Cailico o al utilizar la infraestructura AIPEC, usted declara que:</p>
          <ul className={list}>
            <li>Ha leído y comprendido esta Política de Privacidad en su totalidad</li>
            <li>Acepta los términos y condiciones de esta Política de Privacidad</li>
            <li>Autoriza el Tratamiento de sus datos personales conforme a lo establecido</li>
            <li>Entiende sus derechos como Titular de datos personales</li>
            <li>Conoce los canales para ejercer sus derechos</li>
          </ul>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t-2 border-navy/20">
            <p className="text-sm" style={{ color: "#666" }}>
              <strong className="text-navy">CAILICO SAS</strong><br />
              NIT: 901697615-9<br />
              Sucre, Colombia<br /><br />
              Vigencia: Enero de 2026 | Última actualización: Enero de 2026
            </p>
            <p className="text-xs italic mt-4" style={{ color: "#888" }}>
              Este documento constituye la Política de Privacidad y Tratamiento de Datos Personales de Cailico SAS. Por favor, consérvelo para su referencia.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
