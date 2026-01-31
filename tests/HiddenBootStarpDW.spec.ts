

import {test,expect, Locator} from '@playwright/test'

test('Handel Bootstrap Drop Down', async ({page})=>{

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        await expect (page.getByAltText('company-branding')).toBeVisible();

        await expect(page.locator("//h5[normalize-space()='Login']")).toBeVisible()

        await page.getByPlaceholder('Username').fill('Admin');

        await page.getByRole('textbox', { name: 'Password' }).fill('admin123');

        await expect(page.getByRole('button')).toBeEnabled();

        await page.locator('button:has-text("Login")').click();

        await page.getByText('PIM').click();

            await page.waitForTimeout(3000)

        await page.locator("form i").nth(2).click();

                 await page.waitForTimeout(3000)

        let list:Locator= page.locator("//div[@role='listbox']/div");

        const count:number=await list.count();
        console.log('Number of list ',count);

        //print all The option 
        console.log("Directly using AllTextContains() method ",await list.allTextContents())

        // print all option using loop 
         for(let i=0;i<count;i++){

            console.log(await list.nth(i).innerText());

         }
         
     // using loop clicking one option  
        for(let i=0;i<count;i++){

            const options=await list.nth(i).innerText();

            if( options ==='Software Engineer'){

                await list.nth(i).click()
                break;
            }

        }


})