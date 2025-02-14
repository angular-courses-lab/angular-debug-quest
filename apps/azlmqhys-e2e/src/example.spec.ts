import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  const signInButton = page.locator('button:has-text("Sign In")');
  await expect(signInButton).toBeVisible();

  await page.screenshot({ path: 'screenshots/bug-screenshot.png' });
});
