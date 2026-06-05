const { expect } = require('@playwright/test');

exports.SliderPage = class SliderPage {
    constructor(page) {
        this.page = page;
        this.url = '/slider';

        this.sliderContainer = page.locator('.range-slider');
        this.sliderValue = page.locator('#sliderValue');
        this.slider = page.locator('input[type="range"]');
    }
    async goto() {
        await this.page.goto(this.url);
    }



    async setSliderValue(targetValue) {

        const currentValue = Number( //convert string to number
            await this.slider.inputValue() //get value of slider
        );

        await this.slider.focus();

        if (targetValue > currentValue) {

            for (let i = currentValue; i < targetValue; i++) {//loop from current value to target value
                await this.slider.press('ArrowRight');//press right arrow
            }

        } else {

            for (let i = currentValue; i > targetValue; i--) {//loop from current value to target value
                await this.slider.press('ArrowLeft');//press left arrow
            }

        }
    }



    async verifySliderValue(expectedValue) {
        await expect(this.sliderValue)
            .toHaveValue(expectedValue.toString());
    }

    async getSliderValue() {
        return await this.sliderValue.inputValue();
    }
}