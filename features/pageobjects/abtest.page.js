const { $ } = require('@wdio/globals')
const Page = require('./herokupage');

class ABTestPage extends Page  {

    get content(){
        return $('div[id="content"]'); 
    }

}

module.exports = new ABTestPage();