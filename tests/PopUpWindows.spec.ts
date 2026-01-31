

import {test,expect} from '@playwright/test'

test('PopUp Windows', async ({browser})=>{

    const context=await browser.newContext();
    const page=await context.newPage();

    await page.goto('https://testautomationpractice.blogspot.com/')

    await Promise.all([page.waitForEvent('popup'),await page.locator('#PopUp').click()])

    const allPopUps= context.pages(); // return array of pages 
    console.log('No Of PopUp Windows :', allPopUps.length)


    console.log(allPopUps[0].url())// Retun the url of the page
    console.log(allPopUps[1].url())
    // console.log(allPopUps[2].url())

    //  await page.waitForTimeout(3000)

    for(const pop of allPopUps){

        const title=pop.title();

        if((await title).includes('Playwright')){

            await pop.locator('.getStarted_Sjon').click();
            await pop.close();
        }
    }


})