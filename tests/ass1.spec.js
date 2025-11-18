const { test } = require("@playwright/test");

test("Create a new User & Login", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  const title = await page.title();
  const email = "test9012@test.com";
  const pwd = "Password@123";
  console.log("Page Tittle ", title);

  //SignUp
  await page.locator(".text-reset").click();
  await page.locator("#firstName").fill("testfn");
  await page.locator("#lastName").fill("testln");
  await page.locator("#userMobile").fill("9123456789");
  await page.locator("#userEmail").fill(email);
  // await page.locator(".mt-3 ng-valid ng-dirty ng-touched").click();
  await page.locator("#userPassword").fill(pwd);
  await page.locator("#confirmPassword").fill(pwd);
  await page
    .locator(".custom-select.ng-untouched.ng-pristine.ng-valid")
    .selectOption("3: Engineer");
  await page.locator("input[value='Female']").click();
  await page.locator("input[type='checkbox']").click();
  await page.locator("#login").click();
  const msg = await page.locator(".headcolor").textContent();
  console.log(msg);
  // page.pause();
  await page.getByRole("button", { name: "Login" }).click();

  //Login
  await page.locator("#userEmail").fill(email);
  await page.locator("#userPassword").fill(pwd);
  await page.locator("input[id='login']").click();
  // await page.pause();

  const allProductNames = await page.locator(".card-body b");
  await allProductNames.first().waitFor();
  const pnames = await allProductNames.allTextContents();
  await console.log(pnames);

  // await page.locator("").fill("");
});
