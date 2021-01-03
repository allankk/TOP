var events = require('events');
var eventEmitter = new events.EventEmitter();

// create an event handler:
var myEventHandler = function() {
    console.log('I hear a scream!');
}

// Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

// fire the scream event
eventEmitter.emit('scream');