const {expect} = require('@playwright/test');

exports.TooltipsPage = class TooltipsPage {
    constructor(page) {
        this.page = page;
        this.url = '/tool-tips';
        this.tooltipsBtn = page.locator('#toolTipButton');
        this.textTooltip = page.locator('#texToolTopContainer');
        this.tooltip = page.locator('.tooltip-inner');

    }
    async goto() {
        await this.page.goto(this.url);
    }
    async hoverTooltip() {
        await this.tooltipsBtn.hover();
        
    }
    async hoverTextTooltip() {
        await this.textTooltip.hover();
    }
}