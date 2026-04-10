const { test, expect } = require('@playwright/test');
const { Homepage } = require('../../pages/homepage');
const { ElementsPage } = require('../../pages/elementspage');
const { TextboxPage } = require('../../pages/textboxpage');
const testData = require('../../test-data/QA/textboxdata.json');


test.describe('Textbox', () => {
    let homepage;
    let elementspage;
    let textboxpage;
    test.beforeEach(async ({ page }) => {
        homepage = new Homepage(page);
        elementspage = new ElementsPage(page);
        textboxpage = new TextboxPage(page);

        await homepage.goto();
        await homepage.clickElements();
        await elementspage.clickTextbox();

    });

    test('TC01: Input valid information', async ({ page }) => {
        await textboxpage.fillForm(
            testData.tb_01.fullname,
            testData.tb_01.email,
            testData.tb_01.currentAddress,
            testData.tb_01.permanentAddress

        );

        await textboxpage.clicksubmit();

        await textboxpage.verifyOutput(
            testData.tb_01.fullname,
            testData.tb_01.email,
            testData.tb_01.currentAddress,
            testData.tb_01.permanentAddress
        );

    });
    test('TC02: Input invalid email', async ({ page }) => {
        await textboxpage.fillForm(
            testData.tb_02.fullname,
            testData.tb_02.email,
            testData.tb_02.currentAddress,
            testData.tb_02.permanentAddress
        );
        await textboxpage.clicksubmit();
        await textboxpage.verifyInvalidEmail();

    })

    test('TC03: Input empty form', async ({ page }) => {
        await textboxpage.fillForm(
            testData.tb_03.fullname,
            testData.tb_03.email,
            testData.tb_03.currentAddress,
            testData.tb_03.permanentAddress
        );
        await textboxpage.clicksubmit();

        await textboxpage.verifyOutput(
            testData.tb_03.fullname,
            testData.tb_03.email,
            testData.tb_03.currentAddress,
            testData.tb_03.permanentAddress
        );

    })

});

