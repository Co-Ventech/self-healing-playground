import { expect, test } from '../src/FixtureConfig';
import { AccountType } from '../src/AccountType';
import Credentials from '../src/Credentials';
import LoginPage from '../src/pages/LoginPage';

async function logIn(loginPage: LoginPage, account: AccountType): Promise<void> {
    await loginPage.open();
    await loginPage.logInWithCredentials(Credentials.getUserCredentials(account));
}

test.describe('Shop', () => {
    test('Inventory lists six products', async ({ loginPage, inventoryPage }) => {
        await logIn(loginPage, AccountType.Standard);
        await expect(inventoryPage.items).toHaveCount(6);
    });

    test('Sorting by price low to high puts the cheapest product first', async ({ loginPage, inventoryPage }) => {
        await logIn(loginPage, AccountType.Standard);
        await inventoryPage.sortBy('lohi');
        await expect(inventoryPage.prices.first()).toHaveText('$7.99');
    });

    test('Sorting by price high to low puts the most expensive product first', async ({ loginPage, inventoryPage }) => {
        await logIn(loginPage, AccountType.Standard);
        await inventoryPage.sortBy('hilo');
        await expect(inventoryPage.prices.first()).toHaveText('$49.99');
    });

    test('Adding the backpack shows 1 on the cart badge', async ({ loginPage, inventoryPage }) => {
        await logIn(loginPage, AccountType.Standard);
        await inventoryPage.addToCart('sauce-labs-backpack');
        await expect(inventoryPage.cartBadge).toHaveText('1');
    });

    test('Cart lists the product that was added', async ({ loginPage, inventoryPage, cartPage }) => {
        await logIn(loginPage, AccountType.Standard);
        await inventoryPage.addToCart('sauce-labs-bike-light');
        await inventoryPage.openCart();
        await expect(cartPage.itemNames).toHaveText(['Sauce Labs Bike Light']);
    });

    test('Checkout accepts the customer details', async ({ page, loginPage, inventoryPage, cartPage, checkoutPage }) => {
        await logIn(loginPage, AccountType.Standard);
        await inventoryPage.addToCart('sauce-labs-onesie');
        await inventoryPage.openCart();
        await cartPage.checkout();
        await checkoutPage.fillCustomer('Ada', 'Lovelace', '10115');
        await checkoutPage.continue();
        await expect(page).toHaveURL(/checkout-step-two\.html/);
    });

    test('Checkout keeps the last name that was typed', async ({ loginPage, inventoryPage, cartPage, checkoutPage }) => {
        await logIn(loginPage, AccountType.Standard);
        await inventoryPage.addToCart('sauce-labs-onesie');
        await inventoryPage.openCart();
        await cartPage.checkout();
        await checkoutPage.fillCustomer('Ada', 'Lovelace', '10115');
        await expect(checkoutPage.lastName).toHaveValue('Lovelace');
    });

    test('Finishing checkout thanks the customer', async ({ loginPage, inventoryPage, cartPage, checkoutPage }) => {
        await logIn(loginPage, AccountType.Standard);
        await inventoryPage.addToCart('sauce-labs-backpack');
        await inventoryPage.openCart();
        await cartPage.checkout();
        await checkoutPage.fillCustomer('Ada', 'Lovelace', '10115');
        await checkoutPage.continue();
        await checkoutPage.finish();
        await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');
    });

    test('Product page shows the price of the fleece jacket', async ({ loginPage, inventoryPage, itemPage }) => {
        await logIn(loginPage, AccountType.Standard);
        await inventoryPage.openItem('Sauce Labs Fleece Jacket');
        await expect(itemPage.name).toHaveText('Sauce Labs Fleece Jacket');
        await expect(itemPage.price).toHaveText('$49.99');
    });

    test('Menu About link points to Sauce Labs', async ({ loginPage, inventoryPage }) => {
        await logIn(loginPage, AccountType.Standard);
        await inventoryPage.header.clickOnSlideMenu();
        await expect(inventoryPage.header.aboutLink).toHaveAttribute('href', /saucelabs\.com/);
    });
});
