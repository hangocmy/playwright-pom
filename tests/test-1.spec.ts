import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://www.browserstack.com/live-for-teams');

  await page.getByRole('link', { name: 'Pricing' }).click();
  await expect(page).toHaveURL('https://www.browserstack.com/pricing');

  await page.getByRole('link', { name: 'Sign in' }).click();
  await expect(page).toHaveURL('https://www.browserstack.com/users/sign_in');

  await page.getByRole('textbox', { name: 'Business Email' }).click();

  await page.getByPlaceholder('Password').click();

  await page.getByRole('button', { name: 'Sign me in' }).click();

});