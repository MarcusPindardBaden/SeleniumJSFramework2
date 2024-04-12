const { $ } = require('@wdio/globals')
const Page = require('./herokupage');

class LoginPage extends Page  {

    get content(){
        switch(process.env.OS){
            case "Desktop":
                return $('div[id="content"]'); 
            case "Android":
                const parentSelector = 'new UiSelector().resourceId("content")';
                const parent = $(`android=${parentSelector}`); 
                const childSelector = 'new UiSelector().className("android.widget.TextView")'
                return parent.$(`android=${childSelector}`)
        } 
    }

    get usernameInput(){
        switch(process.env.OS){
            case "Desktop":
                return $('input[id="username"]');
            case "Android":
                const selector = 'new UiSelector().resourceId("username")';
                return $(`android=${selector}`);
        } 
    }

    get passwordInput(){
        switch(process.env.OS){
            case "Desktop":
                return $('input[id="password"]');
            case "Android":
                const selector = 'new UiSelector().resourceId("password")';
                return $(`android=${selector}`);
        }
    }

    get loginButton(){
        switch(process.env.OS){
            case "Desktop":
                return $('button=Login');
            case "Android":
                const selector = 'new UiSelector().className("android.widget.Button")';
                return $(`android=${selector}`);
        }
    }

    get logoutButton(){
        switch(process.env.OS){
            case "Desktop":
                return $('button=Logout');
            case "Android":
                const selector = 'new UiSelector().className("android.widget.Button")';
                return $(`android=${selector}`);
        }
    }

    get flashMessage(){
        switch(process.env.OS){
            case "Desktop":
                return $('div[id="flash"]');
            case "Android":
                const selector = 'new UiSelector().className("android.widget.TextView")';
                return $$(`android=${selector}`)[1];
        }
    }



    async enterLoginDetails(username, password){
        await this.usernameInput.addValue(username);
        await this.passwordInput.addValue(password);
        await this.loginButton.click();
    };

    async getFlashText(){
        return this.flashMessage.getText();
    };
}

module.exports = new LoginPage();