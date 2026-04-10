const {expect} = require('@playwright/test');
exports.checkboxPage = class checkboxPage {
    constructor(page)
    {        this.page = page;
        this.url = '/checkbox';
        this.checkboxHome = page.locator('[aria-label="Select Home"]')
        this.result = page.locator('#result');
        this.expandAllButton = page.locator('.rc-tree-switcher_close');
        this.checkboxDesktop = page.getByRole('checkbox', { name: 'Desktop' });
        this.checkboxDoc = page.getByRole('checkbox', { name: 'Documents' });
    
    }
    async goto() {
        await this.page.goto(this.url);
        
    }
    async clickCheckbox() {
        await this.checkboxHome.click ();

    }
    async verifyCheckbox() {
        const resultText = await this.result.textContent();
        expect(resultText).toContain('You have selected :');
        expect(resultText).toContain('home');

}
    async expandAll() {
        await this.expandAllButton.click();
    }
    async clickDesktop() {
        await this.checkboxDesktop.click();
    }
    async clickDoc() {
        await this.checkboxDoc.click();
    }
    async verifyDesktopSelection() {
        const resultText = await this.result.textContent();
        expect(resultText).toContain('You have selected :');
        expect(resultText).toContain('desktop');
    }
    async verifyCheckboxes(items) {
        for (const item of items) { // Duyệt qua từng mục trong mảng items
            await expect(this.result).toContainText(item);// Kiểm tra nếu kết quả chứa văn bản của mục hiện tại
        }
}
}

     