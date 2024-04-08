const { $ } = require('@wdio/globals')
const Page = require('./herokupage');

class ChallengeDomPage extends Page  {

    get content(){
        return $('div[id="content"]'); 
    }

    get table(){
        return $('table');
    }

    async findTableRowOfElement (cellvalue) {
        let rowIndex;
        const rows = await this.table.$$('tr');
        for(let row of rows)
        {
            let rowText = await row.getText();
            if(rowText.includes(cellvalue))
            {
                rowIndex = rows.indexOf(row);
                break;
            }
        }
        return rowIndex.toString();
    }

    async findTableColumnHeaderOfElement(cellvalue) {
        let columnIndex;
        const selectedCell = await this.table.$('td='+ cellvalue +'');
        const cellRowElements = await selectedCell.parentElement().$$('td');
        for(let element of cellRowElements)
        {
            let elementText = await element.getText();
            await console.log(elementText);
            if(elementText.match(cellvalue))
            {
                columnIndex = cellRowElements.indexOf(element);
                console.log(columnIndex);
                break;
            }
        }
        await console.log(columnIndex);
        return this.table.$$('th')[columnIndex].getText();
    }
}

module.exports = new ChallengeDomPage();