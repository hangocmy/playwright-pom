import { test } from '@playwright/test';
import { Search } from '../../pages/search-page';

//let page: Page;

test.beforeEach(async ({ page }) => {
  //page = await browser.newPage();
  await page.goto('/');
});


test.afterEach(async({ page }) => {
  await page.close();
});


test.describe('Search', () => {
  test('Verify search results', async({ page }) => {
    const search = new Search(page);
    await search.clickSearchButton();
    await search.enterSearchInput('Playwright');
    await search.verifySearchResults();
  });
});


