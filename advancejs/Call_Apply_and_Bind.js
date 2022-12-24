
// 1) Write a function and use 'call' to call the function
// 2)Write a program using apply
// 3)Write a program using bind
// 4Create a new object called Student with age 20 , write a function 
// which prints the age of the student from the student object.
// (Dont pass in args. Read from 'this' and use BIND)


// call object in function call using call() with parameters
// var obj={num:2};
// var add=function(a){
//   return this.num+a;           //yaha hmne object ki proprty ko use kia h this ka use krke aur us object ko
//                                 //jb hm =ne function call kia hai usme add kia hai aur vaha se yaha use kr rhe hai.
// }
// console.log(add.call(obj,3));      //functionname.call(object,function arguments)


var obj={num:2};

var add=function(a,b,c){

  return this.num+a+b+c;

}

// console.log(add.call(obj,1,2,3));  //8

// 2)call object in function call using apply() with array instead of passing arguments
  // var arr=[1,2,3];
  // console.log(add.apply(obj,arr));      

// 3)call object in function call using bind().store the function call in the variable 
  // and then using that new variable pass the arguments.(just like function expression)

  var bound=add.bind(obj);
  console.log(bound(1,2,3));

//4) print the student age using bind
var Student={age:25};
var printAge=function(){
  return this.age;
}
  var bound=printAge.bind(Student);
  console.log(bound());


//   Currying in JS

// 1)using bind()
let sum=function(x,y){
console.log(x+y);
}
let sum1=sum.bind(this,10);
sum1(20);
// or
let sum11=sum.bind(this,10,20);
sum11();

//2)using closure
let sum2=function(x){
    return function(y){
        console.log(x+y);
    }
}
let sum3=sum2(12);
sum3(12);
let sum4=sum2(11);
sum4(11);