const{expect} = require('@playwright/test');
exports.RadioBtnPage = class RadioBtnPage {
    constructor(page)
    {        this.page = page;
        this.url = ('/radio-button');
        this.yesRadio = page.locator('#yesRadio');
        this.impressiveRadio = page.locator('#impressiveRadio');
        this.noRadio = page.locator('#noRadio');
        this.result = page.locator('.text-success');
    }
    async goto() {
        await this.page.goto(this.url);
    }
    async clickYes() {
        await this.yesRadio.click();
    }
    async clickImpressive() {
        await this.impressiveRadio.click();
    }
    // async clickNo() { đã disable nên không thể click được -> bỏ qua bước này
    //     await this.noRadio.click();
    // }
    async verifyYesSelection() {
        const resultText = await this.result.textContent();
        expect (resultText).toContain ('Yes');
    }
    async verifyNoSelection() {
        // Verify that "No" radio button is disabled
        // const isDisabled = await this.noRadio.isDisabled(); 
        // expect (isDisabled).toBeTruthy();
        await expect(this.noRadio).toBeDisabled(); // Sử dụng Playwright để xác nhận rằng nút radio "No" bị vô hiệu hóa
    }




}