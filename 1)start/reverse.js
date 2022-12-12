// var reverseString = function(s) {
//     let a=[];
//     while(s.length){
//     a.push(s.pop());
//     }
// return a;
// };
// console.log(reverseString(["h","e","l","l","o"]));


// var reverseString = function(s) {
//     let a=[];
//     for(let i=0;i<s.length;i++){
//     a[s.length-i-1]=s[i];
//     }
// return a;
// };
// console.log(reverseString(["h","e","l","l","o"]));


var reverseString = function(s) {
    for (let i = 0; i < s.length/2; i++) {
        let n = s[i]
        s[i] = s[s.length-i-1]
        s[s.length-i-1] = n
    }
    return s;
};
console.log(reverseString(["h","e","l","l","o"]));