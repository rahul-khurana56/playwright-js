export class DashboardPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.monetizeLink = page.locator('[data-test="sidebar-site-monetize"]');
  }

  async goto() {
    await this.page.goto('/connect/dashboard');
  }

  async openMonetize() {
    await this.monetizeLink.click();
  }
}
