import { Page, Locator, expect } from "@playwright/test";

export class LoginPage {

    readonly page: Page;
    readonly loginLink: Locator;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly welcomeUser: Locator;
    readonly logoutLink: Locator;

    constructor(page: Page) {

        this.page = page;
        this.loginLink = page.locator('#login2');
        this.usernameInput = page.locator('#loginusername');
        this.passwordInput = page.locator('#loginpassword');
        this.loginButton = page.getByRole('button', { name: 'Log in' });
        this.welcomeUser = page.locator('#nameofuser');
        this.logoutLink = page.getByRole('link', { name: 'Log out' });

    }
    async openApplication() {
        await this.page.goto('https://demoblaze.com/');

    }
    async validateloginFunctionality(login: string, password: string) {

        await this.loginLink.click();
        await this.usernameInput.fill(login);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        await this.page.waitForTimeout(2000);
        const name: string | null = await this.welcomeUser.textContent();
        expect.soft(name).toBe("Welcome " + login);
        await expect(this.logoutLink).toBeVisible();
        await expect(this.page).toHaveURL("https://demoblaze.com/");

    }
}