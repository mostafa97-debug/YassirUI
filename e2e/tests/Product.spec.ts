import { test } from '../fixtures/fixture';
import { expect } from '@playwright/test';
import { Users, Products, ProductSortOptions } from '../data/testData';

test.describe('Products and Cart', () => {

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login(Users.valid.username, Users.valid.password);
  });

  test('Add a product to the cart and verify the item count', async ({ productsPage }) => {
    await productsPage.addProductToCart(Products.backpack);
    await productsPage.verifyCartItemCount('1');
  });

  test('Sort products by name (A to Z)', async ({ productsPage }) => {
    await productsPage.sortProducts(ProductSortOptions.nameAToZ);
    const productNames = await productsPage.getProductNames();
    const sortedNames = [...productNames].sort();
    expect(productNames).toEqual(sortedNames);
  });
});