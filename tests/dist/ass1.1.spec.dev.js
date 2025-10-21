"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var _require = require("@playwright/test"),
    test = _require.test,
    expect = _require.expect;

test.only('check Order details 2', function _callee(_ref) {
  var _console;

  var page, iUserName, ipwd, iReqProductName1, iReqProductName2, allProductsCards, allProductsNamesLoad, allProductNames, allProductsCount, i, pnameloop, cartProductNames;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          page = _ref.page;
          _context.next = 3;
          return regeneratorRuntime.awrap(page["goto"]("https://rahulshettyacademy.com/client/#/auth/login"));

        case 3:
          // variable declaration
          iUserName = "test3kfnv@test.com";
          ipwd = "Password@123";
          iReqProductName1 = 'iphone 13 pro';
          iReqProductName2 = "ZARA COAT 3"; // Login 

          _context.t0 = console;
          _context.next = 10;
          return regeneratorRuntime.awrap(page.title());

        case 10:
          _context.t1 = _context.sent;

          _context.t0.log.call(_context.t0, _context.t1);

          _context.next = 14;
          return regeneratorRuntime.awrap(page.locator("#userEmail").fill(iUserName));

        case 14:
          _context.next = 16;
          return regeneratorRuntime.awrap(page.locator("#userPassword").fill(ipwd));

        case 16:
          _context.next = 18;
          return regeneratorRuntime.awrap(page.locator("#login").click());

        case 18:
          // Products page  - return all product names and add products 
          // await page.waitForLoadState('domcontentloaded');
          allProductsCards = page.locator('div.card-body');
          allProductsNamesLoad = page.locator('div.card-body b');
          _context.next = 22;
          return regeneratorRuntime.awrap(allProductsNamesLoad.first().waitFor());

        case 22:
          _context.next = 24;
          return regeneratorRuntime.awrap(allProductsNamesLoad.allTextContents());

        case 24:
          allProductNames = _context.sent;
          _context.next = 27;
          return regeneratorRuntime.awrap((_console = console).log.apply(_console, _toConsumableArray(allProductNames)));

        case 27:
          _context.next = 29;
          return regeneratorRuntime.awrap(allProductsNamesLoad.count());

        case 29:
          allProductsCount = _context.sent;
          _context.next = 32;
          return regeneratorRuntime.awrap(console.log(allProductsCount));

        case 32:
          i = 0;

        case 33:
          if (!(i < allProductsCount)) {
            _context.next = 43;
            break;
          }

          _context.next = 36;
          return regeneratorRuntime.awrap(allProductsCards.nth(i).locator('b').textContent());

        case 36:
          pnameloop = _context.sent;

          if (!(pnameloop === iReqProductName2)) {
            _context.next = 40;
            break;
          }

          _context.next = 40;
          return regeneratorRuntime.awrap(allProductsCards.getByRole('button', {
            name: ' Add To Cart'
          }).nth(i).click());

        case 40:
          i++;
          _context.next = 33;
          break;

        case 43:
          _context.next = 45;
          return regeneratorRuntime.awrap(page.locator("[routerlink*='cart']").click());

        case 45:
          _context.next = 47;
          return regeneratorRuntime.awrap(page.locator("div li").last().waitFor());

        case 47:
          _context.next = 49;
          return regeneratorRuntime.awrap(page.locator("h3:has-text('".concat(iReqProductName2, "')")).isVisible());

        case 49:
          cartProductNames = _context.sent;
          _context.next = 52;
          return regeneratorRuntime.awrap(console.log(cartProductNames));

        case 52:
          _context.next = 54;
          return regeneratorRuntime.awrap(expect(cartProductNames).toBeTruthy());

        case 54:
          _context.next = 56;
          return regeneratorRuntime.awrap(page.locator("text=Checkout").click());

        case 56:
          _context.next = 58;
          return regeneratorRuntime.awrap(page.locator('div.field.small >> input[class="input txt"]').fill("879"));

        case 58:
          _context.next = 60;
          return regeneratorRuntime.awrap(page.locator("[name='coupon']").fill("rahulshettyacademy"));

        case 60:
          _context.next = 62;
          return regeneratorRuntime.awrap(page.locator("[type='submit']").click());

        case 62:
        case "end":
          return _context.stop();
      }
    }
  });
});