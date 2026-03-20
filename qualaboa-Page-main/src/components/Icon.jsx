const icons = {
  arrowRight: (
    <>
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </>
  ),
  calendar: (
    <>
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect x="3" y="4" width="18" height="18" rx="3" />
      <path d="M3 10h18" />
    </>
  ),
  car: (
    <>
      <path d="M5 16h14" />
      <path d="m7 16 1.5-5h7L17 16" />
      <path d="M7 11h10" />
      <circle cx="8" cy="18" r="2" />
      <circle cx="16" cy="18" r="2" />
    </>
  ),
  check: (
    <>
      <path d="m5 12 4 4L19 6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v6l4 2" />
    </>
  ),
  heart: (
    <>
      <path d="m12 20-1.2-1.1C6 14.5 3 11.8 3 8.5A4.5 4.5 0 0 1 7.5 4c1.7 0 3.3.8 4.5 2.1A6 6 0 0 1 16.5 4 4.5 4.5 0 0 1 21 8.5c0 3.3-3 6-7.8 10.4Z" />
    </>
  ),
  drink: (
    <>
      <path d="M6 4h12l-4 6v6l-2 2-2-2v-6Z" />
      <path d="M10 20h4" />
    </>
  ),
  location: (
    <>
      <path d="M12 21s7-5.8 7-11a7 7 0 1 0-14 0c0 5.2 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  map: (
    <>
      <path d="m3 6 6-2 6 2 6-2v14l-6 2-6-2-6 2Z" />
      <path d="M9 4v14" />
      <path d="M15 6v14" />
    </>
  ),
  restaurant: (
    <>
      <path d="M6 3v9" />
      <path d="M4 3v5" />
      <path d="M8 3v5" />
      <path d="M6 12v9" />
      <path d="M16 3v18" />
      <path d="M16 3c2.6 0 4 2.4 4 5.1S18.6 13 16 13" />
    </>
  ),
  sparkles: (
    <>
      <path d="m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8Z" />
      <path d="m19 14 .8 1.9 1.9.8-1.9.8-.8 1.9-.8-1.9-1.9-.8 1.9-.8Z" />
      <path d="m5 15 .8 1.9 1.9.8-1.9.8-.8 1.9-.8-1.9-1.9-.8 1.9-.8Z" />
    </>
  ),
  store: (
    <>
      <path d="M4 9h16" />
      <path d="M5 9 6.5 4h11L19 9" />
      <path d="M6 9v9h12V9" />
      <path d="M9 18v-5h6v5" />
    </>
  ),
  ticket: (
    <>
      <path d="M4 8a2 2 0 0 0 0 4v4h16v-4a2 2 0 0 1 0-4V4H4Z" />
      <path d="M12 4v12" strokeDasharray="2 2" />
    </>
  ),
};

export default function Icon({ name, className = '', label }) {
  return (
    <svg
      className={`ui-icon ${className}`.trim()}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      role={label ? 'img' : 'presentation'}
      aria-hidden={label ? undefined : 'true'}
      aria-label={label}
    >
      {icons[name] || icons.sparkles}
    </svg>
  );
}
