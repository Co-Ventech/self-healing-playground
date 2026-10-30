/**
 * Step Definitions — Reviews: Reject Button
 * File: 31-Reviews-Reject-Button.steps.js
 */
const { createBdd, test } = require('playwright-bdd');
const { ReviewsRejectButtonPage } = require('../pages/31-Reviews-Reject-Button.page');

const { Given, When, Then } = createBdd(test);

Given('I open reviews to inspect the reject action', async ({ page }) => {
  const pageObject = new ReviewsRejectButtonPage(page);
  await pageObject.openReviews();
});

Then('a Reject button is visible on the reviews page', async ({ page }) => {
  const pageObject = new ReviewsRejectButtonPage(page);
  await pageObject.assertRejectVisible();
});
