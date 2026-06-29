import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/app/_components/site-footer";
import { SiteHeader } from "@/app/_components/site-header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Conclave | Infraestrutura para projetos criativos",
    template: "%s | Conclave",
  },
  description:
    "A Conclave integra estratégia, produção, marketing, gestão, tecnologia e inteligência artificial para estruturar projetos criativos com padrão profissional, visão comercial e potencial de escala.",
  applicationName: "Conclave",
  keywords: [
    "Conclave",
    "produção artística",
    "produção musical",
    "marketing cultural",
    "branding",
    "gestão criativa",
    "inteligência artificial",
  ],
  icons: {
    icon: "/brand/conclave-logo.png",
    shortcut: "/brand/conclave-logo.png",
    apple: "/brand/conclave-logo.png",
  },
  openGraph: {
    title: "Conclave | A nova infraestrutura criativa",
    description:
      "Para transformar projetos, marcas e talentos em operações de mercado.",
    siteName: "Conclave",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conclave | A nova infraestrutura criativa",
    description:
      "Para transformar projetos, marcas e talentos em operações de mercado.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="min-h-screen overflow-hidden bg-background text-foreground">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
