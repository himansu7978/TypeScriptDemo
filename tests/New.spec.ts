import {test,expect} from '@playwright/test'

test('New Window',async ({page})=>{

    await page.goto('https://demoblaze.com/')

    await expect(page).toHaveURL('https://demoblaze.com/');


})