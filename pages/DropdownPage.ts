import { Page, Locator } from '@playwright/test';

// Represents https://the-internet.herokuapp.com/dropdown
export class DropdownPage {
  readonly page: Page;
  readonly dropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dropdown = page.locator('#dropdown-list');
  }

  async goto() {
    await this.page.goto('/dropdown');
  }

  async selectOption2() {
    await this.dropdown.selectOption({ label: 'Option 2' });
  }
}
