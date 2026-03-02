export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a className="brand" href="#">
          <img className="brand__mark" src="/assets/images/favicon-96x96.png" alt="QualABoa? (Q?)" />
          <span className="brand__name">QualABoa?</span>
        </a>

        <nav className="nav">
          <a href="#como-funciona">Como funciona</a>
          <a href="#para-locais">Para locais</a>
          <a href="#baixar" className="nav__cta">
            Baixar
          </a>
        </nav>
      </div>
    </header>
  );
}