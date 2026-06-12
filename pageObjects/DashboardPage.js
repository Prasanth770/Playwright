class DashboardPage {
  constructor(page) {
    this.page = page;
    this.allProductsCards = page.locator("div.card-body");
    this.allProductsNamesLoad = page.locator("div.card-body b");
  }

  async GetAllProductDetails() {
    await this.allProductsNamesLoad.first().waitFor();
    console.log(
      `All Products - (${await this.allProductsNamesLoad.count()}) => ${(
        await this.allProductsNamesLoad.allTextContents()
      ).join(" | ")}`
    );
  }
  async AddtoCart(productName) {
    for (let i = 0; i < (await this.allProductsNamesLoad.count()); i++) {
      const productCard = this.allProductsCards.nth(i);
      const pnameloop = await productCard.locator("b").textContent();
      if (pnameloop === productName) {
        await productCard.getByRole("button", { name: /Add To Cart/i }).click();
        break;
      }
    }
  }
}
module.exports = { DashboardPage };
