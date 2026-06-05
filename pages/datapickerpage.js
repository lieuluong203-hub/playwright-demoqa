const { expect } = require('@playwright/test');
exports.DataPickerPage = class DataPickerPage {
    constructor(page) {
        this.page = page;
        this.url = '/date-picker';
        this.inputDate = page.locator('#datePickerMonthYearInput');
        this.dataPicker = page.locator('.react-datepicker__month-container');
        this.yearDropdown = page.locator('.react-datepicker__year-select');
        this.monthDropdown = page.locator('.react-datepicker__month-select');
        this.nextBtn = page.locator('.react-datepicker__navigation--next');
        this.preBtn = page.locator('.react-datepicker__navigation--previous');
        this.currentDate = page.locator('.react-datepicker__day--today');
        // dateandtimepicker
        this.inputdateAndTime = page.locator('#dateAndTimePickerInput');
        this.listTime = page.locator('.react-datepicker__time-list');


    }
    async goto() {
        await this.page.goto(this.url);
    }
    async inputManually(date) {
        await this.inputDate.clear();
        await this.inputDate.fill(date);
        await this.inputDate.press('Enter');
        await expect(this.inputDate).toHaveValue(date);

    }
    async openDatePicker() {
        await this.inputDate.click();
    }
    async selectMonth(month) {
        await this.monthDropdown.selectOption(String(month));

    }
    async selectYear(year) {
        await this.yearDropdown.selectOption(String(year));
    }
    async selectDate(date) {
        const dayText = String(date).padStart(3, '0'); // format day thành 3 số vd 001
        await this.page.locator
            (`.react-datepicker__day--${dayText}:not(.react-datepicker__day--outside-month)`)// chọn ngày bỏ qua ngyaf của tháng trước/sau
            .click(); //
    }
    async pickDate(date, month, year) {
        await this.inputDate.click();
        await this.selectMonth(month);
        await this.selectYear(year);
        await this.selectDate(date);
    }
    async nextMonth() {
        await this.nextBtn.click();
    }
    async previousMonth() {
        await this.preBtn.click();
    }
    async verifyDateNotExist(date, month, year) {
        await this.inputDate.click();
        await this.selectMonth(month);
        await this.selectYear(year);
        const dayText = String(date).padStart(3, '0');

    const invalidDate = this.page.locator(
      `.react-datepicker__day--${dayText}:not(.react-datepicker__day--outside-month)` // 
    );
        await expect(invalidDate).toHaveCount(0);
    }

    // dateandtimepicker
    async selectTime(time){
        await this.dateAndTime.click();
        await this.listTime.filter({hasText: time}).click();

    }
    async selectDateAndTime(date, month, year, time) {
        await this.inputdateAndTime.click();
        await this.selectMonth(month);
        await this.selectYear(year);
        await this.selectDate(date);
        await this.selectTime(time);
    }

}