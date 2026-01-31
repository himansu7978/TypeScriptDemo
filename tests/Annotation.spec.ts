//

import{test,expect, Page} from  '@playwright/test'


test('Test1',async ({page})=>{

    await page.goto('https://www.google.com/')
    await expect(page).toHaveURL('https://www.google.com/')


})
//Only()
test("Test2",async ({page})=>{

    await page.goto('https://www.flipkart.com/')
    await expect(page).toHaveURL('https://www.flipkart.com/')
    await expect(page).toHaveTitle('Online Shopping India Mobile, Cameras, Lifestyle & more Online @ Flipkart.com')

})

//skip()
test.skip("Test3",async ({page})=>{

    await page.goto('https://www.flipkart.com/')
    await expect(page).toHaveURL('https://www.flipkart.com/')
    await expect(page).toHaveTitle('Online Shopping India Mobile, Cameras, Lifestyle & more Online @ Flipkart.com')

})

// test.skip()-- based On Condition We Can use 
test("Test4",async ({page,browserName})=>{

    test.skip(browserName==="firefox","This Test Skip if The Browser is FireFox")

    await page.goto('https://www.amazon.in/')
    await expect(page).toHaveURL('https://www.amazon.in/')
    await expect(page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')

})

//fail()
test.fail('fail',async ({page})=>{

    await page.goto('https://www.amazon.in/')
    await expect(page).toHaveURL('https://www.amazon.in/')
    await expect(page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')


})

//fixme -marks the test as failing. Playwright will not run this test, as opposed to the fail annotation. Use fixme when running the test is slow or crashes.
// if the test partialy completed then we can use use this annotation -fixme()
test.fixme('Test5',async ({page})=>{

    await page.goto('https://playwright.dev/docs/test-annotations')


})

//test.slow() marks the test as slow and triples the test timeout.
test('Test6',async ({page})=>{
    test.slow()
    await page.goto('https://www.google.com/')
    await expect(page).toHaveURL('https://www.google.com/')
    await expect(page).toHaveTitle('Google')

})