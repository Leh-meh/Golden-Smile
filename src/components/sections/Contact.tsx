import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    content: "Av. Paulista, 1000 - Sala 1501\nBela Vista, São Paulo - SP",
  },
  {
    icon: Phone,
    title: "Telefone",
    content: "(11) 3456-7890",
  },
  {
    icon: Mail,
    title: "E-mail",
    content: "contato@drahelena.com.br",
  },
  {
    icon: Clock,
    title: "Horário",
    content: "Seg - Sex: 9h às 19h\nSáb: 9h às 13h",
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta.",
      "_blank"
    );
  };

  return (
    <section id="contato" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="gold-divider-left mb-6" />
            <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-6">
              Entre em contato
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-10 leading-relaxed">
              Agende sua avaliação e dê o primeiro passo para o sorriso dos seus
              sonhos. Atendimento exclusivo com hora marcada.
            </p>

            {/* Contact Info Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-medium text-foreground mb-1">
                      {item.title}
                    </p>
                    <p className="font-body text-sm text-muted-foreground whitespace-pre-line">
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* WhatsApp Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button
                variant="whatsapp"
                size="xl"
                onClick={handleWhatsApp}
                className="gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                Agendar pelo WhatsApp
              </Button>
            </motion.div>
          </motion.div>

          {/* Map/Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-muted rounded-2xl overflow-hidden shadow-elevated">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.923870079379!2d-46.65454068448099!3d-23.565842168151282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c9a36b19f5%3A0x7f0b7f1e9286e5c6!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1705119000000!5m2!1spt-BR!2sbr"
                className="w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/20 rounded-lg -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-primary/10 rounded-lg -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
