import Icon from './Icon';

const categoryChips = [
  { label: 'Cafés', tone: 'orange' },
  { label: 'Restaurantes', tone: 'green' },
  { label: 'Baladas', tone: 'magenta' },
  { label: 'Bares', tone: 'purple' },
];

const appPlaces = [
  {
    name: 'Bar do Zé',
    category: 'Bar',
    icon: 'drink',
    subtitle: 'Bar · 47 - Jardim Palmares (Zona Sul)',
    address: 'Av. Interlagos, 231',
    hours: '17:00 - 23:00',
    status: 'Aberto agora',
    statusTone: 'open',
    distance: '231m',
    image: '/assets/images/bar.png',
    favorite: true,
  },
  {
    name: 'Cantina do Porto',
    category: 'Restaurante',
    icon: 'restaurant',
    subtitle: 'Restaurante · Jardim Marajoara',
    address: 'Rua das Acácias, 540',
    hours: '12:00 - 23:30',
    status: 'Aberto agora',
    statusTone: 'open',
    distance: '540m',
    image: '/assets/images/restaurante.png',
    favorite: false,
  },
  {
    name: 'Luxe Club',
    category: 'Balada',
    icon: 'sparkles',
    subtitle: 'Balada · Santo Amaro',
    address: 'Rua do Alto, 1200',
    hours: '22:00 - 05:00',
    status: 'Abre 22h',
    statusTone: 'soon',
    distance: '1,2km',
    image: '/assets/images/balada.png',
    favorite: true,
  },
];

function AppCard({ place }) {
  return (
    <article className="phone-card">
      <div className="phone-card__media">
        <img src={place.image} alt={place.name} />
        <div className="phone-card__top">
          <span className="phone-card__category">
            <Icon name={place.icon} />
            {place.category}
          </span>
          <span className="phone-card__tools" aria-hidden="true">
            <span className={`phone-card__round ${place.favorite ? 'phone-card__round--liked' : ''}`}>
              <Icon name="heart" />
            </span>
            <span className="phone-card__round">⋮</span>
          </span>
        </div>
        <div className="phone-card__bottom">
          <span className={`phone-card__status phone-card__status--${place.statusTone}`}>
            <span className="phone-card__status-dot" />
            {place.status}
          </span>
          <span className="phone-card__distance">
            <Icon name="location" />
            {place.distance}
          </span>
        </div>
      </div>

      <div className="phone-card__body">
        <h3>{place.name}</h3>
        <p>{place.subtitle}</p>
        <span>
          <Icon name="location" />
          {place.address}
        </span>
        <span>
          <Icon name="clock" />
          {place.hours}
        </span>
        <a className="phone-card__route" href="/em-breve.html">
          <Icon name="send" />
          Rota · {place.distance}
        </a>
      </div>
    </article>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="baixar">
      <div className="container hero__grid">
        <div className="hero__content">
          <img className="hero__logo" src="/assets/images/logo.png" alt="QualABoa?" />

          <h1 className="hero__title">
            A <span>boa</span> do seu bairro, do dia até a noite.
          </h1>

          <p className="lead">
            Cafés, restaurantes, bares e baladas perto de você — o QualABoa mostra o que tá aberto agora, o que rola hoje
            e como chegar.
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

          <div className="hero__chips" aria-label="Categorias">
            {categoryChips.map((chip) => (
              <span className={`hero-chip hero-chip--${chip.tone}`} key={chip.label}>
                <span />
                {chip.label}
              </span>
            ))}
          </div>
        </div>

        <div className="hero__phone-wrap" aria-label="Prévia do aplicativo QualABoa">
          <div className="floating-badge floating-badge--today">É HOJE!</div>
          <div className="floating-badge floating-badge--near">
            <span />
            47 lugares perto · 1 km
          </div>

          <div className="phone-frame">
            <div className="phone-frame__speaker" />
            <div className="phone-screen">
              <div className="phone-status">
                <span>9:41</span>
                <span>5G 100%</span>
              </div>

              <div className="phone-header">
                <img src="/assets/images/wordmark-nobg.png" alt="QualABoa?" />
                <button type="button" aria-label="Filtros">
                  <Icon name="sliders" />
                </button>
              </div>

              <div className="phone-search">
                <span>E aí, qual a boa hoje?</span>
                <button type="button" aria-label="Buscar">
                  <Icon name="search" />
                </button>
              </div>

              <div className="phone-filters" aria-label="Filtros do app">
                <span className="phone-filter phone-filter--active">Todos</span>
                <span className="phone-filter">Bares</span>
                <span className="phone-filter">Baladas</span>
                <span className="phone-filter">Rest...</span>
              </div>

              <div className="phone-list" tabIndex={0}>
                <div className="phone-list__track">
                  {appPlaces.map((place) => (
                    <AppCard key={place.name} place={place} />
                  ))}
                  {appPlaces.map((place) => (
                    <AppCard key={`${place.name}-copy`} place={place} />
                  ))}
                </div>
              </div>

              <nav className="phone-tabs" aria-label="Navegação do app">
                <span className="phone-tab phone-tab--active">
                  <Icon name="home" />
                  Início
                </span>
                <span className="phone-tab">
                  <Icon name="heart" />
                  Favoritos
                </span>
                <span className="phone-tab">
                  <Icon name="calendar" />
                  Imperdíveis
                </span>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
