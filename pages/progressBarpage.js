const { expect } = require('@playwright/test');
const { log } = require('node:console');
exports.ProgressBarPage = class ProgressBarPage {

    constructor(page) {
        this.page = page;
        this.url = '/progress-bar';
        this.progressBar = page.locator('#progressBar');
        this.progressBarValue = page.getByRole('progressbar');
        this.btnStart = page.locator('#startStopButton');
        this.btnReset = page.locator('#resetButton');
    }
async goto() {
    await this.page.goto(this.url);
    }
    async clickStartStopButton() {
        await this.btnStart.click();
    }
     async waitUntilComplete() {

        await expect(this.progressBarValue)
            .toHaveAttribute('aria-valuenow', '100', {
                timeout: 15000
            });
    }
    async getProgressBarValue(value) {
    return await this.progressBarValue.getAttribute('aria-valuenow');
    }

async clickResetButton() {
    await this.btnReset.click();
}
}