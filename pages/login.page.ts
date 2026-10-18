import { Locator, Page } from "@playwright/test";

export class LoginPage{
    readonly page: Page;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;
    readonly flashMessage: Locator;

    constructor(page: Page){
        this.page=page
        this.emailField=page.locator('#email')
        this.passwordField=page.getByRole('textbox', { name: 'Password' })
        this.loginButton=page.getByRole('button', { name: 'Sign In' })
        this.flashMessage=page.getByText('Invalid credentials')
    }

    async loginAs(email:string, password:string) {
        await this.emailField.fill(email)
        await this.passwordField.fill(password)
        await this.loginButton.click()
    }

    async loginWithoutButton(email:string, password:string){
        await this.emailField.fill(email)
        await this.passwordField.fill(password)
    }
}