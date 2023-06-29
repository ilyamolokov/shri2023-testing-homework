// test.spec.js

const { test } = require("../test");

test.describe('My Test Suite', () => {
  test.beforeEach(async ({ baseURL, page }) => {
    await page.goto(baseURL);
  });

  test('Test 1', async ({ basicPage, checkScreenshot }) => {
    await basicPage.goto();
    
    expect(basicPage.header).toBeVisible();

    await checkScreenshot(basicPage)
  });

  test('Test 2', async ({ page, checkScreenshot }) => {
    // Your test actions here
    await checkScreenshot(page)
  });

  test('Test 3', async ({ page, checkScreenshot }) => {
    // Your test actions here
    await checkScreenshot(page)
  });
});
