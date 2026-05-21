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

import { HeroV2 } from "@/components/site/v2/HeroV2";
import { MultifatorialV2 } from "@/components/site/v2/MultifatorialV2";
import { CausasV2 } from "@/components/site/v2/CausasV2";
import { HumanoV2 } from "@/components/site/v2/HumanoV2";
import { EquipeV2 } from "@/components/site/v2/EquipeV2";
import { ParaQuemV2 } from "@/components/site/v2/ParaQuemV2";
import { FaqV2 } from "@/components/site/v2/FaqV2";
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
        <Questionario />
        <Investigacao />
        <Protocolo />
        <Multiprofissional />
        <HumanoV2 />
        <Divisor />
        <Autoridade />
        <EquipeV2 />
        <ParaQuemV2 />
        <FaqV2 />
        <Divisor />
        <AgendamentoV2 />
      </main>
      <Footer />
      <WhatsappBar />
    </>
  );
}
