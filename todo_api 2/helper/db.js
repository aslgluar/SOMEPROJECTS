const mongoose=require('mongoose')

module.exports = () =>{

    mongoose.connect("mongodb://127.0.0.1:27017/testTodoApiDb",{useMongoClient: true });

    mongoose.connection.on('open',() =>{

        console.log('mongodb :connected');
    });

    mongoose.connection.on('error',(err)=>{

        console.log('Mongodb error',err);
    });

    

}