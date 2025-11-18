const { test, expect } = require("@playwright/test");
const { PageOjectsManager } = require("../pageObjects/PageObjectsManager");
const testdata = JSON.parse(
  JSON.stringify(require("../utils/PlacingOrderTestData.json"))
);
// json to String then string to JS - recommended
test.describe.configure({ mode: "serial" });

for (const data of testdata) {
  test(`@Smoke Place order using testData ${data.iReqProductName1}`, async ({
    page,
  }) => {
    //POMM
    const pageOjectsManager = new PageOjectsManager(page);

    //Login
    const loginObject = pageOjectsManager.getLoginPage();
    await loginObject.goToURL(data.iURL);
    await loginObject.login(data.iUserName, data.ipwd);

    console.log(`Page Tittle : ${await page.title()}`);
    //DashBoard Page
    const dashboardPage = pageOjectsManager.getDashboardPage();
    await dashboardPage.GetAllProductDetails();
    await dashboardPage.AddtoCart(data.iReqProductName1);
    //   await dashboardPage.AddtoCart(testdata.iReqProductName2);

    //Cart Page
    const cartPage = pageOjectsManager.getCartPage();
    await cartPage.GotoCart();
    await cartPage.checkProductInCart(data.iReqProductName1);

    //CheckOutPage
    const checkOutPage = pageOjectsManager.getCheckOutPage();
    await checkOutPage.GotoCheckOut();
    await checkOutPage.FillCardNCopoun();
    await checkOutPage.SelectCountry(data.icountry);
    await checkOutPage.PlaceOrder();

    //   await page.pause();
  });
}
