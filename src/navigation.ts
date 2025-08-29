import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getPermalink('/'),
    },
    {
      text: 'Soluciones',
      href: getPermalink('/soluciones'),
    },
    {
      text: 'Portafolio',
      href: getPermalink('/portafolio'),
    },
    {
      text: 'Sobre Nosotros',
      href: getPermalink('/sobre-nosotros'),
    },
    {
      text: 'Recursos',
      href: getPermalink('/recursos'),
    },
    {
      text: 'Contacto',
      href: getPermalink('/contacto'),
    },
  ],
  actions: [{ text: 'Iniciar conversación', href: '/contacto' }],
};

export const footerData = {
  links: [
    {
      title: 'Antares',
      links: [
        { text: 'Soluciones', href: getPermalink('/soluciones') },
        { text: 'Portafolio', href: getPermalink('/portafolio') },
        { text: 'Sobre Nosotros', href: getPermalink('/sobre-nosotros') },
        { text: 'Recursos', href: getPermalink('/recursos') },
      ],
    },
    {
      title: 'Contacto',
      links: [
        { text: 'info@antaresep.com', href: 'mailto:info@antaresep.com' },
        { text: '+1 809 544 2082', href: 'tel:+18095442082' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/antares-equity-partners' },
  ],
  footNote: `
    © ${new Date().getFullYear()} Antares Equity Partners. Todos los derechos reservados.
  `,
};
