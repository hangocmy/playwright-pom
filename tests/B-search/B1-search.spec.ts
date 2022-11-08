import { test, expect, Page } from '@playwright/test';

let page : Page;

test.beforeEach(async ({ page}) => {
  await page.goto('https://browserstack.com');

});

test.describe('Search', () => {
  test('Verify search results', async({ page }) => {
    await expect(page).toHaveURL(/.*/);

    await page.locator('//button[@class="doc-search-menu dropdown-toggle doc-search-cta doc-search-menu-icon doc-menu-toggle"]').click();
    
    await page.waitForSelector('#doc-search-box-input');
    await page.locator('#doc-search-box-input').type('playwright');
    await page.keyboard.press('Enter');
    
    await page.waitForSelector('(//div[@id="all-search-ds-results"]//li//a)[1]');
    expect(page.url()).toContain('/search?query=playwright&type=all');
    await page.locator('(//div[@id="all-search-ds-results"]//li//a)[1]').click();
  });
});