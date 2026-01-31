import {test, expect, Locator } from "@playwright/test";



test('Verify MultiSelet dropdown',async ({page})=>{

      await page.goto('https://testautomationpractice.blogspot.com/')

      // four diffferent Approcah 

    //   await page.locator('#colors').selectOption(['Yellow','Red','White']); // By using Visible text
    //   await page.locator('#colors').selectOption(['yellow','green','blue']); // By using Value attribute
    //   await page.locator('#colors').selectOption([  {label:'Yellow'},{label:'Green'},{label:'Blue'}  ] ); // By using Label 
        // await page.locator('#colors').selectOption([  {index:3},{index:4},{index:5}  ] ); // by using index



      // Check The Number of option present From The DropDown

        const listDWoption:Locator= page.locator('#colors>option')
        await expect(listDWoption).toHaveCount(7);

    //Check an option present in dropdown
        const listoptions:string []=(await listDWoption.allTextContents()).map(list=>list.trim());

        console.log(listoptions)

        expect(listoptions).toContain('Blue')


        // Print All Options

        for (const option of listoptions){

            console.log(option)
        }



        await page.waitForTimeout(5000)

})

