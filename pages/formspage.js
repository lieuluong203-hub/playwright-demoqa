const {expect} = require('@playwright/test');
exports.Formspage = class Formspage {
    constructor(page) {
        this.page = page;
        this.url = '/forms';
        this.practiceForm = page.getByRole('link', { name: 'Practice Form' });
    }
    async goto() {
        await this.page.goto(this.url);
    }
    async clickPracticeForm() {
        await this.practiceForm.click();
    }
}

