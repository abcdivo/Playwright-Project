import {Page, Locator} from '@playwright/test'

export class AccountsPage {
    readonly page : Page;
    readonly buttonAddAccount : Locator;
    readonly allertSuccess : Locator;
    

    constructor (page : Page){
        this.page=page
        this.buttonAddAccount=page.getByRole('button', { name: 'Add Account' })
        this.allertSuccess=page.getByText('Connect WhatsApp Account')
    }

    
}

