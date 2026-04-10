const {test, expect} = require('@playwright/test');
const {Homepage} = require('../../pages/homepage');
const {ElementsPage} = require('../../pages/elementspage');
const {ButtonsPage} = require('../../pages/buttonspage');
test.describe('Buttons', () => {
    let homepage; 
    let elementspage;
    let buttonspage;
    test.beforeEach(async ({ page }) => {
        // Initialize page objects
        homepage = new Homepage(page);  
        elementspage = new ElementsPage(page);
        buttonspage = new ButtonsPage(page);
        // Navigate to the homepage
        await homepage.goto();
        await homepage.clickElements();
        await elementspage.clickButtons();
    });
    test('TC01: Double Click Button', async () => {
        await buttonspage.doubleClick();
        await buttonspage.verifyDoubleClickMessage();
    });
    test('TC02: Right Click Button', async () => {
        await buttonspage.rightClick();
        await buttonspage.verifyRightClickMessage();
    });
    test('TC03: Click Me Button', async () => {
        await buttonspage.clickMe();
        //ghi log
        console.log ("êieiieie")
        
        await buttonspage.verifyClickMeMessage();
    });
   // Debug - in ra text của tất cả button
test('TC03 debug', async ({ page }) => {
    const buttons = page.getByRole('button')
    const count = await buttons.count()
    
    for (let i = 0; i < count; i++) {  
        const text = await buttons.nth(i).textContent()
        console.log(`Button ${i}: "${text}"`)
    }

    
})
}) 