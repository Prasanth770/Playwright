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
      let pnameloop = await this.allProductsCards
        .nth(i)
        .locator("b")
        .textContent();
      if (pnameloop === productName) {
        await this.allProductsCards
          .getByRole("button", { name: " Add To Cart" })
          .nth(i)
          .click();
        break;
      }
    }
  }
}
module.exports = { DashboardPage };
