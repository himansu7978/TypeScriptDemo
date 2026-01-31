// Browser handeling 

import {test,expect, firefox, chromium, webkit} from '@playwright/test'




test("Browser Handel", async ()=>{

    const browser=await webkit.launch()
    const context=await browser.newContext();

    const page=await context.newPage();
    const page2=await context.newPage();


    console.log('No Of Pages Created',context.pages().length);


     await page.goto('https://testautomationpractice.blogspot.com/');
     await expect(page).toHaveTitle('Automation Testing Practice')

     await page2.goto('https://demowebshop.tricentis.com/');
     await expect(page2).toHaveTitle('Demo Web Shop')
    

})