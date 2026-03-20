import Icon from './Icon';

const cards = [
  {
    icon: 'location',
    eyebrow: 'Descoberta rápida',
    title: 'Encontre boas opções perto de você',
    text: 'Veja bares, restaurantes e eventos próximos com endereço, distância e mapa sem depender de buscas espalhadas.',
  },
  {
    icon: 'calendar',
    eyebrow: 'Decisão com contexto',
    title: 'Entenda o que vale sair hoje',
    text: 'Compare o que está aberto, o que acontece no dia e o melhor horário para ir com mais segurança.',
  },
  {
    icon: 'ticket',
    eyebrow: 'Valor percebido',
    title: 'Aproveite cupons e destaques',
    text: 'Descubra locais em evidência, benefícios e o selo Q? para priorizar o que faz sentido para você.',
  },
];

export default function HowItWorks() {
  return (
    <section className="section" id="como-funciona">
      <div className="container">
        <h2>Como funciona</h2>
        <p className="section__desc">
          Tudo o que você precisa para decidir onde ir em poucos cliques, com informação clara e visual consistente.
        </p>

        <div className="grid">
          {cards.map((card) => (
            <article className="card" key={card.title}>
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
