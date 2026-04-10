const {test, expect} = require('@playwright/test');
const { Homepage } = require('../../pages/homepage');
const { ElementsPage } = require('../../pages/elementspage');
const { RadioBtnPage } = require('../../pages/radiobuttonpage');

test.describe('Radio Button', () => {
    let homepage;
    let elementspage;
    let radiobtnpage;

    test.beforeEach(async ({ page }) => {
 // Initialize page objects       
        homepage = new Homepage(page);
        elementspage = new ElementsPage(page);
        radiobtnpage = new RadioBtnPage(page);

// Navigate to the homepage
        await homepage.goto();
        await homepage.clickElements();
        await elementspage.clickRadioButton();
    });
   test('TC01: Select "Yes" radio button', async () => {
    await radiobtnpage.clickYes();
    await radiobtnpage.verifyYesSelection();

    });
    test('TC02: Select "No" radio button', async () => {
        //await radiobtnpage.clickNo(); đã disable nên không thể click được -> bỏ qua bước này
        await radiobtnpage.verifyNoSelection();
    

    });
});
