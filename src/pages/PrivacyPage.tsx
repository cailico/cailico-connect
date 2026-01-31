import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/cailico-logo.png";

const PrivacyPage = () => {
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
            Política de Privacidad y Tratamiento de Datos Personales
          </h1>
          <p className="text-muted-foreground mb-8">
            <strong>CAILICO SAS</strong> | Vigencia: Enero de 2026
          </p>

          <div className="bg-muted/50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-foreground mt-0">¡GRACIAS POR CONFIAR EN CAILICO!</h2>
            <p className="text-muted-foreground mb-0">
              Su confianza es lo más importante para nosotros y estamos comprometidos en proteger la privacidad y la seguridad de sus datos personales. Contamos con un equipo dedicado que se compromete a proteger todos los datos personales que procesamos.
            </p>
          </div>

          <h2>1. Introducción y Objetivos</h2>
          <p>
            Esta Política de Privacidad es el documento que regula el manejo de todas las bases de datos de Cailico SAS, que contengan datos personales de estudiantes, padres de familia, profesores, directivos, contratistas, proveedores y en general terceros, conforme a las disposiciones de la Ley Estatutaria 1581 de 2012 y el Decreto 1377 de 2013.
          </p>

          <h3>1.1 Ámbito de Aplicación</h3>
          <p>Esta Política de Privacidad aplica a:</p>
          <ul>
            <li>Instituciones educativas que contratan los servicios de Cailico</li>
            <li>Estudiantes cuyos datos son tratados a través de AIPEC</li>
            <li>Padres de familia cuyos datos son tratados a través de AIPEC</li>
            <li>Profesores y directivos cuyos datos son tratados a través de AIPEC</li>
            <li>Empleados y contratistas de Cailico</li>
            <li>Proveedores y aliados comerciales</li>
          </ul>

          <h2>2. Definiciones</h2>
          <ul>
            <li><strong>Autorización:</strong> Consentimiento previo, expreso e informado del Titular para llevar a cabo el Tratamiento de datos personales.</li>
            <li><strong>AIPEC:</strong> Artificial Intelligence Powered Educational Communication. Infraestructura de inteligencia artificial desarrollada por Cailico.</li>
            <li><strong>Datos Personales:</strong> Cualquier información vinculada o que pueda asociarse a una o varias personas naturales.</li>
            <li><strong>Datos Sensibles:</strong> Aquellos que afectan la intimidad del Titular o cuyo uso indebido puede generar su discriminación.</li>
            <li><strong>Titular:</strong> Persona natural cuyos datos personales sean objeto de Tratamiento.</li>
            <li><strong>Tratamiento:</strong> Cualquier operación sobre datos personales como recolección, almacenamiento, uso, circulación o supresión.</li>
          </ul>

          <h2>3. Identificación del Responsable</h2>
          <ul>
            <li><strong>Razón Social:</strong> Cailico SAS</li>
            <li><strong>NIT:</strong> 901697615-9</li>
            <li><strong>Domicilio:</strong> Departamento de Sucre, Colombia</li>
            <li><strong>CEO:</strong> Juan Sebastián Castillo</li>
            <li><strong>Contacto:</strong> WhatsApp (+57) 301 624 1863 / contacto@cailico.com</li>
          </ul>

          <h2>4. Datos Personales Tratados</h2>
          <h3>Datos de Estudiantes</h3>
          <ul>
            <li>Nombres completos y número de identificación</li>
            <li>Grado y grupo académico</li>
            <li>Materias cursadas y calificaciones</li>
            <li>Actividades académicas asignadas</li>
          </ul>

          <h3>Datos de Padres de Familia</h3>
          <ul>
            <li>Nombres completos</li>
            <li>Números de teléfono (WhatsApp)</li>
            <li>Relación con estudiantes (parentesco)</li>
          </ul>

          <h3>Datos de Profesores y Directivos</h3>
          <ul>
            <li>Nombres completos y contacto</li>
            <li>Materias que imparten</li>
            <li>Grados y grupos asignados</li>
            <li>Cargo institucional</li>
          </ul>

          <h2>5. Principios Rectores del Tratamiento</h2>
          <ul>
            <li><strong>Legalidad:</strong> Tratamiento conforme a la Ley 1581 de 2012</li>
            <li><strong>Finalidad:</strong> Tratamiento para finalidades legítimas informadas al Titular</li>
            <li><strong>Libertad:</strong> Tratamiento solo con consentimiento previo</li>
            <li><strong>Veracidad:</strong> Información veraz, completa, exacta y actualizada</li>
            <li><strong>Transparencia:</strong> Derecho a obtener información sobre sus datos</li>
            <li><strong>Seguridad:</strong> Medidas técnicas y administrativas de protección</li>
            <li><strong>Confidencialidad:</strong> Reserva de la información</li>
          </ul>

          <h2>6. Finalidades del Tratamiento</h2>
          <ul>
            <li>Prestación de los servicios de la infraestructura AIPEC</li>
            <li>Cumplimiento de obligaciones contractuales</li>
            <li>Comunicación con clientes, usuarios y titulares</li>
            <li>Mejora y desarrollo de productos y servicios</li>
            <li>Cumplimiento de obligaciones legales</li>
            <li>Soporte técnico y atención al cliente</li>
          </ul>

          <h2>7. Derechos de los Titulares</h2>
          <ul>
            <li><strong>Acceso:</strong> Conocer, actualizar y rectificar sus datos personales</li>
            <li><strong>Consulta:</strong> Solicitar información sobre los datos que reposan en las bases</li>
            <li><strong>Actualización:</strong> Solicitar la actualización de datos incompletos</li>
            <li><strong>Supresión:</strong> Solicitar la eliminación de sus datos personales</li>
            <li><strong>Revocación:</strong> Revocar la autorización otorgada</li>
            <li><strong>Quejas:</strong> Presentar quejas ante la Superintendencia de Industria y Comercio</li>
          </ul>

          <h2>8. Medidas de Seguridad</h2>
          <h3>Medidas Técnicas</h3>
          <ul>
            <li>Cifrado de datos en tránsito y en reposo</li>
            <li>Controles de acceso basados en roles</li>
            <li>Autenticación de usuarios</li>
            <li>Monitoreo de accesos y actividades sospechosas</li>
            <li>Respaldos periódicos de información</li>
            <li>Protocolos seguros de comunicación (HTTPS, SSL/TLS)</li>
          </ul>

          <h3>Medidas Administrativas</h3>
          <ul>
            <li>Políticas de seguridad documentadas</li>
            <li>Capacitación periódica del personal</li>
            <li>Acuerdos de confidencialidad</li>
            <li>Auditorías periódicas de seguridad</li>
          </ul>

          <h2>9. Procedimiento para el Ejercicio de Derechos</h2>
          <h3>Canales de Atención</h3>
          <ul>
            <li><strong>WhatsApp:</strong> (+57) 301 624 1863</li>
            <li><strong>Correo electrónico:</strong> contacto@cailico.com</li>
            <li><strong>Formulario web:</strong> Disponible en el sitio web de Cailico</li>
          </ul>

          <h3>Términos de Respuesta</h3>
          <p>
            Consultas: máximo 10 días hábiles (prorrogables 5 días más)<br />
            Reclamos: máximo 15 días hábiles (prorrogables 8 días más)
          </p>

          <h2>10. Conservación y Supresión de Datos</h2>
          <p>
            Los datos personales serán conservados durante el tiempo necesario para cumplir las finalidades del Tratamiento y obligaciones legales. Los datos de la comunidad educativa se conservarán mientras la institución mantenga activo el servicio AIPEC y hasta 30 días después de la terminación del contrato.
          </p>

          <h2>11. Contacto</h2>
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
      </main>
    </div>
  );
};

export default PrivacyPage;
