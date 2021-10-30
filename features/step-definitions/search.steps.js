import { Given, When, Then} from '@wdio/cucumber-framework';

import HomePage from '../pageobjects/home.page';
import CommonPage from '../pageobjects/common.page';
import SearchPage from '../pageobjects/search.page';

When(/^I filter by (.+), (.+) and (.+)$/, async (Price, Color, Condition) => {
    await SearchPage.applyFilter(Price, Color, Condition)
});

When(/^user select a product with (.+) SKU$/, async (ProductSKU) => {
    await SearchPage.selectProduct(ProductSKU);
});