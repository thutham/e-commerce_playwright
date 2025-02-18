const { defineConfig } = require('@playwright/test');

// Determine environment and load corresponding configuration
const env = process.env.NODE_ENV || 'dev'; // Default to 'dev' if NODE_ENV is not set
const envURL = require(`./environments/${env}/${env}.config`);
const { BASE_URL, LOGIN_URL } = envURL;

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
