// 1)usage of this

// inside the object
// let rm= {

// table:"square"

// }

// console.log(rm.table);

// inside the method
// let rm= {

// table:"square",

// methd(){

// console.log(` clean the ${this.table}`);

// }

// }

// rm.methd();

// inside the function
// this.table="square";

// const rm=function(){

// console.log(` clean the ${this.table}`);

// }

// rm.call(this,"soap")

// inside the inner function
// sol(1)
// this.table="square";

// const rm=function(soap){

// let that=this;

// const rm1=function(soap){

// console.log(` clean the ${that.table}`);

// }

// rm1(soap);

// }

// rm.call(this,"soap")

// sol(2)
// this.table = "square";

// const rm = function (soap) {

//  const rm1 = function (soap1) {

//    console.log(` clean the ${this.table} using ${soap1}`);

//  };

//  rm1.call(this, soap);

// rm1.bind(this)(soap);

// };

// rm.call(this, "soap");

// sol(3)
// this.table = "square";

// const rm = function (soap) {

//  const rm1 =(soap1)=> {

//    console.log(` clean the ${this.table} using ${soap1}`);

//  };

// rm1(soap);

// };

// rm.call(this, "soap");

// inside the constructor using function
// let Rm = function (name) {

//    this.table = `${name} table`;

//  }

//  Rm.prototype.clntble=function(soap){

//    console.log(`clean the ${this.table} using ${soap}`);

//  }

// const myrm=new Rm("punam");

// const myrm1=new Rm("puja");

// myrm.clntble("some soap");

// myrm1.clntble("soap");

// inside the constructor using class

// class Rm {

//    constructor(name) {

//        this.table = `${name} table`;

//    }

//    clntble(soap) {

//        console.log(`clean the ${this.table} using ${soap}`);

//    }

// }

// const myrm=new Rm("punam");

// const myrm1=new Rm("puja");

// myrm.clntble("some soap");

// myrm1.clntble("soap");

// Design pattern problem -
// How will you design a Student class which stores the name,age,phone number,board marks of each student.
// Make a constructor to initialize the values.
// Write a function to check whether the student is egligible or not for college.
// If board marks > 40 -> egligible , if less than 40 -> not egligible.Write a function to check this.
// Create 5 students with different names and age.
// Write a function which keep track of the number of students created. Have you heard of static variables.
// Leverage that now.

// class Student{
//     constructor(name,age,phone_number, board_marks){
//         this.n=name;
//         this.a=age;
//         this.p=phone_number;
//         this.b=board_marks;
//         Student.getCount();
//     }
//     static count=0;
//  static getCount(){
//   return (Student.count++);
//  }
//     prnt(){

//         if(this.b<40){
//             return "not eligible"
//         }else{
//             return "eligible"
//         }
//         }
// }

// var obj1=new Student("punam",20,1234567890,60);
// var obj2=new Student("nilesh",19,1234567890,35);
// var obj3=new Student("kamal",21,1234567890,50);
// var obj4=new Student("dipak",20,1234567890,45);
// var obj5=new Student("indu",19,1234567890,30);

// console.log(Student.getCount())
// console.log(obj1.prnt());
// console.log(obj2.prnt())
// console.log(obj3.prnt())
// console.log(obj4.prnt())
// console.log(obj5.prnt())

// class Student{
//     constructor(name,age,board_marks){
//         this.n=name;
//         this.a=age;
//         this.b=board_marks;
//     }
// }
//  Student.prototype.prnt=function(marks){

//     return ((age)=>{
//         if(this.b>marks && this.a>age){
//             return `age ${this.a} is not eligible`
//         }else{
//            return `${this.n} age ${this.a} is eligible`;
//         }
//     })

//     }
// var obj1=new Student("punam",20,60);
// var obj2=new Student("nilesh",19,35);
// var obj3=new Student("kamal",21,50);
// var obj4=new Student("dipak",20,45);
// var obj5=new Student("indu",19,30);

// console.log(obj1.prnt(70)(78));
// console.log(obj2.prnt(20)(28))
// console.log(obj3.prnt(40)(20))
// console.log(obj4.prnt(23)(38))
// console.log(obj5.prnt(90)(18))

// "use strict";
//if single line code no need to write return and curly brackets
//with params and arguments
// var getA=(a)=>a*a;
// console.log(getA(2))

//without params and arguments
// let a=4;
// var getA=()=>a*a;
// console.log(getA())

// var getA=(a,c)=>{
//   return  a*c
// };
// console.log(getA(4,3))

//this with normal function inside the setTimeout function it cant access this keyword because it have own this
//so we cannot access outer value bcz its out of scope.

// var x = function(){
//     var that=this;
//     this.val=1;
//     setTimeout(function(){
//         that.val++;
//         console.log(that.val)
//     },1)
// }
// var x1=new x();

//to overcome this problem we use fat arrow function
//fat arrow function does not have its own "this" so its gonna use his parent this
// No own this bindings
// Arrow functions do not have their own this value. The value of this inside an arrow function is always
// inherited from the enclosing scope.

// var x = function(){
//     this.val=1;
//     setTimeout(()=>{
//         this.val++;
//         console.log(this.val)
//     },10)
// }
// var x1=new x();

//rest operators
var arr = (a, b, ...x) => {
  console.log(a, b, x[0]);
};
arr(1, 2, 3, 6);

// 5) difference betweenn the fat arrow function and normal function

// 1)regular functions,have their own this.but arrow functions do not have their own this.

// 2)  Arguments objects are not available in arrow functions, but are available in regular functions.

// 3) Regular functions created using function declarations or expressions are ‘constructible’ and ‘callable’.              Since regular functions are constructible, they can be called using the ‘new’ keyword. However, the arrow functions are only ‘callable’ and not constructible.

// 4)we can call normal function before define it.But in arrow function we have to define it first then we can call.

// 6)Why was fat arrow

// Arrow functions do not have their own this value.The value of this inside an arrow function is always

// inherited from the enclosing scope.but in norrmal function we cannot access this value from his parent scope.
// because normal function have its own this.

// Instead, this is bound to the parent this. In the case where the arrow function is
// executed in the global context (it has no parent function/scope), this will be bound to
// the global object (window in the browser or globalThis in node).

// This is particularly helpful when you have some function whose this you might need to access
// from within an inner function. For example consider this pattern. (It's a bit contrived, but it shows
// how useful an arrow function can be when you need to access parent this).

//normal function

// var x = function(){

//     var that=this;

//     this.val=1;

//     setTimeout(function(){

//         that.val++;

//         console.log(that.val)

//     },1)

// }

// var x1=new x();

//arrow function

// var x = function(){

//     this.val=1;

//     setTimeout(()=>{

//         this.val++;

//         console.log(this.val)

//     },10)

// }

// var x1=new x();
