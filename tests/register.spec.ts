import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/register.page';
import { HomePage } from '../pages/home.page';

test('Register with valid Credentials', async ({ page }) => {
  await page.goto('/signup');
  
  const registerPage = new RegisterPage(page)
  const homePage = new HomePage(page)
  const email = 'customerdata13@yopmail.com'
  const password = 'Testing1234'
  const confirmPassword = 'Testing1234'
  const fullName = 'Fikrial Pane A'
  //const country ='Indonesia'
  const phoneNumber = '82143546623'
  const companyName = 'Bank Jawa Barat'
  const industry = 'finance'
  const companySize = '51-200'

  await registerPage.RegisterAs(email,password,confirmPassword,fullName,
    //country,
    phoneNumber,companyName,industry,companySize)

  await expect (homePage.verifEmail).toBeVisible();
});

test('Register with empty Email', async ({ page }) => {
  await page.goto('/signup');
  
  const registerPage = new RegisterPage(page)
  const email = ''
  const password = 'Testing1234'
  const confirmPassword = 'Testing1234'
  

  await registerPage.formCreateAccount(email,password,confirmPassword)
  await expect (registerPage.buttonNext).toBeDisabled()
 
});

test('Register with empty Password', async ({ page }) => {
  await page.goto('/signup');
  
  const registerPage = new RegisterPage(page)
  const email = 'customerdata09@yopmail.com'
  const password = ''
  const confirmPassword = 'Testing1234'
  

  await registerPage.formCreateAccount(email,password,confirmPassword)
  await expect (registerPage.buttonNext).toBeDisabled()
 
});

test('Register with empty Confirm Password', async ({ page }) => {
  await page.goto('/signup');
  
  const registerPage = new RegisterPage(page)
  const email = 'customerdata09@yopmail.com'
  const password = 'Testing1234'
  const confirmPassword = ''
  
  await registerPage.formCreateAccount(email,password,confirmPassword)
  await expect (registerPage.buttonNext).toBeDisabled()
 
});

test('Register when Password contains fewer than 8 characters', async ({ page }) => {
  await page.goto('/signup');
  
  const registerPage = new RegisterPage(page)
  const email = 'customerdata09@yopmail.com'
  const password = 'test'
  const confirmPassword = 'Testing1234'
  
  await registerPage.formCreateAccount(email,password,confirmPassword)
  await expect (registerPage.alertPassword).toBeVisible()
 
});

test('Register when Password and Confirm Password not match', async ({ page }) => {
  await page.goto('/signup');
  
  const registerPage = new RegisterPage(page)
  const email = 'customerdata09@yopmail.com'
  const password = 'Testing1234'
  const confirmPassword = 'Testi'
  
  await registerPage.formCreateAccount(email,password,confirmPassword)
  await expect (registerPage.alertPasswordNotMatch).toBeVisible()
 
});

test('Register with empty Fullname',async({page})=>{
  await page.goto('/signup');
  const registerPage = new RegisterPage(page)
  const email = 'customerdata12@yopmail.com'
  const password = 'Testing1234'
  const confirmPassword = 'Testing1234'
  const fullname = ''
  const phonenumber ='82173456632'

  await registerPage.formUserInformation(email, password, confirmPassword, fullname,phonenumber)

  await expect (registerPage.buttonNext).toBeDisabled()
 })

 test('Register with Fullname under 2 character',async({page})=>{
  await page.goto('/signup');
  const registerPage = new RegisterPage(page)
  const email = 'customerdata12@yopmail.com'
  const password = 'Testing1234'
  const confirmPassword = 'Testing1234'
  const fullname = 'p'
  const phonenumber ='82173456632'

  await registerPage.formUserInformation(email, password, confirmPassword, fullname,phonenumber)

  await expect (registerPage.alertFullnameUnder2Char).toBeVisible()
 })

 test('Register with Phone Number is empty',async({page})=>{

  await page.goto('/signup');
  const registerPage = new RegisterPage(page)
  const email = 'customerdata12@yopmail.com'
  const password = 'Testing1234'
  const confirmPassword = 'Testing1234'
  const fullname = 'PA'
  const phonenumber =''

  await registerPage.formUserInformation(email, password, confirmPassword, fullname,phonenumber)

  await expect (registerPage.buttonNext).toBeDisabled()

 })

  test('Register with invalid Phone Number',async({page})=>{

  await page.goto('/signup');
  const registerPage = new RegisterPage(page)
  const email = 'customerdata12@yopmail.com'
  const password = 'Testing1234'
  const confirmPassword = 'Testing1234'
  const fullname = 'PA'
  const phonenumber ='08343'

  await registerPage.formUserInformation(email, password, confirmPassword, fullname,phonenumber)
  await registerPage.buttonNext.click()
  await expect (registerPage.alertPhoneNumber).toBeVisible()

 })

 test('Register with Company Name is empty', async ({ page }) => {
  await page.goto('/signup');
  
  const registerPage = new RegisterPage(page)
  const email = 'customerdata14@yopmail.com'
  const password = 'Testing1234'
  const confirmPassword = 'Testing1234'
  const fullName = 'Fikrial Pane A'
  //const country ='Indonesia'
  const phoneNumber = '82143546623'
  const companyName = ''
  const industry = 'finance'
  const companySize = '51-200'

  await registerPage.formCompanyInformation(email,password,confirmPassword,fullName,
    //country,
    phoneNumber,companyName,industry,companySize)
  await registerPage.buttonCreateAccount.click()
  const alertMessage = await registerPage.getAlertCompanyName();

  expect(alertMessage).toBe('Please fill out this field.');

});

test('Register with Industry is not select', async ({ page }) => {
  await page.goto('/signup');
  
  const registerPage = new RegisterPage(page)
  const email = 'customerdata14@yopmail.com'
  const password = 'Testing1234'
  const confirmPassword = 'Testing1234'
  const fullName = 'Fikrial Pane A'
  //const country ='Indonesia'
  const phoneNumber = '82143546623'
  const companyName = 'MASI'
  const industry = ''
  const companySize = '51-200'

  await registerPage.formCompanyInformation(email,password,confirmPassword,fullName,
    //country,
    phoneNumber,companyName,industry,companySize) 
  await registerPage.buttonCreateAccount.click()
  
  const alertMessage = await registerPage.getAlertIndustry()

  expect (alertMessage).toBe('Please select an item in the list.');
});

test('Register with Company Size is not select', async ({ page }) => {
  await page.goto('/signup');
  
  const registerPage = new RegisterPage(page)
  const email = 'customerdata14@yopmail.com'
  const password = 'Testing1234'
  const confirmPassword = 'Testing1234'
  const fullName = 'Fikrial Pane A'
  //const country ='Indonesia'
  const phoneNumber = '82143546623'
  const companyName = 'MASI'
  const industry = 'SaaS'
  const companySize = ''

  await registerPage.formCompanyInformation(email,password,confirmPassword,fullName,
    //country,
    phoneNumber,companyName,industry,companySize) 
  await registerPage.buttonCreateAccount.click()
  
  const alertMessage = await registerPage.getAlertCompanySize()

  expect (alertMessage).toBe('Please select an item in the list.');
});