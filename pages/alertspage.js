const {expect} = require('@playwright/test');

exports.AlertsPage = class AlertsPage {
    constructor(page) {
        this.page = page;
        this.url = '/alerts';
        this.alertBtn = page.locator('#alertButton');
        this.alertTime = page.locator('#timerAlertButton');
        this.alertConfirm = page.locator('#confirmButton');
        this.alertPrompt = page.locator('#promtButton'); 
        this.confirmResult = page.locator('#confirmResult');  
        this.promptResult = page.locator('#promptResult');
     
  }
    async goto() {
        await this.page.goto(this.url);
    }
    async clickAlerts() {
        await this.alertBtn.click();
        //chờ sau 5s
        await this.page.waitForTimeout(5000);
    }
    async clickAlertTime() {
        await this.alertTime.click();
    }
    async clickAlertConfirm() {
        await this.alertConfirm.click();
    }
    async handleConfirm(action = 'accept') { 
    this.page.once('dialog', async dialog => { 
      expect(dialog.message()).toBe('Do you confirm action?');
      action === 'accept'
        ? await dialog.accept()
        : await dialog.dismiss();
    });
  }
    async clickAlertPrompt() {
        await this.alertPrompt.click();
    }
    // code clean cho 2 case prompt accept/dismiss
    async handlePrompt(text='',action = 'accept') {
        this.page.once('dialog', async dialog => {
          expect(dialog.message()).toBe('I am a JS Confirm');
          if (action === 'accept') {
            await dialog.accept(text);
          }
          else{
            await dialog.dismiss();
          }
            
        });
      }
    
};