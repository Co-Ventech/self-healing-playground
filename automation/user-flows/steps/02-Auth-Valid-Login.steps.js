/**
 * Step Definitions — Auth: Valid Login
 * File: 02-Auth-Valid-Login.steps.js
 */
const { createBdd, test } = require('playwright-bdd');
const { AuthValidLoginPage } = require('../pages/02-Auth-Valid-Login.page');

const { Given, When, Then } = createBdd(test);

When('I sign in to Posters Galore using demo credentials', async ({ page }) => {
  const pageObject = new AuthValidLoginPage(page);
  await pageObject.signInWithDemo();
});

Then('the Posters Galore dashboard welcome message is displayed', async ({ page }) => {
  const pageObject = new AuthValidLoginPage(page);
  await pageObject.assertDashboardWelcome();
});
