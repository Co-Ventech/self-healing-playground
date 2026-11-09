import { Page } from '@playwright/test';
import BasePage from '../base/BasePage';
import { step } from '../setup/step';

export default class CheckoutPage extends BasePage {
    public readonly firstName = this.page.locator('[data-test="firstName"]');
    public readonly lastName = this.page.locator('[data-test="lastName"]');
    public readonly postalCode = this.page.locator('[data-test="postalCode"]');
    public readonly completeHeader = this.page.locator('[data-test="complete-header"]');
    private readonly continueButton = this.page.locator('[data-test="continue"]');
    private readonly finishButton = this.page.locator('[data-test="finish"]');

    constructor(page: Page) {
        super(page, 'Checkout Page', 'checkout-step-one.html');
    }

    @step()
    public async fillCustomer(first: string, last: string, zip: string): Promise<void> {
        await this.firstName.fill(first);
        await this.lastName.fill(last);
        await this.postalCode.fill(zip);
    }

    @step()
    public async continue(): Promise<void> {
        await this.continueButton.click();
    }

    @step()
    public async finish(): Promise<void> {
        await this.finishButton.click();
    }
}
