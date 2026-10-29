import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/register.page';
import { HomePage } from '../pages/home.page';
import userData from '../data/user.json';

// test('Register with valid Credentials', async ({ page }) => {
//   await page.goto('/signup'); 
  
//   const registerPage = new RegisterPage(page)
//   const homePage = new HomePage(page) 
//   const email = userData.register.register_valid_credentials.email
//   const password = userData.register.register_valid_credentials.password 
//   const confirmPassword = userData.register.register_valid_credentials.confirmPassword
//   const fullName = userData.register.register_valid_credentials.fullName
//   //const country ='Indonesia'
//   const phoneNumber = userData.register.register_valid_credentials.phoneNumber
//   const companyName = userData.register.register_valid_credentials.companyName
//   const industry = userData.register.register_valid_credentials.industry
//   const companySize = userData.register.register_valid_credentials.companySize

//   await registerPage.RegisterAs(email,password,confirmPassword,fullName,
//     //country,
//     phoneNumber,companyName,industry,companySize)

//   await expect (homePage.verifEmail).toBeVisible();
// });

test('Register with empty Email', async ({ page }) => {
  await page.goto('/signup');
  
  const registerPage = new RegisterPage(page)
  const email = ''
  const password = userData.register.register_valid_credentials.password
  const confirmPassword = userData.register.register_valid_credentials.confirmPassword
  

  await registerPage.formCreateAccount(email,password,confirmPassword)
  await expect (registerPage.buttonNext).toBeDisabled()
 
});

test('Register with empty Password', async ({ page }) => {
  await page.goto('/signup');
  
  const registerPage = new RegisterPage(page)
  const email = userData.register.register_valid_credentials.email
  const password = ''
  const confirmPassword = userData.register.register_valid_credentials.confirmPassword
  

  await registerPage.formCreateAccount(email,password,confirmPassword)
  await expect (registerPage.buttonNext).toBeDisabled()
 
});

test('Register with empty Confirm Password', async ({ page }) => {
  await page.goto('/signup');
  
  const registerPage = new RegisterPage(page)
  const email = userData.register.register_valid_credentials.email
  const password = userData.register.register_valid_credentials.password
  const confirmPassword = ''
  
  await registerPage.formCreateAccount(email,password,confirmPassword)
  await expect (registerPage.buttonNext).toBeDisabled()
 
});

test('Register when Password contains fewer than 8 characters', async ({ page }) => {
  await page.goto('/signup');
  
  const registerPage = new RegisterPage(page)
  const email = userData.register.register_valid_credentials.email
  const password = userData.register.register_invalid_credentials.password
  const confirmPassword = userData.register.register_valid_credentials.confirmPassword
  
  await registerPage.formCreateAccount(email,password,confirmPassword)
  await expect (registerPage.alertPassword).toBeVisible()
 
});

test('Register when Password and Confirm Password not match', async ({ page }) => {
  await page.goto('/signup');
  
  const registerPage = new RegisterPage(page)
  const email = userData.register.register_valid_credentials.email
  const password = userData.register.register_valid_credentials.password
  const confirmPassword = userData.register.register_invalid_credentials.confirmPassword
  
  await registerPage.formCreateAccount(email,password,confirmPassword)
  await expect (registerPage.alertPasswordNotMatch).toBeVisible()
 
});

test('Register with empty Fullname',async({page})=>{
  await page.goto('/signup');
  const registerPage = new RegisterPage(page)
  const email = userData.register.register_valid_credentials.email
  const password = userData.register.register_valid_credentials.password
  const confirmPassword = userData.register.register_valid_credentials.confirmPassword
  const fullname = ''
  const phonenumber =userData.register.register_valid_credentials.phoneNumber

  await registerPage.formUserInformation(email, password, confirmPassword, fullname,phonenumber)

  await expect (registerPage.buttonNext).toBeDisabled()
 })

 test('Register with Fullname under 2 character',async({page})=>{
  await page.goto('/signup');
  const registerPage = new RegisterPage(page)
  const email = userData.register.register_valid_credentials.email
  const password = userData.register.register_valid_credentials.password
  const confirmPassword = userData.register.register_valid_credentials.confirmPassword
  const fullname = userData.register.register_invalid_credentials.fullName
  const phonenumber =userData.register.register_valid_credentials.phoneNumber

  await registerPage.formUserInformation(email, password, confirmPassword, fullname,phonenumber)

  await expect (registerPage.alertFullnameUnder2Char).toBeVisible()
 })

 test('Register with Phone Number is empty',async({page})=>{

  await page.goto('/signup');
  const registerPage = new RegisterPage(page)
  const email = userData.register.register_valid_credentials.email
  const password = userData.register.register_valid_credentials.password
  const confirmPassword = userData.register.register_valid_credentials.confirmPassword
  const fullname = userData.register.register_valid_credentials.fullName
  const phonenumber =''

  await registerPage.formUserInformation(email, password, confirmPassword, fullname,phonenumber)

  await expect (registerPage.buttonNext).toBeDisabled()

 })

  test('Register with invalid Phone Number',async({page})=>{

  await page.goto('/signup');
  const registerPage = new RegisterPage(page)
  const email = userData.register.register_valid_credentials.email
  const password = userData.register.register_valid_credentials.password
  const confirmPassword = userData.register.register_valid_credentials.confirmPassword
  const fullname = userData.register.register_valid_credentials.fullName
  const phonenumber =userData.register.register_invalid_credentials.phoneNumber

  await registerPage.formUserInformation(email, password, confirmPassword, fullname,phonenumber)
  await registerPage.buttonNext.click()
  await expect (registerPage.alertPhoneNumber).toBeVisible()

 })

 test('Register with Company Name is empty', async ({ page }) => {
  await page.goto('/signup');
  
  const registerPage = new RegisterPage(page)
  const email = userData.register.register_valid_credentials.email
  const password = userData.register.register_valid_credentials.password
  const confirmPassword = userData.register.register_valid_credentials.confirmPassword
  const fullName = userData.register.register_valid_credentials.fullName
  //const country ='Indonesia'
  const phoneNumber = userData.register.register_valid_credentials.phoneNumber
  const companyName = ''
  const industry = userData.register.register_valid_credentials.industry
  const companySize = userData.register.register_valid_credentials.companySize

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
const email = userData.register.register_valid_credentials.email
  const password = userData.register.register_valid_credentials.password
  const confirmPassword = userData.register.register_valid_credentials.confirmPassword
  const fullName = userData.register.register_valid_credentials.fullName
  //const country ='Indonesia'
  const phoneNumber = userData.register.register_valid_credentials.phoneNumber
  const companyName = userData.register.register_valid_credentials.companyName
  const industry = ''
  const companySize = userData.register.register_valid_credentials.companySize

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
   const email = userData.register.register_valid_credentials.email
  const password = userData.register.register_valid_credentials.password
  const confirmPassword = userData.register.register_valid_credentials.confirmPassword
  const fullName = userData.register.register_valid_credentials.fullName
  //const country ='Indonesia'
  const phoneNumber = userData.register.register_valid_credentials.phoneNumber
  const companyName = userData.register.register_valid_credentials.companyName
  const industry = userData.register.register_valid_credentials.industry
  const companySize = ""

  await registerPage.formCompanyInformation(email,password,confirmPassword,fullName,
    //country,
    phoneNumber,companyName,industry,companySize) 
  await registerPage.buttonCreateAccount.click()
  
  const alertMessage = await registerPage.getAlertCompanySize()

  expect (alertMessage).toBe('Please select an item in the list.');
});