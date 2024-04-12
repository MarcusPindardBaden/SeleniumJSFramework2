const { $ } = require('@wdio/globals')
const Page = require('./herokupage');

class HomePage extends Page  {

    get abLink(){
        switch(process.env.OS){
            case "Desktop":
                return $('a=A/B Testing');
            case "Android":
                const selector = 'new UiSelector().descriptionMatches("A/B Testing")';
                return $(`android=${selector}`);      
        }
    }

    get challengeDomLink() {
        switch(process.env.OS){
            case "Desktop":
                return $('a=Challenging DOM');
            case "Android":
                const selector = 'new UiSelector().descriptionMatches("Challenging DOM")';
                return $(`android=${selector}`);      
        }
    }

    get addRemoveElementsLink(){
        console.log("process environment: ");
        switch(process.env.OS){
            case "Desktop":
                return $('a=Add/Remove Elements');
            case "Android":
                const selector = 'new UiSelector().descriptionMatches("Add/Remove Elements")';
                return $(`android=${selector}`);
        }
    }

    get formAuthLink(){
        switch(process.env.OS){
            case "Desktop":
                return $('a=Form Authentication');
            case "Android":
                const selector = 'new UiSelector().descriptionMatches("Form Authentication")';
                return $(`android=${selector}`);
        }
    }
}

module.exports = new HomePage();