/**
 * Step Definitions — Orders: Table Rows
 * File: 12-Orders-Table-Rows.steps.js
 */
const { createBdd, test } = require('playwright-bdd');
const { OrdersTableRowsPage } = require('../pages/12-Orders-Table-Rows.page');

const { Given, When, Then } = createBdd(test);

Given('I open orders to verify the datagrid rows', async ({ page }) => {
  const pageObject = new OrdersTableRowsPage(page);
  await pageObject.openOrders();
});

Then('at least one order row is listed in the orders table', async ({ page }) => {
  const pageObject = new OrdersTableRowsPage(page);
  await pageObject.assertRowsPresent();
});
