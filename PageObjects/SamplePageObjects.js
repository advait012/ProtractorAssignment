function pageObjects() {

    this.firstBox=element(by.model("first"));
    this.secondBox=element(by.model("second"));
    this.goButton = element(by.buttonText("Go!"));

}

module.exports=new pageObjects();