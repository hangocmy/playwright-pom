import { expect, test } from '@playwright/test';
import { HeaderMenu, HomePage } from '../../pages/home-page';

let headerMenu: HeaderMenu;
let homePage: HomePage;

test.beforeEach(async ({ page }) => {
  headerMenu = new HeaderMenu(page);
  homePage = new HomePage(page);

  await page.goto('/');
});

test.afterEach(async({ page }) => {
  await page.close();
});

test.describe('Verify menu home page', () => {
  test('Verify item in menu products', async({ page }) => {
    await headerMenu.clickOnProductsMenu();
    await expect(headerMenu.productMenuDropdown).toContainText(["Live", "Automate", "Percy", "App Live", "App Automate"]);
  });
  
  test('Verify item in menu developers', async({ page }) => {
    await headerMenu.clickOnDevelopersMenu();
    await expect(headerMenu.developersMenuDropdown).toContainText(["Documentation", "Support", "Status", "Release Notes", "Open Source", "Events", "Test University", "Champions"]);
  });
});


test.describe('Verify content in home page', () => {
  test('Verify product cards heading', async({ page }) => {
    await expect(homePage.productCards).toContainText(["live", "Automate", "Percy", "app live", "app automate"]);
  
  });

  test('Verify menu footer', async ({ page }) => {    
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await expect(page.locator('footer')).toBeVisible();
    
    await expect(homePage.menuFooter).toContainText(["Products", "Platform", "Solutions", "Resources", "Company"]);
  });
});