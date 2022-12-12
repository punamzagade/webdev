
// // function nextPermutation(arr,n){
// //     let peak;
// // for(let i=n;i>=0;i--){
// // if(i==0){
// //     peak=0;
// // }
// // if(arr[i]>arr[i-1]){
// //      peak=1;
// //      break;
// // }
// // }
// // for(let j=n-1;j>=0;j--){
// //     if(arr[j]>arr[peak-1]){
// // let temp=arr[j];
// // arr[j]=arr[peak-1];
// // arr[peak-1]=temp;
// // break;
// //     }
// // }
// // let start=peak;
// // let end=n-1;
// // while(start<end){
// //     let tem=arr[start];
// //     arr[start]=arr[end];
// //     arr[end]=tem;
// //     start++;
// //     end--;
// // }
// // return arr;
// // }
// // console.log(nextPermutation([3,2,1],3))



// // var nextPermutation = function(arr,n) {
// //     let i=n-2;
// // while(arr[i]>=arr[i+1]){
// //    i--;
// // }
// // if(i>=0){
// //    let j=n-1;
// //    while(arr[i]>=arr[j]){
// //        j--;
// //    }
// //    [arr[i],arr[j]]=[arr[j],arr[i]];
// // }
// // let left=i+1;let right=n-1;
// // if(left<right){
// //    [arr[left],arr[right]]=[arr[right],arr[left]];
// //    left++;
// //    right--;
// // }
// // return arr;
// // };





// function nextPermutation(arr,n)
// {
//     let i, j;
 
//     for (i = n - 2; i >= 0; i--) {
//         if (arr[i] < arr[i + 1]) {
//             break;
//         }
//     }
//     if (i < 0) {
//         arr.reverse();
//     }else {
//         for (j = n - 1; j > i; j--) {
//             if (arr[j] > arr[i]) {
//                 break;
//             }
//         }
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
 
//         let arr1 = arr.slice(i+1, n);
//         arr1.reverse();
//         arr.splice(i+1, n, ...arr1);
//     }
//     return arr;
// }
//     console.log(nextPermutation([3,2,1],3));
 
//     // // Printing the answer
//     // for (let i = 0; i < arr.length; i++) {
//     //     console.log(arr[i]);
//     // }



// // javascript code implementation

// // Function to find the next permutation
// function nextPermutation(arr)
// {
// 	let n = arr.length, i, j;

// 	// Find for the pivot element.
// 	// A pivot is the first element from
// 	// end of sequencewhich doesn't follow
// 	// property of non-increasing suffix
// 	for (i = n - 2; i >= 0; i--) {
// 		if (arr[i] < arr[i + 1]) {
// 			break;
// 		}
// 	}

// 	// Check if pivot is not found
// 	if (i < 0) {
// 		arr.reverse();
// 	}

// 	// if pivot is found
// 	else {

// 		// Find for the successor of pivot in suffix
// 		for (j = n - 1; j > i; j--) {
// 			if (arr[j] > arr[i]) {
// 				break;
// 			}
// 		}

// 		// Swap the pivot and successor
// 		let temp = arr[i];
// 		arr[i] = arr[j];
// 		arr[j] = temp;

// 		// Minimise the suffix part
// 		let arr1 = arr.slice(i+1, n);
// 		arr1.reverse();
// 		arr.splice(i+1, n, ...arr1);
// 	}
// }

// // Driver code

// 	// Given input array
// 	let arr = [ 3,2,1];

// 	// Function call
// 	nextPermutation(arr);

// 	// Printing the answer
// 	for (let i = 0; i < arr.length; i++) {
// 		console.log(arr[i]);
// 	}
	
// // this code is contributed by ksam24000





class User {
    constructor(Username,email,password) {
        this.un = Username;
        this.em =email;
        this.pw= password;
    }
    static count=0;
    static registeredUsers(){
        return `The total registered users are ${User.count}`
     }
        register() {
            User.count++;
            return `${this.un} is now registered`;
        };
       
}

class Member extends User {
    constructor(Username,email,password,memberPackage,td){
        super(Username,email,password);
        this.mpkg=memberPackage;
        this.td= new Date(td);
         this.yr=this.td.getFullYear();
        this.m=this.td.getMonth();
        this.d=this.td.getDay();
            this.packagetilldate = new Date(this.yr,this.m + 1,this.d);
    }
   
    renewMembership(){
        this.yr=this.packagetilldate.getFullYear();
        this.m=this.packagetilldate.getMonth();
        this.d=this.packagetilldate.getDay();
        if(this.mpkg === "Standard package"){
            this.packagetilldate = new Date(this.yr,this.m + 1,this.d)
        }
       else if(this.mpkg === "Yearly package"){
            this.packagetilldate = new Date(this.yr+1,this.m + 1,this.d)    
        }
return `package is validated till the ${this.packagetilldate}`;
    }
    membershipactivetilldate(){
       return this.un + ' subscribed to '+ this.mpkg + ' to ' + this.packagetilldat;
      }
    getPackage(){
        return `${this.un} is subscribed to this ${this.mpkg}`;
    }
}
    const us=new User("veer","verma@gmail.com","veerv","Standard package");
    const mem=new Member("jay","sharma@gmail.com","jays","Yearly package","2-3-2000");
    const mem1=new Member("ram","ram@gmail.com","ram","Standard package","2-3-2000");
    console.log(us.register());                                    
    console.log(mem.register());  
    mem1.register();                                  
    console.log(User.registeredUsers());    
     console.log(mem.getPackage())  
     console.log(mem.renewMembership());
     console.log(mem.membershipactivetilldate());                   
    console.log(us);                                                      
   console.log(mem); 
   console.log(mem1);                                                           
    