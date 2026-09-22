import { getProfile } from "@/lib/content";

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.4 5.4 0 0 0-1.5-3.8 5.4 5.4 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.6 5 2 5 2a5.4 5.4 0 0 0-.1 3.8A5.4 5.4 0 0 0 3 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default async function Footer() {
  const profile = await getProfile();

  return (
    <footer className="relative border-t border-white/10 py-12 mt-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-display font-semibold text-lg tracking-tight">{profile.name}</p>
          <p className="text-sm text-foreground/55">{profile.location}</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 min-w-11 min-h-11 inline-flex items-center justify-center border border-white/10 bg-white/[0.03] hover:border-accent/40 hover:text-accent transition-all duration-300"
            aria-label="GitHub"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 min-w-11 min-h-11 inline-flex items-center justify-center border border-white/10 bg-white/[0.03] hover:border-accent/40 hover:text-accent transition-all duration-300"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={20} />
          </a>
        </div>

        <div className="text-sm text-foreground/55">
          &copy; {new Date().getFullYear()} Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
