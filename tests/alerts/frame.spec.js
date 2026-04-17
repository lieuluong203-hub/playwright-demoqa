const { test, expect } = require('@playwright/test');
const { Homepage } = require('../../pages/homepage');
const { AlertsWindowsPage } = require('../../pages/alertswindownspage');

test.describe('Frames', () => {
    let homepage;
    let alertswindownspage;

    test.beforeEach(async ({ page }) => {
        homepage = new Homepage(page);
        alertswindownspage = new AlertsWindowsPage(page);
        await homepage.goto();
        await homepage.clickAlerts();
        await alertswindownspage.clickFrames();
    });
    test('TC01: Verify frame ', async ({page}) => {
        const frame = page.frameLocator('#frame1');
        await expect (frame.locator('#sampleHeading')).toHaveText('This is a sample page');
    });
    test('TC02: Verify frame', async ({page}) => {
        const frame = page.frameLocator('#frame2');
        await expect (frame.locator('#sampleHeading')).toHaveText('This is a sample page');
    });
})