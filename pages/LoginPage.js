export class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('[data-test="login-email"]');
    this.passwordInput = page.locator('[data-test="login-password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
  }

  async goto() {
    await this.page.goto('/login');
  }

  async enterEmail(email) {
    await this.emailInput.fill(email);
  }

  async enterPassword(password) {
    await this.passwordInput.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async login(email, password) {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.clickLogin();
  }

  async selectAccount(accountName = process.env.ACCOUNT_NAME) {
    await this.page.getByRole('link', { name: accountName }).click();
    // The session isn't ready until the app redirects into the account.
    await this.page.waitForURL(/\/connect\/dashboard/);
  }
}
