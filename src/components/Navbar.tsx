import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/cailico-logo-white-border.png";

interface NavbarProps {
  loadingPhase?: 'image' | 'text' | 'ui' | 'complete';
}

const Navbar = ({ loadingPhase = 'complete' }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const showNavbar = loadingPhase === 'ui' || loadingPhase === 'complete';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "INICIO", href: "#hero" },
    { label: "¿QUIÉNES SOMOS?", href: "#what-is" },
    { label: "NUESTROS SERVICIOS", href: "#features" },
    { label: "CASOS DE USO", href: "#use-cases" },
    { label: "CONTACTO", href: "#contact" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-lg" : "bg-transparent"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: showNavbar ? 1 : 0 }}
      transition={{ duration: 0.3, delay: 0.05 }}
    >
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "h-12 md:h-14" : "h-16 md:h-20"
        }`}>
          {/* Logo */}
          <a href="#hero" className="flex items-center">
            <img 
              src={logo} 
              alt="Cailico" 
              className={`transition-all duration-300 ${
                isScrolled ? "h-8 md:h-10" : "h-10 md:h-12"
              }`} 
            />
          </a>

          {/* Desktop Navigation - aligned right */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs lg:text-sm font-semibold text-white hover:text-secondary transition-colors tracking-wide"
              >
                {item.label}
              </a>
            ))}
            {/* CTA Button inline with nav */}
            <Button variant="hero" size="sm" asChild>
              <a href="#contact">AGENDAR REUNIÓN</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden py-4 border-t border-white/20 bg-black/95"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-3 text-sm font-semibold text-white hover:text-secondary transition-colors tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button variant="hero" size="sm" className="w-full mt-4" asChild>
              <a href="#contact">AGENDAR REUNIÓN</a>
            </Button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
