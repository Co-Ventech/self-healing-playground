/**
 * Step Definitions — Segments: Link Customers
 * File: 28-Segments-Link-Customers.steps.js
 */
const { createBdd, test } = require('playwright-bdd');
const { SegmentsLinkCustomersPage } = require('../pages/28-Segments-Link-Customers.page');

const { Given, When, Then } = createBdd(test);

Given('I open segments before following a customer link', async ({ page }) => {
  const pageObject = new SegmentsLinkCustomersPage(page);
  await pageObject.openSegments();
});

When('I follow a segment link to customers', async ({ page }) => {
  const pageObject = new SegmentsLinkCustomersPage(page);
  await pageObject.clickSegmentCustomersLink();
});

Then('I land on the customers module from segments', async ({ page }) => {
  const pageObject = new SegmentsLinkCustomersPage(page);
  await pageObject.assertOnCustomers();
});
