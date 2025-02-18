const { test, expect } = require('@playwright/test');
// Determine environment and load corresponding configuration
const env = process.env.NODE_ENV || 'dev'; // Default to 'dev' if NODE_ENV is not set
const envURLs = require(`../../environments/${env}/${env}.config`);
// const envURLs = require('../../environments/dev/dev.config');
const { BASE_URL, LOGIN_URL} = envURLs

test.beforeEach(async ({ page }) => {
  await page.goto(LOGIN_URL); // Navigate to the BASE_URL before each test
},60000);

test.afterEach(async ({ page }) => {
  await page.context().close(); // Close the browser context after each test
});

module.exports = { test, expect, LOGIN_URL };
