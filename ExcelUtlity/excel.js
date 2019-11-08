
var excel = require('exceljs');

 function  excelActions(){

    this.readexcel=async function(rowNum,colNum){
        var workbook = new excel.Workbook();
        var getcellvalue =  workbook.xlsx.readFile("./TestData/TestData.xlsx").then(function () {
            var worksheet =  workbook.getWorksheet('Data');
            var row =  worksheet.getRow(rowNum);
            var cellValue= row.getCell(colNum);
            return cellValue;
        })


return getcellvalue;

    }

    this.writeExcel=function(){
        var workbook = new excel.Workbook();
        workbook.xlsx.readFile("./Excel/Auto.xlsx").then(function() {
            var worksheet = workbook.getWorksheet('Master');
            var row =worksheet.getRow(1);
            row.getCell(2).value="sharma";
            row.commit();
            return workbook.xlsx.writeFile("./Excel/Auto.xlsx");


        });

    }

};
module.exports=  new excelActions();