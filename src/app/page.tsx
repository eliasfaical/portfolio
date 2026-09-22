import { getProfile, getServices } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightPanel } from "@/components/ui/SpotlightPanel";
import { ArrowRight, Globe, LayoutTemplate, ShoppingCart } from "lucide-react";
import Link from "next/link";

const iconMap = {
  Globe: <Globe className="text-accent w-9 h-9 mb-5" strokeWidth={1.5} />,
  LayoutTemplate: <LayoutTemplate className="text-accent w-9 h-9 mb-5" strokeWidth={1.5} />,
  ShoppingCart: <ShoppingCart className="text-accent w-9 h-9 mb-5" strokeWidth={1.5} />,
};

const marqueeItems = [
  "Next.js",
  "TypeScript",
  "React",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "Performance",
  "SEO",
  "Acessibilidade",
  "Design Systems",
];

export default async function Home() {
  const profile = await getProfile();
  const services = await getServices();
  const loop = [...marqueeItems, ...marqueeItems];

  return (
    <div className="flex flex-col gap-28 md:gap-36 min-h-[100dvh]">
      {/* Hero */}
      <section className="relative px-6 max-w-7xl mx-auto w-full pt-10 md:pt-20 pb-8">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-8 top-8 w-48 h-48 md:w-[28rem] md:h-[28rem] rounded-full bg-accent/[0.07] blur-3xl animate-soft-float"
        />

        <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-10 lg:gap-8 items-center">
          <div className="max-w-5xl">
            <p className="animate-fade-up font-display text-accent text-sm md:text-base font-semibold tracking-[0.18em] uppercase mb-8">
              {profile.name}
            </p>

            <div className="animate-fade-up delay-100 inline-flex items-center gap-3 px-4 py-2 border border-white/10 bg-white/[0.03] text-sm font-medium mb-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <span className="w-2 h-2 rounded-sm bg-accent animate-status" />
              Disponível para novos projetos
            </div>

            <h1 className="animate-fade-up delay-200 font-display text-[2.75rem] leading-[0.95] sm:text-6xl md:text-7xl lg:text-[6.25rem] font-extrabold tracking-tight sm:leading-[0.92] mb-8 text-balance">
              Sites leves
              <br />
              e <span className="text-accent">semânticos.</span>
            </h1>

            <p className="animate-fade-up delay-300 text-lg md:text-xl text-foreground/60 mb-10 max-w-[48ch] leading-relaxed">
              {profile.subheadline}
            </p>

            <div className="animate-fade-up delay-400 flex flex-col sm:flex-row gap-4">
              <Button href="/portfolio" className="text-base px-8 py-4">
                Ver Projetos
              </Button>
              <Button href="/sobre" variant="secondary" className="text-base px-8 py-4">
                Sobre Mim
              </Button>
            </div>
          </div>

          <div
            aria-hidden
            className="animate-fade-in delay-500 relative hidden lg:flex items-center justify-center min-h-[420px]"
          >
            <div className="absolute inset-8 border border-white/10 rotate-3 transition-transform duration-700" />
            <div className="absolute inset-12 border border-accent/25 -rotate-2" />
            <div className="relative flex flex-col items-center gap-6 p-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ef.png"
                alt=""
                className="w-36 h-36 xl:w-44 xl:h-44 object-contain drop-shadow-[0_20px_50px_rgba(245,166,35,0.25)] animate-soft-float"
              />
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-foreground/40">
                Est. 12+ anos
              </p>
            </div>
          </div>
        </div>

        <div className="animate-fade-in delay-700 mt-16 md:mt-24 border-y border-white/10 py-4 overflow-hidden">
          <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
            {loop.map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-foreground/40"
              >
                {item}
                <span className="text-accent/50 ml-10">/</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 max-w-7xl mx-auto w-full">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight leading-none mb-4">
                O que eu faço
              </h2>
              <p className="text-foreground/60 text-base md:text-lg max-w-[55ch] leading-relaxed">
                Soluções ponta a ponta focadas em performance, escalabilidade e na melhor
                experiência para o usuário final.
              </p>
            </div>
            <Link
              href="/sobre"
              className="group text-accent inline-flex items-center gap-2 font-medium transition-colors hover:text-accent/80"
            >
              Ver detalhes
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5">
          <Reveal className="lg:col-span-2" delay={80}>
            <SpotlightPanel className="h-full p-8 md:p-14 flex flex-col justify-center min-h-[280px]">
              {iconMap[services[0].icon as keyof typeof iconMap]}
              <h3 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-5">
                {services[0].title}
              </h3>
              <p className="text-foreground/60 text-base md:text-lg max-w-[45ch] leading-relaxed mb-8">
                {services[0].description}
              </p>
              <div>
                <Button href="/contato" className="px-8 py-4">
                  Quero um site que converte
                </Button>
              </div>
            </SpotlightPanel>
          </Reveal>

          <div className="flex flex-col gap-4 md:gap-5">
            <Reveal delay={160} className="flex-1">
              <SpotlightPanel className="h-full p-8 md:p-10 flex flex-col justify-center">
                {iconMap[services[1].icon as keyof typeof iconMap]}
                <h3 className="font-display text-2xl font-bold tracking-tight mb-3">
                  {services[1].title}
                </h3>
                <p className="text-foreground/60 text-base leading-relaxed">
                  {services[1].description}
                </p>
              </SpotlightPanel>
            </Reveal>
            <Reveal delay={240} className="flex-1">
              <SpotlightPanel className="h-full p-8 md:p-10 flex flex-col justify-center">
                {iconMap[services[2].icon as keyof typeof iconMap]}
                <h3 className="font-display text-2xl font-bold tracking-tight mb-3">
                  {services[2].title}
                </h3>
                <p className="text-foreground/60 text-base leading-relaxed">
                  {services[2].description}
                </p>
              </SpotlightPanel>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 max-w-7xl mx-auto w-full mb-16">
        <Reveal>
          <div className="relative overflow-hidden border border-white/10 bg-surface p-10 md:p-20 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 w-56 h-56 rounded-full bg-accent/10 blur-3xl"
            />
            <h2 className="relative font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
              Pronto para iniciar seu projeto?
            </h2>
            <p className="relative text-foreground/60 text-base md:text-lg mb-10 max-w-[48ch] mx-auto leading-relaxed">
              Vamos conversar sobre suas ideias e transformá-las em realidade. Entre em contato
              para discutirmos os próximos passos.
            </p>
            <div className="relative">
              <Button href="/contato" className="px-10 py-5 text-base font-semibold">
                Fale Comigo
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
