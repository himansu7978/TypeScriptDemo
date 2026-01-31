
import {test,expect} from '@playwright/test'


test('Launch Browser',async ({page})=>{

   await page.goto("https://testautomationpractice.blogspot.com/")

   let titel:string =await page.title()

   console.log(titel)

   await expect(page).toHaveTitle('Automation Testing Practice');

})

test.only('Verify Url',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    let url:string=await page.url()

    console.log("Url"+ url)

    await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/')
    

})