import { Given, When, Then} from '@wdio/cucumber-framework';

import HomePage from '../pageobjects/home.page';
import CommonPage from '../pageobjects/common.page';

Given(/^I am on the home page$/, async () => {
    CommonPage.openHomePage();
    await HomePage.siteLogo.click({force: true});
    

    /* await expect(HomePage.inputSearch).toBeDisplayed();
    await expect(HomePage.searchIcon).toBeDisplayed();
    await expect(HomePage.siteLogo).toBeDisplayed(); */
    
});

When(/^I search with (\w+) and click Search Button$/, async (SearchedItem) => {
    await HomePage.searchItem(SearchedItem)
});



