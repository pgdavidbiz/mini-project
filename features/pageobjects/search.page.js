//import Page from './page';
/**
 * Home page containing specific selectors and methods 
 */

 class SearchPage {
    /**
     * define selectors using getter methods
     */

    get sameDayPickupCheckbox () { return $('#store-pickup-pickuptoday') }
    get minPriceFilter () { return $('#min-currentprice_facet-input') }
    get maxPriceFilter () { return $('#mafacet-input') }
    get brandSearchFilter () { return $('brand_facet-search-bar-input') }
    

    

    /**
     * a method to search by entering search text and clicking the search icon
     */



    async selectFilterByText (text) {
        const className = await $(`.facet-option-label-text=${text}`);
        await className.getText().click();
    } 

    async selectPickUpTodaye(text) {
        const className = await $(`.c-facet-text=${text}`);
        await className.getText().click();
        //await sameDayPickupCheckbox.click()
        //await browser.getElementText('.facet-option-label-text').match(string, text).click
    }

    async applyFilter (Price, Color, Condition) {
        await selectPickUpTodaye(Price);
        await selectPickUpTodaye(Color);
        await selectPickUpTodaye(Condition)

    }

    async selectProduct(ProductSKU) {
        const productClass = await $('sku-header');
        const linkText = await productClass.getAttribute('href').toInclude(`skuId=${ProductSKU}`);
        linkText.click();
    
    }

    /**
     * overwrite specifc options to adapt it to page object
     
     open () {
        return super.open();
    }*/

    
}
export default new SearchPage();