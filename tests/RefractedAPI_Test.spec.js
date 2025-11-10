const { test, expect, request } = require("@playwright/test");
const { API_utils } = require("./utils/API_utils");

const loginPayLoadData = {
  userEmail: "test9012@test.com",
  userPassword: "Password@123",
};
const createOrderPayLoadData = {
  orders: [{ country: "India", productOrderedId: "68a961719320a140fe1ca57c" }],
};
const iphone13proPID = "68a961959320a140fe1ca57e";
const addidasShoePD = "68a961719320a140fe1ca57c";

let response = {};

test.beforeAll(async () => {
  const api_context = await request.newContext();
  const API_Utils1 = new API_utils(
    api_context,
    loginPayLoadData,
    createOrderPayLoadData
  );
  response.token = await API_Utils1.Logintokengenerator();
  response = await API_Utils1.createOrder(createOrderPayLoadData);
  console.log(`Order Placed : ${response.orderId}`);
});

test("Order", async ({ page }) => {
  await page.addInitScript((value) => {
    window.localStorage.setItem("token", value);
  }, response.token);
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  await page.getByRole("button", { name: "  ORDERS" }).click();
  // await page.pause();
  let allOrderId = await page.locator("tbody tr th").allTextContents();
  console.log(allOrderId);
  console.log(allOrderId.includes(response.orderId));
  console.log(allOrderId.indexOf(response.orderId));
});
