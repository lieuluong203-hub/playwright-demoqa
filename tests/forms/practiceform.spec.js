const {test,expect} = require('@playwright/test');
const { Homepage } = require('../../pages/homepage');
const { Formspage } = require('../../pages/formspage');
const { PracticeFormPage } = require('../../pages/practiceformpage');
const testData = require('../../test-data/QA/practiceFormData.json');

test.describe('Practice Form', () => {
    let homepage;
    let formspage
    let practiceformpage
    
    test.beforeEach(async ({ page }) => {
        homepage = new Homepage(page);
        formspage = new Formspage (page);
        practiceformpage = new PracticeFormPage(page);

        await homepage.goto();
        await homepage.clickForms();
        await formspage.clickPracticeForm();
    });
    test ("TC01: verify information validation", async () => {
        await practiceformpage.fillBasicInfo(
            testData.form01.firstName,
            testData.form01.lastName,
            testData.form01.userEmail,
            testData.form01.mobile
        );
        await practiceformpage.selectGender(testData.form01.gender);
        await practiceformpage.selectDateOfBirth(testData.form01.dateOfBirth);
        await practiceformpage.selectSubjects(testData.form01.subjects);
        await practiceformpage.selectHobbies(testData.form01.hobbies);
        await practiceformpage.uploadPicture(testData.form01.picturePath);
        await practiceformpage.fillAddress(testData.form01.address);
        await practiceformpage.selectStateAndCity(testData.form01.state, testData.form01.city);
    
        await practiceformpage.clickSubmit();
        await expect(practiceformpage.verifyForm()).toBeVisible();
        
    })
    test ("TC02: verify information validation", async () => {
        await practiceformpage.fillBasicInfo(
            testData.form02.firstName,
            testData.form02.lastName,
            testData.form02.userEmail,
            testData.form02.mobile
        );
        await practiceformpage.selectGender(testData.form02.gender);
        await practiceformpage.selectDateOfBirth(testData.form02.dateOfBirth);
        await practiceformpage.selectSubjects(testData.form02.subjects);
        await practiceformpage.selectHobbies(testData.form02.hobbies);
        await practiceformpage.uploadPicture(testData.form02.picturePath);
        await practiceformpage.fillAddress(testData.form02.address);
        await practiceformpage.selectStateAndCity(testData.form02.state, testData.form02.city);
    
        await practiceformpage.clickSubmit();
        await expect(practiceformpage.verifyForm()).not.toBeVisible();
        
    })
})
