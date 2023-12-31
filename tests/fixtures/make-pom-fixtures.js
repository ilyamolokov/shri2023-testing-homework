const { BasicPage } = require('../poms/basic-page');
const { CartPage } = require('../poms/cart-page');
const { CatalogPage } = require('../poms/catalog-page');
const { HomePage } = require('../poms/home-page')

const pomFixtures = {
    basicPage: BasicPage,
    homePage: HomePage,
    catalogPage: CatalogPage,
    cartPage: CartPage,
}

function makePomFixture(pom) {
    return async ({ page }, use) => {
        await use(new pom(page));
    };
}

function makePomFixtures() {
    const keys = Object.keys(pomFixtures) 


    return keys.reduce((acc, curr) => {
        const fixture = pomFixtures[curr];

        acc[curr] = makePomFixture(fixture);

        return acc;
    }, {});
}

module.exports = { makePomFixtures }