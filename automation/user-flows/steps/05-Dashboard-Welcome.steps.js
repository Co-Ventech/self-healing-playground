/**
 * Step Definitions — Dashboard: Welcome
 * File: 05-Dashboard-Welcome.steps.js
 */
const { createBdd, test } = require('playwright-bdd');
const { DashboardWelcomePage } = require('../pages/05-Dashboard-Welcome.page');

const { Given, When, Then } = createBdd(test);

Given('I open the Posters Galore dashboard for welcome check', async ({ page }) => {
  const pageObject = new DashboardWelcomePage(page);
  await pageObject.openDashboard();
});

Then('the dashboard welcome panel is visible', async ({ page }) => {
  const pageObject = new DashboardWelcomePage(page);
  await pageObject.assertWelcome();
});
