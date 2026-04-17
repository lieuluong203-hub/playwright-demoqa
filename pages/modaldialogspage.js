const {expect} = require('@playwright/test');
exports.ModalDialogsPage = class ModalDialogsPage {
    constructor(page) {
        this.page = page;
        this.url = '/modal-dialogs';
        this.smallModalBtn = page.locator('#showSmallModal');
        this.largeModalBtn = page.locator('#showLargeModal');
        this.smallModalTitle = page.locator('#example-modal-sizes-title-sm');
        this.closeSmallModalBtn = page.locator('#closeSmallModal');

    }
    async goto() {
        await this.page.goto(this.url);
    }
    async clickSmallModalBtn() {
        await this.smallModalBtn.click({ force: true });
    }
    async clickLargeModalBtn() {
        await this.largeModalBtn.click({ force: true });
    }
        async verifySmallModalTitle() {
            await expect(this.smallModalTitle).toHaveText('Small Modal');
        }
    async clickCloseSmallModalBtn() {
        await this.closeSmallModalBtn.click();
    }
}
