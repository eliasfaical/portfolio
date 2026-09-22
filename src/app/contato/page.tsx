import { ContactForm } from "@/components/ui/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { Mail, MapPin } from "lucide-react";

export default function Contato() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        <Reveal>
          <p className="text-accent font-mono text-xs uppercase tracking-[0.2em] mb-4">
            Contato
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Vamos Conversar
          </h1>
          <p className="text-lg text-foreground/60 mb-12 leading-relaxed max-w-[40ch]">
            Tem um projeto em mente ou precisa de ajuda técnica? Preencha o formulário e entrarei
            em contato o mais rápido possível.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4 border border-white/10 bg-surface/60 p-4 transition-colors hover:border-accent/30">
              <div className="w-11 h-11 border border-white/10 bg-white/[0.03] flex items-center justify-center text-accent shrink-0">
                <Mail size={20} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.14em] font-mono text-foreground/45 mb-1">
                  E-mail direto
                </p>
                <p className="font-medium">contato@eliasfaical.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 border border-white/10 bg-surface/60 p-4 transition-colors hover:border-accent/30">
              <div className="w-11 h-11 border border-white/10 bg-white/[0.03] flex items-center justify-center text-accent shrink-0">
                <MapPin size={20} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.14em] font-mono text-foreground/45 mb-1">
                  Localização
                </p>
                <p className="font-medium">Vila Velha/ES, Brasil</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative border border-white/10 bg-surface p-7 md:p-9 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
            />
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
