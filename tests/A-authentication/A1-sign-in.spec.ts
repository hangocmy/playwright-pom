import { test, expect } from '@playwright/test';
import { SignIn } from '../../pages/authentication-page';

test.beforeEach(async ({ page}) => {
  await page.goto('/');
});

test.describe('Sign In', () => {
  test('Verify sign in error message', async({ page }) => {
    const signIn = new SignIn(page);

    await signIn.clickSignIn();
    await expect(page).toHaveURL('/users/sign_in');
    await signIn.enterSignInInfo();
    await signIn.verifyErrorMessageSignIn('Invalid password');

  });
});