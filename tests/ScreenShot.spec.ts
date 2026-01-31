import { test,expect } from "@playwright/test";

test('Screenshot Demo', async ({page})=>{

    await page.goto('https://demoblaze.com/')

    const timestamp=Date.now();
    //page ScreenShot
    // await page.screenshot({path:"ScreenShot/"+"homepage"+timestamp+".png"})

    //Full page Screen Shot
    // await page.screenshot({path:"ScreenShot/"+"FullPAge"+timestamp+".png",fullPage:true})

    // Element screeShot
    // await page.locator('#cat').screenshot({path:"ScreenShot/"+"Element"+timestamp+".png"})

    //img screenshot
    const logo= page.getByAltText('First slide')
    await logo.screenshot({path:'ScreenShot/'+'logo'+timestamp+'.png'})




}) 