import {test,expect} from '@playwright/test'

//Test Data
const searchitem:string[]=["Laptop","Gift Card","Camera","Smartphone"];


// using for of loop Statement
for(let item of searchitem)
{
test.skip(`search  Test for  ${item}`,async ({page}) => {

    await page.goto('https://demowebshop.tricentis.com/login')
    await page.locator('#small-searchterms').fill(item);
    await page.locator('input[value="Search"]').click();

    await expect.soft(page.locator('h2 a').nth(0)).toContainText(item,{ignoreCase : true});

    })
}

// using forEach Function
searchitem.forEach((item)=>{

    
test.skip(`search for Each items ${item}`,async ({page}) => {

    await page.goto('https://demowebshop.tricentis.com/login')
    await page.locator('#small-searchterms').fill(item);
    await page.locator('input[value="Search"]').click();

    await expect.soft(page.locator('h2 a').nth(0)).toContainText(item,{ignoreCase : true});

    })
})

//using Describe block

test.describe('Serchig items', () => {

    searchitem.forEach((item) => {
        test(`search for Each items ${item}`, async ({ page }) => {

            await page.goto('https://demowebshop.tricentis.com/login')
            await page.locator('#small-searchterms').fill(item);
            await page.locator('input[value="Search"]').click();

            await expect.soft(page.locator('h2 a').nth(0)).toContainText(item, { ignoreCase: true });

        })
    })
})