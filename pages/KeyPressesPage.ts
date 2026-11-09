import { Page, Locator } from '@playwright/test';

// Represents https://the-internet.herokuapp.com/key_presses
export class KeyPressesPage {
  readonly page: Page;
  readonly input: Locator;
  readonly result: Locator;

  constructor(page: Page) {
    this.page = page;
    this.input = page.locator('#key-input');
    this.result = page.locator('#result');
  }

  async goto() {
    await this.page.goto('/key_presses');
  }
}
