const {test, expect} = require('@playwright/test');
const { Homepage } = require('../../pages/homepage');
const { ElementsPage } = require('../../pages/elementspage');
const { checkboxPage } = require('../../pages/checkboxpage');

test.describe('Checkbox', () => {
    let homepage;
    let elementspage;
    let checkboxpage;      
test.beforeEach(async ({ page }) => {
    homepage = new Homepage(page);
    elementspage = new ElementsPage(page);
    checkboxpage = new checkboxPage(page);
    await homepage.goto();
    await homepage.clickElements();
    await elementspage.clickCheckbox();
});
test('TC01: Verify checkbox selection', async () => {
    await checkboxpage.clickCheckbox();
    console.log('Clicked on Home checkbox');
    await checkboxpage.verifyCheckbox();
    console.log('Verified checkbox selection');

})
test('TC02: Expand all checkboxes and select Desktop', async () => {
    await checkboxpage.expandAll();
    console.log('Expanded all checkboxes');
    await checkboxpage.clickDesktop();
    await checkboxpage.verifyDesktopSelection();
    console.log('Verified Desktop selection');
})

test('TC03: Verify output for selected checkboxes', async () => {
    await checkboxpage.expandAll();
    await checkboxpage.clickDesktop();
    await checkboxpage.clickDoc();
    await checkboxpage.verifyCheckboxes(['desktop', 'documents']);
    console.log('Verified output for selected checkboxes');

})
test.afterEach(async () => {
    await checkboxpage.page.close();
});
});

