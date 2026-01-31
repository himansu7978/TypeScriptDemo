// Alert


import{test,expect} from '@playwright/test'

test.skip("Handeling Simple Alerts",async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enable Alert Handeling
    page.on('dialog', (dialog)=>{

        console.log("Dialog Type:", dialog.type()) // It will Return The type Of the Alert
        expect(dialog.type()).toContain('alert')
        console.log("Dialog Msg :",dialog.message()) // It will return The Msg inside the Alerts
        expect(dialog.message()).toContain('I am an alert box!')
        dialog.accept();
    })

    await page.locator('#alertBtn').click();

    await page.waitForTimeout(3000)
})

test("Confirm or Cancel type of Alert",async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

     page.on('dialog' ,(dialog)=>{
        console.log("Dialog Type:", dialog.type()) // It will Return The type Of the Alert
        expect(dialog.type()).toContain('confirm')
        console.log("Dialog Msg :",dialog.message()) // It will return The Msg inside the Alerts
        expect(dialog.message()).toContain('Press a button!')
        dialog.accept(); // close dialog by accepting/ok 
        // dialog.dismiss(); // Close Dialog by Dismiss/cancel

    });

    await page.getByText('Confirmation Alert').click()
    const msg= await page.locator('#demo').innerText();
    console.log("Output of the msg :",msg)
    expect(msg).toContain('You pressed OK!')


})


test.only('Prompt Alert', async ({page})=>{

    
    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog', (alert) => {
        console.log("Dialog Type:", alert.type()) // It will Return The type Of the Alert
        expect(alert.type()).toContain('prompt')
        console.log("Dialog Msg :",alert.message()) // It will return The Msg inside the Alerts
        expect(alert.message()).toContain('Please enter your name:')
        console.log("Defalt Value :",alert.defaultValue())
        expect(alert.defaultValue()).toContain('Harry Potter')
        
        alert.accept('Himansu');

    })

    await page.getByText('Prompt Alert').click()
    const text= await page.locator('#demo').innerText();
    console.log("Output of text:",text)
    await expect(page.locator('#demo')).toHaveText(text);

    await page.waitForTimeout(5000)

})