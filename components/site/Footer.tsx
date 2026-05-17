import { Container } from "./Container";
import { WhatsappIcon } from "./icons";
import { rodape } from "@/content/capilar";
import { site } from "@/lib/site";
import { whatsappLink } from "@/lib/utils";

const navItens = [
  { rotulo: "A queda capilar", href: "#multifatorial" },
  { rotulo: "Pré-avaliação", href: "#pre-avaliacao" },
  { rotulo: "A investigação", href: "#investigacao" },
  { rotulo: "Protocolo", href: "#protocolo" },
  { rotulo: "Quem cuida", href: "#equipe" },
  { rotulo: "Agendar avaliação", href: "#agendar" },
];

export function Footer() {
  const wa = whatsappLink(site.whatsapp, site.whatsappMensagem);

  return (
    <footer className="border-t border-line-strong bg-paper-warm py-16">
      <Container>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <span
              className="font-display font-normal text-ink"
              style={{ fontSize: "var(--text-h2)" }}
            >
              SmileSkin
            </span>
            <p className="eyebrow mt-2 text-ink-faint">{rodape.unidade}</p>
            <p
              className="mt-4 max-w-[34ch] text-ink-soft"
              style={{ fontSize: "var(--text-body-sm)" }}
            >
              {rodape.assinatura}
            </p>
          </div>

          <nav className="md:col-span-4" aria-label="Seções">
            <p className="eyebrow text-ink-faint">{rodape.navTitulo}</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {navItens.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-ink-soft transition-colors hover:text-pine"
                    style={{ fontSize: "var(--text-body-sm)" }}
                  >
                    {item.rotulo}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="eyebrow text-ink-faint">{rodape.contatoTitulo}</p>
            <div className="mt-4 flex flex-col gap-2.5">
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ink transition-colors hover:text-pine"
                style={{ fontSize: "var(--text-body-sm)" }}
              >
                <WhatsappIcon className="text-pine" />
                WhatsApp
              </a>
              <a
                href={`mailto:${site.email}`}
                className="text-ink-soft transition-colors hover:text-pine"
                style={{ fontSize: "var(--text-body-sm)" }}
              >
                {site.email}
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-soft transition-colors hover:text-pine"
                style={{ fontSize: "var(--text-body-sm)" }}
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-line pt-6">
          <p
            className="max-w-[80ch] text-ink-faint"
            style={{ fontSize: "var(--text-body-sm)" }}
          >
            {rodape.legal}
          </p>
          <p className="eyebrow mt-4 text-ink-faint">
            © {new Date().getFullYear()} SmileSkin · Moema, São Paulo
          </p>
        </div>
      </Container>
    </footer>
  );
}
