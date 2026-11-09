import { Page, Locator } from '@playwright/test';

// Represents https://the-internet.herokuapp.com/dynamic_controls
export class DynamicControlsPage {
  readonly page: Page;
  readonly enableButton: Locator;
  readonly textInput: Locator;
  readonly message: Locator;

  constructor(page: Page) {
    this.page = page;
    this.enableButton = page.locator('#enable-button');
    this.textInput = page.locator('#input-example input');
    this.message = page.locator('#message');
  }

  async goto() {
    await this.page.goto('/dynamic_controls');
  }
}
