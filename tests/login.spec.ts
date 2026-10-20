import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { HomePage } from '../pages/home.page';
import userData from '../data/user.json';


test('login with valid credentials', async ({ page }) => {

  await page.goto('/login');
  const loginPage = new LoginPage(page)
  const homePage = new HomePage(page)
  const email = userData.login_valid_user.email
  const password =userData.login_valid_user.password

  await loginPage.loginAs(email,password)
  await expect(homePage.welcometext).toBeVisible()
});

test('login with valid email and invalid password', async ({ page }) => {
  
  await page.goto('/login');
  
  const loginPage = new LoginPage(page)
  const email = userData.login_valid_email_invalid_password_user.email
  const password =userData.login_valid_email_invalid_password_user.password

  await loginPage.loginAs(email,password)
  await expect(loginPage.flashMessage).toBeVisible()
});

test('login with invalid email and valid password', async ({ page }) => {

  await page.goto('/login');

  const loginPage = new LoginPage(page)
  const email = userData.login_invalid_email_valid_password_user.email
  const password = userData.login_invalid_email_valid_password_user.password

  await loginPage.loginAs(email,password)
  await expect(loginPage.flashMessage).toBeVisible()
});

test('login with empty email and valid password', async({page}) => {

await page.goto('/login')

const loginPage = new LoginPage(page)
const email = userData.login_empty_email_valid_password_user.email
const password =userData.login_empty_email_valid_password_user.password

await loginPage.loginWithoutButton(email, password)
await expect(loginPage.loginButton).toBeDisabled()

})

test('login with valid email and empty password', async({page}) => {

await page.goto('/login')

const loginPage = new LoginPage(page)
const email = userData.login_valid_email_empty_password_user.email
const password = userData.login_valid_email_empty_password_user.password

await loginPage.loginWithoutButton(email, password)
await expect(loginPage.loginButton).toBeDisabled()

})
