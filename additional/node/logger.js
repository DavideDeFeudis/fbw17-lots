const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(message) {
        console.log(message);
        this.emit('messageLogged', {
            id: 1,
            url: 'http//:'
        });
    }
}

module.exports = Logger;

// function sum(a, b) {
//     return a + b;
// }

// let something = 0;

// class SomeClass {
//     constructor() {
//         console.log('obj created');
//     }
// }

// module.exports.sum = sum;
// module.exports.something = something;
// module.exports.SomeClass = SomeClass;

// or

// module.exports = {
//     sum: sum,
//     something: something,
//     SomeClass: SomeClass
// }




