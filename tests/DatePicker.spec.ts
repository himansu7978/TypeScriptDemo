// Date Picker Handel 

import {test,expect, Page, Locator} from '@playwright/test'


async function selectdate(targetmonth:string,targetYear:string,targetDate:string,isTrue:boolean,page:Page) {


    while(true){

        const currentMonth=await page.locator('.ui-datepicker-month').textContent();
        const currentYear=await page.locator('.ui-datepicker-year').textContent();

        if(currentMonth===targetmonth && currentYear===targetYear){

            break;
        }

        if(isTrue){
        // For feauture Date
                 await page.locator("a[title='Next']").click();
        }
        else {
            // For Past Date
                await page.locator("a[title='Prev']").click();
        }
    }
    
     const allDate=await page.locator("table[class='ui-datepicker-calendar'] tbody td").all();

     for(const dt of allDate){
       let date= await dt.innerText();

       if(date==targetDate){

           await dt.click();
           break;

       }
    }
}

test('Date Pickers',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/') 
    await page.locator("#datepicker").click();

    // Feauture date
    let Year:string|null="2026"
    let month:string="March";
    let date:number|string="10";

    while(true){

        const currentMonth=await page.locator('.ui-datepicker-month').textContent();
        const currentYear=await page.locator('.ui-datepicker-year').textContent();

        if(currentMonth===month && currentYear===Year){

            break;
        }

        else{
            await page.locator("a[title='Next']").click();
        }
    }
    const allDate=await page.locator("table[class='ui-datepicker-calendar'] tbody td").all();

    for(let dt of allDate){

      const dates= await dt.innerText();
        if(dates===date){

           await dt.click();
           break;
        }
    }

   await page.waitForTimeout(3000)

})

test.only("Date Piker Using Function", async ({page})=>{

 page.goto('https://testautomationpractice.blogspot.com/');


    // Feauture Date

    let Year:string|null="2026"
    let month:string="March";
    let date:number|string="10";

    //past Dates

    // let Year:string|null="2023"
    // let month:string="March";
    // let date:number|string="11";

  const dtpicker:Locator  = page.locator("//input[@id='datepicker']");
  expect(dtpicker).toBeVisible();

  await page.waitForSelector('#datepicker');

  await dtpicker.click();

    await selectdate(month,Year,date,true,page);

        const expectedDate="03/10/2026" //(mm/dd/yyyy
        await expect(dtpicker).toHaveValue(expectedDate);
        await page.waitForTimeout(5000);

})

