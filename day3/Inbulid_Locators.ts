
import{test,expect, Locator} from'@playwright/test'

test('Inbuild Loacators',async ({page})=>{

       await page.goto('https://testautomationpractice.blogspot.com/')

       await expect(page).toHaveTitle('Automation Testing Practice')
       await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/')

 
     let placeholder:any =await page.getByPlaceholder('Enter Name').textContent();
     console.log(placeholder)
        
})