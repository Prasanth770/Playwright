import { Page, Locator } from "@playwright/test";
export class LoginPage {
  page: Page;
  loginBtn: Locator;
  userName: Locator;
  userPwd: Locator;
  constructor(page: Page) {
    this.page = page;
    this.loginBtn = page.locator("input[id='login']");
    this.userName = page.locator("#userEmail");
    this.userPwd = page.locator("#userPassword");
  }
  async goToURL(URL: string) {
    await this.page.goto(URL);
  }

  async login(UserName: string, Password: string) {
    await this.userName.fill(UserName);
    await this.userPwd.fill(Password);
    await this.loginBtn.click();
    await this.page.waitForLoadState("networkidle");
  }
}

module.exports = { LoginPage };
