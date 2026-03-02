import { useEffect, useState } from 'react';

const HOLD_MS = 5200;
const TRANSITION_MS = 900;

function getCategoryIcon(category) {
  const cat = category?.trim().toLowerCase() || '';
  if (cat === 'restaurante') return '🍽️';
  if (cat === 'bar') return '🍺';
  if (cat === 'balada') return '🍸';
  return '🧾';
}

const featuredCards = [
  {
    name: 'Bar do Centro',
    category: 'Bar',
    neighborhood: 'Centro',
    distanceMeters: 650,
    imageUrl: '/assets/images/bar.png',
    descricao: 'Happy hour com promoções e música ao vivo para começar a noite.',
    dataInicio: '2026-03-06T18:30:00',
    dataFim: '2026-03-07T00:30:00',
    isOpen: true,
    openStatus: 'Aberto agora',
    horario: '18:30 às 00:30',
    diasAtendimento: 'Qui a Dom',
    temEstacionamento: true,
    highlightText: 'ROLANDO AGORA!',
  },
  {
    name: 'Sunset Open Bar',
    category: 'Balada',
    neighborhood: 'Rooftop Central',
    distanceMeters: 850,
    imageUrl: '/assets/images/balada.png',
    descricao: 'Open bar, DJs convidados e vista rooftop com cupom exclusivo no app.',
    dataInicio: '2026-03-08T18:00:00',
    dataFim: '2026-03-09T01:30:00',
    isOpen: true,
    openStatus: 'É hoje',
    horario: '18:00 às 01:30',
    diasAtendimento: 'Sex e Sáb',
    temEstacionamento: true,
    highlightText: 'É HOJE!',
  },
  {
    name: 'Cantina Primavera',
    category: 'Restaurante',
    neighborhood: 'Jardins',
    distanceMeters: 1400,
    imageUrl: '/assets/images/restaurante.png',
    descricao: 'Menu especial do chef e ambiente acolhedor para jantar em família.',
    dataInicio: '2026-03-07T19:00:00',
    dataFim: '2026-03-07T23:00:00',
    isOpen: false,
    openStatus: 'Abre às 19:00',
    horario: '19:00 às 23:00',
    diasAtendimento: 'Ter a Dom',
    temEstacionamento: false,
    highlightText: 'NOVIDADE',
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [outgoingIndex, setOutgoingIndex] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const featuredCard = featuredCards[activeIndex];

  const formatDistance = (distanceMeters) =>
    distanceMeters >= 1000 ? `${(distanceMeters / 1000).toFixed(1)}km` : `${distanceMeters}m`;

  const formatDateTime = (isoDate) =>
    new Date(isoDate).toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });

  const rotateTo = (nextIndex) => {
    if (isAnimating || nextIndex === activeIndex) return;

    setOutgoingIndex(activeIndex);
    setActiveIndex(nextIndex);
    setIsAnimating(true);

    window.setTimeout(() => {
      setOutgoingIndex(null);
      setIsAnimating(false);
    }, TRANSITION_MS);
  };

  useEffect(() => {
    if (isAnimating) return undefined;

    const timer = window.setTimeout(() => {
      rotateTo((activeIndex + 1) % featuredCards.length);
    }, HOLD_MS);

    return () => window.clearTimeout(timer);
  }, [activeIndex, isAnimating]);

  const renderCard = (card, className) => (
    <div className={className}>
      <div className="hero-app-card__media">
        <img
          key={card.imageUrl}
          className="hero-app-card__image"
          src={card.imageUrl}
          alt={card.name}
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = '/assets/images/logo.png';
          }}
        />
        <div className="hero-app-card__badge hero-app-card__badge--pulse">{card.highlightText}</div>
      </div>

      <div className="hero-app-card__content">
        <div className="hero-app-card__row">
          <h3 className="hero-app-card__title">{card.name}</h3>
          <div className="hero-app-card__icons">
            <span title="Favoritar">❤</span>
            <span title={card.category}>{getCategoryIcon(card.category)}</span>
          </div>
        </div>

        <p className="hero-app-card__meta">
          {card.category} • {card.neighborhood}
        </p>

        <p className="hero-app-card__description">{card.descricao}</p>

        <div className="hero-app-card__line">
          <span>📅</span>
          <span>Início: {formatDateTime(card.dataInicio)}</span>
        </div>

        <div className="hero-app-card__line">
          <span>🗓️</span>
          <span>Fim: {formatDateTime(card.dataFim)}</span>
        </div>

        <div className="hero-app-card__line">
          <span>{card.isOpen ? '✅' : '❌'}</span>
          <span className={card.isOpen ? 'hero-app-card__status--open' : 'hero-app-card__status--closed'}>{card.openStatus}</span>
        </div>

        <div className="hero-app-card__line">
          <span>⏰</span>
          <span>{card.horario}</span>
        </div>

        <div className="hero-app-card__line">
          <span>📆</span>
          <span>{card.diasAtendimento}</span>
        </div>

        {card.temEstacionamento && (
          <div className="hero-app-card__line hero-app-card__line--accent">
            <span>🅿️</span>
            <span>Tem estacionamento</span>
          </div>
        )}

        <div className="hero-app-card__map">📍 {formatDistance(card.distanceMeters)} • Abrir no mapa</div>

        <div className="hero-app-card__dots" aria-label="Itens em destaque">
          {featuredCards.map((item, index) => (
            <button
              key={item.name}
              type="button"
              className={`hero-app-card__dot ${index === activeIndex ? 'hero-app-card__dot--active' : ''}`}
              onClick={() => rotateTo(index)}
              aria-label={`Mostrar ${item.category}`}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <img className="hero__logo" src="/assets/images/logo.png" alt="QualABoa? — E aí, Qual a boa?" />

          <p className="lead">
            Descubra <strong>bares</strong>, <strong>restaurantes</strong> e <strong>eventos</strong> perto de você.
            Veja o que tá rolando hoje, encontre locais em alta e aproveite cupons.
          </p>

          <div className="actions" id="baixar">
            <a className="btn btn--primary" href="/em-breve.html">
               App Store
            </a>
            <a className="btn btn--ghost" href="/em-breve.html">
              ▶ Google Play
            </a>
          </div>

          <div className="mini">
            <span className="dot"></span>
            Rápido de decidir, fácil de achar. E aí, qual é a boa?
          </div>
        </div>

        <div className="hero__card">
          <div className="glass">
            <div className="hero-app-card-viewport">
              {outgoingIndex !== null && renderCard(featuredCards[outgoingIndex], 'hero-app-card hero-app-card--out')}
              {renderCard(featuredCard, `hero-app-card ${isAnimating ? 'hero-app-card--in' : ''}`)}
            </div>

            <div className="glass__cta">
              <a className="btn btn--primary btn--wide" href="/em-breve.html">
                Baixar agora
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="glow glow--purple"></div>
      <div className="glow glow--orange"></div>
      <div className="glow glow--yellow"></div>
    </section>
  );
}