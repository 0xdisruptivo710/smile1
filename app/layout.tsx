import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Fontes hospedadas localmente — o build não depende da rede da Google.
const cormorant = localFont({
  src: [
    { path: "./fonts/cormorant-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/cormorant-400-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-cormorant",
  display: "swap",
});

const interTight = localFont({
  src: "./fonts/inter-tight.woff2",
  variable: "--font-inter-tight",
  display: "swap",
  weight: "300 700",
});

const jetBrainsMono = localFont({
  src: "./fonts/jetbrains-mono.woff2",
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: "400 600",
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
