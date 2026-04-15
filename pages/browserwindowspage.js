const {expect} = require('@playwright/test');
exports.BrowserWindowsPage = class BrowserWindowsPage {
    constructor (page){
        this.page = page;
        this.url = '/browser-windows';
        this.newTabButton = page.locator('#tabButton');
        this.windowBtn = page.locator ('#windowButton');
        this.windowMsgBtn = page.locator('#messageWindowButton');
        this.outputNewTab = page.locator('#sampleHeading');
    }
    async goto() {
        await this.page.goto(this.url);
    }
    async clickNewTabButton() {
        await expect(this.newTabButton).toBeVisible();
        await this.newTabButton.click();
    }
    async clickWindowButton() {
        await expect(this.windowBtn).toBeVisible();
        await this.windowBtn.click();
    }
    async clickWindowMsgButton() {
        await expect(this.windowMsgBtn).toBeVisible();
        await this.windowMsgBtn.click();
    }
    async verifyNewTab(){
        await expect(this.outputNewTab).toBeVisible();
        await expect(this.outputNewTab).toContainText('This is a sample page');

    }
    async verifyNewWindow(){
        await expect(this.outputNewTab).toBeVisible();
        await expect(this.outputNewTab).toContainText('This is a sample page');
    }
    async verifyNewMsgWindow(){
        await expect(this.outputNewTab).toBeVisible();
        await expect(this.outputNewTab).toContainText('Knowledge increases by sharing but not by saving');
    }

}