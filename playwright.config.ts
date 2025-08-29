import { defineConfig, devices } from '@playwright/test';

const port = Number(process.env.PLAYWRIGHT_PORT || 4322);
const useWebServer = !process.env.NO_WEBSERVER;

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: { timeout: 10 * 1000 },
  fullyParallel: true,
  reporter: [['list']],
  use: {
    baseURL: `http://localhost:${port}`,
    trace: 'off',
    screenshot: 'only-on-failure',
    video: 'off',
  },
  ...(useWebServer
    ? {
        webServer: {
          command: `npm run preview -- --port ${port}`,
          url: `http://localhost:${port}`,
          reuseExistingServer: true,
          stdout: 'ignore',
          stderr: 'pipe',
        },
      }
    : {}),
  projects: [
    {
      name: 'mobile',
      use: { ...devices['iPhone 13'] },
    },
    {
      name: 'tablet',
      use: { ...devices['iPad Mini'] },
    },
    {
      name: 'desktop',
      use: { viewport: { width: 1366, height: 900 } },
    },
  ],
});
