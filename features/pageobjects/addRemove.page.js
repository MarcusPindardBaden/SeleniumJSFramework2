const { $ } = require('@wdio/globals')
const Page = require('./herokupage');

class AddRemovePage extends Page  {

    get content(){
        return $('div[id="content"]'); 
    }

    get addButton(){
        return $('button=Add Element');
    }

    get deleteButton(){
        return $('button=Delete');
    }

    get deleteButtons(){
        return $$('button=Delete');
    }

    async countNumberOfDeleteButtons(){
        return this.deleteButtons.length;
    }
}

module.exports = new AddRemovePage();