import {test,expect} from '@playwright/test';

//Test Data 

const loginTest:string[][]=[

    ["sahoo9090@gmail.com","Test@123","Valid User"],
    ["user1@gmail.com","password1","Invalid User"],
    ["user2@gmail.com","password2","Invalid User"],
    ["   ","guest123","Invalid User"],

];



for (const [email, password, validity] of loginTest) {

    test.describe('Login With Data Driven Approach', () => {

        test(`Login Tests for ${email} and ${password}`, async ({ page }) => {

            await page.goto('https://demowebshop.tricentis.com/login')

            //fill Login Data
            await page.locator('#Email').fill(email)
            await page.locator('#Password').fill(password);
            await page.locator('input[value="Log in"]').click();

            if (validity.toLowerCase() === 'valid user') {

                //Assert Logout link is visible
                await expect.soft(page.locator('.ico-logout')).toBeVisible();
            } else {
                //Assert error message is displayed
                await expect.soft(page.locator('div.validation-summary-errors')).toBeVisible();

                //assert user is not navigated to home page
                await expect(page).toHaveURL('https://demowebshop.tricentis.com/login');
            }
        })

    })


}