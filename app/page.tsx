import { ScrollProgress } from "@/components/site/ScrollProgress";
import { SiteBackground } from "@/components/site/SiteBackground";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Multifatorial } from "@/components/site/Multifatorial";
import { Causas } from "@/components/site/Causas";
import { Questionario } from "@/components/site/Questionario";
import { Investigacao } from "@/components/site/Investigacao";
import { Protocolo } from "@/components/site/Protocolo";
import { Multiprofissional } from "@/components/site/Multiprofissional";
import { Humano } from "@/components/site/Humano";
import { Autoridade } from "@/components/site/Autoridade";
import { Equipe } from "@/components/site/Equipe";
import { ParaQuem } from "@/components/site/ParaQuem";
import { Faq } from "@/components/site/Faq";
import { Agendamento } from "@/components/site/Agendamento";
import { Divisor } from "@/components/site/Divisor";
import { Footer } from "@/components/site/Footer";
import { WhatsappBar } from "@/components/site/WhatsappBar";

export default function Home() {
  return (
    <>
      <SiteBackground />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Multifatorial />
        <Causas />
        <Questionario />
        <Investigacao />
        <Protocolo />
        <Multiprofissional />
        <Humano />
        <Divisor />
        <Autoridade />
        <Equipe />
        <ParaQuem />
        <Faq />
        <Divisor />
        <Agendamento />
      </main>
      <Footer />
      <WhatsappBar />
    </>
  );
}
