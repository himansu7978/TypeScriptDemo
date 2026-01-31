import { test,expect, Locator } from "@playwright/test";

test('Verify The DropDown Shorting ',async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    // const dropdownOption:Locator=await page.locator('#colors>option') // Not sorted
    const dropdownOption:Locator= page.locator('#animals>option') // sorted list

    const alloptions=(await dropdownOption.allTextContents()).map(option=>option.trim())

    console.log(alloptions)

// this will impacted the original list why because arrylist is mutable in nature 

    // const originalList:string[]=alloptions;
    // const shortedList:string[]=alloptions.sort();


    //This Wiil not impacted 
    const originalList:string[]=[...alloptions];
    const shortedList:string[]=[...alloptions].sort();

    console.log("Original list :"+ originalList);
    console.log("Shorted List :"+shortedList);

    expect(originalList).toEqual(shortedList);


})

