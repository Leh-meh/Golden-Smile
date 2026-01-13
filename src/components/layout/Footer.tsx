import { Instagram, Facebook, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const quickLinks = [
  { name: "Início", href: "#inicio" },
  { name: "Sobre", href: "#sobre" },
  { name: "Serviços", href: "#servicos" },
  { name: "Resultados", href: "#resultados" },
  { name: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-semibold mb-4">
              Golden Smile 
            </h3>
            <p className="font-body text-background/70 mb-6 leading-relaxed">
              Odontologia estética premium com foco em resultados naturais e
              atendimento humanizado.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-background/30 flex items-center justify-center hover:bg-background hover:text-foreground transition-colors duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-medium mb-6">
              Links Rápidos
            </h4>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-body text-background/70 hover:text-background transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-medium mb-6">Contato</h4>
            <div className="space-y-3 font-body text-background/70">
              <p>Av. Paulista, 1000 - Sala 1501</p>
              <p>São Paulo - SP</p>
              <p>(11) 3456-7890</p>
              <p>contato@golden-smile.com.br</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-background/10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm font-body text-background/50">
          <p>© 2026 Dra. Helena Costa. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
