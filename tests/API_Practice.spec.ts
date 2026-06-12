import { test, expect, request } from "@playwright/test";

let cat = "ladders";
let toolid = 1709;

test.describe("API Tests", () => {
  test("API Status test", async ({}) => {
    const apiContext = await request.newContext();
    const responsce = await apiContext.get("/status");
    const jsonResponsce = await responsce.json();
    console.log(jsonResponsce);
    expect(jsonResponsce.status).toBe("UP");
    expect(responsce.status()).toBe(200);
  });
  test("return All Tools", async ({}) => {
    const apiContext1 = await request.newContext();
    const res1 = await apiContext1.get("/tools", {
      params: {
        category: "ladders",
        results: 1,
      },
    });
    const JSONRes1 = await res1.json();
    console.log(JSONRes1);
    expect.soft(res1.status()).toBe(200);
    expect.soft(JSONRes1[0].category).toEqual(cat);
    expect(JSONRes1[0]).toHaveProperty("category");
    expect(JSONRes1[0]).toHaveProperty("category", cat);
  });
  test("get a single tool details", async ({}) => {
    const rescon1 = await request.newContext();
    const res2 = await rescon1.get(`/tools/${toolid}`, {
      params: {
        "user-manual": true,
      },
    });
    const jsonres2 = await res2.json();
    console.log(jsonres2);
  });
});
