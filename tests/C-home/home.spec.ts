import { expect, test, Page } from '@playwright/test';
import { HeaderMenu, HomePage } from '../../pages/home-page';

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
    const headerMenu = new HeaderMenu(page);    
    await headerMenu.clickOnProductsMenu();
    await expect(headerMenu.productMenuDropdown).toContainText(["Live", "Automate", "Percy", "App Live", "App Automate"]);
  });
  
  test('Verify item in menu developers', async() => {
    const headerMenu = new HeaderMenu(page);
    await headerMenu.clickOnDevelopersMenu();
    await expect(headerMenu.developersMenuDropdown).toContainText(["Documentation", "Support", "Status", "Release Notes", "Open Source", "Events", "Test University", "Champions"]);
  });
});


test.describe('Verify content in home page', () => {
  test('Verify product cards heading', async() => {
    const homePage = new HomePage(page);
    await expect(homePage.productCards).toContainText(["live", "Automate", "Percy", "app live", "app automate"]);
  
  });

  test('Verify menu footer', async () => {
    const homePage = new HomePage(page);
    
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await expect(page.locator('footer')).toBeVisible();
    
    await expect(homePage.menuFooter).toContainText(["Products", "Platform", "Solutions", "Resources", "Company"]);
  });
});