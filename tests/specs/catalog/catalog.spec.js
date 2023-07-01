const { expect } = require('@playwright/test');

const { test } = require("../../test");

test.describe('Страница Catalog', () => {
  const gotoForm = async (catalogPage, cartPage) => {
    await catalogPage.gotoId()

    await expect(catalogPage.addToCartButton).toBeVisible() 
    await catalogPage.addToCartButton.click()

    await cartPage.goto()

    await expect(cartPage.inputName).toBeVisible() 
    await expect(cartPage.inputPhone).toBeVisible() 
    await expect(cartPage.inputAddress).toBeVisible() 
    await expect(cartPage.submitButton).toBeVisible() 

    await cartPage.inputName.fill('33/33')
    await cartPage.inputPhone.fill('+333333333333')
    await cartPage.inputAddress.fill('33/33')
    await cartPage.submitButton.click()

    await cartPage.page.waitForSelector(':has-text("Well done!")', {timeout: 1500})
  }

  test('Поле для заполнения телефонного номера валидно @bug-id=10', async ({catalogPage, cartPage, checkScreenshot})  => {
    await gotoForm(catalogPage, cartPage)
  })

  test('Компонент карточки соответствует макету @bug-id=9', async ({ catalogPage, checkScreenshot }) => {
    await catalogPage.gotoId();

    await expect(catalogPage.productDetails).toBeVisible() 

    await checkScreenshot(catalogPage.productDetails)
  });

  test('Компонент сообщения об успешной покупке соответствует макету @bug-id=8', async ({ catalogPage, cartPage, checkScreenshot })  => {
    await gotoForm(catalogPage, cartPage)
    
    await expect(cartPage.cartDetails).toBeVisible()
    await checkScreenshot(cartPage.cartDetails)
  })
});
