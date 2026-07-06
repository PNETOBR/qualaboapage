import Icon from './Icon';

const cards = [
  {
    icon: 'location',
    eyebrow: 'Perto de você',
    title: 'Veja o que está aberto agora',
    text: 'Filtre lugares próximos com endereço, distância e horário sem trocar de app.',
  },
  {
    icon: 'calendar',
    eyebrow: 'Hoje na cidade',
    title: 'Compare o clima de cada lugar',
    text: 'Bares, restaurantes e baladas aparecem com contexto para você decidir rápido.',
  },
  {
    icon: 'ticket',
    eyebrow: 'Rota simples',
    title: 'Escolha e chegue sem enrolar',
    text: 'Abra a rota, salve favoritos e acompanhe destaques no momento certo.',
  },
];

export default function HowItWorks() {
  return (
    <section className="section how" id="como-funciona">
      <div className="container">
        <div className="section__eyebrow">Como funciona</div>
        <h2>
          Decidir onde ir ficou <span>fácil</span>.
        </h2>
        <p className="section__desc">
          Tudo o que você precisa para sair do "onde vamos?" em poucos toques, com informação clara e um visual direto.
        </p>

        <div className="grid">
          {cards.map((card, index) => (
            <article className={`card card--tone-${index + 1}`} key={card.title}>
              <div className="icon">
                <Icon name={card.icon} />
              </div>
              <div className="card__eyebrow">{card.eyebrow}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
