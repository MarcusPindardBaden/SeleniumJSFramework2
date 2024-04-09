const { $ } = require('@wdio/globals')
const Page = require('./herokupage');

class LoginPage extends Page  {

    get content(){
        return $('div[id="content"]'); 
    }

    get usernameInput(){
        return $('input[id="username"]');
    }

    get passwordInput(){
        return $('input[id="password"]');
    }

    get loginButton(){
        return $('button=Login');
    }

    get logoutButton(){
        return $('a=Logout');
    }

    get flashMessage(){
        return $('div[id="flash"]');
    }



    async enterLoginDetails(username, password){
        (await this.usernameInput).addValue(username);
        (await this.passwordInput).addValue(password);
        (await this.loginButton).click();
    };

    async getFlashText(){
        return this.flashMessage.getText();
    };
}

module.exports = new LoginPage();