import { useEffect, useState } from 'react';
import Icon from './Icon';

const HOLD_MS = 5200;
const TRANSITION_MS = 900;

const proofPoints = [
  {
    icon: 'location',
    title: 'Tudo em volta de você',
    text: 'Veja opções próximas com endereço, distância e mapa sem trocar de app.',
  },
  {
    icon: 'calendar',
    title: 'O que vale sair hoje',
    text: 'Encontre bares, restaurantes e eventos com contexto para decidir melhor.',
  },
  {
    icon: 'ticket',
    title: 'Destaques que ajudam na escolha',
    text: 'Acompanhe cupons, novidades e locais em evidência no momento certo.',
  },
];

const featuredCards = [
  {
    name: 'Bar do Centro',
    category: 'Bar',
    neighborhood: 'Centro',
    distanceMeters: 650,
    imageUrl: '/assets/images/bar.png',
    description: 'Happy hour com música ao vivo, promoções do dia e movimento ideal para começar a noite.',
    dataInicio: '2026-03-20T18:30:00',
    dataFim: '2026-03-21T00:30:00',
    openStatus: 'Aberto agora',
    statusTone: 'open',
    horario: '18:30 às 00:30',
    diasAtendimento: 'Qui a Dom',
    temEstacionamento: true,
    highlightText: 'ABERTO AGORA',
  },
  {
    name: 'Sunset no Mirante',
    category: 'Evento',
    neighborhood: 'Beira Rio',
    distanceMeters: 850,
    imageUrl: '/assets/images/bar.png',
    description: 'Evento ao pôr do sol com música ao vivo, vista aberta e agenda atualizada no app.',
    dataInicio: '2026-03-20T19:00:00',
    dataFim: '2026-03-20T23:30:00',
    openStatus: 'Hoje, às 19:00',
    statusTone: 'soon',
    horario: '19:00 às 23:30',
    diasAtendimento: 'Sex e Sáb',
    temEstacionamento: false,
    highlightText: 'HOJE À NOITE',
  },
  {
    name: 'Cantina Primavera',
    category: 'Restaurante',
    neighborhood: 'Jardins',
    distanceMeters: 1400,
    imageUrl: '/assets/images/restaurante.png',
    description: 'Menu especial do chef e ambiente acolhedor para jantar com mais calma e menos indecisão.',
    dataInicio: '2026-03-20T19:00:00',
    dataFim: '2026-03-20T23:00:00',
    openStatus: 'Abre às 19:00',
    statusTone: 'soon',
    horario: '19:00 às 23:00',
    diasAtendimento: 'Ter a Dom',
    temEstacionamento: false,
    highlightText: 'RECOMENDADO',
  },
];

function getCategoryIcon(category) {
  const normalized = category.trim().toLowerCase();

  if (normalized === 'restaurante') return 'restaurant';
  if (normalized === 'evento') return 'sparkles';
  return 'drink';
}

function getCategoryTagClass(category) {
  const normalized = category.trim().toLowerCase();

  if (normalized === 'restaurante') return 'tag tag--orange';
  return 'tag tag--purple';
}

function getStatusClass(statusTone) {
  if (statusTone === 'open') return 'hero-app-card__status hero-app-card__status--open';
  return 'hero-app-card__status hero-app-card__status--soon';
}

function formatDistance(distanceMeters) {
  return distanceMeters >= 1000 ? `${(distanceMeters / 1000).toFixed(1)} km` : `${distanceMeters} m`;
}

