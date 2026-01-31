// Auto Suggestion Drop Deown 

import {test,expect, Locator} from '@playwright/test'

test('AutoSuggestion', async ({page})=>{

        await page.goto('https://www.flipkart.com/')

        await expect(page).toHaveURL('https://www.flipkart.com/')
        await expect(page).toHaveTitle('Online Shopping India Mobile, Cameras, Lifestyle & more Online @ Flipkart.com');


        await page.getByPlaceholder('Search for Products, Brands and More').fill('Samasung');

        await page.waitForTimeout(3000)

        let option:Locator= page.locator("//ul[@class='_1sFryS _2x2Mmc _3ofZy1']/li")
        const count=await option.count();

        console.log(await option.allTextContents())

        console.log('Number of suggestion ',count)



      console.log("Using For lopp printing the element")

        for(let i=0;i<count;i++ ){
            
            // console.log(await option.nth(i).innerText()) // one way 
             console.log(await option.nth(i).textContent()) // 2nd way

              let text=  await option.nth(i).textContent()

              if(text==='samsung s24'){

                await  option.nth(i).click()  
                break;
              }
              
        }
})