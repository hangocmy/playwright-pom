import { Page, Locator, expect } from '@playwright/test';

export class HeaderMenu {
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

export class HomePage {
  readonly page: Page;
  readonly productCards: Locator;
  readonly menuFooter: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productCards = page.locator('//div[@class="product-card--heading"]//h4');
    this.menuFooter = page.locator('//div[@class="widget_nav_menu"]//p');
  }

}


export class FormDemo {
  readonly page: Page;
  readonly mnuLiveForTeams: Locator;
  readonly btnGetADemo: Locator;
  readonly txtFullName: Locator;
  readonly txtEmail: Locator;
  readonly txtMessage: Locator;
  readonly txtCompanyName: Locator;
  readonly btnSubmitForm: Locator;
  readonly errorMessageCompanyInput: Locator;
  readonly errorMessageTextarea: Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.mnuLiveForTeams = page.locator('//ul[@class="horizontal-list product-menu"]//a[@title="Live for Teams"]');
    this.btnGetADemo = page.locator('//div[@class="button-section "]//button[normalize-space()="Get a free demo"]');
    this.txtFullName = page.locator('//div[@class="tingle-modal-box__content"]//input[@id="pcsf_form_fname_1"]');
    this.txtEmail = page.locator('//div[@class="tingle-modal-box__content"]//input[@id="pcsf_form_email_1"]');
    this.txtMessage = page.locator('//div[@class="tingle-modal-box__content"]//textarea[@id="pcsf_form_msg_1"]');
    this.txtCompanyName = page.locator('//div[@class="tingle-modal-box__content"]//input[@id="pcsf_form_company_1"]');
    this.btnSubmitForm = page.getByRole('button', {name: 'Get a free demo'});
    this.errorMessageCompanyInput = page.locator('//input[@placeholder="Please enter your company name"]/../span[@class="error-message"]');
    this.errorMessageTextarea = page.locator('//textarea[@placeholder="Tell us how we can help"]/../span[@class="error-message"]');
  }

  async clickOnLiveForTeams() {
    await this.mnuLiveForTeams.waitFor({state: 'visible'});
    await this.mnuLiveForTeams.click();
  }

  async clickOnGetADemo() {
    await this.btnGetADemo.waitFor({state: 'visible'});
    await this.btnGetADemo.click();
  }


  async enterInfoMissingCompanyName(fullname: any, email: any, message: any) {
    await this.txtFullName.type(fullname);
    await this.txtEmail.type(email);
    await this.txtMessage.type(message);
    await this.btnSubmitForm.click();
  }


  async enterInfoMissingTextarea(fullname: any, email: any, company: any) {
    await this.txtFullName.type(fullname);
    await this.txtEmail.type(email);
    await this.txtCompanyName.type(company);
    await this.btnSubmitForm.click();
  }




  
}