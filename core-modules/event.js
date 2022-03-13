// a Event get data from anther file ....

/** 
 On a event in Multi file to get data .. 
//  If we use EventEmitter on two file it's will not work
We have to use One Event on our projects
**/
const NewEvent = require("./event_other_file");
const ModifyEvent = new NewEvent();

// Call event from another File ...
// Register a event for a handle Call
ModifyEvent.on("handleCall", function (e) {
  console.log(`Hello programmer ${e}`);
});

// emitter.emit("handleCall","We starting new Journey")

ModifyEvent.handleCall();



//// Simple event in one file // const EventEmitter = require('events');
// const emitter = new EventEmitter();
// emitter.on('handleCall', function (e) {
//     console.log(`Hello programmer ${e}`)
// })

// emitter.emit("handleCall","We starting new Journey")
