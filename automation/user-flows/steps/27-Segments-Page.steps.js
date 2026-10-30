/**
 * Step Definitions — Segments: Page
 * File: 27-Segments-Page.steps.js
 */
const { createBdd, test } = require('playwright-bdd');
const { SegmentsPageLoadsPage } = require('../pages/27-Segments-Page.page');

const { Given, When, Then } = createBdd(test);

Given('I open the segments module page', async ({ page }) => {
  const pageObject = new SegmentsPageLoadsPage(page);
  await pageObject.openSegments();
});

Then('known customer segments are listed', async ({ page }) => {
  const pageObject = new SegmentsPageLoadsPage(page);
  await pageObject.assertSegmentsListed();
});
