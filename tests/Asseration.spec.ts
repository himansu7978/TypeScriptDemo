
import {test,expect} from '@playwright/test'

test('Asseration', async ({page})=>{

   await page.goto('https://testautomationpractice.blogspot.com/')
   
  

   //1 .Auto-retrying assertions(Automaticaly retyes untill it pass / time out over )
   //assertions will retry until the assertion passes, or the assertion timeout is reached. Note that retrying 
   // assertions are async, so you must await them.

    await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/'); // waits for currect url 

    await expect(page.locator("h1[class='title']")).toBeVisible();
    await expect(page.locator("p[class='description'] span")).toHaveText('For Selenium, Cypress & Playwright')
   

    // 2. Non retrying assertions ( this is exexute imidiatly , no retry)

    const title=await page.title()
    expect(title.includes('Automation Testing Practice')).toBeTruthy();

    //nagetive matcher (Applicable for both auto retyring and non retrying )
    await expect(page.locator("h1[class='title']")).not.toBeVisible();
    expect(title.includes('Automation Testing Practice')).not.toBeTruthy();








})