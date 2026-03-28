import adminLocalTerms from './legal/admin-local-terms.txt?raw';
import privacyPolicy from './legal/privacy-policy.txt?raw';
import termsOfUse from './legal/terms-of-use.txt?raw';

export const TERMS_AND_PRIVACY = {
  lastUpdate: '26 de março de 2026',
  termsOfUse,
  privacyPolicy,
  adminLocalTerms,
};

export const LEGAL_DOCUMENTS = [
  {
    key: 'termsOfUse',
    id: 'termos-de-uso',
    label: 'Termos de uso',
    badge: 'Documento principal',
    description: 'Regras gerais de acesso, cadastro, funcionalidades, cobranças e responsabilidades da plataforma.',
    content: termsOfUse,
  },
  {
    key: 'privacyPolicy',
    id: 'politica-de-privacidade',
    label: 'Política de privacidade',
    badge: 'LGPD e dados',
    description: 'Como o QualABoa coleta, utiliza, compartilha, protege e retém dados pessoais.',
    content: privacyPolicy,
  },
  {
    key: 'adminLocalTerms',
    id: 'termos-para-administradores',
    label: 'Termos para administradores',
    badge: 'Perfis de locais',
    description: 'Regras específicas para responsáveis por bares, restaurantes e outros estabelecimentos na plataforma.',
    content: adminLocalTerms,
  },
];
