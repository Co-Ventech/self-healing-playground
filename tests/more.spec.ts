import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AddRemovePage } from '../pages/AddRemovePage';
import { DynamicControlsPage } from '../pages/DynamicControlsPage';
import { HoversPage } from '../pages/HoversPage';
import { KeyPressesPage } from '../pages/KeyPressesPage';
import { BrokenImagesPage } from '../pages/BrokenImagesPage';
import { DisappearingPage } from '../pages/DisappearingPage';

test('Login - valid credentials open the secure area', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('tomsmith', 'SuperSecretPassword!');
  await expect(page).toHaveURL('/secure');
  await expect(login.flash).toContainText('You logged into a secure area!');
});

test('Add/Remove Elements - adding shows a Delete button', async ({ page }) => {
  const addRemove = new AddRemovePage(page);
  await addRemove.goto();
  await addRemove.addButton.click();
  await expect(addRemove.deleteButtons).toHaveCount(1);
});

test('Dynamic Controls - enabling makes the input editable', async ({ page }) => {
  const controls = new DynamicControlsPage(page);
  await controls.goto();
  await controls.enableButton.click();
  await expect(controls.message).toHaveText("It's enabled!");
  await expect(controls.textInput).toBeEditable();
});

test('Hovers - hovering a user shows the profile link', async ({ page }) => {
  const hovers = new HoversPage(page);
  await hovers.goto();
  await hovers.figures.nth(0).hover();
  await expect(hovers.profileLink(0)).toBeVisible();
});

test('Key Presses - pressing a key shows it', async ({ page }) => {
  const keys = new KeyPressesPage(page);
  await keys.goto();
  await keys.input.click();
  await keys.input.press('A');
  await expect(keys.result).toHaveText('You entered: A');
});

test('Broken Images - every image loads', async ({ page }) => {
  const images = new BrokenImagesPage(page);
  await images.goto();
  await expect(images.images).toHaveCount(3);
  expect(await images.brokenSources()).toEqual([]);
});

test('Disappearing Elements - the Gallery link is shown', async ({ page }) => {
  const menu = new DisappearingPage(page);
  await menu.goto();
  await expect(menu.galleryLink).toBeVisible();
});
