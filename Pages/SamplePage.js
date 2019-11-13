function sample() {


    var excelAction = require("../ExcelUtlity/excel.js");
    var pageObjects=require("../PageObjects/SamplePageObjects.js");


    this.doCalculation=async function () {


        await excelAction.readexcel(2,2).then(function (item) {
            pageObjects.firstBox.sendKeys(item.value);
        });

        await excelAction.readexcel(3,2).then(function (item) {
            pageObjects.secondBox.sendKeys(item.value);

            });


            await pageObjects.goButton.click();
            await browser.sleep(2000);





    }
}

module.exports=new sample();