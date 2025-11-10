class API_utils {
  constructor(api_context, loginPayLoadData) {
    this.api_context = api_context;
    this.loginPayLoadData = loginPayLoadData;
  }
  async Logintokengenerator() {
    const loginAPI_URL = "https://rahulshettyacademy.com/api/ecom/auth/login";
    const LoginAPI_res = await this.api_context.post(loginAPI_URL, {
      data: this.loginPayLoadData,
    });
    const loginJSON_res = await LoginAPI_res.json();
    const token = loginJSON_res.token;
    // console.log(token);
    return token;
  }
  async createOrder(createOrderPayLoadData) {
    let response = {};
    response.token = await this.Logintokengenerator();
    const createOrder_URL =
      "https://rahulshettyacademy.com/api/ecom/order/create-order";
    const reateOrder_resp = await this.api_context.post(createOrder_URL, {
      data: createOrderPayLoadData,
      headers: {
        Authorization: response.token,
        "content-type": "application/json",
      },
    });
    const CreateOrder_Json = await reateOrder_resp.json();
    response.orderId = await CreateOrder_Json.orders[0];
    return response;
  }
}
module.exports = { API_utils };
