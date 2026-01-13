import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Heart, Sparkles } from "lucide-react";
import dentistPortrait from "@/assets/golden.png";

const highlights = [
  {
    icon: Award,
    title: "Especialização",
    description: "Harmonização Orofacial e Estética Dental",
  },
  {
    icon: Sparkles,
    title: "Experiência",
    description: "+10 anos transformando sorrisos",
  },
  {
    icon: Heart,
    title: "Atendimento",
    description: "Cuidado personalizado e humanizado",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0">
              {/* Gold frame decoration */}
              <div className="absolute -inset-4 border-2 border-primary/30 rounded-lg" />
              <div className="absolute -inset-8 border border-primary/10 rounded-lg" />
              
              {/* Image */}
              <div className="relative h-full w-full overflow-hidden rounded-lg">
                <img
                  src={dentistPortrait}
                  alt="Dra. Helena Costa"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -right-6 -bottom-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-gold"
              >
                <span className="block font-display text-4xl font-semibold">+10</span>
                <span className="text-sm font-body">anos</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="gold-divider-left mb-6" />
            
            <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-6">
             Golden Smile
            </h2>
            
            <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
              Com mais de uma década dedicada à odontologia estética, na Golden Smile acreditamos que git init
um sorriso bonito vai muito além da aparência — ele reflete confiança, bem-estar e qualidade de vida.
            </p>
            
            <p className="font-body text-muted-foreground mb-10 leading-relaxed">
              Nossa equipe é formada por especialistas com treinamento nas melhores instituições do Brasil e do exterior, sempre atualizados com técnicas avançadas e seguras, garantindo resultados naturais, harmoniosos e personalizados para cada paciente.npm run deploy


            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-3 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center sm:text-left"
                >
                  <item.icon className="w-8 h-8 text-primary mb-3 mx-auto sm:mx-0" />
                  <h3 className="font-display text-lg font-medium text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
