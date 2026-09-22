import { getProfile, getServices } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightPanel } from "@/components/ui/SpotlightPanel";
import { Globe, LayoutTemplate, ShoppingCart } from "lucide-react";

const iconMap = {
  Globe: <Globe className="text-accent w-7 h-7" strokeWidth={1.5} />,
  LayoutTemplate: <LayoutTemplate className="text-accent w-7 h-7" strokeWidth={1.5} />,
  ShoppingCart: <ShoppingCart className="text-accent w-7 h-7" strokeWidth={1.5} />,
};

export default async function Sobre() {
  const profile = await getProfile();
  const services = await getServices();

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 mb-20">
        <Reveal>
          <p className="text-accent font-mono text-xs uppercase tracking-[0.2em] mb-4">Sobre</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-8">
            Sobre Mim
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-[58ch]">
            {profile.bio}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative border border-white/10 bg-surface p-8 md:p-10 h-full min-h-[240px] flex flex-col justify-end overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <div
              aria-hidden
              className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-accent/15 blur-3xl animate-soft-float"
            />
            <p className="font-display text-5xl md:text-6xl font-extrabold tracking-tight text-accent mb-3">
              12+
            </p>
            <p className="text-foreground/55 text-sm uppercase tracking-[0.16em] font-mono">
              anos construindo produtos digitais
            </p>
            <p className="mt-8 text-foreground/70 leading-relaxed">{profile.location}</p>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-8">
          Serviços
        </h2>
      </Reveal>

      <div className="flex flex-col gap-4">
        {services.map((service, index) => (
          <Reveal key={service.id} delay={index * 80}>
            <SpotlightPanel className="flex flex-col md:flex-row gap-6 items-start md:items-center p-6 md:p-8">
              <div className="p-4 border border-white/10 bg-white/[0.03] shrink-0">
                {iconMap[service.icon as keyof typeof iconMap]}
              </div>
              <div>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-mono text-xs text-accent/80 tracking-wider">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl font-bold tracking-tight">
                    {service.title}
                  </h3>
                </div>
                <p className="text-foreground/60 leading-relaxed max-w-[65ch]">
                  {service.description}
                </p>
              </div>
            </SpotlightPanel>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
