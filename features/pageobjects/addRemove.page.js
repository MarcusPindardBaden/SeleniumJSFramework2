const { $ } = require('@wdio/globals')
const Page = require('./herokupage');

class AddRemovePage extends Page  {

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

    get addButton(){
        switch(process.env.OS){
            case "Desktop":
                return $('button=Add Element');
            case "Android":
                const selector = 'new UiSelector().className("android.widget.Button").text("Add Element")';
                return $(`android=${selector}`);
        }
    }

    get deleteButton(){
        switch(process.env.OS){
            case "Desktop":
                return $('button=Delete');
            case "Android":
                const selector = 'new UiSelector().className("android.widget.Button").text("Delete")';
                return $(`android=${selector}`);
    }
    }

    get deleteButtons(){
        switch(process.env.OS){
            case "Desktop":
                return $$('button=Delete');
            case "Android":
                const selector = 'new UiSelector().className("android.widget.Button").text("Delete")';
                return $$(`android=${selector}`);
    }
    }

    async countNumberOfDeleteButtons(){
        return this.deleteButtons.length;
    }
}

module.exports = new AddRemovePage();