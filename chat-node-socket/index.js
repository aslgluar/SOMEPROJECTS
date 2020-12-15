 const express = require('express')

 const app = express ()
 const server = require('http').createServer(app)
 const port = process.env.PORT || 3000
 const io = require('socket.io')(server)
 const path = require('path')

//listening
 server.listen(port,()=>{

   console.log(`server is runnung on port ${port}`)

})
//routing
 app.use(express.static(path.join(__dirname + '/public')));

 //chatroom
 var numuser=0;

 io.on('connection', socket => {

    var adduser=false;

   socket.on('new message' , message => {
      // console.log('from client' , message)
      io.emit('new message' , message)

   })
})


// socket.on('new user',(username) => {

//    if(addUser) return;

//    socket.username=username;
//    ++numuser;
//    addUser=true;
//    socket.emit('login',{

//       numuser:numuser
//    })

// })
// socket.on('typing',() => {
//    socket.broadcast.emit('typing', {
//       username: socket.username
//    })   
// })