import { Page, Locator, expect } from '@playwright/test';
import { PageBase } from './PageBase';

/**
 * Represents the Login page and its related actions.
 */
export class LoginPage extends PageBase {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  /**
   * Navigates to the login page.
   */
  async goto() {
    await super.goto('/');
  }

  /**
   * Performs a login action with the given credentials.
   * @param username The username to log in with.
   * @param password The password for the user.
   */
  async login(username: string, password: string) {
    await this.fill(this.usernameInput, username);
    await this.fill(this.passwordInput, password);
    await this.click(this.loginButton);
  }

  /**
   * Verifies that the login error message is displayed and has the expected text.
   * @param message The expected error message text.
   */
  async verifyErrorMessage(message: string) {
    await expect(this.errorMessage).toHaveText(message);
  }
}