import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 40 * 1000,
  // reporter: "html",
  reporter: [
    ["line"], // Console output
    [
      "allure-playwright",
      {
        detail: true,
        outputFolder: "allure-results",
        suiteTitle: false,
      },
    ],
  ],
  workers: 5,
  retries: 1,
  projects: [
    {
      name: "Chrome",
      use: {
        ...devices["Desktop Chrome"],
        screenshot: "on",
        trace: "on",
        video: "retain-on-failure",
      },
    },
  ],

  // use: {
  //   browserName: "chromium",
  //   headless: false,
  // },

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
