import { test, expect, Page } from '@playwright/test';
import { FormDemo } from '../../pages/home-page';
import user from '../../fixtures/user.json';

let page : Page;

test.beforeEach(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('/');
});


test.afterEach(async() => {
  await page.close();
});

test.describe('Form live for team', async () => {

  test('Should show error message when email is empty', async () => {
    const formDemo = new FormDemo(page); 

    formDemo.clickOnLiveForTeams();
    expect(page).toHaveURL('live-for-teams');
    
    formDemo.clickOnGetADemo();
    formDemo.enterInfoMissingCompanyName(user[0].fullname, user[0].email, user[0].message);
    
    await expect(formDemo.errorMessageCompanyInput).toContainText('please share your company name');
    });

  test('Should show error message when message is empty', async () => {
    const formDemo = new FormDemo(page); 

    formDemo.clickOnLiveForTeams();
    expect(page).toHaveURL('/live-for-teams');
    
    formDemo.clickOnGetADemo();
    formDemo.enterInfoMissingTextarea(user[0].fullname, user[0].email, user[0].company);

    await expect(formDemo.errorMessageTextarea).toContainText('please write a message');
  });
  

});

