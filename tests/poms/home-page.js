const { reversePath } = require("../../helpers/reversePath");
const { BasicPage } = require("./basic-page");

class HomePage extends BasicPage {
    constructor(page) {
        super(page)
    }

    goto() {
        this.page.goto(reversePath(''))
    }
}

module.exports = { HomePage }