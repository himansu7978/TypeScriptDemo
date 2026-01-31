// Frame Handelinf

import{test,expect, Frame} from '@playwright/test'

test('Frame Handel using Url', async ({page})=>{

    await page.goto('https://demo.automationtesting.in/Frames.html')

    const frames:Frame[]= page.frames()
    console.log(frames.length)


    // const frame=page.frame({url:'https://demo.automationtesting.in/SingleFrame.html'})

    // if(frame){

    //     await page.locator("input[type='text']").fill('Hey')
    //     // await frame.fill("input[type='text']","Hey")
    // }else
    //     console.log("No frame found");


    // Approach 2

    // const inputbox=page.frameLocator("[src='SingleFrame.html']").locator("input[type='text']");
    // await inputbox.fill('Hello')

    const multiframe= page.frame({url:"https://demo.automationtesting.in/Frames.html#Multiple"})

    if(multiframe){
            await multiframe.locator("input[type='text']").fill("hey")
            const  childframes= multiframe.childFrames()
            console.log("count of The iner frame :", childframes.length)
    

    }else{
        console.log('Frame Not Found')
    }


})

