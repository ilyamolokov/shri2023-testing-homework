const { expect } = require('@playwright/test');

const { test } = require("../../test");

test.describe('Страница Catalog', () => {
  test('Проверка адаптивности вёрстки под ширину экрана', async ({ catalogPage, page }) => {
    await catalogPage.goto()

    await page.waitForTimeout(10000)
  });
});
