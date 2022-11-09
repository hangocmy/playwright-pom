import { expect, test } from '@playwright/test';
import { BrowserStackHomePage } from '../../pages/home-page';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
})

test.describe('Verify menu home page', () => {
  test('Verify item in menu products', async({ page }) => {
    const homePage = new BrowserStackHomePage(page);    
    await homePage.clickOnProductsMenu();
    await expect(homePage.productMenuDropdown).toContainText(["Live", "Automate", "Percy", "App Live", "App Automate"]);
  });

  test('Verify item in menu developers', async({ page }) => {
    const homePage = new BrowserStackHomePage(page);
    await homePage.clickOnDevelopersMenu();
    await expect(homePage.developersMenuDropdown).toContainText(["Documentation", "Support", "Status", "Release Notes", "Open Source", "Events", "Test University", "Champions"]);
  });
});