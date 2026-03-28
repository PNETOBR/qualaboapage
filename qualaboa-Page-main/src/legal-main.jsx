import React from 'react';
import ReactDOM from 'react-dom/client';
import LegalApp from './LegalApp';
import './styles.css';

const initialSection = window.__LEGAL_INITIAL_SECTION__ || 'termsOfUse';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LegalApp initialSection={initialSection} />
  </React.StrictMode>,
);
