import {test,expect} from '@playwright/test'

test('Input test', async ({page})=>{
    
    await page.goto('https://testautomationpractice.blogspot.com/')
    
    await page.getByPlaceholder('Enter Name').fill('Himansu')
    
    await page.locator('#email').fill('himansu@123')

    await page.getByPlaceholder('Enter Phone').fill('9876543210');

    await page.getByLabel('Address:').fill('Bhubaneswar');

    await page.getByText('Male', { exact: true }).click();

    await page.locator('#tuesday').check()

    await page.selectOption('#country', 'India');
    
    await page.selectOption("#colors", "Blue");

    await page.selectOption('#animals', ['Cheetah', 'Dog']);






})
