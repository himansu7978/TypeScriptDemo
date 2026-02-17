
/*Perequistes: Install csv-parse package using the following command in the terminal before running the test:
 npm install csv-parse
*/ 

import {test,expect} from '@playwright/test'

import fs from 'fs'

import {parse} from 'csv-parse/sync'

//Reding The Data From CSV File

const path="Testdata/data.csv"
const csvData = fs.readFileSync(path, 'utf-8')

const records:any= parse(csvData,
                            {
                                columns:true,
                                skip_empty_lines:true
                            }
                 )

// main Test
test.describe('Fetching the Data from Csv file',async()=>{

    for(const  data of  records){

        test(`Login Test for "${data.email}" and "${data.password}"`,async ({page})=>{

            await page.goto('https://demoblaze.com/')
            await expect(page).toHaveTitle('STORE')

        await page.getByRole('link', { name: 'Log in' }).click();
        await page.locator('#loginusername').fill(data.email);
        await page.locator('#loginpassword').fill(data.password);
        await page.getByRole('button', { name: 'Log in' }).click();
        

       if(data.validity === 'Valid')  
        {
            await expect(page.getByText('Welcome ' + data.email)).toBeVisible()
            await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible()
        }
        else{
            
            await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible()
        }

     })

    }

})
