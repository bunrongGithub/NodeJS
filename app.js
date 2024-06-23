const EventEmitter = require("events");

const customEmitter = new EventEmitter()
customEmitter.on('respnoe' , () =>{
    console.log("data recieved");
})

customEmitter.on('respnoe' , (id , name) =>{
    console.log("data recieved" + name +" with id " + id);
})

customEmitter.emit('respnoe' , "rong" , 24)