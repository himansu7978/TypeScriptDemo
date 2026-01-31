
import {test,expect} from'@playwright/test'

test('Hard Vs Soft ', async ({page})=>{

       await page.goto('https://testautomationpractice.blogspot.com/')

       
      // Hard Asseration
       await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/')
       await expect(page).toHaveTitle('Automation Testing Practice')

       await expect(page.locator('h1:visible')).toBeVisible();

       const text=await page.getByText('For Selenium, Cypress & Playwright', { exact: true }).textContent();

       expect(text?.includes('Cypress')).toBeTruthy()


       // Soft Asseration
       await expect.soft(page).toHaveTitle('Automation Testing Practice')

       await expect.soft(page.locator('h1:visible')).not.toBeVisible();

       const text1=await page.getByText('For Selenium, Cypress & Playwright', { exact: true }).textContent();

       expect.soft(text1?.includes('Cypress')).toBeTruthy()

})