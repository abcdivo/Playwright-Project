import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { HomePage } from '../pages/home.page';
import userData from '../data/user.json';
import { AccountsPage } from '../pages/accounts.page';
import { ContactPage } from '../pages/contact.page';


test('add ', async ({ page }) => {
  await page.goto('https://chat.emra.pro/login');
  const loginPage = new LoginPage(page)
  const homePage = new HomePage(page)
  const accountsPage = new AccountsPage(page)
  const contactPage = new ContactPage(page)
  const email = userData.login.login_valid_credentials.email
  const password =userData.login.login_valid_credentials.password
  const country = userData.contact.country
  const phonenumber = userData.contact.phoneNumber

  await loginPage.loginAs(email,password)
  await homePage.gotoAccount()
  await accountsPage.buttonAddAccount.click()
  await contactPage.addNewAccount(country,phonenumber)
  await expect(accountsPage.allertSuccess).toBeVisible()

});