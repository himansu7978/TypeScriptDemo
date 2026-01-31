//

import{test,expect, chromium} from '@playwright/test'


test('Tab handel', async ()=>{

    const browser=await chromium.launch()
    const context=await browser.newContext();
    const parentpage=await context.newPage();

    await parentpage.goto('https://testautomationpractice.blogspot.com/');

    const [childpage]= await Promise.all([context.waitForEvent('page'),parentpage.getByRole('button', { name: 'New Tab' }).click()])

    const pages= context.pages()
    console.log("Number Of Pages created ",pages.length);

    console.log('Title of The Parent page',await pages[0].title())
    console.log('Titel Of Child Page ',await pages[1].title())

    //Approch 2
    console.log('Title of The Parent page',await parentpage.title())
    console.log('Titel Of Child Page ',await childpage.title())
    
})