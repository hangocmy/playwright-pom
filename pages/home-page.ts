import { Page, Locator } from '@playwright/test';

export class BrowserStackHomePage {
  readonly page: Page;
  readonly productsMenu: Locator;
  readonly productMenuDropdown: Locator;
  readonly developersMenu: Locator;
  readonly developersMenuDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productsMenu = page.locator('#product-menu-toggle');
    this.productMenuDropdown = page.locator('#product-menu-dropdown > div > ul > li > a > div > div[class="dropdown-link-heading"]');
    
    this.developersMenu = page.locator('#developers-menu-toggle');
    this.developersMenuDropdown = page.locator('#developers-menu-dropdown > li[class="developers-menu-control"] > a');
  }

  async clickOnProductsMenu() {
    await this.productsMenu.waitFor({state: 'visible'});
    await this.productsMenu.click();
  }

  async clickOnDevelopersMenu() {
    await this.developersMenu.waitFor({state: 'visible'});
    await this.developersMenu.click();
  }

}