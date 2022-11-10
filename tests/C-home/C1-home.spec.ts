import { expect, test, Page } from '@playwright/test';
import { BrowserStackHomePage } from '../../pages/home-page';

let page: Page;

test.beforeEach(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('/');
});


test.afterEach(async() => {
  await page.close();
});


test.describe('Verify menu home page', () => {
  test('Verify item in menu products', async() => {
    const homePage = new BrowserStackHomePage(page);    
    await homePage.clickOnProductsMenu();
    await expect(homePage.productMenuDropdown).toContainText(["Live", "Automate", "Percy", "App Live", "App Automate"]);
  });
  
  test('Verify item in menu developers', async() => {
    const homePage = new BrowserStackHomePage(page);
    await homePage.clickOnDevelopersMenu();
    await expect(homePage.developersMenuDropdown).toContainText(["Documentation", "Support", "Status", "Release Notes", "Open Source", "Events", "Test University", "Champions"]);
  });
});