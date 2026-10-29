import { Locator, Page } from "@playwright/test";

export class HomePage{
    readonly page: Page;
    readonly welcometext : Locator;
    readonly verifEmail : Locator;


    constructor(page: Page){
        this.page=page
        this.welcometext=page.getByRole('heading', { name: 'Welcome to Emra! 🎉' })
        this.verifEmail=page.getByText('Please verify your email')
    }

}