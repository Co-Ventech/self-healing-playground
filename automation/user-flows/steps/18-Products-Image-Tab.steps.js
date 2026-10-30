/**
 * Step Definitions — Products: Image Tab
 * File: 18-Products-Image-Tab.steps.js
 */
const { createBdd, test } = require('playwright-bdd');
const { ProductsImageTabPage } = require('../pages/18-Products-Image-Tab.page');

const { Given, When, Then } = createBdd(test);

Given('I open a poster edit form for the image tab', async ({ page }) => {
  const pageObject = new ProductsImageTabPage(page);
  await pageObject.openFirstPosterEdit();
});

When('I select the Image tab on the poster form', async ({ page }) => {
  const pageObject = new ProductsImageTabPage(page);
  await pageObject.openImageTab();
});

Then('the poster image field is visible', async ({ page }) => {
  const pageObject = new ProductsImageTabPage(page);
  await pageObject.assertImageFields();
});
