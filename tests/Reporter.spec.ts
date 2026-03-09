import { test, expect } from '@playwright/test'



test.beforeEach('Repoter test', async ({ page }) => {

    await page.goto('https://demowebshop.tricentis.com/');


})

test('Logtest', async ({ page }) => {

    await expect(page.getByAltText('Tricentis Demo Web Shop')).toBeVisible();

})

test('verify The Title', async ({ page }) => {

    await expect(page).toHaveTitle('Demo Web Shop');

})

test('Verify The Search Functionality', async ({ page }) => {

    await page.locator('#small-searchterms').fill('Laptop');
    await page.locator('input[type="submit"]').click();
    await expect(page.locator('h2 a').nth(0)).toContainText('Laptop');

})
test("verify The Login Functionality with Invalid Credentials", async ({ page }) => {

    await page.locator('.ico-login').click();
    await page.getByRole('textbox', { name: 'Email' }).fill('test@example.com')
    await page.locator('#Password').fill('Text@123')
    await page.locator('input.button-1.login-button').click();
    await expect(page.locator('.message-error')).toContainText('Login was unsuccessful. Please correct the errors and try again.');

})
