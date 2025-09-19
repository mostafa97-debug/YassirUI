import { test } from '../fixtures/fixture';
import { Users, Products, CheckoutInfo, Messages } from '../data/testData';

test.describe('Shopping Cart and Checkout', () => {

  test.beforeEach(async ({ loginPage, productsPage }) => {
    await loginPage.goto();
    await loginPage.login(Users.valid.username, Users.valid.password);
    await productsPage.addProductToCart(Products.backpack);
    await productsPage.addProductToCart(Products.boltTShirt);
  });

  test('Verify cart contents', async ({ productsPage, cartPage }) => {
    await productsPage.cartIcon.click(); // Navigates to cart page
    await cartPage.verifyCartItemCount(2);
    await cartPage.verifyCartItemName(Products.backpack);
    await cartPage.verifyCartItemName(Products.boltTShirt);
  });

  test('Complete a successful checkout', async ({ productsPage, cartPage }) => {
    await productsPage.verifyCartItemCount('2');
    await productsPage.cartIcon.click();
    await cartPage.checkout(CheckoutInfo.firstName, CheckoutInfo.lastName, CheckoutInfo.postalCode);
    await cartPage.finishCheckout();
    await cartPage.verifyOrderCompleteMessage(Messages.orderComplete);
  });
});