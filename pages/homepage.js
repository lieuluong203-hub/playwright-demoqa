const {test, expect} = require('@playwright/test');
exports.Homepage = class Homepage {
     /**
     * @param {import('@playwright/test').Page} page //biến page có kiểu dữ liệu là Page của Playwright, được truyền vào khi tạo đối tượng Homepage
     */
    constructor(page)
    {        this.page = page;
        this.url = '/';
        this.elements = page.locator('.card-body').filter({ hasText: 'Elements' });
        this.forms = page.locator('.card-body').filter({ hasText: 'Forms' });
        this.alerts = page.locator('.card-body').filter({ hasText: 'Alerts, Frame & Windows' });
        
    }
    async goto() {
        await this.page.goto(this.url);
    }
    async clickElements() {
        await expect(this.elements).toBeVisible(); // Kiểm tra xem phần tử có hiển thị trên trang hay không
        await this.elements.click();
    }
    async clickForms() {
        await expect(this.forms).toBeVisible(); 
        await this.forms.click();
    }
    async clickAlerts() {
        await expect(this.alerts).toBeVisible(); 
        await this.alerts.click();
    }
}
