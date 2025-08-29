import { test, expect } from '@playwright/test';

const routes = ['/', '/soluciones', '/portafolio', '/sobre-nosotros', '/contacto', '/recursos'];

for (const route of routes) {
  test(`snapshot ${route}`, async ({ page }, testInfo) => {
    await page.goto(route);
    // Give animations and fonts a moment to settle
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(400);
    const fileSafe = route === '/' ? 'home' : route.replace(/\//g, '_');
    const path = testInfo.outputPath(`${fileSafe}.png`);
    await page.screenshot({ path, fullPage: true });
    await testInfo.attach('screenshot', { path, contentType: 'image/png' });
    await expect(page).toHaveTitle(/Antares|Soluciones|Portafolio|Sobre|Contacto|Recursos/);
  });
}

