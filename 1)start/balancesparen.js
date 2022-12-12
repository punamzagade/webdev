class Solution

{

  //Function to check if brackets are balanced or not.

  ispar(x)

  {

     let obj={

  "{":"}",

  "(":")",

  "[":"]",

  }

  let stack=[];

  for(let i=0;i<x.length;i++){

    if(x[i]==="(" || x[i]==="{" || x[i]==="["){

      stack.push(x[i]);

    }else if(x[i]!==obj[stack.pop()]){

      return false;

    }

  }

return stack.length===0;

  }


}
const sl=new Solution();
let s="{[]})"
let s1="{[]}"
console.log(sl.ispar(s))
console.log(sl.ispar(s1))
console.log(sl.ispar("[]}"))




//using function


// function v(s){
//     let obj={
//     "{":"}",
//     "(":")",
//     "[":"]",
//     }
//     stack=[];
//     for(let i=0;i<s.length;i++){
//         if(s[i]==="(" || s[i]==="{" || s[i]==="["){
//             stack.push(s[i]);
//         }else if(s[i]!==obj[stack.pop()]){
//             return false;
//         }
//     }
// return stack.length===0;
// }
// console.log(v("{[]}"))
