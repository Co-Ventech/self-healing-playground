import { Page, Locator } from '@playwright/test';

// Represents https://the-internet.herokuapp.com/disappearing_elements
export class DisappearingPage {
  readonly page: Page;
  readonly galleryLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.galleryLink = page.getByRole('link', { name: 'Gallery' });
  }

  async goto() {
    await this.page.goto('/disappearing_elements');
  }
}
