import  { test, expect } from "@playwright/test";
import { ForgotpasswordPage } from "../pages/forgot_password.page";


test('Forgot password with valid credentials',async({page})=>{
    await page.goto('/forgot-password')
    const forgotPasswordPage = new ForgotpasswordPage(page)
    const email = 'customerdata14@yopmail.com'

    await forgotPasswordPage.ForgotPassword(email)
    await expect (page.getByRole('listitem')).toBeVisible()
})