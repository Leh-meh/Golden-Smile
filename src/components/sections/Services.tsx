import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Smile,
  Sparkles,
  Syringe,
  Scan,
  Gem,
  Shield,
} from "lucide-react";

const services = [
  {
    title: "Lentes de Contato em Porcelana",
    description:
      "Correção estética avançada para forma, cor e alinhamento dos dentes, garantindo um sorriso harmônico e natural.",
    icon: Gem,
  },
  {
    title: "Clareamento Dental Profissional",
    description:
      "Tratamento seguro e eficaz para remover manchas e devolver o branco natural dos dentes.",
    icon: Sparkles,
  },
  {
    title: "Harmonização Orofacial",
    description:
      "Procedimentos personalizados que equilibram estética facial e sorriso com naturalidade.",
    icon: Syringe,
  },
  {
    title: "Design do Sorriso Digital",
    description:
      "Planejamento digital que permite visualizar o resultado final antes do início do tratamento.",
    icon: Scan,
  },
  {
    title: "Odontologia Estética",
    description:
      "Tratamentos focados em beleza, função e saúde bucal com técnicas modernas.",
    icon: Smile,
  },
  {
    title: "Atendimento Seguro",
    description:
      "Protocolos rigorosos de biossegurança para máximo conforto e tranquilidade.",
    icon: Shield,
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicos" className="py-24 md:py-32 bg-background">
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
            Especialidades
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Tratamentos exclusivos com as técnicas mais avançadas da odontologia
            estética moderna.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="luxury-card group"
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
              </div>

              <h3 className="font-display text-xl font-medium text-foreground mb-3">
                {service.title}
              </h3>

              <p className="font-body text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover line */}
              <div className="mt-6 h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
