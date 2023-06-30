const { reversePath } = require("../../helpers/reversePath");
const { BasicPage } = require("./basic-page");

class CatalogPage extends BasicPage {
    constructor(page) {
        super(page)
    }

    goto() {
        this.page.goto(reversePath('catalog'))
    }
}

module.exports = { CatalogPage }