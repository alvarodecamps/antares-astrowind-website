import { test, expect } from '@playwright/test';

type Metrics = {
  route: string;
  device: string;
  headerHeight: number;
  logoHeight: number | null;
  heroHeight: number | null;
  portfolioLogoHeights?: number[];
};

const routes = ['/', '/soluciones', '/portafolio', '/sobre-nosotros', '/contacto', '/recursos'];

test.describe('UI audit metrics', () => {
  for (const route of routes) {
    test(`metrics for ${route}`, async ({ page, browserName }, testInfo) => {
      await page.goto(route);
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(200);

      const metrics: Metrics = await page.evaluate(() => {
        const header = document.getElementById('header');
        const headerHeight = header ? Math.round(header.getBoundingClientRect().height) : 0;

        const logo = header?.querySelector('picture img') as HTMLImageElement | null;
        const logoHeight = logo ? Math.round(logo.getBoundingClientRect().height) : null;

        // Try to identify the first hero section by slot bg presence
        const hero = document.querySelector('section.relative');
        const heroHeight = hero ? Math.round(hero.getBoundingClientRect().height) : null;

        let portfolioLogoHeights: number[] | undefined = undefined;
        if (location.pathname.includes('portafolio')) {
          const imgs = Array.from(document.querySelectorAll('main img')) as HTMLImageElement[];
          portfolioLogoHeights = imgs.map((i) => Math.round(i.getBoundingClientRect().height)).filter((n) => n > 0);
        }

        return {
          route: location.pathname || '/',
          device: navigator.userAgent,
          headerHeight,
          logoHeight,
          heroHeight,
          portfolioLogoHeights,
        };
      });

      const fileSafe = route === '/' ? 'home' : route.replace(/\//g, '_');
      await testInfo.attach(`metrics-${fileSafe}.json`, {
        body: JSON.stringify(metrics, null, 2),
        contentType: 'application/json',
      });

      // Basic expectations
      expect(metrics.headerHeight).toBeGreaterThanOrEqual(64);
      expect(metrics.headerHeight).toBeLessThanOrEqual(120);
      if (metrics.logoHeight) expect(metrics.logoHeight).toBeGreaterThan(40);
      if (metrics.heroHeight) expect(metrics.heroHeight).toBeGreaterThanOrEqual(400);
      if (metrics.portfolioLogoHeights && metrics.portfolioLogoHeights.length) {
        const min = Math.min(...metrics.portfolioLogoHeights);
        const max = Math.max(...metrics.portfolioLogoHeights);
        expect(max - min).toBeLessThanOrEqual(6); // within 6px variance
      }
    });
  }
});

