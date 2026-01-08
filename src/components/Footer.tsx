import { motion } from "framer-motion";
import { Linkedin, Instagram, Mail, MapPin } from "lucide-react";
import logo from "@/assets/cailico-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "Inicio", href: "#hero" },
    { label: "Producto", href: "#features" },
    { label: "Cómo Funciona", href: "#how-it-works" },
    { label: "Casos de Uso", href: "#use-cases" },
    { label: "Contacto", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Mail, href: "mailto:contacto@cailico.co", label: "Email" },
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
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
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
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
          <p>
            © {currentYear} Cailico - Agencia de Inteligencia Artificial |
            Colombia
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Política de privacidad
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Términos de uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
