import { Locator, Page } from "@playwright/test";

export class RegisterPage{
    readonly page: Page;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly confirmPasswordField: Locator;
    readonly buttonNext: Locator;
    readonly fullNameField: Locator;
    //readonly country: Locator;
    readonly phoneNumberField: Locator;
    readonly companyNameField: Locator;
    readonly industryField: Locator;
    readonly CompanySizeField: Locator;
    readonly buttonCreateAccount: Locator;
    readonly alertPassword :Locator;
    readonly alertPasswordNotMatch :Locator;
    readonly alertFullnameUnder2Char :Locator;
    readonly alertPhoneNumber :Locator;
    readonly alertCompanyName :Locator;
    readonly alertIndustry :Locator;
    readonly alertCompanySize :Locator;



    constructor(page: Page){
        this.page=page
        this.emailField=page.locator('#email')
        this.passwordField=page.getByRole('textbox', { name: 'Password',exact: true })
        this.confirmPasswordField=page.getByRole('textbox', { name: 'Confirm Password' })
        this.buttonNext=page.getByRole('button', { name: 'Next' })
        this.fullNameField=page.getByRole('textbox', { name: 'Full Name' })
        //this.country=page.getByRole('combobox', { name: 'Country' })
        this.phoneNumberField=page.getByRole('textbox', { name: 'Phone Number' })
        this.companyNameField=page.getByRole('textbox', { name: 'Company Name' })
        this.industryField=page.getByLabel('Industry')
        this.CompanySizeField=page.getByLabel('Company Size')
        this.buttonCreateAccount=page.getByRole('button', { name: 'Create Account' })
        this.alertPassword=page.getByText ('Password must be at least 8 characters')
        this.alertPasswordNotMatch=page.getByText('Passwords do not match')
        this.alertFullnameUnder2Char=page.getByText('Name must be at least 2 characters')
        this.alertPhoneNumber=page.getByText('Please enter a valid phone number (9-13 digits)')
        this.alertCompanyName=page.getByText('Please fill out this field.')
        this.alertIndustry=page.getByText('Please select an item in the list.')
        this.alertCompanySize=page.getByText('Please select an item in the list.')
    }

    async RegisterAs(email:string, password:string, confirmPassword:string, fullName:string, 
        //country:string, 
        phoneNumber:string, companyName:string,
        Industry:string, CompanySize:string) {
        await this.emailField.fill(email)
        await this.passwordField.fill(password)
        await this.confirmPasswordField.fill(confirmPassword)
        await this.buttonNext.click()
        await this.fullNameField.fill(fullName)
        //await this.country.selectOption(country)
        await this.phoneNumberField.fill(phoneNumber)
        await this.buttonNext.click()
        await this.companyNameField.fill(companyName)
        await this.industryField.selectOption(Industry)
        await this.CompanySizeField.selectOption(CompanySize)
        await this.buttonCreateAccount.click()
    }

    async formCreateAccount(email: string, password: string, confirmPassword: string){
        await this.emailField.fill(email)
        await this.passwordField.fill(password)
        await this.confirmPasswordField.fill(confirmPassword)
    }

    async formUserInformation(email: string, password: string, confirmPassword: string, fullName: string, phoneNumber: string){
        await this.emailField.fill(email)
        await this.passwordField.fill(password)
        await this.confirmPasswordField.fill(confirmPassword)
        await this.buttonNext.click()
        await this.fullNameField.fill(fullName)
        await this.phoneNumberField.fill(phoneNumber)
    }

    async formCompanyInformation(email:string, password:string, confirmPassword:string, fullName:string, 
        phoneNumber:string, companyName: string, industry: string, companySize: string){
        await this.emailField.fill(email)
        await this.passwordField.fill(password)
        await this.confirmPasswordField.fill(confirmPassword)
        await this.buttonNext.click()
        await this.fullNameField.fill(fullName)
        //await this.country.selectOption(country)
        await this.phoneNumberField.fill(phoneNumber)
        await this.buttonNext.click()
        await this.companyNameField.fill(companyName)
        await this.industryField.selectOption(industry)
        await this.CompanySizeField.selectOption(companySize)
    }

    async getAlertCompanyName() {
    return await this.companyNameField.evaluate(
        (element: HTMLInputElement) => element.validationMessage
    );
    }

    async getAlertIndustry() {
    return await this.industryField.evaluate(
        (element: HTMLInputElement) => element.validationMessage
    );
    }

     async getAlertCompanySize() {
    return await this.CompanySizeField.evaluate(
        (element: HTMLInputElement) => element.validationMessage
    );
    }
}