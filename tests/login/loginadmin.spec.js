import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { DashboardPage } from '../../pages/DashboardPage';

test('admin can log in and open Monetize', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.goto();
  await loginPage.login(process.env.EMAIL, process.env.PASSWORD);
  await loginPage.selectAccount(process.env.ACCOUNT_NAME);

  await dashboardPage.goto();
  await expect(page).toHaveURL(/\/connect\/dashboard/);
  await dashboardPage.openMonetize();
});
