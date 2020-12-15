// var age;
// age=21;
// console.log(age);
// var aslı='aslıgül uçar';
// console.log(aslı);
// aslı='sıla';
// console.log(aslı);
// const email='asb@gmail.com';
// console.log(email);
// age=24;

// //ARRAY
// let names=['aslı','esra','sıla','oğuz'];
// //OBJECT
// let adress={

//     city:'istanbul',
//     country:'türkiye'

// }
// //function
// var calculate=function(){
//     return 0;
// }

// console.log(typeof calculate);


// let num1=Number('14');
// let num2=Number('34');

// let total=num1+num2;
// console.log(total);

// console.log(typeof total);


// val=String(new Date().getMonth());

// val=String([1,2,3,4]);
// console.log(val);
// console.log(typeof val);



// val=(false).toString();
// console.log(typeof val);

// val=Number(true);
// val=Number('10');
// // val =Number(false);
// console.log(typeof val);
// console.log(val);



// var age=1932;

// console.log(new Date().getFullYear()-age);
//  var a=5;
//  var b=7;

//  val=(a>b)&&(a<b)
//  console.log(val);
//  console.log(typeof val);

// let d=new Date();
// console.log(d.getDate());

// console.log(typeof d);
// console.log(d);
// let d=new Date();
// let birthday=new Date(1996,2,1);
// d.setDate(1);
// d.setMonth(10);
// d.setFullYear(2020);

// console.log(d.getFullYear() - birthday.getFullYear());
// console.log(d.getMonth()-birthday.getMonth());
// console.log(d.getDate()-birthday.getDate ());
// console.log("you are ",d.getFullYear()-birthday.getFullYear(),"years old");



// var a=('aslı');
// a=isNaN('10');

// console.log(a);



// var num=10.234567;

// val=num.toFixed(4);
// val=num.toPrecision(5);
// console.log(val);




// var firstname='aslıgfhjklşikj';
// var lastname='ucar';
// let val;

// val=firstname+" "+ lastname;

// val=val.toLocaleUpperCase();
// val=firstname.concat(' ',firstname)
// val=val.length;

// val =val.indexOf('t');
// val=val.substring(2,5);
// val=val.replace('ucar','uçar');


// let hoby='aslı,esra,sıla,ogi';
// val=hoby.split(' , ');

// console.log(val);
// console.log(typeof val);


// var name='aslı';
// var birthdaay=1996;

// let val;

// val=`my name is ${name}  
// I am ${(2020-birthdaay>20)? 'over20':'under 20'}years old`;

//  console.log(val);
//  console.log(typeof val);



// names[2]='2';
// names[3]='oğuz';

// number.push(4);
// mix.unshift(3);
// console.log(mix);
// console.log(typeof names);
// console.log(names[1]);


// let names=['aslı','esra','sıla',];
// let number=[1,2,3,4,5,6];
// let years=[1994,1996,2003,1992,1999];
// let mix=[1,'aslı',null,undefined];

// function over20 (years){
//     let age=2020-years;
//     return age>=20;

// }
// // console.log(over20(2030));
// let val =years.filter(over20);
// console.log(val);





// var name='aslı';
// var age=23;

// if(age>=18 && age<=25){
// console.log(`${name} is a teenager`);
// }   
// else if(age<18 &&age >0){
//     console.log(`${name} is a child`);

// }

// let day;
// switch(new Date().getDay()){

// case 0:
// case 6:
//  day='haftasonu';
//  break;

//  case 1:
//  case 2:
//  case 3:
//  case 4:
//  case 5:
//  day='haftaiçi';
//  break;

 
// }

// console.log(` bugün günlerden ${day}`);






// let person={

//     name : 'aslı',
//     age:24,
//     hobbies:['kitap','voleybol','spor'],
//     address:{
//         city:'malatya',
//         country:'turkey'

//     },
//     getbirthyear :function (){
//         return 2020- this.age;
//     }


// };

// val=person;
// val=person.getbirthyear();
// val=person.address.country;


// console.log(val);




// let people=[

