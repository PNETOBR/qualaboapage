export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img className="footer__mark" src="/assets/images/favicon-96x96.png" alt="Q?" />
          <div>
            <div className="footer__name">QualABoa?</div>
            <div className="footer__copy">© {year} QualABoa. Todos os direitos reservados.</div>
          </div>
        </div>

        <div className="footer__links">
          <a href="mailto:contato@qualaboa.app">contato@qualaboa.app</a>
          <a href="https://www.instagram.com/app.qualaboa/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="/privacidade.html">Privacidade</a>
          <a href="/termos.html">Termos</a>
        </div>
      </div>
    </footer>
  );
}