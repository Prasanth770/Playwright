const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pageObjects/LoginPage");
const { DashboardPage } = require("../pageObjects/DashboardPage");
const { CartPage } = require("../pageObjects/CartPage");
const { CheckOutPage } = require("../pageObjects/CheckOutPage");

test("Order Products", async ({ page }) => {
  //Variable declaration
  const iURL = "https://rahulshettyacademy.com/client/#/auth/login";
  const iUserName = "test3kfnv@test.com";
  const ipwd = "Password@123";
  const iReqProductName1 = "iphone 13 pro";
  const iReqProductName2 = "ZARA COAT 3";

  //Login
  const loginObject = new LoginPage(page);
  await loginObject.goToURL(iURL);
  await loginObject.login(iUserName, ipwd);

  console.log(`Page Tittle : ${await page.title()}`);
  //DashBoard Page
  const dashboardPage = new DashboardPage(page);
  await dashboardPage.GetAllProductDetails();
  await dashboardPage.AddtoCart(iReqProductName1);
  await dashboardPage.AddtoCart(iReqProductName2);

  //Cart Page
  const cartPage = new CartPage(page);
  await cartPage.GotoCart();
  await cartPage.checkProductInCart(iReqProductName1);

  //CheckOutPage
  const checkOutPage = new CheckOutPage(page);
  await checkOutPage.GotoCheckOut();
  await checkOutPage.FillCardNCopoun();
  await checkOutPage.SelectCountry(" India");
  await checkOutPage.PlaceOrder();

  // await page.pause();
});
