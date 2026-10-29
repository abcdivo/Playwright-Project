import { Locator, Page } from "@playwright/test";

export class HomePage{
    readonly page: Page;
    readonly welcometext : Locator;
    readonly verifEmail : Locator;
    readonly accounts : Locator;


    constructor(page: Page){
        this.page=page
        this.welcometext=page.getByRole('heading', { name: 'Welcome to Emra! 🎉' })
        this.verifEmail=page.getByText('Please verify your email')
        this.accounts=page.getByRole('button', { name: 'Accounts' })
    }

    async gotoAccount() {
        await this.accounts.click()
    }

}