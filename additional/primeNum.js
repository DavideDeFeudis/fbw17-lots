// for (let i = 1; i < 11; i++) {
//     for (j = 2; j < i; j++) {
//         console.log(i, j);
//         if (i % j === 0) {
//             console.log(i, j + ' if triggered');
//             // break;
//         }
//         console.log(i, j);
//         console.log('// end inner loop //');
//     }
//     console.log(i, j);
//     console.log('--------------- end outer loop -------------');
// }




// for (let i = 1; i < 11; i++) {

//     for (j = 2; j < i; j++) {
//         if (i % j === 0) {
//             // break;
//         }
//     }
// }


let quoteDatabase = [

    {
        author: 'Jesus Christ',
        quote: 'Ask and you shall receive'
    },

    {
        author: 'Julius Caesar',
        quote: 'Veni, Vidi, Vici'
    },

    {
        author: 'Tony Montana',
        quote: 'Say hello to my little friend!'
    }

]


function quoteGenerator() {
    let randomNr = Math.floor(Math.random() * quoteDatabase.length);
    let quote = quoteDatabase[randomNr];
    console.log(quote.quote);
}
quoteGenerator();