import { test, expect, request } from "@playwright/test";
const loginPayLoadData = {
  userEmail: "test3kfnv@test.com",
  userPassword: "Password@123",
};
const createOrderPayLoadData = {
  orders: [{ country: "Cuba", productOrderedId: "68a961719320a140fe1ca57c" }],
};
let token;
let orderId;
const iphone13proPID = "68a961959320a140fe1ca57e";
const addidasShoePD = "68a961719320a140fe1ca57c";

test.beforeAll(async () => {
  const API_Request = await request.newContext();
  const response = await API_Request.post(
    "https://rahulshettyacademy.com/api/ecom/auth/login",
    {
      data: loginPayLoadData,
    }
  );
  expect(response.ok()).toBeTruthy();
  const loginJSONresponse = await response.json();
  token = loginJSONresponse.token;
  console.log(token);
  const response1 = await API_Request.post(
    "https://rahulshettyacademy.com/api/ecom/order/create-order",
    {
      data: createOrderPayLoadData,
      headers: {
        Authorization: token,
        "content-type": "application/json",
      },
    }
  );
  const co_json_responsce = await response1.json();
  orderId = await co_json_responsce.orders[0];
  console.log(orderId);
});

test.only("API for Login", async ({ page }) => {
  await page.addInitScript((value) => {
    window.localStorage.setItem("token", value);
  }, token);

  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  await page.getByRole("button", { name: "  ORDERS" }).click();
  // await page.pause();
  let allOrderId = await page.locator("tbody tr th").allTextContents();
  console.log(allOrderId);
  console.log(allOrderId.includes(orderId));
  console.log(allOrderId.indexOf(orderId));
});
