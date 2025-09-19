import { Page, Locator } from '@playwright/test';

export class PageBase {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Encapsulates a browser action in a try-catch block for error handling.
   * @param action A function containing the Playwright action to perform.
   * @param description A description of the action for logging purposes.
   */
  protected async doAction<T>(action: () => Promise<T>, description: string): Promise<T | null> {
    try {
      console.log(`Performing action: ${description}`);
      return await action();
    } catch (error) {
      console.error(`Error during action: ${description}`);
      console.error(error);
      return null;
    }
  }

  /**
   * Navigates to a given URL with error handling.
   * @param url The URL to navigate to.
   */
  public async goto(url: string): Promise<void | null> {
    return this.doAction(async () => {
      await this.page.goto(url);
    }, `Navigating to ${url}`);
  }

  /**
   * Clicks a locator with error handling.
   * @param locator The Locator to click.
   */
  public async click(locator: Locator): Promise<void | null> {
    return this.doAction(async () => {
      await locator.click();
    }, `Clicking element with locator: ${locator}`);
  }

  /**
   * Fills a text input with error handling.
   * @param locator The Locator for the input field.
   * @param value The text value to fill.
   */
  public async fill(locator: Locator, value: string): Promise<void | null> {
    return this.doAction(async () => {
      await locator.fill(value);
    }, `Filling element with value: '${value}'`);
  }
}