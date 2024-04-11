const { $ } = require('@wdio/globals')
const Page = require('./herokupage');

class ChallengeDomPage extends Page  {

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

    get table(){
        switch(process.env.OS){
            case "Desktop":
                return $('table');
            case "Android":
                const selector = 'new UiSelector().className("android.widget.GridView")';
                return $(`android=${selector}`);
        }
    }

    async getRowsOfTable(){
        let rows
        switch(process.env.OS){
            case "Desktop":
                rows = await this.table.$$('tr');
                return rows;
            case "Android":
                const selector = 'new UiSelector().className("android.view.View").text("")';
                rows = await this.table.$$(`android=${selector}`);
                return rows; 
        }
    }

    async getCellsOfRow(row){
        let cells
        switch(process.env.OS){
            case "Desktop":
                cells = await row.$$('td');
                return cells;
            case "Android":
                const selector = 'new UiSelector().className("android.view.View")';
                cells = await row.$$(`android=${selector}`);
                return cells; 
        }
    }

    async getAllCellsInRow(cellValue){
        let allCells;
        const selectedCell = await this.getSpecificCell(cellValue);
        const selectedCellText = await selectedCell.getText();
        await console.log(selectedCellText);
        const cellRow = await selectedCell.$('..');
        switch(process.env.OS)
        {
            case "Desktop":
                allCells = await cellRow.$$('td')
                return allCells;
            case "Android":
                const selector = 'new UiSelector().className("android.view.View")';
                allCells = await cellRow.$$(`android=${selector}`);
                return allCells;
        }
    }

    async getSpecificCell(cellValue){
        let cell;
        await console.log("to confirm, cell value: "+ cellValue);
        switch(process.env.OS){
            case "Desktop":
                cell = await this.table.$('td='+ cellValue +'');
                return cell;
            case "Android":
                const selector = 'new UiSelector().className("android.view.View").text("'+cellValue+'")';
                cell = await this.table.$(`android=${selector}`);
                return cell;
        }
    }

    async tableHeader(){
        switch(process.env.OS)
        {
            case "Desktop":
                return 'th';
            case "Android":
                const selector = 'new UiSelector().className("android.view.View")';
                return `android=${selector}`.toString();
        }
    }





    async findRowIndexOfCell (cellValue) {
        let rowIndex;
        const rows = await this.getRowsOfTable();
        for(let row of rows){
            let itemFound;
            const cells = await this.getCellsOfRow(row);;
            for(let cell of cells){
                let cellText = await cell.getText();
                if(cellText.match(cellValue)){
                    itemFound = "true";
                    break;
                }
                else{ 
                    itemFound = "false";
                }
            }
            if(itemFound == "true"){
                rowIndex = rows.indexOf(row);
                break;
            }
        }
        return rowIndex.toString();
    }


    async findColumnIndexOfCell(cellValue) {
        let columnIndex;
        const fullRow = await this.getAllCellsInRow(cellValue);
        for(let cell of fullRow)
        {
            let cellText = await cell.getText();
            if(cellText.match(cellValue))
            {
                columnIndex = cellRowElements.indexOf(element);
                break;
            }
        }
        return columnIndex;
    }


    async getColumnHeaderTitle(cellValue){
        console.log(cellValue)
        const index = await this.findColumnIndexOfCell(cellValue);
        switch(process.env.OS)
        {
            case "Desktop":
                return this.table.$$(this.tableHeader)[index].getText();
            case "Android":
                const headerRow = await this.table.$(this.tableHeader);
                const selector = 'new UiSelector().className("android.view.View").index('+index+')';
                return headerRow.$(`android=${selector}`).getText();
        }
    }
}

module.exports = new ChallengeDomPage();