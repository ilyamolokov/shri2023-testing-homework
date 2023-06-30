const { expect } = require('@playwright/test');

const { test } = require("../../test");

test.describe('Страница Catalog', () => {
  // test('Компонент карточки соответствует макету', async ({ catalogPage, checkScreenshot }) => {
  //   await catalogPage.gotoId();

  //   await expect(catalogPage.productDetails).toBeVisible() 

  //   await checkScreenshot(catalogPage.productDetails)
  // });

  test('Компонент сообщения об успешной покупке соответствует макету', async ({catalogPage, cartPage, checkScreenshot})  => {
    await catalogPage.gotoId()

    await expect(catalogPage.addToCartButton).toBeVisible() 
    await catalogPage.addToCartButton.click()

    await cartPage.goto()

    await expect(cartPage.inputName).toBeVisible() 
    await expect(cartPage.inputPhone).toBeVisible() 
    await expect(cartPage.inputAddress).toBeVisible() 
    await expect(cartPage.submitButton).toBeVisible() 

    await cartPage.inputName.fill('Test Name')
    await cartPage.inputPhone.fill('+77777777777')
    await cartPage.inputAddress.fill('Almaty')
    await cartPage.submitButton.click()

    await expect(cartPage.cartDetails).toBeVisible()
    await checkScreenshot(cartPage.cartDetails)
  })
  // test('Поле для заполнения телефонного номера валидно ', async ({catalogPage, cartPage, checkScreenshot})  => {
  //   await catalogPage.gotoId()
  //   await expect(catalogPage.addToCartButton).toBeVisible() 
  //   await catalogPage.addToCartButton.click()

  //   await cartPage.goto()

  //   await expect(cartPage.inputName).toBeVisible() 
  //   await expect(cartPage.inputPhone).toBeVisible() 
  //   await expect(cartPage.inputAddress).toBeVisible() 
  //   await expect(cartPage.submitButton).toBeVisible() 

  //   await cartPage.inputName.fill('Test Name')
  //   await cartPage.inputPhone.fill('+77777777777')
  //   await cartPage.inputAddress.fill('Almaty')
  //   await cartPage.submitButton.click()

  //   // await expect(cartPage).toBeVisible()
  //   await checkScreenshot(cartPage)
  // })

});
