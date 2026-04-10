const {expect} = require('@playwright/test');
exports.Linkspage = class Linkspage{
    constructor(page){
        this.page = page
        this.url= '/links' 
        this.home = page.locator('#simpleLink');
        this.creatd = page.locator('#created');
        this.outputCreated = page.locator('#linkResponse');


    }
    async goto(){
        await this.page.goto(this.url);
    }
    async clickHome(){
        await this.home.click();
    }
    async clickCreated(){
        await this.creatd.click();
    }
    async verifyCreated(){
        await expect (this.outputCreated).toBeVisible();
        await expect(this.outputCreated).toContainText('201');
        await expect(this.outputCreated).toContainText('Created');
        
    }



}



        

 
