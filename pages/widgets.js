const {expect} = require('@playwright/test');
exports.WidgetsPage = class WidgetsPage {
    constructor(page) {
        this.page = page;
        this.url = '/widgets';
        this.accordian = page.getByText('Accordian', { exact: true });
        this.autoComplete = page.getByText('Auto Complete', { exact: true });

    }
    async goto() {
        await this.page.goto(this.url);
    }
    async clickAccordion() {
        await this.accordian.click({ force: true });
    }
    async clickAutoComplete() {
        await this.autoComplete.click({ force: true });
    }
}