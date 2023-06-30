const { reversePath } = require("../../helpers/reversePath");
const { BasicPage } = require("./basic-page");

class CartPage extends BasicPage {
    constructor(page) {
        super(page)
    }

    goto() {
        this.page.goto(reversePath('cart'))
    }
}

module.exports = { CartPage }