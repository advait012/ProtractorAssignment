function sample() {

    var firstBox=element(by.model("first"));
    var secondBox=element(by.model("second"));
    var goButton = element(by.buttonText("Go!"));
    var excelAction = require("../ExcelUtlity/excel.js");


    this.doCalculation=async function () {


        await excelAction.readexcel(2,2).then(function (item) {
            firstBox.sendKeys(item.value);
        });

        await excelAction.readexcel(3,2).then(function (item) {
            secondBox.sendKeys(item.value);

            });


            await goButton.click();
            await browser.sleep(2000);





    }
}

module.exports=new sample();