const { expect } = require('@playwright/test');
exports.DynamicPropertiesPage = class DynamicPropertiesPage {
    constructor(page) {
        this.page = page;
        this.url = '/dynamic-properties';
        this.enableAfter = page.locator('#enableAfter');
        this.colorChange = page.locator('#colorChange');
        this.visibleAfter = page.locator('#visibleAfter');
    }
    async goto() {
        await this.page.goto(this.url);
    }
    async verifyEnableButton() {
        await expect(this.enableAfter).toBeDisabled();
        console.log('wait for 5s');
        await this.page.waitForTimeout(6000);
        console.log('kkkkk');
        await expect(this.enableAfter).toBeEnabled();

    }
    async verifyColorChange() {
        await expect(this.colorChange).not.toHaveClass('text-danger');
        await this.page.waitForTimeout(6000);
        await expect(this.page.locator('button#colorChange.text-danger')).toBeVisible();

    }
    async verifyVisibleButton() {
        await expect(this.visibleAfter).not.toBeVisible();
        await this.page.waitForTimeout(6000);
        await expect(this.visibleAfter).toBeVisible();
    }


}