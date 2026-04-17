const { test, expect } = require('@playwright/test');
const { Homepage } = require('../../pages/homepage');
const { AlertsWindowsPage } = require('../../pages/alertswindownspage');
const { AlertsPage } = require('../../pages/alertspage');

test.describe('Alerts', () => {
    let homepage;
    let alertswindownspage;
    let alertsPage;

    test.beforeEach(async ({ page }) => {
        homepage = new Homepage(page);
        alertswindownspage = new AlertsWindowsPage(page);
        alertsPage = new AlertsPage(page);
        await homepage.goto();
        await homepage.clickAlerts();
        await alertswindownspage.clickAlerts();
    });
    test('TC01: Click "Alert" button', async ({ page }) => {
        page.on('dialog', async dialog => { //handle alert  
            expect(dialog.message()).toBe('You clicked a button')
            await dialog.accept();//accept alert
        });
        await alertsPage.clickAlerts();
    });
    test('TC02: Click handle timer alert', async ({ page }) => {
        page.on('dialog', async dialog => { //handle alert  
            expect(dialog.message()).toBe('This alert appeared after 5 seconds')
            await dialog.accept();//accept alert
        });
        await alertsPage.clickAlertTime();

    })
    test('TC03: Click handle confirm alert', async ({ page }) => {
        // Xử lý dialog dismiss khi nó xuất hiện
        // page.once('dialog', async dialog => {
        //     expect(dialog.message()).toBe('Do you confirm action?');
        //     console.log('Dialog message:', dialog.message());
        //     await dialog.dismiss();
        // });
        // await alertsPage.clickAlertConfirm();
        // await expect(alertsPage.confirmResult).toHaveText('You selected Cancel');

        // cách viết clean code xử lý cả 2 accept/ dismiss trong 1 test case: https://playwright.dev/docs/expect
        await alertsPage.handleConfirm('dismiss');
        await alertsPage.clickAlertConfirm();
        await expect(alertsPage.confirmResult).toHaveText('You selected Cancel');

    });
    test ('TC04: Click handle prompt alert', async ({ page }) => {
        page.once ('dialog', async dialog => {
            expect (dialog.message()).toBe('Please enter your name');
            await dialog.accept('tester')

        })
        await alertsPage.clickAlertPrompt();
        await expect(alertsPage.promptResult).toHaveText('You entered tester');
        

        
})


})

