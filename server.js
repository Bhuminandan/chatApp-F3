// Imports from node modules
const express = require('express');
const socketIO = require("socket.io");
const http = require("http");

// Extracting thing from above modules
const expressServer = express(); // Getting app from express function 
const { Server } = socketIO; // socketIO gives me Server Class,
// this server class takes and http server and gives me an IO

// As the server created express is not proper http 
// that why here we are just adding a http addons to out app server
// by passing it to the createServer funciton with http module that we imported above
const httpserver = http.createServer(expressServer); //
const IO = new Server(httpserver);

// PORT
const PORT = 3300;


// middleware to run my client
expressServer.use(express.static('public'));


// Starting function
function OnstartFuc() {
    console.log("Server is started at localhost:3300");
}

// My server is listening to me on this PORT and 
// Above function is running when server is established
httpserver.listen(PORT, OnstartFuc);


// Whenever someone enters a Username he/she will get a new socket from this function
// .on is just a event lisner type thing for IO and socket, connetion is just like click in 
// Add event listener
IO.on('connection', (socket) => { // connection is predefined syntax
    console.log("Connection exstablished", socket.id);
    // chat message is devloper defined syntax
    // you can write anything here , it is not predefined

    // this is STEP 2
    socket.on('chat message', (data) => {

        //STEP 3
        IO.emit('chat message', data)
    })
    socket.on("disconnect", () => {
        console.log(socket.id, "left the chat");
    })
});



