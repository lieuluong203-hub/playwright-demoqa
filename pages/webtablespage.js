const { expect } = require('@playwright/test');
exports.WebTablesPage = class WebTablesPage {
    constructor(page) {
        this.page = page;
        this.url = ('/webtables');
        //Add btn
        this.addButton = page.locator('#addNewRecordButton');
        //Form fields (thêm/edit)
        this.firstNameInput = page.locator('#firstName');
        this.lastNameInput = page.locator('#lastName');
        this.emailInput = page.locator('#userEmail');
        this.ageInput = page.locator('#age');
        this.salaryInput = page.locator('#salary');
        this.departmentInput = page.locator('#department');
        this.submitButton = page.locator('#submit');
        this.modalDialog = page.locator('.modal-content'); // Giả sử modal form có class 'modal-content'
        //Table 
        this.table = page.locator('tbody'); 
        this.tablerows = page.locator('tbody tr');
        //Search box
        this.searchBox = page.locator('#searchBox');
        this.iconSearch = page.locator('#basic-addon2');
        //Edit and delete
        // Giả sử nút edit có class 'edit' bên trong một container có class 'action-buttons'



    }
    async goto() {
        await this.page.goto(this.url);
    }
    async addButtonClick() {
        await this.addButton.click();
    }
    async fillForm(firstName, lastName, email, age, salary, department) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.emailInput.fill(email);
        await this.ageInput.fill(age);
        await this.salaryInput.fill(salary);
        await this.departmentInput.fill(department);
    }
    async submitForm() {
        await this.submitButton.click();
    }
    async verifyRecordAdded(firstName, lastName, email, age, salary, department) {
        const newRow = this.tablerows.last(); // Giả sử bản ghi mới được thêm vào cuối bảng
        await expect(newRow).toContainText(firstName);
        await expect(newRow).toContainText(lastName);
        await expect(newRow).toContainText(email);
        await expect(newRow).toContainText(age);
        await expect(newRow).toContainText(salary);
        await expect(newRow).toContainText(department);
    }
    async verifyModalStillOpen() {// Hàm này kiểm tra nếu modal form vẫn còn mở sau khi submit với dữ liệu không hợp lệ
 await expect(this.modalDialog).toBeVisible();
    }
    async searchRecord(keyword) {
        await this.searchBox.fill(keyword);
        await this.iconSearch.click(); // Giả sử có một nút search bên cạnh ô input để kích hoạt tìm kiếm
    
    }
    //  có ít nhất một hàng hiển thị sau khi tìm kiếm với từ khóa tồn tại
    async verifySearchResult(keyword) {
        await expect(this.table).toContainText(keyword);
    }

        
        // sau khi tìm kiếm với từ khóa không tồn tại
    async verifyNoSearchResult(keyword) {
        await expect (this.table).not.toContainText(keyword);


       
    }

        


}