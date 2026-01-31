

 import {test,expect,Page} from '@playwright/test'

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

 let page:Page;

 test.beforeAll("Open The Application", async ({browser})=>{
    page= await browser.newPage();
    await page.goto('https://demoblaze.com/')
    await expect(page).toHaveURL('https://demoblaze.com/')
    await expect(page).toHaveTitle('STORE')

 })

 test.beforeEach('Login',async ()=>{

   await page.locator('#login2').click()
   await expect(page.locator('#logInModalLabel')).toBeVisible();
   await page.locator('#loginusername').fill("pavanol");
   await page.locator('#loginpassword').fill("test@123");
  //  await page.getByRole('button',{name:'button'}).click();
   await page.locator("//button[text()='Log in']").click()

 })

 test("Find The No of Product",async ()=>{

  const proudcts=  page.locator("//div[@id='tbodyid']/div");
  const count= await proudcts.count();
  console.log("Count Of The Proudct :",count)
  await expect(proudcts).toHaveCount(9);

 })

 test("Add To Cart", async ()  => {

    await page.locator("//a[text()='Nexus 6']").click();
    await page.locator("//a[contains(text(),'Add to cart')]").click()

    

    //Handel Alert
     page.once('dialog',async (dialog)=>{

      expect(dialog.message()).toContain('Product added.')
      await dialog.accept();
     })
   

 })

 test.afterEach('Logout',async ()=>{
   await page.locator('#logout2').click();

 })

 test.afterAll('Close The Application', async ()=>{
        
        await page.close();
 })