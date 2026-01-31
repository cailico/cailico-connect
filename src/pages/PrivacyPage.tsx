import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar loadingPhase="complete" forceBackground />
      
      {/* Content */}
      <main className="pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <article className="prose prose-lg max-w-none">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
              Política de Privacidad y Tratamiento de Datos Personales
            </h1>
            <p className="text-gray-500 mb-8">
              <strong className="text-gray-700">CAILICO SAS</strong> | Vigencia: Enero de 2026
            </p>

            <div className="bg-primary/5 p-6 rounded-lg mb-8 border border-primary/10">
              <h2 className="text-xl font-semibold text-gray-900 mt-0">¡GRACIAS POR CONFIAR EN CAILICO!</h2>
              <p className="text-gray-700 mb-0">
                Su confianza es lo más importante para nosotros y estamos comprometidos en proteger la privacidad y la seguridad de sus datos personales. Contamos con un equipo dedicado que se compromete a proteger todos los datos personales que procesamos.
              </p>
            </div>

            <h2 className="text-gray-900">1. Introducción y Objetivos</h2>
            <p className="text-gray-700">
              Esta Política de Privacidad es el documento que regula el manejo de todas las bases de datos de Cailico SAS, que contengan datos personales de estudiantes, padres de familia, profesores, directivos, contratistas, proveedores y en general terceros, conforme a las disposiciones de la Ley Estatutaria 1581 de 2012 y el Decreto 1377 de 2013.
            </p>

            <h3 className="text-gray-900">1.1 Ámbito de Aplicación</h3>
            <p className="text-gray-700">Esta Política de Privacidad aplica a:</p>
            <ul className="text-gray-700">
              <li>Instituciones educativas que contratan los servicios de Cailico</li>
              <li>Estudiantes cuyos datos son tratados a través de AIPEC</li>
              <li>Padres de familia cuyos datos son tratados a través de AIPEC</li>
              <li>Profesores y directivos cuyos datos son tratados a través de AIPEC</li>
              <li>Empleados y contratistas de Cailico</li>
              <li>Proveedores y aliados comerciales</li>
            </ul>

            <h2 className="text-gray-900">2. Definiciones</h2>
            <ul className="text-gray-700">
              <li><strong className="text-gray-900">Autorización:</strong> Consentimiento previo, expreso e informado del Titular para llevar a cabo el Tratamiento de datos personales.</li>
              <li><strong className="text-gray-900">AIPEC:</strong> Artificial Intelligence Powered Educational Communication. Infraestructura de inteligencia artificial desarrollada por Cailico.</li>
              <li><strong className="text-gray-900">Datos Personales:</strong> Cualquier información vinculada o que pueda asociarse a una o varias personas naturales.</li>
              <li><strong className="text-gray-900">Datos Sensibles:</strong> Aquellos que afectan la intimidad del Titular o cuyo uso indebido puede generar su discriminación.</li>
              <li><strong className="text-gray-900">Titular:</strong> Persona natural cuyos datos personales sean objeto de Tratamiento.</li>
              <li><strong className="text-gray-900">Tratamiento:</strong> Cualquier operación sobre datos personales como recolección, almacenamiento, uso, circulación o supresión.</li>
            </ul>

            <h2 className="text-gray-900">3. Identificación del Responsable</h2>
            <ul className="text-gray-700">
              <li><strong className="text-gray-900">Razón Social:</strong> Cailico SAS</li>
              <li><strong className="text-gray-900">NIT:</strong> 901697615-9</li>
              <li><strong className="text-gray-900">Domicilio:</strong> Departamento de Sucre, Colombia</li>
              <li><strong className="text-gray-900">CEO:</strong> Juan Sebastián Castillo</li>
              <li><strong className="text-gray-900">Contacto:</strong> WhatsApp (+57) 301 624 1863 / contacto@cailico.com</li>
            </ul>

            <h2 className="text-gray-900">4. Datos Personales Tratados</h2>
            <h3 className="text-gray-900">Datos de Estudiantes</h3>
            <ul className="text-gray-700">
              <li>Nombres completos y número de identificación</li>
              <li>Grado y grupo académico</li>
              <li>Materias cursadas y calificaciones</li>
              <li>Actividades académicas asignadas</li>
            </ul>

            <h3 className="text-gray-900">Datos de Padres de Familia</h3>
            <ul className="text-gray-700">
              <li>Nombres completos</li>
              <li>Números de teléfono (WhatsApp)</li>
              <li>Relación con estudiantes (parentesco)</li>
            </ul>

            <h3 className="text-gray-900">Datos de Profesores y Directivos</h3>
            <ul className="text-gray-700">
              <li>Nombres completos y contacto</li>
              <li>Materias que imparten</li>
              <li>Grados y grupos asignados</li>
              <li>Cargo institucional</li>
            </ul>

            <h2 className="text-gray-900">5. Principios Rectores del Tratamiento</h2>
            <ul className="text-gray-700">
              <li><strong className="text-gray-900">Legalidad:</strong> Tratamiento conforme a la Ley 1581 de 2012</li>
              <li><strong className="text-gray-900">Finalidad:</strong> Tratamiento para finalidades legítimas informadas al Titular</li>
              <li><strong className="text-gray-900">Libertad:</strong> Tratamiento solo con consentimiento previo</li>
              <li><strong className="text-gray-900">Veracidad:</strong> Información veraz, completa, exacta y actualizada</li>
              <li><strong className="text-gray-900">Transparencia:</strong> Derecho a obtener información sobre sus datos</li>
              <li><strong className="text-gray-900">Seguridad:</strong> Medidas técnicas y administrativas de protección</li>
              <li><strong className="text-gray-900">Confidencialidad:</strong> Reserva de la información</li>
            </ul>

            <h2 className="text-gray-900">6. Finalidades del Tratamiento</h2>
            <ul className="text-gray-700">
              <li>Prestación de los servicios de la infraestructura AIPEC</li>
              <li>Cumplimiento de obligaciones contractuales</li>
              <li>Comunicación con clientes, usuarios y titulares</li>
              <li>Mejora y desarrollo de productos y servicios</li>
              <li>Cumplimiento de obligaciones legales</li>
              <li>Soporte técnico y atención al cliente</li>
            </ul>

            <h2 className="text-gray-900">7. Derechos de los Titulares</h2>
            <ul className="text-gray-700">
              <li><strong className="text-gray-900">Acceso:</strong> Conocer, actualizar y rectificar sus datos personales</li>
              <li><strong className="text-gray-900">Consulta:</strong> Solicitar información sobre los datos que reposan en las bases</li>
              <li><strong className="text-gray-900">Actualización:</strong> Solicitar la actualización de datos incompletos</li>
              <li><strong className="text-gray-900">Supresión:</strong> Solicitar la eliminación de sus datos personales</li>
              <li><strong className="text-gray-900">Revocación:</strong> Revocar la autorización otorgada</li>
              <li><strong className="text-gray-900">Quejas:</strong> Presentar quejas ante la Superintendencia de Industria y Comercio</li>
            </ul>

            <h2 className="text-gray-900">8. Medidas de Seguridad</h2>
            <h3 className="text-gray-900">Medidas Técnicas</h3>
            <ul className="text-gray-700">
              <li>Cifrado de datos en tránsito y en reposo</li>
              <li>Controles de acceso basados en roles</li>
              <li>Autenticación de usuarios</li>
              <li>Monitoreo de accesos y actividades sospechosas</li>
              <li>Respaldos periódicos de información</li>
              <li>Protocolos seguros de comunicación (HTTPS, SSL/TLS)</li>
            </ul>

            <h3 className="text-gray-900">Medidas Administrativas</h3>
            <ul className="text-gray-700">
              <li>Políticas de seguridad documentadas</li>
              <li>Capacitación periódica del personal</li>
              <li>Acuerdos de confidencialidad</li>
              <li>Auditorías periódicas de seguridad</li>
            </ul>

            <h2 className="text-gray-900">9. Procedimiento para el Ejercicio de Derechos</h2>
            <h3 className="text-gray-900">Canales de Atención</h3>
            <ul className="text-gray-700">
              <li><strong className="text-gray-900">WhatsApp:</strong> (+57) 301 624 1863</li>
              <li><strong className="text-gray-900">Correo electrónico:</strong> contacto@cailico.com</li>
              <li><strong className="text-gray-900">Formulario web:</strong> Disponible en el sitio web de Cailico</li>
            </ul>

            <h3 className="text-gray-900">Términos de Respuesta</h3>
            <p className="text-gray-700">
              Consultas: máximo 10 días hábiles (prorrogables 5 días más)<br />
              Reclamos: máximo 15 días hábiles (prorrogables 8 días más)
            </p>

            <h2 className="text-gray-900">10. Conservación y Supresión de Datos</h2>
            <p className="text-gray-700">
              Los datos personales serán conservados durante el tiempo necesario para cumplir las finalidades del Tratamiento y obligaciones legales. Los datos de la comunidad educativa se conservarán mientras la institución mantenga activo el servicio AIPEC y hasta 30 días después de la terminación del contrato.
            </p>

            <h2 className="text-gray-900">11. Contacto</h2>
            <ul className="text-gray-700">
              <li><strong className="text-gray-900">WhatsApp:</strong> (+57) 301 624 1863</li>
              <li><strong className="text-gray-900">Correo electrónico:</strong> contacto@cailico.com</li>
              <li><strong className="text-gray-900">Oficinas:</strong> Departamento de Sucre, Colombia</li>
            </ul>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                <strong className="text-gray-700">CAILICO SAS</strong><br />
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

export default PrivacyPage;
