import { Locator, Page } from '@playwright/test';

export class Search {
  readonly page: Page;
  readonly searchButton: Locator;
  readonly searchInput: Locator;
  readonly searchResults: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchButton = page.locator('//button[@class="doc-search-menu dropdown-toggle doc-search-cta doc-search-menu-icon doc-menu-toggle"]');
    this.searchInput = page.locator('#doc-search-box-input');
    this.searchResults = page.locator('(//div[@id="all-search-ds-results"]//li//a)[1]');
  }

  async clickSearchButton() {
    await this.searchButton.waitFor({state: 'visible'});
    await this.searchButton.click();
  }

  async enterSearchInput(keySearch: string) {
    await this.searchInput.waitFor({state: 'visible'});
    await this.searchInput.type(keySearch);
    await this.page.keyboard.press('Enter');
  }

  async verifySearchResults() {
    await this.searchResults.waitFor({state: 'visible'});
    await this.searchResults.click();
  }

}