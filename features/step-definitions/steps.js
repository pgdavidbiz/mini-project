import { Given, When, Then } from '@wdio/cucumber-framework';

/* import LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

const pages = {
    login: LoginPage
} 

Given(/^I am on the (\w+) page$/, async (page) => {
   await pages[page].open()
   //await page.open()
    
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
}); */

import HomePage from '../pageobjects/home.page';
import CommonPage from '../pageobjects/common.page';
import searchPage from '../pageobjects/search.page';
//import Page from '../pageobjects/page';

const pages = {
    home: HomePage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
    //CommonPage.openHomePage();
    //await browser.pause(60000)
    HomePage.siteLogo.click({force: true});

    await expect(HomePage.inputSearch).toBeDisplayed();
    await expect(HomePage.searchIcon).toBeDisplayed();
    await expect(HomePage.siteLogo).toBeDisplayed();
    
});

When(/^I search with (\w+) and click Search Button$/, async (SearchedItem) => {
    
    await HomePage.searchItem(SearchedItem)
});

When(/^I filter by <Price>, <Condition> and <Color> $/, async () => {
    await searchPage.selectFilterByText(Price)
    await searchPage.selectFilterByText(Color)
    await searchPage.selectFilterByText(Condition)
});



