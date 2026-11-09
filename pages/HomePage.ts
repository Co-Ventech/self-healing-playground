import { Page, Locator } from '@playwright/test';

// Represents https://the-internet.herokuapp.com/ and its links to each example page
export class HomePage {
  readonly page: Page;
  readonly abTestingLink: Locator;
  readonly checkboxesLink: Locator;
  readonly dropdownLink: Locator;
  readonly exitIntentLink: Locator;
  readonly fileDownloadLink: Locator;

  constructor(page: Page) {
    this.page = page;
    // getByRole targets the accessible link role + accessible name, avoiding brittle CSS/XPath
    this.abTestingLink = page.getByRole('link', { name: 'A/B Testing' });
    this.checkboxesLink = page.getByRole('link', { name: 'Checkboxes' });
    this.dropdownLink = page.getByRole('link', { name: 'Dropdown', exact: true });
    this.exitIntentLink = page.getByRole('link', { name: 'Exit Intent' });
    // exact: true avoids matching "Secure File Download"
    this.fileDownloadLink = page.getByRole('link', { name: 'File Download', exact: true });
  }

  async goto() {
    await this.page.goto('/');
  }
}
