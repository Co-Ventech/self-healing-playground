import { Page, Locator } from '@playwright/test';

// Represents https://the-internet.herokuapp.com/abtest
export class ABTestingPage {
  readonly page: Page;
  readonly heading: Locator;

  constructor(page: Page) {
    this.page = page;
    // the server randomly serves "A/B Test Control" or "A/B Test Variation 1"
    this.heading = page.getByRole('heading', { name: /A\/B Test/ });
  }

  async goto() {
    await this.page.goto('/abtest');
  }
}
