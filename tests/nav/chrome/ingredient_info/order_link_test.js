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

    await driver.get('http://localhost:56887/src/ingredients/ingredients.html')

    const element = await driver.findElement(By.partialLinkText('ORDER'));

    await element.click();
    await driver.wait(until.titleIs('njd bakery - index'), 1000)

    driver.getTitle().then(function (title) {
        if (title === 'njd bakery - index') {
            console.log('Test passed');
        } else {
            console.log('Test failed');
        }
        driver.quit();
    });
}
main();