const {test, expect} = require('@playwright/test');
const { Homepage } = require('../../pages/homepage');
const {AlertsPage} = require('../../pages/alertspage');
const { BrowserWindowsPage } = require('../../pages/browserwindowspage');

test.describe('Browser Windows', () => {
    let homepage;
    let elementspage;
    let browserwindowspage;

    test.beforeEach(async ({ page }) => {
        homepage = new Homepage(page);
        elementspage = new AlertsPage(page);
        browserwindowspage = new BrowserWindowsPage(page);
        await homepage.goto();
        await homepage.clickAlerts();
        await elementspage.clickBrowserWindows();
    });
    test('TC01: Click on Browser Windows', async ({page}) => {
        //bat tab moi + click cung luc
        const context = page.context();
        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            browserwindowspage.clickNewTabButton()
        ])
        //cho page load xong
        await newPage.waitForLoadState();
        //check url
        await expect(newPage).toHaveURL('https://demoqa.com/sample');
        
    });
    test ('TC02: Click on New Windows', async ({page}) => {
        //bat tab moi + click cung luc
        const context = page.context();
        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            browserwindowspage.clickWindowButton()
        ])
        //cho page load xong
        await newPage.waitForLoadState();
        //check url
        await expect(newPage).toHaveURL('https://demoqa.com/sample');
        
    });
    test ('TC03: Click on Message Windows', async ({page}) => {
        //bat tab moi + click cung luc
        const context = page.context();
        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            browserwindowspage.clickWindowMsgButton()
        ])
        //cho page load xong
        await newPage.waitForLoadState();
        //check url
        
        
    });
});