var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('https://www.thepaleomom.com/recommended/');


driver.sleep(20000).then(function () {
    driver.findElement(By.partialLinkText('Books')).click();
    console.log('clicked books')

});

driver.sleep(40000).then(function () {
    driver.getTitle().then(function (title) {
        if (title === 'Books - The Paleo Mom') {
            console.log('Test passed');
        } else {
            console.log('Test failed');
        }
        driver.quit();
    });
});