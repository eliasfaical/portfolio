"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/portfolio", label: "Projetos" },
  { href: "/contato", label: "Contato" },
];

const MenuIcon = ({ size = 24 }: { size?: number }) => (
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
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = ({ size = 24 }: { size?: number }) => (
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
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-background/75 backdrop-blur-xl shadow-[inset_0_-1px_0_rgba(255,255,255,0.03)]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 group"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/ef.png"
            alt="EF Logo"
            className="w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-display font-bold text-xl tracking-tight hidden sm:block">
            Elias Faiçal
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-3 py-2 transition-colors duration-300 ${
                isActive(link.href)
                  ? "text-accent"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {link.label}
              <span
                className={`absolute left-3 right-3 -bottom-0.5 h-px bg-accent transition-transform duration-300 origin-left ${
                  isActive(link.href) ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <Link
            href="/contato"
            className="bg-accent text-background px-4 py-2.5 rounded-full font-medium text-sm transition-all duration-300 hover:bg-accent/90 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            Vamos conversar
          </Link>
        </div>

        <button
          className="md:hidden p-2.5 min-w-11 min-h-11 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Alternar menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div
        className={`md:hidden absolute top-20 left-0 w-full h-[calc(100dvh-5rem)] bg-background/95 backdrop-blur-xl border-t border-white/10 px-6 py-8 flex flex-col gap-8 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-2 text-2xl font-display font-semibold">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`py-3 border-b border-white/5 transition-colors ${
                isActive(link.href) ? "text-accent" : "text-foreground/85 hover:text-accent"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contato"
          onClick={() => setIsMobileMenuOpen(false)}
          className="bg-accent text-background px-6 py-3.5 rounded-full font-medium text-center hover:bg-accent/90 transition-colors"
        >
          Vamos conversar
        </Link>
      </div>
    </header>
  );
}
