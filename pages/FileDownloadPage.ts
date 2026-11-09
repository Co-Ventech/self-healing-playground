import { Page, Locator, Download } from '@playwright/test';

// Represents https://the-internet.herokuapp.com/download
export class FileDownloadPage {
  readonly page: Page;
  readonly testTxtLink: Locator;

  constructor(page: Page) {
    this.page = page;
    // exact: true avoids matching "upload_test.txt"
    this.testTxtLink = page.getByRole('link', { name: 'test.txt', exact: true });
  }

  async goto() {
    await this.page.goto('/download');
  }

  async downloadTestFile(): Promise<Download> {
    // Playwright's download event fires when the click starts a file download;
    // waitForEvent must be started before the click so it can catch the event
    const [download] = await Promise.all([
      this.page.waitForEvent('download'),
      this.testTxtLink.click(),
    ]);
    return download;
  }
}
