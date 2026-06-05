const { test, expect } = require('@playwright/test');
const { SliderPage } = require('../../pages/sliderpage');

test.describe('Widgets', () => {
    let sliderPage;

    test.beforeEach(async ({ page }) => {
        sliderPage = new SliderPage(page);
        await sliderPage.goto();
    });




    test('Set slider to 50', async () => {

        await sliderPage.setSliderValue(50);

        await sliderPage.verifySliderValue(50);
    });


test('TC01: Set slider to 100', async () => {

    await sliderPage.setSliderValue(100);

        await sliderPage.verifySliderValue(100);
});

test('TC02: Set slider to 0', async () => {

    await sliderPage.setSliderValue(0);

    await sliderPage.verifySliderValue(0);
});
test('TC03: Set slider to 150', async () => {

    await sliderPage.setSliderValue(150);

    await sliderPage.verifySliderValue(100);
});

});
