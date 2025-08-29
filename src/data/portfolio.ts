export type PortfolioLogo = {
  alt: string;
  src: string;
};

export type PortfolioCase = {
  name: string;
  bullets: string[];
};

export const portfolioLogos: PortfolioLogo[] = [
  { alt: 'Corotos', src: '/images/corotos-logo.png' },
  { alt: '7Labs', src: '/images/7labs-logo.png' },
  { alt: 'SAM Latinoamérica', src: '/images/sam-logo.png' },
  { alt: 'Almomento.net', src: '/images/almomento-logo.png' },
];

export const portfolioCases: PortfolioCase[] = [
  {
    name: 'Corotos',
    bullets: [
      '<strong>Situación:</strong> Clasificados online líder en RD; ~28M visitas/mes (fuente: sitio).',
      '<strong>Tesis:</strong> Monetización y profesionalización operativa para consolidar liderazgo.',
      '<strong>Acciones:</strong> Gobierno y métricas, producto y data, performance comercial.',
      '<strong>Resultado:</strong> Crecimiento en ingresos y eficiencia (en curso).',
    ],
  },
  {
    name: '7Labs',
    bullets: [
      '<strong>Situación:</strong> POS popular para microempresarios; líder en recargas RD/Haití.',
      '<strong>Tesis:</strong> Ampliar red, nuevos productos y eficiencia operativa.',
      '<strong>Acciones:</strong> Formalización, KPIs, alianzas telco y expansión de canales.',
      '<strong>Resultado:</strong> Escalamiento disciplinado (en curso).',
    ],
  },
  {
    name: 'SAM Latinoamérica',
    bullets: [
      '<strong>Situación:</strong> Empresa de garantías extendidas con enfoque en servicio.',
      '<strong>Tesis:</strong> Integración con retail partners y excelencia en claims.',
      '<strong>Acciones:</strong> Pricing/underwriting, experiencia cliente, sistemas y reporting.',
      '<strong>Resultado:</strong> Mejora operativa y crecimiento (en curso).',
    ],
  },
  {
    name: 'Almomento.net',
    bullets: [
      '<strong>Situación:</strong> Periódico digital líder; ~1.5M visitas/mes (fuente: sitio).',
      '<strong>Tesis:</strong> Fortalecer producto, SEO y monetización.',
      '<strong>Acciones:</strong> Optimización editorial/SEO, ad stack y analytics.',
      '<strong>Resultado:</strong> Mayor alcance y eficiencia (en curso).',
    ],
  },
];

// Optional more detailed structure for future use
export type PortfolioCaseStudy = {
  name: string;
  subtitle?: string;
  situation: string;
  thesis: string;
  actions: string[];
  kpis: string[];
  result: string;
};

export const portfolioCaseStudies: PortfolioCaseStudy[] = [
  {
    name: 'Corotos',
    situation: 'Clasificados online líder en República Dominicana con ~28M visitas mensuales (fuente: sitio oficial).',
    thesis: 'Consolidar liderazgo vía profesionalización operativa y optimización de monetización.',
    actions: ['Gobernanza y tablero de KPIs', 'Optimización de producto y motor de búsqueda', 'Data/analytics para pricing y campañas', 'Performance marketing y partnerships'],
    kpis: ['Tráfico mensual ~28M (sitio oficial)', 'Liderazgo de categoría en RD'],
    result: 'Crecimiento en ingresos y eficiencia operativa (en curso).',
  },
  {
    name: '7Labs',
    situation: 'Punto de venta para microempresarios, líder en recargas en RD y Haití.',
    thesis: 'Expandir base de comercios, lanzar productos adyacentes y mejorar la eficiencia.',
    actions: ['Formalización de KPIs y reportes', 'Alianzas con telcos y distribuidores', 'Mejoras de uptime/soporte', 'Expansión de canales'],
    kpis: ['Cobertura RD/Haití', 'Liderazgo en recargas'],
    result: 'Escalamiento disciplinado (en curso).',
  },
  {
    name: 'SAM Latinoamérica',
    situation: 'Empresa de garantías extendidas con trayectoria y foco en servicio.',
    thesis: 'Crecimiento junto a retail partners; excelencia en claims y experiencia cliente.',
    actions: ['Integraciones con retailers', 'Pricing y underwriting', 'Mejora de experiencia cliente', 'Fortalecimiento de sistemas/analytics'],
    kpis: ['NPS y tasa de siniestros (en desarrollo)', 'Tiempo de ciclo de claims'],
    result: 'Mejora operativa y crecimiento (en curso).',
  },
  {
    name: 'Almomento.net',
    situation: 'Periódico digital líder con ~1.5M visitas mensuales (fuente: sitio oficial).',
    thesis: 'Mejorar producto, SEO y monetización para expandir alcance y yield.',
    actions: ['Optimización editorial y SEO', 'Ad stack y header bidding', 'Analytics de audiencia', 'Mejoras de performance móvil'],
    kpis: ['Visitas ~1.5M/mes (sitio oficial)', 'Velocidad y retención (en mejora)'],
    result: 'Mayor alcance y eficiencia (en curso).',
  },
];
