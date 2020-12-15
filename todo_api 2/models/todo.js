const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoschema = new schema({

    issue: String,
    date: String,
    stage: String

});
module.exports = mongoose.model('todo', todoschema);//ilk parametre tablo adı ikincisi ise baz alınacak model adı