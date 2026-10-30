/**
 * Step Definitions — Auth: Logout
 * File: 03-Auth-Logout.steps.js
 */
const { createBdd, test } = require('playwright-bdd');
const { AuthLogoutPage } = require('../pages/03-Auth-Logout.page');

const { Given, When, Then } = createBdd(test);

Given('I am signed into Posters Galore before logout', async ({ page }) => {
  const pageObject = new AuthLogoutPage(page);
  await pageObject.prepareLoggedInSession();
});

When('I open the user menu and choose logout', async ({ page }) => {
  const pageObject = new AuthLogoutPage(page);
  await pageObject.openUserMenuAndLogout();
});

Then('I am returned to the Posters Galore login page', async ({ page }) => {
  const pageObject = new AuthLogoutPage(page);
  await pageObject.assertBackOnLogin();
});
