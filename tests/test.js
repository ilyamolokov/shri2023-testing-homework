const { test: base } = require('@playwright/test')

const { createCheckScreenshotFixture } = require('./fixtures/check-screenshots')
const { makePomFixtures } = require('./fixtures/make-pom-fixtures')

const test = base.extend({
    checkScreenshot: async ({}, use, testInfo) => {
        await use(createCheckScreenshotFixture(testInfo));
    },

    baseURL: async ({}, use) => {
        await use('https://www.microsoft.com/ru-ru/');
    },
    ...makePomFixtures(),
});

test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
        window.addEventListener('DOMContentLoaded', () => {
            const styleElement = document.createElement('style');

            styleElement.textContent = `*,
            *::before,
            *::after {
            caret-color: transparent !important;
            animation-duration: 0s !important;
            animation-delay: 0s !important;
            transition-duration: 0s !important;
            transition-delay: 0s !important;
            }`;

            document.body.appendChild(styleElement);
        });
    });

    await page.evaluate(() => document.fonts.ready);
});

module.exports = { test }