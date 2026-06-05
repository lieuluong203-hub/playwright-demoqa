const {expect} = require('@playwright/test');

exports.TabsPage = class TabsPage {
    constructor(page) {
        this.page = page;
        this.url = '/tabs';

        this.what = page.locator('#demo-tab-what');
        this.origin = page.locator('#demo-tab-origin');
        this.use = page.locator('#demo-tab-use');
        this.more = page.locator('#demo-tab-more');

        this.whatContent = page.locator('#demo-tabpane-what');
        this.originContent = page.locator('#demo-tabpane-origin');
        this.useContent = page.locator('#demo-tabpane-use');
    }
    async goto() {
        await this.page.goto(this.url);
    }
    async clickWhat() {
        await this.what.click();
        await expect(this.what).toBeVisible();
    }
    async clickOrigin() {
        await this.origin.click();
        await expect(this.origin).toBeVisible();
    }
    async clickUse() {
        await this.use.click();
        await expect(this.use).toBeVisible();
    
    }
    async getWhatContent() {
        return await this.whatContent.textContent();
    }
    async getOriginContent() {
        await expect(this.originContent).toBeVisible();
    }
    async getUseContent() {
        await expect(this.useContent).toBeVisible();
    }
}