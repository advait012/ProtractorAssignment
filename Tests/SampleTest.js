var excelAction = require("../ExcelUtlity/excel.js");
var samplePage = require("../Pages/SamplePage.js");


describe("Writing sample scenario",function () {

    beforeEach(function () {

        excelAction.readexcel(2,1).then(function (item) {
            browser.get(item.hyperlink);
        })
    })

    it("Writing sample test",function () {
        samplePage.doCalculation();

    })
    
    afterEach(function () {
        console.log("Test Case executed");
    })
})