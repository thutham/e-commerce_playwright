const { defineConfig } = require('@playwright/test');
const { BASE_URL } = require('./environments/dev.config');

module.exports = defineConfig({
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    baseURL: BASE_URL,
  },
  projects: [
    {
      name: 'chrome',
      use: {
        browserName: 'chromium',
        channel: 'chrome',
      },
    },
    {
      name: 'edge',
      use: {
        browserName: 'chromium',
        channel: 'msedge',
      },
    },
  ],
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
  ],
});
