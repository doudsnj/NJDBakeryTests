const {
    Builder,
    By,
    Key,
    until
} = require('selenium-webdriver');

const navSetup = [{
        navText: 'HOME',
        navLink: 'http://localhost:56887/src/index/index.html',
        destinationPageTitle: 'njd bakery - index',
    },
    {
        navText: 'PRODUCTS',
        navLink: 'http://localhost:56887/src/products/products.html',
        destinationPageTitle: 'njd bakery - products',
    },
    {
        navText: 'ORDER',
        navLink: 'http://localhost:56887/src/order/order.html',
        destinationPageTitle: 'njd bakery - order',
    },
    {
        navText: 'MEET NADINE',
        navLink: 'http://localhost:56887/src/meet-nadine/meet-nadine.html',
        destinationPageTitle: 'njd bakery - meet-nadine',
    },
    {
        navText: 'INGREDIENT INFO',
        navLink: 'http://localhost:56887/src/ingredients/ingredients.html',
        destinationPageTitle: 'njd bakery - ingredients',
    },
    {
        navText: 'CONTACT',
        navLink: 'http://localhost:56887/src/contact/contact.html',
        destinationPageTitle: 'njd bakery - contact',
    }
]

// async function main() {

//     navSetup.forEach(async link => {
//         let driver = await new Builder()
//             .forBrowser('chrome')
//             .build();

//         await driver.get('http://localhost:56887/src/contact/contact.html');

//         const element = await driver.findElement(By.partialLinkText(link.navText));

//         await element.click();

//         await driver.wait(until.titleIs(link.destinationPageTitle), 1000);

//         driver.getTitle().then(function (title) {

//             if (title === link.destinationPageTitle) {
//                 console.log(`Test passed for ${link.navText}`);
//             } else {
//                 console.log(`Test failed for ${link.navText}`);
//             }

//         });

//     });
//     driver.quit();

// }



async function main() {

    navSetup.forEach(async link => {
        let driver = await new Builder()
            .forBrowser('chrome')
            .build();

        await driver.get('http://localhost:56887/src/contact/contact.html');

        const element = await driver.findElement(By.partialLinkText(link.navText));
        console.log('element.partialLinkText', element.partialLinkText);


        //todo: fix if else
        if (elementNoAWait.classList.contains('nav-menu__link--currentPage')) {
            console.log(`Test passed for ${link.navText}. ${link.navText} is the current page. No link to test.`);
        } else {
            await element.click();
            await driver.wait(until.titleIs(link.destinationPageTitle), 1000);
            driver.getTitle().then(function (title) {

                if (title === link.destinationPageTitle) {
                    console.log(`Test passed for ${link.navText}`);
                } else {
                    console.log(`Test failed for ${link.navText}`);
                }

            });
        }
        console.log('outside of if else');
        driver.quit();
    });
}
main();