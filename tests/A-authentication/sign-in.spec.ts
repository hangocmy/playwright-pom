import { test, expect } from '@playwright/test';
import { SignIn } from '../../pages/authentication-page';

//let page: Page;

test.beforeEach(async ({ page }) => {
  //page = await browser.newPage();
  await page.goto('/');
});

test.afterEach(async({ page }) => {
  await page.close();
});


test.describe('Sign In', () => {
  test('Verify sign in error message', async({ page }) => {
    const signIn = new SignIn(page);

    await signIn.clickSignIn();
    await expect(page).toHaveURL('/users/sign_in');
    await signIn.typeSignInInfo();
    await signIn.clickSubmitAuthentication();
    await signIn.verifyErrorMessageSignIn('Invalid password');

  });
});