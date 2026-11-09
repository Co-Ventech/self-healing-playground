import { test as base } from '@playwright/test';
import LoginPage from './pages/LoginPage';
import InventoryPage from './pages/InventoryPage';
import ApiService from './ApiService';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ItemPage from './pages/ItemPage';

type MyFixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  apiService: ApiService;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  itemPage: ItemPage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await page.routeFromHAR('cache/cache.har', { notFound: 'fallback', update: false });
    await use(loginPage);
  },
  inventoryPage: async ({ page }, use) => {
    const inventoryPage = new InventoryPage(page);
    await use(inventoryPage);
  },
  apiService: async ({ page }, use) => {
    const apiService = new ApiService(page);
    await use(apiService);
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  itemPage: async ({ page }, use) => {
    await use(new ItemPage(page));
  },
});
export { expect } from '@playwright/test';
