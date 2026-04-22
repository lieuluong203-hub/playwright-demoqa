const { expect } = require('@playwright/test');
const { open } = require('node:fs/promises');
exports.AutocompletePage = class AutocompletePage {
    constructor(page) {
        this.page = page;
        this.url = '/auto-complete';
        this.multiSelect = page.locator('#autoCompleteMultipleInput');
        this.singleSelect = page.locator('#autoCompleteSingleInput');
        // dropdown option
        this.options = page.locator('.auto-complete__option');
        // selected Value
        this.selectValue = page.locator('.auto-complete__multi-value__label')
        // remove value
        this.removeValue = page.locator('.auto-complete__multi-value__remove');
        this.singleSelectedValue = page.locator('.auto-complete__single-value');
    }
    async goto() {
        await this.page.goto(this.url);
    }
    // xử lý ype multiple color names
    // async multiSelectColor(colorName) {
    //     await this.multiSelect.fill(colorName); 
    //     console.log('Selected color name: ', colorName);
    //     await expect (this.option).toBeVisible ();
    //     console.log('Sftyrt');
    //     await this.option.click();
    // }

    async multiSelectColor(colorName) {
        await this.multiSelect.click();
        await this.multiSelect.fill(colorName.slice(0, 2)); // Gõ vài ký tự để hệ thống suggest đúng option. ko cần fill full text
        console.log('Selected color name: ', colorName);
        const option = this.options.filter({ hasText: colorName }); // Vì options render nhiều item, sử dụng filter hàm hasText de tìm kiếm option chính xác.
        await expect(option).toBeVisible();
        await option.click();

    }

    async singleSelectColor(colorName) {
        await this.singleSelect.click();

        await this.singleSelect.fill(colorName.slice(0, 2));

        const option = this.page.locator(
            '.auto-complete__option',
            { hasText: colorName }
        );

        await expect(option).toBeVisible();

        await option.click();


    }

    async removeColor(colorName) {
        const remove = this.page.locator('.auto-complete__multi-value', { hasText: colorName });
        await remove.locator('.auto-complete__multi-value__remove').click();

    }
}