/**
 * Step Definitions — Dashboard: Monthly Revenue
 * File: 06-Dashboard-Monthly-Revenue.steps.js
 */
const { createBdd, test } = require('playwright-bdd');
const { DashboardMonthlyRevenuePage } = require('../pages/06-Dashboard-Monthly-Revenue.page');

const { Given, When, Then } = createBdd(test);

Given('I open the dashboard to inspect monthly revenue', async ({ page }) => {
  const pageObject = new DashboardMonthlyRevenuePage(page);
  await pageObject.openDashboard();
});

Then('the Monthly Revenue card is visible on the dashboard', async ({ page }) => {
  const pageObject = new DashboardMonthlyRevenuePage(page);
  await pageObject.assertMonthlyRevenue();
});
