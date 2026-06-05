const {test, expect} = require('@playwright/test');
const { TooltipsPage } = require('../../pages/tooltipspage');

test.describe('Tooltips', () => {
    let tooltipsPage;

    test.beforeEach(async ({ page }) => {
        tooltipsPage = new TooltipsPage(page);
        await tooltipsPage.goto();
    });
    test("TC01: Verify tooltip", async () => {
        await tooltipsPage.hoverTooltip();
        await expect(tooltipsPage.tooltip).toHaveText('You hovered over the Button');
    });
    test("TC02: Verify text tooltip", async () => {
        await tooltipsPage.hoverTextTooltip();
        await expect(tooltipsPage.textTooltip).toContainText('Contrary');
    });
    test ('TC03: Verify tooltip disappears', async () => {
        await tooltipsPage.hoverTooltip();
        console.log('Hovered over tooltip');
        //chờ 1 s
        await tooltipsPage.page.waitForTimeout(1000);
        
          await expect(
        tooltipsPage.tooltip
    ).toBeVisible();

    await tooltipsPage.page.mouse.move(
        0,
        0
    );

    await expect(
        tooltipsPage.tooltip
    ).toBeHidden();
    });

})