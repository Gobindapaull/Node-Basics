var events = require('events');
var util = require('util');
var myEvent = new events.EventEmitter();
myEvent.on('some_event', function(text) {
    console.log(text);
});
myEvent.emit('some_event', 'write about your event');


var Cars = function(model) {
    this.Model = model;
}
util.inherits(Cars, events.EventEmitter);

var bmw = new Cars('BMW')
var audi = new Cars('AUDI')
var volvo = new Cars('VOLVO')

var cars = [bmw, audi, volvo];
cars.forEach(function(car) {
    car.on('speed', function(text) {
        console.log(car.Model + text);
    });
});

bmw.emit('speed', '245 km');