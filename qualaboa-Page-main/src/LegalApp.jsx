import { useEffect } from 'react';
import Footer from './components/Footer';
import LegalDocument from './components/LegalDocument';
import { LEGAL_DOCUMENTS, TERMS_AND_PRIVACY } from './content/legalContent';

function resolveInitialSection(initialSection) {
  return LEGAL_DOCUMENTS.find((document) => document.key === initialSection) || LEGAL_DOCUMENTS[0];
}

export default function LegalApp({ initialSection = 'termsOfUse' }) {
  useEffect(() => {
    if (window.location.hash) {
      return;
    }

    const section = resolveInitialSection(initialSection);
    window.history.replaceState(null, '', `#${section.id}`);
  }, [initialSection]);

  return (
    <>
      <header className="header header--legal">
        <div className="container header__inner header__inner--legal">
          <a className="brand" href="/">
            <img className="brand__mark" src="/assets/images/favicon-96x96.png" alt="QualABoa?" />
            <div className="brand__copy">
              <span className="brand__name">QualABoa?</span>
              <span className="brand__tag">Documentação legal do app</span>
            </div>
          </a>

          <nav className="nav nav--legal">
            {LEGAL_DOCUMENTS.map((document) => (
              <a key={document.id} href={`#${document.id}`}>
                {document.label}
              </a>
            ))}
            <a href="/" className="nav__cta">
              Voltar ao site
            </a>
          </nav>
        </div>
      </header>

      <main className="legal-page">
        <section className="legal-hero">
          <div className="glow glow--purple" />
          <div className="glow glow--orange" />
          <div className="glow glow--neutral" />

          <div className="container legal-hero__grid">
            <div className="legal-hero__content">
              <span className="legal-hero__eyebrow">Central legal</span>
              <h1 className="legal-hero__title">Termos, privacidade e regras para administradores em um único lugar.</h1>
              <p className="legal-hero__text">
                Esta página concentra a versão vigente dos documentos oficiais do QualABoa, com leitura organizada,
                navegação por seções e contato direto para suporte e privacidade.
              </p>

              <div className="legal-hero__chips">
                <span className="chip chip--yellow">Última atualização: {TERMS_AND_PRIVACY.lastUpdate}</span>
                <span className="chip chip--purple">3 documentos ativos</span>
                <span className="chip chip--orange">Canal oficial: contato@qualaboaapp.com</span>
              </div>

              <div className="actions">
                <a className="btn btn--primary" href="#termos-de-uso">
                  Ler termos
                </a>
                <a className="btn btn--ghost" href="mailto:contato@qualaboaapp.com">
                  Falar com o suporte
                </a>
              </div>
            </div>

            <aside className="legal-summary">
              <div className="legal-summary__label">Navegação rápida</div>
              <div className="legal-summary__items">
                {LEGAL_DOCUMENTS.map((document) => (
                  <a key={document.id} className="legal-summary__item" href={`#${document.id}`}>
                    <span className="legal-summary__badge">{document.badge}</span>
                    <strong>{document.label}</strong>
                    <span>{document.description}</span>
                  </a>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="legal-section">
          <div className="container legal-section__inner">
            {LEGAL_DOCUMENTS.map((document) => (
              <LegalDocument
                key={document.id}
                id={document.id}
                badge={document.badge}
                description={document.description}
                content={document.content}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
