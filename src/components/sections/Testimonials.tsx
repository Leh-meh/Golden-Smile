import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carolina Mendes",
    role: "Empresária",
    content:
      "A Dra. Helena transformou completamente minha autoestima. O resultado das lentes de contato foi além do que eu esperava. Profissionalismo impecável!",
    rating: 5,
  },
  {
    name: "Fernanda Silva",
    role: "Advogada",
    content:
      "Atendimento premium do início ao fim. Me senti acolhida e segura durante todo o tratamento. Meu sorriso nunca esteve tão bonito.",
    rating: 5,
  },
  {
    name: "Mariana Torres",
    role: "Arquiteta",
    content:
      "A experiência na clínica é única. Ambiente sofisticado, equipe atenciosa e resultados naturais. Recomendo de olhos fechados!",
    rating: 5,
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="gold-divider mb-6" />
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-4">
            O que dizem
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            A satisfação de cada paciente é a nossa maior conquista.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="luxury-card relative"
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="font-body text-muted-foreground leading-relaxed mb-8 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="pt-6 border-t border-border">
                <p className="font-display text-lg font-medium text-foreground">
                  {testimonial.name}
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
