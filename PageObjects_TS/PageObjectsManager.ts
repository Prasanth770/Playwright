import { LoginPage } from "../PageObjects_TS/LoginPage";
import { DashboardPage } from "../PageObjects_TS/DashboardPage";
import { CartPage } from "../PageObjects_TS/CartPage";
import { CheckOutPage } from "../PageObjects_TS/CheckOutPage";
import { Page, Locator } from "@playwright/test";

export class PageOjectsManager {
  page: Page;
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  cartPage: CartPage;
  checkOutPage: CheckOutPage;
  constructor(page: Page) {
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
