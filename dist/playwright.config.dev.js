"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _test = require("@playwright/test");

var _default = (0, _test.defineConfig)({
  testDir: './tests',
  timeout: 40 * 1000,
  reporter: 'html',
  use: {
    browserName: 'chromium',
    headless: false
  }
  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },

});

exports["default"] = _default;