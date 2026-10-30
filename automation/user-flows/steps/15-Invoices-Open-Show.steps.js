/**
 * Step Definitions — Invoices: Open Show
 * File: 15-Invoices-Open-Show.steps.js
 */
const { createBdd, test } = require('playwright-bdd');
const { InvoicesOpenShowPage } = require('../pages/15-Invoices-Open-Show.page');

const { Given, When, Then } = createBdd(test);

Given('I open invoices to view a record', async ({ page }) => {
  const pageObject = new InvoicesOpenShowPage(page);
  await pageObject.openInvoices();
});

When('I open the first invoice from the list', async ({ page }) => {
  const pageObject = new InvoicesOpenShowPage(page);
  await pageObject.openFirstInvoice();
});

Then('invoice detail content is displayed', async ({ page }) => {
  const pageObject = new InvoicesOpenShowPage(page);
  await pageObject.assertInvoiceDetails();
});
