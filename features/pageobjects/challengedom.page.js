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
        const selectedCell = await this.getSpecificCell(cellValue);
        const cellRow = await selectedCell.parentElement().$$('td');
        return cellRow;
    }

    async getSpecificCell(cellValue){
        let cell;
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

    async getTableHeaders(){
        switch(process.env.OS)
        {
            case "Desktop":
                return this.table.$$('th');
            case "Android":
                const selector = 'new UiSelector().className("android.view.View")';
                const list = await this.table.$$(`android=${selector}`);
                const falseHeader = await list.shift();
                return list;
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


    async findColumnIndexOfCell(cellValue, rowIndex) {
        let columnIndex;
        const allRows = await this.getRowsOfTable();
        const cellRow = await allRows[rowIndex];
        const rowChildren = await this.getCellsOfRow(cellRow);
            for(let cell of rowChildren)
            {
                let cellText = await cell.getText();
                if(cellText.match(cellValue))
                {
                    columnIndex = await rowChildren.indexOf(cell);
                    break;
                }
            }
        return columnIndex;
    }


    async getColumnHeaderTitle(cellValue, rowIndex){
        const columnIndex = await this.findColumnIndexOfCell(cellValue,rowIndex);
        const headerRow = await this.getTableHeaders();
        await console.log("number of headers"+ headerRow.length);
        const columnTitle = await headerRow[columnIndex].getText();
        return columnTitle;
    }
}

module.exports = new ChallengeDomPage();