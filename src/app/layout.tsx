import type { Metadata } from "next";
import { Outfit, Syne, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elias Faiçal | Desenvolvedor Web",
  description: "Portfólio de Elias Faiçal, desenvolvedor web full-stack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${outfit.variable} ${syne.variable} ${geistMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <Header />
        <main className="min-h-[100dvh] pt-24 pb-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
