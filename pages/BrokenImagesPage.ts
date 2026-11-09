import { Page, Locator } from '@playwright/test';

// Represents https://the-internet.herokuapp.com/broken_images
export class BrokenImagesPage {
  readonly page: Page;
  readonly images: Locator;

  constructor(page: Page) {
    this.page = page;
    this.images = page.locator('.example img');
  }

  async goto() {
    await this.page.goto('/broken_images');
  }

  // sources of the images the browser could not load (naturalWidth stays 0)
  async brokenSources(): Promise<string[]> {
    return this.images.evaluateAll((imgs) =>
      (imgs as HTMLImageElement[]).filter((img) => img.complete && img.naturalWidth === 0).map((img) => img.getAttribute('src') || ''));
  }
}
