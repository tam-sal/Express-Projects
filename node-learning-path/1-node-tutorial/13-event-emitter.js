const EventEmitter = require('events')

const customEmitter = new EventEmitter();

//! First we have to respect the order, the first function will add .on for the listener definition, after this had been defined above, below, we start to call or emit this event using instanceOfEvents.emit('<eventName>')

//*--------> .on(custom-event-name, cb) ----> 'on' means when this event name emitted, do cb, basically it's listening to this defined event
//! we can have as many cb functions we want for the same event
//? 1st function
customEmitter.on('response', () => {
  console.log(`data received`)
})

//? 2nd function --> we can even add params to it
customEmitter.on('response', (id, name) => {
  console.log(`userID: ${id} , userName: ${name}`)

})

//*----------> emit the event by its name
customEmitter.emit('response', 13, 'Tamer')