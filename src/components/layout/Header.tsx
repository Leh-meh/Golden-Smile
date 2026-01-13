import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Início", id: "inicio" },
  { name: "Sobre", id: "sobre" },
  { name: "Serviços", id: "servicos" },
  { name: "Resultados", id: "resultados" },
  { name: "Depoimentos", id: "depoimentos" },
  { name: "Contato", id: "contato" },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    const yOffset = -100;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2">
          <span className="font-display text-2xl font-semibold text-foreground">
           Golden <span className="text-gold-gradient">Smile </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              className="text-sm font-body font-medium text-muted-foreground hover:text-primary transition-colors relative group"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button variant="luxury" onClick={() => scrollToSection("contato")}>
            Agendar Consulta
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-foreground p-2 mt-4"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
  {isMobileMenuOpen && (
    <motion.div
      initial={{ opacity: 0, scaleY: 0 }}
      animate={{ opacity: 1, scaleY: 1 }}
      exit={{ opacity: 0, scaleY: 0 }}
      transition={{ duration: 0.3 }}
      className="lg:hidden bg-background border-t border-border origin-top"
    >
      <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
        {navLinks.map((link) => (
          <button
            key={link.name}
            className="text-base font-body text-muted-foreground hover:text-primary transition-colors py-2 text-left"
            onClick={() => {
              scrollToSection(link.id);
              setIsMobileMenuOpen(false);
            }}
          >
            {link.name}
          </button>
        ))}

        <Button
          variant="luxury"
          className="mt-4"
          onClick={() => {
            scrollToSection("contato");
            setIsMobileMenuOpen(false);
          }}
        >
          Agendar Consulta
        </Button>
      </nav>
    </motion.div>
  )}
</AnimatePresence>

    </header>
  );
}
