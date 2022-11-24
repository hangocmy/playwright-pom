import { test, Page } from '@playwright/test';
import { SignUp } from '../../pages/authentication-page';

let page: Page;

test.beforeEach(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('/');
});

test.afterEach(async() => {
  await page.close();
});

test.describe('Sign Up', () => {
  test('Verify sign up error message', async() => {
    
    const signUp = new SignUp(page);

    await signUp.clickSignIn();
    await signUp.clickSignUp();
    await signUp.typeSignUpInfo();
    await signUp.clickSubmitAuthentication();
    await signUp.verifyErrorMessageSignUp('Please check the box to confirm acceptance of our Terms of Service and Privacy Policy ');
  });
});