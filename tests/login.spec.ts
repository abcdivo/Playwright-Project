import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { HomePage } from '../pages/home.page';


test('login with valid credentials', async ({ page }) => {

  await page.goto('https://www.emra.chat/login');
  const loginPage = new LoginPage(page)
  const homePage = new HomePage(page)
  const email = 'testingemrachat@yopmail.com'
  const password ='tester!23'

  await loginPage.loginAs(email,password)
  await expect(homePage.welcometext).toBeVisible()
});

test('login with valid email and invalid password', async ({ page }) => {
  
  await page.goto('https://www.emra.chat/login');
  
  const loginPage = new LoginPage(page)
  const email = 'testingemrachat@yopmail.com'
  const password ='tester23'

  await loginPage.loginAs(email,password)
  await expect(loginPage.flashMessage).toBeVisible()
});

test('login with invalid email and valid password', async ({ page }) => {

  await page.goto('https://www.emra.chat/login');

  const loginPage = new LoginPage(page)
  const email = 'blablabla@yopmail.com'
  const password = 'tester!23'

  await loginPage.loginAs(email,password)
  await expect(loginPage.flashMessage).toBeVisible()
});

test('login with empty email and valid password', async({page}) => {

await page.goto('https://www.emra.chat/login')

const loginPage = new LoginPage(page)
const email =''
const password ='tester!23'

await loginPage.loginWithoutButton(email, password)
await expect(loginPage.loginButton).toBeDisabled()

})

test('login with valid email and empty password', async({page}) => {

await page.goto('https://www.emra.chat/login')

const loginPage = new LoginPage(page)
const email ='testingemrachat@yopmail.com'
const password =''

await loginPage.loginWithoutButton(email, password)
await expect(loginPage.loginButton).toBeDisabled()

})