//     {firstname:'sıla',age:24,city:'istanbul'},
//     {firstname:'aslı',age:24,city:'izmir'},
//     {firstname:'esra',age:22,city:'ankara'},
//     {firstname:'zeynep',age:12,city:'denizli'}
// ];

// for(let i=0;i<=people.length;i++){
//     console.log(people[i].age)
// }


// val=people;
// val=people[2];

// console.log(val);
// console.log(typeof val);

// let money=['2000$','30000$','123445','1234'];


// let cars=['bmw','toyota','audi','mercedes'];

// cars.forEach(function(item){

//     console.log(item);

// });
// for(let i in cars){
//     console.log (` ${i} .ci ${cars[i]}'nın değeri: ${money[i]}`)

// }



// function  yashesapla(dogumyili){
//     return 2020-dogumyili;
// }


// function  emekliligekacyilkaldi(dogumyili,isim){
// let yas=yashesapla(dogumyili);
// let emeklilik=65-yas;

// if(emeklilik>0){
//     console.log(`${isim} emekli olmana ${emeklilik} kaldı`);
// }
// else{
//     console.log('zaten emekli oldunuz')
// }

// }

// emekliligekacyilkaldi(1996,'aslı');
// emekliligekacyilkaldi(2003,'sıla');
// emekliligekacyilkaldi(1998,'esra');
// emekliligekacyilkaldi(1968,'aydın')
// emekliligekacyilkaldi(1975,'makbule')
// emekliligekacyilkaldi(2013,'oğuz')


// var b=confirm('Emin misiniz');
// console.log(b);

// val=window.screenX;
// val=window.location.protocol;
// val=window.location.protocol
// console.log(val);

// function yashesapla(dogumyılı){

//     return 2020-dogumyılı;
// }
// console.log(yashesapla(1996));


// function ememklilikhesapla(dogumyili,isim){
//     let yas=yashesapla(dogumyili);
//     let emeklilik=65-dogumyili;

//     if(emeklilik>0){
//         console.log(`${isim} emeklilige ${emeklilik} yıl kaldı`);
//     }
//     else{
//         console.log(`zaten emeklisiniz`);
//     }
// }




// document.querySelector('li:last-child').style.color='blue';
// document.querySelector('li').classList.add('acrive');



// val=document.getElementsByClassName('list-group-item');

// for(let i=0;i<val.length;i++)
// {
//     console.log(val[i].style.color='red');
// }

// const btnDelete=document.getElementById('btndeleteall');

//     btnDelete.addEventListener("click", function(e) {
//         e.preventDefault();
//         let val;
//         val=e;
//         val=e.target;
//         console.log(val);
    
//     });

// const input=document.querySelector('#Textcardbody');
// input.addEventListener('keydown',eventhandler);


// function eventhandler(e){
//     console.log('event type: ' + e.type);
// }


// let val;
// val=document.getElementsByClassName('list-group-item ');

// val[1].style.color='red';
// val[2].style.fontSize='25px';
// for(let i=0; i<val.length;i++){
//     console.log(val[i].textContent='do it')
// }

// val=document.querySelector('.list-group');
// val=list;


// const btn=document.querySelector('#btndeleteall');
// const ul=document.querySelector('#task-list');
//  btn.addEventListener('click' ,function(e){
//      console.log('btn clicked');


//  }) 

// btn.addEventListener('click',btnclick);


// function btnclick(){
//     console.log('btn click');
// }

// btn.addEventListener('click',function(e){
//     let val;
//     val=e;
//     console.log(val);

//     e.preventDefault();
// })

// btn.addEventListener('click',eventhandler);
// ul.addEventListener('click',eventhandler);


// function eventhandler(event){
//     console.log(`event type: ${event.type}`)
// }

// console.log(val);

// let val;

// const firstname=localStorage.setItem('firstname','aslıgül');
// const lastname=localStorage.setItem('lastname','uçar');
// let hobies=['aslı','esra','sıla','oğuz'];

// val=localStorage.getItem('firstname');

// val=localStorage.removeItem('lastname');
// localStorage.setItem('hobies:',JSON.stringify(hobies));
// localStorage.clear();

// val=JSON.parse(localStorage.getItem('hobies'));

// console.log(val);
// console.log(localStorage);


