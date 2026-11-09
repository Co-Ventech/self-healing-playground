import { Page } from '@playwright/test';
import BasePage from '../base/BasePage';
import Header from '../components/Header';
import { step } from '../setup/step';

export default class InventoryPage extends BasePage {
    public header: Header = new Header(this.page);

    public readonly items = this.page.locator('.inventory_item');
    public readonly prices = this.page.locator('[data-test="inventory-item-price"]');
    public readonly cartBadge = this.page.locator('[data-test="shopping-cart-badge"]');
    private readonly sortSelect = this.page.locator('[data-test="product-sort-container"]');
    private readonly cartLink = this.page.locator('[data-test="shopping-cart-link"]');
    private readonly itemNames = this.page.locator('[data-test="inventory-item-name"]');

    constructor(page: Page) {
        super(page, 'Inventory Page', 'inventory.html');
    }

    @step()
    public async sortBy(option: string): Promise<void> {
        await this.sortSelect.selectOption(option);
    }

    @step()
    public async addToCart(slug: string): Promise<void> {
        await this.page.locator(`[data-test="add-to-cart-${slug}"]`).click();
    }

    @step()
    public async openCart(): Promise<void> {
        await this.cartLink.click();
    }

    @step()
    public async openItem(name: string): Promise<void> {
        await this.itemNames.filter({ hasText: name }).click();
    }
}
