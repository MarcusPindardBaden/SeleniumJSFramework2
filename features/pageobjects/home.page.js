const { $ } = require('@wdio/globals')
const Page = require('./herokupage');

class HomePage extends Page  {

    get abLink(){
        return $('a=A/B Testing'); 
    }

    get challengeDomLink() {
        return $('a=Challenging DOM');
    }

    get addRemoveElementsLink(){
        return $('a=Add/Remove Elements');
    }
}

module.exports = new HomePage();