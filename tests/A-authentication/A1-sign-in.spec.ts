import { test, expect, Page } from '@playwright/test';
import { SignIn } from '../../pages/authentication-page';

let page: Page;

test.beforeEach(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('/');
});

test.afterEach(async() => {
  await page.close();
});


test.describe('Sign In', () => {
  test('Verify sign in error message', async() => {
    const signIn = new SignIn(page);

    await signIn.clickSignIn();
    await expect(page).toHaveURL('/users/sign_in');
    await signIn.enterSignInInfo();
    await signIn.verifyErrorMessageSignIn('Invalid password');

  });
});