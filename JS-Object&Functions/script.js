//****************************************************************************************************************
/*
let person=function(name,yearofbirth,job){
    this.name=name;
    this.yearofbirth=yearofbirth;
    this.job=job;
  
}


person.prototype.calculateAge=function(){

    return 2020-this.yearofbirth;

}




let Teacher=function(name,yearofbirth,job,subject){

        //call fonksiyonu ile person constructor unu teachere inherit ediyoruz,this objesi ile alıyoruz
    person.call(this,name,yearofbirth,job)//persondan ürwtilecek nesneyi this ile temsil edeceğiz
    this.subject=subject;
}

Teacher.prototype=Object.create(person.prototype);
//set teacher constructor
Teacher.prototype.contructor=Teacher;


let aslı=new Teacher('aslı',1996,'student','biyoloji');
let sıla=new Teacher('sıla',2003,'engineer','matematik');

console.log(aslı);
console.log(aslı.calculateAge());
console.log('**********************')
console.log(sıla)
console.log(sıla.calculateAge());
 
*/


//****************************************************************************************************************



// function person(name){

//     this.name=name;
// }
// function Teacher(name,branch){

//     person.call(this,name);
//     this.branch=branch;

// }
// function student(name,number){
//     person.call(this,name);
//     this.number=number;
// }
// person.prototype.introduce=function(){

//     console.log('hello my name is ' +this.name);

// }
// Teacher.prototype.teach=function(){

//     console.log('ı teach ',  +this.branch)

// }
// student.prototype.study=function(){

// console.log('my student number is:' +this.number)

// }




// Teacher .prototype=Object.create(person.prototype);//böyle yapıncapersonun prototypı teachera eşitlenir ve constructorlar da eşitlenir 
// Teacher.prototype.constructor=Teacher;//bu yüzden bunu yapıypruzki teacherın constructoru cıksın
// student.prototype=Object.create(person.prototype);
// student.prototype.constructor=student; 


// let p1=new person('aslı');
// p1.introduce();

// let t1=new Teacher('esra','math');
// t1.introduce();
// t1.teach();


// let s1=new student('sıla','1000');
// s1.introduce();
// s1.study();



//callback functions

// let val;

// function multiplebytwo(a,b,c,callback){
//     let arr=[];
//     if(callback && typeof callback==='function'){
//     for(let i=0;i<3;i++){
//         arr[i]=callback(arguments[i]*2);
//     }
//     return arr;
// }
// }

// function addone(a){

//     return a+3;
// }

// // val=multiplebytwo(10,23,45,addone);

// val=multiplebytwo(2,3,4,function(a){//anymous function yani bikere orda tanımlanıp kullanmak için
//     return a*3;
// })
 
// console.log(val);









// function welcome(name){
//     var days=['pazartesi','salı','çarşamba','perşembe','cuma','cumartesi','pazar'];
//     var today=new Date();
//     var msg='welcome ' +name+' today is ' +days[today.getDay()];
//     return msg;

// }

// console.log(welcome('aslı '));



//immidiate function

// (function(name){

//     var days=['pazartesi','salı','çarşamba','perşembe','cuma','cumartesi','pazar'];
//     var today=new Date();
//     var mesaj='welcome ' +name+' today is '+days[today.getDay()];
//     return mesaj;
//     console.log(mesaj);

// }('esra'));



// getter setter

// const person={
//     name:'aslı',
//     surname:'ucar',
//     get fullname(){
//         return `${this.name} ${this.surname}`
//     },
//     set fullname(value){
//         const parts =value.split('  ');
//         this.name=parts[0];
//         this.surname=parts[1];

   
//     }
// }
// person.fullname='ogüz  uçar'
// console.log(person.fullname);
// console.log(person);







// var welcome=function(a,b){
//     console.log('welcome ' + this.name +' are you interest in ' + a +' and' + b);
// }


// var aslı={
//     name:'aslı'
// };
 
// welcome.call(aslı,'asdf','asdf')

// welcome.apply(aslı,['tryfgjhk','vghjbknlm'])





// welcomeada=welcome.bind(aslı);
// welcomeada('sdfghjk','sdfgfgn')













// person.prototype.lastname='esra';
// person.prototype.calculateAge=function(){
//     return 2020-this.yearofbirth;
// }
// person.prototype.getname=function(){
//     return this.name;
// }

// let aslı=new person('aslı',1996,'computer engineer');
// console.log(aslı);
// console.log(aslı.calculateAge());
// console.log('***********************');
// console.log(aslı.getname());
// console.log(aslı.hasOwnProperty('lastname'));











// var num={
//     min:0,
//     max:100,
//     checknumericrange:function(value){
//         if (typeof value!=='number'){
//             return false;
//         }
//         else{
//             return value>=this.min&&value<=this.max;
//         }
//     }
// }

// // console.log(num.checknumericrange(40));
// // console.log(num.checknumericrange(-20));

// var num1={
//     min:50,
//     max:65
// };

// console.log(num.checknumericrange.call(num1,65))
// console.log
// (num.checknumericrange.apply(num1,['50']))

// aslı=num.checknumericrange.bind(num1);
// console.log(aslı(34))

// const user={
//     name:'aslı uçar'
// }
// try {
//     console.log(user.name)
// if(!user.email){
//     throw new SyntaxError('user has not an email');
// }
// } catch (e) {
//     console.log(e);
//     console.log(e.message);
//     console.log(typeof e);
//     console.log(e.name);
//     console.log();

// }
// const btnclick=document.querySelector('#mybtn');


// function eventlistener(){
//     btnclick.addEventListener('click',btnclicked);
// }
// function btnclicked(){
//     console.log('btn clicked');
// }


