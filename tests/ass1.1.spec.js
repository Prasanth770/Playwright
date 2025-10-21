
const {test, expect} = require("@playwright/test")

test.only('check Order details 2' ,async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    // variable declaration
    const iUserName = "test3kfnv@test.com";
    const ipwd = "Password@123";
    const iReqProductName1 = 'iphone 13 pro';
    const iReqProductName2 = "ZARA COAT 3";
    // Login 
    console.log (await page.title());
    await page.locator("#userEmail").fill(iUserName);
    await page.locator("#userPassword").fill(ipwd);
    await page.locator("#login").click();

    // Products page  - return all product names and add products 
    // await page.waitForLoadState('domcontentloaded');
    const allProductsCards = page.locator('div.card-body');
    const allProductsNamesLoad = page.locator('div.card-body b');
    await allProductsNamesLoad.first().waitFor();
    
    const allProductNames = await allProductsNamesLoad.allTextContents();
    await console.log(...allProductNames);
    const allProductsCount  = await allProductsNamesLoad.count();
    await console.log(allProductsCount);
    
    for(let i =0; i < allProductsCount ; i++){
        
        let pnameloop = await allProductsCards.nth(i).locator('b').textContent();
        // await console.log(pnameloop);
        if(pnameloop === iReqProductName2) {
            // console.log('text1' + pnameloop);
            await allProductsCards.getByRole('button', { name: ' Add To Cart' }).nth(i).click();
           
        }

    }
    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").last().waitFor();
    const cartProductNames = await page.locator(`h3:has-text('${iReqProductName2}')`).isVisible();
    await console.log(cartProductNames);
    await expect(cartProductNames).toBeTruthy();

    await page.locator("text=Checkout").click();
    await page.locator('div.field.small >> input[class="input txt"]').fill("879");

    await page.locator("[name='coupon']").fill("rahulshettyacademy");
    await page.locator("[type='submit']").click();

    // await page.pause();


    //cart - return all items in cart & check the cart items 

    // Order lookup 




});