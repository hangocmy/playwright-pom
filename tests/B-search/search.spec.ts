import { test } from '@playwright/test';
import { Search } from '../../pages/search-page';

let search: Search;

test.beforeEach(async ({ page }) => {
  search = new Search(page);

  await page.goto('/');
});

test.afterEach(async({ page }) => {
  await page.close();
});

test.describe('Search', () => {
  test('Verify search results', async({ page }) => {
    await search.clickSearchButton();
    await search.enterSearchInput('Playwright');
    await search.verifySearchResults();
  });
});


