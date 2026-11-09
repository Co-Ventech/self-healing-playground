import { Page, Locator } from '@playwright/test';

// Represents https://the-internet.herokuapp.com/add_remove_elements/
export class AddRemovePage {
  readonly page: Page;
  readonly addButton: Locator;
  readonly deleteButtons: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addButton = page.getByRole('button', { name: 'Add item' });
    this.deleteButtons = page.getByRole('button', { name: 'Delete' });
  }

  async goto() {
    await this.page.goto('/add_remove_elements/');
  }
}
