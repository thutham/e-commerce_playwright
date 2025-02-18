const { test, expect } = require('../base/testbase');
const LoginPage = require('../pages/loginPage');
// Determine environment and load corresponding test data
const env = process.env.NODE_ENV || 'dev'; // Default to 'dev' if NODE_ENV is not set
const testData = require(`../../environments/${env}/data/${env}.loginData`);

test.describe('Login Tests', () => {
  test('Successful login with valid credentials', async ({ page }) => {
      let loginPage = new LoginPage(page);
      await loginPage.login(testData.validEmail,testData.validPassword);
  });

  // test('Failed login with invalid email', async ({ page }) => {
  //     await loginPage.fillEmail('invalid@example.com');
  //     await loginPage.fillPassword('validPassword');
  //     await loginPage.submit();
  //     await loginPage.assertLoginFailed();
  // });

  // test('Failed login with invalid password', async ({ page }) => {
  //     await loginPage.fillEmail('valid@example.com');
  //     await loginPage.fillPassword('invalidPassword');
  //     await loginPage.submit();
  //     await loginPage.assertLoginFailed();
  // });

  // test('Failed login with empty email', async ({ page }) => {
  //     await loginPage.fillPassword('validPassword');
  //     await loginPage.submit();
  //     await loginPage.assertLoginFailed();
  // });

  // test('Failed login with empty password', async ({ page }) => {
  //     await loginPage.fillEmail('valid@example.com');
  //     await loginPage.submit();
  //     await loginPage.assertLoginFailed();
  // });
});