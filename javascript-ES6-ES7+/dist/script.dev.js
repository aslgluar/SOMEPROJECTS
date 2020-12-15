// let phone=[
//     {name:'I phone',prices:3333},
//     {name:'redmi',prices:3456},
//     {name:'huawei',prices:9879},
//     {name:'samsung',prices:4567},
// ]
// let phonees5= phone.map(function(value){
//     return value.prices;
// })
// console.log(phonees5);const arr=[1,2,3,4,5,6,7,8,9];
// let evebes5=arr.filter(function(a){
//     return a%2==0;
// })
// console.log(evebes5);
// let evenes6=arr.filter(a=>a%2==0);
// console.log(evenes6);
// let list={
//     category:'phone',
//     names:['samsung','huawei','hjk','fgchvjbk'],
//     call:function(){
//         this.names.map((name)=>{
//             console.log(`${this.category} ${name}`);
//         });
//     }
// }
// list.call();
//es5
// function Game(){
//     this.live=0;
//     this.addlive=function(){
//         var self=this;
//         this.oneup=setInterval(function(){
//             console.log(++self.live)
//         }),1000000
//     }
// }
// let player=new Game();
// player.addlive();
//es6
// function game(){
//     this.live=0;
//     this.addlive=function(){
//         this.oneup=setInterval(()=>{
//             console.log(++this.live)
//         },1000)
//     }
// }
// let player=new game();
// player.addlive();
//rest parameters
//es6
// function sumes6(...arr){
//    let result=0;
//    arr.forEach(item =>result+=item );
//      return result;  
// }
// console.log(sumes6(23,45,67,90));
// //es5
// function sumes5(){
//     let arr=Array.prototype.slice.call(arguments);
//     let result=0;
//     arr.forEach(function(item){
//         result+=item;
//     });
//     return result;
// }
// console.log(sumes5(10,34,67));
// function isemekli(...years){
//     years.forEach(years=>console.log(2020-years>=65))
// }
// isemekli(1234,2020,1996,1968,1950,1963,1954);
// function ishavelettera(...letter){
//     letter.forEach(letter=>console.log(letter>='a' || letter>='A'))
// }
// ishavelettera('aslı','EsrA','bahadır','canberk','özkan','usame','mustafa','kenan','sümeyye','ilkay',)
// //destructuring
// var a,b,rest;
// [a,b]=[10,20];
// console.log(a);
// console.log(b);
// [a,b,...rest]=[10,30,20,57,78,97,98];
// console.log(a)
// console.log(rest)
// const numbers=[0,1,2,3,4,5,6,7,8,9];
// const[,,two,,,six,seven,,]=numbers;
// console.log(two,six,seven);
// let arr=Array.from('ASLIGÜL UÇAR');
// console.log(arr)
// const product=[
// {name:'samsung',price:3000},
// {name:'huawei',price:4000},
// {name:'redmi',price:7000},
// {name:'phone',price:2000}
// ]
// console.log(Array.from(product,prd=>prd.name))
// console.log(product.filter(prd=>prd.name=='redmi'));
// console.log(product.find(({name})=>name==='phone'));
// let val;
// const number=new Map();
//  number.set(1,'one');
//  number.set(2,'two');
//  number.set(3,'tree');
//  val=number;
//  val=number.get(1);
// val=number.has(2);
// console.log(val);
// for(var [key,value] of number){
//     console.log(key +' = '+ value);
// }
// console.log('----------------')
// number.forEach(function(key,value){
//     console.log(key +' == ' +value)
// })
// for(var value of number.values()){
//     console.log(value)
// }
// var first=new Map([
//     [1,'one'],
//     [2,'two'],
//     [3,'three'],
// ]);
// var second=new Map([
//     [4,'four'],
//     [5,'five'],
//     [6,'six'],
// ]);
// var sırala=new Map([...first,...second]);
// console.log(sırala);
// let myset=new Set();
// myset.add(1);
// myset.add(1);
// myset.add(3);
// myset.add(2);
// myset.add(13);
// myset.add(
//     {a:1,b:2}
// )
// var obj ={a:1,b:2}
// myset.add(obj)
// ;
// console.log(myset);
//  console.log(Array.from(myset))
//  let myset2=new Set([1,2,3,4,5]);
//  console.log(myset2)
//  console.log('*****************')
//  for (let value of myset){
//     console.log(value)
//  }
//  console.log('*****************')
//  for(let [key,value] of myset.entries()){
//     console.log(key,value)
//  }
//  console.log('*****************')
//  for (let item of myset.keys()){
//     console.log(item)
//  }
//  console.log('*****************')
//  console.log('*****************')
//  //intersect
//  var intersect=new Set(Array.from(myset).filter(x=>myset2.has(x)))
//  console.log('---------------------------')
//  var intersect2=new Set([...myset].filter(x=>myset2.has(x)))
//  console.log(intersect2);
//  console.log('---------------------------')
// //difference
// var difference=new Set(...[myset].filter(x=>!myset2.has(x)))
// console.log(difference);
// console.log('---------------------------')
// var difference2=new Set(Array.from(myset).filter(x=>!myset2.has(x)))
// console.log(difference2)
// //es5 
// var persones5=function(name,job,yearofbirth){
//     this.name=name;
//     this.job=job;
//     this.yearofbirth=yearofbirth;
// }
// persones5.prototype.calculateage=function(){
//     return 2020-this.yearofbirth;
// }
// var obj=new persones5('aslı','student',1996);
// console.log(obj);
// //es6 ile gelen classes
// class persones6{
//     constructor(name,job,yearofbirth){
//         this.name=name;
//         this.job=job;
//         this.yearofbirth=yearofbirth;
//     }
//     calculateage2(){
//         return 2020-this.yearofbirth;
//     }
// }
// let obj2=new persones6('esra','student',1998);
// console.log(obj2);
// // static claslar
// class point{
//     constructor(x,y){
//         this.x=x;
//         this.y=y;
//     }
//     static distance(a,b){
//         const dx=a.x-b.x;
//         const dy=a.y-b.y;
//         return Math.hypot(dx,dy);
//     }
// }
// const d1=new point(15,27);
// const d2=new point(23,47);
// console.log('result is :',point.distance(d1,d2))
// //sub classes
// function personES5(firstname,lastname){
//     this.firstname=firstname;
//     this.lastname=lastname;
// }
// personES5.prototype.sayHi=function(){
//     return `hi my name is :${this.firstname} ${this.lastname}`
// }
// function customerES5(firstname,lastname,phone,username){
//     personES5.call(this,firstname,lastname);
//     this.phone=phone;
//     this.username=username;
// }
// customerES5.prototype=Object.create(personES5.prototype);
// var custtomer=new customerES5('sıla','uçar',09876543,'exocu');
// console.log(custtomer.sayHi());
// class personES6{
//     constructor(firstname,lastname){
//     this.firstname=firstname;
//     this.lastname=lastname;
//     }
//     sayHi(){
//         return `hi my name is :${this.firstname} ${this.lastname}`
//     }
// }
// class customerES6 extends personES6{
//     constructor(firstname,lastname,phone,username){
//         super(firstname,lastname);
//         this.phone=phone;
//         this.username=username;
//     }
// }
// let customer=new customerES6('oğuz','uçar',456789,'ogimuu');
// console.log(customer.sayHi());
"use strict";