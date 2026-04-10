const {expect} = require('@playwright/test');
exports.DownloadAndUploadPage = class DownloadAndUploadPage {
    constructor(page){
        this.page = page;
        this.download = page.locator('#downloadButton');
        this.upload = page.locator('#uploadFile');
        this.uploafFilePath = page.locator('#uploadedFilePath');

    }
async goto(){
    await this.page.goto(this.url);
}
async downloadFile(){
    //bắt sự kiện download
    const [download] = await Promise.all([
        this.page.waitForEvent('download'),
        this.download.click()
    ])
    //lấy tên file download
    const fileName = download.suggestedFilename();
   console.log('Downloaded file name: ',fileName);
    //lưu file
    await download.saveAs(`./Downloads/${fileName}`);
    return fileName;


}
async uploadFile(fileName){
    const filePath = `./tests/data/${fileName}`; // Path to your file
    await this.upload.setInputFiles(filePath); // Upload the file
   

    
}
}