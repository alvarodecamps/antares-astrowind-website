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
    role: 'Socio',
    linkedin: 'https://www.linkedin.com/in/larajavier/',
    bio: 'Perfil en preparación. Comparta su LinkedIn y puntos destacados para completar la biografía.',
    bullets: [],
  },
  {
    name: 'Sergio Darío Reyes Galvis',
    role: 'Socio',
    linkedin: 'https://www.linkedin.com/in/sdreyesg/',
    bio: 'Perfil en preparación. Comparta su LinkedIn y puntos destacados para completar la biografía.',
    bullets: [],
  },
];
