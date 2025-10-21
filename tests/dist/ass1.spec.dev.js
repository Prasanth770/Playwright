"use strict";

var _require = require('@playwright/test'),
    test = _require.test;

test('Navigate to page', function _callee(_ref) {
  var page, title, email, pwd, msg, allProductNames, pnames;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          page = _ref.page;
          _context.next = 3;
          return regeneratorRuntime.awrap(page["goto"]("https://rahulshettyacademy.com/client/#/auth/login"));

        case 3:
          _context.next = 5;
          return regeneratorRuntime.awrap(page.title());

        case 5:
          title = _context.sent;
          email = "test3kfnv@test.com";
          pwd = "Password@123";
          console.log('Page Tittle ', title); //SignUp 

          _context.next = 11;
          return regeneratorRuntime.awrap(page.locator(".text-reset").click());

        case 11:
          _context.next = 13;
          return regeneratorRuntime.awrap(page.locator("#firstName").fill("testfn"));

        case 13:
          _context.next = 15;
          return regeneratorRuntime.awrap(page.locator("#lastName").fill("testln"));

        case 15:
          _context.next = 17;
          return regeneratorRuntime.awrap(page.locator("#userMobile").fill("9123456789"));

        case 17:
          _context.next = 19;
          return regeneratorRuntime.awrap(page.locator("#userEmail").fill(email));

        case 19:
          _context.next = 21;
          return regeneratorRuntime.awrap(page.locator("#userPassword").fill(pwd));

        case 21:
          _context.next = 23;
          return regeneratorRuntime.awrap(page.locator("#confirmPassword").fill(pwd));

        case 23:
          _context.next = 25;
          return regeneratorRuntime.awrap(page.locator(".custom-select.ng-untouched.ng-pristine.ng-valid").selectOption("3: Engineer"));

        case 25:
          _context.next = 27;
          return regeneratorRuntime.awrap(page.locator("input[value='Female']").click());

        case 27:
          _context.next = 29;
          return regeneratorRuntime.awrap(page.locator("input[type='checkbox']").click());

        case 29:
          _context.next = 31;
          return regeneratorRuntime.awrap(page.locator("#login").click());

        case 31:
          _context.next = 33;
          return regeneratorRuntime.awrap(page.locator(".headcolor").textContent());

        case 33:
          msg = _context.sent;
          console.log(msg); // page.pause();

          _context.next = 37;
          return regeneratorRuntime.awrap(page.getByRole('button', {
            name: 'Login'
          }).click());

        case 37:
          _context.next = 39;
          return regeneratorRuntime.awrap(page.locator("#userEmail").fill(email));

        case 39:
          _context.next = 41;
          return regeneratorRuntime.awrap(page.locator("#userPassword").fill(pwd));

        case 41:
          _context.next = 43;
          return regeneratorRuntime.awrap(page.locator("input[id='login']").click());

        case 43:
          _context.next = 45;
          return regeneratorRuntime.awrap(page.pause());

        case 45:
          _context.next = 47;
          return regeneratorRuntime.awrap(page.locator(".card-body b"));

        case 47:
          allProductNames = _context.sent;
          _context.next = 50;
          return regeneratorRuntime.awrap(allProductNames.first().waitFor());

        case 50:
          _context.next = 52;
          return regeneratorRuntime.awrap(allProductNames.allTextContents());

        case 52:
          pnames = _context.sent;
          _context.next = 55;
          return regeneratorRuntime.awrap(console.log(pnames));

        case 55:
        case "end":
          return _context.stop();
      }
    }
  });
});