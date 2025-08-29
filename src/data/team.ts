export type TeamPerson = {
  name: string;
  role: string;
  email?: string;
  linkedin?: string;
  bio?: string;
  bullets?: string[];
};

export const team: TeamPerson[] = [
  {
    name: 'Alvaro De Camps',
    role: 'Socio Director',
    email: 'alvaro@antaresep.com',
    linkedin: 'https://www.linkedin.com/in/alvarodecamps/',
    bio:
      'Antes de fundar Antares Equity Partners, Alvaro fue analista de inversión en Egis Capital Partners, un fondo de capital privado enfocado en tecnología para los sectores de seguridad y defensa, donde evaluó inversiones de capital de crecimiento y de riesgo. Previamente, lideró la reestructuración de MEC en República Dominicana, incluyendo el turnaround de 100.1 FM, y la expansión a producción y promoción de eventos mediante una alianza con PAV Events. Es MBA por Columbia Business School (Finanzas) y licenciado en Economía (cum laude) por la PUCMM, con enfoque en Negocios Internacionales.',
    bullets: [
      'Egis Capital Partners — análisis de inversiones (tecnología: seguridad y defensa)',
      'Turnaround de 100.1 FM y expansión a eventos (alianza con PAV Events)',
      'MBA, Columbia Business School (Finanzas); Lic. Economía (PUCMM, cum laude)',
    ],
  },
  {
    name: 'Javier Andrés Lara Reinhold',
    role: 'Operaciones — Corotos',
    linkedin: 'https://www.linkedin.com/in/larajavier/',
    bio:
      'Operador en Corotos con foco en crecimiento y ejecución. Lidera iniciativas de producto, monetización y eficiencia operativa, trabajando de la mano con la gerencia para consolidar liderazgo y mejorar la experiencia del usuario.',
    bullets: [
      'Corotos — iniciativas de producto y monetización',
      'Optimización de procesos y eficiencia operativa',
      'Analítica y tableros de control para decisiones',
      'Trabajo de campo con equipo y socios clave',
    ],
  },
  {
    name: 'Sergio Darío Reyes Galvis',
    role: 'Socio — Operaciones (Corotos, 7Labs)',
    linkedin: 'https://www.linkedin.com/in/sdreyesg/',
    bio:
      'Socio operador en Antares. Co-lidera la ejecución en Corotos y 7Labs, impulsando gobernanza, métricas y expansión comercial/tecnológica con enfoque en resultados y disciplina operativa.',
    bullets: [
      'Corotos — operación y performance comercial',
      '7Labs — expansión de red y excelencia operativa',
      'Gobernanza y tableros de KPIs',
      'Alianzas y mejora continua en procesos',
    ],
  },
];
