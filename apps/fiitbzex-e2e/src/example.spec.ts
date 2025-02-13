import { test, expect } from '@playwright/test';

test('form is invalid', async ({ page }) => {
  await page.goto('/');

  // fill in the form
  await page.locator('#firstName').fill('John');
  await page.locator('#lastName').fill('Doe');
  await page.locator('#email').fill('john.doe@example.com');
  await page.locator('#password').fill('password');
  await page.locator('#acceptTerms').check();

  // uncheck the accept terms
  await page.locator('#acceptTerms').uncheck();

  // the error message should be visible
  await expect(page.locator('#form-status-invalid')).toBeVisible();
  await expect(page).toHaveScreenshot();
});
