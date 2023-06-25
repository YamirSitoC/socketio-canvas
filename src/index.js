const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');

// Inicailizacion de express 
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// settings 
app.set('port',process.env.port || 3000);

// middlewares

// Sockets 
require('./sockets')(io);

// Archivos estaticos 
app.use(express.static(path.join(__dirname,'public')));
// console.log(__dirname);

// Inicio del servidor 
server.listen(app.get('port'),()=>{
    console.log('Server en el puerto 3000');
});