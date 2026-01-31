
import {test,expect, Locator} from '@playwright/test'

test('Verify Dynamic Table ', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    const table:Locator=page.locator("table[id='taskTable'] tbody")
    const rows:Locator[]=await table.locator("tr").all();
    console.log("Number Of Rows :",rows.length)
    expect(rows).toHaveLength(4)


    let cpu:string=""

    for(let row of rows){
       
        let name:string=await row.locator('td').nth(0).innerText()
        console.log(name)

        if(name.includes("Chrome")){

           cpu= await row.locator('td',{hasText:'%'}).innerText()
           console.log('Cpu Load :',cpu)
        }
    }

    let cpuload:string=await page.locator('strong.chrome-cpu').innerText()
    console.log("Cpu load Value : ",cpuload)

    if(cpuload.includes(cpu)){
        console.log("is euqal ")
    }else{
        console.log('Not Equal')
    }

    expect(cpuload.includes(cpu))
    await  page.waitForTimeout(5000);
    
})

test.only('OP', async ({page})=>{

   await page.goto('https://testautomationpractice.blogspot.com/');
   const ele:Locator= page.locator("//table[@id='taskTable']//thead/following::tbody[1]/tr /td[contains(text(),'Chrome')]/following-sibling::td[3]")
   let networkSpeed:any= await ele.textContent()
   
    console.log("Network Speed :",networkSpeed);
   
    let cpuload:string=await page.locator('strong.chrome-network').innerText()
    console.log("NetWork Speed ",cpuload)
    expect(cpuload.includes(networkSpeed))

    await  page.waitForTimeout(5000);


})