exports.config = {
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect:true,
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },

    chromeDriver:'../node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_78.0.3904.70.exe',

    specs: ['../Tests/SampleTest.js'],

    onPrepare : function () {

        var HtmlReporter = require('protractor-beautiful-reporter');
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'Report/screenshots'
        }).getJasmine2Reporter());

browser.waitForAngularEnabled(false);



        browser.driver.manage().window().maximize();






    }


};