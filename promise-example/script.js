//TEXT

function gettext(){

    fetch('text.txt')
    .then(response => {

        return response.text();

        }).then(data=>{
            console.log(data)
        }).catch(error=>{
            console.log(error)
        })
}

gettext();

//JSON

function getjson(){
    fetch('product.json')
    .then(response =>{
        return response.json();
    }).then(data=>{
        console.log(data)
    }).catch(error=>{
        console.log(error);
    })
}

getjson();

//EXTERNAL API

function getexternal(){
    fetch('https://randomuser.me/api/?results=15')
    .then(data=>{
       return data.json();
    }).then(users=>{
        var html="";
        console.log(users.length);
        users.results.forEach(user => {
            html+=`
            <div>
            <img src="${user.picture.large}" >
            <div>
            ${user.name.first}
            </div>           
             </div>            
            `;           
        });
        document.querySelector('#users').innerHTML=html;    
    }).catch(error=>{
        console.log(error);
    })
}
getexternal();







function postexternalApı(){
    const url='https://jsonplaceholder.typicode.com/posts';

    var data={
        method:'POST',
        body:JSON.stringify({
            userId:1,
            title:'sample title',
            body:'sample body'
        }),
        header:new Headers({
            'content-type':'application/json'
        })

    };
    fetch(url,data)
    .then(res=>{

        console.log(res);
    })
}
postexternalApı();






