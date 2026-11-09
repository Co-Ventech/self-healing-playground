import { Page, Locator } from '@playwright/test';

// Represents https://the-internet.herokuapp.com/checkboxes
export class CheckboxesPage {
  readonly page: Page;
  readonly checkbox1: Locator;
  readonly checkbox2: Locator;

  constructor(page: Page) {
    this.page = page;
    const checkboxes = page.getByRole('checkbox');
    this.checkbox1 = checkboxes.nth(0);
    this.checkbox2 = checkboxes.nth(1);
  }

  async goto() {
    await this.page.goto('/checkboxes');
  }

  async checkFirst() {
    await this.checkbox1.check();
  }

  async uncheckSecond() {
    await this.checkbox2.uncheck();
  }
}
