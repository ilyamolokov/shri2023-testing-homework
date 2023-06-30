const { reversePath, reversePathBug,  } = require("../../helpers/reversePath");
const { BasicPage } = require("./basic-page");

class CatalogPage extends BasicPage {
    productDetails;
    addToCartButton;
    
    constructor(page) {
        super(page)
        this.productDetails = this.page.locator('.ProductDetails')
        this.addToCartButton = this.page.locator('.ProductDetails-AddToCart')
    }

    goto() {
        this.page.goto(reversePath('catalog'))
    }
    
    gotoId() {
        this.page.goto(reversePath('catalog/1'))
    }
}

module.exports = { CatalogPage }