/** 
 On a event in Multi file to get data .. 
//  If we use EventEmitter on two file it's will not work
We have to use One Event on our projects
**/

const EventEmitter = require("events");

class NewEvent extends EventEmitter {
  handleCall() {
    this.emit("handleCall", "We starting new Journey");
  }
}
module.exports = NewEvent;
