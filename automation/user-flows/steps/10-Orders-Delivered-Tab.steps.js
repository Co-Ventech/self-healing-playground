/**
 * Step Definitions — Orders: Delivered Tab
 * File: 10-Orders-Delivered-Tab.steps.js
 */
const { createBdd, test } = require('playwright-bdd');
const { OrdersDeliveredTabPage } = require('../pages/10-Orders-Delivered-Tab.page');

const { Given, When, Then } = createBdd(test);

Given('I open orders before switching to delivered', async ({ page }) => {
  const pageObject = new OrdersDeliveredTabPage(page);
  await pageObject.openOrders();
});

When('I select the Delivered orders tab', async ({ page }) => {
  const pageObject = new OrdersDeliveredTabPage(page);
  await pageObject.selectDeliveredTab();
});

Then('the Delivered orders tab is selected', async ({ page }) => {
  const pageObject = new OrdersDeliveredTabPage(page);
  await pageObject.assertDeliveredSelected();
});
