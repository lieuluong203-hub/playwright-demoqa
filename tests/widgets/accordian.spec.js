const {test, expect} = require('@playwright/test');
const { Homepage } = require('../../pages/homepage');
const {WidgetsPage} = require('../../pages/widgets');
const {AccordionPage} = require('../../pages/accordianpage');

test.describe('Widgets', () => {
    let homepage;
    let widgetsPage;
    let accordionPage;

    test.beforeEach(async ({ page }) => {
        homepage = new Homepage(page);
        widgetsPage = new WidgetsPage(page);
        accordionPage = new AccordionPage(page);
        await homepage.goto();
        await homepage.clickWidgets();
        await widgetsPage.clickAccordion();
    }
    );

    test('TC: Widgets - Accordian', async () => {
        await accordionPage.openSection1();
        console.log('Clicked on Section 1');
        await expect(accordionPage.section1Content).toBeVisible();
        const text = await accordionPage.getSection1Content();
        expect(text).toContain('Lorem Ipsum');
        await accordionPage.closeSection1();
        console.log('Closed Section 1');
        await expect(accordionPage.section1Content).not.toBeVisible();
    });
});
