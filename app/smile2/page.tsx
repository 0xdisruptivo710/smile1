import { ScrollProgress } from "@/components/site/ScrollProgress";
import { Header } from "@/components/site/Header";
import { Questionario } from "@/components/site/Questionario";
import { Investigacao } from "@/components/site/Investigacao";
import { Protocolo } from "@/components/site/Protocolo";
import { Multiprofissional } from "@/components/site/Multiprofissional";
import { Autoridade } from "@/components/site/Autoridade";
import { Divisor } from "@/components/site/Divisor";
import { Footer } from "@/components/site/Footer";
import { WhatsappBar } from "@/components/site/WhatsappBar";
import { PullQuote } from "@/components/site/PullQuote";
import { frasesDistribuidas } from "@/content/capilar";

import { HeroV2 } from "@/components/site/v2/HeroV2";
import { MultifatorialV2 } from "@/components/site/v2/MultifatorialV2";
import { CausasV2 } from "@/components/site/v2/CausasV2";
import { AlopeciasV2 } from "@/components/site/v2/AlopeciasV2";
import { MegaHairV2 } from "@/components/site/v2/MegaHairV2";
import { HumanoV2 } from "@/components/site/v2/HumanoV2";
import { CurriculoV2 } from "@/components/site/v2/CurriculoV2";
import { ParaQuemV2 } from "@/components/site/v2/ParaQuemV2";
import { FaqV2 } from "@/components/site/v2/FaqV2";
import { SegurancaV2 } from "@/components/site/v2/SegurancaV2";
import { AgendamentoV2 } from "@/components/site/v2/AgendamentoV2";

export const metadata = {
  title: "SmileSkin · SS Hair Science Institute — versão imersiva",
  description:
    "Versão imersiva da landing do instituto de tricologia clínica SS Hair Science Institute by SmileSkin. Mais cor, mais atmosfera, mesma ciência.",
};

export default function SmileV2Page() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <HeroV2 />
        <MultifatorialV2 />
        <CausasV2 />
        <PullQuote text={frasesDistribuidas[5]} tone="dark" />
        <Questionario />
        <Investigacao />
        <Protocolo />
        <AlopeciasV2 />
        <MegaHairV2 />
        <Multiprofissional />
        <HumanoV2 />
        <PullQuote text={frasesDistribuidas[7]} tone="gold" />
        <Divisor />
        <Autoridade />
        <CurriculoV2 />
        <ParaQuemV2 />
        <FaqV2 />
        <SegurancaV2 />
        <Divisor />
        <AgendamentoV2 />
      </main>
      <Footer />
      <WhatsappBar />
    </>
  );
}
