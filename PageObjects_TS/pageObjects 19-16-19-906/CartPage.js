class CartPage {
  constructor(page) {
    this.page = page;
    this.cart = page.locator("[routerlink*='cart']");
    this.cartTittles = page.locator("div li");
  }

  async GotoCart() {
    await this.cart.click();
    await this.cartTittles.last().waitFor();
  }

  async checkProductInCart(productName) {
    const cartProductNames = await this.page
      .locator(`h3:has-text('${productName}')`)
      .isVisible();
    // expect(cartProductNames).toBeTruthy();
  }
}

module.exports = { CartPage };
