const { test, expect } = require('@playwright/test');
const { MenuPage } = require('../../pages/menupage');

test.describe('Menu Widget Tests', () => {
    let menuPage;

    test.beforeEach(async ({ page }) => {
        menuPage = new MenuPage(page);

        // Điều hướng trực tiếp tới trang Menu
        await menuPage.goto();
        
        // Tắt tất cả CSS transitions & animations để tránh lỗi hover do phần tử chuyển động (not stable)
        await page.addStyleTag({
            content: `
                *, *::before, *::after {
                    transition: none !important;
                    animation: none !important;
                    transition-duration: 0s !important;
                    animation-duration: 0s !important;
                }
            `
        });

        // Chờ URL chứa /menu để đảm bảo trang tải xong
        await expect(page).toHaveURL(/.*menu/);
    });

    test('TC01: Verify default menu state (Level 1 visible, Level 2/3 hidden)', async () => {
        // Cấp 1 phải hiển thị
        await expect(menuPage.mainItem1).toBeVisible();
        await expect(menuPage.mainItem2).toBeVisible();
        await expect(menuPage.mainItem3).toBeVisible();

        // Cấp 2 và Cấp 3 phải ẩn mặc định
        await expect(menuPage.subItem1).toBeHidden();
        await expect(menuPage.subItem2).toBeHidden();
        await expect(menuPage.subSubList).toBeHidden();
        await expect(menuPage.subSubItem1).toBeHidden();
        await expect(menuPage.subSubItem2).toBeHidden();
    });

    test('TC02: Hover Main Item 2 to show Sub Items (Level 2)', async () => {
        // Hover vào Main Item 2
        await menuPage.hoverMainItem2();

        // Cấp 2 phải hiển thị
        await expect(menuPage.subItem1).toBeVisible();
        await expect(menuPage.subItem2).toBeVisible();
        await expect(menuPage.subSubList).toBeVisible();

        // Cấp 3 vẫn phải ẩn
        await expect(menuPage.subSubItem1).toBeHidden();
        await expect(menuPage.subSubItem2).toBeHidden();
    });

    test('TC03: Hover SUB SUB LIST to show Sub Sub Items (Level 3)', async () => {
        // Hover Main Item 2 rồi hover SUB SUB LIST
        await menuPage.hoverMainItem2();
        await menuPage.hoverSubSubList();

        // Cấp 3 phải hiển thị
        await expect(menuPage.subSubItem1).toBeVisible();
        await expect(menuPage.subSubItem2).toBeVisible();
    });

    test('TC04: Move mouse out of Menu to hide all sub-menus', async () => {
        // Mở hết các cấp menu
        await menuPage.hoverMainItem2();
        await menuPage.hoverSubSubList();

        // Đảm bảo cấp 3 đang hiển thị
        await expect(menuPage.subSubItem1).toBeVisible();

        // Di chuyển chuột hoàn toàn ra ngoài Menu (hover vào tiêu đề trang "Menu")
        await menuPage.pageHeading.hover();

        // Tất cả sub-menu và sub-sub-menu phải tự động ẩn đi
        await expect(menuPage.subItem1).toBeHidden();
        await expect(menuPage.subSubItem1).toBeHidden();
    });

    test('TC05: Fast Hovering between Main Items', async () => {
        // Di chuyển chuột nhanh liên tục qua các mục chính để test độ mượt của UI
        await menuPage.mainItem1.hover();
        await menuPage.mainItem2.hover();
        await menuPage.mainItem3.hover();
        await menuPage.mainItem2.hover();

        // Menu cấp 2 vẫn phải hiển thị đúng sau chuỗi hành động nhanh
        await expect(menuPage.subItem1).toBeVisible();
        await expect(menuPage.subSubList).toBeVisible();
    });

    test('TC06: Keyboard Accessibility focus check', async ({ page }) => {
        // Focus trực tiếp vào Main Item 1 bằng bàn phím
        await menuPage.mainItem1.focus();
        await expect(menuPage.mainItem1).toBeFocused();

        // Nhấn phím Tab để chuyển sang phần tử tiếp theo (Main Item 2)
        await page.keyboard.press('Tab');
        await expect(menuPage.mainItem2).toBeFocused();
    });
});
