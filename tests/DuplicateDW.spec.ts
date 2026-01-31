
import{test,expect, Locator}from'@playwright/test'

test('Verify Duplicate Dropdown',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //   const dropdown:Locator=page.locator('#colors>option') // Duplicate present

      const dropdown:Locator= page.locator('#animals>option') // No Duplicate present
      const alloption:string[]=(await dropdown.allTextContents()).map(text=>text.trim());

      console.log(alloption)

        const  myset= new Set<String>();
        const  duplicate:string[]=[];

    for(const text of alloption){

        if(myset.has(text))
        {
            duplicate.push(text);
        }
        else
        {
            myset.add(text)
        }
    }

    console.log("Duplicate options In An Arry : "+duplicate);


    if(duplicate.length>0)
        {
        console.log("Duplicate Elements :"+duplicate)
    }
    else{
        console.log("No duplicate found ...")
    }

    expect(duplicate.length).toBe(0);

})
