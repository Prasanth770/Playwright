import { expect } from "@playwright/test";
import { test } from "../tests/practice";

test("logged user check", async ({ loginPage, page }) => {
  // await loginPage.

  await loginPage.page.waitForTimeout(5000);
  await expect.soft(loginPage.page).toHaveTitle("Let's Shop");
});
