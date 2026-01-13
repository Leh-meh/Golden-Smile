import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import marbleHero from "@/assets/marble-hero.jpg";

export function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6"
    >
      {/* Marble Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${marbleHero})` }}
      />

      {/* Overlay ajustada para mobile */}
      <div className="absolute inset-0 bg-white/50 md:bg-white/40 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto pt-16 md:pt-0"
        >
          {/* Gold divider top */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="gold-divider mb-6 md:mb-8"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-body text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground mb-4"
          >
            Odontologia Estética Premium
          </motion.p>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-foreground mb-4 md:mb-6 leading-snug sm:leading-tight"
          >
            Transforme seu sorriso,
            <br />
            <span className="text-gold-gradient italic">
              eleve sua confiança
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="font-body text-base sm:text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0"
          >
            Atendimento exclusivo e personalizado em harmonização orofacial e
            estética dental, com técnicas inovadoras e resultados naturais.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full"
          >
            <Button
              variant="hero"
              size="lg"
              className="w-full sm:w-auto py-6 sm:py-8 text-base sm:text-lg"
              onClick={() => scrollToSection("contato")}
            >
              Agendar Avaliação
            </Button>

            <Button
              variant="heroOutline"
              size="lg"
              className="w-full sm:w-auto py-6 sm:py-8 text-base sm:text-lg"
              onClick={() => scrollToSection("servicos")}
            >
              Conhecer Serviços
            </Button>
          </motion.div>

          {/* Gold divider bottom */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="gold-divider mt-12 sm:mt-16 md:mt-20"
          />
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#sobre"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 text-primary hover:text-primary/80 transition-colors cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={28} className="sm:w-8 sm:h-8" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}