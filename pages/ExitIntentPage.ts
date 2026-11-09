import { Page, Locator } from '@playwright/test';

// Represents https://the-internet.herokuapp.com/exit_intent
export class ExitIntentPage {
  readonly page: Page;
  readonly modal: Locator;
  readonly modalHeading: Locator;
  readonly closeLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.modal = page.locator('#ouibounce-modal');
    this.modalHeading = page.getByRole('heading', { name: 'This is a modal window' });
    this.closeLink = page.getByText('Close');
  }

  async goto() {
    await this.page.goto('/exit_intent');
  }

  async triggerModal() {
    // the page's exit-intent script attaches its mouse listener a moment after load,
    // so waitForFunction polls: dispatch a mouseleave event and re-check the modal each tick
    await this.page.waitForFunction(() => {
      document.documentElement.dispatchEvent(new MouseEvent('mouseleave', { clientY: 0, bubbles: true }));
      return document.getElementById('ouibounce-modal')?.style.display === 'block';
    });
  }

  async closeModal() {
    await this.closeLink.click();
  }
}
