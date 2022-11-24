import { test } from '@playwright/test';
import { SignUp } from '../../pages/authentication-page';

let signUp: SignUp;

test.beforeEach(async ({ page  }) => {
  signUp = new SignUp(page);

  await page.goto('/');
});

test.afterEach(async({ page }) => {
  await page.close();
});

test.describe('Sign Up', () => {
  test('Verify sign up error message', async({ page }) => {
    await signUp.clickSignIn();
    await signUp.clickSignUp();
    await signUp.typeSignUpInfo();
    await signUp.clickSubmitAuthentication();
    await signUp.verifyErrorMessageSignUp('Please check the box to confirm acceptance of our Terms of Service and Privacy Policy ');
  });
});