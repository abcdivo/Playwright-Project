import { Locator, Page } from "@playwright/test";

export class ForgotpasswordPage{
    readonly page:Page;
    readonly emailField:Locator;
    readonly buttonResetPassword: Locator;

    constructor (page:Page){
        this.page=page
        this.emailField=page.getByRole('textbox', { name: 'Email' })
        this.buttonResetPassword=page.getByRole('button', { name: 'Reset Password' })
    }

    async ForgotPassword(email:string){
        await this.emailField.fill(email)
        await this.buttonResetPassword.click()
    }

}