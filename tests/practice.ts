import { test as base } from "@playwright/test";
import { LoginPage } from "../PageObjects_TS/LoginPage";

type MyFixtures = {
  loginPage: LoginPage;
  //   loggedInPage : page;
};
export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToURL(
      "https://rahulshettyacademy.com/client/#/auth/login",
    );
    await loginPage.login("test3kfnv@test.com", "Password@123");
    await use(loginPage);
  },
});

module.exports = { test };
