import {Page, Locator} from '@playwright/test'

export class ContactPage{
    readonly page : Page;
    readonly fieldCountry : Locator;
    readonly placeholderCountry : Locator;
    readonly fieldPhonenumber : Locator;
    readonly buttonHubungkanWhatsapp : Locator;

    constructor (page : Page){
        this.page=page
        this.fieldCountry=page.getByRole('combobox')
        this.placeholderCountry=page.getByPlaceholder('Search country...')
        this.fieldPhonenumber=page.getByRole('textbox', { name: 'Phone Number' })
        this.buttonHubungkanWhatsapp=page.getByRole('button', { name: 'Hubungkan WhatsApp' })
        
    }

    async addNewAccount(country:string, phonenumber:string){
        await this.fieldCountry.click()
        await this.placeholderCountry.fill(country)
        await this.fieldPhonenumber.fill(phonenumber)
        await this.buttonHubungkanWhatsapp.click()
    }

}