const { expect } = require('@playwright/test');
exports.PracticeFormPage = class PracticeFormPage {
    constructor(page) {
        this.page = page;
        this.url = '/automation-practice-form';
        this.firstName = page.locator('#firstName');
        this.lastName = page.locator('#lastName');
        this.userEmail = page.locator('#userEmail');
        this.gender = page.locator('#gender-radio-1');
        this.userNumber = page.locator('#userNumber');
        this.dateOfBirth = page.locator('#dateOfBirthInput');
        this.subjects = page.locator('#subjectsInput');
        this.hobbies = page.locator('#hobbies-checkbox-1');
        this.picture = page.locator('#uploadPicture');
        this.currentAddress = page.locator('#currentAddress');
        this.state = page.locator('#state');
        this.city = page.locator('#city');
        this.submit = page.locator('#submit');
        this.submitTheForm = page.locator('.modal-content');


    }
    async goto() {
        await this.page.goto(this.url);

    }
    async fillBasicInfo(firstName, lastName, userEmail, userNumber) {

        await this.firstName.fill(firstName,{force: true});
        await this.lastName.fill(lastName);
        await this.userEmail.fill(userEmail);
        await this.userNumber.fill(userNumber);
    }
    async selectGender(gender) {
        const map = {
            'Male': '#gender-radio-1',
            'Female': '#gender-radio-2',
            'Other': '#gender-radio-3',
    
        };
        if (map[gender]) { // 
            await this.page.locator(map[gender]).check();
        }
    }
    async selectDateOfBirth(dateOfBirth) {
        if (dateOfBirth) {
            await this.dateOfBirth.fill(dateOfBirth);
            await this.dateOfBirth.press('Tab');
        }
    }
    async selectSubjects(subjects) {
        if (subjects) {
        await this.subjects.fill(subjects);
        await this.page.getByRole('option', { name: subjects }).click();
    }
}
    async selectHobbies(hobbies) {
        const map = {
            'Sports': '#hobbies-checkbox-1',
            'Reading': '#hobbies-checkbox-2',
            'Music': '#hobbies-checkbox-3',
            
        };
        if (map[hobbies]) {
            await this.page.locator(map[hobbies]).check();
        }

    }
    async uploadPicture(filePath) {
        if (filePath){
        await this.picture.setInputFiles(filePath);
    }
}
    async fillAddress(address) {
        if (address){
        await this.currentAddress.fill(address);
    }
}
    async selectStateAndCity(state, city) {
        if (state){
        await this.state.scrollIntoViewIfNeeded();
        await this.state.click();
        await this.page.getByText(state, { exact: true }).click();
        }
        if (city){
            
        await this.city.click();
        await this.page.getByText(city, { exact: true }).click();
        }
    }
    async clickSubmit() {
        await this.submit.click();
    }
    verifyForm() { 
        // await expect(this.submitTheForm).toBeVisible();
        return this.submitTheForm;
    }
}