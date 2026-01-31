
import{test,expect,Locator} from '@playwright/test'

test('Verify Locators',async ({page})=>{

      await page.goto('https://www.nopcommerce.com/en')
      
      // All images should have an alt attribute that describes the image. You can locate an
      // image based on the text alternative using page.getByAltText().

    await expect(page.getByAltText('nopCommerce')).toBeVisible()
    



})

/*
getByText()--Find an element by the text it contains. You can match by a substring, exact string, or a regular expression when using

When to use text locators
We recommend using text locators to find non interactive elements like 
div, span, p, etc. For interactive elements like button, a, input, etc. use role locators.

*/

test('use of getBytest method',async ({page})=>{

  await page.goto('https://testautomationpractice.blogspot.com/')

  await expect(page.getByText('For Selenium, Cypress & Playwright')).toBeVisible(); // Full String / Usimg Full Text

  await expect(page.getByText('For Selenium, Cypress')).toBeVisible(); // Using ParcialText / Substring

 await expect(page.getByText(/For Selenium/i)).toBeVisible({ timeout: 5000 }); // For Regular Expression/ caseInsensetive


})


/*
getByRole() -to locate an explicity and implicity Aceesbility Atributes
Role locators include buttons, checkboxes, headings, links, lists, tables,
and many more and follow W3C specifications for ARIA role, ARIA attributes and accessible name. 
Note that many html elements like <button> have an implicitly defined role that is recognized by the role locator.


*/
test('use of getByRole Locators',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    await expect(page.getByRole('heading',{name:'Tabs'})).toBeVisible()


    await page.getByRole('checkbox',{name: 'Sunday'}).check()


})

test('Use of getByLable() Locator',async ({page})=>{

  await page.goto('https://testautomationpractice.blogspot.com/')

  await page.getByLabel('Address:').fill('Himansu@gmail.com')
  

})
test('Use Of getByText() locator',async ({page})=>{
  await page.goto('https://testautomationpractice.blogspot.com/')
  await expect(page.getByText('For Selenium, Cypress & Playwright')).toBeVisible()
  

})

test('getByPlaceholder()',async ({page})=>{

  await page.goto("https://testautomationpractice.blogspot.com/")

   await page.getByPlaceholder('Enter Name').fill("Himansu");
   await page.getByPlaceholder('Enter EMail').fill('himansu@gmail.com');
   await page.getByPlaceholder('Enter Phone').fill('9090846015');
   await page.getByLabel('Address:').fill("hyderabad");
   
   
})

test.only('getByTitle() locator', async ({page})=>{

  await page.goto("https://demowebshop.tricentis.com/")
  await expect(page).toHaveTitle(/Demo Web Shop/i);
  // await expect (page.getByTitle('Demo Web Shop')).toBeVisible()
  

 

})

test.only('Use Of Css Seletor', async ({page})=>{

  await page.goto('https://demowebshop.tricentis.com/')

  const css:Locator=page.locator('#small-searchterms')

  await expect(css).toBeVisible()
  await expect(css).toBeEnabled()

  await css.fill('Hello World')

  const inputvalue:string=await css.inputValue()

   expect(inputvalue).toBe('Hello World')

  
})