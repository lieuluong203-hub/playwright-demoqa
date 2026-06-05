const {test, expect} = require('@playwright/test');
const { TabsPage } = require('../../pages/tabspage');

test.describe('Tabs', () => {
    let tabsPage;

    test.beforeEach(async ({ page }) => {
        tabsPage = new TabsPage(page);
        await tabsPage.goto();
    });
    test("TC01: Verify tabs default", async () => {
        await tabsPage.clickWhat();
        await tabsPage.getWhatContent();
    });
    test("TC02: Verify Origin tab active", async () => {

    await tabsPage.clickOrigin();

    await expect(tabsPage.origin)
        .toHaveAttribute(
            'aria-selected',
            'true'
        );

    await expect(tabsPage.originContent)
        .toContainText(
            'Contrary to popular belief' );

    });
    test ("TC03: Verify tab disabled", async () => {
        await expect (tabsPage.more).toHaveAttribute('aria-disabled', 'true');
    });
    //close sau browser
    test.afterEach(async ({ page }) => {
        await page.close();
    }); 

});