/**
 * Step Definitions — Navigation: Reviews Menu
 * File: 36-Navigation-Reviews-Menu.steps.js
 */
const { createBdd, test } = require('playwright-bdd');
const { NavReviewsMenuPage } = require('../pages/36-Navigation-Reviews-Menu.page');

const { Given, When, Then } = createBdd(test);

Given('I am on the dashboard before using reviews menu', async ({ page }) => {
  const pageObject = new NavReviewsMenuPage(page);
  await pageObject.openDashboard();
});

When('I click the Reviews sidebar link', async ({ page }) => {
  const pageObject = new NavReviewsMenuPage(page);
  await pageObject.clickReviewsMenu();
});

Then('the reviews module opens from the sidebar', async ({ page }) => {
  const pageObject = new NavReviewsMenuPage(page);
  await pageObject.assertReviewsRoute();
});
