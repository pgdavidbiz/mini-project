import { Given, When, Then } from "@wdio/cucumber-framework";


import ProductPage from "../pageobjects/product.page";



/* When(/^user enters featured program as (.+) in Search field and click Search Button$/, async (searcheditem, callback) {
    
}); */

Then(/^Product details is displayed$/, async(ProductSKU) =>{
    await expect(ProductPage.pageUrl).toHaveUrlContaining(`skuId=${ProductSKU}`)

});

