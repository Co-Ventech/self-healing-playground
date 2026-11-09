import { Page } from '@playwright/test';
import BasePage from '../base/BasePage';

export default class ItemPage extends BasePage {
    public readonly name = this.page.locator('[data-test="inventory-item-name"]');
    public readonly price = this.page.locator('[data-test="item-price"]');

    constructor(page: Page) {
        super(page, 'Item Page', 'inventory-item.html');
    }
}
