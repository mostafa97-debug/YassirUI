import { Page, Locator, expect } from '@playwright/test';
import { PageBase } from './PageBase';

/**
 * Represents the Products page, accessible after a successful login.
 */
export class ProductsPage extends PageBase {
  readonly productTitle: Locator;
  readonly cartIcon: Locator;
  readonly sortDropdown: Locator;
  readonly productNames: Locator;

  constructor(page: Page) {
    super(page);
    this.productTitle = page.locator('.title');
    this.cartIcon = page.locator('.shopping_cart_link');
    this.sortDropdown = page.locator('[data-test="product_sort_container"]');
    this.productNames = page.locator('.inventory_item_name');
  }

  /**
   * Verifies that the page title is "Products".
   */
  async verifyProductsPageTitle() {
    await expect(this.productTitle).toHaveText('Products');
  }

  /**
   * Adds a product to the shopping cart.
   * @param productName The name of the product to add.
   */
  async addProductToCart(productName: string) {
    const productItem = this.page.locator(`.inventory_item:has-text("${productName}")`);
    const addToCartButton = productItem.locator('button:has-text("Add to cart")');
    await this.click(addToCartButton);
  }

  /**
   * Verifies the number of items currently in the shopping cart icon.
   * @param count The expected number of items as a string.
   */
  async verifyCartItemCount(count: string) {
    await expect(this.cartIcon).toHaveText(count);
  }

  /**
   * Sorts the products using the dropdown menu.
   * @param option The sorting option text (e.g., 'Name (A to Z)').
   */
  async sortProducts(option: string) {
    await this.doAction(async () => {
      // Added a wait for the element to be visible before selecting an option
      await expect(this.sortDropdown).toBeVisible(); 
      await this.sortDropdown.selectOption(option);
    }, `Sorting products by: ${option}`);
  }

  /**
   * Retrieves the names of all visible products on the page.
   * @returns A Promise that resolves to an array of product names. Returns an empty array on error.
   */
  async getProductNames(): Promise<string[]> {
    const result = await this.doAction(async () => {
      return this.productNames.allTextContents();
    }, `Getting all product names`);
    return result || [];
  }
}