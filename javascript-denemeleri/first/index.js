function renk(a){
    document.getElementById('yazi').style.color=a , button;
    document.getElementById('yazi').style.border= "1 px solid"+ a;

}
function kutugiris(){
     if(document.form.k1.value=='Ara...'){
         document.form.k1.value="";
     }

}
function kutucikis(){
    if(document.form.k1.value==''){
        document.form.k1.value="Ara...";
    }

}
function dogrula() {

    var x = document.forms[form][b1].value;
    if(x == null || x == ""){
        alert("isminizi giriniz");
        return false;
    }
}
var b = document.querySelector('button');

b.setAttribute('name','colorbutton');
b.setAttribute('disabled','')

var x = document.querySelector("a");

if(x.hasAttribute('target')){
    x.setAttribute('target','_self')
};