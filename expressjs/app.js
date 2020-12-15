const http=require('http');
const express = require('express');
const bodyParser=require('body-parser')

const app=express();

const port='3000';

app.get('/', (req, res) => {
    res.send('haesrdtfyguhıjokp');
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(port, () => {
    console.log(`Server started on port`);
});

