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
            <img className="brand__mark" src="/assets/images/q-mark-nobg.png" alt="" aria-hidden="true" />
            <div className="brand__copy">
              <img className="brand__wordmark" src="/assets/images/wordmark-nobg.png" alt="QualABoa?" />
              <span className="brand__tag">documentação legal do app</span>
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
          <div className="container legal-shell">
            <div className="legal-document__intro legal-document__intro--main">
              <div className="legal-document__badge">Central legal</div>
              <h1 className="legal-hero__title">Termos, privacidade e regras para administradores.</h1>
              <p className="legal-hero__text">
                Esta página concentra a versão vigente dos documentos oficiais do QualABoa, com leitura organizada e
                contato direto para suporte.
              </p>

              <div className="legal-tabs" aria-label="Documentos legais">
                {LEGAL_DOCUMENTS.map((document) => (
                  <a key={document.id} className="legal-tab" href={`#${document.id}`}>
                    {document.label}
                  </a>
                ))}
              </div>

              <div className="legal-document__meta">
                <span className="legal-document__meta-item">Última atualização: {TERMS_AND_PRIVACY.lastUpdate}</span>
                <span className="legal-document__meta-item">3 documentos ativos</span>
                <span className="legal-document__meta-item">contato@qualaboaapp.com</span>
              </div>
            </div>

            <div className="legal-section__inner">
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
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
