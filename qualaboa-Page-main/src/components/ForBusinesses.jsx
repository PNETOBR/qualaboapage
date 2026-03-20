import Icon from './Icon';

const businessHighlights = [
  'Perfil com endereço, horário e informações úteis',
  'Eventos atualizados na hora certa para gerar movimento',
  'Destaque com o selo Q? para ganhar mais visibilidade',
  'Cupons e ações para incentivar novas visitas',
];

export default function ForBusinesses() {
  return (
    <section className="section section--alt" id="para-locais">
      <div className="container split">
        <div>
          <h2>Para estabelecimentos</h2>
          <p className="section__desc">
            Bar, restaurante ou evento: apareça para quem já está procurando onde ir e transforme descoberta em visita.
          </p>

          <ul className="list">
            {businessHighlights.map((item) => (
              <li key={item}>
                <span className="check">
                  <Icon name="check" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="actions">
            <a className="btn btn--primary" href="https://wa.me/5511915473052" target="_blank" rel="noopener noreferrer">
              Quero divulgar meu local
              <Icon name="arrowRight" />
            </a>
            <a className="btn btn--ghost" href="/em-breve.html">
              Baixar o app
            </a>
          </div>
        </div>

        <aside className="highlight">
          <div className="highlight__seal">
            <img className="selo-q__icon selo-q__icon--highlight" src="/assets/images/favicon.svg" alt="Selo Q?" />
            <div className="highlight__label">Selo Q?</div>
          </div>
          <div className="highlight__title">Mais visibilidade para quem decide rápido</div>
          <p className="highlight__text">
            O destaque certo ajuda seu negócio a aparecer com mais confiança para pessoas que já estão prontas para escolher.
          </p>
          <div className="highlight__chips">
            <span className="chip chip--yellow">Mais alcance</span>
            <span className="chip chip--purple">Mais cliques</span>
            <span className="chip chip--orange">Mais visitas</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
