
import {test,expect} from '@playwright/test'
import { beforeEach } from 'node:test'


let page;


test.beforeEach('Use of Hooks', async ({browser})=>{

  page =await browser.newPage();

   await page.goto('https://www.google.com/')
   expect(page).toHaveURL('https://www.google.com/')

   expect(page).toHaveTitle('Google');

    
})

test.afterEach('After Each', async()=> {


})