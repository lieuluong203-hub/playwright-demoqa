const {expect} = require('@playwright/test');
exports.AlertsWindowsPage = class AlertsWindowsPage {
    constructor(page) {
        this.page = page;
        this.url = '/alertsWindows';
        this.browserWindows = page.getByText('Browser Windows');
        this.alerts = page.getByText('Alerts', { exact: true });
        this.frame = page.getByText('Frames', { exact: true });
    }
    async goto() {
        await this.page.goto(this.url);
    }
    async clickBrowserWindows() {
        await this.browserWindows.click();
    }
    async clickAlerts() {
        await this.alerts.click({ force: true });
    }
    async clickFrames() {
        await this.frame.click({ force: true });
    }
}