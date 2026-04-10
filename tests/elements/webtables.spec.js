const {test, expect} = require('@playwright/test');
const {Homepage} = require('../../pages/homepage');
const {ElementsPage} = require('../../pages/elementspage');
const { WebTablesPage } = require('../../pages/webtablespage');
const testDataTable = require('../../test-data/QA/webtablesdata.json');

test.describe('Web Tables', () => {
    let homepage; 
    let elementspage;
    let webtablespage;  

    test.beforeEach(async ({ page }) => {
        // Initialize page objects
        homepage = new Homepage(page);
        elementspage = new ElementsPage(page);
        webtablespage = new WebTablesPage(page);
        // Navigate to the homepage
        await homepage.goto();
        await homepage.clickElements();
        await elementspage.clickWebTables();
    });
    test('TC01: Add a new record with valid data', async () => {
        await webtablespage.addButtonClick();
        await webtablespage.fillForm(
            testDataTable.wt01.firstName,
            testDataTable.wt01.lastName,
            testDataTable.wt01.email,
            testDataTable.wt01.age,
            testDataTable.wt01.salary,
            testDataTable.wt01.department
        );
        await webtablespage.submitForm();
        await webtablespage.verifyRecordAdded(
            testDataTable.wt01.firstName,
            testDataTable.wt01.lastName,
            testDataTable.wt01.email,
            testDataTable.wt01.age,
            testDataTable.wt01.salary,
            testDataTable.wt01.department
        );
        
    })
    test('TC02: Add a new record with invalid age', async () => {
        await webtablespage.addButtonClick();
        await webtablespage.fillForm(
            testDataTable.wt03.firstName,
            testDataTable.wt03.lastName,
            testDataTable.wt03.email,   
            testDataTable.wt03.age,
            testDataTable.wt03.salary,
            testDataTable.wt03.department
        );
        await webtablespage.submitForm();
        await webtablespage.verifyModalStillOpen();
    })

//Search tests
test('TC03: search for a non-existing record', async () => {
    await webtablespage.searchRecord(testDataTable.wt01.firstName);
    await webtablespage.verifyNoSearchResult(testDataTable.wt01.firstName);
})
test('TC04: search for an existing record', async () => {
    await webtablespage.searchRecord("2000");
    await webtablespage.verifySearchResult("2000");
})

        
})
