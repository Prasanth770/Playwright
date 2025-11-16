const { test, expect } = require("@playwright/test");
const { PageOjectsManager } = require("../pageObjects/PageObjectsManager");

test.only("Order Products", async ({ page }) => {
  //Variable declaration
  const iURL = "https://rahulshettyacademy.com/client/#/auth/login";
  const iUserName = "test3kfnv@test.com";
  const ipwd = "Password@123";
  const iReqProductName1 = "iphone 13 pro";
  const iReqProductName2 = "ZARA COAT 3";

  //POMM
  const pageOjectsManager = new PageOjectsManager(page);

  //Login
  const loginObject = pageOjectsManager.getLoginPage();
  await loginObject.goToURL(iURL);
  await loginObject.login(iUserName, ipwd);

  console.log(`Page Tittle : ${await page.title()}`);
  //DashBoard Page
  const dashboardPage = pageOjectsManager.getDashboardPage();
  await dashboardPage.GetAllProductDetails();
  await dashboardPage.AddtoCart(iReqProductName1);
  await dashboardPage.AddtoCart(iReqProductName2);

  //Cart Page
  const cartPage = pageOjectsManager.getCartPage();
  await cartPage.GotoCart();
  await cartPage.checkProductInCart(iReqProductName1);

  //CheckOutPage
  const checkOutPage = pageOjectsManager.getCheckOutPage();
  await checkOutPage.GotoCheckOut();
  await checkOutPage.FillCardNCopoun();
  await checkOutPage.SelectCountry(" India");
  await checkOutPage.PlaceOrder();

  await page.pause();
});
