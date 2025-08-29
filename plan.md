# Website Overhaul Plan: Antares Equity Partners

This document outlines the plan to redesign the Antares Equity Partners website using the Astrowind template, integrating the new brand identity and content structure.

## I. Project Goals
1.  **Modernize the Website:** Implement the Astrowind template for a fresh, modern look and feel.
2.  **Integrate Branding:** Apply the Antares Equity Partners logo, color scheme, and imagery.
3.  **Restructure Content:** Implement the new information architecture and content outlined in the project brief.
4.  **Optimize for SEO:** Ensure all pages have the correct meta tags and Schema markup.

## II. Page Creation and Renaming

The following actions will be taken to align the page structure with the new slugs:

| Current File | New File/Slug | Action |
| :--- | :--- | :--- |
| `src/pages/index.astro` | `/` | **Modify:** Update content for "Inicio". |
| `src/pages/about.astro` | `/sobre-nosotros`| **Rename & Modify:** Rename to `src/pages/sobre-nosotros.astro` and update content. |
| `src/pages/contact.astro`| `/contacto` | **Modify:** Update content for "Contacto". |
| `n/a` | `/soluciones` | **Create:** Create new file `src/pages/soluciones.astro`. |
| `n/a` | `/portafolio` | **Create:** Create new file `src/pages/portafolio.astro`. |
| `n/a` | `/recursos` | **Create:** Create new file `src/pages/recursos.astro`. |
| `src/pages/pricing.astro`| `n/a` | **Delete:** This page is not needed. |
| `src/pages/services.astro`| `n/a` | **Delete:** This page is not needed. |

## III. Navigation Update (`src/navigation.ts`)

The `headerData` and `footerData` in [`src/navigation.ts`](src/navigation.ts:1) will be updated to reflect the new site structure:

### Header Navigation (`headerData`):
- **Inicio** (`/`)
- **Soluciones** (`/soluciones`)
- **Portafolio** (`/portafolio`)
- **Sobre Nosotros** (`/sobre-nosotros`)
- **Recursos** (`/recursos`)
- **Contacto** (`/contacto`)

The existing "Homes", "Pages", "Landing" and "Blog" dropdowns will be removed and replaced with this simpler navigation structure. The "Download" CTA will be updated to "Iniciar conversación".

### Footer Navigation (`footerData`):
The footer will be simplified to include the main navigation links and social media profiles.

## IV. Content Implementation Plan

Each page will be updated with the content provided in the brief. This will involve:
- **Hero Sections:** Updating titles, subtitles, and CTAs.
- **Component Integration:** Using Astrowind components to build out sections like "Métricas", "Soluciones Destacadas", "Principios", and "Portafolio Preview".
- **Asset Integration:** Incorporating logos and images from the `Materiales de Marketing` directory.
- **SEO:** Implementing meta descriptions and other relevant tags for each page.
- **Schema Markup:** Adding the provided JSON-LD schema to the appropriate pages.

## V. Branding and Styling
- The primary logo will be sourced from [`Materiales de Marketing/Identidad Corporativa Antares/Logos/Imágenes sin fondo/Logo_Antares_transp_lightBg.png`](Materiales%20de%20Marketing/Identidad%20Corporativa%20Antares/Logos/Ima%CC%81genes%20sin%20fondo/Logo_Antares_transp_lightBg.png).
- A custom color palette and typography will be configured in `tailwind.config.cjs` to match the Antares brand guidelines, which will be inferred from the marketing materials.

---

Please review this plan. Once approved, I will recommend that we switch to "Code" mode to begin implementation.