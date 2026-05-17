import { Container } from "./Container";
import { ButtonLink } from "./Button";
import { WhatsappIcon } from "./icons";
import { site } from "@/lib/site";
import { whatsappLink } from "@/lib/utils";

/** Cabeçalho fino. O acesso contínuo fica a cargo da WhatsappBar. */
export function Header() {
  const wa = whatsappLink(site.whatsapp, site.whatsappMensagem);

  return (
    <header className="border-b border-line">
      <Container className="flex items-center justify-between gap-4 py-5">
        <a href="#topo" className="flex items-baseline gap-2.5">
          <span
            className="font-display font-normal leading-none text-ink"
            style={{ fontSize: "var(--text-h3)" }}
          >
            SmileSkin
          </span>
          <span className="eyebrow hidden text-ink-faint sm:inline">
            Tricologia clínica
          </span>
        </a>

        <ButtonLink href={wa} external variant="secondary" className="px-5 py-2.5">
          <WhatsappIcon className="text-pine" />
          <span className="hidden sm:inline">Falar com a clínica</span>
          <span className="sm:hidden">WhatsApp</span>
        </ButtonLink>
      </Container>
    </header>
  );
}
