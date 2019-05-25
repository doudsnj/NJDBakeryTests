const {
    Builder,
    By,
    Key,
    until
} = require('selenium-webdriver');

async function main() {
    let driver = await new Builder()
        .forBrowser('chrome')
        .build();

    await driver.get('http://localhost:56887/src/index/index.html')

    const element = await driver.findElement(By.partialLinkText('MEET NADINE'));

    await element.click();
    await driver.wait(until.titleIs('njd bakery - meet-nadine'), 1000)

    driver.getTitle().then(function (title) {
        if (title === 'njd bakery - meet-nadine') {
            console.log('Test passed');
        } else {
            console.log('Test failed');
        }
        driver.quit();
    });
}
main();