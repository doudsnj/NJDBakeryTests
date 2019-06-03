//https://codeburst.io/javascript-async-await-with-foreach-b6ba62bbf404

const waitFor = (ms) => new Promise(r => setTimeout(r, ms));
[1, 2, 3].forEach(async (num) => {
    await waitFor(50);
    console.log(num);
});
console.log('Done');

// const start = async () => {
//     await asyncForEach([1, 2, 3], async (num) => {
//         await waitFor(50);
//         console.log(num);
//     });
//     console.log('Done');
// }
// start();