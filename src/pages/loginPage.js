// src/pages/loginPage.js
const { expect } = require('@playwright/test');

class LoginPage {
    constructor(page) {
        this.page = page;
        this.emailInput = page.locator('[data-qa=login-email]');
        this.passwordInput = page.locator('[data-qa=login-password]');
        this.loginButton = page.locator('[data-qa=login-button]');
    }

    async navigate() {
        await this.page.goto('https://automationexercise.com/login');
    }

    async login(email, password) {
        await this.emailInput.fill(email)
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}

module.exports = LoginPage;
