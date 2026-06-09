const { expect } = require('@playwright/test');

exports.MenuPage = class MenuPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.url = '/menu';
        
        // Tiêu đề trang (ngoài Menu)
        this.pageHeading = page.getByRole('heading', { name: 'Menu', exact: true });

        // Menu Cấp 1 (Main Items)
        this.mainItem1 = page.getByRole('link', { name: 'Main Item 1', exact: true });
        this.mainItem2 = page.getByRole('link', { name: 'Main Item 2', exact: true });
        this.mainItem3 = page.getByRole('link', { name: 'Main Item 3', exact: true });
        
        // Menu Cấp 2 (Sub Items - hiển thị dưới Main Item 2)
        this.subItem1 = page.getByRole('link', { name: 'Sub Item' }).first();
        this.subItem2 = page.getByRole('link', { name: 'Sub Item' }).nth(1);
        this.subSubList = page.getByRole('link', { name: 'SUB SUB LIST' });
        
        // Menu Cấp 3 (Sub Sub Items - hiển thị dưới SUB SUB LIST)
        this.subSubItem1 = page.getByRole('link', { name: 'Sub Sub Item 1' });
        this.subSubItem2 = page.getByRole('link', { name: 'Sub Sub Item 2' });
    }

    async goto() {
        await this.page.goto(this.url);
    }

    async hoverMainItem2() {
        await this.mainItem2.hover();
        // Đợi menu Cấp 2 hiển thị ổn định bằng cách kiểm tra subItem1 hiển thị
        await expect(this.subItem1).toBeVisible();
    }

    async hoverSubSubList() {
        await this.subSubList.hover({ force: true });
        // Đợi menu Cấp 3 hiển thị ổn định bằng cách kiểm tra subSubItem1 hiển thị
        await expect(this.subSubItem1).toBeVisible();
    }
};
