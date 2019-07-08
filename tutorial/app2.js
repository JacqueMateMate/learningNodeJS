const EventEmitter = require('events'); // require 'event' module, which will create the class EventEmitter
const eventEmitter = new EventEmitter(); // create a new instance of the class EventEmitter 

eventEmitter.on('tutorial', (num1, num2)=> {  //method on it takes two arguments:listener and the funtion that you want to execute
    console.log('tutorial event has occurred', num1+num2);  
}); // the code inside the brackets will be only executed when a tutorial event is emmited

eventEmitter.emit('tutorial',1, 2) // emit a tutorial event


class Person extends EventEmitter{  //exted the emitter class for a personalized class
    constructor(name){
        super();
        this._name = name; 
    }
    get name(){
        return this._name;
    }
}



let pedro = new Person('Pedro');
let Cristina = new Person('Cristina')
pedro.on('name', ()=>{
    console.log('my name is ' + pedro.name)
});

Cristina.on('name', ()=>{
    console.log('my name is ' + Cristina.name)
});


pedro.emit('name') // The emmit events get executes sinchronously  in this case first pedro and then cristina 
Cristina.emit('name')