import Icon from './Icon';

const businessHighlights = [
  'Perfil com endereço, horário e informações úteis',
  'Eventos publicados na hora certa',
  'Cupons e ações para incentivar novas visitas',
  'Controle de reservas com confirmação e lembretes automáticos',
];

export default function ForBusinesses() {
  return (
    <section className="section para-locais" id="para-locais">
      <div className="container split">
        <div className="for-businesses__content">
          <div className="section__eyebrow">Para estabelecimentos</div>
          <h2>
            Seu lugar na vitrine da <span>cidade</span>.
          </h2>
          <p className="section__desc">
            Apareça para quem já está escolhendo onde comer, beber, dançar ou encontrar amigos hoje.
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

          <div className="actions for-businesses__actions">
            <a className="btn btn--primary" href="https://wa.me/5511915473052" target="_blank" rel="noopener noreferrer">
              Quero divulgar meu local
              <Icon name="arrowRight" />
            </a>
            <a className="btn btn--outline" href="/em-breve.html">
              Baixar o app
            </a>
          </div>
        </div>

        <aside className="highlight">
          <div className="highlight__seal">
            <img className="selo-q__icon selo-q__icon--highlight" src="/assets/images/q-mark-nobg.png" alt="" aria-hidden="true" />
          </div>
          <div className="highlight__title">Mais visibilidade para quem decide rápido</div>
          <p className="highlight__text">
            O destaque certo ajuda seu local a aparecer com confiança para pessoas que já estão prontas para escolher.
          </p>
          <div className="highlight__chips">
            <span className="chip chip--white">Mais alcance</span>
            <span className="chip chip--dark">Mais cliques</span>
            <span className="chip chip--white">Mais visitas</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
