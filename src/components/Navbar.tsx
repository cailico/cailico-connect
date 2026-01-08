import { motion, AnimatePresence } from "framer-motion";
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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navItems = [
    { label: "INICIO", href: "#hero" },
    { label: "¿QUIÉNES SOMOS?", href: "#quienes-somos" },
    { label: "PRODUCTO", href: "#features" },
    { label: "CASOS DE USO", href: "#use-cases" },
    { label: "CONTACTO", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-black/95 backdrop-blur-lg" : "bg-transparent"
        }`}
        initial={{ y: "-100%" }}
        animate={{ y: showNavbar ? 0 : "-100%" }}
        transition={{ duration: 0.25, ease: "linear" }}
      >
        <div className="container mx-auto px-4">
          <div className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "h-12 md:h-14" : "h-14 md:h-20"
          }`}>
            {/* Logo */}
            <a href="#hero" className="flex items-center">
              <img 
                src={logo} 
                alt="Cailico" 
                className={`transition-all duration-300 ${
                  isScrolled ? "h-8 md:h-10" : "h-9 md:h-12"
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
              <Menu className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Side Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 z-50 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Side Panel */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-background z-50 md:hidden flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Close button */}
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 border border-secondary text-secondary"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav Items */}
              <nav className="flex-1 px-6 py-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="block py-4 text-base font-semibold text-foreground hover:text-secondary transition-colors tracking-wide"
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
                
                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.05 + 0.1 }}
                  className="mt-6"
                >
                  <Button variant="hero" size="default" className="w-full" asChild>
                    <a href="#contact" onClick={() => setIsOpen(false)}>
                      AGENDAR REUNIÓN
                    </a>
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
