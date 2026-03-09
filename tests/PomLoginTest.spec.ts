import { test, expect } from '@playwright/test';

import { LoginPage } from '../Pages/LoginPage';


test('Validate Login Functionality', async ({ page }) => {

    //LoginPage class object creation and method calling

    const loginPage = new LoginPage(page);
    await loginPage.openApplication();
    await loginPage.validateloginFunctionality('pavanol', 'test@123');

})