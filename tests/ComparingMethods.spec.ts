//

import {test,expect, Locator} from '@playwright/test'

test.skip('Verify Web Table', async ({page})=>{
 
    await page.goto('https://demowebshop.tricentis.com/')

    await expect(page).toHaveURL('https://demowebshop.tricentis.com/');
    await expect(page).toHaveTitle('Demo Web Shop');
    
    // innerText()  vs textContent()

    const products:Locator=page.locator('.product-item')
    
    // console.log("Use Of innertext() ----",await products.nth(1).innerText()) // This Will Return exact innertext inside the tag
    // console.log("Use Of textContent() ----",await products.nth(1).textContent()) // This Will Retun ineer text with some spaces and everting 

//    Use of Traditional fro loop 

    const count:number= await products.count()

    for(let i=0;i<count;i++){

        const data:string= await products.nth(i).innerText(); // Extrat plain text eliminet white spaces and hidden element 
        console.log(data) 

        // const data1:string|null= await products.nth(i).textContent(); // extract all the text present inside the tag 
        // console.log(data1?.trim())
        
        }
    })

    //     allInerText() vs allTextContent()

    test('Comaparision Mehods', async ({page})=>{

            await page.goto('https://demowebshop.tricentis.com/')

            await expect(page).toHaveURL('https://demowebshop.tricentis.com/');
            await expect(page).toHaveTitle('Demo Web Shop');

            console.log("Compearing  allInerText() vs allTextContent() ")

            const products:Locator=page.locator('.product-item')

            // const productName:string[]=await products.allInnerTexts();
            // console.log("productName Capture bt AllInnertext()",productName);

            const productName:string[]= await products.allTextContents();
            // console.log("productName Capture bt AllTextContent()",productName);

            const productarray:string[]= productName.map(t=>t.trim());
            console.log("After Triming using productName.map(text=>text.trim()",productarray)


            //all -- This Will Conver locator To Loccator[] of array
            // All()- return array of Locators
           const productLocators:Locator[]= await products.all();
           console.log(productLocators)

           for(const ele of productLocators){

               console.log( await  ele.innerText());

           }
           

    })
