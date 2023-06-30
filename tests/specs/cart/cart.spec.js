const { expect } = require('@playwright/test');

const { test } = require("../../test");

test.describe('Страница Cart', () => {
  test('Проверка адаптивности вёрстки под ширину экрана', async ({ cartPage, page }) => {
    await cartPage.goto()

    await page.waitForTimeout(10000)
  });
});
