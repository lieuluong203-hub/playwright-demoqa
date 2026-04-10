const {test, expect} = require('@playwright/test');
const { Homepage } = require('../../pages/homepage');
const { ElementsPage } = require('../../pages/elementspage');
const { DownloadAndUploadPage } = require('../../pages/downloadanduploadpage');
 
test.describe ('Download and Upload File', () => {
let homepage;
let elementspage;
let downloadanduploadpage;
test.beforeEach(async ({ page }) => {
    homepage = new Homepage(page)
    elementspage = new ElementsPage(page)
    downloadanduploadpage = new DownloadAndUploadPage(page)
    
    await homepage.goto()
    await homepage.clickElements()
    await elementspage.clickUpAndDown()
})

test('TC01: Download a file', async () => {
    const fileName = await downloadanduploadpage.downloadFile()
    console.log('Downloaded file name: ',fileName);
    expect(fileName).toBe('sampleFile.jpeg');
    const fs = require('fs'); // Import the fs module check if the file exists
    expect(fs.existsSync(`./Downloads/${fileName}`)).toBeTruthy();

    
})   

test('TC02: Upload a file', async () => {
     const fileName = 'cat.jpg';
    await downloadanduploadpage.uploadFile(fileName);
    await expect (downloadanduploadpage.uploafFilePath).toContainText(fileName);


}) 

})