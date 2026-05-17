import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://smileskin.com.br"),
  title: "SmileSkin · Instituto de tricologia clínica",
  description:
    "A queda capilar é multifatorial. A SmileSkin investiga cada caso com tricoscopia e protocolos individualizados. Faça a pré-avaliação capilar — Moema, SP.",
  openGraph: {
    title: "SmileSkin · Instituto de tricologia clínica",
    description:
      "Investigação séria da queda capilar: abordagem multifatorial, tricoscopia e protocolos individualizados. SmileSkin, Moema, SP.",
    type: "website",
    locale: "pt_BR",
    siteName: "SmileSkin",
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f4efe2",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "SmileSkin",
  description:
    "Clínica de estética e odontologia com tratamento capilar a partir de diagnóstico clínico.",
  medicalSpecialty: "Dermatology",
  areaServed: "São Paulo, SP",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Moema",
    addressRegion: "SP",
    addressCountry: "BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${interTight.variable} ${jetBrainsMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
