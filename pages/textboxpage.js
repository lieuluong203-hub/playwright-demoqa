const {expect} = require('@playwright/test');
exports.TextboxPage = class TextboxPage {
     /**
     * @param {import('@playwright/test').Page} page //biến page có kiểu dữ liệu là Page của Playwright, được truyền vào khi tạo đối tượng Homepage
     */
    constructor(page)
    {        this.page = page;
        this.url = '/text-box';
        this.fullName = page.locator('#userName');
        this.email = page.locator('#userEmail');
        this.currentAddress = page.locator('#currentAddress');
        this.permanentAddress = page.locator('#permanentAddress');
        this.submitButton = page.locator('#submit');
        this.outputform = page.locator('#output');
    }
    async goto() {
        await this.page.goto(this.url);
    }
    async fillForm(fullName, email, currentAddress, permanentAddress) {
        await this.fullName.fill(fullName);
        await this.email.fill(email);
        await this.currentAddress.fill(currentAddress);
        await this.permanentAddress.fill(permanentAddress);
    }
    async clicksubmit() {
        await this.submitButton.click();
    }
    async verifyOutput(fullName, email, currentAddress, permanentAddress) {
        const outputText = await this.outputform.textContent();
        expect(outputText).toContain(fullName);
        expect(outputText).toContain(email);
        expect(outputText).toContain(currentAddress);
        expect(outputText).toContain(permanentAddress);

    }
    async verifyInvalidEmail() {
        await expect(this.email).toHaveClass(/field-error/); // Kiểm tra nếu trường email có class 'field-error' sau khi nhập email không hợp lệ
    }
}
