var  express = require('express');

var socket = require('socket.io');

var app = express();

var server= app.listen(8000, () => {

    console.log(`Server started on 8000`);
});

app.use(express.static('public'));


var io =socket(server);

io.on('connection',function(socket){

    socket.on('chat',function(data){
        
        io.sockets.emit('chat',data);

    });
});
