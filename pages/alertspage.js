const {expect} = require('@playwright/test');
exports.AlertsPage = class AlertsPage {
    constructor(page) {
        this.page = page;
        this.url = '/alertsWindows';
        this.browserWindows = page.getByText('Browser Windows');
    }
    async goto() {
        await this.page.goto(this.url);
    }
    async clickBrowserWindows() {
        await this.browserWindows.click();
    }
}