import { test, expect } from '@playwright/test';
import { SignUp } from '../../pages/authentication-page';

test.beforeEach(async ({ page}) => {
  await page.goto('/');
});

test.describe.configure({ mode: 'parallel' });

test.describe('Sign Up', () => {
  test('Verify sign up error message', async({ page }) => {
    
    const signUp = new SignUp(page);

    await signUp.clickSignIn();
    await signUp.clickSignUp();
    await signUp.enterSignUpInfo();
    await signUp.verifyErrorMessageSignUp('Please check the box to confirm acceptance of our Terms of Service and Privacy Policy ');

  });
});