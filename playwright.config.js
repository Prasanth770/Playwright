import { defineConfig, devices } from "@playwright/test";
import { OutputFileType } from "typescript";

export default defineConfig({
  outputDir: `reports/testrun_${crypto.randomUUID().slice(0, 4)}`,
  testDir: "./tests",
  timeout: 40 * 1000,
  reporter: [
    [
      "html",
      {
        outputFolder: `reports/html-report_${crypto.randomUUID().slice(0, 4)}`,
        open: "always",
      },
    ],
  ],
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
    [
      "html",
      {
        open: "always",
      },
    ],
  ],
  workers: 4,
  retries: 0,
  fullyParallel: true,
  projects: [
    {
      name: "Chrome",
      use: {
        // storageState: "path",
        headless: false,
        fullyParallel: true,
        workers: 4,
        ...devices["Desktop Chrome"],
        browserName: "chromium",
        // channel: "chrome",
        screenshot: "on",
        popup: "off",

        // trace: "on",
        // video: "retain-on-failure",
      },
    },
  ],

  use: {
    baseURL: "https://simple-tool-rental-api.click",
    //   browserName: "chromium",
    //   headless: false,
  },

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
