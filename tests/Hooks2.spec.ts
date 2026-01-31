// Example Of hooks Use 

/**
 * Open App -- use beforeAll hook
 * 
 * Login  
 *    go to the Proudct
 * logout
 * 
 * login
 *   add proudct
 * logout
 * 
 * Close The App  _after All hooks
 */

 import {test,expect,Page} from '@playwright/test'

 let page:Page

 test.beforeAll("Open The Application", async ({browser})=>{
    page= await browser.newPage();
    await page.goto('https://demowebshop.tricentis.com/')
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/')
    await expect(page).toHaveTitle('Demo Web Shop')

 })

 test.afterAll('Close The Application', async ()=>{
        await page.close();
 })