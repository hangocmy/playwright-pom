import { test, expect, Page } from '@playwright/test';

let page : Page;

test.beforeEach(async ({ page}) => {
  await page.goto('https://browserstack.com');
});

test.describe('Sign In', () => {
  test('Verify sign in error message', async({ page }) => {
    await page.waitForSelector('text=Sign in', {state: 'visible'});
    await page.locator('text=Sign in').first().click();
    await expect(page).toHaveURL(/.*sign_in/);

    await page.waitForSelector('#user_email_login');
    await page.locator('#user_email_login').type('example1@example.com');

    await page.waitForSelector('#user_password');
    await page.locator('#user_password').type('examplepassword');

    await page.waitForSelector('#user_submit');
    await page.locator('#user_submit').click();

    const errorMessage = await page.locator("//input[@id='user_password']/../div[@class='error-msg']//span").textContent();
    expect(errorMessage).toBe('Invalid password');
  });
});