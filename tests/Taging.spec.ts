
import {test,expect} from '@playwright/test'

//run all Regression tests
//command: npx playwright test Taging.spec.ts --project chromium --headed --grep "@regression"

// Run All Smoke tests
//command: npx playwright test Taging.spec.ts --project chromium --headed --grep "@smoke"

// Run more than Two tags like @regression and @sanity
//Command : npx playwright test Taging.spec.ts --project chromium --headed --grep "(?=.*@sanity)(?=.*@regression)"

//run the test which is belongs to either smoke or sanity 
//Command :npx playwright test Taging.spec.ts --project chromium --headed --grep "@smoke|@sanity"

// Run the test which is belongs to only sanity but not regression
//npx playwright test Taging.spec.ts --project chromium --headed --grep  "@sanity" --grep-invert "@regression"



test('Check The titel Of Home Page @sanity', async ({page})=>{


        await page.goto('https://www.opencart.com/index.php?route=cms/demo')
       await expect(page).toHaveTitle('OpenCart - Demo')
})

test('Check The titel Of the page',{tag:'@smoke'},async ({page})=>{


        await page.goto('https://www.opencart.com/index.php?route=cms/demo')
       await   expect(page).toHaveTitle('OpenCart - Demo')
})


test('Use Of Tag',{tag:'@regression'}, async ({page})=>{

         await page.goto('https://www.opencart.com/index.php?route=cms/demo')
         await expect(page).toHaveTitle('OpenCart - Demo')
         await expect(page.locator("//h2[normalize-space()='Store Front']")).toBeVisible();

})

test('Use Of multiple Tag',{tag:['@regression','@sanity']}, async ({page})=>{

         await page.goto('https://www.opencart.com/index.php?route=cms/demo')
         await expect(page).toHaveTitle('OpenCart - Demo')
         await expect(page.locator("//h2[normalize-space()='Store Front']")).toBeVisible();

})



test('Belongs Either smoke or sanity',{tag:['@smoke','@sanity']}, async ({page})=>{

         await page.goto('https://www.opencart.com/index.php?route=cms/demo')
         await expect(page).toHaveTitle('OpenCart - Demo')
         await expect(page.locator("//h2[normalize-space()='Store Front']")).toBeVisible();

})



