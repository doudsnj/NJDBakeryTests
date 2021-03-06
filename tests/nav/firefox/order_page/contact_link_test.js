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

    await driver.get('http://localhost:56887/src/order/order.html')

    const element = await driver.findElement(By.partialLinkText('CONTACT'));

    await element.click();
    await driver.wait(until.titleIs('njd bakery - contact'), 1000)

    driver.getTitle().then(function (title) {
        if (title === 'njd bakery - contact') {
            console.log('Test passed');
        } else {
            console.log('Test failed');
        }
        driver.quit();
    });
}
main();