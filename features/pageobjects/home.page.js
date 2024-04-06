const { $ } = require('@wdio/globals')
const Page = require('./herokupage');

class HomePage extends Page  {

    get abLink(){
        return $('a=A/B Testing'); 
    }
}

module.exports = new HomePage();