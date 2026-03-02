export default function ForBusinesses() {
  return (
    <section className="section section--alt" id="para-locais">
      <div className="container split">
        <div>
          <h2>Para estabelecimentos</h2>
          <p className="section__desc">
            Tem um bar, restaurante ou até uma balada? Divulgue seu local no QualABoa? e atraia mais clientes.
          </p>

          <ul className="list">
            <li>
              <span className="check">✓</span> Perfil do estabelecimento
            </li>
            <li>
              <span className="check">✓</span> Criação de eventos
            </li>
            <li>
              <span className="check">✓</span> Destaque com nosso selo Q?
            </li>
            <li>
              <span className="check">✓</span> Cupons para impulsionar movimento
            </li>
          </ul>

          <div className="actions">
            <a className="btn btn--primary" href="https://wa.me/5511961981720" target="_blank" rel="noopener noreferrer">
              Quero divulgar meu local
            </a>
            <a className="btn btn--ghost" href="/em-breve.html">
              Baixar o app
            </a>
          </div>
        </div>

        <div className="highlight">
          <div className="highlight__seal">
            <img className="selo-q__icon selo-q__icon--highlight" src="/assets/images/favicon.svg" alt="Selo Q?" />
            <div className="highlight__label">Selo Q?</div>
          </div>
          <div className="highlight__title">Mais visibilidade</div>
          <p className="highlight__text">Apareça com destaque na busca e alcance quem está perto do seu local.</p>
          <div className="highlight__chips">
            <span className="chip chip--yellow">Destaque</span>
            <span className="chip chip--purple">Mais cliques</span>
            <span className="chip chip--orange">Mais visitas</span>
          </div>
        </div>
      </div>
    </section>
  );
}