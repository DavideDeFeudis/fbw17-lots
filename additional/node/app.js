const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged', arg => {
    console.log('listener called', arg);
});

logger.log('my message');


// const logger = require('./logger');

// console.log(logger);