function formatDateTime(isoDate) {
  return new Date(isoDate).toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [outgoingIndex, setOutgoingIndex] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const featuredCard = featuredCards[activeIndex];

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

    // Keep the showcase alive without changing the base layout of the hero.
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
        <div className="hero-app-card__tags">
          <span className={getCategoryTagClass(card.category)}>
            <Icon name={getCategoryIcon(card.category)} />
            {card.category}
          </span>
          <span className="tag tag--soft">
            <Icon name="location" />
            {formatDistance(card.distanceMeters)} de você
          </span>
        </div>

        <div className="hero-app-card__row">
          <div className="hero-app-card__heading">
            <h3 className="hero-app-card__title">{card.name}</h3>
            <p className="hero-app-card__meta">
              <Icon name="location" />
              {card.neighborhood}
            </p>
          </div>

          <button type="button" className="hero-app-card__favorite" aria-label={`Salvar ${card.name}`}>
            <Icon name="heart" label={`Salvar ${card.name}`} />
          </button>
        </div>

        <p className="hero-app-card__description">{card.description}</p>

        <div className="hero-app-card__info">
          <div className="hero-app-card__line">
            <Icon name="calendar" />
            <div>
              <span className="hero-app-card__label">Começa</span>
              <span className="hero-app-card__value">{formatDateTime(card.dataInicio)}</span>
            </div>
          </div>

          <div className="hero-app-card__line">
            <Icon name="clock" />
            <div>
              <span className="hero-app-card__label">Termina</span>
              <span className="hero-app-card__value">{formatDateTime(card.dataFim)}</span>
            </div>
          </div>

          <div className="hero-app-card__line">
            <Icon name="clock" />
            <div>
              <span className="hero-app-card__label">Horário</span>
              <span className="hero-app-card__value">{card.horario}</span>
            </div>
          </div>

          <div className="hero-app-card__line">
            <Icon name="sparkles" />
            <div>
              <span className="hero-app-card__label">Quando ir</span>
              <span className="hero-app-card__value">{card.diasAtendimento}</span>
            </div>
          </div>

          {card.temEstacionamento && (
            <div className="hero-app-card__line hero-app-card__line--accent">
              <Icon name="car" />
              <div>
                <span className="hero-app-card__label">Facilidade</span>
                <span className="hero-app-card__value">Tem estacionamento</span>
              </div>
            </div>
          )}
        </div>

        <div className="hero-app-card__footer">
          <span className={getStatusClass(card.statusTone)}>{card.openStatus}</span>
          <span className="hero-app-card__map">
            <Icon name="map" />
            Abrir no mapa
          </span>
        </div>

        <div className="hero-app-card__dots" aria-label="Itens em destaque">
          {featuredCards.map((item, index) => (
            <button
              key={item.name}
              type="button"
              className={`hero-app-card__dot ${index === activeIndex ? 'hero-app-card__dot--active' : ''}`}
              onClick={() => rotateTo(index)}
              aria-label={`Mostrar destaque ${index + 1}`}
              aria-pressed={index === activeIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="hero" id="baixar">
      <div className="container hero__grid">
        <div className="hero__content">
          <div className="hero__logo-shell">
            <img className="hero__logo" src="/assets/images/logo.png" alt="QualABoa?" />
          </div>

          <h1 className="hero__title">Descubra bares, restaurantes e eventos perto de você com mais contexto e menos dúvida.</h1>

          <p className="lead">
            O QualABoa? reúne o que está aberto, o que acontece hoje e como chegar em um só lugar para deixar a decisão mais rápida, útil e confiável.
          </p>

          <div className="actions">
            <a className="btn btn--primary" href="/em-breve.html">
              Baixar o app
              <Icon name="arrowRight" />
            </a>
            <a className="btn btn--ghost" href="#como-funciona">
              Ver como funciona
            </a>
          </div>

          <div className="mini">
            <span className="mini__dot"></span>
            <span>Rápido de decidir, fácil de achar. E aí, qual a boa?</span>
          </div>

          <div className="hero__proofs">
            {proofPoints.map((item) => (
              <div className="hero__proof" key={item.title}>
                <div className="hero__proof-icon">
                  <Icon name={item.icon} />
                </div>
                <div>
                  <div className="hero__proof-title">{item.title}</div>
                  <p className="hero__proof-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__card">
          <div className="glass">
            <div className="hero-app-card-viewport">
              {outgoingIndex !== null && renderCard(featuredCards[outgoingIndex], 'hero-app-card hero-app-card--out')}
              {renderCard(featuredCard, `hero-app-card ${isAnimating ? 'hero-app-card--in' : ''}`)}
            </div>
          </div>
        </div>
      </div>

      <div className="glow glow--purple"></div>
      <div className="glow glow--orange"></div>
      <div className="glow glow--neutral"></div>
    </section>
  );
}
