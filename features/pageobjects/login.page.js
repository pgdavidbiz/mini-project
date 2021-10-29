import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('#username') }
    get inputPassword () { return $('#password') }
    get btnSubmit () { return $('button[type="submit"]') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

     //async clickbutton(text){
        //const button = $('button[type="submit"]');
        //button.getText().toInclude(text).click();
        //button.click();
       //browser.getElementText('.fa.fa-2x.fa-sign-in', text).click
       //browser.e
       //$("button[type='submit']").$(`./*button[type='submit'::*[contains(test(), ${text})]]`).click();
    
   // }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        //this.clickbutton('Login');
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open();
    }

    
}

export default new LoginPage();
