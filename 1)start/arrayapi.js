
let arr=[1,2,"puja","ram",100,20];
arr.pop();                                   //[ 1, 2, 'puja', 'ram', 100]
arr.push("vishal");                          //[ 1, 2, 'puja', 'ram', 100, 'vishal' ]
arr.unshift("ketan");                        //[ 'ketan', 1, 2, 'puja', 'ram', 100, 'vishal' ]
arr.shift();                                 //[ 1, 2, 'puja', 'ram', 100, 'vishal' ]
console.log(arr)
console.log(arr.indexOf("ram"))              // 3
console.log(Array.isArray("puja"));          //false;
console.log(Array.isArray(arr));          //true;