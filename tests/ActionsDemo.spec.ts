
import {test,expect,Locator} from '@playwright/test'


test('verify Text input Action',async ({page})=>{

     await page.goto("https://testautomationpractice.blogspot.com/")
     let textfield:Locator= page.locator('#name');

    
     await expect(textfield).toBeVisible()
     await expect(textfield).toBeEnabled()

     const maxlength:string| any=await textfield.getAttribute('maxlength'); // it will return the attribute value
     expect(maxlength).toBe("15");

     await textfield.fill("Himansu");

     const entervalued:string=await textfield.inputValue();
     console.log("Enter value :"+entervalued)
     expect(entervalued).toBe('Himansu')
    
})

test('Verify Radio button Action',async ({page})=>{

     await page.goto("https://demowebshop.tricentis.com/")

     const rediobtn:Locator=page.locator('#pollanswers-1');

     await expect(rediobtn).toBeVisible();
     await expect(rediobtn).toBeEnabled()

     await rediobtn.check();

     await expect(rediobtn).toBeChecked()


})

test.only('Verify CheckBox',async ({page})=>{

     await page.goto('https://testautomationpractice.blogspot.com/')

     const Sundaycheckbox:Locator=page.getByLabel('Sunday');

     await expect(Sundaycheckbox).toBeVisible()
     await expect(Sundaycheckbox).toBeEnabled()
     await Sundaycheckbox.check();
     await expect(Sundaycheckbox).toBeChecked()

     const day:string []=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
     const checkboxes:Locator[]=day.map(index =>page.getByLabel(index));
     expect(checkboxes.length).toBe(7)


     // Check All The CheckBox
     for(const checkbox of checkboxes){

       await checkbox.check();
       await expect(checkbox).toBeChecked()
     }

     // uncheck last 3 check boxes
     for(const checkbox of checkboxes.slice(-3))
          {
               await checkbox.uncheck()
               await expect(checkbox).not.toBeChecked()

          }

          // this is for if checkbox is select then unselect if it unselect then select
          for(const checkbox of checkboxes)
          {
               // only if checked
               if(await checkbox.isChecked()){
                   await checkbox.uncheck()
                   await expect(checkbox).not.toBeChecked()
               }

               // only if unchecked
               else
               {
                    await checkbox.check()
                    await expect(checkbox).toBeChecked()
               }
          } 

          // check random check box by using indexing
          const checkIndex:number[]=[1,4,3]

          for (const i of checkIndex)
          {
               await checkboxes[i].check()
               await expect(checkboxes[i]).toBeChecked()
          }         
})
