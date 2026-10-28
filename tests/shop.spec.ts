import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('shop page has its title', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Little Shop' })).toBeVisible();
});

test('product list shows the blue mug', async ({ page }) => {
  await expect(page.locator('#products')).toContainText('Blue mug');
});

test('cart starts empty', async ({ page }) => {
  await expect(page.locator('#cart-count')).toHaveText('0');
});

test('user can sign in', async ({ page }) => {
  await page.fill('#email', 'player@example.com');
  await page.fill('#password', 'secret');
  await page.click('#login-btn');
  await expect(page.locator('#msg')).toBeVisible();
});

test('sign in shows a success message', async ({ page }) => {
  await page.fill('#password', 'secret');
  await page.locator('#email').fill('player@example.com');
  await page.locator('#login-btn').click();
  await expect(page.locator('#msg')).toHaveText('Login successful');
});

test('wrong password shows an error', async ({ page }) => {
  await page.fill('#email', 'player@example.com');
  await page.fill('#password', 'not-the-password');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.locator('#msg')).toHaveText('Invalid email or password');
});

test('user can add a product to the cart', async ({ page }) => {
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await expect(page.locator('#cart-count')).toHaveText('1');
});

test('coupon SAVE20 lowers the total', async ({ page }) => {
  await page.fill('#coupon', 'SAVE20');
  await page.click('#apply-coupon');
  await expect(page.locator('#total')).toHaveText('$8.00');
});

test('user can subscribe to the newsletter', async ({ page }) => {
  await page.locator('.btn-subscribe').click();
  await expect(page.locator('#sub-status')).toHaveText('Subscribed');
});

test('user can check out', async ({ page }) => {
  await page.locator('.cart-actions > button').click();
  await expect(page.locator('#order-status')).toHaveText('Order placed');
});

test('contact link opens the contact section', async ({ page }) => {
  await page.getByText('Contact us').click();
  await expect(page).toHaveURL(/#contact/);
});

test('user can export a report', async ({ page }) => {
  await page.locator('#export-btn').click();
  await expect(page.locator('#export-status')).toHaveText('Exported');
});
