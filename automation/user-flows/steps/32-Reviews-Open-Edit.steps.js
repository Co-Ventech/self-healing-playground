/**
 * Step Definitions — Reviews: Open Edit
 * File: 32-Reviews-Open-Edit.steps.js
 */
const { createBdd, test } = require('playwright-bdd');
const { ReviewsOpenEditPage } = require('../pages/32-Reviews-Open-Edit.page');

const { Given, When, Then } = createBdd(test);

Given('I open reviews to edit a record', async ({ page }) => {
  const pageObject = new ReviewsOpenEditPage(page);
  await pageObject.openReviews();
});

When('I open the first review row', async ({ page }) => {
  const pageObject = new ReviewsOpenEditPage(page);
  await pageObject.openFirstReview();
});

Then('the review editor content is displayed', async ({ page }) => {
  const pageObject = new ReviewsOpenEditPage(page);
  await pageObject.assertReviewEditor();
});
