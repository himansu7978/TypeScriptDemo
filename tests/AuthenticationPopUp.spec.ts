
import {test,expect} from '@playwright/test'

test('Authentication pop Up ', async ({browser})=>{

       const context=await browser.newContext({httpCredentials:{username:'admin',password:'admin'}});
       
       const page=await context.newPage();

        await page.goto('https://the-internet.herokuapp.com/basic_auth');

        await page.waitForLoadState()

        await expect(page.getByText('Congratulations! You must have the proper credentials.', { exact: true })).toBeVisible();


})
