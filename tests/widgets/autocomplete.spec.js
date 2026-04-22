const {test, expect} = require('@playwright/test');
const {AutocompletePage} = require('../../pages/autocompletepage');

test.describe('Widgets-Autocomplete', () => {
    let autocompletePage;

    test.beforeEach(async ({ page }) => {
        autocompletePage = new AutocompletePage(page);
        await autocompletePage.goto();
    }
    );

    test('TC01: select 1 color in multi select', async ({page}) => {
        await autocompletePage.multiSelectColor('Gr');
        await expect (autocompletePage.selectValue).toContainText ('Green');
        
    });
    test('TC02: Verify multi select color', async ({page}) => {
        await autocompletePage.multiSelectColor('Green');
        await autocompletePage.multiSelectColor('Red');
        await expect (autocompletePage.selectValue).toContainText (['Green', 'Red']);
        
    });
    test('TC03: remove color in multi select', async ({page}) => {
       await autocompletePage.multiSelectColor('Green');
        await autocompletePage.multiSelectColor('Red');
        await autocompletePage.removeColor('Green');
        console.log('remove: Green');
        await expect (autocompletePage.selectValue).not.toContainText (['Green']);
        
    });
    test ('TC04: select color in single select', async ({page}) => {
        await autocompletePage.singleSelectColor('Red');
        await expect (autocompletePage.singleSelectedValue).toHaveText ('Red');
         
        
    });
});