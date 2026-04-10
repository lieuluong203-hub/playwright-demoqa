const {expect} = require('@playwright/test');
exports.ButtonsPage = class ButtonsPage {
    constructor(page) {
        this.page = page;
        this.url = ('/buttons');
        this.doubleClickButton = page.locator('#doubleClickBtn');
        this.rightClickButton = page.locator('#rightClickBtn');
        this.clickMeButton = page.getByRole('button',{name:'Click Me', exact:true});
        this.doubleClickMessage = page.locator('#doubleClickMessage');
        this.rightClickMessage = page.locator ('#rightClickMessage');
        this.clickMeMessage = page.locator('#dynamicClickMessage')
    }
    async goto() {
        await this.page.goto(this.url);
    }
    

    


    async doubleClick() {
        await this.doubleClickButton.dblclick();
    }
    async rightClick() {
        await this.rightClickButton.click({ button: 'right' });// Sử dụng click với tùy chọn button: 'right' để thực hiện right-click
    }
    async clickMe() {
        await this.clickMeButton.click()

    }
    async verifyDoubleClickMessage() {
        await expect(this.doubleClickMessage).toHaveText('You have done a double click');
    }
    async verifyRightClickMessage() {
        await expect(this.rightClickMessage).toHaveText('You have done a right click');
    }
    async verifyClickMeMessage() {
        await expect(this.clickMeMessage).toHaveText('You have done a dynamic click');
    }

}