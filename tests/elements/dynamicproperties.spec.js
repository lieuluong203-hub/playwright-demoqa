const { test, expect } = require('@playwright/test');
const { Homepage } = require('../../pages/homepage');
const { ElementsPage } = require('../../pages/elementspage');
const { DynamicPropertiesPage } = require('../../pages/dynamicpropertiespage');

test.describe('Dynamic Properties', () => {
    let homepage;
    let elementspage;
    let dynamicpropertiespage;

    test.beforeEach(async ({ page }) => {
        homepage = new Homepage(page);
        elementspage = new ElementsPage(page);
        dynamicpropertiespage = new DynamicPropertiesPage(page);
        await homepage.goto();
        await homepage.clickElements();
        await elementspage.clickDynamicProperties();
    });
    test("TC01: Verify btn enabled", async () => {
        await dynamicpropertiespage.verifyEnableButton();

    });
    test("TC02: Verify color change", async () => {
        await dynamicpropertiespage.verifyColorChange();

    });
    test("TC03: Verify visible button", async () => {
        await dynamicpropertiespage.verifyVisibleButton();

    });
}

)
