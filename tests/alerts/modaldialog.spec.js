const {test, expect} = require('@playwright/test');
const { Homepage } = require('../../pages/homepage');
const { AlertsWindowsPage } = require('../../pages/alertswindownspage');
const { ModalDialogsPage } = require('../../pages/modaldialogspage');
 
test.describe('Modal Dialogs', () => {
    let homepage;
    let alertswindownspage;
    let modaldialogspage;

    test.beforeEach(async ({ page }) => {
        homepage = new Homepage (page);
        alertswindownspage = new AlertsWindowsPage(page);
        modaldialogspage = new ModalDialogsPage(page);
        await homepage.goto();
        await homepage.clickAlerts();
        await alertswindownspage.clickModalDialogs();
    });
    test('TC01: Verify small modal tittle', async ({page}) => {
        await modaldialogspage.clickSmallModalBtn();
        await modaldialogspage.verifySmallModalTitle();
        await modaldialogspage.clickCloseSmallModalBtn();
        await expect(modaldialogspage.smallModalTitle).toBeHidden();
    });
    test('TC02: Verify large modal tittle', async ({page}) => {
        await modaldialogspage.clickLargeModalBtn();
        await expect(modaldialogspage.page.locator('#example-modal-sizes-title-lg')).toHaveText('Large Modal');
        await modaldialogspage.page.locator('#closeLargeModal').click();
        await expect(modaldialogspage.page.locator('#example-modal-sizes-title-lg')).toBeHidden();
    });

})