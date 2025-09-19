import { test } from '../fixtures/fixture';
import { Users, Messages } from '../data/testData';

test.describe('Login Functionality', () => {

  test('Successful Login', async ({ loginPage, productsPage }) => {
    await loginPage.goto();
    await loginPage.login(Users.valid.username, Users.valid.password);
    await productsPage.verifyProductsPageTitle();
  });

  test('Failed Login with Invalid Credentials', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login(Users.invalid.username, Users.invalid.password);
    await loginPage.verifyErrorMessage(Messages.loginError);
  });
});