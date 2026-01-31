//Pagination Web Table handel 

import {test,expect, Locator} from '@playwright/test'

test('Verify Pagination Table only printing ', async ({page})=>{



   await page.goto('https://testautomationpractice.blogspot.com/')

        const rows= await page.locator("table[id=productTable] tbody tr").all();

        for(let row of rows){

            console.log(await row.innerText())
            
        }


            
})

test('Pagination 2 usnig for f loop',async ({page})=>{

    let pages:boolean=true;
    await page.goto('https://datatables.net/examples/basic_init/alt_pagination.html');

    while(pages){

         const rows= await page.locator("#example tbody tr").all();

        for(let row of rows){

            console.log(await row.innerText())
        
        } 
        await page.waitForTimeout(3000);
        
        const nextPage= page.locator("button[aria-label='Next']");
        const isDisabled=await nextPage.getAttribute('class')

    if(isDisabled?.includes("disabled")){

        pages=false     

    }else{

       await nextPage.click();
    }
   
  }

})

test('Pagination 2 - Correct', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const pagination = page.locator('#pagination li');
    const pageCount = await pagination.count();

    for (let i = 0; i < pageCount; i++) {

        // Click page number
        await pagination.nth(i).click();

        // Wait for table to update
        await page.waitForSelector('table[id=productTable] tbody tr');

        const rows = page.locator('table[id=productTable] tbody tr');
        const rowCount = await rows.count();

        console.log(`\n--- Page ${i + 1} ---`);
        for (let j = 0; j < rowCount; j++) {
            console.log(await rows.nth(j).innerText());
        }
    }
});

test('Pagination using for loop', async ({ page }) => {

    let pages = true;
    let pageNumber = 1;

    await page.goto('https://datatables.net/examples/basic_init/alt_pagination.html');

    while (pages) {

        console.log(`\n========== PAGE ${pageNumber} ==========`);

        const rows = page.locator('#example tbody tr');
        const rowCount = await rows.count();

        for (let i = 0; i < rowCount; i++) {
            console.log(await rows.nth(i).innerText());
        }

        const nextPage = page.locator("button[aria-label='Next']");
        const classAttr = await nextPage.getAttribute('class');

        if (classAttr?.includes('disabled')) {
            pages = false;
        } else {
            await nextPage.click();
            pageNumber++;
            await page.waitForSelector('#example tbody tr'); // better than timeout
        }
    }
});

test('Pagination Filter The rows And Check The Row Count', async ({page})=>{

    await page.goto('https://datatables.net/examples/basic_init/alt_pagination.html');

    const dropdown:Locator=page.locator('#dt-length-0');
    await dropdown.selectOption({label:'25'})

    const rows:Locator[]=await page.locator("table[id='example'] tbody tr").all()
    expect(rows.length).toBe(25);


})

test.only('Search a sepecific data from the table ', async ({page})=>{

        
    await page.goto('https://datatables.net/examples/basic_init/alt_pagination.html');
    await page.locator('#dt-search-0').fill('Dai Rios');
    await page.waitForTimeout(5000)
     const rows:Locator[]=await page.locator("table[id='example'] tbody tr").all()

     if(rows.length>=1){

        for(let row of rows){

            const text=await row.innerText()
            if(text.includes('Dai Rios')){

                console.log('Data Match --Found')
                break;
            }
            else{
                console.log("Data Does Not Exist")
            }
        }


     }

})


