import { Page } from '@playwright/test';
import BasePage from '../base/BasePage';
import { step } from '../setup/step';

export default class CartPage extends BasePage {
    public readonly itemNames = this.page.locator('[data-test="inventory-item-name"]');
    private readonly checkoutButton = this.page.locator('[data-test="checkout"]');

    constructor(page: Page) {
        super(page, 'Cart Page', 'cart.html');
    }

    @step()
    public async checkout(): Promise<void> {
        await this.checkoutButton.click();
    }
}
