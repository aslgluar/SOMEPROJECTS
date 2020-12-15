const text = 'My followers on Twitter are the best...<3'

let index = 0;

function writetext(){

    document.body.innerText = text.slice(0,index);

    index++;
    if(index > text.length-1) {
        index = 0;
    }
}

setInterval(writetext, 100);