class BasicPage {
    constructor(page) {
        this.page = page;
    }

    goto() {
        this.page.goto('/base-page/')
    }

}

module.exports = { BasicPage }