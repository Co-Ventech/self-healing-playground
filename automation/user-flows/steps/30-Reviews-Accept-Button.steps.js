/**
 * Step Definitions — Reviews: Accept Button
 * File: 30-Reviews-Accept-Button.steps.js
 */
const { createBdd, test } = require('playwright-bdd');
const { ReviewsAcceptButtonPage } = require('../pages/30-Reviews-Accept-Button.page');

const { Given, When, Then } = createBdd(test);

Given('I open reviews to inspect the accept action', async ({ page }) => {
  const pageObject = new ReviewsAcceptButtonPage(page);
  await pageObject.openReviews();
});

Then('an Accept button is visible on the reviews page', async ({ page }) => {
  const pageObject = new ReviewsAcceptButtonPage(page);
  await pageObject.assertAcceptVisible();
});
