const { test, expect } = require('@playwright/test');
const { DataPickerPage } = require('../../pages/datapickerpage');

test.describe('Data Picker', () => {
    let dataPickerPage;
    test.beforeEach(async ({ page }) => {
        dataPickerPage = new DataPickerPage(page);
        await dataPickerPage.goto();
    });
    test('TC01: Manually input date', async ({ page }) => {
        await dataPickerPage.inputManually('04/01/2022');
    });
    test('TC02: Select date in calendar', async () => {
        await dataPickerPage.pickDate(4, 3, 2023); // demoqa dùng dropdown month 0,1,2 3

        await expect(dataPickerPage.inputDate)
            .toHaveValue('04/04/2023');
    });
    test ('TC03: Navigate to next month', async () => {
        await dataPickerPage.openDatePicker();
        await dataPickerPage.nextMonth();
        await expect(dataPickerPage.monthDropdown).toContainText('May');

    });
    test ('TC04: Invalid date not exist', async () => {
        await dataPickerPage.verifyDateNotExist(31, 3, 2023);
    });
    test ('TC05: select date and time', async () => {
        await dataPickerPage.selectDateAndTime(4, 3, 2023, '10:00 AM');
        await expect(dataPickerPage.inputdateAndTime).toHaveValue('04/03/2023 10:00 AM');
    });

});