const { test, expect } = require('../base/testbase');

test('Compare Google page title', async ({ page }) => {
  await page.goto('https://www.google.com');
  const title = await page.title();
  expect(title).toBe('Google');
});
//test12w333