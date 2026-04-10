const {test, expect} = require('@playwright/test');
const {Homepage} = require('../../pages/homepage');
const {ElementsPage} = require('../../pages/elementspage');
const {Linkspage} = require('../../pages/linkpage');
test.describe('Links',()=>{
    let homepage;
    let elementspage;
    let linkspage;
    test.beforeEach(async ({ page }) => {
        // Initialize page objects
        homepage = new Homepage(page);
        elementspage = new ElementsPage(page);
        linkspage = new Linkspage(page);
        // Navigate to the homepage
        await homepage.goto();
        await homepage.clickElements();
        await elementspage.clickLinks();
    });

test ('TC01:Verify Home link open new tab',async ({context})=>{ 
    // bắt tab mới +click cùng lúc
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        linkspage.clickHome()
    ])
    // chờ cho page load xong
  await newPage.waitForLoadState();
  // check url
  await expect(newPage).toHaveURL('https://demoqa.com/');
    // close tab
    await newPage.close();
})
test ('TC02: Verify Created link ', async () => {
    await linkspage.clickCreated();
    await linkspage.verifyCreated();
})



})