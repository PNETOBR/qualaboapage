export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__content">
            <img className="footer__wordmark" src="/assets/images/wordmark-nobg.png" alt="QualABoa?" />
            <div className="footer__copy">© {year} QualABoa. Todos os direitos reservados.</div>
          </div>
        </div>

        <div className="footer__links">
          <a href="mailto:contato@qualaboaapp.com">contato@qualaboaapp.com</a>
          <a href="https://www.instagram.com/qualaboaapp_/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="/privacidade.html">Privacidade</a>
          <a href="/termos.html">Termos</a>
          <a href="/exclusao-conta.html">Exclusão de conta</a>
        </div>
      </div>
    </footer>
  );
}
