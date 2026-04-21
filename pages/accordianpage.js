const {expect} = require('@playwright/test');
exports.AccordionPage = class AccordionPage {
    constructor(page) {
        this.page = page;
        this.url = '/accordian';
        this.section1 = page.getByRole('button', { name: 'What is Lorem Ipsum?' });
        this.section1Content = page.locator ('.accordion-collapse.show .accordion-body')

    }
    async goto() {
        await this.page.goto(this.url);
    }
    async openSection1() {
        const isExpanded = await this.section1.getAttribute('aria-expanded');
        if (isExpanded === 'false') {
            await this.section1.click();
        }
    }
    async closeSection1() {
        const isExpanded = await this.section1.getAttribute('aria-expanded');
        if (isExpanded === 'true') {
            await this.section1.click();
        }
    }
    async getSection1Content() {
        return (await this.section1Content.innerText()).trim(); // Trả về nội dung của Section 1 sau khi loại bỏ khoảng trắng thừa  
    }
}