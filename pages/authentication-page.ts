import { Page, Locator, expect } from '@playwright/test';

//Sign In
export class SignIn {
  readonly page: Page;
  readonly signIn: Locator;
  readonly userName: Locator;
  readonly passWord: Locator;
  readonly btnSignIn: Locator;
  readonly errorMessageSignIn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signIn = page.locator('//li[@class="sign-in-link hide-xs hide-sm"]//a[@title="Sign In"]');
    this.userName = page.locator('#user_email_login');
    this.passWord = page.locator('#user_password');
    this.btnSignIn = page.locator('#user_submit');
    this.errorMessageSignIn = page.locator("//input[@id='user_password']/../div[@class='error-msg']//div//span");
  }

  async clickSignIn() {
    await this.signIn.waitFor({state: 'visible'});
    await this.signIn.click();
  }

  async typeSignInInfo() {
    await this.userName.waitFor({state: 'visible'});
    await this.userName.type('example1@example.com');

    await this.passWord.waitFor({state: 'visible'});
    await this.passWord.type('examplepassword');
  }

  async clickSubmitAuthentication() {
    await this.btnSignIn.waitFor({state: 'visible'});
    await this.btnSignIn.click();
  }

  async verifyErrorMessageSignIn(message: string) {
    const errorMessageSignIn = await this.errorMessageSignIn.textContent();
    expect(errorMessageSignIn).toBe(message);
  }
}

//Sign Up
export class SignUp extends SignIn {
  readonly page: Page;
  readonly signUp: Locator;
  readonly fullName: Locator;
  readonly eMail: Locator;
  readonly passWord: Locator;
  readonly errorMessageSignUp: Locator;

  constructor(page: Page) {
    super(page);
    this.signUp = page.locator('//form[@id="signin_signup_form"]//a[@class="sign-up-link hide-in-os-page"]');
    this.fullName = page.locator('#user_full_name');
    this.eMail = page.locator('#user_email_login');
    this.passWord = page.locator('#user_password');
    this.errorMessageSignUp = page.locator('#bs-alert-text-id');
  }


  async clickSignUp() {
    await this.signUp.waitFor({state: 'visible'});
    await this.signUp.click();
  }

  async typeSignUpInfo() {
    await this.fullName.waitFor({state: 'visible'});
    await this.fullName.type('Ha Ngoc My');

    await this.eMail.waitFor({state: 'visible'});
    await this.eMail.type('my.ha@idtek.com.vn');

    await this.passWord.waitFor({state: 'visible'});
    await this.passWord.type('123456');
  }

  async verifyErrorMessageSignUp(message: string) {
    const errorMessageSignUp = await this.errorMessageSignUp.textContent();
    expect(errorMessageSignUp).toBe(message);
  }

}