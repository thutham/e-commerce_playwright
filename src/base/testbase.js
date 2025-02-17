const { test, expect } = require('@playwright/test');
const { BASE_URL } = require('../../environments/dev.config');

test.beforeEach(async ({ page }) => {
  await page.goto(BASE_URL); // Navigate to the BASE_URL before each test
});

test.afterEach(async ({ page }) => {
  await page.context().close(); // Close the browser context after each test
});

module.exports = { test, expect, BASE_URL };
