import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    title: "Lentes de Contato em Porcelana",
    description:
      "Procedimento estético indicado para corrigir forma, cor e alinhamento dos dentes, proporcionando um sorriso harmônico e natural.",
    image: "/portfolio/case1.jpg",
  },
  {
    id: 2,
    title: "Clareamento Dental Profissional",
    description:
      "Tratamento seguro e eficaz para remover manchas e devolver o branco natural dos dentes, respeitando a saúde bucal.",
    image: "/portfolio/case2.jpg",
  },
  {
    id: 3,
    title: "Harmonização Orofacial",
    description:
      "Procedimentos personalizados para equilibrar estética facial e sorriso, realçando a beleza natural do paciente.",
    image: "/portfolio/case3.jpg",
  },
  {
    id: 4,
    title: "Design do Sorriso Digital",
    description:
      "Planejamento digital completo que permite visualizar o resultado final antes mesmo do início do tratamento.",
    image: "/portfolio/case4.jpg",
  },
];

export function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? portfolioItems.length - 1 : prev - 1
    );
  };

  return (
    <section id="resultados" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="gold-divider mb-6" />
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-4">
            Resultados Reais
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada sorriso transformado é uma história de confiança restaurada.
          </p>
        </motion.div>

        {/* CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-2xl bg-card shadow-elevated">
            <div className="grid md:grid-cols-2">
              {/*COLUNA ESQUERDA — TEXTO */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="font-body text-sm uppercase tracking-wider text-primary mb-4">
                  Caso {currentIndex + 1}/{portfolioItems.length}
                </span>

                <h3 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4">
                  {portfolioItems[currentIndex].title}
                </h3>

                <p className="font-body text-muted-foreground leading-relaxed mb-8">
                  {portfolioItems[currentIndex].description}
                </p>

                <div className="flex items-center gap-4">
                  <button
                    onClick={prevSlide}
                    className="w-12 h-12 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={nextSlide}
                    className="w-12 h-12 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* COLUNA DIREITA — IMAGEM */}
              <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-r-2xl">
                <img
                  src={portfolioItems[currentIndex].image}
                  alt={portfolioItems[currentIndex].title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* overlay elegante */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-8">
            {portfolioItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-6"
                    : "bg-primary/30 w-2 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
