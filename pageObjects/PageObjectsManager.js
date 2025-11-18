const { LoginPage } = require("../pageObjects/LoginPage");
const { DashboardPage } = require("../pageObjects/DashboardPage");
const { CartPage } = require("../pageObjects/CartPage");
const { CheckOutPage } = require("../pageObjects/CheckOutPage");

class PageOjectsManager {
  constructor(page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
    this.dashboardPage = new DashboardPage(page);
    this.cartPage = new CartPage(page);
    this.checkOutPage = new CheckOutPage(page);
  }
  getLoginPage() {
    return this.loginPage;
  }
  getDashboardPage() {
    return this.dashboardPage;
  }
  getCartPage() {
    return this.cartPage;
  }
  getCheckOutPage() {
    return this.checkOutPage;
  }
}
module.exports = { PageOjectsManager };
