const cards = [
  {
    icon: '📍',
    title: 'Veja locais próximos',
    text: 'Encontre bares e restaurantes perto de você com infos úteis.',
  },
  {
    icon: '🎉',
    title: 'Eventos do dia',
    text: 'Descubra eventos acontecendo hoje e planeje sua noite.',
  },
];

export default function HowItWorks() {
  return (
    <section className="section" id="como-funciona">
      <div className="container">
        <h2>Como funciona</h2>
        <p className="section__desc">Em poucos cliques você descobre onde ir, o que está rolando e como chegar.</p>

        <div className="grid">
          {cards.map((card) => (
            <div className="card" key={card.title}>
              <div className="icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}

          <div className="card">
            <div className="icon">🎟️</div>
            <h3>Cupons e destaques</h3>
            <p>
              Aproveite cupons e veja locais premium com o nosso selo{' '}
              <span className="selo-q">
                <img className="selo-q__icon" src="/assets/images/favicon.svg" alt="" />
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}