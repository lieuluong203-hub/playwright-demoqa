const {expect} = require('@playwright/test');
exports.WidgetsPage = class WidgetsPage {
    constructor(page) {
        this.page = page;
        this.url = '/widgets';
        this.accordian = page.getByText('Accordian', { exact: true });
        this.autoComplete = page.getByText('Auto Complete', { exact: true });
        this.dataPicker = page.getByText('Date Picker', { exact: true });
        this.slider = page.getByText('Slider', { exact: true });
        this.progressBar = page.getByText('Progress Bar', { exact: true });
        this.tabs = page.getByText('Tabs', { exact: true });
        this.tabs = page.getByText('Tooltips', { exact: true });

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
    async clickDatePicker() {
        await this.dataPicker.click({ force: true });
    }
    async clickSlider() {
        await this.slider.click({ force: true });
    }
    async clickProgressBar() {
        await this.progressBar.click({ force: true });
    }
    async clickTabs() {
        await this.tabs.click({ force: true });
    }
    async clickTooltips() {
        await this.tooltips.click({ force: true });
    }
}