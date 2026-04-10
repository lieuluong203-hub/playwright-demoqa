const {expect} = require('@playwright/test');
exports.ElementsPage = class ElementsPage {
    /**
     * @param {import('@playwright/test').Page} page //biến page có kiểu dữ liệu là Page của Playwright, được truyền vào khi tạo đối tượng ElementsPage
     */
    constructor(page)
    {        this.page = page;
        this.url = '/elements';
        this.textbox = page.getByText('Text Box');
        this.checkbox = page.getByText('Check Box');
        this.radioButton = page.getByText('Radio Button');
        this.webTables = page.getByText('Web Tables');
        this.buttons = page.getByText('Buttons');
        this.links = page.getByRole('listitem').filter({ hasText: /^Links$/ })
        this.upAndDown = page.getByRole('link', { name: 'Upload and Download' })
        this.dynamicProperties = page.getByRole('link', { name: 'Dynamic Properties' })


    }
    async goto() {
        await this.page.goto(this.url); 
    }
    async clickTextbox() {
        await expect(this.textbox).toBeEnabled();
        await this.textbox.click();
    }
    async clickCheckbox() {
        await expect(this.checkbox).toBeVisible();
        await this.checkbox.click();
    }
    async clickRadioButton() {
        await expect(this.radioButton).toBeVisible();
        await this.radioButton.click({force: true}); // Sử dụng force: true để click vào phần tử ngay cả khi nó bị che khuất hoặc không tương tác được.
    }
    async clickWebTables() {
        await expect(this.webTables).toBeVisible();
        await this.webTables.click();
    }
    async clickButtons() {
        await expect(this.buttons).toBeVisible();
        await this.buttons.click({force: true});
    }
    async clickLinks() {
        await expect (this.links).toBeVisible();
        console.log ('trrtrt');
        await this.links.click({force: true});
    }
    async clickUpAndDown() {
        await this.upAndDown.scrollIntoViewIfNeeded();// Sử dụng scrollIntoViewIfNeeded() để dạy phần tử về ngay cả khi nó bị che khuất hoặc không tương tác được. 
         await expect(this.upAndDown).toBeVisible();
        await this.upAndDown.click();
    }
    async clickDynamicProperties() {
        await expect(this.dynamicProperties).toBeVisible();
        await this.dynamicProperties.click();
    }

}