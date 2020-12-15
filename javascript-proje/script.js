//UI vars
const form = document.querySelector('form');
const input = document.querySelector('#txttaskname');
const btndeleteall = document.querySelector('#btndeleteall');
const tasklist = document.querySelector('#task-list');
const items = ['item2', 'item2', 'item3'];

loaditem();
eventListener();

function eventListener() {

    form.addEventListener('submit', addNewItem);
    btndeleteall.addEventListener('click', deleteallitems);
    tasklist.addEventListener('click', deleteanitem);

}

function loaditem() {

    items.forEach(function (item) {   //herbir items ın içindeki eleman item a kopyalansın
        createnewitem(item);// ve kopyalandığı anda bu fonk ile itemi yani içindekileri ekrana yollamış olucaz

    })

}

//delete all item
function deleteallitems(e) {
    if (confirm('are you sure ?')) {
        // tasklist.childNodes.forEach(function(item){
        //     if(item.nodeType==1){
        //         item.remove();
        //     }
        //  })
        while (tasklist.firstChild) {//içinde first child yani eleman oldugu sürece silme işlemi yap null oldugu anda zaten hepsi silinmiş demektir
            tasklist.removeChild(tasklist.firstChild);
        }
    }

    e.preventDefault();
}
//delete item
function deleteanitem(e) {
    if (e.target.className == 'fas fa-times') {
        e.target.parentElement.parentElement.remove();
    }
    e.preventDefault();
}

function createnewitem(text) {
    //create li
    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary ';
    li.appendChild(document.createTextNode(text));

    //create a
    const a = document.createElement('a');
    a.classList = ' delete-item float-right';
    a.setAttribute('href', '#');
    a.innerHtml = '<i class="fas fa-times"></i>';

    //add a to li
    li.appendChild(a);
    //add li to ul
    tasklist.appendChild(li);
}

//add new item
function addNewItem(e) {

    if (input.value === '  ') {
        alert('add new item ');
    }
    //create item

    createnewitem(input.val)



    input.value = ' ';

    e.preventDefault();
}




function loadıtem() {

}