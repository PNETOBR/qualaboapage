export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a className="brand" href="#baixar">
          <div className="brand__copy">
            <img className="brand__wordmark" src="/assets/images/wordmark-nobg.png" alt="QualABoa?" />
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
