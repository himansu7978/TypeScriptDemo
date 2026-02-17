import {test,expect,Locator} from '@playwright/test'
import fs from 'fs';

// Read Test Data from JSON file
const jsonPath='Testdata/data.json';

const loginTestData:any= JSON.parse(fs.readFileSync(jsonPath,'utf-8'));

//Main Test
test.describe('Login With Data Driven Approach using Json File', () => {

for (const {email, password, validity} of  loginTestData) {

        test(`Login Tests for ${email} and ${password} and validity ${validity}`, async ({ page }) => {

            await page.goto('https://demowebshop.tricentis.com/login')
            
            //fill Login Data
            await page.locator('#Email').fill(email)
            await page.locator('#Password').fill(password);
            await page.locator('input[value="Log in"]').click();

            await page.waitForTimeout(2000);
            
            if (validity === 'true') {

                //Assert Logout link is visible
                await expect(page.locator('.ico-logout')).toBeVisible();
            } else {
                //Assert error message is displayed
                await expect(page.locator('div.validation-summary-errors')).toBeVisible();

                //assert user is not navigated to home page
                await expect(page).toHaveURL('https://demowebshop.tricentis.com/login');
            }
        })

    }

})




