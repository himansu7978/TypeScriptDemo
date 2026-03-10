import { Locator, Page ,expect} from '@playwright/test';

export class HomePage {

    readonly page: Page;
    readonly lnkHome: Locator;
    readonly lnkContact: Locator;
    readonly lnkAboutUs: Locator;
    readonly lnkCart: Locator;
 
    constructor(page: Page) {
         
        this.page = page;
        this.lnkHome = page.getByRole('link', { name: 'Home' });
        this.lnkContact = page.getByRole('link', { name: 'Contact' });
        this.lnkAboutUs = page.getByRole('link', { name: 'About us' });
        this.lnkCart = page.getByRole('link', { name: 'Cart' });
    }

    async validateHomePage() {
        
        await expect(this.lnkHome).toBeVisible();
        await expect(this.lnkContact).toBeVisible();
        await expect(this.lnkAboutUs).toBeVisible();
        await expect(this.lnkCart).toBeVisible();
        
    }

}