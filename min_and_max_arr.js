
let a=[1,3,10,30];
let min=a[0];
let max=a[0];
for(let i=0;i<a.length;i++){
    if(a[i]>max){
     max=a[i];
    }else if(a[i]<min){
        min=a[i]
    }
    
}
console.log("min = "+min+" and "+"max = "+max)            //min = 1 and max = 30