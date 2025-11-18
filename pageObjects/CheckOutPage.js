class CheckOutPage {
  constructor(page) {
    this.page = page;
    this.checkOut = page.locator("text=Checkout");
    this.cardcvv = page.locator('div.field.small >> input[class="input txt"]');
    this.cardName = page.getByRole("textbox").nth(2);
    this.couponCodeTextBox = page.locator("[name='coupon']");
    this.couponCodeApply = page.locator("[type='submit']");
    this.selectCountry = page.getByRole("textbox", { name: "Select Country" });
    this.selectCountryOptions = page.locator(".ta-results");
    this.placeOrder = page.getByText("Place Order");
  }
  async GotoCheckOut() {
    await this.checkOut.click();
  }
  async FillCardNCopoun() {
    //card details
    await this.cardcvv.fill("879");
    await this.cardName.fill("Test Member");

    //copoun
    await this.couponCodeTextBox.fill("rahulshettyacademy");
    await this.couponCodeApply.click();
  }
  async SelectCountry(countryName) {
    await this.selectCountry.pressSequentially(
      countryName.trim().substring(0, 3)
    );
    await this.selectCountryOptions.waitFor();
    await this.selectCountryOptions
      .getByText(countryName, { exact: true })
      .click();
  }
  async PlaceOrder() {
    await this.placeOrder.waitFor();
    await this.placeOrder.click();
  }
}
module.exports = { CheckOutPage };
