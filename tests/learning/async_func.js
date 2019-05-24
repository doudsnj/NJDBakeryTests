const {
    Builder,
    By,
    Key,
    until
} = require('selenium-webdriver');

async function main() {
    let driver = await new Builder()
        .forBrowser('firefox')
        .build();

    await driver.get('http://www.google.com/ncr')

    const element = await driver.findElement(By.name('q'))

    await element.sendKeys('webdriver', Key.RETURN)
    await driver.wait(until.titleIs('webdriver - Google Search'), 1000)

    driver.getTitle().then(function (title) {
        if (title === 'webdriver - Google Search') {
            console.log('Test passed');
        } else {
            console.log('Test failed');
        }
        driver.quit();
    });
}
main()