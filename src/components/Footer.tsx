import { motion } from "framer-motion";
import { Linkedin, Instagram, Mail, MapPin } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/cailico-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { label: "Inicio", sectionId: "inicio" },
    { label: "¿Quiénes Somos?", sectionId: "quienes-somos" },
    { label: "Servicio", sectionId: "servicio" },
    { label: "Proceso", sectionId: "proceso" },
    { label: "Contacto", sectionId: "contacto" },
  ];

  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/?section=" + sectionId);
      return;
    }
    if (sectionId === "contacto") {
      window.dispatchEvent(new Event("reveal-all-steps"));
    }
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Mail, href: "mailto:contacto@cailico.co", label: "Email" },
  ];

  const legalLinks = [
    { label: "Términos de uso", to: "/terminos" },
    { label: "Política de privacidad", to: "/privacidad" },
    { label: "Política de seguridad", to: "/seguridad" },
  ];

  return (
    <footer className="bg-primary py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src={logo} alt="Cailico" className="h-10 mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/70 max-w-sm mb-4">
              Agencia de Inteligencia Artificial especializada en infraestructura
              tecnológica para instituciones educativas.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
              <MapPin className="w-4 h-4" />
              Colombia • Latinoamérica
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">
              Enlaces
            </h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href="/"
                    onClick={(e) => scrollToSection(e, link.sectionId)}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">
              Síguenos
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:bg-primary-foreground/20 hover:text-primary-foreground transition-all"
                  whileHover={{ scale: 1.1 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-start md:items-center gap-4 text-sm text-primary-foreground/60">
          <p className="shrink-0">
            © {currentYear} Cailico - Agencia de Inteligencia Artificial | Colombia
          </p>
          <div className="flex flex-wrap gap-4 md:gap-6 md:ml-auto md:mr-52">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="hover:text-primary-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
