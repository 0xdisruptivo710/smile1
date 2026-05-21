import { ScrollProgress } from "@/components/site/ScrollProgress";
import { SiteBackground } from "@/components/site/SiteBackground";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Multifatorial } from "@/components/site/Multifatorial";
import { Causas } from "@/components/site/Causas";
import { Questionario } from "@/components/site/Questionario";
import { Investigacao } from "@/components/site/Investigacao";
import { Protocolo } from "@/components/site/Protocolo";
import { Alopecias } from "@/components/site/Alopecias";
import { MegaHair } from "@/components/site/MegaHair";
import { Multiprofissional } from "@/components/site/Multiprofissional";
import { Humano } from "@/components/site/Humano";
import { Autoridade } from "@/components/site/Autoridade";
import { Curriculo } from "@/components/site/Curriculo";
import { ParaQuem } from "@/components/site/ParaQuem";
import { Faq } from "@/components/site/Faq";
import { Seguranca } from "@/components/site/Seguranca";
import { Agendamento } from "@/components/site/Agendamento";
import { Divisor } from "@/components/site/Divisor";
import { Footer } from "@/components/site/Footer";
import { WhatsappBar } from "@/components/site/WhatsappBar";
import { PullQuote } from "@/components/site/PullQuote";
import { frasesDistribuidas } from "@/content/capilar";

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
        <PullQuote text={frasesDistribuidas[5]} tone="light" />
        <Questionario />
        <Investigacao />
        <Protocolo />
        <Alopecias />
        <MegaHair />
        <Multiprofissional />
        <Humano />
        <PullQuote text={frasesDistribuidas[7]} tone="gold" />
        <Divisor />
        <Autoridade />
        <Curriculo />
        <ParaQuem />
        <Faq />
        <Seguranca />
        <Divisor />
        <Agendamento />
      </main>
      <Footer />
      <WhatsappBar />
    </>
  );
}
