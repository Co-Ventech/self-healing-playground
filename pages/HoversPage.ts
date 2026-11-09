import { Page, Locator } from '@playwright/test';

// Represents https://the-internet.herokuapp.com/hovers
export class HoversPage {
  readonly page: Page;
  readonly figures: Locator;

  constructor(page: Page) {
    this.page = page;
    this.figures = page.locator('.user-card');
  }

  async goto() {
    await this.page.goto('/hovers');
  }

  profileLink(index: number): Locator {
    return this.figures.nth(index).getByRole('link', { name: 'View profile' });
  }
}
