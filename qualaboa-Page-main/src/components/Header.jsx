export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a className="brand" href="#baixar">
          <img className="brand__mark" src="/assets/images/favicon-96x96.png" alt="QualABoa?" />
          <div className="brand__copy">
            <span className="brand__name">QualABoa?</span>
            <span className="brand__tag">Bares, restaurantes e eventos</span>
          </div>
        </a>

        <nav className="nav">
          <a href="#como-funciona">Como funciona</a>
          <a href="#para-locais">Para estabelecimentos</a>
          <a href="#baixar" className="nav__cta">
            Baixar o app
          </a>
        </nav>
      </div>
    </header>
  );
}
