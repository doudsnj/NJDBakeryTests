var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

driver.get('https://www.riversagile.com/');


driver.sleep(20000).then(function () {
    driver.findElement(By.partialLinkText('experienced team')).click();
    console.log('clicked experienced')

});

driver.sleep(30000).then(function () {
    driver.getTitle().then(function (title) {
        if (title === 'Software Developers and Testers Pittsburgh | Rivers Agile') {
            console.log('Test passed');
        } else {
            console.log('Test failed');
        }
        driver.quit();
    });
});