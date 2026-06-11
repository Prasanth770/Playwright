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

// module.exports = { test };

// async function test() {
//   console.log(56);
//   console.log(57);
//   console.log(58);
//   await setTimeout(() => {
//     console.log(65);
//   }, 500);
//   console.log(59);
// }

// test();
