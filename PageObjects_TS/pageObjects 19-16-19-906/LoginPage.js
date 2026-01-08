class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginBtn = page.locator("input[id='login']");
    this.userName = page.locator("#userEmail");
    this.userPwd = page.locator("#userPassword");
  }
  async goToURL(URL) {
    await this.page.goto(URL);
  }

  async login(UserName, Password) {
    await this.userName.type(UserName);
    await this.userPwd.type(Password);
    await this.loginBtn.click();
    await this.page.waitForLoadState("networkidle");
  }
}

module.exports = { LoginPage };
