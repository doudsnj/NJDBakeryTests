var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('https://thrivemarket.com/myaisle/');

driver.wait(until.elementLocated(By.className('u3ktzs-8 dfZQoS')), 10000, 'Could not locate item in timeframe specified')(function () {
    driver.findElement(By.className('u3ktzs-8 dfZQoS')).sendKeys('aip\n');
});

// driver.sleep(1000).then(function () {
//     driver.findElement(By.className('u3ktzs-8 dfZQoS')).sendKeys('aip\n');
// });

driver.sleep(2000).then(function () {
    driver.getTitle().then(function (title) {
        console.log('title is', title);
        if (title === 'Search results for: aip - Thrive Market') {
            console.log('Test passed');
        } else {
            console.log('Test failed');
        }
        driver.quit();
    });
});