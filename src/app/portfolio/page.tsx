import { getProjects } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";

export default async function Portfolio() {
  const projects = await getProjects();

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 md:py-12">
      <Reveal>
        <div className="max-w-2xl mb-14 md:mb-16">
          <p className="text-accent font-mono text-xs uppercase tracking-[0.2em] mb-4">
            Portfólio
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-5">
            Projetos em Destaque
          </h1>
          <p className="text-lg text-foreground/60 leading-relaxed">
            Uma seleção de trabalhos recentes demonstrando minha experiência em desenvolvimento
            web de ponta a ponta.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 90}>
            <article className="group surface-panel flex flex-col h-full overflow-hidden">
              <div className="project-plane relative h-44 md:h-52 border-b border-white/10 overflow-hidden">
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-40 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                  }}
                />
                <div className="absolute bottom-4 left-5 font-mono text-xs uppercase tracking-[0.18em] text-foreground/45">
                  {String(index + 1).padStart(2, "0")}
                </div>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 p-2.5 min-w-11 min-h-11 inline-flex items-center justify-center border border-white/15 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:bg-accent hover:text-background hover:border-accent"
                    aria-label={`Ver ${project.title} ao vivo`}
                  >
                    <ArrowUpRight size={18} strokeWidth={1.5} />
                  </a>
                )}
              </div>

              <div className="flex flex-col flex-1 p-6 md:p-8">
                <h3 className="font-display text-2xl font-bold tracking-tight mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-foreground/60 mb-8 flex-grow leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 border border-white/10 font-mono text-[11px] uppercase tracking-wider text-foreground/65"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
