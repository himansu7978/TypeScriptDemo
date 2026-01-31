
import {test,expect, Locator} from '@playwright/test'

test('Verify Single DropDown', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    // await page.locator('#country').selectOption('India'); // Using Visible Text 

    // await page.locator('#country').selectOption({value:'uk'}) // By using Value

    // await page.locator('#country').selectOption({label:'India'}) // By Using Label

    await page.locator('#country').selectOption({index:1}) // By using index



    // Check The number Of an  option present in the dropdownr

    const dropdownOption:Locator=page.locator('#country>option');

    await expect(dropdownOption).toHaveCount(10);

    await page.waitForTimeout(5000);


   //Check an Option present in Dropdown

//   const allOptions:string []=await dropdownOption.allTextContents(); // it is giving options with some space and charector

     const allOptions:string []=(await dropdownOption.allTextContents()).map(text=>text.trim()); // it will give the excat text

     console.log(allOptions)

     // Check The The Optiont present or not 

    expect(allOptions).toContain('Brazil'); // Check if the Array contain "Brazil" or not


    // Printing All The Options From The Drop Down

    for(const option of allOptions){

        console.log(option)
    }

})