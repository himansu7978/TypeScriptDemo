
import { test, expect } from '@playwright/test';

import { HomePage } from '../Pages/HomePage';
import { LoginPage } from '../Pages/LoginPage';

test('Validate Home Page', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await loginPage.openApplication();
    await loginPage.validateloginFunctionality('pavanol', 'test@123');
    await homePage.validateHomePage();
})