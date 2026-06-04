const {test, expect} = require('@playwright/test');
const {ProgressBarPage} = require('../../pages/progressBarpage');

test.describe('Progress Bar', () => {
    let progressBarPage;

    test.beforeEach(async ({ page }) => {
        progressBarPage = new ProgressBarPage(page);
        await progressBarPage.goto();
    });
    test('TC01:Verify progress bar reaches 100%', async () => {
        await progressBarPage.clickStartStopButton();
        await progressBarPage.waitUntilComplete();
        expect(await progressBarPage.getProgressBarValue()).toBe('100');
    });

    test('TC02:Verify default progress value is 0', async () => {
        expect(await progressBarPage.getProgressBarValue()).toBe('0');
    });

    test ('TC03: Verify progress bar value after stopping', async ({page}) => {
        await progressBarPage.clickStartStopButton();
        //chờ 2s
        await page.waitForTimeout(2000);
        await progressBarPage.clickStartStopButton();
        const value = Number(await progressBarPage.getProgressBarValue());
        expect(Number(value)).toBeGreaterThan(0);
        expect(Number(value)).toBeLessThan(100);
    
    });

    test ('TC04: Verify Reset', async ({page}) => {
        await progressBarPage.clickStartStopButton();
        await progressBarPage.waitUntilComplete();
        await progressBarPage.clickResetButton();
        expect(await progressBarPage.getProgressBarValue()).toBe('0');
        
    });
    //close browser
    test.afterEach(async ({ page }) => {
        await page.close();
    });

})