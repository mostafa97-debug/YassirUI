import { Page, Locator, expect } from '@playwright/test';
import { PageBase } from './PageBase';

/**
 * Represents the Shopping Cart and Checkout pages.
 */
export class CartPage extends PageBase {
  readonly cartItems: Locator;
  readonly checkoutButton: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;
  readonly continueButton: Locator;
  readonly finishButton: Locator;
  readonly checkoutCompleteHeader: Locator;

  constructor(page: Page) {
    super(page);
    this.cartItems = page.locator('.cart_item');
    this.checkoutButton = page.locator('#checkout');
    this.firstNameInput = page.locator('#first-name');
    this.lastNameInput = page.locator('#last-name');
    this.postalCodeInput = page.locator('#postal-code');
    this.continueButton = page.locator('#continue');
    this.finishButton = page.locator('#finish');
    this.checkoutCompleteHeader = page.locator('.complete-header');
  }

  /**
   * Navigates to the shopping cart page.
   */
  async gotoCart() {
    await super.goto('/cart.html');
  }

  /**
   * Verifies that the shopping cart contains the expected number of items.
   * @param expectedCount The expected number of items in the cart.
   */
  async verifyCartItemCount(expectedCount: number) {
    await expect(this.cartItems).toHaveCount(expectedCount);
  }

  /**
   * Verifies that a specific product is visible in the shopping cart.
   * @param productName The name of the product to verify.
   */
  async verifyCartItemName(productName: string) {
    await expect(this.page.locator(`.cart_item:has-text("${productName}")`)).toBeVisible();
  }

  /**
   * Completes the first step of the checkout process by filling in user details.
   * @param firstName The user's first name.
   * @param lastName The user's last name.
   * @param postalCode The user's postal code.
   */
  async checkout(firstName: string, lastName: string, postalCode: string) {
    await this.click(this.checkoutButton);
    await this.fill(this.firstNameInput, firstName);
    await this.fill(this.lastNameInput, lastName);
    await this.fill(this.postalCodeInput, postalCode);
    await this.click(this.continueButton);
  }

  /**
   * Clicks the "Finish" button to finalize the checkout process.
   */
  async finishCheckout() {
    await this.click(this.finishButton);
  }

  /**
   * Verifies that the order confirmation message is displayed and has the expected text.
   * @param message The expected confirmation message text.
   */
  async verifyOrderCompleteMessage(message: string) {
    await expect(this.checkoutCompleteHeader).toHaveText(message);
  }
}