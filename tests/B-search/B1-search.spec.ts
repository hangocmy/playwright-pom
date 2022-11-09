import { test, expect } from '@playwright/test';
import { Search } from '../../pages/search-page';

test.beforeEach(async ({ page}) => {
  await page.goto('/');
});

test.describe('Search', () => {
  test('Verify search results', async({ page }) => {
    const search = new Search(page);
    await search.clickSearchButton();
    await search.enterSearchInput('Playwright');
    await search.verifySearchResults();
  });
});