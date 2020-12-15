const express = require("express");
const nunjucks = require("nunjucks");
const bodyParser = require('body-parser');
const Request = require("request");
const _ = require("lodash");
const app = express();

 const port = 3000;
 const hostname='127.0.0.1';


//middleware tanımlamaları
app.use(bodyParser.urlencoded({
    extended: true
}));
const user ={
    mail : "",
    pass : "1111",
    loggedIn : ""
};

//nunjucks tanımlama
nunjucks.configure('views', {
    autoescape: true,
    express: app
});
// static dosyalara erişim(css-js)
app.use(express.static('public'));




app.get('/', (req,res)=> {
    res.render('login.html');
});



app.post('/',(req,res)=> {
    if(req.body.mail != user.mail || req.body.pass != user.pass){
        res.render('login.html');
        user.loggedIn=false;
    }
    else{
        user.loggedIn=true;
        return res.redirect('albums');
    }
});
app.get('/albums', (req,res)=> {

    //request.get ile adrese istekte bulunuyoruz
    Request.get("https://jsonplaceholder.typicode.com/albums/1/photos",(error,response,body) => {
        if(error){
            return console.dir(error);
        }
        //json.parse ile json olan veriyi js olarak doğrudan kullanabiliyoruz
        const kullanici = JSON.parse(body);
        if(user.loggedIn==true)
        res.render('albums.html',{kullanici});
        else
            res.redirect('/');

    });
});

//server yönlendirme
//app.listen(3000);


// //server yönlendirme
 app.listen(port,hostname, () => { 
    
    console.log(`server calisiyor ,http://${hostname}:${port}/`)

 })
