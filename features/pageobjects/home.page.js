//import Page from './page';
/**
 * Home page containing specific selectors and methods 
 */

class HomePage {
    /**
     * define selectors using getter methods
     */
    get siteLogo () { return $('.logo')}
    get inputSearch () { return $('#gh-search-input') }
    get searchIcon () { return $('.header-search-icon') }
    get clearButton () { return $('.Close_Cancel_Line') }

    /**
     * a method to search by entering search text and clicking the search icon
     */

    async searchItem (SearchedItem) {
        await this.inputSearch.click();
        await this.inputSearch.setValue(SearchedItem);
        await this.searchIcon.click();
    } 
    
    /**
     * overwrite specifc options to adapt it to page object
     
     open () {
        return super.open();
    }*/
    
}
export default new HomePage();